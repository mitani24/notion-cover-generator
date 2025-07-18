# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Notion Cover Generator - Notionページ用のカバー画像を生成するWebアプリケーション

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
tsc --noEmit
```

## 技術スタック

- **React 19.1.0** - UIライブラリ
- **TypeScript 5.8.3** - 型安全性
- **Vite 7.0.4** - ビルドツール（React SWCプラグイン使用）
- **pnpm** - パッケージマネージャー

## プロジェクト構造

```
src/
├── main.tsx      # アプリケーションのエントリーポイント
├── App.tsx       # ルートコンポーネント
├── App.css       # アプリケーションスタイル
├── index.css     # グローバルスタイル
└── assets/       # 静的リソース
```

## 開発時の注意事項

1. **型安全性**: TypeScriptのstrict modeが有効。型エラーは必ず解消すること
2. **ESLint**: React Hooks、React Refreshルールが有効
3. **ビルド**: Vite + SWCで高速トランスパイル
4. **スタイリング**: 現在は通常のCSSファイルを使用

## 現在の状態

プロジェクトは初期セットアップ済みだが、実際のNotion Cover Generator機能は未実装。
Viteのデフォルトテンプレートから開始する必要がある。