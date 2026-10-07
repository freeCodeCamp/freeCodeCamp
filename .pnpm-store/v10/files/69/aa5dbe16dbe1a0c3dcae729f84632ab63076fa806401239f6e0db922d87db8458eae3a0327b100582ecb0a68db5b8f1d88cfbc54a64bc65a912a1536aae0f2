"use strict";

const resolve = require("resolve");
const eslintBase = require.resolve("eslint");

module.exports = function requireFromESLint(id) {
  const path = resolve.sync(id, { basedir: eslintBase });
  return require(path);
};
