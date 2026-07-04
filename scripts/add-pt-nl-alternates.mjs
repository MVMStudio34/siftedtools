#!/usr/bin/env node
// Batch 6 — add pt & nl hreflang alternates to the 65 existing FR/EN/ES/DE/IT content pages.
// Deterministic + idempotent: detects each file's topic by a stable URL substring, inserts the
// pt and nl <lang,url> entries at the end of the existing `alternates:` YAML block if missing.
import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";

const S = "https://siftedtools.com";
// 13 topics × 7 languages. Keyed detection uses the `it` URL (present in every existing file).
const TOPICS = [
  { it: "/it/migliori-strumenti-ia-ecommerce/", pt: "/pt/melhores-ferramentas-ia-ecommerce/", nl: "/nl/beste-ai-tools-ecommerce/" },
  { it: "/it/strumenti-ia-assistenza-clienti/", pt: "/pt/ferramentas-ia-apoio-cliente/", nl: "/nl/ai-tools-klantenservice/" },
  { it: "/it/strumenti-ia-schede-prodotto/", pt: "/pt/ferramentas-ia-fichas-produto/", nl: "/nl/ai-tools-productbeschrijvingen/" },
  { it: "/it/loox-vs-judge-me-recensioni-shopify/", pt: "/pt/loox-vs-judge-me-avaliacoes-shopify/", nl: "/nl/loox-vs-judge-me-shopify-reviews/" },
  { it: "/it/strumenti-ia-email-marketing/", pt: "/pt/ferramentas-ia-email-marketing/", nl: "/nl/ai-tools-e-mailmarketing/" },
  { it: "/it/strumenti-ia-foto-prodotto/", pt: "/pt/ferramentas-ia-fotos-produto/", nl: "/nl/ai-tools-productfotos/" },
  { it: "/it/strumenti-ia-creativita-pubblicitarie/", pt: "/pt/ferramentas-ia-criativos-publicitarios/", nl: "/nl/ai-tools-advertentiecreatives/" },
  { it: "/it/strumenti-ia-seo-ecommerce/", pt: "/pt/ferramentas-ia-seo-ecommerce/", nl: "/nl/ai-tools-seo-ecommerce/" },
  { it: "/it/strumenti-ia-video-ugc/", pt: "/pt/ferramentas-ia-videos-ugc/", nl: "/nl/ai-tools-ugc-videos/" },
  { it: "/it/strumenti-visibilita-ia-geo/", pt: "/pt/ferramentas-visibilidade-ia-geo/", nl: "/nl/ai-tools-zichtbaarheid-geo/" },
  { it: "/it/guida-geo-posizionamento-ia/", pt: "/pt/guia-geo-posicionamento-ia/", nl: "/nl/geo-gids-zichtbaarheid-ai/" },
  { it: "/it/scrivere-schede-prodotto-ia/", pt: "/pt/escrever-fichas-produto-ia/", nl: "/nl/productbeschrijvingen-schrijven-met-ai/" },
  { it: "/it/intelligenza-artificiale-ecommerce-iniziare/", pt: "/pt/inteligencia-artificial-ecommerce-comecar/", nl: "/nl/ai-in-e-commerce-beginnen/" },
];

const files = [
  ...globSync("src/content/tools/{fr,en,es,de,it}/*.md"),
  ...globSync("src/content/guides/{fr,en,es,de,it}/*.md"),
];

let touched = 0, skipped = 0, unmatched = 0;
for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const topic = TOPICS.find((t) => raw.includes(t.it));
  if (!topic) { unmatched++; continue; } // reference guides (methodology/about/barometer) — no alternates topic
  if (raw.includes(`${S}${topic.pt}`) && raw.includes(`${S}${topic.nl}`)) { skipped++; continue; }

  const lines = raw.split("\n");
  const start = lines.findIndex((l) => l === "alternates:");
  if (start === -1) { unmatched++; continue; }
  // block = consecutive indented lines after `alternates:`
  let end = start + 1;
  while (end < lines.length && /^\s+\S/.test(lines[end])) end++;
  const insert = [
    "  - lang: pt",
    `    url: ${S}${topic.pt}`,
    "  - lang: nl",
    `    url: ${S}${topic.nl}`,
  ];
  lines.splice(end, 0, ...insert);
  writeFileSync(file, lines.join("\n"));
  touched++;
}
console.log(`alternates updated: ${touched}, already-present: ${skipped}, no-topic(skipped): ${unmatched}`);
