"use strict";

const babelP = import("./lib/index.js");
let babel = null;
Object.defineProperty(exports, "__ initialize @babel/core cjs proxy __", {
  set(val) {
    babel = val;
  },
});

exports.version = require("./package.json").version;

const functionNames = [
  "createConfigItem",
  "loadPartialConfig",
  "loadOptions",
  "transform",
  "transformFile",
  "transformFromAst",
  "parse",
];
const propertyNames = ["types", "tokTypes", "traverse", "template"];

for (const name of functionNames) {
  exports[name] = function (...args) {
    babelP.then(babel => {
      babel[name](...args);
    });
  };
  exports[`${name}Async`] = function (...args) {
    return babelP.then(babel => babel[`${name}Async`](...args));
  };
  exports[`${name}Sync`] = function (...args) {
    if (!babel) throw notLoadedError(`${name}Sync`, "callable");
    return babel[`${name}Sync`](...args);
  };
}

for (const name of propertyNames) {
  Object.defineProperty(exports, name, {
    get() {
      if (!babel) throw notLoadedError(name, "accessible");
      return babel[name];
    },
  });
}

function notLoadedError(name, keyword) {
  return new Error(
    `The \`${name}\` export of @babel/core is only ${keyword}` +
      ` from the CommonJS version after that the ESM version is loaded.`
  );
}
