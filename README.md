# Fondation Astro - SiftedTools

Node requis : **22.12+** (Astro 6 a abandonne Node 18/20).

## 1. Initialiser le projet (terminal)

```bash
nvm install 22 && nvm use 22

# Cree le projet (template minimal, TypeScript strict)
npm create astro@latest siftedtools -- --template minimal --typescript strict --no-git --install

cd siftedtools

# Integrations
npx astro add mdx sitemap
```

## 2. Coller les fichiers de cette fondation

Remplace / ajoute :

```
siftedtools/
├── astro.config.mjs                 ← remplacer
├── .nvmrc                           ← ajouter (contenu : 22.12.0)
├── public/
│   ├── robots.txt                   ← ajouter (autorise les crawlers IA)
│   └── llms.txt                     ← ajouter
└── src/
    ├── content.config.ts            ← ajouter (PAS src/content/config.ts)
    ├── layouts/BaseLayout.astro     ← ajouter
    ├── lib/schema.ts                ← ajouter
    └── i18n/
        ├── ui.ts                    ← ajouter
        └── utils.ts                 ← ajouter
```

Puis crée les dossiers de contenu par langue :

```bash
mkdir -p src/content/tools/fr src/content/guides/fr src/content/glossary/fr src/content/benchmarks/fr
```

## 3. Synchroniser et lancer

```bash
npx astro sync     # regenere les types apres ajout du schema
npm run dev        # http://localhost:4321/fr/
```

## 4. Deploiement Cloudflare Pages (site statique)

1. `git init`, commit, push sur un repo GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → connect le repo.
3. Build command : `npm run build` — Output directory : `dist`.
4. Variable d'env : `NODE_VERSION = 22.12.0`.
5. Ajoute ton domaine `siftedtools.com` dans Custom domains.
6. Le `.fr` : redirige-le vers le `.com` (Cloudflare Redirect Rule).

Pas besoin d'adaptateur : le site est statique, Cloudflare Pages sert `dist/` directement. (Si un jour tu veux du SSR/edge pour la detection de langue, on ajoutera `@astrojs/cloudflare`.)

## Ce qui est deja cable pour le GEO
- Rendu statique, HTML semantique extractible.
- robots.txt autorise GPTBot / ClaudeBot / PerplexityBot / Google-Extended.
- llms.txt a la racine.
- BaseLayout : canonical + hreflang + Open Graph + injection JSON-LD.
- schema.ts : helpers ItemList / SoftwareApplication / FAQPage (garde-fou Review).
- content.config.ts : frontmatter force la disclosure affiliation et la date de fraicheur.

## Etape suivante
Identite visuelle + composants (BaseLayout stylé, ToolCard, ComparisonTable, AffiliateDisclosure, FAQ, MethodologyBox) + la home. C'est la que je fais le vrai travail de design.
