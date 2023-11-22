import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: '3js0kv1k',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false
  })]
});