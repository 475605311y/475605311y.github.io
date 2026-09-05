# Stitch Prompt — emma's space

Paste the block below into [Google Stitch](https://stitch.withgoogle.com/).  
Do not attach photos. The prototype must use empty geometric frames instead of images or avatars.

---

```
Design a high-fidelity desktop prototype (1440×1024) for a personal homepage called "emma's space".

This is a personal portfolio site whose only job is to showcase work. Generate 4 separate screens that share one visual system. The site feels like a cool, futuristic sci-fi cockpit crossed with vaporwave: brushed metallic silver hull, neon signal lights, chrome type, and a faint CRT haze. Think a polished spacecraft dashboard from a dream of the 1980s — not a dark cyberpunk alley, not a corporate SaaS landing page.

## Style DNA

A metallic-silver, sci-fi vaporwave design system. The canvas is brushed metal, not black void and not flat white. Surfaces read as anodized aluminum: soft specular gradients, hairline seams, and a faint horizontal grain. Neon cyan and magenta sit on the metal like instrument lights. Oversized geometric display type, monospace UI labels, perspective grid fragments, and empty chrome frames. Austere, luminous, slightly surreal. Unapologetically cool.

Design pillars:
1. Brushed metal canvas — silver is the environment, neon is the signal
2. Right-rail navigation — a vertical instrument panel, always present
3. Empty chrome frames — no photography, no portraits, no avatars, no stock images
4. Instant hover (50ms) — digital, mechanical, not organic
5. Sci-fi / vaporwave hybrid — chrome, grids, scanlines, sunset-neon accents, never cute, never corporate

Anti-patterns (do NOT do this):
- No photographs, illustrations of people, faces, avatars, or dummy profile pictures
- No Unsplash-style lifestyle imagery
- No dark-mode black void as the main background
- No rounded consumer-app cards, no Material Design, no generic Tailwind SaaS look
- No left sidebar, no top hamburger-only nav on desktop
- No Lorem-ipsum walls; use short, designed copy
- No skeuomorphic cameras or fake printed photos; placeholders are geometric frames with labels only

## Color system

Background is metallic silver. Accent and text were unspecified in the brief — lock them to this palette so the prototype is consistent.

- Canvas / page background: #C5CAD3 brushed metallic silver
- Raised metal panel: #D8DCE4
- Recessed metal / seams: #9AA3AE
- Specular highlight: #F4F6F8
- Hairline border: rgba(20, 23, 28, 0.18)
- Primary text: #14171C
- Secondary text: #3D4450
- Inverse text on neon: #07080A
- Accent / links / active nav: Electric Cyan #00D4FF
- Secondary accent / hover / buttons: Hot Magenta #FF3CAC
- Tertiary accent / grid lines: Vapor Violet #7A5CFF
- Sunset gradient (titles only): #FF9900 → #FF3CAC → #00D4FF

Use colored glows, not drop shadows. Cyan and magenta emit light on the silver surface. Keep body text dark on metal for contrast.

## Typography

- Display / page titles: Orbitron or similar geometric sci-fi sans, weight 700–900, wide tracking, mostly uppercase. Hero title can be mixed-case: "emma's space"
- UI / nav / labels / codes: Share Tech Mono or IBM Plex Mono, uppercase, letter-spacing 0.12–0.2em
- Body: a clean grotesque such as Space Grotesk or Syne, 16–18px, line-height 1.5, dark charcoal on silver

Hero title is oversized and cinematic. Nav labels are small, technical, and vertically stacked. Section kicker text looks like a terminal status line, e.g. `SYS // PORTFOLIO // ONLINE`.

## Layout — all screens

Desktop-first, 1440px artboard.

Fixed right-side navigation rail, about 88–112px wide, full viewport height. It sits on a slightly darker metal strip (#B4BAC4) with a 1px cyan hairline on its left edge. Brand mark "ES" or "emma's space" at the top of the rail. Nav items stacked vertically, one per row, rotated or written as short labels:

- HOME
- PHOTOGRAPHY
- HOBBIES
- CODING TOOLS

The active item uses a cyan tick / vertical bar and magenta glow. Inactive items are charcoal. Hover is 50ms / 0.05s: instant color swap, 1px neon underline, no bounce, no ease-in-out. The main canvas is the remaining left area with 48–64px padding.

Do not put a conventional top bar. A thin status strip is allowed at the top of the content area: timestamp, "SIGNAL OK", coordinates — sci-fi chrome, not a website header.

## Screens to generate

### Screen 1 — Home
Title in the artboard: Home / emma's space.

A full-bleed metallic stage. Giant title "emma's space" as chrome / gradient display type, left-aligned in the content area. Under it, a one-line manifesto: "a personal homepage for work, light, and tools." No portrait. Instead of a hero photo, use a large empty geometric frame (16:9 or isometric rectangle) with a perspective grid inside, a hairline cyan border, and a centered label: `VISUAL SLOT — RESERVED`. Three small stat chips below: Photography / Hobbies / Tools, each a metal plate with a magenta corner mark, no icons of people. Primary CTA button: "ENTER ARCHIVE", skewed parallelogram, cyan outline, magenta fill on hover. Footer of the screen: small monospace coordinates, not a traditional site footer.

### Screen 2 — Photography Works
Title: Photography Works.

A gallery of empty frames, not images. 2-column or 3-column grid of chrome rectangles with different aspect ratios (4:5, 16:9, 1:1). Each frame is a brushed-metal well with a dashed inner border, a tiny index (`01`, `02`, `03`...), and a caption like `UPLOAD PENDING`. No thumbnails, no camera photos, no landscape pictures, no faces. Section header: "PHOTOGRAPHY WORKS" plus a status line `WAIT // IMAGE PAYLOAD`. One filter row of text-only chips: ALL / STREET / NIGHT / STILL — chips are metal tabs, active chip cyan. The right nav item PHOTOGRAPHY is active.

### Screen 3 — Personal Hobbies
Title: Personal Hobbies.

A looser, more editorial layout than Photography. Three large empty modules stacked or in a staggered 2+1 grid. Each module is an empty metal panel with:
- a kicker (HOBBY 01 / HOBBY 02 / HOBBY 03)
- a title placeholder such as "Signal", "Archive", "Night Drive" (invent short sci-fi names, do not use real photos)
- a square empty frame labeled `IMAGE SLOT`
- a two-line caption

No people, no hobby-stock photos (no guitars, coffee, travel selfies). Keep it abstract and typographic. Right nav item HOBBIES is active.

### Screen 4 — Coding Tools
Title: Coding Tools.

A terminal-inspired index of tools, not a screenshot dump. A vertical list of rows on metal. Each row:
- monospace ID (`TL-01`)
- tool name (e.g. VS Code, Figma, Blender — names only)
- a short function line
- a link slot on the right: `URL PENDING` as a cyan dashed underline, not a favicon, not a product screenshot, not an avatar

Optional small "window chrome" on the section container (three dots in cyan / magenta / orange) to echo vintage OS, but keep the page silver, not black-terminal. Right nav item CODING TOOLS is active.

## Components

Buttons: sharp or slightly skewed parallelograms, 2px neon border, no fully-rounded pills. Hover in 50ms: fill flips to cyan or magenta, text goes near-black, glow doubles. No slow fades.

Cards / frames: 0–4px radius max. Hairline metal border. Optional 2px cyan top edge. Interior is empty or a faint perspective grid. Label in the center or corner in mono.

Nav rail items: text-only, no illustrated icons of humans. Tiny geometric marks allowed (plus, chevron, square).

Do not design a loading spinner with a face. If a loading fragment appears, it is a thin cyan progress tick or a `LOADING // 00%` mono label.

## Interaction notes for the prototype (static but implied)

The brief leaves page transitions, scroll, mouse, and loading effects open. For the prototype, only imply:
- Nav hover: 0.05s color/glow change
- Frames: empty, ready for future uploads
- Links: `URL PENDING`
- No animated mock videos, no cursor-follower art, no splash animation storyboard

Show hover on one nav item and one button per screen so the 50ms neon state is visible.

## Output

Four polished desktop UI screens, same design system, same right navigation, metallic silver background throughout. English UI copy. High-fidelity visual prototype, not a wireframe, not a code screenshot. Empty geometric placeholders only — zero photos, zero avatars, zero illustrated people.
```

---

## Optional follow-up (if Stitch asks for mobile)

```
Now generate a 390×844 mobile version of the same 4 screens.

Collapse the right rail into a slim vertical tab strip on the right edge, still not a bottom tab bar. Keep metallic silver, cyan/magenta accents, and empty geometric frames. Still no photos or avatars. Hover becomes tap: 50ms neon flash on the active tab.
```
