"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.initialize = initialize;
var _flattenDeep2 = _interopRequireDefault(require("lodash/flattenDeep"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var fs = _interopRequireWildcard(require("fs-extra"));
var _mutex = require("gatsby-core-utils/mutex");
var _path = _interopRequireDefault(require("path"));
var _globby = _interopRequireDefault(require("globby"));
var _apiRunnerNode = _interopRequireDefault(require("../utils/api-runner-node"));
var _browserslist = require("../utils/browserslist");
var WorkerPool = _interopRequireWildcard(require("../utils/worker/pool"));
var _pluginRunner = require("../redux/plugin-runner");
var _redux = require("../redux");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _removeStaleJobs = require("../bootstrap/remove-stale-jobs");
var _loadConfig = require("../bootstrap/load-config");
var _loadPlugins = require("../bootstrap/load-plugins");
var _detectNodeMutations = require("../utils/detect-node-mutations");
var _compileGatsbyFiles = require("../utils/parcel/compile-gatsby-files");
var _moduleResolver = require("../utils/module-resolver");
var _fileWrites = require("../utils/graphql-typegen/file-writes");
var _manager = require("../utils/adapter/manager");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// If the env variable GATSBY_EXPERIMENTAL_FAST_DEV is set, enable
// all DEV experimental changes (but only during development & not on CI).
if (process.env.gatsby_executing_command === `develop` && process.env.GATSBY_EXPERIMENTAL_FAST_DEV && !(0, _gatsbyCoreUtils.isCI)() &&
// skip FAST_DEV handling in workers, all env vars will be handle
// by main process already and passed to worker
!process.env.GATSBY_WORKER_POOL_WORKER) {
  process.env.GATSBY_EXPERIMENTAL_DEV_SSR = `true`;
  process.env.PRESERVE_FILE_DOWNLOAD_CACHE = `true`;
  _reporter.default.info(`
Two fast dev experiments are enabled: SSR in develop and preserving file download cache.

Please give feedback on their respective umbrella issues!

- https://gatsby.dev/dev-ssr-feedback
- https://gatsby.dev/cache-clearing-feedback
  `);
}

// Show stack trace on unhandled promises.
process.on(`unhandledRejection`, reason => {
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33636
  _reporter.default.panic(reason || `Unhandled rejection`);
});

// Override console.log to add the source file + line number.
// Useful for debugging if you lose a console.log somewhere.
// Otherwise leave commented out.
// require(`../bootstrap/log-line-function`)

async function initialize({
  program: args,
  parentSpan
}) {
  if (process.env.GATSBY_DISABLE_CACHE_PERSISTENCE) {
    _reporter.default.info(`GATSBY_DISABLE_CACHE_PERSISTENCE is enabled. Cache won't be persisted. Next builds will not be able to reuse any work done by current session.`);
  }
  if (!args) {
    _reporter.default.panic(`Missing program args`);
  }

  /* Time for a little story...
   * When running `gatsby develop`, the globally installed gatsby-cli starts
   * and sets up a Redux store (which is where logs are now stored). When gatsby
   * finds your project's locally installed gatsby-cli package in node_modules,
   * it switches over. This instance will have a separate redux store. We need to
   * ensure that the correct store is used which is why we call setStore
   * (/packages/gatsby-cli/src/reporter/redux/index.js)
   *
   * This function
   * - copies over the logs from the global gatsby-cli to the local one
   * - sets the store to the local one (so that further actions dispatched by
   * the global gatsby-cli are handled by the local one)
   */
  if (args.setStore) {
    args.setStore(_redux.store);
  }
  if (_reporter.default._registerAdditionalDiagnosticOutputHandler) {
    _reporter.default._registerAdditionalDiagnosticOutputHandler(function logPendingJobs() {
      const outputs = [];
      for (const [, {
        job
      }] of _redux.store.getState().jobsV2.incomplete) {
        outputs.push(job);
        if (outputs.length >= 5) {
          // 5 not finished jobs should be enough to track down issues
          // this is just limiting output "spam"
          break;
        }
      }
      return outputs.length ? `Unfinished jobs (showing ${outputs.length} of ${_redux.store.getState().jobsV2.incomplete.size} jobs total):\n\n` + JSON.stringify(outputs, null, 2) : ``;
    });
  }
  const directory = (0, _gatsbyCoreUtils.slash)(args.directory);
  const program = {
    ...args,
    extensions: [],
    browserslist: (0, _browserslist.getBrowsersList)(directory),
    // Fix program directory path for windows env.
    directory
  };
  _redux.store.dispatch({
    type: `SET_PROGRAM`,
    payload: program
  });
  let activityForJobs;
  _redux.emitter.on(`CREATE_JOB`, () => {
    if (!activityForJobs) {
      activityForJobs = _reporter.default.phantomActivity(`Running jobs`);
      activityForJobs.start();
    }
  });
  const onEndJob = () => {
    if (activityForJobs && _redux.store.getState().jobs.active.length === 0) {
      activityForJobs.end();
      activityForJobs = null;
    }
  };
  _redux.emitter.on(`END_JOB`, onEndJob);
  const siteDirectory = program.directory;

  // Compile root gatsby files
  let activity = _reporter.default.activityTimer(`compile gatsby files`);
  activity.start();
  await (0, _compileGatsbyFiles.compileGatsbyFiles)(siteDirectory);
  activity.end();

  // Load gatsby config
  activity = _reporter.default.activityTimer(`load gatsby config`, {
    parentSpan
  });
  activity.start();
  const config = await (0, _loadConfig.loadConfig)({
    siteDirectory,
    processFlags: true
  });
  activity.end();
  let adapterManager = undefined;

  // Only initialize adapters during "gatsby build"
  if (process.env.gatsby_executing_command === `build`) {
    adapterManager = await (0, _manager.initAdapterManager)();
    await adapterManager.restoreCache();
  }

  // Load plugins
  activity = _reporter.default.activityTimer(`load plugins`, {
    parentSpan
  });
  activity.start();
  const flattenedPlugins = await (0, _loadPlugins.loadPlugins)(config, siteDirectory);
  activity.end();

  // GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR=false gatsby develop
  // to disable query on demand loading indicator
  if (!process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR) {
    // if GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR was not set at all
    // enable loading indicator
    process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR = `true`;
  }
  if (process.env.GATSBY_DETECT_NODE_MUTATIONS) {
    (0, _detectNodeMutations.enableNodeMutationsDetection)();
  }
  if (config && config.polyfill) {
    _reporter.default.warn(`Support for custom Promise polyfills has been removed in Gatsby v2. We only support Babel 7's new automatic polyfilling behavior.`);
  }

  // Throughout the codebase GATSBY_QUERY_ON_DEMAND is used to conditionally enable the QoD behavior, depending on if "gatsby develop" is running or not. In CI QoD is disabled by default, too.
  // You can use GATSBY_ENABLE_QUERY_ON_DEMAND_IN_CI to force enable it in CI.
  process.env.GATSBY_QUERY_ON_DEMAND = `true`;
  if (process.env.gatsby_executing_command !== `develop`) {
    // we don't want to ever have this flag enabled for anything than develop
    // in case someone have this env var globally set
    delete process.env.GATSBY_QUERY_ON_DEMAND;
  } else if ((0, _gatsbyCoreUtils.isCI)() && !process.env.GATSBY_ENABLE_QUERY_ON_DEMAND_IN_CI) {
    delete process.env.GATSBY_QUERY_ON_DEMAND;
    _reporter.default.verbose(`Query on Demand is disabled in CI by default. You can enable it by setting GATSBY_ENABLE_QUERY_ON_DEMAND_IN_CI env var.`);
  }

  // run stale jobs
  // @ts-ignore we'll need to fix redux typings https://redux.js.org/usage/usage-with-typescript
  _redux.store.dispatch((0, _removeStaleJobs.removeStaleJobs)(_redux.store.getState().jobsV2));

  // Start plugin runner which listens to the store
  // and invokes Gatsby API based on actions.
  (0, _pluginRunner.startPluginRunner)();

  // onPreInit
  activity = _reporter.default.activityTimer(`onPreInit`, {
    parentSpan
  });
  activity.start();
  await (0, _apiRunnerNode.default)(`onPreInit`, {
    parentSpan: activity.span
  });
  activity.end();
  const lmdbCacheDirectoryName = `caches-lmdb`;
  const cacheDirectory = `${program.directory}/.cache`;
  const publicDirectory = `${program.directory}/public`;
  const workerCacheDirectory = `${program.directory}/.cache/worker`;
  const lmdbCacheDirectory = `${program.directory}/.cache/${lmdbCacheDirectoryName}`;
  const publicDirExists = fs.existsSync(publicDirectory);
  const workerCacheDirExists = fs.existsSync(workerCacheDirectory);
  const lmdbCacheDirExists = fs.existsSync(lmdbCacheDirectory);

  // check the cache file that is used by the current configuration
  const cacheDirExists = lmdbCacheDirExists;

  // For builds in case public dir exists, but cache doesn't, we need to clean up potentially stale
  // artifacts from previous builds (due to cache not being available, we can't rely on tracking of artifacts)
  if (process.env.NODE_ENV === `production` && publicDirExists && !cacheDirExists) {
    activity = _reporter.default.activityTimer(`delete html and css files from previous builds`, {
      parentSpan
    });
    activity.start();
    const files = await (0, _globby.default)([`public/**/*.{html,css,mdb}`, `!public/page-data/**/*`, `!public/static`, `!public/static/**/*.{html,css}`], {
      cwd: program.directory
    });
    await Promise.all(files.map(file => fs.remove(file)));
    activity.end();
  }

  // When the main process and workers communicate they save parts of their redux state to .cache/worker
  // We should clean this directory to remove stale files that a worker might accidentally reuse then
  if (workerCacheDirExists) {
    activity = _reporter.default.activityTimer(`delete worker cache from previous builds`, {
      parentSpan
    });
    activity.start();
    await fs.remove(workerCacheDirectory).catch(() => fs.emptyDir(workerCacheDirectory));
    activity.end();
  }
  activity = _reporter.default.activityTimer(`initialize cache`, {
    parentSpan
  });
  activity.start();
  // Check if any plugins have been updated since our last run. If so,
  // we delete the cache as there's likely been changes since
  // the previous run.
  //
  // We do this by creating a hash of all the version numbers of installed
  // plugins, the site's package.json, gatsby-config.js, and gatsby-node.js.
  // The last, gatsby-node.js, is important as many gatsby sites put important
  // logic in there e.g. generating slugs for custom pages.
  const pluginVersions = flattenedPlugins.map(p => p.version);
  // we should include gatsby version as well
  pluginVersions.push(require(`../../package.json`).version);
  const optionalFiles = [`${program.directory}/gatsby-config.js`, `${program.directory}/gatsby-node.js`, `${program.directory}/gatsby-config.ts`, `${program.directory}/gatsby-node.ts`];
  const state = _redux.store.getState();
  const hashes = await Promise.all(
  // Ignore optional files with .catch() as these are not required
  [(0, _gatsbyCoreUtils.md5File)(`package.json`), state.config.trailingSlash].concat(optionalFiles.map(f => (0, _gatsbyCoreUtils.md5File)(f).catch(() => ``))));
  const pluginsHash = await (0, _gatsbyCoreUtils.md5)(JSON.stringify(pluginVersions.concat(hashes)));
  const oldPluginsHash = state && state.status ? state.status.PLUGINS_HASH : ``;

  // Check if anything has changed. If it has, delete the site's .cache
  // directory and tell reducers to empty themselves.
  //
  // Also if the hash isn't there, then delete things just in case something
  // is weird.
  if (oldPluginsHash && pluginsHash !== oldPluginsHash) {
    _reporter.default.info(_reporter.default.stripIndent`
      One or more of your plugins have changed since the last time you ran Gatsby. As
      a precaution, we're deleting your site's cache to ensure there's no stale data.
    `);
  }

  // .cache directory exists in develop at this point
  // so checking for .cache/json or .cache/caches-lmdb as a heuristic (could be any expected file)
  const cacheIsCorrupt = cacheDirExists && !publicDirExists;
  if (cacheIsCorrupt) {
    _reporter.default.info(_reporter.default.stripIndent`
      We've detected that the Gatsby cache is incomplete (the .cache directory exists
      but the public directory does not). As a precaution, we're deleting your site's
      cache to ensure there's no stale data.
    `);
  }
  if (!oldPluginsHash || pluginsHash !== oldPluginsHash || cacheIsCorrupt) {
    try {
      // Comment out inviet until we can test perf impact
      //
      // let sourceFileSystemVersion = flattenedPlugins.find(
      // plugin => plugin.name === `gatsby-source-filesystem`
      // )?.version

      // // The site might be using a plugin which uses "createRemoteFileNode" but
      // // doesn't have gatsby-source-filesystem in their gatsby-config.js. So lets
      // // also try requiring it.
      // if (!sourceFileSystemVersion) {
      // try {
      // sourceFileSystemVersion = require(`gatsby-source-filesystem/package.json`)
      // ?.version
      // } catch {
      // // ignore require errors
      // }
      // }
      // } else if (
      // sourceFileSystemVersion &&
      // semver.lt(sourceFileSystemVersion, `2.9.0`)
      // ) {
      // // If the site has more than 50 downloaded files in it, tell them
      // // how to save time.
      // try {
      // // Divide by two as the directory as both cache files + the actual downloaded files so
      // // two results / downloaded file.
      // const filesCount =
      // (await fs.readdir(`.cache/caches/gatsby-source-filesystem`))
      // .length / 2
      // if (filesCount > 50) {
      // reporter.info(stripIndent`\n\n

      // Your local development experience is about to get better, faster, and stronger!

      // Your friendly Gatsby maintainers detected your site downloads quite a few files and that we're about to delete all ${Math.round(
      // filesCount
      // )} of them 😅. We're working right now to make our caching smarter which means we won't delete your downloaded files any more.

      // If you're interested in trialing the new caching behavior *today* — which should make your local development environment faster, go ahead and enable the PRESERVE_FILE_DOWNLOAD_CACHE flag and run your develop server again.

      // To do so, add to your gatsby-config.js:

      // flags: {
      // preserve_file_download_cache: true,
      // }

      // visit the umbrella issue to learn more: https://github.com/gatsbyjs/gatsby/discussions/28331
      // `)
      // }
      // } catch {
      // // ignore errors (mostly will just be directory not found).
      // }
      // }

      const deleteGlobs = [
      // By default delete all files & subdirectories
      `.cache/**`, `.cache/data/**`, `!.cache/data/gatsby-core-utils/**`, `!.cache/compiled`,
      // Add webpack
      `!.cache/webpack`, `!.cache/adapters`];
      if (process.env.GATSBY_EXPERIMENTAL_PRESERVE_FILE_DOWNLOAD_CACHE) {
        // Stop the caches directory from being deleted, add all sub directories,
        // but remove gatsby-source-filesystem
        deleteGlobs.push(`!.cache/caches`);
        deleteGlobs.push(`.cache/caches/*`);
        deleteGlobs.push(`!.cache/caches/gatsby-source-filesystem`);
      }
      const files = await (0, _globby.default)(deleteGlobs, {
        cwd: program.directory
      });
      await Promise.all(files.map(file => fs.remove(file)));
    } catch (e) {
      _reporter.default.error(`Failed to remove .cache files.`, e);
    }
    // Tell reducers to delete their data (the store will already have
    // been loaded from the file system cache).
    _redux.store.dispatch({
      type: `DELETE_CACHE`,
      cacheIsCorrupt
    });

    // make sure all previous mutexes are released
    await (0, _mutex.releaseAllMutexes)();
  }

  // Update the store with the new plugins hash.
  _redux.store.dispatch({
    type: `UPDATE_PLUGINS_HASH`,
    payload: pluginsHash
  });

  // Now that we know the .cache directory is safe, initialize the cache
  // directory.
  await fs.ensureDir(cacheDirectory);

  // Ensure the public/static directory
  await fs.ensureDir(`${publicDirectory}/static`);

  // Init plugins once cache is initialized
  await (0, _apiRunnerNode.default)(`onPluginInit`, {
    parentSpan: activity.span
  });
  activity.end();
  activity = _reporter.default.activityTimer(`copy gatsby files`, {
    parentSpan
  });
  activity.start();
  const srcDir = `${__dirname}/../../cache-dir`;
  const siteDir = cacheDirectory;
  try {
    await fs.copy(srcDir, siteDir, {
      overwrite: true
    });
    await fs.ensureDir(`${cacheDirectory}/${lmdbCacheDirectoryName}`);

    // Ensure .cache/fragments exists and is empty. We want fragments to be
    // added on every run in response to data as fragments can only be added if
    // the data used to create the schema they're dependent on is available.
    await fs.emptyDir(`${cacheDirectory}/fragments`);
  } catch (err) {
    _reporter.default.panic(`Unable to copy site files to .cache`, err);
  }

  // Find plugins which implement gatsby-browser and gatsby-ssr and write
  // out api-runners for them.
  const hasAPIFile = (env, plugin) => {
    // The plugin loader has disabled SSR APIs for this plugin. Usually due to
    // multiple implementations of an API that can only be implemented once
    if (env === `ssr` && plugin.skipSSR === true) return undefined;
    const envAPIs = plugin[`${env}APIs`];

    // Always include gatsby-browser.js files if they exist as they're
    // a handy place to include global styles and other global imports.
    try {
      if (env === `browser`) {
        const modulePath = _path.default.join(plugin.resolve, `gatsby-${env}`);
        return (0, _gatsbyCoreUtils.slash)((0, _moduleResolver.resolveModule)(modulePath));
      }
    } catch (e) {
      // ignore
    }
    if (envAPIs && Array.isArray(envAPIs) && envAPIs.length > 0) {
      const modulePath = _path.default.join(plugin.resolve, `gatsby-${env}`);
      return (0, _gatsbyCoreUtils.slash)((0, _moduleResolver.resolveModule)(modulePath));
    }
    return undefined;
  };
  const isResolved = plugin => !!plugin.resolve;
  const isResolvedSSR = plugin => !!plugin.resolve;
  const ssrPlugins = flattenedPlugins.map(plugin => {
    return {
      name: plugin.name,
      resolve: hasAPIFile(`ssr`, plugin),
      options: plugin.pluginOptions
    };
  }).filter(isResolvedSSR);
  const browserPlugins = flattenedPlugins.map(plugin => {
    return {
      resolve: hasAPIFile(`browser`, plugin),
      options: plugin.pluginOptions
    };
  }).filter(isResolved);
  const browserPluginsRequires = browserPlugins.map(plugin => {
    // we need a relative import path to keep contenthash the same if directory changes
    const relativePluginPath = _path.default.relative(siteDir, plugin.resolve);
    return `{
      plugin: require('${(0, _gatsbyCoreUtils.slash)(relativePluginPath)}'),
      options: ${JSON.stringify(plugin.options)},
    }`;
  }).join(`,`);
  const browserAPIRunner = `module.exports = [${browserPluginsRequires}]\n`;
  let sSRAPIRunner = ``;
  try {
    sSRAPIRunner = fs.readFileSync(`${siteDir}/api-runner-ssr.js`, `utf-8`);
  } catch (err) {
    _reporter.default.panic(`Failed to read ${siteDir}/api-runner-ssr.js`, err);
  }
  const ssrPluginsRequires = ssrPlugins.map(plugin => `{
      name: '${plugin.name}',
      plugin: require('${plugin.resolve}'),
      options: ${JSON.stringify(plugin.options)},
    }`).join(`,`);
  sSRAPIRunner = `var plugins = [${ssrPluginsRequires}]\n${sSRAPIRunner}`;
  fs.writeFileSync(`${siteDir}/api-runner-browser-plugins.js`, browserAPIRunner, `utf-8`);
  fs.writeFileSync(`${siteDir}/api-runner-ssr.js`, sSRAPIRunner, `utf-8`);
  activity.end();
  /**
   * Start the main bootstrap processes.
   */

  // onPreBootstrap
  activity = _reporter.default.activityTimer(`onPreBootstrap`, {
    parentSpan
  });
  activity.start();
  await (0, _apiRunnerNode.default)(`onPreBootstrap`, {
    parentSpan: activity.span
  });
  activity.end();

  // Collect resolvable extensions and attach to program.
  const extensions = [`.mjs`, `.js`, `.jsx`, `.wasm`, `.json`];
  // Change to this being an action and plugins implement `onPreBootstrap`
  // for adding extensions.
  const apiResults = await (0, _apiRunnerNode.default)(`resolvableExtensions`, {
    traceId: `initial-resolvableExtensions`,
    parentSpan
  });
  _redux.store.dispatch({
    type: `SET_PROGRAM_EXTENSIONS`,
    payload: (0, _flattenDeep2.default)([extensions, apiResults])
  });
  const workerPool = WorkerPool.create();
  if (state.config.graphqlTypegen) {
    // This is only run during `gatsby develop`
    if (process.env.gatsby_executing_command === `develop`) {
      (0, _fileWrites.writeGraphQLConfig)(program);
    }
  }
  let initialWebhookBody = undefined;
  if (process.env.GATSBY_INITIAL_WEBHOOK_BODY) {
    try {
      initialWebhookBody = JSON.parse(process.env.GATSBY_INITIAL_WEBHOOK_BODY);
    } catch (e) {
      _reporter.default.error(`Failed to parse GATSBY_INITIAL_WEBHOOK_BODY as JSON:\n"${e.message}"`);
    }
  }
  return {
    store: _redux.store,
    workerPool,
    webhookBody: initialWebhookBody,
    adapterManager
  };
}
//# sourceMappingURL=initialize.js.map