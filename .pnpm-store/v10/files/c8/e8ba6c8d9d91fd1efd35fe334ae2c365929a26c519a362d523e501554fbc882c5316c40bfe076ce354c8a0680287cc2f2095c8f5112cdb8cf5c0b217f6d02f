"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const cloneDeep = require("clone-deep");
const path = require("path");
const fs = require("fs");
const babel = require("./babel-core.js");
const registerCache = require("../cache.js");
const nmRE = escapeRegExp(path.sep + "node_modules" + path.sep);
function escapeRegExp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
let cache;
let transformOpts;
exports.setOptions = function (opts) {
  if (opts.cache === false && cache) {
    registerCache.clear();
    cache = null;
  } else if (opts.cache !== false && !cache) {
    registerCache.load();
    cache = registerCache.get();
  }
  delete opts.cache;
  delete opts.extensions;
  transformOpts = Object.assign({}, opts, {
    caller: Object.assign({
      name: "@babel/register"
    }, opts.caller || {})
  });
  let {
    cwd = "."
  } = transformOpts;
  cwd = transformOpts.cwd = path.resolve(cwd);
  if (transformOpts.ignore === undefined && transformOpts.only === undefined) {
    const cwdRE = escapeRegExp(cwd);
    transformOpts.only = [new RegExp("^" + cwdRE, "i")];
    transformOpts.ignore = [new RegExp(`^${cwdRE}(?:${path.sep}.*)?${nmRE}`, "i")];
  }
};
exports.transform = _asyncToGenerator(function* (input, filename) {
  const opts = yield babel.loadOptionsAsync(Object.assign({
    sourceRoot: path.dirname(filename) + path.sep
  }, cloneDeep(transformOpts), {
    filename
  }));
  if (opts === null) return null;
  const {
    cached,
    store
  } = cacheLookup(opts, filename);
  if (cached) return cached;
  const {
    code,
    map
  } = yield babel.transformAsync(input, Object.assign({}, opts, {
    sourceMaps: opts.sourceMaps === undefined ? "both" : opts.sourceMaps,
    ast: false
  }));
  return store({
    code,
    map
  });
});
{
  exports.transformSync = function (input, filename) {
    const opts = new babel.OptionManager().init(Object.assign({
      sourceRoot: path.dirname(filename) + path.sep
    }, cloneDeep(transformOpts), {
      filename
    }));
    if (opts === null) return null;
    const {
      cached,
      store
    } = cacheLookup(opts, filename);
    if (cached) return cached;
    const {
      code,
      map
    } = babel.transformSync(input, Object.assign({}, opts, {
      sourceMaps: opts.sourceMaps === undefined ? "both" : opts.sourceMaps,
      ast: false
    }));
    return store({
      code,
      map
    });
  };
}
const id = value => value;
function cacheLookup(opts, filename) {
  if (!cache) return {
    cached: null,
    store: id
  };
  let cacheKey = `${JSON.stringify(opts)}:${babel.version}`;
  const env = babel.getEnv();
  if (env) cacheKey += `:${env}`;
  const cached = cache[cacheKey];
  const fileMtime = +fs.statSync(filename).mtime;
  if (cached && cached.mtime === fileMtime) {
    return {
      cached: cached.value,
      store: id
    };
  }
  return {
    cached: null,
    store(value) {
      cache[cacheKey] = {
        value,
        mtime: fileMtime
      };
      registerCache.setDirty();
      return value;
    }
  };
}

//# sourceMappingURL=transform.js.map
