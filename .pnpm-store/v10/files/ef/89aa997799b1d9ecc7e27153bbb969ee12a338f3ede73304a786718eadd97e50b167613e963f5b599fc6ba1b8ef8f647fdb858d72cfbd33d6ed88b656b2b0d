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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const debug = _debug()("babel:config:loading:files:module-types");
let import_;
try {
  import_ = require("./import.cjs");
} catch (_unused) {}
const supportsESM = exports.supportsESM = _semver().satisfies(process.versions.node, "^12.17 || >=13.2");
function* loadCodeDefault(filepath, asyncError) {
  switch (_path().extname(filepath)) {
    case ".cjs":
      {
        return loadCjsDefault(filepath, arguments[2]);
      }
    case ".mjs":
      break;
    case ".cts":
      return loadCtsDefault(filepath);
    default:
      try {
        {
          return loadCjsDefault(filepath, arguments[2]);
        }
      } catch (e) {
        if (e.code !== "ERR_REQUIRE_ESM") throw e;
      }
  }
  if (yield* (0, _async.isAsync)()) {
    return yield* (0, _async.waitFor)(loadMjsDefault(filepath));
  }
  throw new _configError.default(asyncError, filepath);
}
function loadCtsDefault(filepath) {
  const ext = ".cts";
  const hasTsSupport = !!(require.extensions[".ts"] || require.extensions[".cts"] || require.extensions[".mts"]);
  let handler;
  if (!hasTsSupport) {
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
    handler = function (m, filename) {
      if (handler && filename.endsWith(ext)) {
        try {
          return m._compile((0, _transformFile.transformFileSync)(filename, Object.assign({}, opts, {
            filename
          })).code, filename);
        } catch (error) {
          if (!hasTsSupport) {
            const packageJson = require("@babel/preset-typescript/package.json");
            if (_semver().lt(packageJson.version, "7.21.4")) {
              console.error("`.cts` configuration file failed to load, please try to update `@babel/preset-typescript`.");
            }
          }
          throw error;
        }
      }
      return require.extensions[".js"](m, filename);
    };
    require.extensions[ext] = handler;
  }
  try {
    return loadCjsDefault(filepath);
  } finally {
    if (!hasTsSupport) {
      if (require.extensions[ext] === handler) delete require.extensions[ext];
      handler = undefined;
    }
  }
}
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
    var _module;
    return (_module = module) != null && _module.__esModule ? module.default || (arguments[1] ? module : undefined) : module;
  }
}
function loadMjsDefault(_x) {
  return _loadMjsDefault.apply(this, arguments);
}
function _loadMjsDefault() {
  _loadMjsDefault = _asyncToGenerator(function* (filepath) {
    if (!import_) {
      throw new _configError.default("Internal error: Native ECMAScript modules aren't supported by this platform.\n", filepath);
    }
    const module = yield (0, _rewriteStackTrace.endHiddenCallStack)(import_)((0, _url().pathToFileURL)(filepath));
    return module.default;
  });
  return _loadMjsDefault.apply(this, arguments);
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
