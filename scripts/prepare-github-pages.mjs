import { readFile, writeFile } from "node:fs/promises";

const files = ["dist/client/index.html", "dist/client/index.rsc"];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const githubPagesSafe = source.replaceAll("/_next/", "./_next/");
  await writeFile(file, githubPagesSafe);
}

console.log("Prepared relative asset paths for GitHub Pages.");
