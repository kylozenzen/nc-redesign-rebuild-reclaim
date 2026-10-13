# Nobody Creative — site

The Nobody Creative homepage. Plain HTML, CSS and JS: no build step, no installs. Netlify serves the folder as-is.

## Where things live

```
index.html            ← page shell. Rarely touched.
content.js            ← EVERY word, link, build and on/off switch. Edit this.
assets/
  css/site.css        ← the look (colors, type, spacing). Brand tokens at the top.
  js/render.js        ← turns content.js into the page. Don't need to touch.
  brand/              ← logo, favicon, app icons
  visual-work/        ← spec-ad images used by the Visual Work cards
  icons/              ← (optional) real app icons for build cards
visuals.html          ← the full Visual Work page
```

## Common edits (all in `content.js`)

| I want to… | Do this |
| --- | --- |
| Change any wording | Edit the text in quotes in `SECTIONS` |
| Hide a section | Set `show: false` on it |
| Bring a section back | Set `show: true` |
| Reorder the page | Move a whole `{ … },` block up or down in `SECTIONS` |
| Add a build | Copy a block in `BUILDS`, paste, fill it in |
| Hide/park a build | Set `show: false` on it (Nobody Arcade is parked this way) |
| Change a build's state | `status: "live"`, `"beta"`, `"waitlist"` or `"dev"` |
| Use a build's real icon | Drop the file in `assets/icons/` and add `icon: "assets/icons/name.png"` |
| Add a spec ad | Add the image to `assets/visual-work/`, add a block to `VISUALS` |
| Change the header button | Edit `SITE.headerButton` |

Hero dots, the legend, the filter buttons and their counts, the `$ nobody status` line and the scrolling strip all update from `BUILDS` automatically.

The newsletter section is in `SECTIONS` with `show: false`. Edit its words, flip it to `true`, and it also adds "The Feed ↗" to the footer.

## Don't break it

- Keep quotes around text. Inside text, use ’ instead of ' if you're unsure, and never a plain `"` (use “ ” instead).
- Every block ends with `},` and every line inside ends with `,`.
- After editing, open the site. A blank page means a typo in `content.js`: the browser console (right-click → Inspect → Console) shows the line number.

## Brand rules, short version

One orange (`#FF5A1F`) per screen. Geist for words, Geist Mono for labels. Each build gets one color and one `.method()` verb. Full system: the Nobody Creative design system artifact.
