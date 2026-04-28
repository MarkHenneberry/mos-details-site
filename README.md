# Mo's Details

A simple one-page Next.js landing page for Mo's Details in New Minas, Nova Scotia.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

The build command creates the optimized production version of the site. The
start command serves that production build locally.

## Environment variables

This project does not require any environment variables.

## Deploy to Vercel

1. Create a free Vercel account at `https://vercel.com`.
2. Push this project to a GitHub repository.
3. In Vercel, choose **Add New Project**.
4. Import the GitHub repository.
5. Keep the default framework setting as **Next.js**.
6. Keep the default build command as `npm run build`.
7. Click **Deploy**.

Vercel will install the dependencies from `package.json`, run the production
build, and publish the site.
