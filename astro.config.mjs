import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://online.detik.com",
  //Change to your site URL
  vite: {
    build: {
      cssCodeSplit: false
    }
  },
  integrations: [sitemap(), tailwind({
    applyBaseStyles: false
  })],
  base: "/",
  //Change to your base path
  build: {
    format: "file",
    assets: "assets",
    //Change to your project name
    inlineStylesheets: "never"
  },
  compressHTML: false,
  output: "server",
  outDir: "./preview",
  adapter: vercel()
});