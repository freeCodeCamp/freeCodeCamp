'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watch;

var _ansiEscapes;

function _load_ansiEscapes() {
  return _ansiEscapes = _interopRequireDefault(require('ansi-escapes'));
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _get_changed_files_promise;

function _load_get_changed_files_promise() {
  return _get_changed_files_promise = _interopRequireDefault(require('./get_changed_files_promise'));
}

var _exit;

function _load_exit() {
  return _exit = _interopRequireDefault(require('exit'));
}

var _jestRegexUtil;

function _load_jestRegexUtil() {
  return _jestRegexUtil = require('jest-regex-util');
}

var _jestHasteMap;

function _load_jestHasteMap() {
  return _jestHasteMap = _interopRequireDefault(require('jest-haste-map'));
}

var _is_valid_path;

function _load_is_valid_path() {
  return _is_valid_path = _interopRequireDefault(require('./lib/is_valid_path'));
}

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _pre_run_message;

function _load_pre_run_message() {
  return _pre_run_message = require('./pre_run_message');
}

var _create_context;

function _load_create_context() {
  return _create_context = _interopRequireDefault(require('./lib/create_context'));
}

var _run_jest;

function _load_run_jest() {
  return _run_jest = _interopRequireDefault(require('./run_jest'));
}

var _update_global_config;

function _load_update_global_config() {
  return _update_global_config = _interopRequireDefault(require('./lib/update_global_config'));
}

var _search_source;

function _load_search_source() {
  return _search_source = _interopRequireDefault(require('./search_source'));
}

var _test_watcher;

function _load_test_watcher() {
  return _test_watcher = _interopRequireDefault(require('./test_watcher'));
}

var _failed_tests_cache;

function _load_failed_tests_cache() {
  return _failed_tests_cache = _interopRequireDefault(require('./failed_tests_cache'));
}

var _constants;

function _load_constants() {
  return _constants = require('./constants');
}

var _jest_hooks;

function _load_jest_hooks() {
  return _jest_hooks = _interopRequireDefault(require('./jest_hooks'));
}

var _test_path_pattern;

function _load_test_path_pattern() {
  return _test_path_pattern = _interopRequireDefault(require('./plugins/test_path_pattern'));
}

var _test_name_pattern;

function _load_test_name_pattern() {
  return _test_name_pattern = _interopRequireDefault(require('./plugins/test_name_pattern'));
}

var _update_snapshots;

function _load_update_snapshots() {
  return _update_snapshots = _interopRequireDefault(require('./plugins/update_snapshots'));
}

var _update_snapshots_interactive;

function _load_update_snapshots_interactive() {
  return _update_snapshots_interactive = _interopRequireDefault(require('./plugins/update_snapshots_interactive'));
}

var _quit;

function _load_quit() {
  return _quit = _interopRequireDefault(require('./plugins/quit'));
}

var _active_filters_message;

function _load_active_filters_message() {
  return _active_filters_message = _interopRequireDefault(require('./lib/active_filters_message'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                 *
                                                                                                                                                                                                 * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                 * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                 *
                                                                                                                                                                                                 * 
                                                                                                                                                                                                 */

let hasExitListener = false;

const INTERNAL_PLUGINS = [(_test_path_pattern || _load_test_path_pattern()).default, (_test_name_pattern || _load_test_name_pattern()).default, (_update_snapshots || _load_update_snapshots()).default, (_update_snapshots_interactive || _load_update_snapshots_interactive()).default, (_quit || _load_quit()).default];

const getSortedUsageRows = (watchPlugins, globalConfig) => {
  const internalPlugins = watchPlugins.slice(0, INTERNAL_PLUGINS.length).map(p => p.getUsageInfo && p.getUsageInfo(globalConfig)).filter(Boolean);

  const thirdPartyPlugins = watchPlugins.slice(INTERNAL_PLUGINS.length).map(p => p.getUsageInfo && p.getUsageInfo(globalConfig)).filter(Boolean).sort((a, b) => a.key - b.key);

  return internalPlugins.concat(thirdPartyPlugins);
};

function watch(initialGlobalConfig, contexts, outputStream, hasteMapInstances) {
  let stdin = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : process.stdin;
  let hooks = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new (_jest_hooks || _load_jest_hooks()).default();

  // `globalConfig` will be constantly updated and reassigned as a result of
  // watch mode interactions.
  let globalConfig = initialGlobalConfig;
  let activePlugin;

  globalConfig = (0, (_update_global_config || _load_update_global_config()).default)(globalConfig, {
    mode: globalConfig.watch ? 'watch' : 'watchAll',
    passWithNoTests: true
  });

  const updateConfigAndRun = function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    let testNamePattern = _ref.testNamePattern,
        testPathPattern = _ref.testPathPattern,
        updateSnapshot = _ref.updateSnapshot;

    const previousUpdateSnapshot = globalConfig.updateSnapshot;
    globalConfig = (0, (_update_global_config || _load_update_global_config()).default)(globalConfig, {
      mode: 'watch',
      testNamePattern: testNamePattern !== undefined ? testNamePattern : globalConfig.testNamePattern,
      testPathPattern: testPathPattern !== undefined ? (0, (_jestRegexUtil || _load_jestRegexUtil()).replacePathSepForRegex)(testPathPattern) : globalConfig.testPathPattern,
      updateSnapshot: updateSnapshot !== undefined ? updateSnapshot : globalConfig.updateSnapshot
    });

    startRun(globalConfig);
    globalConfig = (0, (_update_global_config || _load_update_global_config()).default)(globalConfig, {
      // updateSnapshot is not sticky after a run.
      updateSnapshot: previousUpdateSnapshot === 'all' ? 'none' : previousUpdateSnapshot
    });
  };

  const watchPlugins = INTERNAL_PLUGINS.map(InternalPlugin => new InternalPlugin({ stdin, stdout: outputStream }));

  watchPlugins.forEach(plugin => {
    const hookSubscriber = hooks.getSubscriber();
    if (plugin.apply) {
      plugin.apply(hookSubscriber);
    }
  });

  if (globalConfig.watchPlugins != null) {
    for (const pluginModulePath of globalConfig.watchPlugins) {
      // $FlowFixMe dynamic require
      const ThirdPartyPlugin = require(pluginModulePath);
      const plugin = new ThirdPartyPlugin({
        stdin,
        stdout: outputStream
      });
      const hookSubscriber = hooks.getSubscriber();
      if (plugin.apply) {
        plugin.apply(hookSubscriber);
      }
      watchPlugins.push(plugin);
    }
  }

  const failedTestsCache = new (_failed_tests_cache || _load_failed_tests_cache()).default();
  let searchSources = contexts.map(context => ({
    context,
    searchSource: new (_search_source || _load_search_source()).default(context)
  }));
  let isRunning = false;
  let testWatcher;
  let shouldDisplayWatchUsage = true;
  let isWatchUsageDisplayed = false;

  hasteMapInstances.forEach((hasteMapInstance, index) => {
    hasteMapInstance.on('change', (_ref2) => {
      let eventsQueue = _ref2.eventsQueue,
          hasteFS = _ref2.hasteFS,
          moduleMap = _ref2.moduleMap;

      const validPaths = eventsQueue.filter((_ref3) => {
        let filePath = _ref3.filePath;

        return (0, (_is_valid_path || _load_is_valid_path()).default)(globalConfig, contexts[index].config, filePath);
      });

      if (validPaths.length) {
        const context = contexts[index] = (0, (_create_context || _load_create_context()).default)(contexts[index].config, {
          hasteFS,
          moduleMap
        });

        activePlugin = null;

        searchSources = searchSources.slice();
        searchSources[index] = {
          context,
          searchSource: new (_search_source || _load_search_source()).default(context)
        };
        startRun(globalConfig);
      }
    });
  });

  if (!hasExitListener) {
    hasExitListener = true;
    process.on('exit', () => {
      if (activePlugin) {
        outputStream.write((_ansiEscapes || _load_ansiEscapes()).default.cursorDown());
        outputStream.write((_ansiEscapes || _load_ansiEscapes()).default.eraseDown);
      }
    });
  }

  const startRun = globalConfig => {
    if (isRunning) {
      return null;
    }

    testWatcher = new (_test_watcher || _load_test_watcher()).default({ isWatchMode: true });
    (_jestUtil || _load_jestUtil()).isInteractive && outputStream.write((_constants || _load_constants()).CLEAR);
    (0, (_pre_run_message || _load_pre_run_message()).print)(outputStream);
    isRunning = true;
    const configs = contexts.map(context => context.config);
    const changedFilesPromise = (0, (_get_changed_files_promise || _load_get_changed_files_promise()).default)(globalConfig, configs);
    return (0, (_run_jest || _load_run_jest()).default)({
      changedFilesPromise,
      contexts,
      failedTestsCache,
      globalConfig,
      jestHooks: hooks.getEmitter(),
      onComplete: results => {
        isRunning = false;
        hooks.getEmitter().testRunComplete(results);

        // Create a new testWatcher instance so that re-runs won't be blocked.
        // The old instance that was passed to Jest will still be interrupted
        // and prevent test runs from the previous run.
        testWatcher = new (_test_watcher || _load_test_watcher()).default({ isWatchMode: true });

        // Do not show any Watch Usage related stuff when running in a
        // non-interactive environment
        if ((_jestUtil || _load_jestUtil()).isInteractive) {
          if (shouldDisplayWatchUsage) {
            outputStream.write(usage(globalConfig, watchPlugins));
            shouldDisplayWatchUsage = false; // hide Watch Usage after first run
            isWatchUsageDisplayed = true;
          } else {
            outputStream.write(showToggleUsagePrompt());
            shouldDisplayWatchUsage = false;
            isWatchUsageDisplayed = false;
          }
        } else {
          outputStream.write('\n');
        }
        failedTestsCache.setTestResults(results.testResults);
      },
      outputStream,
      startRun,
      testWatcher
    }).catch(error => console.error((_chalk || _load_chalk()).default.red(error.stack)));
  };

  const onKeypress = key => {
    if (key === (_constants || _load_constants()).KEYS.CONTROL_C || key === (_constants || _load_constants()).KEYS.CONTROL_D) {
      if (typeof stdin.setRawMode === 'function') {
        stdin.setRawMode(false);
      }
      outputStream.write('\n');
      (0, (_exit || _load_exit()).default)(0);
      return;
    }

    if (activePlugin != null && activePlugin.onKey) {
      // if a plugin is activate, Jest should let it handle keystrokes, so ignore
      // them here
      activePlugin.onKey(key);
      return;
    }

    // Abort test run
    const pluginKeys = getSortedUsageRows(watchPlugins, globalConfig).map(usage => Number(usage.key).toString(16));
    if (isRunning && testWatcher && [(_constants || _load_constants()).KEYS.Q, (_constants || _load_constants()).KEYS.ENTER, (_constants || _load_constants()).KEYS.A, (_constants || _load_constants()).KEYS.O, (_constants || _load_constants()).KEYS.F].concat(pluginKeys).indexOf(key) !== -1) {
      testWatcher.setState({ interrupted: true });
      return;
    }

    const matchingWatchPlugin = watchPlugins.find(plugin => {
      const usageData = plugin.getUsageInfo && plugin.getUsageInfo(globalConfig) || {};
      return usageData.key === parseInt(key, 16);
    });

    if (matchingWatchPlugin != null) {
      // "activate" the plugin, which has jest ignore keystrokes so the plugin
      // can handle them
      activePlugin = matchingWatchPlugin;
      if (activePlugin.run) {
        activePlugin.run(globalConfig, updateConfigAndRun).then(shouldRerun => {
          activePlugin = null;
          if (shouldRerun) {
            updateConfigAndRun();
          }
        }, () => {
          activePlugin = null;
          onCancelPatternPrompt();
        });
      } else {
        activePlugin = null;
      }
    }

    switch (key) {
      case (_constants || _load_constants()).KEYS.ENTER:
        startRun(globalConfig);
        break;
      case (_constants || _load_constants()).KEYS.A:
        globalConfig = (0, (_update_global_config || _load_update_global_config()).default)(globalConfig, {
          mode: 'watchAll',
          testNamePattern: '',
          testPathPattern: ''
        });
        startRun(globalConfig);
        break;
      case (_constants || _load_constants()).KEYS.C:
        updateConfigAndRun({
          testNamePattern: '',
          testPathPattern: ''
        });
        break;
      case (_constants || _load_constants()).KEYS.F:
        globalConfig = (0, (_update_global_config || _load_update_global_config()).default)(globalConfig, {
          onlyFailures: !globalConfig.onlyFailures
        });
        startRun(globalConfig);
        break;
      case (_constants || _load_constants()).KEYS.O:
        globalConfig = (0, (_update_global_config || _load_update_global_config()).default)(globalConfig, {
          mode: 'watch',
          testNamePattern: '',
          testPathPattern: ''
        });
        startRun(globalConfig);
        break;
      case (_constants || _load_constants()).KEYS.QUESTION_MARK:
        break;
      case (_constants || _load_constants()).KEYS.W:
        if (!shouldDisplayWatchUsage && !isWatchUsageDisplayed) {
          outputStream.write((_ansiEscapes || _load_ansiEscapes()).default.cursorUp());
          outputStream.write((_ansiEscapes || _load_ansiEscapes()).default.eraseDown);
          outputStream.write(usage(globalConfig, watchPlugins));
          isWatchUsageDisplayed = true;
          shouldDisplayWatchUsage = false;
        }
        break;
    }
  };

  const onCancelPatternPrompt = () => {
    outputStream.write((_ansiEscapes || _load_ansiEscapes()).default.cursorHide);
    outputStream.write((_ansiEscapes || _load_ansiEscapes()).default.clearScreen);
    outputStream.write(usage(globalConfig, watchPlugins));
    outputStream.write((_ansiEscapes || _load_ansiEscapes()).default.cursorShow);
  };

  if (typeof stdin.setRawMode === 'function') {
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('hex');
    stdin.on('data', onKeypress);
  }

  startRun(globalConfig);
  return Promise.resolve();
}

const usage = function (globalConfig, watchPlugins) {
  let delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\n';

  const messages = [(0, (_active_filters_message || _load_active_filters_message()).default)(globalConfig), globalConfig.testPathPattern || globalConfig.testNamePattern ? (_chalk || _load_chalk()).default.dim(' \u203A Press ') + 'c' + (_chalk || _load_chalk()).default.dim(' to clear filters.') : null, '\n' + (_chalk || _load_chalk()).default.bold('Watch Usage'), globalConfig.watch ? (_chalk || _load_chalk()).default.dim(' \u203A Press ') + 'a' + (_chalk || _load_chalk()).default.dim(' to run all tests.') : null, globalConfig.onlyFailures ? (_chalk || _load_chalk()).default.dim(' \u203A Press ') + 'f' + (_chalk || _load_chalk()).default.dim(' to run all tests.') : (_chalk || _load_chalk()).default.dim(' \u203A Press ') + 'f' + (_chalk || _load_chalk()).default.dim(' to run only failed tests.'), (globalConfig.watchAll || globalConfig.testPathPattern || globalConfig.testNamePattern) && !globalConfig.noSCM ? (_chalk || _load_chalk()).default.dim(' \u203A Press ') + 'o' + (_chalk || _load_chalk()).default.dim(' to only run tests related to changed files.') : null].concat(_toConsumableArray(getSortedUsageRows(watchPlugins, globalConfig).map(plugin => (_chalk || _load_chalk()).default.dim(' \u203A Press') + ' ' + String.fromCodePoint(plugin.key) + ' ' + (_chalk || _load_chalk()).default.dim(`to ${plugin.prompt}.`))), [(_chalk || _load_chalk()).default.dim(' \u203A Press ') + 'Enter' + (_chalk || _load_chalk()).default.dim(' to trigger a test run.')]);

  return messages.filter(message => !!message).join(delimiter) + '\n';
};

const showToggleUsagePrompt = () => '\n' + (_chalk || _load_chalk()).default.bold('Watch Usage: ') + (_chalk || _load_chalk()).default.dim('Press ') + 'w' + (_chalk || _load_chalk()).default.dim(' to show more.');