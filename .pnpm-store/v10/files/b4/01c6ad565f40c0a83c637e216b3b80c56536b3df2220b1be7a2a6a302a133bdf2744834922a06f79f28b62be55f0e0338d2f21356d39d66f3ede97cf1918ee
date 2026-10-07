"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDependency = createDependency;
exports.mergeDependencies = mergeDependencies;

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

var _types = require("./types");

var _utils = require("./utils");

var _projectPath = require("./projectPath");

function createDependency(projectRoot, opts) {
  var _opts$sourceAssetId, _opts$pipeline, _opts$bundleBehavior, _opts$priority, _opts$priority2, _opts$needsStableName, _opts$isEntry, _opts$isOptional;

  let id = opts.id || (0, _hash().hashString)(((_opts$sourceAssetId = opts.sourceAssetId) !== null && _opts$sourceAssetId !== void 0 ? _opts$sourceAssetId : '') + opts.specifier + opts.env.id + (opts.target ? JSON.stringify(opts.target) : '') + ((_opts$pipeline = opts.pipeline) !== null && _opts$pipeline !== void 0 ? _opts$pipeline : '') + opts.specifierType + ((_opts$bundleBehavior = opts.bundleBehavior) !== null && _opts$bundleBehavior !== void 0 ? _opts$bundleBehavior : '') + ((_opts$priority = opts.priority) !== null && _opts$priority !== void 0 ? _opts$priority : 'sync'));
  return { ...opts,
    resolveFrom: (0, _projectPath.toProjectPath)(projectRoot, opts.resolveFrom),
    sourcePath: (0, _projectPath.toProjectPath)(projectRoot, opts.sourcePath),
    id,
    loc: (0, _utils.toInternalSourceLocation)(projectRoot, opts.loc),
    specifierType: _types.SpecifierType[opts.specifierType],
    priority: _types.Priority[(_opts$priority2 = opts.priority) !== null && _opts$priority2 !== void 0 ? _opts$priority2 : 'sync'],
    needsStableName: (_opts$needsStableName = opts.needsStableName) !== null && _opts$needsStableName !== void 0 ? _opts$needsStableName : false,
    bundleBehavior: opts.bundleBehavior ? _types.BundleBehavior[opts.bundleBehavior] : null,
    isEntry: (_opts$isEntry = opts.isEntry) !== null && _opts$isEntry !== void 0 ? _opts$isEntry : false,
    isOptional: (_opts$isOptional = opts.isOptional) !== null && _opts$isOptional !== void 0 ? _opts$isOptional : false,
    meta: opts.meta || {},
    range: opts.range,
    symbols: opts.symbols && new Map([...opts.symbols].map(([k, v]) => [k, {
      local: v.local,
      meta: v.meta,
      isWeak: v.isWeak,
      loc: (0, _utils.toInternalSourceLocation)(projectRoot, v.loc)
    }]))
  };
}

function mergeDependencies(a, b) {
  let {
    meta,
    symbols,
    needsStableName,
    isEntry,
    isOptional,
    ...other
  } = b;
  Object.assign(a, other);
  Object.assign(a.meta, meta);

  if (a.symbols && symbols) {
    for (let [k, v] of symbols) {
      a.symbols.set(k, v);
    }
  }

  if (needsStableName) a.needsStableName = true;
  if (isEntry) a.isEntry = true;
  if (!isOptional) a.isOptional = false;
}