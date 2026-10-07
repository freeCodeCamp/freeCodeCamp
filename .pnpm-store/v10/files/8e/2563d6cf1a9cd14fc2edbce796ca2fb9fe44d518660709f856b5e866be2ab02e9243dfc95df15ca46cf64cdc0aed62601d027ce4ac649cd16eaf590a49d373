const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.join(__dirname, "..");

const pkgJson = require(path.join(root, "package.json"));
const srcFolders = fs.readdirSync(path.join(root, "src"));

assert(pkgJson.exports === undefined, "We cannot support package.json exports yet.");

/**
 * We probably can't enable package.json exports until
 * dropping support for Node.js 14.x and TypeScript 4.6.
 */
process.exit(0);

for (const srcFolder of srcFolders) {
  if (fs.lstatSync(path.join(root, "src", srcFolder)).isDirectory()) {
    if (!pkgJson.exports["./" + srcFolder]) {
      throw new Error(`${srcFolder} is missing exports statement in package.json`);
    }
  }
}
