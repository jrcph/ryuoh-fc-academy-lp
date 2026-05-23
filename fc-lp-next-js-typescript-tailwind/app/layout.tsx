import type { Metadata } from "next";
import "./globals.css";

const siteName = "竜王FCサッカーアカデミー";
const siteTitle =
  "竜王FCサッカーアカデミー｜山陽小野田市・宇部市近郊のサッカースクール";
const siteDescription =
  "竜王FCサッカーアカデミーは、山口県山陽小野田市・宇部市近郊で活動する少年向けサッカーアカデミーです。もっと活躍したい、自信をつけたい、今の自分を変えたい子どもたちが、ボールコントロールを高め、自分で考え、自分で動ける選手へ成長することを目指します。体験参加受付中。";
const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ryuoh-fc-academy-lp.vercel.app").replace(
    /\/$/,
    "",
  );

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
