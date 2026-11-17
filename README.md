# Fringe Design

Static Astro website for Fringe Design.

Use Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
```

Run `npm run build` to generate the site in `dist/`. Run `npm run preview` to serve the production build locally.

## Project structure

| Path | Contents |
| --- | --- |
| `src/pages/` | Homepage, contact page, portfolio, project detail and category routes |
| `src/components/` | Shared navigation, footer, portfolio listing, and project cards |
| `src/layouts/` | Shared page shell and metadata |
| `src/content/projects/` | Markdown case studies validated by `src/content.config.ts` |
| `src/data/` | Services, contact information, and project categories |
| `src/assets/` | Original Fringe brand and portfolio imagery |
| `src/styles/` | Shared layout, typography, and responsive styles |
| `public/` | Static favicon |

Add a Markdown entry under `src/content/projects/` to publish another project. Use a kebab-case filename for its URL, and place its images in `src/assets/projects/`.

The contact form opens a prefilled draft in the visitor’s email app. The contact page also includes direct email and phone links.
