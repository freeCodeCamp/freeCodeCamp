"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveOptions;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
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

function _fs() {
  const data = require("@parcel/fs");

  _fs = function () {
    return data;
  };

  return data;
}

function _cache() {
  const data = require("@parcel/cache");

  _cache = function () {
    return data;
  };

  return data;
}

function _packageManager() {
  const data = require("@parcel/package-manager");

  _packageManager = function () {
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

var _loadDotEnv = _interopRequireDefault(require("./loadDotEnv"));

var _projectPath = require("./projectPath");

var _ParcelConfigRequest = require("./requests/ParcelConfigRequest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default cache directory name
const DEFAULT_CACHE_DIRNAME = '.parcel-cache';
const LOCK_FILE_NAMES = ['yarn.lock', 'package-lock.json', 'pnpm-lock.yaml']; // Generate a unique instanceId, will change on every run of parcel

function generateInstanceId(entries) {
  return (0, _hash().hashString)(`${entries.join(',')}-${Date.now()}-${Math.round(Math.random() * 100)}`);
}

async function resolveOptions(initialOptions) {
  var _initialOptions$cache, _initialOptions$mode, _initialOptions$defau, _initialOptions$defau2, _initialOptions$defau3, _initialOptions$defau4, _initialOptions$defau5, _initialOptions$defau6, _initialOptions$shoul, _initialOptions$shoul2, _initialOptions$env, _initialOptions$shoul3, _initialOptions$shoul4, _initialOptions$hmrOp, _initialOptions$shoul5, _initialOptions$shoul6, _initialOptions$shoul7, _initialOptions$logLe, _initialOptions$addit, _initialOptions$addit2, _initialOptions$defau7, _initialOptions$defau8, _initialOptions$defau9, _initialOptions$defau10, _initialOptions$defau11, _initialOptions$defau12;

  let inputFS = initialOptions.inputFS || new (_fs().NodeFS)();
  let outputFS = initialOptions.outputFS || new (_fs().NodeFS)();
  let inputCwd = inputFS.cwd();
  let outputCwd = outputFS.cwd();
  let entries;

  if (initialOptions.entries == null || initialOptions.entries === '') {
    entries = [];
  } else if (Array.isArray(initialOptions.entries)) {
    entries = initialOptions.entries.map(entry => _path().default.resolve(inputCwd, entry));
  } else {
    entries = [_path().default.resolve(inputCwd, initialOptions.entries)];
  }

  let shouldMakeEntryReferFolder = false;

  if (entries.length === 1 && !(0, _utils().isGlob)(entries[0])) {
    let [entry] = entries;

    try {
      shouldMakeEntryReferFolder = (await inputFS.stat(entry)).isDirectory();
    } catch {// ignore failing stat call
    }
  } // getRootDir treats the input as files, so getRootDir(["/home/user/myproject"]) returns "/home/user".
  // Instead we need to make the the entry refer to some file inside the specified folders if entries refers to the directory.


  let entryRoot = (0, _utils().getRootDir)(shouldMakeEntryReferFolder ? [_path().default.join(entries[0], 'index')] : entries);

  let projectRootFile = (await (0, _utils().resolveConfig)(inputFS, _path().default.join(entryRoot, 'index'), [...LOCK_FILE_NAMES, '.git', '.hg'], _path().default.parse(entryRoot).root)) || _path().default.join(inputCwd, 'index'); // ? Should this just be rootDir


  let projectRoot = _path().default.dirname(projectRootFile);

  let packageManager = initialOptions.packageManager || new (_packageManager().NodePackageManager)(inputFS, projectRoot);
  let cacheDir = // If a cacheDir is provided, resolve it relative to cwd. Otherwise,
  // use a default directory resolved relative to the project root.
  initialOptions.cacheDir != null ? _path().default.resolve(outputCwd, initialOptions.cacheDir) : _path().default.resolve(projectRoot, DEFAULT_CACHE_DIRNAME);
  let cache = (_initialOptions$cache = initialOptions.cache) !== null && _initialOptions$cache !== void 0 ? _initialOptions$cache : outputFS instanceof _fs().NodeFS ? new (_cache().LMDBCache)(cacheDir) : new (_cache().FSCache)(outputFS, cacheDir);
  let mode = (_initialOptions$mode = initialOptions.mode) !== null && _initialOptions$mode !== void 0 ? _initialOptions$mode : 'development';
  let shouldOptimize = (_initialOptions$defau = initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau2 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau2 === void 0 ? void 0 : _initialOptions$defau2.shouldOptimize) !== null && _initialOptions$defau !== void 0 ? _initialOptions$defau : mode === 'production';
  let publicUrl = (_initialOptions$defau3 = initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau4 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau4 === void 0 ? void 0 : _initialOptions$defau4.publicUrl) !== null && _initialOptions$defau3 !== void 0 ? _initialOptions$defau3 : '/';
  let distDir = (initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau5 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau5 === void 0 ? void 0 : _initialOptions$defau5.distDir) != null ? _path().default.resolve(inputCwd, initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau6 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau6 === void 0 ? void 0 : _initialOptions$defau6.distDir) : undefined;
  let shouldBuildLazily = (_initialOptions$shoul = initialOptions.shouldBuildLazily) !== null && _initialOptions$shoul !== void 0 ? _initialOptions$shoul : false;
  let shouldContentHash = (_initialOptions$shoul2 = initialOptions.shouldContentHash) !== null && _initialOptions$shoul2 !== void 0 ? _initialOptions$shoul2 : initialOptions.mode === 'production';

  if (shouldBuildLazily && shouldContentHash) {
    throw new Error('Lazy bundling does not work with content hashing');
  }

  let env = { ...(await (0, _loadDotEnv.default)((_initialOptions$env = initialOptions.env) !== null && _initialOptions$env !== void 0 ? _initialOptions$env : {}, inputFS, _path().default.join(projectRoot, 'index'), projectRoot)),
    ...process.env,
    ...initialOptions.env
  };
  let port = determinePort(initialOptions.serveOptions, env.PORT);
  return {
    config: getRelativeConfigSpecifier(inputFS, projectRoot, initialOptions.config),
    defaultConfig: getRelativeConfigSpecifier(inputFS, projectRoot, initialOptions.defaultConfig),
    shouldPatchConsole: (_initialOptions$shoul3 = initialOptions.shouldPatchConsole) !== null && _initialOptions$shoul3 !== void 0 ? _initialOptions$shoul3 : false,
    env,
    mode,
    shouldAutoInstall: (_initialOptions$shoul4 = initialOptions.shouldAutoInstall) !== null && _initialOptions$shoul4 !== void 0 ? _initialOptions$shoul4 : false,
    hmrOptions: (_initialOptions$hmrOp = initialOptions.hmrOptions) !== null && _initialOptions$hmrOp !== void 0 ? _initialOptions$hmrOp : null,
    shouldBuildLazily,
    shouldBundleIncrementally: (_initialOptions$shoul5 = initialOptions.shouldBundleIncrementally) !== null && _initialOptions$shoul5 !== void 0 ? _initialOptions$shoul5 : true,
    shouldContentHash,
    serveOptions: initialOptions.serveOptions ? { ...initialOptions.serveOptions,
      distDir: distDir !== null && distDir !== void 0 ? distDir : _path().default.join(outputCwd, 'dist'),
      port
    } : false,
    shouldDisableCache: (_initialOptions$shoul6 = initialOptions.shouldDisableCache) !== null && _initialOptions$shoul6 !== void 0 ? _initialOptions$shoul6 : false,
    shouldProfile: (_initialOptions$shoul7 = initialOptions.shouldProfile) !== null && _initialOptions$shoul7 !== void 0 ? _initialOptions$shoul7 : false,
    cacheDir,
    entries: entries.map(e => (0, _projectPath.toProjectPath)(projectRoot, e)),
    targets: initialOptions.targets,
    logLevel: (_initialOptions$logLe = initialOptions.logLevel) !== null && _initialOptions$logLe !== void 0 ? _initialOptions$logLe : 'info',
    projectRoot,
    inputFS,
    outputFS,
    cache,
    packageManager,
    additionalReporters: (_initialOptions$addit = (_initialOptions$addit2 = initialOptions.additionalReporters) === null || _initialOptions$addit2 === void 0 ? void 0 : _initialOptions$addit2.map(({
      packageName,
      resolveFrom
    }) => ({
      packageName,
      resolveFrom: (0, _projectPath.toProjectPath)(projectRoot, resolveFrom)
    }))) !== null && _initialOptions$addit !== void 0 ? _initialOptions$addit : [],
    instanceId: generateInstanceId(entries),
    detailedReport: initialOptions.detailedReport,
    defaultTargetOptions: {
      shouldOptimize,
      shouldScopeHoist: initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau7 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau7 === void 0 ? void 0 : _initialOptions$defau7.shouldScopeHoist,
      sourceMaps: (_initialOptions$defau8 = initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau9 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau9 === void 0 ? void 0 : _initialOptions$defau9.sourceMaps) !== null && _initialOptions$defau8 !== void 0 ? _initialOptions$defau8 : true,
      publicUrl,
      ...(distDir != null ? {
        distDir: (0, _projectPath.toProjectPath)(projectRoot, distDir)
      } : {
        /*::...null*/
      }),
      engines: initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau10 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau10 === void 0 ? void 0 : _initialOptions$defau10.engines,
      outputFormat: initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau11 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau11 === void 0 ? void 0 : _initialOptions$defau11.outputFormat,
      isLibrary: initialOptions === null || initialOptions === void 0 ? void 0 : (_initialOptions$defau12 = initialOptions.defaultTargetOptions) === null || _initialOptions$defau12 === void 0 ? void 0 : _initialOptions$defau12.isLibrary
    }
  };
}

function getRelativeConfigSpecifier(fs, projectRoot, specifier) {
  if (specifier == null) {
    return undefined;
  } else if (_path().default.isAbsolute(specifier)) {
    let resolveFrom = (0, _ParcelConfigRequest.getResolveFrom)(fs, projectRoot);
    let relative = (0, _utils().relativePath)(_path().default.dirname(resolveFrom), specifier); // If the config is outside the project root, use an absolute path so that if the project root
    // moves the path still works. Otherwise, use a relative path so that the cache is portable.

    return relative.startsWith('..') ? specifier : relative;
  } else {
    return specifier;
  }
}

function determinePort(initialServerOptions, portInEnv, defaultPort = 1234) {
  var _parsePort2;

  function parsePort(port) {
    let parsedPort = Number(port); // return undefined if port number defined in .env is not valid integer

    if (!Number.isInteger(parsedPort)) {
      return undefined;
    }

    return parsedPort;
  }

  if (!initialServerOptions) {
    var _parsePort;

    return typeof portInEnv !== 'undefined' ? (_parsePort = parsePort(portInEnv)) !== null && _parsePort !== void 0 ? _parsePort : defaultPort : defaultPort;
  } // if initialServerOptions.port is equal to defaultPort, then this means that port number is provided via PORT=~~~~ on cli. In this case, we should ignore port number defined in .env.


  if (initialServerOptions.port !== defaultPort) {
    return initialServerOptions.port;
  }

  return typeof portInEnv !== 'undefined' ? (_parsePort2 = parsePort(portInEnv)) !== null && _parsePort2 !== void 0 ? _parsePort2 : defaultPort : defaultPort;
}