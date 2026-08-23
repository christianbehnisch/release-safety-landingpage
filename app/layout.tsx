import type { Metadata } from "next";
import "./globals.css";

const repository = process.env.GITHUB_REPOSITORY?.split("/");
const owner = repository?.[0];
const repo = repository?.[1];
const isUserPage = repo?.endsWith(".github.io");
const basePath = repo && !isUserPage ? `/${repo}` : "";
const siteUrl = owner
  ? `https://${owner}.github.io${basePath}/`
  : "https://christianflying.github.io/release-safety-landingpage/";
const englishUrl = new URL("en.html", siteUrl).toString();

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
  alternates: {
    canonical: siteUrl,
    languages: {
      "de-DE": siteUrl,
      "en-US": englishUrl,
    },
  },
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
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'if(/\\/en(?:\\.html)?\\/?$/.test(location.pathname)){document.documentElement.lang="en"}',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
