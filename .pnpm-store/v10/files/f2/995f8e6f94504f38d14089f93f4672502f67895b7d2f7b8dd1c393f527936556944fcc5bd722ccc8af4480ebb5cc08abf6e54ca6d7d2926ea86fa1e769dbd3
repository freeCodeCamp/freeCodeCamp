"use strict";

exports.__esModule = true;
exports.has = has;
exports.laterLogMissing = laterLogMissing;
exports.logMissing = logMissing;
exports.resolve = resolve;
var _path = _interopRequireDefault(require("path"));
var _lodash = _interopRequireDefault(require("lodash.debounce"));
var _resolve = _interopRequireDefault(require("resolve"));
var _module = require("module");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const nativeRequireResolve = parseFloat(process.versions.node) >= 8.9;
// eslint-disable-line

function myResolve(name, basedir) {
  if (nativeRequireResolve) {
    return require.resolve(name, {
      paths: [basedir]
    }).replace(/\\/g, "/");
  } else {
    return _resolve.default.sync(name, {
      basedir
    }).replace(/\\/g, "/");
  }
}
function resolve(dirname, moduleName, absoluteImports) {
  if (absoluteImports === false) return moduleName;
  let basedir = dirname;
  if (typeof absoluteImports === "string") {
    basedir = _path.default.resolve(basedir, absoluteImports);
  }
  try {
    return myResolve(moduleName, basedir);
  } catch (err) {
    if (err.code !== "MODULE_NOT_FOUND") throw err;
    throw Object.assign(new Error(`Failed to resolve "${moduleName}" relative to "${dirname}"`), {
      code: "BABEL_POLYFILL_NOT_FOUND",
      polyfill: moduleName,
      dirname
    });
  }
}
function has(basedir, name) {
  try {
    myResolve(name, basedir);
    return true;
  } catch (_unused) {
    return false;
  }
}
function logMissing(missingDeps) {
  if (missingDeps.size === 0) return;
  const deps = Array.from(missingDeps).sort().join(" ");
  console.warn("\nSome polyfills have been added but are not present in your dependencies.\n" + "Please run one of the following commands:\n" + `\tnpm install --save ${deps}\n` + `\tyarn add ${deps}\n`);
  process.exitCode = 1;
}
let allMissingDeps = new Set();
const laterLogMissingDependencies = (0, _lodash.default)(() => {
  logMissing(allMissingDeps);
  allMissingDeps = new Set();
}, 100);
function laterLogMissing(missingDeps) {
  if (missingDeps.size === 0) return;
  missingDeps.forEach(name => allMissingDeps.add(name));
  laterLogMissingDependencies();
}