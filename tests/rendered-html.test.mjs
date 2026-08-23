import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static export contains the landing page and essential metadata", async () => {
  const html = await readFile("dist/client/index.html", "utf8");
  const englishHtml = await readFile("dist/client/en.html", "utf8");

  assert.match(html, /Ihre wichtigsten Kundenprozesse/);
  assert.match(html, /Release-Safety-Pilot/);
  assert.match(html, /Automatisierte E2E-Absicherung/);
  assert.match(html, /portrait\.jpg/);
  assert.match(html, /og\.png/);
  assert.match(html, /href="\.\/en\.html"/);

  assert.match(englishHtml, /Your most important customer journeys/);
  assert.match(englishHtml, /Release Safety Pilot/);
  assert.match(englishHtml, /Automated E2E Testing for SaaS/);
  assert.match(englishHtml, /lang="en"/);
  assert.match(englishHtml, /href="\.\/"/);
  assert.match(englishHtml, /src="\.\/portrait\.jpg"/);
});
