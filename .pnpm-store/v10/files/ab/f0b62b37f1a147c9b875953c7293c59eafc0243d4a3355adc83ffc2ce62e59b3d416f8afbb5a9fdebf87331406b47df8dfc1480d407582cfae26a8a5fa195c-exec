#!/usr/bin/env node

import { resolve } from "node:path";
import nodeModule from "node:module";

const script = process.argv.splice(2, 1)[0];

if (!script) {
  console.error("Usage: jiti <path> [...arguments]");
  process.exit(1);
}

// https://nodejs.org/api/module.html#moduleenablecompilecachecachedir
// https://github.com/nodejs/node/pull/54501
if (nodeModule.enableCompileCache && !process.env.NODE_DISABLE_COMPILE_CACHE) {
  try {
    nodeModule.enableCompileCache();
  } catch {
    // Ignore errors
  }
}

const pwd = process.cwd();

const { createJiti } = await import("./jiti.cjs");

const jiti = createJiti(pwd);

const resolved = (process.argv[1] = jiti.resolve(resolve(pwd, script)));

await jiti.import(resolved).catch((error) => {
  console.error(error);
  process.exit(1);
});
