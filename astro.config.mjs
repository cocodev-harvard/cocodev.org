import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: process.env.MODE === "production" ? "https://cocodev.org/" : "http://localhost",
  trailingSlash: "always",
  server: {
    port: 26263,
  },
  integrations: [tailwind(), mdx(), sitemap()]
});