#!/bin/bash
# AntiGravity Pre-Flight Check Script
# Run this before any GitHub/Vercel publishing operation
# Usage: bash scripts/preflight.sh

set -e
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'
PASS=0
FAIL=0

echo "🚀 AntiGravity Publishing Pre-Flight Check"
echo "============================================"
echo ""

# --- Check 1: Homebrew Git ---
echo -n "1. Homebrew Git: "
GIT_PATH=$(which git 2>/dev/null)
GIT_VER=$(git --version 2>/dev/null)
if echo "$GIT_PATH" | grep -q "homebrew"; then
    echo -e "${GREEN}✅ $GIT_VER ($GIT_PATH)${NC}"
    ((PASS++))
else
    echo -e "${RED}❌ System git detected: $GIT_PATH${NC}"
    echo "   Fix: brew install git"
    ((FAIL++))
fi

# --- Check 2: Curl SSL Backend ---
echo -n "2. Curl SSL: "
CURL_VER=$(curl --version 2>/dev/null | head -1)
if echo "$CURL_VER" | grep -qi "openssl"; then
    echo -e "${GREEN}✅ Using OpenSSL${NC}"
    ((PASS++))
elif echo "$CURL_VER" | grep -qi "libressl"; then
    echo -e "${YELLOW}⚠️  Using LibreSSL (may cause issues with large uploads)${NC}"
    BREW_CURL="/opt/homebrew/opt/curl/bin/curl"
    if [ -f "$BREW_CURL" ]; then
        echo "   Homebrew curl available at: $BREW_CURL"
        ((PASS++))
    else
        echo "   Fix: brew install curl"
        ((FAIL++))
    fi
else
    echo -e "${GREEN}✅ $CURL_VER${NC}"
    ((PASS++))
fi

# --- Check 3: GitHub CLI ---
echo -n "3. GitHub CLI: "
if gh auth status 2>&1 | grep -q "Logged in"; then
    GH_USER=$(gh auth status 2>&1 | grep "account" | awk '{print $7}')
    echo -e "${GREEN}✅ Authenticated as $GH_USER${NC}"
    ((PASS++))
else
    echo -e "${RED}❌ Not authenticated${NC}"
    echo "   Fix: gh auth login"
    ((FAIL++))
fi

# --- Check 4: GitHub Scopes ---
echo -n "4. GitHub Scopes: "
SCOPES=$(gh auth status 2>&1 | grep "scopes" || echo "")
if echo "$SCOPES" | grep -q "repo"; then
    echo -e "${GREEN}✅ Has 'repo' scope${NC}"
    ((PASS++))
else
    echo -e "${RED}❌ Missing 'repo' scope${NC}"
    echo "   Fix: gh auth refresh -h github.com -s repo"
    ((FAIL++))
fi

# --- Check 5: SSH Key ---
echo -n "5. SSH Key: "
if [ -f "$HOME/.ssh/id_ed25519.pub" ] || [ -f "$HOME/.ssh/id_rsa.pub" ]; then
    echo -e "${GREEN}✅ SSH key exists${NC}"
    ((PASS++))
else
    echo -e "${RED}❌ No SSH key found${NC}"
    echo "   Fix: ssh-keygen -t ed25519 -C 'github' -f ~/.ssh/id_ed25519 -N ''"
    ((FAIL++))
fi

# --- Check 6: SSH GitHub Auth ---
echo -n "6. SSH GitHub: "
SSH_RESULT=$(ssh -T git@github.com 2>&1 || true)
if echo "$SSH_RESULT" | grep -q "successfully authenticated"; then
    echo -e "${GREEN}✅ SSH authenticated${NC}"
    ((PASS++))
else
    echo -e "${RED}❌ SSH not working${NC}"
    echo "   Fix: gh ssh-key add ~/.ssh/id_ed25519.pub --title 'AntiGravity'"
    ((FAIL++))
fi

# --- Check 7: Git Default Branch ---
echo -n "7. Default Branch: "
DEFAULT_BRANCH=$(git config --global init.defaultBranch 2>/dev/null || echo "not set")
if [ "$DEFAULT_BRANCH" = "main" ]; then
    echo -e "${GREEN}✅ main${NC}"
    ((PASS++))
else
    echo -e "${YELLOW}⚠️  '$DEFAULT_BRANCH' (should be 'main')${NC}"
    echo "   Fix: git config --global init.defaultBranch main"
    ((FAIL++))
fi

# --- Check 8: Vercel Token ---
echo -n "8. Vercel Token: "
if [ -n "$VERCEL_TOKEN" ]; then
    echo -e "${GREEN}✅ Token set in environment${NC}"
    ((PASS++))
else
    # Check MCP config
    MCP_CONFIG="$HOME/.gemini/antigravity/mcp_config.json"
    if [ -f "$MCP_CONFIG" ] && grep -q "VERCEL_TOKEN" "$MCP_CONFIG"; then
        echo -e "${GREEN}✅ Token found in MCP config${NC}"
        ((PASS++))
    else
        echo -e "${YELLOW}⚠️  No Vercel token found${NC}"
        echo "   Set VERCEL_TOKEN env var or add to MCP config"
        ((FAIL++))
    fi
fi

# --- Summary ---
echo ""
echo "============================================"
TOTAL=$((PASS + FAIL))
echo -e "Results: ${GREEN}$PASS passed${NC} / ${RED}$FAIL failed${NC} / $TOTAL total"
if [ "$FAIL" -eq 0 ]; then
    echo -e "${GREEN}🎯 All checks passed! Ready to publish.${NC}"
else
    echo -e "${YELLOW}⚠️  Fix the issues above before publishing.${NC}"
fi
echo ""
exit $FAIL
