# SiftedTools — Stratégie d'expansion européenne multilingue

Document de référence stratégique. Version 1.0, juin 2026.
Auteur : Marvin Munos (MVM Studio). Usage interne.

---

## Principe directeur (à ne jamais oublier)

**La France doit être prouvée avant toute expansion.** Une nouvelle langue ne se lance pas tant que :
1. Le site FR génère du trafic organique mesurable (premières positions Google sur au moins 3 money pages)
2. Au moins 3 affiliations sont validées et génèrent des premiers clics
3. Le modèle de conversion FR est validé (un comparatif qui amène des clics affiliés réels)

Tant que ces 3 conditions ne sont pas remplies, ce document reste un plan, pas une exécution. Lancer une langue trop tôt dilue le focus et disperse l'effort SEO/GEO sur des fondations non prouvées.

**Règle d'or** : une langue à la fois, prouvée avant la suivante. Jamais deux lancements simultanés.

---

## Pourquoi l'Europe, et pourquoi maintenant le préparer

Le marché e-commerce européen pèse environ 456 milliards de dollars en 2026, en route vers 546 milliards en 2030. L'e-commerce représente déjà près de 19,5% du revenu des entreprises de l'UE-27. Shopify gagne du terrain dans chaque marché européen, avec les plus fortes progressions aux Pays-Bas, en Italie, en Espagne et en France.

Préparer maintenant (sans publier) permet d'avoir le plan d'exécution prêt le jour où la France est prouvée. L'infrastructure technique (i18n, hreflang, BaseLayout) existe déjà : seul le contenu manque.

---

## Insight critique : Shopify ne domine pas partout

Donnée majeure qui change l'angle éditorial par pays. Contrairement aux États-Unis, Shopify n'est pas la plateforme dominante dans tous les marchés européens.

- **France** : PrestaShop reste très implanté (built in France), même si Shopify progresse vite sur les nouveaux entrants DTC.
- **Allemagne** : WooCommerce gagne du terrain (24,7% vers 29,2% sur les nouveaux stores 2025). Shopify est 4e. Marché desktop-orienté, consommateurs prudents sur le paiement en ligne.
- **Italie** : WooCommerce domine (premier sur les détections), Shopify 5e. Marché tilté open-source.
- **Espagne** : WooCommerce et Shopify se disputent le haut du tableau. 41% des nouveaux stores 2025 choisissent Shopify, forte progression.
- **Royaume-Uni** : marché Shopify mature, 2e marché Shopify Plus mondial après les US. Anglais natif.

**Conséquence stratégique** : le positionnement "outils IA pour Shopify" doit être adapté. En Allemagne et Italie, élargir vers "Shopify et WooCommerce" voire "WooCommerce et Shopify" pour coller à la réalité du marché. En UK, le focus Shopify pur fonctionne.

---

## Ordre d'expansion recommandé (validé par Marvin)

Classement de priorité, à exécuter séquentiellement.

### 1. Espagne (espagnol) — PREMIER

Pourquoi en premier :
- Forte progression Shopify (41% des nouveaux stores 2025, +14,9pp)
- Marché DTC dynamique (mode, beauté, lifestyle, exactement le coeur Shopify)
- Espagnol = langue à très large portée (Espagne + Amérique latine en bonus SEO futur)
- Marvin parle un espagnol probablement accessible (proximité portugais/français)
- Concurrence éditoriale GEO quasi inexistante en espagnol sur cette verticale

Angle : "mejores herramientas IA para e-commerce" — focus Shopify, mention WooCommerce.
URL : siftedtools.com/es/

### 2. Allemagne (allemand) — DEUXIÈME

Pourquoi en deuxième :
- Plus gros marché e-commerce d'Europe (95,4 milliards de dollars, 44,7 millions d'utilisateurs)
- Plus grand nombre de sites Shopify en Europe (122 993 sites)
- 3e marché Shopify Plus mondial (4 457 stores)
- Pouvoir d'achat élevé, donc valeur des conversions affiliées supérieure

Difficulté : allemand = langue exigeante, traduction de qualité indispensable (pas de Google Translate). Marché prudent, exige de la rigueur et de la preuve. WooCommerce fort, donc angle élargi nécessaire.
Angle : "beste KI-Tools für E-Commerce" — Shopify ET WooCommerce.
URL : siftedtools.com/de/

### 3. Italie (italien) — TROISIÈME

Pourquoi en troisième :
- Forte progression Shopify (+15,7pp, 2e plus forte d'Europe)
- Marché DTC en croissance
- Italien accessible pour un locuteur français/espagnol

Difficulté : WooCommerce domine (1er), Shopify seulement 5e. Angle WooCommerce-first probablement nécessaire.
Angle : "migliori strumenti IA per e-commerce" — WooCommerce et Shopify.
URL : siftedtools.com/it/

### 4. Royaume-Uni (anglais) — QUATRIÈME

Pourquoi en quatrième malgré le marché énorme :
- Anglais = concurrence éditoriale GEO maximale (tous les sites US/UK sont déjà là)
- C'est le marché où ton avantage "premier sur le GEO français" ne joue plus
- Mais : 2e marché Shopify Plus mondial, anglais natif, fulfillment simple

Stratégie : n'attaquer l'anglais qu'une fois 2-3 langues européennes prouvées, avec un angle très différencié (le Baromètre GEO Quotis comme arme, données propres que les concurrents n'ont pas).
Angle : "best AI tools for e-commerce" — Shopify focus.
URL : siftedtools.com/en/

### 5. Portugal (portugais) — CINQUIÈME

Pourquoi en dernier :
- Marché plus petit que les autres
- Mais : Marvin est bilingue portugais (avantage qualité de traduction maximal)
- Portugais = portée Portugal + Brésil (énorme marché e-commerce) en bonus futur

Stratégie : à considérer comme marché de confort (langue maîtrisée) plutôt que marché prioritaire par la taille. Peut être avancé dans l'ordre si Marvin veut capitaliser sur sa maîtrise native.
Angle : "melhores ferramentas IA para e-commerce".
URL : siftedtools.com/pt/

---

## Architecture technique recommandée

### Structure d'URL : sous-répertoires (déjà en place)

Format retenu : **siftedtools.com/es/**, **siftedtools.com/de/**, etc.

Pourquoi sous-répertoires plutôt que sous-domaines (es.siftedtools.com) ou domaines séparés (siftedtools.es) :
- L'autorité de domaine se cumule sur un seul domaine (chaque page FR renforce le domaine global qui profite aux pages ES)
- Configuration hreflang plus simple
- Déjà implémenté dans ton architecture Astro actuelle
- Un seul site à maintenir, déployer, monitorer

### hreflang (déjà géré par BaseLayout)

Chaque page doit déclarer ses versions linguistiques alternatives. Le champ `alternates` du frontmatter le gère déjà. Quand une page existe en FR et ES, les deux se référencent mutuellement.

Exemple pour une money page traduite :
```yaml
alternates:
  - lang: fr
    url: https://siftedtools.com/fr/outils-ia-service-client/
  - lang: es
    url: https://siftedtools.com/es/herramientas-ia-atencion-cliente/
```

### llms.txt par langue

Prévoir un llms.txt qui liste les pages de toutes les langues, ou un llms.txt par langue. Le robots.txt reste global (autorise déjà les crawlers IA).

---

## Doctrine de traduction (critique pour la qualité GEO)

**Ne jamais traduire mot à mot.** Une money page traduite n'est pas une traduction, c'est une adaptation :

1. **Adapter l'angle plateforme** : Shopify-first en ES/UK, WooCommerce-mention en DE/IT.
2. **Adapter les outils cités** : certains outils ont des programmes affiliés par pays, d'autres une présence locale différente. Vérifier la pertinence par marché.
3. **Adapter les exemples** : prix en monnaie locale si mentionnés, références culturelles, fournisseurs email locaux (Gmail/Outlook universels, mais ajouter les FAI locaux pertinents : en DE, GMX et Web.de comptent).
4. **Qualité linguistique native** : pour l'allemand surtout, faire relire par un natif ou utiliser une traduction IA de très haute qualité PUIS révision. Un allemand approximatif tue la crédibilité instantanément.
5. **Conserver la structure GEO** : verdict synthétique en premier, FAQ schema, mention Quotis, maillage interne. La doctrine GEO française s'applique à toutes les langues.

---

## Affiliations par pays

Point d'attention majeur : les programmes affiliés varient par géographie.

- **Programmes globaux** (fonctionnent partout) : la plupart des SaaS (Gorgias, Brevo, Klaviyo, Jasper, Surfer, etc.) ont un tracking unique qui marche internationalement. Le cookie suit l'utilisateur quel que soit son pays.
- **Plateformes affiliées** : PartnerStack, Impact, Awin sont internationales. Tes liens existants fonctionnent pour du trafic ES, DE, IT.
- **À vérifier par marché** : certains outils ont des programmes ou des conditions spécifiques par région. À auditer au moment de chaque lancement de langue.

**Bonne nouvelle** : tes 15 affiliations en cours sont majoritairement globales. Le trafic espagnol ou allemand qui clique sur ton lien Gorgias te rapporte autant que le trafic français. Pas besoin de re-postuler par pays dans la majorité des cas.

---

## Plan d'exécution par langue (template réutilisable)

Quand le moment viendra de lancer une langue, suivre cette séquence :

**Phase 1 — Page pilote (1 page)**
- Traduire/adapter LA meilleure money page (probablement la pillar ou le comparatif le plus performant en FR)
- Publier, indexer, mesurer pendant 2-4 semaines
- Valider que la structure technique fonctionne (hreflang, affichage, schema)

**Phase 2 — Cluster minimal (3-4 pages)**
- Si la pilote indexe bien, traduire les 3 money pages les plus stratégiques
- Construire le maillage interne dans la nouvelle langue
- Publier le llms.txt de la langue

**Phase 3 — Cluster complet (8 pages)**
- Traduire l'ensemble des money pages
- Pages utilitaires (méthodologie, à propos, baromètre) traduites
- Newsletter dédiée si pertinent

**Phase 4 — Validation avant langue suivante**
- Trafic organique mesurable dans la nouvelle langue
- Premiers clics affiliés
- Seulement alors, passer à la langue suivante

---

## Ce qu'il NE faut PAS faire

1. **Ne pas lancer 2 langues en parallèle.** Focus tue dispersion.
2. **Ne pas traduire avant que la France soit prouvée.** Fondations d'abord.
3. **Ne pas utiliser de traduction automatique brute.** La qualité linguistique est un signal GEO et de crédibilité.
4. **Ne pas copier-coller l'angle Shopify-first partout.** Adapter à la réalité plateforme de chaque marché (WooCommerce en DE/IT).
5. **Ne pas négliger le Baromètre Quotis multilingue.** À terme, mesurer les recommandations IA en espagnol, allemand, etc. serait un différenciateur unique. Mais c'est une phase ultérieure.

---

## Prochaine action concrète (quand la France sera prouvée)

Le jour où les 3 conditions du principe directeur sont remplies :
1. Choisir l'Espagne (langue 1)
2. Adapter la pillar page en espagnol (page pilote)
3. Suivre le plan d'exécution Phase 1
4. Mesurer, valider, puis Phase 2

D'ici là : **tout l'effort reste sur la France.** Faire ranker, valider les affiliations, prouver le modèle, lancer le premier Baromètre GEO. L'Europe attend que la France gagne.
