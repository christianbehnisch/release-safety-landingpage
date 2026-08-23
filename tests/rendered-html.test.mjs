import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static export contains the landing page and essential metadata", async () => {
  const html = await readFile("dist/client/index.html", "utf8");

  assert.match(html, /Ihre wichtigsten Kundenprozesse/);
  assert.match(html, /Release-Safety-Pilot/);
  assert.match(html, /Automatisierte E2E-Absicherung/);
  assert.match(html, /portrait\.jpg/);
  assert.match(html, /og\.png/);
});
