"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatorInfosMap = void 0;
var generatorFunctions = require("./generators/index.js");
var deprecatedGeneratorFunctions = require("./generators/deprecated.js");
const generatorInfosMap = exports.generatorInfosMap = new Map();
let index = 0;
for (const key of Object.keys(generatorFunctions).sort()) {
  if (key.startsWith("_")) continue;
  generatorInfosMap.set(key, [generatorFunctions[key], index++, undefined]);
}
for (const key of Object.keys(deprecatedGeneratorFunctions)) {
  generatorInfosMap.set(key, [deprecatedGeneratorFunctions[key], index++, undefined]);
}

//# sourceMappingURL=nodes.js.map
