import { defineConfig } from "astro/config";

export default defineConfig({
  prefetch: true,
  integrations: [],
  experimental: {
    responsiveImages: true,
  },
});
