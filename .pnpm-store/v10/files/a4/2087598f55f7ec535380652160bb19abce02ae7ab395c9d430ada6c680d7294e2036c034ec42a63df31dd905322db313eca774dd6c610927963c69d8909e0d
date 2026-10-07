"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createWriteBundlesRequest;

var _constants = require("../constants");

var _projectPath = require("../projectPath");

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
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

var _PackageRequest = require("./PackageRequest");

var _WriteBundleRequest = _interopRequireDefault(require("./WriteBundleRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Packages, optimizes, and writes all bundles to the dist directory.
 */
function createWriteBundlesRequest(input) {
  return {
    type: 'write_bundles_request',
    id: 'write_bundles:' + input.bundleGraph.getBundleGraphHash(),
    run,
    input
  };
}

async function run({
  input,
  api,
  farm,
  options
}) {
  let {
    bundleGraph,
    optionsRef
  } = input;
  let {
    ref,
    dispose
  } = await farm.createSharedReference(bundleGraph);
  api.invalidateOnOptionChange('shouldContentHash');
  let res = new Map();
  let bundleInfoMap = {};
  let writeEarlyPromises = {};
  let hashRefToNameHash = new Map();
  let bundles = bundleGraph.getBundles().filter(bundle => {
    // Do not package and write placeholder bundles to disk. We just
    // need to update the name so other bundles can reference it.
    if (bundle.isPlaceholder) {
      let hash = bundle.id.slice(-8);
      hashRefToNameHash.set(bundle.hashReference, hash);
      let name = (0, _nullthrows().default)(bundle.name).replace(bundle.hashReference, hash);
      res.set(bundle.id, {
        filePath: (0, _projectPath.joinProjectPath)(bundle.target.distDir, name),
        type: bundle.type,
        // FIXME: this is wrong if the packager changes the type...
        stats: {
          time: 0,
          size: 0
        }
      });
      return false;
    }

    return true;
  }); // Package on the main thread if there is only one bundle to package.
  // This avoids the cost of serializing the bundle graph for single file change builds.

  let useMainThread = bundles.length === 1 || bundles.filter(b => !api.canSkipSubrequest(bundleGraph.getHash(b))).length === 1;

  try {
    await Promise.all(bundles.map(async bundle => {
      let request = (0, _PackageRequest.createPackageRequest)({
        bundle,
        bundleGraph,
        bundleGraphReference: ref,
        optionsRef,
        useMainThread
      });
      let info = await api.runRequest(request);
      bundleInfoMap[bundle.id] = info;

      if (!info.hashReferences.length) {
        hashRefToNameHash.set(bundle.hashReference, options.shouldContentHash ? info.hash.slice(-8) : bundle.id.slice(-8));
        let writeBundleRequest = (0, _WriteBundleRequest.default)({
          bundle,
          info,
          hashRefToNameHash,
          bundleGraph
        });
        let promise = api.runRequest(writeBundleRequest); // If the promise rejects before we await it (below), we don't want to crash the build.

        promise.catch(() => {});
        writeEarlyPromises[bundle.id] = promise;
      }
    }));
    assignComplexNameHashes(hashRefToNameHash, bundles, bundleInfoMap, options);
    await Promise.all(bundles.map(bundle => {
      var _writeEarlyPromises$b;

      let promise = (_writeEarlyPromises$b = writeEarlyPromises[bundle.id]) !== null && _writeEarlyPromises$b !== void 0 ? _writeEarlyPromises$b : api.runRequest((0, _WriteBundleRequest.default)({
        bundle,
        info: bundleInfoMap[bundle.id],
        hashRefToNameHash,
        bundleGraph
      }));
      return promise.then(r => res.set(bundle.id, r));
    }));
    api.storeResult(res);
    return res;
  } finally {
    await dispose();
  }
}

function assignComplexNameHashes(hashRefToNameHash, bundles, bundleInfoMap, options) {
  for (let bundle of bundles) {
    if (hashRefToNameHash.get(bundle.hashReference) != null) {
      continue;
    }

    hashRefToNameHash.set(bundle.hashReference, options.shouldContentHash ? (0, _hash().hashString)([...getBundlesIncludedInHash(bundle.id, bundleInfoMap)].map(bundleId => bundleInfoMap[bundleId].hash).join(':')).slice(-8) : bundle.id.slice(-8));
  }
}

function getBundlesIncludedInHash(bundleId, bundleInfoMap, included = new Set()) {
  included.add(bundleId);

  for (let hashRef of bundleInfoMap[bundleId].hashReferences) {
    let referencedId = getIdFromHashRef(hashRef);

    if (!included.has(referencedId)) {
      getBundlesIncludedInHash(referencedId, bundleInfoMap, included);
    }
  }

  return included;
}

function getIdFromHashRef(hashRef) {
  return hashRef.slice(_constants.HASH_REF_PREFIX.length);
}