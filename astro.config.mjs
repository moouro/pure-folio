// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: { open: true, port: 42069 },
  integrations: [icon()],
});
