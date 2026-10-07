"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPlugin = loadPlugin;
exports.loadPreset = loadPreset;
exports.resolvePreset = exports.resolvePlugin = void 0;
function _debug() {
  const data = require("debug");
  _debug = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
var _async = require("../../gensync-utils/async.js");
var _moduleTypes = require("./module-types.js");
function _url() {
  const data = require("url");
  _url = function () {
    return data;
  };
  return data;
}
var _importMetaResolve = require("../../vendor/import-meta-resolve.js");
function _fs() {
  const data = require("fs");
  _fs = function () {
    return data;
  };
  return data;
}
const debug = _debug()("babel:config:loading:files:plugins");
const EXACT_RE = /^module:/;
const BABEL_PLUGIN_PREFIX_RE = /^(?!@|module:|[^/]+\/|babel-plugin-)/;
const BABEL_PRESET_PREFIX_RE = /^(?!@|module:|[^/]+\/|babel-preset-)/;
const BABEL_PLUGIN_ORG_RE = /^(@babel\/)(?!plugin-|[^/]+\/)/;
const BABEL_PRESET_ORG_RE = /^(@babel\/)(?!preset-|[^/]+\/)/;
const OTHER_PLUGIN_ORG_RE = /^(@(?!babel\/)[^/]+\/)(?![^/]*babel-plugin(?:-|\/|$)|[^/]+\/)/;
const OTHER_PRESET_ORG_RE = /^(@(?!babel\/)[^/]+\/)(?![^/]*babel-preset(?:-|\/|$)|[^/]+\/)/;
const OTHER_ORG_DEFAULT_RE = /^(@(?!babel$)[^/]+)$/;
const resolvePlugin = exports.resolvePlugin = resolveStandardizedName.bind(null, "plugin");
const resolvePreset = exports.resolvePreset = resolveStandardizedName.bind(null, "preset");
function* loadPlugin(name, dirname) {
  const filepath = resolvePlugin(name, dirname, yield* (0, _async.isAsync)());
  const value = yield* requireModule("plugin", filepath);
  debug("Loaded plugin %o from %o.", name, dirname);
  return {
    filepath,
    value
  };
}
function* loadPreset(name, dirname) {
  const filepath = resolvePreset(name, dirname, yield* (0, _async.isAsync)());
  const value = yield* requireModule("preset", filepath);
  debug("Loaded preset %o from %o.", name, dirname);
  return {
    filepath,
    value
  };
}
function standardizeName(type, name) {
  if (_path().isAbsolute(name)) return name;
  const isPreset = type === "preset";
  return name.replace(isPreset ? BABEL_PRESET_PREFIX_RE : BABEL_PLUGIN_PREFIX_RE, `babel-${type}-`).replace(isPreset ? BABEL_PRESET_ORG_RE : BABEL_PLUGIN_ORG_RE, `$1${type}-`).replace(isPreset ? OTHER_PRESET_ORG_RE : OTHER_PLUGIN_ORG_RE, `$1babel-${type}-`).replace(OTHER_ORG_DEFAULT_RE, `$1/babel-${type}`).replace(EXACT_RE, "");
}
function* resolveAlternativesHelper(type, name) {
  const standardizedName = standardizeName(type, name);
  const {
    error,
    value
  } = yield standardizedName;
  if (!error) return value;
  if (error.code !== "MODULE_NOT_FOUND") throw error;
  if (standardizedName !== name && !(yield name).error) {
    error.message += `\n- If you want to resolve "${name}", use "module:${name}"`;
  }
  if (!(yield standardizeName(type, "@babel/" + name)).error) {
    error.message += `\n- Did you mean "@babel/${name}"?`;
  }
  const oppositeType = type === "preset" ? "plugin" : "preset";
  if (!(yield standardizeName(oppositeType, name)).error) {
    error.message += `\n- Did you accidentally pass a ${oppositeType} as a ${type}?`;
  }
  if (type === "plugin") {
    const transformName = standardizedName.replace("-proposal-", "-transform-");
    if (transformName !== standardizedName && !(yield transformName).error) {
      error.message += `\n- Did you mean "${transformName}"?`;
    }
  }
  error.message += `\n
Make sure that all the Babel plugins and presets you are using
are defined as dependencies or devDependencies in your package.json
file. It's possible that the missing plugin is loaded by a preset
you are using that forgot to add the plugin to its dependencies: you
can workaround this problem by explicitly adding the missing package
to your top-level package.json.
`;
  throw error;
}
function tryRequireResolve(id, dirname) {
  try {
    if (dirname) {
      return {
        error: null,
        value: (((v, w) => (v = v.split("."), w = w.split("."), +v[0] > +w[0] || v[0] == w[0] && +v[1] >= +w[1]))(process.versions.node, "8.9") ? require.resolve : (r, {
          paths: [b]
        }, M = require("module")) => {
          let f = M._findPath(r, M._nodeModulePaths(b).concat(b));
          if (f) return f;
          f = new Error(`Cannot resolve module '${r}'`);
          f.code = "MODULE_NOT_FOUND";
          throw f;
        })(id, {
          paths: [dirname]
        })
      };
    } else {
      return {
        error: null,
        value: require.resolve(id)
      };
    }
  } catch (error) {
    return {
      error,
      value: null
    };
  }
}
function tryImportMetaResolve(id, options) {
  try {
    return {
      error: null,
      value: (0, _importMetaResolve.resolve)(id, options)
    };
  } catch (error) {
    return {
      error,
      value: null
    };
  }
}
function resolveStandardizedNameForRequire(type, name, dirname) {
  const it = resolveAlternativesHelper(type, name);
  let res = it.next();
  while (!res.done) {
    res = it.next(tryRequireResolve(res.value, dirname));
  }
  return res.value;
}
function resolveStandardizedNameForImport(type, name, dirname) {
  const parentUrl = (0, _url().pathToFileURL)(_path().join(dirname, "./babel-virtual-resolve-base.js")).href;
  const it = resolveAlternativesHelper(type, name);
  let res = it.next();
  while (!res.done) {
    res = it.next(tryImportMetaResolve(res.value, parentUrl));
  }
  return (0, _url().fileURLToPath)(res.value);
}
function resolveStandardizedName(type, name, dirname, resolveESM) {
  if (!_moduleTypes.supportsESM || !resolveESM) {
    return resolveStandardizedNameForRequire(type, name, dirname);
  }
  try {
    const resolved = resolveStandardizedNameForImport(type, name, dirname);
    if (!(0, _fs().existsSync)(resolved)) {
      throw Object.assign(new Error(`Could not resolve "${name}" in file ${dirname}.`), {
        type: "MODULE_NOT_FOUND"
      });
    }
    return resolved;
  } catch (e) {
    try {
      return resolveStandardizedNameForRequire(type, name, dirname);
    } catch (e2) {
      if (e.type === "MODULE_NOT_FOUND") throw e;
      if (e2.type === "MODULE_NOT_FOUND") throw e2;
      throw e;
    }
  }
}
{
  var LOADING_MODULES = new Set();
}
function* requireModule(type, name) {
  {
    if (!(yield* (0, _async.isAsync)()) && LOADING_MODULES.has(name)) {
      throw new Error(`Reentrant ${type} detected trying to load "${name}". This module is not ignored ` + "and is trying to load itself while compiling itself, leading to a dependency cycle. " + 'We recommend adding it to your "ignore" list in your babelrc, or to a .babelignore.');
    }
  }
  try {
    {
      LOADING_MODULES.add(name);
    }
    {
      return yield* (0, _moduleTypes.default)(name, `You appear to be using a native ECMAScript module ${type}, ` + "which is only supported when running Babel asynchronously.", true);
    }
  } catch (err) {
    err.message = `[BABEL]: ${err.message} (While processing: ${name})`;
    throw err;
  } finally {
    {
      LOADING_MODULES.delete(name);
    }
  }
}
0 && 0;

//# sourceMappingURL=plugins.js.map
