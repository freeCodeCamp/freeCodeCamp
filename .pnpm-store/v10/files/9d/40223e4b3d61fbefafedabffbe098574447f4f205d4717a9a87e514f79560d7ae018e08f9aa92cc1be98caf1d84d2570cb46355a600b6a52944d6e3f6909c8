// eslint-disable-next-line @typescript-eslint/no-require-imports
const lib = require("../dist/index.cjs");

module.exports = lib.consola;

for (const key in lib) {
  if (!(key in module.exports)) {
    module.exports[key] = lib[key];
  }
}
