import { readdirSync, writeFileSync, statSync } from "fs";

const ignore = ["src/index.ts"];

function checkSrcDir(path: string): string[] {
  const lines: string[] = [];

  for (const item of readdirSync(path)) {
    const itemPath = path + "/" + item;

    if (ignore.includes(itemPath)) {
      continue;
    }

    if (statSync(itemPath).isDirectory()) {
      lines.push(...checkSrcDir(itemPath));
    } else if (item.endsWith(".ts")) {
      lines.push('export * from "./' + itemPath.slice(4, -2) + 'js"');
    }
  }

  return lines;
}

const lines = checkSrcDir("src");

lines.push(
  'import { zodToJsonSchema } from "./zodToJsonSchema.js"',
  "export default zodToJsonSchema;",
);

writeFileSync("./src/index.ts", lines.join(";\n"));
