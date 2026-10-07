#!/usr/bin/env node

const { resolve } = require("node:path");

const script = process.argv.splice(2, 1)[0];

if (!script) {
   
  console.error("Usage: jiti <path> [...arguments]");
  process.exit(1);
}

const pwd = process.cwd();
const jiti = require("..")(pwd);
const resolved = (process.argv[1] = jiti.resolve(resolve(pwd, script)));
jiti(resolved);
