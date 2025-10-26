// @ts-check

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://inigomarquinezprado.dev",
  base: "/tiny-web-recipes",
  integrations: [
    starlight({
      title: "Tiny Web Recipes",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/inigomarquinez/tiny-web-recipes" }],
      tableOfContents: false,
      lastUpdated: true,
      sidebar: [
        {
          label: "HTML",
          autogenerate: { directory: "html" },
        },
        {
          label: "CSS",
          autogenerate: { directory: "css" },
        },
        {
          label: "JS",
          autogenerate: { directory: "js" },
        },
      ],
    }),
    react(),
  ],
});
