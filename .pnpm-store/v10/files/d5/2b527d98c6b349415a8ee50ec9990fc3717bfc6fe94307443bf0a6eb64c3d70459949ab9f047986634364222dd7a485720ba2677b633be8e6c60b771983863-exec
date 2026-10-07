#!/usr/bin/env node

import { parse } from "..";
import { readFileSync } from "node:fs";

const filename = process.argv[2];
if (!filename) {
  console.error("no filename specified");
} else {
  const file = readFileSync(filename, "utf8");
  const ast = parse(file);

  console.log(JSON.stringify(ast, null, "  "));
}
