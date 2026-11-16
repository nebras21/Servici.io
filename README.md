# Servici — Frontend

React SPA for **Servici**, a Tunisian home-services marketplace. This is the rewritten frontend that replaces the previous HomeServ frontend.

See the root [`CLAUDE.md`](../CLAUDE.md) for the agent rules and [`PRD.md`](../PRD.md) for the product spec.

## Stack

TypeScript · Vite · React 19 · React Router v7 · Tailwind v4 + shadcn-style primitives · TanStack Query + axios · React Hook Form + Zod · better-auth · socket.io-client · i18next (fr / en / ar-RTL) · date-fns · Vitest + React Testing Library.

## Getting started

```bash
npm install
cp .env.example .env        # VITE_API_URL=http://localhost:3000
npm run dev                 # http://localhost:5173
```

The backend must be running on port 3000. See `../backend/README` (or run `cd ../backend && npm run dev`).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server on :5173 |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | Run `tsc -b --noEmit` |
| `npm run lint` | ESLint for TS/TSX files |
| `npm test` | Vitest in watch mode |

## Project layout

```
src/
  app/             # App shell, router, providers
    providers/     # QueryClient, Theme, composed AppProviders
  pages/           # Route-level components (thin, compose features)
  features/        # Feature modules — own their api, schemas, components
    auth/ hirings/ providers/ services/ chat/ payments/ profile/
  components/
    ui/            # Button, Input, Label, Card, Spinner (shadcn-style)
    layout/        # Container, Section, Stack, Grid, PageHeader — own spacing
  lib/             # api client, cn, auth-client, query keys, dates, format
  i18n/            # i18next setup + locales/{fr,en,ar}.json
  styles/          # globals.css with Tailwind v4 @theme tokens
  test/            # Vitest setup
  types/           # Shared DTOs
```

## Phase status

- [x] **P0 — Foundation** (this PR)
- [ ] P1 — Auth pages (login, register, verify)
- [ ] P2 — Public pages (home, services, how-it-works, our-providers)
- [ ] P3 — Client flow
- [ ] P4 — Provider flow
- [ ] P5 — Chat + payments + reviews + become-provider wizard
- [ ] P6 — Polish (empty states, toasts, a11y audit, tests)

See [`../PRD.md`](../PRD.md) §10.
