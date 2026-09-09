# Rebuild flowy-garden-rebuild exactly

Copy the GitHub project into this project unchanged. It is the same kind of project as this one, so everything transfers as-is with no rewrites.

## What the site is

A single interactive page, "The Central Bank — Standard Reserve, Explained", with a switch that flips between expansion and contraction and four visual pieces: bank canvas, issuance rate, fee routing, and licenses.

## Steps

1. Copy the four page pieces into `src/components/`: `BankCanvas.tsx`, `IssuanceRate.tsx`, `FeeRouting.tsx`, `Licenses.tsx`.
2. Replace `src/routes/index.tsx` with the repo version (includes its own title and description), removing the placeholder home page.
3. Replace `src/routes/__root.tsx` and `src/styles.css` with the repo versions (colors, fonts, theme).
4. Copy any repo `src/components/ui/*` files that differ from the ones already here, plus `public/` assets.
5. Install any packages the repo lists that are missing here, matching its versions.
6. Confirm the page builds and renders, and that the switch changes the visuals.

## Notes

- No content, wording, colors, or layout will be altered.
- The repo's own `.lovable/` history and README are not copied.
