# Parth Mandavia — Projects

Work-only portfolio: apps I've built and shipped, with who they were for, what they do and what I built.

Live: https://parth-code-flutter.github.io/projects/
Full portfolio: https://parth-code-flutter.github.io/portfolio/

Built with React, Vite and Framer Motion. All content lives in `src/data.js`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/projects/

## Deploy (GitHub Pages)

Every push to `main` builds and publishes the site via GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

## Adding a project

Add an entry to `projects` in `src/data.js`:

```js
{
  id: 'my-app',
  category: 'flutter',            // must match an id in `categories`
  title: 'My App',
  client: 'Government of Oman',   // who it was for — no employer names
  sector: 'Public utility',
  metric: { value: '50K+', label: 'Downloads' },
  summary: 'One-line description of the product.',
  built: ['What you built', 'Another feature'],
  tech: ['Flutter', 'Firebase'],
  platforms: ['Android', 'iOS'],
  links: [{ label: 'Google Play', store: 'play', href: 'https://…' }], // store: 'play' | 'apple'
  note: 'Client private',          // optional, shown when there are no public links
  icon: 'apps/my-app-icon.webp',   // optional app icon in public/apps/
  shots: [                         // optional, up to 3 real screenshots in public/apps/
    { src: 'apps/my-app-1.webp', alt: 'Home screen' },
  ],
  glyph: 'shop',                   // used when there are no shots: inspect | live | shop | org
  accent: ['#36d1dc', '#5b86e5'],  // gradient colours
}
```

Projects with `shots` get a large case study with a screenshot gallery. Projects without screenshots are listed under **Private client work**.

## Adding React / web work later

Add a category and use it on projects — a new filter tab appears automatically:

```js
export const categories = [
  { id: 'flutter', label: 'Flutter', color: '#54c5f8' },
  { id: 'react', label: 'React.js', color: '#61dafb' },
]
```
