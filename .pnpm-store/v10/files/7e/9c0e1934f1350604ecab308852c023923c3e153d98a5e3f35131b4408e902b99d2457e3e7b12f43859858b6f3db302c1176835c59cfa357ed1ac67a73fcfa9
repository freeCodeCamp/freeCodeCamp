"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.PARCEL_CACHE_DIR = exports.COMPILED_CACHE_DIR = void 0;
exports.compileGatsbyFiles = compileGatsbyFiles;
exports.constructParcel = constructParcel;
exports.findCompiledLocalPluginModule = findCompiledLocalPluginModule;
exports.gatsbyFileRegex = void 0;
exports.getResolvedFieldsForPlugin = getResolvedFieldsForPlugin;
exports.runParcel = runParcel;
var _core = require("@parcel/core");
var _cache = require("@parcel/cache");
var _path = _interopRequireDefault(require("path"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyWorker = require("gatsby-worker");
var _fsExtra = require("fs-extra");
var _isNearMatch = require("../is-near-match");
const COMPILED_CACHE_DIR = `.cache/compiled`;
exports.COMPILED_CACHE_DIR = COMPILED_CACHE_DIR;
const PARCEL_CACHE_DIR = `.cache/.parcel-cache`;
exports.PARCEL_CACHE_DIR = PARCEL_CACHE_DIR;
const gatsbyFileRegex = `gatsby-+(node|config).ts`;
exports.gatsbyFileRegex = gatsbyFileRegex;
const RETRY_COUNT = 5;
function getCacheDir(siteRoot) {
  return `${siteRoot}/${PARCEL_CACHE_DIR}`;
}
function exponentialBackoff(retry) {
  if (retry === 0) {
    return Promise.resolve();
  }
  const timeout = 50 * Math.pow(2, retry);
  return new Promise(resolve => setTimeout(resolve, timeout));
}

/**
 * Construct Parcel with config.
 * @see {@link https://parceljs.org/features/targets/}
 */
function constructParcel(siteRoot, cache) {
  return new _core.Parcel({
    entries: [`${siteRoot}/${gatsbyFileRegex}`, `${siteRoot}/plugins/**/${gatsbyFileRegex}`],
    defaultConfig: require.resolve(`gatsby-parcel-config`),
    mode: `production`,
    cache,
    targets: {
      root: {
        outputFormat: `commonjs`,
        includeNodeModules: false,
        sourceMap: process.env.NODE_ENV === `development`,
        engines: {
          node: "5" === `5` ? `>= 18.0.0` : `>= 14.15.0`
        },
        distDir: `${siteRoot}/${COMPILED_CACHE_DIR}`
      }
    },
    cacheDir: getCacheDir(siteRoot)
  });
}
async function runParcel(siteRoot) {
  const cache = new _cache.LMDBCache(getCacheDir(siteRoot));
  const parcel = constructParcel(siteRoot, cache);
  const {
    bundleGraph
  } = await parcel.run();
  const bundles = bundleGraph.getBundles();
  // bundles is not serializable, so we need to extract the data we need
  // so it crosses IPC boundaries
  return bundles.map(bundle => {
    var _bundle$getMainEntry;
    return {
      filePath: bundle.filePath,
      mainEntryPath: (_bundle$getMainEntry = bundle.getMainEntry()) === null || _bundle$getMainEntry === void 0 ? void 0 : _bundle$getMainEntry.filePath
    };
  });
}

/**
 * Compile known gatsby-* files (e.g. `gatsby-config`, `gatsby-node`)
 * and output in `<SITE_ROOT>/.cache/compiled`.
 */
async function compileGatsbyFiles(siteRoot, retry = 0) {
  try {
    const gatsbyNodeName = `gatsby-node`;

    // Check for gatsby-node.jsx and gatsby-node.tsx (or other misnamed variations)
    // We want to filter out directory names so we can use "withFileTypes"
    // With "withFileTypes" the array will contain <fs.Dirent> objects
    const filesAndDirectories = await (0, _fsExtra.readdir)(siteRoot, {
      withFileTypes: true
    });
    const files = filesAndDirectories.filter(i => !i.isDirectory()).map(i => i.name);
    let nearMatch = ``;
    for (const file of files) {
      if (nearMatch) {
        break;
      }
      const {
        name
      } = _path.default.parse(file);
      // Of course, allow valid gatsby-node files
      if (file === `gatsby-node.js` || file === `gatsby-node.mjs` || file === `gatsby-node.ts`) {
        break;
      }

      // Check for likely misnamed files
      if ((0, _isNearMatch.isNearMatch)(name, gatsbyNodeName, 3)) {
        nearMatch = file;
      }
    }

    // gatsby-node is misnamed
    if (nearMatch) {
      const isTSX = nearMatch.endsWith(`.tsx`);
      _reporter.default.panic({
        id: `10128`,
        context: {
          configName: gatsbyNodeName,
          nearMatch,
          isTSX
        }
      });
    }
    const worker = new _gatsbyWorker.WorkerPool(require.resolve(`./compile-gatsby-files`), {
      numWorkers: 1
    });
    const distDir = `${siteRoot}/${COMPILED_CACHE_DIR}`;
    await (0, _fsExtra.ensureDir)(distDir);
    await (0, _fsExtra.emptyDir)(distDir);
    await exponentialBackoff(retry);
    let bundles = [];
    try {
      // sometimes parcel segfaults which is not something we can recover from, so we run parcel
      // in child process and IF it fails we try to delete parcel's cache (this seems to "fix" the problem
      // causing segfaults?) and retry few times
      // not ideal, but having gatsby segfaulting is really frustrating and common remedy is to clean
      // entire .cache for users, which is not ideal either especially when we can just delete parcel's cache
      // and to recover automatically
      bundles = await worker.single.runParcel(siteRoot);
    } catch (error) {
      if (error.diagnostics) {
        handleErrors(error.diagnostics);
        return;
      } else if (retry >= RETRY_COUNT) {
        _reporter.default.panic({
          id: `11904`,
          error,
          context: {
            siteRoot,
            retries: RETRY_COUNT,
            sourceMessage: error.message
          }
        });
      } else {
        await exponentialBackoff(retry);
        try {
          await (0, _fsExtra.remove)(getCacheDir(siteRoot));
        } catch {
          // in windows we might get "EBUSY" errors if LMDB failed to close, so this try/catch is
          // to prevent EBUSY errors from potentially hiding real import errors
        }
        await compileGatsbyFiles(siteRoot, retry + 1);
        return;
      }
    } finally {
      worker.end();
    }
    await exponentialBackoff(retry);
    if (bundles.length === 0) return;
    let compiledTSFilesCount = 0;
    for (const bundle of bundles) {
      // validate that output exists and is valid
      try {
        delete require.cache[bundle.filePath];
        require(bundle.filePath);
      } catch (e) {
        if (retry >= RETRY_COUNT) {
          _reporter.default.panic({
            id: `11904`,
            context: {
              siteRoot,
              retries: RETRY_COUNT,
              compiledFileLocation: bundle.filePath,
              sourceFileLocation: bundle.mainEntryPath
            }
          });
        } else if (retry > 0) {
          // first retry is most flaky and it seems it always get in good state
          // after that - most likely cache clearing is the trick that fixes the problem
          _reporter.default.verbose(`Failed to import compiled file "${bundle.filePath}" after retry, attempting another retry (#${retry + 1} of ${RETRY_COUNT}) - "${e.message}"`);
        }
        try {
          await (0, _fsExtra.remove)(getCacheDir(siteRoot));
        } catch {
          // in windows we might get "EBUSY" errors if LMDB failed to close, so this try/catch is
          // to prevent EBUSY errors from potentially hiding real import errors
        }
        await compileGatsbyFiles(siteRoot, retry + 1);
        return;
      }
      const mainEntry = bundle.mainEntryPath;
      // mainEntry won't exist for shared chunks
      if (mainEntry) {
        if (mainEntry.endsWith(`.ts`)) {
          compiledTSFilesCount = compiledTSFilesCount + 1;
        }
      }
    }
  } catch (error) {
    if (error.diagnostics) {
      handleErrors(error.diagnostics);
    } else {
      _reporter.default.panic({
        id: `11903`,
        error,
        context: {
          siteRoot,
          sourceMessage: error.message
        }
      });
    }
  }
}
function handleErrors(diagnostics) {
  diagnostics.forEach(err => {
    if (err.codeFrames) {
      err.codeFrames.forEach(c => {
        var _c$codeHighlights$;
        // Assuming that codeHighlights only ever has one entry in the array. Local tests only ever showed one
        const codeHighlightsMessage = c === null || c === void 0 ? void 0 : (_c$codeHighlights$ = c.codeHighlights[0]) === null || _c$codeHighlights$ === void 0 ? void 0 : _c$codeHighlights$.message;
        // If both messages are the same don't print the specific, otherwise they would be duplicate
        const specificMessage = codeHighlightsMessage === err.message ? undefined : codeHighlightsMessage;
        _reporter.default.panic({
          id: `11901`,
          context: {
            filePath: c === null || c === void 0 ? void 0 : c.filePath,
            generalMessage: err.message,
            specificMessage,
            origin: err === null || err === void 0 ? void 0 : err.origin,
            hints: err === null || err === void 0 ? void 0 : err.hints
          }
        });
      });
    } else {
      _reporter.default.panic({
        id: `11901`,
        context: {
          generalMessage: err.message,
          origin: err === null || err === void 0 ? void 0 : err.origin,
          hints: err === null || err === void 0 ? void 0 : err.hints
        }
      });
    }
  });
}
function getResolvedFieldsForPlugin(rootDir, pluginName) {
  return {
    resolvedCompiledGatsbyNode: findCompiledLocalPluginModule(rootDir, pluginName, `gatsby-node`)
  };
}
function findCompiledLocalPluginModule(rootDir, pluginName, moduleName) {
  const compiledPathForPlugin = pluginName === `default-site-plugin` ? `${rootDir}/${COMPILED_CACHE_DIR}` : `${rootDir}/${COMPILED_CACHE_DIR}/plugins/${pluginName}`;
  const compiledPathForModule = `${compiledPathForPlugin}/${moduleName}.js`;
  const isCompiled = (0, _fsExtra.existsSync)(compiledPathForModule);
  if (isCompiled) {
    return compiledPathForModule;
  }
  return undefined;
}
//# sourceMappingURL=compile-gatsby-files.js.map