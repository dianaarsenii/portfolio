# Diana Arsenii — Portfolio starter

A responsive React + TypeScript portfolio built with Vite.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this folder and open a terminal inside it.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Personalize before publishing

- In `src/App.tsx`, update the email address (`your.email@example.com`), LinkedIn URL, and GitHub URL.
- Review every bio and project statement for accuracy.
- Replace generalized project examples with your own case studies. Do not publish confidential employer code, screenshots, or internal information.
- Add your CV PDF under `public/` and link to it when ready.
- If you don't want the Google Fonts dependency, remove the `@import` line at the top of `src/styles.css` and use system fonts.

## Deploy with Vercel

1. Create a GitHub repository and push this project to it.
2. Sign in to https://vercel.com/ using GitHub.
3. Choose **Add New → Project**, then import the portfolio repository.
4. Keep the detected Vite settings: build command `npm run build`, output directory `dist`.
5. Select **Deploy**. Vercel will provide a public `*.vercel.app` URL.
6. Future pushes to the connected branch will trigger a new deployment.

## Check the production build

```bash
npm run build
npm run preview
```
