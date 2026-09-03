import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static export contains the landing page and essential metadata", async () => {
  const html = await readFile("dist/client/index.html", "utf8");
  const englishHtml = await readFile("dist/client/en.html", "utf8");
  const imprintHtml = await readFile("dist/client/impressum.html", "utf8");
  const privacyHtml = await readFile("dist/client/datenschutz.html", "utf8");

  assert.match(html, /Ihre wichtigsten Kundenprozesse/);
  assert.match(html, /Release-Safety-Pilot/);
  assert.match(html, /Managed E2E Testing für Web, iOS &amp; Android/);
  assert.match(html, /Web-Anwendungen/);
  assert.match(html, /iOS-Apps/);
  assert.match(html, /Android-Apps/);
  assert.match(html, /Playwright oder Appium/);
  assert.match(html, /3 Journeys · 1 Plattform/);
  assert.match(html, /Nicht nur versprochen/);
  assert.match(html, /Release Safety E2E workflow status/);
  assert.match(html, /release-safety-demo\/actions\/workflows\/release-safety\.yml/);
  assert.match(html, /release-safety-demo\/report\//);
  assert.match(html, /Demo-Webseite öffnen/);
  assert.match(html, /Beispielreport ansehen/);
  assert.match(html, /E2E-Absicherung für Web &amp; Mobile/);
  assert.match(html, /portrait\.jpg/);
  assert.match(html, /og\.png/);
  assert.match(html, /href="\.\/en\.html"/);
  assert.match(html, /href="\.\/impressum\.html"/);
  assert.match(html, /href="\.\/datenschutz\.html"/);

  assert.match(englishHtml, /Your most important customer journeys/);
  assert.match(englishHtml, /Release Safety Pilot/);
  assert.match(englishHtml, /Managed E2E Testing for Web, iOS &amp; Android/);
  assert.match(englishHtml, /Web applications/);
  assert.match(englishHtml, /iOS apps/);
  assert.match(englishHtml, /Android apps/);
  assert.match(englishHtml, /Playwright or Appium/);
  assert.match(englishHtml, /E2E Testing for Web &amp; Mobile/);
  assert.match(englishHtml, /More than a promise/);
  assert.match(englishHtml, /Open demo website/);
  assert.match(englishHtml, /View sample report/);
  assert.match(englishHtml, /lang="en"/);
  assert.match(englishHtml, /href="\.\/"/);
  assert.match(englishHtml, /src="\.\/portrait\.jpg"/);
  assert.match(englishHtml, /href="\.\/impressum\.html"/);
  assert.match(englishHtml, /href="\.\/datenschutz\.html"/);

  assert.match(imprintHtml, /Christian Behnisch/);
  assert.match(imprintHtml, /Zeisigweg 13/);
  assert.doesNotMatch(
    imprintHtml,
    /Einzelunternehmer|Kleinunternehmer|§ 19 UStG/,
  );
  assert.match(privacyHtml, /Hosting über GitHub Pages/);
  assert.match(privacyHtml, /Bayerische Landesamt für Datenschutzaufsicht/);
});
