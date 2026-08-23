import type { Metadata } from "next";
import { LandingPage } from "../page";

export const dynamic = "force-static";

const repository = process.env.GITHUB_REPOSITORY?.split("/");
const owner = repository?.[0];
const repo = repository?.[1];
const isUserPage = repo?.endsWith(".github.io");
const basePath = repo && !isUserPage ? `/${repo}` : "";
const siteUrl = owner
  ? `https://${owner}.github.io${basePath}/`
  : "https://christianbehnisch.github.io/release-safety-landingpage/";
const englishUrl = new URL("en.html", siteUrl).toString();

export const metadata: Metadata = {
  title: "Release Safety – Automated E2E Testing for SaaS",
  description:
    "Test critical customer journeys with every release – using Playwright, clear failure diagnostics and personal support.",
  alternates: {
    canonical: englishUrl,
    languages: {
      "de-DE": siteUrl,
      "en-US": englishUrl,
    },
  },
  openGraph: {
    title: "Release Safety for SaaS",
    description: "Critical user journeys. Automatically tested.",
    locale: "en_US",
    url: englishUrl,
  },
  twitter: {
    title: "Release Safety for SaaS",
    description: "Critical user journeys. Automatically tested.",
  },
};

export default function EnglishHome() {
  return <LandingPage language="en" />;
}
