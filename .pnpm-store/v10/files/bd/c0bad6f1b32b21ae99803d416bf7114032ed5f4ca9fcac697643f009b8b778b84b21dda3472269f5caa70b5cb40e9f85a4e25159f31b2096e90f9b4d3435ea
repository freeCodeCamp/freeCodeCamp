"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadCodeDefault;
exports.supportsESM = void 0;
var _async = require("../../gensync-utils/async.js");
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _url() {
  const data = require("url");
  _url = function () {
    return data;
  };
  return data;
}
require("module");
function _semver() {
  const data = require("semver");
  _semver = function () {
    return data;
  };
  return data;
}
function _debug() {
  const data = require("debug");
  _debug = function () {
    return data;
  };
  return data;
}
var _rewriteStackTrace = require("../../errors/rewrite-stack-trace.js");
var _configError = require("../../errors/config-error.js");
var _transformFile = require("../../transform-file.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
const debug = _debug()("babel:config:loading:files:module-types");
{
  try {
    var import_ = require("./import.cjs");
  } catch (_unused) {}
}
const supportsESM = exports.supportsESM = _semver().satisfies(process.versions.node, "^12.17 || >=13.2");
const LOADING_CJS_FILES = new Set();
function loadCjsDefault(filepath) {
  if (LOADING_CJS_FILES.has(filepath)) {
    debug("Auto-ignoring usage of config %o.", filepath);
    return {};
  }
  let module;
  try {
    LOADING_CJS_FILES.add(filepath);
    module = (0, _rewriteStackTrace.endHiddenCallStack)(require)(filepath);
  } finally {
    LOADING_CJS_FILES.delete(filepath);
  }
  {
    return module != null && (module.__esModule || module[Symbol.toStringTag] === "Module") ? module.default || (arguments[1] ? module : undefined) : module;
  }
}
const loadMjsFromPath = (0, _rewriteStackTrace.endHiddenCallStack)(function () {
  var _loadMjsFromPath = _asyncToGenerator(function* (filepath) {
    const url = (0, _url().pathToFileURL)(filepath).toString() + "?import";
    {
      if (!import_) {
        throw new _configError.default("Internal error: Native ECMAScript modules aren't supported by this platform.\n", filepath);
      }
      return yield import_(url);
    }
  });
  function loadMjsFromPath(_x) {
    return _loadMjsFromPath.apply(this, arguments);
  }
  return loadMjsFromPath;
}());
const tsNotSupportedError = ext => `\
You are using a ${ext} config file, but Babel only supports transpiling .cts configs. Either:
- Use a .cts config file
- Update to Node.js 23.6.0, which has native TypeScript support
- Install tsx to transpile ${ext} files on the fly\
`;
const SUPPORTED_EXTENSIONS = {
  ".js": "unknown",
  ".mjs": "esm",
  ".cjs": "cjs",
  ".ts": "unknown",
  ".mts": "esm",
  ".cts": "cjs"
};
const asyncModules = new Set();
function* loadCodeDefault(filepath, loader, esmError, tlaError) {
  let async;
  const ext = _path().extname(filepath);
  const isTS = ext === ".ts" || ext === ".cts" || ext === ".mts";
  const type = SUPPORTED_EXTENSIONS[hasOwnProperty.call(SUPPORTED_EXTENSIONS, ext) ? ext : ".js"];
  const pattern = `${loader} ${type}`;
  switch (pattern) {
    case "require cjs":
    case "auto cjs":
      if (isTS) {
        return ensureTsSupport(filepath, ext, () => loadCjsDefault(filepath));
      } else {
        return loadCjsDefault(filepath, arguments[2]);
      }
    case "auto unknown":
    case "require unknown":
    case "require esm":
      try {
        if (isTS) {
          return ensureTsSupport(filepath, ext, () => loadCjsDefault(filepath));
        } else {
          return loadCjsDefault(filepath, arguments[2]);
        }
      } catch (e) {
        if (e.code === "ERR_REQUIRE_ASYNC_MODULE" || e.code === "ERR_REQUIRE_CYCLE_MODULE" && asyncModules.has(filepath)) {
          asyncModules.add(filepath);
          if (!(async != null ? async : async = yield* (0, _async.isAsync)())) {
            throw new _configError.default(tlaError, filepath);
          }
        } else if (e.code === "ERR_REQUIRE_ESM" || type === "esm") {} else {
          throw e;
        }
      }
    case "auto esm":
      if (async != null ? async : async = yield* (0, _async.isAsync)()) {
        const promise = isTS ? ensureTsSupport(filepath, ext, () => loadMjsFromPath(filepath)) : loadMjsFromPath(filepath);
        return (yield* (0, _async.waitFor)(promise)).default;
      }
      if (isTS) {
        throw new _configError.default(tsNotSupportedError(ext), filepath);
      } else {
        throw new _configError.default(esmError, filepath);
      }
    default:
      throw new Error("Internal Babel error: unreachable code.");
  }
}
function ensureTsSupport(filepath, ext, callback) {
  if (process.features.typescript || require.extensions[".ts"] || require.extensions[".cts"] || require.extensions[".mts"]) {
    return callback();
  }
  if (ext !== ".cts") {
    throw new _configError.default(tsNotSupportedError(ext), filepath);
  }
  const opts = {
    babelrc: false,
    configFile: false,
    sourceType: "unambiguous",
    sourceMaps: "inline",
    sourceFileName: _path().basename(filepath),
    presets: [[getTSPreset(filepath), Object.assign({
      onlyRemoveTypeImports: true,
      optimizeConstEnums: true
    }, {
      allowDeclareFields: true
    })]]
  };
  let handler = function (m, filename) {
    if (handler && filename.endsWith(".cts")) {
      try {
        return m._compile((0, _transformFile.transformFileSync)(filename, Object.assign({}, opts, {
          filename
        })).code, filename);
      } catch (error) {
        const packageJson = require("@babel/preset-typescript/package.json");
        if (_semver().lt(packageJson.version, "7.21.4")) {
          console.error("`.cts` configuration file failed to load, please try to update `@babel/preset-typescript`.");
        }
        throw error;
      }
    }
    return require.extensions[".js"](m, filename);
  };
  require.extensions[ext] = handler;
  try {
    return callback();
  } finally {
    if (require.extensions[ext] === handler) delete require.extensions[ext];
    handler = undefined;
  }
}
function getTSPreset(filepath) {
  try {
    return require("@babel/preset-typescript");
  } catch (error) {
    if (error.code !== "MODULE_NOT_FOUND") throw error;
    let message = "You appear to be using a .cts file as Babel configuration, but the `@babel/preset-typescript` package was not found: please install it!";
    {
      if (process.versions.pnp) {
        message += `
If you are using Yarn Plug'n'Play, you may also need to add the following configuration to your .yarnrc.yml file:

packageExtensions:
\t"@babel/core@*":
\t\tpeerDependencies:
\t\t\t"@babel/preset-typescript": "*"
`;
      }
    }
    throw new _configError.default(message, filepath);
  }
}
0 && 0;

//# sourceMappingURL=module-types.js.map
