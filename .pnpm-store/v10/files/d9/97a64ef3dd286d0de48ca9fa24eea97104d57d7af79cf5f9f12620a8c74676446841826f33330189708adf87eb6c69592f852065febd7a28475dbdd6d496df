"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childInit = childInit;
exports.clearConfigCache = clearConfigCache;
exports.invalidateRequireCache = invalidateRequireCache;
exports.runPackage = runPackage;
exports.runTransform = runTransform;
exports.runValidate = runValidate;

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _BundleGraph = _interopRequireDefault(require("./BundleGraph"));

var _Transformation = _interopRequireDefault(require("./Transformation"));

var _ReporterRunner = require("./ReporterRunner");

var _PackagerRunner = _interopRequireDefault(require("./PackagerRunner"));

var _Validation = _interopRequireDefault(require("./Validation"));

var _ParcelConfig = _interopRequireDefault(require("./ParcelConfig"));

var _utils2 = require("./utils");

var _buildCache = require("./buildCache");

function _sourceMap() {
  const data = require("@parcel/source-map");

  _sourceMap = function () {
    return data;
  };

  return data;
}

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

function _workers() {
  const data = _interopRequireDefault(require("@parcel/workers"));

  _workers = function () {
    return data;
  };

  return data;
}

require("@parcel/cache");

require("@parcel/package-manager");

require("@parcel/fs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// register with serializer
(0, _utils2.registerCoreWithSerializer)(); // Remove the workerApi type from the TransformationOpts and ValidationOpts types:
// https://github.com/facebook/flow/issues/2835

// TODO: this should eventually be replaced by an in memory cache layer
let parcelConfigCache = new Map();

function loadOptions(ref, workerApi) {
  return (0, _nullthrows().default)(workerApi.getSharedReference(ref // $FlowFixMe
  ));
}

async function loadConfig(cachePath, options) {
  let config = parcelConfigCache.get(cachePath);

  if (config && config.options === options) {
    return config;
  }

  let processedConfig = (0, _nullthrows().default)(await options.cache.get(cachePath));
  config = new _ParcelConfig.default(processedConfig, options);
  parcelConfigCache.set(cachePath, config);
  return config;
}

function clearConfigCache() {
  _utils().loadConfig.clear();

  (0, _buildCache.clearBuildCaches)();
}

async function runTransform(workerApi, opts) {
  let {
    optionsRef,
    configCachePath,
    ...rest
  } = opts;
  let options = loadOptions(optionsRef, workerApi);
  let config = await loadConfig(configCachePath, options);
  return new _Transformation.default({
    workerApi,
    options,
    config,
    ...rest
  }).run();
}

async function runValidate(workerApi, opts) {
  let {
    optionsRef,
    configCachePath,
    ...rest
  } = opts;
  let options = loadOptions(optionsRef, workerApi);
  let config = await loadConfig(configCachePath, options);
  return new _Validation.default({
    workerApi,
    report: _ReporterRunner.reportWorker.bind(null, workerApi),
    options,
    config,
    ...rest
  }).run();
}

async function runPackage(workerApi, {
  bundle,
  bundleGraphReference,
  configCachePath,
  optionsRef,
  previousDevDeps,
  invalidDevDeps,
  previousInvalidations
}) {
  let bundleGraph = workerApi.getSharedReference(bundleGraphReference);
  (0, _assert().default)(bundleGraph instanceof _BundleGraph.default);
  let options = loadOptions(optionsRef, workerApi);
  let parcelConfig = await loadConfig(configCachePath, options);
  let runner = new _PackagerRunner.default({
    config: parcelConfig,
    options,
    report: _workers().default.isWorker() ? _ReporterRunner.reportWorker.bind(null, workerApi) : _ReporterRunner.report,
    previousDevDeps,
    previousInvalidations
  });
  return runner.run(bundleGraph, bundle, invalidDevDeps);
}

async function childInit() {
  await _sourceMap().init;
  await _hash().init;
}

const PKG_RE = /node_modules[/\\]((?:@[^/\\]+[/\\][^/\\]+)|[^/\\]+)(?!.*[/\\]node_modules[/\\])/;

function invalidateRequireCache() {
  throw new Error('invalidateRequireCache is only for tests');
}