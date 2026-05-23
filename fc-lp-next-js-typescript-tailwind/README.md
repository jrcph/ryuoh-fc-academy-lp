# 竜王FCサッカーアカデミー LP

Next.js、TypeScript、Tailwind CSSで作成した1ページ完結のランディングページです。

## URL差し替え

LINEとInstagramのリンクは `app/page.tsx` の上部にあります。

```ts
const LINE_URL = "https://line.me/R/ti/p/@replace-me";
const INSTAGRAM_URL = "https://www.instagram.com/replace_me/";
```

## 公開URL設定

Vercel公開後、環境変数 `NEXT_PUBLIC_SITE_URL` に本番URLを設定すると、canonical、sitemap、robotsのURLが本番向けになります。

例:

```txt
NEXT_PUBLIC_SITE_URL=https://example.vercel.app
```

Google Search ConsoleのHTMLタグ確認を使う場合は、`content` の値を次の環境変数に設定してください。

```txt
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=google-site-verification-code
```

## 開発

```bash
npm install
npm run dev
```

## Google Search Console

公開後、Google Search Consoleでは次のURLを送信できます。

```txt
https://your-domain.example/sitemap.xml
```
