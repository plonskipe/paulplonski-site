# paulplonski.com

Source for [paulplonski.com](https://paulplonski.com), the academic website of Paul E. Plonski.

Built with [Eleventy](https://www.11ty.dev/) and served as static assets by
[Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/).
The site was built with help from Claude (Anthropic); each page ends with a note saying how it
was written. See [About this site](https://paulplonski.com/about-this-site/).

## Run it locally

Requires Node.js 24 LTS (see `.nvmrc`).

```bash
npm install        # once, and after dependency changes
npm run dev        # local preview with live reload at http://localhost:8080 (drafts visible)
npm run build      # production build into _site/ (unreviewed pages left out)
npm run preview    # production build served by Wrangler at http://localhost:8787
npm run deploy     # production build, then deploy to Cloudflare
```

## How pages are labeled

Every page needs an `ai` block in its frontmatter:

```yaml
ai:
  level: drafted        # paul | edited | drafted | compiled
  tool: Claude Opus 5.5
  sources: "Paul's CV (July 2026)"
  reviewed: 2026-10-01  # blank = draft; left out of production builds
```

The build stops if a page is missing this block, and `npm run build` leaves out any page
without a `reviewed` date.

## Licenses

Code: MIT (`LICENSE`). Text: CC BY 4.0, excluding the CV. Images: CC BY-NC 4.0, excluding the headshot. Details in `LICENSE-CONTENT.md`.

<!-- This README was drafted by Claude (Opus 5.5) for Paul to review. -->
