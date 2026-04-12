import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rin from "astro-rin";

// https://astro.build/config
export default defineConfig({
  integrations: [rin()],
  vite: {
    plugins: [tailwindcss()] as any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
});
