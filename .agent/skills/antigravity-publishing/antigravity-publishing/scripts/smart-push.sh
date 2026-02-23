#!/bin/bash
# AntiGravity Smart Push Script
# Pushes to GitHub with automatic retry and chunked fallback
# Usage: bash scripts/smart-push.sh [remote] [branch]

REMOTE=${1:-origin}
BRANCH=${2:-main}
MAX_ATTEMPTS=5
DELAY=5

echo "🚀 AntiGravity Smart Push"
echo "Remote: $REMOTE | Branch: $BRANCH"
echo ""

# --- Attempt 1: Standard push ---
for attempt in $(seq 1 $MAX_ATTEMPTS); do
    echo "Attempt $attempt/$MAX_ATTEMPTS..."
    if git push -u "$REMOTE" "$BRANCH" 2>&1; then
        echo ""
        echo "✅ Push successful!"
        exit 0
    fi
    echo "❌ Failed. Waiting ${DELAY}s..."
    sleep $DELAY
    DELAY=$((DELAY + 5))
done

echo ""
echo "⚠️  Standard push failed after $MAX_ATTEMPTS attempts."
echo "Trying chunked push strategy..."
echo ""

# --- Fallback: Chunked push ---
# Get list of files in the last commit
COMMIT_MSG=$(git log -1 --pretty=%B)
FILES=$(git diff --name-only HEAD~1 HEAD 2>/dev/null || git ls-files)

# Reset last commit but keep files staged
git reset --soft HEAD~1 2>/dev/null || true

# Split files into ~50KB chunks
CHUNK=1
CHUNK_FILES=""
CHUNK_SIZE=0

while IFS= read -r file; do
    if [ -f "$file" ]; then
        SIZE=$(wc -c < "$file" 2>/dev/null || echo 0)
        CHUNK_SIZE=$((CHUNK_SIZE + SIZE))
        CHUNK_FILES="$CHUNK_FILES $file"
        
        # If chunk exceeds 50KB, commit and push
        if [ "$CHUNK_SIZE" -gt 51200 ]; then
            echo "Pushing chunk $CHUNK ($CHUNK_SIZE bytes)..."
            git add $CHUNK_FILES
            git commit -m "Chunk $CHUNK: $COMMIT_MSG" --allow-empty
            
            for retry in 1 2 3; do
                if git push "$REMOTE" "$BRANCH" 2>&1 | grep -q "$BRANCH"; then
                    echo "  ✅ Chunk $CHUNK pushed"
                    break
                fi
                sleep 5
            done
            
            CHUNK=$((CHUNK + 1))
            CHUNK_FILES=""
            CHUNK_SIZE=0
            sleep 3
        fi
    fi
done <<< "$FILES"

# Push remaining files
if [ -n "$CHUNK_FILES" ]; then
    echo "Pushing final chunk $CHUNK ($CHUNK_SIZE bytes)..."
    git add $CHUNK_FILES
    git commit -m "Final chunk: $COMMIT_MSG" --allow-empty
    
    for retry in 1 2 3; do
        if git push "$REMOTE" "$BRANCH" 2>&1 | grep -q "$BRANCH"; then
            echo "  ✅ Final chunk pushed"
            break
        fi
        sleep 5
    done
fi

echo ""
echo "🎯 Chunked push complete."

# Verify
echo ""
echo "Verifying remote..."
REPO_URL=$(git remote get-url "$REMOTE" | sed 's/git@github.com://' | sed 's/.git$//')
gh api "repos/$REPO_URL/contents/" --jq '.[] | "\(.type)\t\(.name)"' 2>/dev/null || echo "Could not verify (API may be down)"
