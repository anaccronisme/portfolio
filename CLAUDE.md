# Portfolio Photo - Astro

Site portfolio avec blog photo hebdomadaire, déployé sur Vercel.

## Stack

- **Astro 5** - Framework statique
- **Tailwind CSS v4** - Styles (config dans `src/styles/global.css`)
- **Sharp** - Optimisation images
- **@astrojs/sitemap** - Génération sitemap

## Structure

```
src/
├── content/blog/          # Articles Markdown + images
├── components/
│   ├── layout/            # Header, Footer
│   ├── seo/               # SEOHead, JsonLd
│   ├── gallery/           # MasonryGallery, GalleryImage
│   └── blog/              # PostCard, PostList
├── layouts/               # BaseLayout, BlogLayout
├── pages/                 # Routes (index, about, blog, 404)
└── styles/global.css      # Tailwind + thème
```

## Commandes

- `npm run dev` - Serveur local
- `npm run build` - Build statique
- `git push` - Déploie automatiquement sur Vercel

## Ajouter un article

1. Créer `src/content/blog/nom-article/index.md`
2. Ajouter les images dans `src/content/blog/nom-article/images/`
3. Frontmatter requis :

```yaml
---
title: "Titre (max 60 car.)"
description: "Description (max 160 car.)"
pubDate: 2026-01-15
coverImage: ./images/hero.jpg
coverImageAlt: "Description image"
gallery:
  - src: ./images/photo-1.jpg
    alt: "Description"
    caption: "Légende optionnelle"
tags: ["tag1", "tag2"]
location: "Lieu"
draft: false
---
```

## URLs

- **Production** : https://portfolio-phi-dun-sz2epufwym.vercel.app
- **Repo** : https://github.com/anaccronisme/portfolio

## Couleurs

Thème primary (bleu) défini dans `global.css` : `--color-primary-500: #0ea5e9`
