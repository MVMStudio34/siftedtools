// Astro 5/6 Content Layer API. Fichier a la racine de src/ (PAS src/content/config.ts).
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const LANGS = ["fr", "en", "es", "pt", "de", "it"] as const;

// FAQ structuree : alimente l'accordeon ET le JSON-LD FAQPage (bon pour l'extraction IA).
const faqItem = z.object({ q: z.string(), a: z.string() });

// Offres affiliees : rendues comme boutons (rel sponsored), hors du corps editorial.
// url = placeholder tant que le programme n'est pas signe, a remplacer ensuite.
const offer = z.object({
  tool: z.string(),          // nom affiche, ex "Tidio"
  label: z.string(),         // texte du bouton, ex "Essayer Tidio"
  url: z.string(),           // lien affilie (placeholder accepte)
  note: z.string().optional(),
});

// Schema commun a toutes les pages editoriales. Reprend le frontmatter du spec.
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  lang: z.enum(LANGS),
  country: z.string().optional(),        // ex: "fr" si la page cible vraiment un pays
  profession: z.string().default("ecommerce"),
  useCase: z.string().optional(),
  intent: z.enum(["informational", "commercial", "transactional"]).default("commercial"),
  // GEO : la fraicheur est un signal de citation. coerce.date parse les dates du frontmatter.
  updatedAt: z.coerce.date(),
  reviewedBy: z.string(),                 // E-E-A-T : auteur reel, jamais vide
  affiliateDisclosure: z.literal(true),   // disclosure obligatoire => force a true
  geoPriorityScore: z.number().min(0).max(100).default(0),
  canonical: z.string().url().optional(),
  // hreflang : liste des versions par langue { lang, url }
  alternates: z.array(z.object({ lang: z.string(), url: z.string() })).default([]),
  // Types de schema.org a injecter. Attention : pas de Review/AggregateRating sans donnee reelle.
  schemaTypes: z.array(z.string()).default(["Article"]),
  requiredTools: z.array(z.string()).default([]),
  // Nouveau : FAQ + offres affiliees (optionnels, par defaut vides)
  faq: z.array(faqItem).default([]),
  offers: z.array(offer).default([]),
  draft: z.boolean().default(false),
});

// Pages money (meilleur X pour Y, X vs Y, avis) : src/content/tools/<lang>/<slug>.mdx
const tools = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/tools" }),
  schema: baseSchema.extend({
    pageType: z.enum(["pillar", "best-for", "vs", "review"]).default("best-for"),
    // Outils comparés -> schema SoftwareApplication (GEO). website = site officiel, pas le lien affilié.
    apps: z.array(z.object({
      name: z.string(),
      website: z.string(),
      description: z.string().optional(),
      pricingFrom: z.string().optional(),   // uniquement si vérifié
      rating: z.number().optional(),        // UNIQUEMENT si note réelle et sourcée
      ratingCount: z.number().optional(),
    })).default([]),
  }),
});

// Guides / tutoriels : src/content/guides/<lang>/...
const guides = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/guides" }),
  schema: baseSchema,
});

// Glossaire : src/content/glossary/<lang>/...
const glossary = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/glossary" }),
  schema: baseSchema,
});

// Barometres GEO (donnees Quotis) : src/content/benchmarks/<lang>/...
const benchmarks = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/benchmarks" }),
  schema: baseSchema.extend({
    enginesTested: z.array(z.string()).default([]),
    promptsTested: z.number().optional(),
    barometerDate: z.coerce.date().optional(),
  }),
});

export const collections = { tools, guides, glossary, benchmarks };
