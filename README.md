# SmallTools Lab

ニッチな「あったらいいな」を叶えるツール集

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


SmallToolsLab/
├── astro.config.mjs          # Astro設定（Tailwind統合、サイトURL）
├── tailwind.config.mjs       # Tailwindカスタム設定（SWELL風カラー、Noto Sans JP）
├── tsconfig.json             # TypeScript設定
├── package.json              # 依存関係定義
├── public/
│   └── favicon.svg           # SVGファビコン
└── src/
    ├── data/
    │   └── apps.json         # アプリデータ（一元管理）
    ├── layouts/
    │   └── Layout.astro      # 共通レイアウト（OGP、AdSenseスロット）
    ├── components/
    │   ├── Header.astro      # ヘッダー（ロゴ、ナビ、モバイルメニュー）
    │   ├── Footer.astro      # フッター（運営者情報、免責事項、リンク集）
    │   └── AppCard.astro     # アプリカード（SWELL風ホバーアニメーション）
    └── pages/
        └── index.astro       # トップページ

