import type { Metadata } from "next";
import "./globals.css";

const repository = process.env.GITHUB_REPOSITORY?.split("/");
const owner = repository?.[0];
const repo = repository?.[1];
const isUserPage = repo?.endsWith(".github.io");
const basePath = repo && !isUserPage ? `/${repo}` : "";
const siteUrl = owner
  ? `https://${owner}.github.io${basePath}/`
  : "http://localhost:3000/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Release Safety – Automatisierte E2E-Absicherung für SaaS",
  description:
    "Kritische Kundenprozesse automatisiert bei jedem Release prüfen – mit Playwright, verständlicher Fehlerdiagnose und persönlicher Betreuung.",
  keywords: [
    "Release Sicherheit",
    "Playwright Testing",
    "E2E Testing",
    "SaaS Testing",
    "Testautomatisierung",
  ],
  authors: [{ name: "Release Safety" }],
  openGraph: {
    title: "Release-Sicherheit für SaaS",
    description: "Kritische User Journeys. Automatisch geprüft.",
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    images: [
      {
        url: "./og.png",
        width: 1200,
        height: 630,
        alt: "Release-Sicherheit für SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Release-Sicherheit für SaaS",
    description: "Kritische User Journeys. Automatisch geprüft.",
    images: ["./og.png"],
  },
  icons: {
    icon: "./favicon.png",
    apple: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
