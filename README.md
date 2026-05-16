# Spencer Consulting Website

Premium React website for Spencer Consulting, built with Vite, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Project Structure

- `index.html` is the Vite document shell with SEO metadata and structured data.
- `src/App.jsx` contains the full React page structure, copy, sections, motion, and reusable components.
- `src/styles.css` contains Tailwind imports and global visual utilities.
- `tailwind.config.js`, `postcss.config.js`, and `vite.config.js` configure the frontend build.

## Run Locally

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Then open the local URL Vite prints, usually:

```txt
http://127.0.0.1:5173
```

## Note

This is now a proper React/Vite project. It will not render by opening `index.html` directly with `file://`, because Vite needs to serve and transform the React source modules.
