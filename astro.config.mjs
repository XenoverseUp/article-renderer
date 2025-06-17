import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  prefetch: true,
  integrations: [],

  experimental: {
    responsiveImages: true,
  },

  adapter: cloudflare(),
});