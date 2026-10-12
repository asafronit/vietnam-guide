---
name: Vietnam at a Glance (ויאטנם במבט אחד)
description: Offline Hebrew-first field guide for a Vietnam trip; type and flat framed tiles are the interface.
colors:
  ground: "#ffffff"
  ink: "#15121f"
  ink-2: "#3b3550"
  ink-3: "#4a4560"
  tile: "#b5a1ec"
  tile-pale: "#e8e0fa"
  tile-dark: "#2b2147"
  on-tile-dark: "#ffffff"
  tile-edge: "#2b2147"
  ink-3-tile: "#332d47"
  jade-tile: "#04402f"
  gold-tile: "#453200"
  rose-tile: "#6b1111"
  surface: "#efeafc"
  surface-2: "#e2d9f8"
  peek: "#6f6889"
  amber: "#e2b01c"
  risk-ink: "#e2b01c"
  line: "rgba(21,18,31,.12)"
  line-ctl: "rgba(21,18,31,.55)"
  c-map: "#0369a1"
  c-ride: "#0f7c5c"
  c-book: "#1e3a5f"
  c-video: "#cc0000"
  c-chat: "#6d28d9"
  act-on: "#ffffff"
typography:
  display:
    fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 24vw, 7rem)"
    fontWeight: 200
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  numeral:
    fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial, sans-serif"
    fontSize: "clamp(4.6rem, 25vw, 7rem)"
    fontWeight: 100
    lineHeight: 0.8
    fontFeature: "tnum"
  headline:
    fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 11vw, 3.6rem)"
    fontWeight: 200
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial, sans-serif"
    fontSize: "1.85rem"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "0"
  tile-value:
    fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 7vw, 2rem)"
    fontWeight: 300
    lineHeight: 1.05
    fontFeature: "tnum"
  body:
    fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial, sans-serif"
    fontSize: "0.97rem"
    fontWeight: 400
    lineHeight: 1.55
  body-read:
    fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 300
    lineHeight: 1.65
  label:
    fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0"
spacing:
  tile-gap: "6px"
  tile-pad: "10px 12px"
  gutter: "clamp(15px, 4vw, 28px)"
  section: "26px"
  container: "1140px"
components:
  tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  tile-pale:
    backgroundColor: "{colors.tile-pale}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  tile-dark:
    backgroundColor: "{colors.tile-dark}"
    textColor: "{colors.on-tile-dark}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  action-map:
    backgroundColor: "{colors.c-map}"
    textColor: "{colors.act-on}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
    height: "48px"
  action-ride:
    backgroundColor: "{colors.c-ride}"
    textColor: "{colors.act-on}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
    height: "48px"
  action-book:
    backgroundColor: "{colors.c-book}"
    textColor: "{colors.act-on}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
    height: "48px"
  action-video:
    backgroundColor: "{colors.c-video}"
    textColor: "{colors.act-on}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
    height: "48px"
  action-chat:
    backgroundColor: "{colors.c-chat}"
    textColor: "{colors.act-on}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
    height: "48px"
  action-neutral:
    backgroundColor: "{colors.tile-dark}"
    textColor: "{colors.on-tile-dark}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
    height: "48px"
  station-pick:
    backgroundColor: "{colors.tile-pale}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
    height: "48px"
  station-pick-pressed:
    backgroundColor: "{colors.tile-dark}"
    textColor: "{colors.on-tile-dark}"
  segmented-pressed:
    backgroundColor: "{colors.tile-dark}"
    textColor: "{colors.on-tile-dark}"
    rounded: "{rounded.none}"
  search-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Vietnam at a Glance

Source of truth: `trip-template.html` (the `:root` token blocks and the `<style id="metro">` layer that follows the main stylesheet). `index.html` and `assets/app.js` are build outputs. Recorded 2026-10-11 from the shipped code after the Phase 10 Metro redesign.

**Excluded, protected surface: the entry splash.** `#splash`, the `.sp-*` classes and their own `<style>` block (purple curtain gradient, pill skip button, black title plate, the assemble animation) sit outside this system. The splash is frozen by the user's decision and keeps the pre-Heebo system stack (`#splash{font-family:-apple-system,…}` in the metro layer exists to protect it). Do not restyle it, do not derive tokens from it, and do not apply anything below to it. The countdown logic is likewise preserved; only its tile presentation belongs to this system.

## Overview

**Creative North Star: "The Survey Ledger in Metro Tiles"**

The interface is type and flat colour, nothing else. A white ground carries giant, very thin Heebo words; content lives in flat lilac and purple tiles, each framed by a 3px plum edge, packed on a tight 6px grid. There are no photographs-as-cards, no rounded corners, no shadows and no gradients: the tile is the door, the word is the label, and the frame is the only boundary. It is built for the street first (one hand, tropical sun, an answer in two seconds) and holds up for the evening read, where the place dialog opens into a stack of fact tiles ending in the survey log that makes each record trustworthy.

Density is high but quiet: few colours, one family, big numerals with small key labels, and status carried by shape rather than hue. Colour is reserved for meaning. Plum marks the active or pressed state and the strongest tile; the five locked link colours appear only as filled action tiles; amber appears only for the data-backed heavy-rain flag. Everything else is ink on white or ink on lilac.

The home screen is one page (10-04, 12/10): the plum countdown tile, trip-at-a-glance tiles, FX and official-link tiles, "קרוב אליך" (button only), then every station as a large tile grouped by region. The Now/Plan pivot was removed: on the iPhone it read as text overflowing the page. The h1 is visually hidden. The global underline search stays in the sticky chrome.

**Key Characteristics:**
- White ground, ink #15121f, flat lilac/purple/plum tiles framed 3px plum.
- Heebo only, ultra-thin (100–200) at display sizes, never thinner than 300 below ~32px.
- Zero radius and zero shadow everywhere in the system.
- 6px tile gap; 2-up grids on phones, 4-up from 40rem.
- Locked five-colour action standard, always icon plus word.
- Status is shape (filled / half / hollow), coloured ink.
- Light is the default; dark exists as a toggle and follows `prefers-color-scheme`.

## Colors

A restrained lilac-to-plum tile family on white, ink for all text, with colour reserved for state (plum), action (the locked five) and risk (amber).

### Primary
- **Plum Aubergine** (`tile-dark` / `tile-edge`): the system's anchor. Fills the strongest tile (the countdown, the dish tile, the heavy-rain station tile), every pressed or selected state (segmented buttons, category tabs, station picker, sort options, rail tabs), the neutral action tile and the official-link tiles; and, as `tile-edge`, frames every tile at 3px (`--edge`). Text on it is `on-tile-dark` (white, 14.88:1).

### Secondary
- **Metro Purple** (`tile`): the default tile fill and the active-tab fill. Ink on it is 8.15:1. Grids alternate it with Pale Lilac.
- **Pale Lilac** (`tile-pale`): the second tile fill, alternating with Metro Purple (`.tilegrid` rows 3–4 of every four, odd/even record cards, topic tiles), and the resting state of pickers, category tabs, survey log and empty states.

### Tertiary (risk only)
- **Monsoon Amber** (`amber`, applied through `risk-ink`): exclusively the data-backed heavy-rain flag ("גשם כבד צפוי", the flood-season risk), set at 700 weight on a plum tile (7.41:1). In dark mode `risk-ink` becomes `#453200` because the plum tile turns lavender.

### Action (locked link standard, never recolour)
- **Map Sky** (`c-map`), **Grab Green** (`c-ride`), **Booking Navy** (`c-book`), **Video Red** (`c-video`), **WhatsApp Purple** (`c-chat`). These values are a project standard that predates and outranks this system. They are used only as the fill of action tiles via `--act-fill`, with text in `--act-on` (white in light, `#12101a` in dark). Each class sets its fill: `.act-map`, `.act-ride`, `.act-book`, `.act-video`, `.act-chat`; `.act-neutral` falls back to `tile-dark`. Coloured text on lilac was rejected (Grab green measured 4.40), which is why colour moved to the fill.

### Neutral
- **Night Ink** (`ink`): all primary text, the 2px search underline, and the universal 3px focus ring.
- **Slate Violet** (`ink-2`): secondary text, back button, record "why" lines, survey-log key.
- **Muted Violet** (`ink-3`): counts, captions, subtitles on the ground.
- **Inside-tile ink set** (`ink-3-tile`, `jade-tile`, `gold-tile`, `rose-tile`): darker variants that every framed tile remaps onto `--ink-3`, `--ink-3-card`, `--jade-ink`, `--gold-ink` and `--rose` locally, because the regular values drop below 4.5:1 on Metro Purple.
- **Lilac Surface** (`surface`, `surface-2`): hover fills for chrome buttons, tabs and pickers; not a tile colour.
- **Hairline** (`line`): the stuck-topbar rule and bottom-nav top rule. **Control Line** (`line-ctl`): the border of form controls (3.39:1).

### Dark mode
Both dark blocks are identical (one under `prefers-color-scheme:dark` scoped to `:root:not([data-theme="light"])`, one under `:root[data-theme="dark"]`); any token change must be made in both. Ground `#120e1c`, ink `#f2effa`, `tile` `#3a2d63`, `tile-pale` `#1f1830`, `tile-dark` inverts to lavender `#cbbcf3` with `on-tile-dark` `#15121f`, `tile-edge` `#8a7cc4`, inside-tile set `#b3abc6` / `#3ddba0` / `#f5c542` / `#ec9a8a`, link standard lifts to `#7cc4ff` / `#3ddba0` / `#8fb6e8` / `#ff8a7a` / `#a78bfa`. `peek` is not retuned in dark (`#6f6889`, about 3.6:1 on `#120e1c`), see Don'ts.

### Named Rules
**The Locked Five Rule.** Map, Grab, Booking, video and WhatsApp keep their standard colours in every theme and every surface. They appear as tile fills only, always with an icon and a word, never as text on lilac and never on non-action elements.

**The Plum Means State Rule.** A plum fill says "pressed, selected, or strongest". Use it for the active option in any set and for at most one emphasis tile per group; never as decoration.

**The Amber Is Weather Rule.** Amber exists for one data-backed fact, heavy rain expected, and only on plum. No other warning, highlight or accent may borrow it.

**The Ink Status Rule.** Feasibility and weather percentages are ink, not green/amber/red. Shape and number carry the meaning.

## Typography

**Display Font:** Heebo (local woff2, variable 100–900, three subsets: hebrew, latin, latin-ext), falling back to -apple-system, BlinkMacSystemFont, Segoe UI, Assistant, Arial.
**Body Font:** Heebo (same stack; `--f-display`, `--f-ui` and `--f-body` are identical).

**Character:** One family doing everything, split by weight: hairline-thin giants for words and numerals, regular for reading, medium/semibold for small keys. Vietnamese diacritics outside Heebo's subsets fall back to the system stack by design.

### Hierarchy
- **Numeral** (100, `clamp(4.6rem,25vw,7rem)`, 0.8, tabular): the countdown number in its plum tile. Station index numbers use 100 at `clamp(2.4rem,11vw,3rem)`.
- **Headline** (200, `clamp(2.2rem,11vw,3.6rem)`, 1.02, -0.015em): the h1 of inner screens (topics, category, transfers, saved, info, search). Station hero name uses 200 at `clamp(2.6rem,13vw,4.4rem)`; dialog title 200 at `clamp(2rem,9vw,2.75rem)`; settings title 200 at 2.2rem.
- **Title** (300, 1.85rem): section and region headings on the ground. Tile names 300 at 1.3rem; record card names 300 at 1.32rem; topic numbers 300 at 2rem; weather percentages 300 at 2rem.
- **Tile value** (300, `clamp(1.45rem,7vw,2rem)`, 1.05, tabular): the big value in a fact tile; the small variant in the dialog is 300 at 1.25rem.
- **Body** (400, 0.97rem, 1.55): default text. **Reading body** (300, 1.02rem, 1.65): the dialog's "what" paragraph and the why-tile text (1.05rem, 1.5).
- **Label** (500, 0.8rem): the key above a tile value, counts (0.84–0.86rem, 500), station picker region (0.82rem, 600). Dialog section heads ("למה כאן", the survey log, the dish) are real h3 elements at 600, 0.8rem.

### Named Rules
**The Thin Is Big Rule.** Weights 100 and 200 appear only at roughly 32px and above. Below that the floor is 300 for anything set light; small keys and labels go up to 500–700, never down.

**The Contrast-More Rule.** Under `prefers-contrast:more` every thin-set role (numerals, headlines, titles, tile values, reading body) rises to 400. That block must remain the last rule set in the metro layer; a later rule at equal specificity silently defeats it.

**The Tabular Numbers Rule.** Every numeral in a tile (values, countdown, station index, picker numbers) uses `font-variant-numeric: tabular-nums`. Numeric ranges are bidi-isolated (`bdi` / `.en`).

## Layout

Mobile first at 390px, surviving 320px with 200% text. Page gutter `clamp(15px,4vw,28px)`, container 1140px. The sticky chrome (brand, controls, underline search) sits above everything; a bottom nav carries routes on phones.

Tiles sit on CSS grids with a single 6px gap everywhere: trip-at-a-glance (`.mgrid`) is 2x2 on phones and 4 columns from 40rem, with span-2 tiles returning to full span only at 40rem and up (and to full width below 20rem); station tiles (`.tilegrid`), station picker, dialog facts (`.dfacts`) and dialog actions (`.linkrow`) are two columns, collapsing to one at 22rem; weather rows are three columns, one at 24rem; transfer cards use `repeat(auto-fill, minmax(min(100%,310px),1fr))`. Tile padding is 10px 12px; section headings take 26px above, 10px below.


Breakpoints observed in the system layer: 20rem, 22rem, 24rem, 40rem.

### Named Rules
**The Lone Tile Spans Rule.** In a two-column grid, an odd last tile spans the full row (`.tilegrid`, `.topics`), giving a size hierarchy instead of a hole.

**The min-width:0 Rule.** Every grid child and every flexible text container sets `min-width:0` (and `overflow-wrap`) so long Latin addresses and enlarged text cannot push past 320px.

## Elevation & Depth

The system is completely flat: `--shadow:none`, no gradients (`--primary-2` equals `--primary-fill` on purpose), no blur. Depth is expressed by fill value (ground, pale lilac, purple, plum) and by the 3px plum frame. The floating dialog gets a frame, not a shadow: `.sheet` uses a 3px `tile-edge` border, and `--shadow-lg` is a 1px line ring (`0 0 0 1px rgba(21,18,31,.18)`), never a blur. Hover on framed tiles thickens the frame with a 2px `tile-edge` outline at offset 0.

### Named Rules
**The Line Not Shadow Rule.** Anything that needs separation from the ground gets a hairline or the plum frame. No `box-shadow` with blur or offset exists in the system.

## Shapes

Square everything: `--r`, `--r-sm` and `--r-xs` are all 0, and every metro component restates `border-radius:0`. Tiles, buttons, tabs, dialog, inputs, search, thumbnails, status marks and station dots are rectangles. The one sanctioned exception is the map: Leaflet markers and their focus circles stay round because they are geographic information.

Every content tile carries `border:var(--edge) solid var(--tile-edge)` (3px): `.mt`, `.tile`, `.pcard`, `.rcard`, `.near-st`, the home near rows, `.wx`, `.cat-tab`, topics, facts, transfer cards and tickets, empty states, the why tile, the dish tile and the survey log. Side stripes are not used; where the old design had a coloured side bar (rail current item, why box) the frame replaced it.

## Components


### Tiles
- **Shape:** square, framed 3px `tile-edge`, padding 10px 12px, content spaced between top and bottom.
- **Fills:** `tile` (default), `tile-pale` (alternate), `tile-dark` (strongest / state). Inside any tile the ink set is remapped to the `*-tile` variants.
- **Metro tile (`.mt`):** key label (0.8rem 500) and a big thin value; min height 5.25rem (4.75rem in dialog facts). Variants: countdown (`.mt-count`, plum, 9.25rem, the numeral), FX (`.mt-fx`, LTR-isolated amounts), link tile (`.mt-link`, 22px icon, title plus domain, underline on hover).
- **Station tile (`.tile`):** index numeral 100 weight, name 300, count 500; min height 8.5rem; photos hidden. Heavy-rain variant `.tile--risk` turns plum with the amber flag line.
- **Record cards (`.pcard`, `.rcard`):** alternate purple and pale lilac; name 300 at 1.32rem.
- **Hover:** frame plus 2px `tile-edge` outline. **Focus:** 3px ink outline, offset 2px.

### Action tiles (buttons)
- **Shape:** square, no border, min height 48px (64px in the dialog grid), padding 10px 14px, weight 500.
- **Fill:** `--act-fill` from the locked five or plum for neutral/internal (`.qbtn-int`, `.act-neutral`); text `--act-on`.
- **Content:** always an inline SVG line icon (17px, 22px in the dialog grid; stroke 1.6, round caps) plus a word. In the dialog grid the icon sits above the word.
- **Hover:** fill unchanged, word underlined (offset 3px). **Focus:** 3px ink ring.
- **Official links (`.oflink`):** plum tiles, 44px min, underline on hover.

### Chips / Segmented controls / Tabs
- **Segmented (`.seg`):** framed 3px plum on ground; pressed option plum with white text; unpressed hover pale lilac. The pressed option's focus ring switches to `on-tile-dark` at offset -5px so it stays visible on plum.
- **Category tabs (`.cat-tab`):** framed pale lilac tiles, 44px; selected is plum.
- **Transfer sort options:** framed ground tiles; checked is plum.
- **Route tabs (`.tab`):** square, hover lilac surface, current page filled `tile`.

### Inputs / Fields
- **Search (`.searchbox`):** no box. A 2px ink underline on transparent, input at 300 weight 1.05rem; on focus the underline doubles via `box-shadow: 0 2px 0 var(--ink)`. It lives in the sticky chrome on every screen.
- **Selects and swap (transfers):** square, framed 3px plum, ground fill.

### Station picker (signature)
`.near-stlist` is a visible two-column list ordered north to south, grouped by region labels (0.82rem 600, `ink-3`). Each `.near-st` is a pale-lilac framed tile at 48px minimum with a thin numeral (300, 1.25rem, tabular) and the station name (500); hover `surface-2`; pressed (`aria-pressed="true"`) plum. In forced colours it gets a CanvasText border and a Highlight outline when pressed.

### Status mark
`.feas::before` is a 0.7em square with a 2px border in `currentColor`: filled for good, bottom-half filled for fair, hollow for poor. The colour is ink (on-tile-dark inside a risk tile). The percentage and word remain in the accessible name.

### Place detail dialog (signature)
White ground framed 3px plum, square. Order is fixed: header (thin title 200, Latin name 300 in `ink-3`, 44px square framed close and copy buttons) then photo, fact tiles (`.dfacts`, 2 columns), the "what" paragraph (reading body), the why tile (purple, h3 key at 600 0.8rem, text 300 1.05rem), the dish tile (plum, white text, dish name 300 1.35rem), the action grid (`.linkrow`, 2 columns, icon over word), then the survey log (`.dlog`, pale lilac, sources and checked date). The survey log closes every record.

### Navigation
- **Top chrome:** ground fill (the old purple header is gone); brand link 500 0.95rem in `ink-2`, square, lilac on hover; icon buttons square and borderless; theme/language segmented control framed in `line-ctl`, pressed plum. A hairline appears under the bar when it is stuck.
- **Bottom nav:** ground, hairline top rule; current page is ink at 700.
- **Desktop rail:** current item pale lilac with a plum frame; selected rail tab plum.

### Focus and forced colours
One ring for the whole system: `outline: 3px solid var(--ink)`, offset 2px, radius 0; inset (-3px) where the element sits in an overflow container or a tight tab row. Under `forced-colors:active`, tiles get a 1px CanvasText border, borderless buttons (`.btn-near`, `.lbtn`, `.qbtn`, `.oflink`, `.backbtn`, `.mt-link`) get a 1px ButtonText border, and selected/pressed controls get a 3px Highlight outline.

## Do's and Don'ts

### Do:
- **Do** put new content in framed tiles: `tile` or `tile-pale` fill, `border:var(--edge) solid var(--tile-edge)` (3px), padding 10px 12px, 6px grid gap, radius 0.
- **Do** remap the inside-tile ink set (`--ink-3`, `--jade-ink`, `--gold-ink`, `--rose` onto the `*-tile` tokens) on any new tile class.
- **Do** use plum (`tile-dark` with `on-tile-dark`) for the pressed or selected option in any set.
- **Do** build every action as a filled tile from `--act-fill`/`--act-on` with an SVG icon and a word.
- **Do** set thin weights (100–200) only at about 32px and up, and add every new thin role to the `prefers-contrast:more` block, which stays last in the layer.
- **Do** use the single 3px ink focus ring, and give every borderless control a ButtonText border under forced colours.
- **Do** carry status as shape plus number in ink (filled / half / hollow).
- **Do** change dark tokens in both identical dark blocks.

### Don't:
- **Don't** recolour, tint or reuse the five link colours (`c-map`, `c-ride`, `c-book`, `c-video`, `c-chat`) for anything but their actions, and don't put them on text over lilac.
- **Don't** use `border-radius` other than 0, except Leaflet's round map markers.
- **Don't** use blurred or offset shadows, gradients or side-stripe accents; separation is the plum frame or a hairline.
- **Don't** use amber for anything but the data-backed heavy-rain flag, and only on plum.
- **Don't** colour status green, amber or red.
- **Don't** set text thinner than 300 below about 32px.
- **Don't** move the search out of the sticky chrome.
- **Don't** touch the splash (`#splash`, `.sp-*`) or derive styles from it.
- **Don't** treat the dark-mode `peek` value (`#6f6889` on `#120e1c`, about 3.6:1) as settled; it was never retuned for dark and should be lifted rather than copied.

### Vietnamese stickers (10-05)
The splash illustrations (`assets/splash/hat|lantern|boat|lotus|pho.webp`, already precached) reappear as stickers, one or two per screen: home gets the lantern hanging from the countdown tile and the hat beside "הטיול במבט"; each station gets its own motif crossing the bottom edge of the hero photo (Hoi An lantern, Ha Long boat, Hanoi pho, Hue hat, Da Lat lotus…); topics/category pho, transfers boat, saved lotus, info hat. They are the only full-colour illustration in the system and stay decoration: `alt=""` plus `aria-hidden`, `pointer-events:none`, absolute in reserved inline-end padding sized in px (they must not grow with text zoom). Rule: a sticker never sits on text. `stickerFit` hides any sticker whose box meets a text line, re-checked by ResizeObserver, `document.fonts.ready` and resize. No shadow, matching the flat system.
