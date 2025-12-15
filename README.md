# Dynamic Portfolio

This project converts your static portfolio into a dynamic one using a local `projects.json` file and vanilla JavaScript.

How to use (Next.js)

- Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

- Open http://localhost:3000 in your browser.

- To add projects edit `data/projects.json`. Update the `image` path to point to `/images/your-image.svg` (place images in `public/images`).

- A sample CV is available at `/CV-Anik-Chowdhury.html`; replace it with your PDF at `public/CV-Anik-Chowdhury.pdf` if you prefer. A "Download CV" button is in the header.

- To enable the contact form, set an endpoint (e.g., Formspree) in the client where you handle submissions.

Additional notes:
- Replace the profile photo at `public/images/IMG_3038.JPG` with your preferred photo (keep the same filename), or change the `src` in `app/layout.js`.
- Education, Research and Awards sections are in `app/page.js` — edit those sections directly to add your actual institutions, papers, awards and dates.

Viewing the site on your phone

- On the same Wi‑Fi network (local):
  1. Run the dev server locally: `npm run dev` (default port 3000).
  2. Find your Windows machine IP address: open PowerShell and run `ipconfig` — look for the IPv4 Address (e.g. `192.168.1.42`).
  3. On your phone (connected to the same Wi‑Fi) open: `http://<YOUR_IP>:3000` (for example `http://192.168.1.42:3000`).
  4. If you can't reach it, make sure Windows Firewall allows incoming connections on port 3000 or run the dev server bound to all interfaces.

- Bind Next dev to all interfaces (if necessary):
  - Update `package.json` script to: `"dev": "next dev -H 0.0.0.0 -p 3000"` (or run `npx next dev -H 0.0.0.0 -p 3000`).
  - On PowerShell you can also set: `$env:HOST = "0.0.0.0"; npm run dev`.

- Use a tunnel (recommended for quick external access):
  - Install and run `ngrok` (recommended): `ngrok http 3000` then open the forwarded URL it provides on your phone.
  - Or use `npx localtunnel --port 3000` which prints a public URL you can open on your phone.

Security note: tunneling exposes your local server to the Internet — use it only when needed and stop the tunnel when finished.

**Deploying to GitHub Pages (github.io)**

This project uses Next.js and can be exported to a static site suitable for GitHub Pages. The repository includes a small configuration to make this easier.

Quick steps (automatic):

1. Install the deployment helper:

```bash
npm install --save-dev gh-pages
```

2. Build and export to the `out/` directory (this is run automatically by `predeploy`):

```bash
npm run build
npm run export
```

3. Deploy (this will publish `out/` to the `gh-pages` branch):

```bash
npm run deploy
```

Notes and variants:

- If you want the site to be a user site (username.github.io), you can push the exported `out/` content as the repository's main branch root — GH Pages can serve from main branch in that repository name. Otherwise using `gh-pages` will publish to the `gh-pages` branch and GitHub Pages will serve it from there.

- If your repo will be hosted at `https://<username>.github.io/<repo>` (project pages), set `basePath` in `next.config.js` and optionally `assetPrefix` to `/<repo>` before building, or ensure your links are relative.

- This static export works if your Next.js app uses no server-only features (API routes, getServerSideProps, or other server runtime features). If you use dynamic/server features, consider deploying to Vercel instead.

Troubleshooting:
- If `next export` complains about images, `next.config.js` in this project disables Next image optimization for static export by setting `images.unoptimized = true`.
- `npm run deploy` will create and push a `gh-pages` branch — ensure your local Git repo has a remote origin and you have permission to push.


Files changed
- `index.html` — added dynamic projects area, modal, contact form, and theme toggle
- `projects.json` — project data
- `scripts.js` — dynamic rendering, filters, modal, search, contact form handler, dark mode
- `style.css` — styles for filters, modal, contact form and theme variables
