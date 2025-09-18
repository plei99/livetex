// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://plei99.github.io',
  base: '/livetex',
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  }
});
