# SmallTools Lab

ニッチな「あったらいいな」を叶えるツール集  
🌐 https://smalltoollab.com

## 技術スタック

- **フレームワーク**: Astro (SSG)
- **スタイリング**: Tailwind CSS
- **ホスティング**: GitHub Pages + 独自ドメイン
- **CI/CD**: GitHub Actions

## プロジェクト構造

```
SmallToolsLab/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions 自動デプロイ
├── public/
│   ├── CNAME                       # 独自ドメイン設定
│   ├── favicon.svg                 # ファビコン
│   └── knitting-voice-counter/     # ツールアプリ（静的HTML）
│       └── index.html
├── src/
│   ├── components/
│   │   ├── Header.astro            # ヘッダー（ロゴ・ナビ）
│   │   ├── Footer.astro            # フッター（運営者情報・免責事項）
│   │   └── AppCard.astro           # アプリカードコンポーネント
│   ├── data/
│   │   └── apps.json               # アプリ情報データ（一元管理）
│   ├── layouts/
│   │   └── Layout.astro            # 共通レイアウト（OGP・AdSense）
│   └── pages/
│       ├── index.astro             # トップページ
│       └── privacy-policy.astro    # プライバシーポリシー
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## アプリの追加方法

1. `public/` にアプリのフォルダを配置（例: `public/new-app/index.html`）
2. `src/data/apps.json` にエントリを追加：

```json
{
  "id": "new-app",
  "title": "アプリ名",
  "description": "説明文",
  "category": "カテゴリ",
  "icon": "🎯",
  "url": "/new-app/",
  "updatedAt": "2026-03-22"
}
```

3. `git push` で自動デプロイ

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

## デプロイ

`main` ブランチにpushすると、GitHub Actionsで自動的にGitHub Pagesへデプロイされます。

