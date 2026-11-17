# Fringe Design

Static Astro website for Fringe Design.

Use Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
```

Run `npm run build` to generate the site in `dist/`. Run `npm run preview` to serve the production build locally.

## GitHub Pages

1. In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the publishing source.
2. Commit the workflow and site changes, then push to `main`.
3. Open **Actions → Deploy to GitHub Pages** to see the deployment status and published URL. You can also run the workflow manually from `main`.

The workflow builds and publishes the site after each push to `main`. It reads the site address and base path from GitHub Pages so internal links work at the repository URL or at a configured custom domain.

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

The contact form previews the confirmation screen locally in the browser. It has no delivery integration. The contact page also includes direct email and phone links.
