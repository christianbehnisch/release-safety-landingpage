import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";

const outputRoot = "dist/client";

async function* outputFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      yield* outputFiles(path);
    } else if (path.endsWith(".html") || path.endsWith(".rsc")) {
      yield path;
    }
  }
}

for await (const file of outputFiles(outputRoot)) {
  const source = await readFile(file, "utf8");
  const depth = relative(outputRoot, dirname(file)).split(sep).filter(Boolean).length;
  const assetRoot = depth === 0 ? "." : Array(depth).fill("..").join("/");
  const githubPagesSafe = source.replaceAll("/_next/", `${assetRoot}/_next/`);
  await writeFile(file, githubPagesSafe);
}

console.log("Prepared relative asset paths for GitHub Pages.");
