"use strict";

const semver = require("semver");
const convert = require("./convert/index.cjs");
const babelParser = require((((v, w) => (v = v.split("."), w = w.split("."), +v[0] > +w[0] || v[0] == w[0] && +v[1] >= +w[1]))(process.versions.node, "8.9") ? require.resolve : (r, {
  paths: [b]
}, M = require("module")) => {
  let f = M._findPath(r, M._nodeModulePaths(b).concat(b));
  if (f) return f;
  f = new Error(`Cannot resolve module '${r}'`);
  f.code = "MODULE_NOT_FOUND";
  throw f;
})("@babel/parser", {
  paths: [require.resolve("@babel/core/package.json")]
}));
let isRunningMinSupportedCoreVersion = null;
module.exports = function parse(code, options, client) {
  const minSupportedCoreVersion = ">=7.2.0";
  if (typeof isRunningMinSupportedCoreVersion !== "boolean") {
    isRunningMinSupportedCoreVersion = semver.satisfies(client.getVersion(), minSupportedCoreVersion);
  }
  if (!isRunningMinSupportedCoreVersion) {
    throw new Error(`@babel/eslint-parser@${"7.26.5"} does not support @babel/core@${client.getVersion()}. Please upgrade to @babel/core@${minSupportedCoreVersion}.`);
  }
  const {
    ast,
    parserOptions
  } = client.maybeParse(code, options);
  if (ast) return ast;
  try {
    return convert.convertFile(babelParser.parse(code, parserOptions), code, client.getTokLabels(), client.getVisitorKeys());
  } catch (err) {
    throw convert.convertError(err);
  }
};

//# sourceMappingURL=parse.cjs.map
