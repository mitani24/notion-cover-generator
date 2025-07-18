# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Notion Cover Generator - Notionページ用のカバー画像を生成するWebアプリケーション

"Generate beautiful and personalized cover images for your Notion pages in seconds."

## 開発コマンド

```bash
# 開発サーバー起動
pnpm dev

# プロダクションビルド
pnpm build

# ビルド結果のプレビュー
pnpm preview

# 型チェックとLint
pnpm lint

# TypeScriptの型チェックのみ
pnpm type-check

# コードフォーマット
pnpm format

# フォーマットチェック（CIで使用）
pnpm format:check
```

## 技術スタック

- **React 19.1.0** - UIライブラリ
- **TypeScript 5.8.3** - 型安全性
- **Vite 7.0.4** - ビルドツール（React SWCプラグイン使用）
- **Tailwind CSS v4** - スタイリング（@tailwindcss/vite経由）
- **shadcn/ui** - UIコンポーネントライブラリ（components.json設定済み）
- **Lucide React** - アイコンライブラリ
- **pnpm 10.12.1** - パッケージマネージャー（固定バージョン）
- **Prettier** - コードフォーマッター（Tailwind CSSクラスソート付き）
- **ESLint v9** - フラットコンフィグ使用

## プロジェクト構造

```
src/
├── main.tsx      # アプリケーションのエントリーポイント
├── App.tsx       # ルートコンポーネント
├── App.css       # アプリケーションスタイル
├── index.css     # グローバルスタイル（Tailwind CSS directives）
├── assets/       # 静的リソース
└── lib/
    └── utils.ts  # ユーティリティ関数（cn関数など）
```

### パスエイリアス
- `@/*` → `./src/*` （Vite、TypeScript、shadcn/ui設定で統一）

## 開発時の注意事項

1. **型安全性**: 
   - TypeScriptのstrict modeが有効
   - 未使用変数・パラメータはエラー扱い
   - `noUncheckedSideEffectImports`有効（副作用インポートの型チェック）
2. **ESLint**: 
   - React Hooks、React Refreshルール有効
   - Prettier統合（eslint-config-prettier）
3. **ビルド**: Vite + SWCで高速トランスパイル
4. **スタイリング**: 
   - Tailwind CSS v4使用（@tailwindcss/vite）
   - Prettierでクラス名自動ソート（prettier-plugin-tailwindcss）
5. **コードフォーマット**:
   - trailing comma常に有効（`trailingComma: "all"`）
   - フォーマット実行前に必ず`pnpm format`を実行
6. **UIコンポーネント**:
   - shadcn/ui利用可能（`npx shadcn add`でコンポーネント追加）
   - カスタムCSSよりTailwind CSSクラスを優先
   - `cn()`ユーティリティ関数でクラス名を結合（`@/lib/utils`）

## 現在の実装状態

- プロジェクトは初期セットアップ済み
- Tailwind CSSでスタイリングされた"Hello world!"のみ表示
- アプリケーションタイトルは未更新（"Vite + React + TS"のまま）
- 実際のNotion Cover Generator機能は未実装

## プロジェクトアーキテクチャ

### 設定ファイル構成
- `tsconfig.json`: TypeScript設定のベース
- `tsconfig.app.json`: アプリケーションコード用（ES2022ターゲット）
- `tsconfig.node.json`: Vite設定用（ES2023ターゲット）
- `vite.config.ts`: Viteビルド設定（React SWC、Tailwind CSS v4プラグイン、パスエイリアス）
- `.prettierrc.json`: コードフォーマット設定（Tailwind CSSクラスソート付き）
- `.prettierignore`: Prettierの除外パターン定義
- `eslint.config.js`: ESLint v9フラットコンフィグ（dist除外設定含む）
- `components.json`: shadcn/ui設定（スタイル、パスエイリアス、コンポーネント配置）

### 今後の実装方針
Notion Cover Generatorとして、以下の機能実装が想定される：
- カバー画像生成エンジン（Canvas API等）
- テンプレート選択UI
- カスタマイズオプション（色、テキスト、パターン等）
- 画像ダウンロード機能
