"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuildAbortError = void 0;
exports.assertSignalNotAborted = assertSignalNotAborted;
exports.fromInternalSourceLocation = fromInternalSourceLocation;
exports.getBundleGroupId = getBundleGroupId;
exports.getPublicId = getPublicId;
exports.hashFromOption = hashFromOption;
exports.invalidateOnFileCreateToInternal = invalidateOnFileCreateToInternal;
exports.optionsProxy = optionsProxy;
exports.registerCoreWithSerializer = registerCoreWithSerializer;
exports.toInternalSourceLocation = toInternalSourceLocation;
exports.toInternalSymbols = toInternalSymbols;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _baseX() {
  const data = _interopRequireDefault(require("base-x"));

  _baseX = function () {
    return data;
  };

  return data;
}

function _graph() {
  const data = require("@parcel/graph");

  _graph = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

var _serializer = require("./serializer");

var _AssetGraph = _interopRequireDefault(require("./AssetGraph"));

var _BundleGraph = _interopRequireDefault(require("./BundleGraph"));

var _ParcelConfig = _interopRequireDefault(require("./ParcelConfig"));

var _RequestTracker = require("./RequestTracker");

var _Config = _interopRequireDefault(require("./public/Config"));

var _projectPath = require("./projectPath");

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// flowlint-next-line untyped-import:off
const base62 = (0, _baseX().default)('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

function getBundleGroupId(bundleGroup) {
  return 'bundle_group:' + bundleGroup.entryAssetId;
}

function assertSignalNotAborted(signal) {
  if (signal && signal.aborted) {
    throw new BuildAbortError();
  }
}

class BuildAbortError extends Error {
  name = 'BuildAbortError';
}

exports.BuildAbortError = BuildAbortError;
let coreRegistered;

function registerCoreWithSerializer() {
  if (coreRegistered) {
    return;
  }

  const packageVersion = _package.default.version;

  if (typeof packageVersion !== 'string') {
    throw new Error('Expected package version to be a string');
  } // $FlowFixMe[incompatible-cast]


  for (let [name, ctor] of Object.entries({
    AssetGraph: _AssetGraph.default,
    Config: _Config.default,
    BundleGraph: _BundleGraph.default,
    Graph: _graph().Graph,
    ParcelConfig: _ParcelConfig.default,
    RequestGraph: _RequestTracker.RequestGraph // $FlowFixMe[unclear-type]

  })) {
    (0, _serializer.registerSerializableClass)(packageVersion + ':' + name, ctor);
  }

  coreRegistered = true;
}

function getPublicId(id, alreadyExists) {
  let encoded = base62.encode(Buffer.from(id, 'hex'));

  for (let end = 5; end <= encoded.length; end++) {
    let candidate = encoded.slice(0, end);

    if (!alreadyExists(candidate)) {
      return candidate;
    }
  }

  throw new Error('Original id was not unique');
} // These options don't affect compilation and should cause invalidations


const ignoreOptions = new Set(['env', // handled by separate invalidateOnEnvChange
'inputFS', 'outputFS', 'workerFarm', 'packageManager', 'detailedReport', 'shouldDisableCache', 'cacheDir', 'shouldAutoInstall', 'logLevel', 'shouldProfile', 'shouldPatchConsole', 'projectRoot', 'additionalReporters']);

function optionsProxy(options, invalidateOnOptionChange, addDevDependency) {
  let packageManager = addDevDependency ? proxyPackageManager(options.projectRoot, options.packageManager, addDevDependency) : options.packageManager;
  return new Proxy(options, {
    get(target, prop) {
      if (prop === 'packageManager') {
        return packageManager;
      }

      if (!ignoreOptions.has(prop)) {
        invalidateOnOptionChange(prop);
      }

      return target[prop];
    }

  });
}

function proxyPackageManager(projectRoot, packageManager, addDevDependency) {
  let require = (id, from, opts) => {
    addDevDependency({
      specifier: id,
      resolveFrom: (0, _projectPath.toProjectPath)(projectRoot, from),
      range: opts === null || opts === void 0 ? void 0 : opts.range
    });
    return packageManager.require(id, from, opts);
  };

  return new Proxy(packageManager, {
    get(target, prop) {
      if (prop === 'require') {
        return require;
      } // $FlowFixMe


      return target[prop];
    }

  });
}

function hashFromOption(value) {
  if (typeof value === 'object' && value != null) {
    return (0, _utils().hashObject)(value);
  }

  return String(value);
}

function invalidateOnFileCreateToInternal(projectRoot, invalidation) {
  if (invalidation.glob != null) {
    return {
      glob: (0, _projectPath.toProjectPath)(projectRoot, invalidation.glob)
    };
  } else if (invalidation.filePath != null) {
    return {
      filePath: (0, _projectPath.toProjectPath)(projectRoot, invalidation.filePath)
    };
  } else {
    (0, _assert().default)(invalidation.aboveFilePath != null && invalidation.fileName != null);
    return {
      fileName: invalidation.fileName,
      aboveFilePath: (0, _projectPath.toProjectPath)(projectRoot, invalidation.aboveFilePath)
    };
  }
}

function fromInternalSourceLocation(projectRoot, loc) {
  if (!loc) return loc;
  return {
    filePath: (0, _projectPath.fromProjectPath)(projectRoot, loc.filePath),
    start: loc.start,
    end: loc.end
  };
}

function toInternalSourceLocation(projectRoot, loc) {
  if (!loc) return loc;
  return {
    filePath: (0, _projectPath.toProjectPath)(projectRoot, loc.filePath),
    start: loc.start,
    end: loc.end
  };
}

function toInternalSymbols(projectRoot, symbols) {
  if (!symbols) return symbols;
  return new Map([...symbols].map(([k, {
    loc,
    ...v
  }]) => [k, { ...v,
    loc: toInternalSourceLocation(projectRoot, loc)
  }]));
}