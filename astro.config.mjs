// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// SiftedTools - comparateur GEO-first d'outils IA par metier.
// Rendu 100% statique : ideal pour le crawl et la citation par les IA.
export default defineConfig({
  site: "https://siftedtools.com",
  trailingSlash: "always",

  // Multilingue en sous-dossiers : /fr/ /en/ /es/ /pt/ /de/ /it/
  // Lancement FR. prefixDefaultLocale: true => toutes les langues sont prefixees,
  // aucune langue n'occupe la racine (plus propre pour un site europeen).
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es", "pt", "de", "it"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true, // "/" redirige vers /fr/ (a affiner plus tard avec detection geo edge)
    },
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: { fr: "fr-FR", en: "en", es: "es-ES", pt: "pt-PT", de: "de-DE", it: "it-IT" },
      },
    }),
  ],

  build: { format: "directory" },
});
