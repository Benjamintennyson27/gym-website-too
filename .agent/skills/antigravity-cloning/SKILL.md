---
name: antigravity-cloning
description: >
  Clones a premium dark-mode gym/fitness/service website for a new business.
  Use when the user mentions cloning, replicating, white-labeling, or creating
  a new website version for a different company. Scrapes the target business
  website for real data (logo, staff, tagline, amenities), then assembles a
  single-file HTML website using the AntiGravity template system.
---

# AntiGravity Website Cloning Skill

## When to Use This Skill
- User says "clone this website for [business name]"
- User says "create a new version for [company]"
- User says "white-label this for [brand]"
- User says "replicate the site for another gym / pool company / service business"
- User provides a business name, URL, or lead from a CSV and wants a website built

## Prerequisites
- The base HTML template at `resources/template.html` within this skill folder
- Access to browser tools (for logo grabbing) and web scraping tools (for data extraction)
- The target business must have at minimum: a name and a city/location

## Overview

This skill transforms a single premium website template into a fully branded,
single-file HTML website for any local service business. The output is a
GoHighLevel-compatible HTML file that can be pasted directly into any funnel
builder or hosted standalone.

---

## Phase 1: Gather Business Intelligence

Collect the **8 White-Label Variables** for the target business. Use every
available source: the user's lead CSV, the business website, Google Maps, and
browser scraping tools.

### Required Variables Checklist

Copy this checklist and fill in values as you discover them:

```
- [ ] 1. BUSINESS_NAME        → e.g. "Anytime Fitness Jabalpur"
- [ ] 2. LOGO_URL              → e.g. "https://example.com/logo.png"
- [ ] 3. BRAND_COLOR_PRIMARY   → e.g. "#523CE0" (hex)
- [ ] 4. BRAND_COLOR_HOVER     → e.g. "#3E28B8" (hex, 15% darker than primary)
- [ ] 5. HERO_HEADLINE         → e.g. "Strengthen Everything From Calves to Confidence."
- [ ] 6. HERO_SUBHEADLINE      → e.g. "At Anytime Fitness Jabalpur, the support is real..."
- [ ] 7. SERVICE_TAGS          → e.g. ["24/7 Access", "Personal Coaching", "Zumba"]
- [ ] 8. TRAINERS / STAFF      → Array of {name, role, focus}
- [ ] 9. TESTIMONIALS          → Array of {quote, author, since}
- [ ] 10. PRICING_PLANS        → Array of {name, price, currency, features}
- [ ] 11. PHONE_NUMBER         → e.g. "+91 75660 66601"
- [ ] 12. WHATSAPP_NUMBER      → e.g. "917566066601" (no + or spaces)
- [ ] 13. ADDRESS              → Full street address
- [ ] 14. CITY                 → e.g. "Jabalpur"
- [ ] 15. GOOGLE_MAPS_EMBED    → iframe src URL from Google Maps
- [ ] 16. GOOGLE_RATING        → e.g. "4.6"
- [ ] 17. REVIEW_COUNT         → e.g. "205"
```

### Data Gathering Steps

#### Step 1.1 — Check Lead Database
If a CSV lead database exists in the workspace, search it for the business:
```
grep -i "business name" *.csv
```
Extract: name, address, phone, website URL, Google rating, review count.

#### Step 1.2 — Scrape the Business Website
If the business has a website URL:
1. Use `read_url_content` to fetch the homepage
2. Use `view_content_chunk` to read key sections (About, Team/Staff, Services)
3. Extract:
   - Headline / tagline from hero section
   - Staff/trainer names, roles, specialties
   - List of services or amenities offered
   - Any customer testimonials visible

#### Step 1.3 — Grab the Logo
Use the `browser_subagent` to:
1. Navigate to the business website
2. Find the logo `<img>` element in the header/nav
3. Extract the full `src` URL of the logo image
4. Report the URL back

If the logo cannot be grabbed (no website, or logo is in SVG inline):
- Use a text-based logo fallback in the template (just the business name in bold)
- Inform the user and suggest they provide a logo image file

#### Step 1.4 — Determine Brand Colors
Priority order for choosing the brand color:
1. **From the website** — Use browser devtools or inspect CSS to find the primary accent color
2. **From the logo** — Identify the dominant color in the logo image
3. **Industry default** — If nothing is available, use these sensible defaults:
   - Gym/Fitness: `#FF5E3A` (energetic orange-red)
   - Pool/Cleaning: `#0EA5E9` (clean blue)
   - Salon/Spa: `#D946EF` (elegant purple)
   - Restaurant: `#EF4444` (warm red)
   - General Service: `#10B981` (trust green)

To generate the hover color, darken the primary by 15%:
```js
// Quick darkening formula
// If primary is #523CE0, hover ≈ #3E28B8
```

#### Step 1.5 — Fill Dummy Data for Missing Fields
If any variable cannot be found, use intelligent placeholders:

| Field | Fallback Strategy |
|---|---|
| Trainers/Staff | Use 3 generic names: "Head Coach", "Fitness Specialist", "Wellness Expert" |
| Testimonials | Generate 3 realistic, positive reviews mentioning the business name and city |
| Pricing | Use 3-tier model: ₹1,499 / ₹2,499 / ₹3,999 (or $29 / $49 / $79 for USD) |
| Google Rating | Use "4.5" with "100+" reviews |
| Maps Embed | Search Google Maps for the business name + city, get embed URL |
| WhatsApp | Same as phone number, stripped of spaces and + |
| Hero Headline | "[Business Name] — Your [service] destination in [City]" |

---

## Phase 2: Assemble the Website

### Step 2.1 — Create Output Folder
Create a new folder in the workspace root for the cloned website:
```
mkdir -p "[Business-Name-Folder]"
```
Naming convention: Use the business name with hyphens, e.g., `Anytime-Fitness-Jabalpur/`

### Step 2.2 — Load and Customize the Template
1. Read the base template from `resources/template.html` in this skill folder
2. Perform the following replacements throughout the template:

| Placeholder | Replace With |
|---|---|
| `{{BUSINESS_NAME}}` | Business name |
| `{{LOGO_HTML}}` | Either `<img src="LOGO_URL" alt="LOGO" class="h-10 w-auto brightness-0 invert">` or text fallback `<span class="font-display font-bold text-2xl tracking-tight">NAME</span>` |
| `{{BRAND_PRIMARY}}` | Primary hex color |
| `{{BRAND_HOVER}}` | Hover hex color |
| `{{BRAND_LIGHT}}` | Light variant (add 40% white to primary) |
| `{{BG_COLOR}}` | Background color (default: `#0F0D1A`) |
| `{{SURFACE_COLOR}}` | Surface color (default: `#1A172B`) |
| `{{SURFACE_LIGHT}}` | Surface light (default: `#252240`) |
| `{{HERO_HEADLINE_WHITE}}` | First line of headline (white text) |
| `{{HERO_HEADLINE_GRADIENT}}` | Second line of headline (gradient text) |
| `{{HERO_DESCRIPTION}}` | Sub-headline paragraph |
| `{{CTA_TEXT}}` | Primary CTA button text (e.g., "Try Us For Free", "Get A Free Quote") |
| `{{SERVICE_TAGS}}` | Comma-separated service tags for badges |
| `{{GOOGLE_RATING}}` | Rating number |
| `{{REVIEW_COUNT}}` | Review count |
| `{{ABOUT_HEADLINE_WHITE}}` | About section headline (white portion) |
| `{{ABOUT_HEADLINE_GRADIENT}}` | About section headline (gradient portion) |
| `{{ABOUT_DESCRIPTION}}` | About section paragraph |
| `{{STAT_1_VALUE}}`, `{{STAT_1_LABEL}}` | First stat (e.g., "24/7", "Access") |
| `{{STAT_2_VALUE}}`, `{{STAT_2_LABEL}}` | Second stat |
| `{{STAT_3_VALUE}}`, `{{STAT_3_LABEL}}` | Third stat |
| `{{STAT_4_VALUE}}`, `{{STAT_4_LABEL}}` | Fourth stat |
| `{{AMENITY_N_ICON}}`, `{{AMENITY_N_TITLE}}`, `{{AMENITY_N_DESC}}` | 6 amenity cards (N=1-6) |
| `{{TRAINER_N_IMG}}`, `{{TRAINER_N_NAME}}`, `{{TRAINER_N_ROLE}}`, `{{TRAINER_N_FOCUS}}` | 3 trainer cards (N=1-3) |
| `{{REVIEW_N_QUOTE}}`, `{{REVIEW_N_AUTHOR}}`, `{{REVIEW_N_INITIAL}}`, `{{REVIEW_N_SINCE}}` | 3 review cards (N=1-3) |
| `{{PLAN_N_NAME}}`, `{{PLAN_N_PRICE}}`, `{{PLAN_N_DESC}}`, `{{PLAN_N_FEATURES}}` | 3 pricing tiers (N=1-3) |
| `{{PHONE_NUMBER}}` | Display phone number |
| `{{WHATSAPP_NUMBER}}` | WhatsApp number (digits only) |
| `{{WHATSAPP_MESSAGE}}` | URL-encoded pre-filled message |
| `{{ADDRESS_LINE_1}}` | First line of address |
| `{{ADDRESS_LINE_2}}` | Second line |
| `{{ADDRESS_LINE_3}}` | City, State, PIN |
| `{{GOOGLE_MAPS_EMBED_URL}}` | Google Maps iframe src |
| `{{PAGE_TITLE}}` | Browser tab title |
| `{{META_DESCRIPTION}}` | Meta description for SEO |
| `{{COPYRIGHT_YEAR}}` | Current year |

### Step 2.3 — Write the Output File
Save the fully assembled HTML as `index.html` inside the output folder.

---

## Phase 3: Verify and Deliver

### Step 3.1 — Browser Verification
Use the `browser_subagent` to:
1. Open the generated `index.html` file
2. Scroll through all sections
3. Take screenshots of: Hero, Amenities, Trainers, Contact Form, Footer
4. Verify: logo visible, brand colors applied, all text replaced (no `{{}}` placeholders remaining)

### Step 3.2 — Report to User
Present the user with:
- The file location
- A summary table showing all 8 variables that were customized
- Screenshots from the verification
- Note any fields that used dummy/placeholder data

---

## Quality Checklist (Final Gate)

Before delivering, verify ALL of the following:

```
- [ ] No {{PLACEHOLDER}} tokens remain in the output HTML
- [ ] Logo is visible in both navbar and footer
- [ ] Brand color appears on: CTA buttons, section headers, icon accents, glows
- [ ] All 3 trainer cards have names filled in
- [ ] All 3 testimonial cards have unique quotes
- [ ] Phone number appears in: footer, contact section, WhatsApp button href
- [ ] Address appears in: location section
- [ ] Google Maps embed loads (or placeholder is noted)
- [ ] Page title and meta description are set
- [ ] Mobile menu button exists and has aria-label
- [ ] WhatsApp floating button is in bottom-right corner
```

---

## Resources
- [Base HTML Template](resources/template.html)
- [Example: Anytime Fitness Config](examples/anytime-fitness.json)
