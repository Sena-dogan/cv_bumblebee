import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sena-dogan.github.io",
  base: "/cv_bumblebee",
  trailingSlash: "always",
  publicDir: "./public",
  integrations: [tailwind()],
});
