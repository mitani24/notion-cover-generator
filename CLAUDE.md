# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Notionページ用の美しくパーソナライズされたカバー画像を生成するツール。現在は初期段階で、実装はこれから。

## 開発コマンド

```bash
# パッケージマネージャーはpnpmを使用
pnpm install

# テスト実行（現在未実装）
pnpm test
```

## プロジェクト構造

現在は最小限の構造のみ：
- `package.json` - Node.jsプロジェクト設定
- `README.md` - プロジェクトの簡単な説明
- `LICENSE` - MITライセンス

## 実装時の注意事項

1. パッケージマネージャーはpnpm（v10.12.1）を使用
2. Node.jsベースのプロジェクトとして初期化済み
3. エントリーポイントは`index.js`を想定（まだ作成されていない）
4. 画像生成ツールのため、Canvas APIやSVG生成ライブラリの使用を検討する可能性が高い