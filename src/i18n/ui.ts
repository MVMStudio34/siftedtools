// SiftedTools — dictionnaire d'interface (chrome). Le contenu éditorial vit dans les pages.
// FR = langue de lancement, complète. Les autres langues seront remplies à la localisation.

export const languages = {
  fr: "Français",
  en: "English",
  es: "Español",
  pt: "Português",
  de: "Deutsch",
  it: "Italiano",
} as const;

export const defaultLang = "fr";

export const ui = {
  fr: {
    "brand.name": "SiftedTools",
    "nav.tools": "Outils",
    "nav.comparisons": "Comparatifs",
    "nav.guides": "Guides",
    "nav.barometer": "Baromètre GEO",
    "nav.method": "Méthodologie",
    "nav.about": "À propos",
    "cta.quiz": "Trouver mon stack",
    "cta.quizLong": "Trouver mon stack (1 min)",
    "cta.compare": "Parcourir les comparatifs",
    "menu.open": "Ouvrir le menu",
    "menu.close": "Fermer le menu",
    "page.updated": "Vérifié le",
    "page.reviewedBy": "Testé et rédigé par",
    "author.name": "Marvin Munos",
    "author.bio":
      "J'ai construit et opéré mes propres boutiques e-commerce. Je teste les outils IA que je recommande sur de vraies boutiques, pas depuis une page produit.",
    "author.role": "Fondateur de SiftedTools",
    "email.heading": "Le bon outil, au bon moment",
    "email.sub":
      "Une fois par mois : les outils qui valent vraiment le coup pour une boutique, et ceux qu'on a écartés. Sans blabla.",
    "email.placeholder": "vous@email.com",
    "email.button": "Je m'abonne",
    "email.note": "Désinscription en un clic. Pas de spam.",
    "disclosure.short":
      "Certains liens sont affiliés : si vous souscrivez, on peut toucher une commission, sans surcoût pour vous. Ça ne change pas nos classements, établis au mérite.",
    "footer.method": "Méthodologie",
    "footer.about": "À propos",
    "footer.legal": "Mentions légales",
    "footer.privacy": "Confidentialité",
    "footer.barometer": "Baromètre GEO",
    "footer.rights": "Comparateur indépendant d'outils IA pour l'e-commerce.",
  },
  en: {},
  es: {},
  pt: {},
  de: {},
  it: {},
} as const;

export type UIKey = keyof (typeof ui)["fr"];
