'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _jestHasteMap;

function _load_jestHasteMap() {
  return _jestHasteMap = _interopRequireDefault(require('jest-haste-map'));
}

var _jestResolve;

function _load_jestResolve() {
  return _jestResolve = _interopRequireDefault(require('jest-resolve'));
}

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _jestRegexUtil;

function _load_jestRegexUtil() {
  return _jestRegexUtil = require('jest-regex-util');
}

var _gracefulFs;

function _load_gracefulFs() {
  return _gracefulFs = _interopRequireDefault(require('graceful-fs'));
}

var _stripBom;

function _load_stripBom() {
  return _stripBom = _interopRequireDefault(require('strip-bom'));
}

var _script_transformer;

function _load_script_transformer() {
  return _script_transformer = _interopRequireDefault(require('./script_transformer'));
}

var _should_instrument;

function _load_should_instrument() {
  return _should_instrument = _interopRequireDefault(require('./should_instrument'));
}

var _cli;

function _load_cli() {
  return _cli = require('./cli');
}

var _args;

function _load_args() {
  return _args = require('./cli/args');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NODE_MODULES = (_path || _load_path()).default.sep + 'node_modules' + (_path || _load_path()).default.sep;
const SNAPSHOT_EXTENSION = 'snap';

const getModuleNameMapper = config => {
  if (Array.isArray(config.moduleNameMapper) && config.moduleNameMapper.length) {
    return config.moduleNameMapper.map((_ref) => {
      var _ref2 = _slicedToArray(_ref, 2);

      let regex = _ref2[0],
          moduleName = _ref2[1];

      return { moduleName, regex: new RegExp(regex) };
    });
  }
  return null;
};

const unmockRegExpCache = new WeakMap();

class Runtime {

  constructor(config, environment, resolver, cacheFS, coverageOptions) {
    this._cacheFS = cacheFS || Object.create(null);
    this._config = config;
    this._coverageOptions = coverageOptions || {
      collectCoverage: false,
      collectCoverageFrom: [],
      collectCoverageOnlyFrom: null
    };
    this._currentlyExecutingModulePath = '';
    this._environment = environment;
    this._explicitShouldMock = Object.create(null);
    this._internalModuleRegistry = Object.create(null);
    this._isCurrentlyExecutingManualMock = null;
    this._mockFactories = Object.create(null);
    this._mockRegistry = Object.create(null);
    this._moduleMocker = this._environment.moduleMocker;
    this._moduleRegistry = Object.create(null);
    this._needsCoverageMapped = new Set();
    this._resolver = resolver;
    this._scriptTransformer = new (_script_transformer || _load_script_transformer()).default(config);
    this._shouldAutoMock = config.automock;
    this._sourceMapRegistry = Object.create(null);
    this._virtualMocks = Object.create(null);

    this._mockMetaDataCache = Object.create(null);
    this._shouldMockModuleCache = Object.create(null);
    this._shouldUnmockTransitiveDependenciesCache = Object.create(null);
    this._transitiveShouldMock = Object.create(null);

    this._unmockList = unmockRegExpCache.get(config);
    if (!this._unmockList && config.unmockedModulePathPatterns) {
      this._unmockList = new RegExp(config.unmockedModulePathPatterns.join('|'));
      unmockRegExpCache.set(config, this._unmockList);
    }

    if (config.automock) {
      config.setupFiles.forEach(filePath => {
        if (filePath && filePath.includes(NODE_MODULES)) {
          const moduleID = this._resolver.getModuleID(this._virtualMocks, filePath);
          this._transitiveShouldMock[moduleID] = false;
        }
      });
    }

    this.resetModules();

    if (config.setupFiles.length) {
      for (let i = 0; i < config.setupFiles.length; i++) {
        this.requireModule(config.setupFiles[i]);
      }
    }
  }

  static shouldInstrument(filename, options, config) {
    return (0, (_should_instrument || _load_should_instrument()).default)(filename, {
      collectCoverage: options.collectCoverage,
      collectCoverageFrom: options.collectCoverageFrom,
      collectCoverageOnlyFrom: options.collectCoverageOnlyFrom
    }, config);
  }

  static createContext(config, options) {
    (0, (_jestUtil || _load_jestUtil()).createDirectory)(config.cacheDirectory);
    const instance = Runtime.createHasteMap(config, {
      console: options.console,
      maxWorkers: options.maxWorkers,
      resetCache: !config.cache,
      watch: options.watch,
      watchman: options.watchman
    });
    return instance.build().then(hasteMap => ({
      config,
      hasteFS: hasteMap.hasteFS,
      moduleMap: hasteMap.moduleMap,
      resolver: Runtime.createResolver(config, hasteMap.moduleMap)
    }), error => {
      throw error;
    });
  }

  static createHasteMap(config, options) {
    const ignorePattern = new RegExp([config.cacheDirectory].concat(config.modulePathIgnorePatterns).join('|'));

    return new (_jestHasteMap || _load_jestHasteMap()).default({
      cacheDirectory: config.cacheDirectory,
      console: options && options.console,
      extensions: [SNAPSHOT_EXTENSION].concat(config.moduleFileExtensions),
      hasteImplModulePath: config.haste.hasteImplModulePath,
      ignorePattern,
      maxWorkers: options && options.maxWorkers || 1,
      mocksPattern: (0, (_jestRegexUtil || _load_jestRegexUtil()).escapePathForRegex)((_path || _load_path()).default.sep + '__mocks__' + (_path || _load_path()).default.sep),
      name: config.name,
      platforms: config.haste.platforms || ['ios', 'android'],
      providesModuleNodeModules: config.haste.providesModuleNodeModules,
      resetCache: options && options.resetCache,
      retainAllFiles: false,
      roots: config.roots,
      useWatchman: options && options.watchman,
      watch: options && options.watch
    });
  }

  static createResolver(config, moduleMap) {
    return new (_jestResolve || _load_jestResolve()).default(moduleMap, {
      browser: config.browser,
      defaultPlatform: config.haste.defaultPlatform,
      extensions: config.moduleFileExtensions.map(extension => '.' + extension),
      hasCoreModules: true,
      moduleDirectories: config.moduleDirectories,
      moduleNameMapper: getModuleNameMapper(config),
      modulePaths: config.modulePaths,
      platforms: config.haste.platforms,
      resolver: config.resolver,
      rootDir: config.rootDir
    });
  }

  static runCLI(args, info) {
    return (0, (_cli || _load_cli()).run)(args, info);
  }

  static getCLIOptions() {
    return (_args || _load_args()).options;
  }

  requireModule(from, moduleName, options) {
    const moduleID = this._resolver.getModuleID(this._virtualMocks, from, moduleName);
    let modulePath;

    const moduleRegistry = !options || !options.isInternalModule ? this._moduleRegistry : this._internalModuleRegistry;

    // Some old tests rely on this mocking behavior. Ideally we'll change this
    // to be more explicit.
    const moduleResource = moduleName && this._resolver.getModule(moduleName);
    const manualMock = moduleName && this._resolver.getMockModule(from, moduleName);
    if ((!options || !options.isInternalModule) && !moduleResource && manualMock && manualMock !== this._isCurrentlyExecutingManualMock && this._explicitShouldMock[moduleID] !== false) {
      modulePath = manualMock;
    }

    if (moduleName && this._resolver.isCoreModule(moduleName)) {
      return this._requireCoreModule(moduleName);
    }

    if (!modulePath) {
      modulePath = this._resolveModule(from, moduleName);
    }

    if (!moduleRegistry[modulePath]) {
      // We must register the pre-allocated module object first so that any
      // circular dependencies that may arise while evaluating the module can
      const localModule = {
        children: [],
        exports: {},
        filename: modulePath,
        id: modulePath,
        loaded: false
      };
      moduleRegistry[modulePath] = localModule;
      if ((_path || _load_path()).default.extname(modulePath) === '.json') {
        localModule.exports = this._environment.global.JSON.parse((0, (_stripBom || _load_stripBom()).default)((_gracefulFs || _load_gracefulFs()).default.readFileSync(modulePath, 'utf8')));
      } else if ((_path || _load_path()).default.extname(modulePath) === '.node') {
        // $FlowFixMe
        localModule.exports = require(modulePath);
      } else {
        this._execModule(localModule, options, moduleRegistry, from);
      }

      localModule.loaded = true;
    }
    return moduleRegistry[modulePath].exports;
  }

  requireInternalModule(from, to) {
    return this.requireModule(from, to, { isInternalModule: true });
  }

  requireMock(from, moduleName) {
    const moduleID = this._resolver.getModuleID(this._virtualMocks, from, moduleName);

    if (this._mockRegistry[moduleID]) {
      return this._mockRegistry[moduleID];
    }

    if (moduleID in this._mockFactories) {
      return this._mockRegistry[moduleID] = this._mockFactories[moduleID]();
    }

    let manualMock = this._resolver.getMockModule(from, moduleName);
    let modulePath;
    if (manualMock) {
      modulePath = this._resolveModule(from, manualMock);
    } else {
      modulePath = this._resolveModule(from, moduleName);
    }
    // If the actual module file has a __mocks__ dir sitting immediately next
    // to it, look to see if there is a manual mock for this file.
    //
    // subDir1/my_module.js
    // subDir1/__mocks__/my_module.js
    // subDir2/my_module.js
    // subDir2/__mocks__/my_module.js
    //
    // Where some other module does a relative require into each of the
    // respective subDir{1,2} directories and expects a manual mock
    // corresponding to that particular my_module.js file.
    const moduleDir = (_path || _load_path()).default.dirname(modulePath);
    const moduleFileName = (_path || _load_path()).default.basename(modulePath);
    const potentialManualMock = (_path || _load_path()).default.join(moduleDir, '__mocks__', moduleFileName);
    if ((_gracefulFs || _load_gracefulFs()).default.existsSync(potentialManualMock)) {
      manualMock = true;
      modulePath = potentialManualMock;
    }

    if (manualMock) {
      const localModule = {
        children: [],
        exports: {},
        filename: modulePath,
        id: modulePath,
        loaded: false
      };
      this._execModule(localModule, undefined, this._mockRegistry, from);
      this._mockRegistry[moduleID] = localModule.exports;
      localModule.loaded = true;
    } else {
      // Look for a real module to generate an automock from
      this._mockRegistry[moduleID] = this._generateMock(from, moduleName);
    }

    return this._mockRegistry[moduleID];
  }

  requireModuleOrMock(from, moduleName) {
    if (this._shouldMock(from, moduleName)) {
      return this.requireMock(from, moduleName);
    } else {
      return this.requireModule(from, moduleName);
    }
  }

  resetModules() {
    this._mockRegistry = Object.create(null);
    this._moduleRegistry = Object.create(null);

    if (this._environment && this._environment.global) {
      const envGlobal = this._environment.global;
      Object.keys(envGlobal).forEach(key => {
        const globalMock = envGlobal[key];
        if (typeof globalMock === 'object' && globalMock !== null || typeof globalMock === 'function') {
          globalMock._isMockFunction && globalMock.mockClear();
        }
      });

      if (envGlobal.mockClearTimers) {
        envGlobal.mockClearTimers();
      }
    }
  }

  getAllCoverageInfoCopy() {
    return (0, (_jestUtil || _load_jestUtil()).deepCyclicCopy)(this._environment.global.__coverage__);
  }

  getSourceMapInfo(coveredFiles) {
    return Object.keys(this._sourceMapRegistry).reduce((result, sourcePath) => {
      if (coveredFiles.has(sourcePath) && this._needsCoverageMapped.has(sourcePath) && (_gracefulFs || _load_gracefulFs()).default.existsSync(this._sourceMapRegistry[sourcePath])) {
        result[sourcePath] = this._sourceMapRegistry[sourcePath];
      }
      return result;
    }, {});
  }

  getSourceMaps() {
    return this._sourceMapRegistry;
  }

  setMock(from, moduleName, mockFactory, options) {
    if (options && options.virtual) {
      const mockPath = this._resolver.getModulePath(from, moduleName);
      this._virtualMocks[mockPath] = true;
    }
    const moduleID = this._resolver.getModuleID(this._virtualMocks, from, moduleName);
    this._explicitShouldMock[moduleID] = true;
    this._mockFactories[moduleID] = mockFactory;
  }

  restoreAllMocks() {
    this._moduleMocker.restoreAllMocks();
  }

  resetAllMocks() {
    this._moduleMocker.resetAllMocks();
  }

  clearAllMocks() {
    this._moduleMocker.clearAllMocks();
  }

  _resolveModule(from, to) {
    return to ? this._resolver.resolveModule(from, to) : from;
  }

  _execModule(localModule, options, moduleRegistry, from) {
    // If the environment was disposed, prevent this module from being executed.
    if (!this._environment.global) {
      return;
    }

    const isInternalModule = !!(options && options.isInternalModule);
    const filename = localModule.filename;
    const lastExecutingModulePath = this._currentlyExecutingModulePath;
    this._currentlyExecutingModulePath = filename;
    const origCurrExecutingManualMock = this._isCurrentlyExecutingManualMock;
    this._isCurrentlyExecutingManualMock = filename;

    const dirname = (_path || _load_path()).default.dirname(filename);
    localModule.children = [];

    Object.defineProperty(localModule, 'parent',
    // https://github.com/facebook/flow/issues/285#issuecomment-270810619
    {
      enumerable: true,
      get() {
        return moduleRegistry[from] || null;
      }
    });

    localModule.paths = this._resolver.getModulePaths(dirname);
    Object.defineProperty(localModule, 'require', {
      value: this._createRequireImplementation(localModule, options)
    });

    const transformedFile = this._scriptTransformer.transform(filename, {
      collectCoverage: this._coverageOptions.collectCoverage,
      collectCoverageFrom: this._coverageOptions.collectCoverageFrom,
      collectCoverageOnlyFrom: this._coverageOptions.collectCoverageOnlyFrom,
      isInternalModule
    }, this._cacheFS[filename]);

    if (transformedFile.sourceMapPath) {
      this._sourceMapRegistry[filename] = transformedFile.sourceMapPath;
      if (transformedFile.mapCoverage) {
        this._needsCoverageMapped.add(filename);
      }
    }

    const wrapper = this._environment.runScript(transformedFile.script)[(_script_transformer || _load_script_transformer()).default.EVAL_RESULT_VARIABLE];
    wrapper.call(localModule.exports, // module context
    localModule, // module object
    localModule.exports, // module exports
    localModule.require, // require implementation
    dirname, // __dirname
    filename, // __filename
    this._environment.global, // global object
    this._createJestObjectFor(filename,
    // $FlowFixMe
    localModule.require) // jest object
    );

    this._isCurrentlyExecutingManualMock = origCurrExecutingManualMock;
    this._currentlyExecutingModulePath = lastExecutingModulePath;
  }

  _requireCoreModule(moduleName) {
    if (moduleName === 'process') {
      return this._environment.global.process;
    }

    // $FlowFixMe
    return require(moduleName);
  }

  _generateMock(from, moduleName) {
    const modulePath = this._resolveModule(from, moduleName);

    if (!(modulePath in this._mockMetaDataCache)) {
      // This allows us to handle circular dependencies while generating an
      // automock
      this._mockMetaDataCache[modulePath] = this._moduleMocker.getMetadata({});

      // In order to avoid it being possible for automocking to potentially
      // cause side-effects within the module environment, we need to execute
      // the module in isolation. This could cause issues if the module being
      // mocked has calls into side-effectful APIs on another module.
      const origMockRegistry = this._mockRegistry;
      const origModuleRegistry = this._moduleRegistry;
      this._mockRegistry = Object.create(null);
      this._moduleRegistry = Object.create(null);

      const moduleExports = this.requireModule(from, moduleName);

      // Restore the "real" module/mock registries
      this._mockRegistry = origMockRegistry;
      this._moduleRegistry = origModuleRegistry;

      const mockMetadata = this._moduleMocker.getMetadata(moduleExports);
      if (mockMetadata == null) {
        throw new Error(`Failed to get mock metadata: ${modulePath}\n\n` + `See: http://facebook.github.io/jest/docs/manual-mocks.html#content`);
      }
      this._mockMetaDataCache[modulePath] = mockMetadata;
    }
    return this._moduleMocker.generateFromMetadata(this._mockMetaDataCache[modulePath]);
  }

  _shouldMock(from, moduleName) {
    const mockPath = this._resolver.getModulePath(from, moduleName);
    if (mockPath in this._virtualMocks) {
      return true;
    }

    const explicitShouldMock = this._explicitShouldMock;
    const moduleID = this._resolver.getModuleID(this._virtualMocks, from, moduleName);
    const key = from + (_path || _load_path()).default.delimiter + moduleID;

    if (moduleID in explicitShouldMock) {
      return explicitShouldMock[moduleID];
    }

    if (!this._shouldAutoMock || this._resolver.isCoreModule(moduleName) || this._shouldUnmockTransitiveDependenciesCache[key]) {
      return false;
    }

    if (moduleID in this._shouldMockModuleCache) {
      return this._shouldMockModuleCache[moduleID];
    }

    let modulePath;
    try {
      modulePath = this._resolveModule(from, moduleName);
    } catch (e) {
      const manualMock = this._resolver.getMockModule(from, moduleName);
      if (manualMock) {
        this._shouldMockModuleCache[moduleID] = true;
        return true;
      }
      throw e;
    }

    if (this._unmockList && this._unmockList.test(modulePath)) {
      this._shouldMockModuleCache[moduleID] = false;
      return false;
    }

    // transitive unmocking for package managers that store flat packages (npm3)
    const currentModuleID = this._resolver.getModuleID(this._virtualMocks, from);
    if (this._transitiveShouldMock[currentModuleID] === false || from.includes(NODE_MODULES) && modulePath.includes(NODE_MODULES) && (this._unmockList && this._unmockList.test(from) || explicitShouldMock[currentModuleID] === false)) {
      this._transitiveShouldMock[moduleID] = false;
      this._shouldUnmockTransitiveDependenciesCache[key] = true;
      return false;
    }

    return this._shouldMockModuleCache[moduleID] = true;
  }

  _createRequireImplementation(from, options) {
    const moduleRequire = options && options.isInternalModule ? moduleName => this.requireInternalModule(from.filename, moduleName) : this.requireModuleOrMock.bind(this, from.filename);
    moduleRequire.cache = Object.create(null);
    moduleRequire.extensions = Object.create(null);
    moduleRequire.requireActual = this.requireModule.bind(this, from.filename);
    moduleRequire.requireMock = this.requireMock.bind(this, from.filename);
    moduleRequire.resolve = moduleName => this._resolveModule(from.filename, moduleName);
    Object.defineProperty(moduleRequire, 'main', {
      enumerable: true,
      get() {
        let mainModule = from.parent;
        while (mainModule && mainModule.parent && mainModule.id !== mainModule.parent.id) {
          mainModule = mainModule.parent;
        }
        return mainModule;
      }
    });
    return moduleRequire;
  }

  _createJestObjectFor(from, localRequire) {
    const disableAutomock = () => {
      this._shouldAutoMock = false;
      return jestObject;
    };
    const enableAutomock = () => {
      this._shouldAutoMock = true;
      return jestObject;
    };
    const unmock = moduleName => {
      const moduleID = this._resolver.getModuleID(this._virtualMocks, from, moduleName);
      this._explicitShouldMock[moduleID] = false;
      return jestObject;
    };
    const deepUnmock = moduleName => {
      const moduleID = this._resolver.getModuleID(this._virtualMocks, from, moduleName);
      this._explicitShouldMock[moduleID] = false;
      this._transitiveShouldMock[moduleID] = false;
      return jestObject;
    };
    const mock = (moduleName, mockFactory, options) => {
      if (mockFactory !== undefined) {
        return setMockFactory(moduleName, mockFactory, options);
      }

      const moduleID = this._resolver.getModuleID(this._virtualMocks, from, moduleName);
      this._explicitShouldMock[moduleID] = true;
      return jestObject;
    };
    const setMockFactory = (moduleName, mockFactory, options) => {
      this.setMock(from, moduleName, mockFactory, options);
      return jestObject;
    };
    const clearAllMocks = () => {
      this.clearAllMocks();
      return jestObject;
    };
    const resetAllMocks = () => {
      this.resetAllMocks();
      return jestObject;
    };
    const restoreAllMocks = () => {
      this.restoreAllMocks();
      return jestObject;
    };
    const useFakeTimers = () => {
      this._environment.fakeTimers.useFakeTimers();
      return jestObject;
    };
    const useRealTimers = () => {
      this._environment.fakeTimers.useRealTimers();
      return jestObject;
    };
    const resetModules = () => {
      this.resetModules();
      return jestObject;
    };
    const fn = this._moduleMocker.fn.bind(this._moduleMocker);
    const spyOn = this._moduleMocker.spyOn.bind(this._moduleMocker);

    const setTimeout = timeout => {
      this._environment.global.jasmine ? this._environment.global.jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout : this._environment.global[Symbol.for('TEST_TIMEOUT_SYMBOL')] = timeout;
      return jestObject;
    };

    const jestObject = {
      addMatchers: matchers => this._environment.global.jasmine.addMatchers(matchers),
      advanceTimersByTime: msToRun => this._environment.fakeTimers.advanceTimersByTime(msToRun),
      autoMockOff: disableAutomock,
      autoMockOn: enableAutomock,
      clearAllMocks,
      clearAllTimers: () => this._environment.fakeTimers.clearAllTimers(),
      deepUnmock,
      disableAutomock,
      doMock: mock,
      dontMock: unmock,
      enableAutomock,
      fn,
      genMockFn: fn,
      genMockFromModule: moduleName => this._generateMock(from, moduleName),
      genMockFunction: fn,
      isMockFunction: this._moduleMocker.isMockFunction,
      mock,
      requireActual: localRequire.requireActual,
      requireMock: localRequire.requireMock,
      resetAllMocks,
      resetModuleRegistry: resetModules,
      resetModules,
      restoreAllMocks,
      runAllImmediates: () => this._environment.fakeTimers.runAllImmediates(),
      runAllTicks: () => this._environment.fakeTimers.runAllTicks(),
      runAllTimers: () => this._environment.fakeTimers.runAllTimers(),
      runOnlyPendingTimers: () => this._environment.fakeTimers.runOnlyPendingTimers(),
      runTimersToTime: msToRun => this._environment.fakeTimers.advanceTimersByTime(msToRun),
      setMock: (moduleName, mock) => setMockFactory(moduleName, () => mock),
      setTimeout,
      spyOn,
      unmock,
      useFakeTimers,
      useRealTimers
    };
    return jestObject;
  }
}

Runtime.ScriptTransformer = (_script_transformer || _load_script_transformer()).default;
module.exports = Runtime;