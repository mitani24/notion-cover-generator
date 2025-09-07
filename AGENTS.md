# Repository Guidelines

## Project Structure & Module Organization
- `src/` – React + TypeScript app code.
  - `components/` (PascalCase components, UI in `components/ui/`)
  - `hooks/` (custom hooks, e.g., `useCoverParams.ts`)
  - `lib/` (utilities like `utils.ts`)
  - Path alias: `@/*` → `src/*`
- `public/` – static assets (e.g., `/fonts/Splatfont2.ttf`).
- `dist/` – build output (ignored).
- Config: `vite.config.ts`, `eslint.config.js`, `tsconfig.*.json`.

## Build, Test, and Development Commands
- `pnpm dev` – start Vite dev server.
- `pnpm build` – type-check and build to `dist/`.
- `pnpm preview` – preview the production build.
- `pnpm lint` – run ESLint.
- `pnpm type-check` – TypeScript diagnostics only.
- `pnpm format` / `pnpm format:check` – Prettier write/check.
Environment: Node 20, pnpm 10.x (see GitHub Actions).

## Coding Style & Naming Conventions
- Language: TypeScript + React 19, Vite 7, Tailwind CSS v4.
- Indentation: 2 spaces; keep lines focused and typed.
- Components: PascalCase files (`CoverCanvas.tsx`). Hooks: `useX.ts`.
- Utilities: kebab/camel file names (`utils.ts`). Exports named when feasible.
- Styling: Tailwind; use `cn` from `src/lib/utils.ts` to compose classes.
- Formatting: Prettier (+ tailwind plugin). Linting: ESLint 9 with typescript‑eslint and React plugins.

## Testing Guidelines
- No formal test suite yet. If adding tests:
  - Use Vitest + React Testing Library.
  - Place beside source as `*.test.ts(x)`.
  - Target pure logic (hooks/utils) and key UI behaviors.
  - Add `"test": "vitest"` script and keep coverage reasonable (>80% for new logic).

## Commit & Pull Request Guidelines
- Commit messages: imperative, concise; English or Japanese OK. Prefixes like `feat:`, `fix:` are welcome.
- Before opening a PR: run `pnpm format`, `pnpm lint`, and build.
- PRs should include: clear description, linked issues, and screenshots/GIFs for UI/canvas changes.
- Keep changes scoped; prefer small, focused PRs.

## CI & Deployment
- Deployed to GitHub Pages on pushes to `main` via `.github/workflows/deploy.yml`.
- Build uses `pnpm build`; Vite `base` is set for Pages. Verify the app works under `/notion-cover-generator/` locally with `pnpm preview`.

## Security & Configuration Tips
- External images must allow CORS; component uses `crossOrigin: 'anonymous'`. Prefer sources with proper headers.
- Do not commit secrets; this project is client‑only and requires none.

## Agent Responses
- 言語: 原則として日本語で回答する（ユーザーから別言語の指定がある場合はそれに従う）。
