# Cavalcante Assessoria Jurídica

Site institucional. Astro 7, saída estática, publicado no GitHub Pages em
[https://cavalcanteassessoria.github.io](https://cavalcanteassessoria.github.io).

## Requisitos

Node.js **>= 22.23.4** (Astro 7 recusa versões anteriores). O projeto fixa Node 24
em `.nvmrc`:

```bash
nvm use
npm install
```

## Desenvolvimento

```bash
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run preview    # serve o build
npm run check      # diagnósticos de .astro e TypeScript
```

## Estrutura

```
src/data/site.ts      todo o texto do site (serviços, sobre, depoimentos, contato)
src/components/       seções e blocos
src/layouts/          HTML base, metadados, JSON-LD
src/pages/index.astro página única, composta pelas seções
src/styles/global.css tokens de marca, reset, fontes
src/assets/img/       fotografias (processadas por astro:assets no build)
public/               favicon, og-image.jpg, robots.txt — copiados sem transformação
marketing/            templates e script das artes de divulgação
.agents/              contexto de marca e posicionamento
```

Editar texto não exige mexer em componente: tudo sai de `src/data/site.ts`.

## Deploy

Push em `main` dispara `.github/workflows/deploy.yml`
(`withastro/action` → `actions/deploy-pages`). No repositório, uma vez só:
**Settings → Pages → Source: GitHub Actions**.

## Artes de divulgação

`marketing/og.html` é o template das artes (Open Graph, post e story de
Instagram). Ele precisa de um Chrome headless local; o caminho é lido de
`CHROME`, com fallback para o Chromium do Playwright.

```bash
node marketing/build.mjs
```

Gera `public/og-image.jpg` (1200×630) e as peças sociais em `marketing/out/`.
Posicionamento, voz e termos de busca estão em `.agents/product-marketing.md`.
