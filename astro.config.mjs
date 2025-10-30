import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sena-dogan.github.io/cv_bumblebee/",
  integrations: [tailwind()],
});
