## Next.js / Azure B2C / NextAuth.js

This is an example repo showing how to configure authentication via Azure B2C in Next.js

The `main` branch has the complete code. You can also take a look at [this pull request](https://github.com/BenjaminWFox/nextjs-azureb2c-nextauth/pull/1/files) to see the code diff required to create basic working authentication. As a followup, take a look at [this pull request](https://github.com/BenjaminWFox/nextjs-azureb2c-nextauth/pull/3/files) which has examples for two options of signing out, depending on your needs.

## Local setup

You should be able to run this locally *if* you have already set up everything in azure. You will need to rename `.env.example` to `.env` and update the values to match your Azure B2C Tenant, User Flow, and App Registration values.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
