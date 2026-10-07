"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPackageRequest = createPackageRequest;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _ConfigRequest = require("./ConfigRequest");

var _DevDepRequest = require("./DevDepRequest");

var _ParcelConfigRequest = _interopRequireDefault(require("./ParcelConfigRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPackageRequest(input) {
  return {
    type: 'package_request',
    id: input.bundleGraph.getHash(input.bundle),
    run,
    input
  };
}

async function run({
  input,
  api,
  farm
}) {
  let {
    bundleGraphReference,
    optionsRef,
    bundle,
    useMainThread
  } = input;
  let runPackage = farm.createHandle('runPackage', useMainThread);
  let start = Date.now();
  let {
    devDeps,
    invalidDevDeps
  } = await (0, _DevDepRequest.getDevDepRequests)(api);
  let {
    cachePath
  } = (0, _nullthrows().default)(await api.runRequest((0, _ParcelConfigRequest.default)()));
  let {
    devDepRequests,
    configRequests,
    bundleInfo,
    invalidations
  } = await runPackage({
    bundle,
    bundleGraphReference,
    optionsRef,
    configCachePath: cachePath,
    previousDevDeps: devDeps,
    invalidDevDeps,
    previousInvalidations: api.getInvalidations()
  });

  for (let devDepRequest of devDepRequests) {
    await (0, _DevDepRequest.runDevDepRequest)(api, devDepRequest);
  }

  for (let configRequest of configRequests) {
    await (0, _ConfigRequest.runConfigRequest)(api, configRequest);
  }

  for (let invalidation of invalidations) {
    switch (invalidation.type) {
      case 'file':
        api.invalidateOnFileUpdate(invalidation.filePath);
        api.invalidateOnFileDelete(invalidation.filePath);
        break;

      case 'env':
        api.invalidateOnEnvChange(invalidation.key);
        break;

      case 'option':
        api.invalidateOnOptionChange(invalidation.key);
        break;

      default:
        throw new Error(`Unknown invalidation type: ${invalidation.type}`);
    }
  } // $FlowFixMe[cannot-write] time is marked read-only, but this is the exception


  bundleInfo.time = Date.now() - start;
  api.storeResult(bundleInfo);
  return bundleInfo;
}