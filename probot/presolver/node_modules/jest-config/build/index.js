'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecationEntries = exports.normalize = exports.isJSONString = exports.getTestEnvironment = undefined;

var _utils;

function _load_utils() {
  return _utils = require('./utils');
}

Object.defineProperty(exports, 'getTestEnvironment', {
  enumerable: true,
  get: function () {
    return (_utils || _load_utils()).getTestEnvironment;
  }
});
Object.defineProperty(exports, 'isJSONString', {
  enumerable: true,
  get: function () {
    return (_utils || _load_utils()).isJSONString;
  }
});

var _normalize2;

function _load_normalize() {
  return _normalize2 = require('./normalize');
}

Object.defineProperty(exports, 'normalize', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_normalize2 || _load_normalize()).default;
  }
});

var _deprecated;

function _load_deprecated() {
  return _deprecated = require('./deprecated');
}

Object.defineProperty(exports, 'deprecationEntries', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_deprecated || _load_deprecated()).default;
  }
});
exports.readConfig = readConfig;

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _normalize3;

function _load_normalize2() {
  return _normalize3 = _interopRequireDefault(require('./normalize'));
}

var _resolve_config_path;

function _load_resolve_config_path() {
  return _resolve_config_path = _interopRequireDefault(require('./resolve_config_path'));
}

var _read_config_file_and_set_root_dir;

function _load_read_config_file_and_set_root_dir() {
  return _read_config_file_and_set_root_dir = _interopRequireDefault(require('./read_config_file_and_set_root_dir'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readConfig(argv, packageRootOrConfig,
// Whether it needs to look into `--config` arg passed to CLI.
// It only used to read initial config. If the initial config contains
// `project` property, we don't want to read `--config` value and rather
skipArgvConfigOption, parentConfigPath) {
  let rawOptions;
  let configPath = null;

  if (typeof packageRootOrConfig !== 'string') {
    if (parentConfigPath) {
      rawOptions = packageRootOrConfig;
      rawOptions.rootDir = (_path || _load_path()).default.dirname(parentConfigPath);
    } else {
      throw new Error('Jest: Cannot use configuration as an object without a file path.');
    }
  } else if ((0, (_utils || _load_utils()).isJSONString)(argv.config)) {
    // A JSON string was passed to `--config` argument and we can parse it
    // and use as is.
    let config;
    try {
      config = JSON.parse(argv.config);
    } catch (e) {
      throw new Error('There was an error while parsing the `--config` argument as a JSON string.');
    }

    // NOTE: we might need to resolve this dir to an absolute path in the future
    config.rootDir = config.rootDir || packageRootOrConfig;
    rawOptions = config;
    // A string passed to `--config`, which is either a direct path to the config
    // or a path to directory containing `package.json` or `jest.conf.js`
  } else if (!skipArgvConfigOption && typeof argv.config == 'string') {
    configPath = (0, (_resolve_config_path || _load_resolve_config_path()).default)(argv.config, process.cwd());
    rawOptions = (0, (_read_config_file_and_set_root_dir || _load_read_config_file_and_set_root_dir()).default)(configPath);
  } else {
    // Otherwise just try to find config in the current rootDir.
    configPath = (0, (_resolve_config_path || _load_resolve_config_path()).default)(packageRootOrConfig, process.cwd());
    rawOptions = (0, (_read_config_file_and_set_root_dir || _load_read_config_file_and_set_root_dir()).default)(configPath);
  }

  var _normalize = (0, (_normalize3 || _load_normalize2()).default)(rawOptions, argv);

  const options = _normalize.options,
        hasDeprecationWarnings = _normalize.hasDeprecationWarnings;

  var _getConfigs = getConfigs(options);

  const globalConfig = _getConfigs.globalConfig,
        projectConfig = _getConfigs.projectConfig;

  return {
    configPath,
    globalConfig,
    hasDeprecationWarnings,
    projectConfig
  };
}

const getConfigs = options => {
  return {
    globalConfig: Object.freeze({
      bail: options.bail,
      changedFilesWithAncestor: options.changedFilesWithAncestor,
      changedSince: options.changedSince,
      collectCoverage: options.collectCoverage,
      collectCoverageFrom: options.collectCoverageFrom,
      collectCoverageOnlyFrom: options.collectCoverageOnlyFrom,
      coverageDirectory: options.coverageDirectory,
      coverageReporters: options.coverageReporters,
      coverageThreshold: options.coverageThreshold,
      detectLeaks: options.detectLeaks,
      enabledTestsMap: options.enabledTestsMap,
      expand: options.expand,
      findRelatedTests: options.findRelatedTests,
      forceExit: options.forceExit,
      globalSetup: options.globalSetup,
      globalTeardown: options.globalTeardown,
      json: options.json,
      lastCommit: options.lastCommit,
      listTests: options.listTests,
      logHeapUsage: options.logHeapUsage,
      maxWorkers: options.maxWorkers,
      noSCM: undefined,
      noStackTrace: options.noStackTrace,
      nonFlagArgs: options.nonFlagArgs,
      notify: options.notify,
      notifyMode: options.notifyMode,
      onlyChanged: options.onlyChanged,
      onlyFailures: options.onlyFailures,
      outputFile: options.outputFile,
      passWithNoTests: options.passWithNoTests,
      projects: options.projects,
      replname: options.replname,
      reporters: options.reporters,
      rootDir: options.rootDir,
      runTestsByPath: options.runTestsByPath,
      silent: options.silent,
      testFailureExitCode: options.testFailureExitCode,
      testNamePattern: options.testNamePattern,
      testPathPattern: options.testPathPattern,
      testResultsProcessor: options.testResultsProcessor,
      updateSnapshot: options.updateSnapshot,
      useStderr: options.useStderr,
      verbose: options.verbose,
      watch: options.watch,
      watchAll: options.watchAll,
      watchPlugins: options.watchPlugins,
      watchman: options.watchman
    }),
    projectConfig: Object.freeze({
      automock: options.automock,
      browser: options.browser,
      cache: options.cache,
      cacheDirectory: options.cacheDirectory,
      clearMocks: options.clearMocks,
      coveragePathIgnorePatterns: options.coveragePathIgnorePatterns,
      cwd: options.cwd,
      detectLeaks: options.detectLeaks,
      displayName: options.displayName,
      forceCoverageMatch: options.forceCoverageMatch,
      globals: options.globals,
      haste: options.haste,
      moduleDirectories: options.moduleDirectories,
      moduleFileExtensions: options.moduleFileExtensions,
      moduleLoader: options.moduleLoader,
      moduleNameMapper: options.moduleNameMapper,
      modulePathIgnorePatterns: options.modulePathIgnorePatterns,
      modulePaths: options.modulePaths,
      name: options.name,
      resetMocks: options.resetMocks,
      resetModules: options.resetModules,
      resolver: options.resolver,
      restoreMocks: options.restoreMocks,
      rootDir: options.rootDir,
      roots: options.roots,
      runner: options.runner,
      setupFiles: options.setupFiles,
      setupTestFrameworkScriptFile: options.setupTestFrameworkScriptFile,
      skipNodeResolution: options.skipNodeResolution,
      snapshotSerializers: options.snapshotSerializers,
      testEnvironment: options.testEnvironment,
      testEnvironmentOptions: options.testEnvironmentOptions,
      testLocationInResults: options.testLocationInResults,
      testMatch: options.testMatch,
      testPathIgnorePatterns: options.testPathIgnorePatterns,
      testRegex: options.testRegex,
      testRunner: options.testRunner,
      testURL: options.testURL,
      timers: options.timers,
      transform: options.transform,
      transformIgnorePatterns: options.transformIgnorePatterns,
      unmockedModulePathPatterns: options.unmockedModulePathPatterns,
      watchPathIgnorePatterns: options.watchPathIgnorePatterns
    })
  };
};