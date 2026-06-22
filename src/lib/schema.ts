// Helpers JSON-LD pour le GEO. Les IA et Google extraient ces donnees structurees.
// REGLE : ne jamais ajouter Review/AggregateRating sans note reelle et sourcee (politique self-serving).

const SITE = "https://siftedtools.com";
const ORG_NAME = "SiftedTools";

export function organization() {
  return {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: ORG_NAME,
    url: SITE,
    // logo: `${SITE}/logo.png`,  // a ajouter quand le logo existe
  };
}

export function webPage(opts: { url: string; title: string; description: string; updatedAt: Date; lang: string }) {
  return {
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    inLanguage: opts.lang,
    dateModified: opts.updatedAt.toISOString(),
    isPartOf: { "@id": `${SITE}/#organization` },
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export type ToolForSchema = {
  name: string;
  website: string;
  description?: string;
  pricingFrom?: string;     // ex: "20 EUR/mois" - uniquement si verifie
  rating?: number;          // UNIQUEMENT si note reelle et sourcee
  ratingCount?: number;     // idem
};

export function softwareApplication(t: ToolForSchema) {
  const node: Record<string, unknown> = {
    "@type": "SoftwareApplication",
    name: t.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: t.website,
  };
  if (t.description) node.description = t.description;
  // Offer seulement si prix verifie
  if (t.pricingFrom) node.offers = { "@type": "Offer", price: t.pricingFrom };
  // AggregateRating SEULEMENT avec donnees reelles. Sinon on n'en met pas.
  if (typeof t.rating === "number" && typeof t.ratingCount === "number") {
    node.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: t.rating,
      ratingCount: t.ratingCount,
    };
  }
  return node;
}

export function itemListOfTools(tools: ToolForSchema[]) {
  return {
    "@type": "ItemList",
    itemListElement: tools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: softwareApplication(t),
    })),
  };
}

export function faqPage(qa: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: qa.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

// Assemble un graphe complet pret a injecter dans <script type="application/ld+json">.
export function buildGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
