'use strict';

/**
 * Helper scripts for the `run` command
 * @see module:lib/cli/run
 * @module
 * @private
 */

const fs = require('fs');
const path = require('path');
const ansi = require('ansi-colors');
const debug = require('debug')('mocha:cli:run:helpers');
const {watchRun, watchParallelRun} = require('./watch-run');
const collectFiles = require('./collect-files');
const {format} = require('util');
const {createInvalidLegacyPluginError} = require('../errors');
const {requireOrImport} = require('../nodejs/esm-utils');
const PluginLoader = require('../plugin-loader');
const {UnmatchedFile} = require('./collect-files');

/**
 * Exits Mocha when tests + code under test has finished execution (default)
 * @param {number} clampedCode - Exit code; typically # of failures
 * @ignore
 * @private
 */
const exitMochaLater = clampedCode => {
  process.on('exit', () => {
    process.exitCode = clampedCode;
  });
};

/**
 * Exits Mocha when Mocha itself has finished execution, regardless of
 * what the tests or code under test is doing.
 * @param {number} clampedCode - Exit code; typically # of failures
 * @ignore
 * @private
 */
const exitMocha = clampedCode => {
  let draining = 0;

  // Eagerly set the process's exit code in case stream.write doesn't
  // execute its callback before the process terminates.
  process.exitCode = clampedCode;

  // flush output for Node.js Windows pipe bug
  // https://github.com/joyent/node/issues/6247 is just one bug example
  // https://github.com/visionmedia/mocha/issues/333 has a good discussion
  const done = () => {
    if (!draining--) {
      process.exit(clampedCode);
    }
  };

  const streams = [process.stdout, process.stderr];

  streams.forEach(stream => {
    // submit empty write request and wait for completion
    draining += 1;
    stream.write('', done);
  });

  done();
};

/**
 * Coerce a comma-delimited string (or array thereof) into a flattened array of
 * strings
 * @param {string|string[]} str - Value to coerce
 * @returns {string[]} Array of strings
 * @private
 */
exports.list = str =>
  Array.isArray(str) ? exports.list(str.join(',')) : str.split(/ *, */);

/**
 * `require()` the modules as required by `--require <require>`.
 *
 * Returns array of `mochaHooks` exports, if any.
 * @param {string[]} requires - Modules to require
 * @returns {Promise<object>} Plugin implementations
 * @private
 */
exports.handleRequires = async (requires = [], {ignoredPlugins = []} = {}) => {
  const pluginLoader = PluginLoader.create({ignore: ignoredPlugins});
  for await (const mod of requires) {
    let modpath = mod;
    // this is relative to cwd
    if (fs.existsSync(mod) || fs.existsSync(`${mod}.js`)) {
      modpath = path.resolve(mod);
      debug('resolved required file %s to %s', mod, modpath);
    }
    const requiredModule = await requireOrImport(modpath);
    if (requiredModule && typeof requiredModule === 'object') {
      if (pluginLoader.load(requiredModule)) {
        debug('found one or more plugin implementations in %s', modpath);
      }
    }
    debug('loaded required module "%s"', mod);
  }
  const plugins = await pluginLoader.finalize();
  if (Object.keys(plugins).length) {
    debug('finalized plugin implementations: %O', plugins);
  }
  return plugins;
};

/**
 * Logs errors and exits the app if unmatched files exist
 * @param {Mocha} mocha - Mocha instance
 * @param {UnmatchedFile} unmatchedFiles - object containing unmatched file paths
 * @returns {Promise<Runner>}
 * @private
 */
const handleUnmatchedFiles = (mocha, unmatchedFiles) => {
  if (unmatchedFiles.length === 0) {
    return;
  }

  unmatchedFiles.forEach(({pattern, absolutePath}) => {
    console.error(
      ansi.yellow(
        `Warning: Cannot find any files matching pattern "${pattern}" at the absolute path "${absolutePath}"`
      )
    );
  });
  console.log(
    'No test file(s) found with the given pattern, exiting with code 1'
  );

  return mocha.run(exitMocha(1));
};

/**
 * Collect and load test files, then run mocha instance.
 * @param {Mocha} mocha - Mocha instance
 * @param {Options} [opts] - Command line options
 * @param {boolean} [opts.exit] - Whether or not to force-exit after tests are complete
 * @param {boolean} [opts.passOnFailingTestSuite] - Whether or not to fail test run if tests were failed
 * @param {Object} fileCollectParams - Parameters that control test
 *   file collection. See `lib/cli/collect-files.js`.
 * @returns {Promise<Runner>}
 * @private
 */
const singleRun = async (
  mocha,
  {exit, passOnFailingTestSuite},
  fileCollectParams
) => {
  const fileCollectionObj = collectFiles(fileCollectParams);

  if (fileCollectionObj.unmatchedFiles.length > 0) {
    return handleUnmatchedFiles(mocha, fileCollectionObj.unmatchedFiles);
  }

  debug('single run with %d file(s)', fileCollectionObj.files.length);
  mocha.files = fileCollectionObj.files;

  // handles ESM modules
  await mocha.loadFilesAsync();
  return mocha.run(
    createExitHandler({exit, passOnFailingTestSuite})
  );
};

/**
 * Collect files and run tests (using `BufferedRunner`).
 *
 * This is `async` for consistency.
 *
 * @param {Mocha} mocha - Mocha instance
 * @param {Options} options - Command line options
 * @param {Object} fileCollectParams - Parameters that control test
 *   file collection. See `lib/cli/collect-files.js`.
 * @returns {Promise<BufferedRunner>}
 * @ignore
 * @private
 */
const parallelRun = async (mocha, options, fileCollectParams) => {
  const fileCollectionObj = collectFiles(fileCollectParams);

  if (fileCollectionObj.unmatchedFiles.length > 0) {
    return handleUnmatchedFiles(mocha, fileCollectionObj.unmatchedFiles);
  }

  debug(
    'executing %d test file(s) in parallel mode',
    fileCollectionObj.files.length
  );
  mocha.files = fileCollectionObj.files;

  // note that we DO NOT load any files here; this is handled by the worker
  return mocha.run(
    createExitHandler(options)
  );
};

/**
 * Actually run tests.  Delegates to one of four different functions:
 * - `singleRun`: run tests in serial & exit
 * - `watchRun`: run tests in serial, rerunning as files change
 * - `parallelRun`: run tests in parallel & exit
 * - `watchParallelRun`: run tests in parallel, rerunning as files change
 * @param {Mocha} mocha - Mocha instance
 * @param {Options} opts - Command line options
 * @private
 * @returns {Promise<Runner>}
 */
exports.runMocha = async (mocha, options) => {
  const {
    watch = false,
    extension = [],
    ignore = [],
    file = [],
    parallel = false,
    recursive = false,
    sort = false,
    spec = []
  } = options;

  const fileCollectParams = {
    ignore,
    extension,
    file,
    recursive,
    sort,
    spec
  };

  let run;
  if (watch) {
    run = parallel ? watchParallelRun : watchRun;
  } else {
    run = parallel ? parallelRun : singleRun;
  }

  return run(mocha, options, fileCollectParams);
};

/**
 * Used for `--reporter` and `--ui`.  Ensures there's only one, and asserts that
 * it actually exists. This must be run _after_ requires are processed (see
 * {@link handleRequires}), as it'll prevent interfaces from loading otherwise.
 * @param {Object} opts - Options object
 * @param {"reporter"|"ui"} pluginType - Type of plugin.
 * @param {Object} [map] - Used as a cache of sorts;
 * `Mocha.reporters` where each key corresponds to a reporter name,
 * `Mocha.interfaces` where each key corresponds to an interface name.
 * @private
 */
exports.validateLegacyPlugin = (opts, pluginType, map = {}) => {
  /**
   * This should be a unique identifier; either a string (present in `map`),
   * or a resolvable (via `require.resolve`) module ID/path.
   * @type {string}
   */
  const pluginId = opts[pluginType];

  if (Array.isArray(pluginId)) {
    throw createInvalidLegacyPluginError(
      `"--${pluginType}" can only be specified once`,
      pluginType
    );
  }

  const createUnknownError = err =>
    createInvalidLegacyPluginError(
      format('Could not load %s "%s":\n\n %O', pluginType, pluginId, err),
      pluginType,
      pluginId
    );

  // if this exists, then it's already loaded, so nothing more to do.
  if (!map[pluginId]) {
    let foundId;
    try {
      foundId = require.resolve(pluginId);
      map[pluginId] = require(foundId);
    } catch (err) {
      if (foundId) throw createUnknownError(err);

      // Try to load reporters from a cwd-relative path
      try {
        map[pluginId] = require(path.resolve(pluginId));
      } catch (e) {
        throw createUnknownError(e);
      }
    }
  }
};

const createExitHandler = ({ exit, passOnFailingTestSuite }) => {
  return code => {
    const clampedCode = passOnFailingTestSuite
      ? 0
      : Math.min(code, 255);

    return exit
      ? exitMocha(clampedCode)
      : exitMochaLater(clampedCode);
  };
};
