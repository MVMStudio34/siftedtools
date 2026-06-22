import { ui, defaultLang, type UIKey } from "./ui";

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
