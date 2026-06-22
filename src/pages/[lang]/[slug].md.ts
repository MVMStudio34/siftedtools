import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths: GetStaticPaths = async () => {
  const COLLECTIONS = ["tools", "guides", "glossary", "benchmarks"];
  const slugOf = (id, lang) => {
    const clean = id.replace(/\.(md|mdx)$/i, "");
    return clean.startsWith(`${lang}/`) ? clean.slice(lang.length + 1) : clean;
  };
  const paths = [];
  for (const col of COLLECTIONS) {
    const entries = await getCollection(col, ({ data }) => data.draft !== true);
    for (const entry of entries) {
      const lang = entry.data.lang;
      paths.push({ params: { lang, slug: slugOf(entry.id, lang) }, props: { entry } });
    }
  }
  return paths;
};

export const GET: APIRoute = ({ props }) => {
  const entry = props.entry;
  const fm = entry.data;
  const date = new Date(fm.updatedAt).toISOString().slice(0, 10);
  const credit = fm.reviewedBy ? "Testé et rédigé par " + fm.reviewedBy + ". " : "";
  let md = "# " + fm.title + "\n\n> " + fm.description + "\n\n_" + credit + "Vérifié le " + date + "._\n\n" + (entry.body || "") + "\n";
  if (fm.faq && fm.faq.length) {
    md += "\n## Questions fréquentes\n\n";
    for (const f of fm.faq) md += "### " + f.q + "\n\n" + f.a + "\n\n";
  }
  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
