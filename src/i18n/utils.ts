import { ui, defaultLang, slugs, type UIKey, type SlugKey } from "./ui";

/** Déduit la langue depuis l'URL (/fr/..., /en/...). Défaut: fr. */
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/** Retourne une fonction t(key) avec repli automatique sur le français. */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UIKey): string {
    const dict = ui[lang] as Record<string, string>;
    return dict[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/** Retourne le slug localisé pour une page donnée. Repli sur le français. */
export function getSlug(lang: keyof typeof slugs, key: SlugKey): string {
  return slugs[lang]?.[key] ?? slugs[defaultLang as keyof typeof slugs][key] ?? key;
}
