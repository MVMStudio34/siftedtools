// llms-full.txt : agrégat du contenu éditorial pour les moteurs génératifs.
// Concatène toutes les pages publiées (hors brouillons), les plus récentes d'abord.
// Secondaire par rapport aux jumeaux .md, mais utile : une IA peut tout avaler d'un coup.
// Se régénère au build. Vide tant qu'aucune page n'existe (normal).
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://siftedtools.com";
const COLLECTIONS = ["tools", "guides", "glossary", "benchmarks"] as const;

function slugOf(id: string, lang: string): string {
  const clean = id.replace(/\.(md|mdx)$/i, "");
  return clean.startsWith(`${lang}/`) ? clean.slice(lang.length + 1) : clean;
}

export const GET: APIRoute = async () => {
  let out =
    "# SiftedTools — contenu complet\n\n" +
    "Comparateur indépendant et éditorial des meilleurs outils IA pour l'e-commerce " +
    "(Shopify, WooCommerce, DTC). Tests de première main, classements au mérite, " +
    "données de visibilité IA propres (baromètres GEO).\n";

  const all: any[] = [];
  for (const col of COLLECTIONS) {
    const entries = await getCollection(col as any, ({ data }: any) => data.draft !== true);
    entries.forEach((e: any) => all.push(e));
  }
  all.sort((a, b) => +new Date(b.data.updatedAt) - +new Date(a.data.updatedAt));

  for (const e of all) {
    const fm = e.data;
    const lang = fm.lang as string;
    const slug = slugOf(e.id, lang);
    const date = new Date(fm.updatedAt).toISOString().slice(0, 10);
    out +=
      `\n\n---\n\n` +
      `## ${fm.title}\n` +
      `URL: ${SITE}/${lang}/${slug}/\n` +
      `Langue: ${lang} · Mis à jour: ${date}\n\n` +
      `${fm.description}\n\n` +
      `${e.body ?? ""}\n`;
    if (fm.faq?.length) {
      out += `\n### Questions fréquentes\n\n`;
      for (const f of fm.faq) out += `**${f.q}** ${f.a}\n\n`;
    }
  }

  return new Response(out, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
