"use strict";

exports.__esModule = true;
exports.has = has;
exports.laterLogMissing = laterLogMissing;
exports.logMissing = logMissing;
exports.resolve = resolve;
function resolve(dirname, moduleName, absoluteImports) {
  if (absoluteImports === false) return moduleName;
  throw new Error(`"absoluteImports" is not supported in bundles prepared for the browser.`);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function has(basedir, name) {
  return true;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function logMissing(missingDeps) {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function laterLogMissing(missingDeps) {}