"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.buildHTML = void 0;
exports.buildHTMLPagesAndDeleteStaleArtifacts = buildHTMLPagesAndDeleteStaleArtifacts;
exports.buildRenderer = exports.buildPartialHydrationRenderer = void 0;
exports.buildSlices = buildSlices;
exports.deleteRenderer = void 0;
exports.devSSRWillInvalidate = devSSRWillInvalidate;
exports.getDevSSRWebpack = exports.doBuildPages = void 0;
exports.stitchSlicesIntoPagesHTML = stitchSlicesIntoPagesHTML;
var _chunk2 = _interopRequireDefault(require("lodash/chunk"));
var _bluebird = _interopRequireDefault(require("bluebird"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _errors = require("gatsby-cli/lib/reporter/errors");
var _bundle = require("../utils/webpack/bundle");
var path = _interopRequireWildcard(require("path"));
var _fastq = _interopRequireDefault(require("fastq"));
var _redux = require("../redux");
var _webpack = _interopRequireDefault(require("webpack"));
var _webpack2 = _interopRequireDefault(require("../utils/webpack.config"));
var _webpackErrorUtils = require("../utils/webpack-error-utils");
var buildUtils = _interopRequireWildcard(require("./build-utils"));
var _getPageData = require("../utils/get-page-data");
var _types = require("./types");
var _constants = require("../constants");
var _getPublicPath = require("../utils/get-public-path");
var _stitching = require("../utils/slices/stitching");
var _pageMode = require("../utils/page-mode");
var _extractUndefinedGlobal = require("../utils/extract-undefined-global");
var _pageData = require("../utils/page-data");
var _isFileInsideCompilations = require("../utils/webpack/utils/is-file-inside-compilations");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// TODO

const isPreview = process.env.GATSBY_IS_PREVIEW === `true`;
let devssrWebpackCompiler;
let SSRBundleReceivedInvalidEvent = true;
let SSRBundleWillInvalidate = false;
function devSSRWillInvalidate() {
  // we only get one `invalid` callback, so if we already
  // set this to true, we can't really await next `invalid` event
  if (!SSRBundleReceivedInvalidEvent) {
    SSRBundleWillInvalidate = true;
  }
}
let activeRecompilations = 0;
const getDevSSRWebpack = () => {
  if (process.env.gatsby_executing_command !== `develop`) {
    throw new Error(`This function can only be called in development`);
  }
  const watcher = devssrWebpackCompiler;
  const compiler = devssrWebpackCompiler.compiler;
  if (watcher && compiler) {
    return {
      recompileAndResumeWatching: async function recompileAndResumeWatching(allowTimedFallback) {
        let isResolved = false;
        return await new Promise(resolve => {
          function stopWatching() {
            activeRecompilations--;
            if (activeRecompilations === 0) {
              watcher.suspend();
            }
          }
          let timeout;
          function finish() {
            _redux.emitter.off(`DEV_SSR_COMPILATION_DONE`, finish);
            if (!isResolved) {
              isResolved = true;
              resolve(stopWatching);
            }
            if (timeout) {
              clearTimeout(timeout);
            }
          }
          _redux.emitter.on(`DEV_SSR_COMPILATION_DONE`, finish);
          // we reset it before we start compilation to be able to catch any invalid events
          SSRBundleReceivedInvalidEvent = false;
          if (activeRecompilations === 0) {
            watcher.resume();
          }
          activeRecompilations++;
          if (allowTimedFallback) {
            // Timeout after 1.5s.
            timeout = setTimeout(() => {
              if (!isResolved) {
                isResolved = true;
                resolve(stopWatching);
              }
            }, 1500);
          }
        });
      },
      needToRecompileSSRBundle: SSRBundleReceivedInvalidEvent || SSRBundleWillInvalidate
    };
  } else {
    return {
      needToRecompileSSRBundle: false,
      recompileAndResumeWatching: () => Promise.resolve(() => {})
    };
  }
};
exports.getDevSSRWebpack = getDevSSRWebpack;
let oldHash = ``;
let newHash = ``;
const runWebpack = (compilerConfig, stage, directory) => {
  const isDevSSREnabledAndViable = process.env.GATSBY_EXPERIMENTAL_DEV_SSR && stage === `develop-html`;
  return new Promise((resolve, reject) => {
    if (isDevSSREnabledAndViable) {
      const compiler = (0, _webpack.default)(compilerConfig);

      // because of this line we can't use our watch helper
      // These things should use emitter
      compiler.hooks.invalid.tap(`ssr file invalidation`, () => {
        SSRBundleReceivedInvalidEvent = true;
        SSRBundleWillInvalidate = false; // we were waiting for this event, we are no longer waiting for it
      });

      let isFirstCompile = true;
      const watcher = compiler.watch({
        ignored: /node_modules/
      }, (err, stats) => {
        // this runs multiple times
        _redux.emitter.emit(`DEV_SSR_COMPILATION_DONE`);
        if (isFirstCompile) {
          watcher.suspend();
          isFirstCompile = false;
        }
        if (err) {
          return reject(err);
        } else {
          newHash = (stats === null || stats === void 0 ? void 0 : stats.hash) || ``;
          const {
            restartWorker
          } = require(`../utils/dev-ssr/render-dev-html`);
          // Make sure we use the latest version during development
          if (oldHash !== `` && newHash !== oldHash) {
            restartWorker(`${directory}/${_constants.ROUTES_DIRECTORY}render-page.js`);
          }
          oldHash = newHash;
          return resolve({
            stats: stats,
            close: () => new Promise((resolve, reject) => watcher.close(err => err ? reject(err) : resolve()))
          });
        }
      });
      devssrWebpackCompiler = watcher;
    } else {
      (0, _bundle.build)(compilerConfig).then(({
        stats,
        close
      }) => {
        resolve({
          stats,
          close
        });
      }, err => reject(err));
    }
  });
};
const doBuildRenderer = async (directory, webpackConfig, stage) => {
  const {
    stats,
    close
  } = await runWebpack(webpackConfig, stage, directory);
  if (stats !== null && stats !== void 0 && stats.hasErrors()) {
    _reporter.default.panicOnBuild((0, _webpackErrorUtils.structureWebpackErrors)(stage, stats.compilation.errors));
  }
  if (stage === `develop-html`) {
    (0, _isFileInsideCompilations.setFilesFromDevelopHtmlCompilation)(stats.compilation);
  }

  // render-page.js is hard coded in webpack.config
  return {
    rendererPath: `${directory}/${_constants.ROUTES_DIRECTORY}render-page.js`,
    stats,
    close
  };
};
const doBuildPartialHydrationRenderer = async (directory, webpackConfig, stage) => {
  const {
    stats,
    close
  } = await runWebpack(webpackConfig, stage, directory);
  if (stats !== null && stats !== void 0 && stats.hasErrors()) {
    _reporter.default.panicOnBuild((0, _webpackErrorUtils.structureWebpackErrors)(stage, stats.compilation.errors));
  }

  // render-page.js is hard coded in webpack.config
  return {
    rendererPath: `${directory}/${_constants.ROUTES_DIRECTORY}render-page.js`,
    stats,
    close
  };
};
const buildRenderer = async (program, stage, parentSpan) => {
  const config = await (0, _webpack2.default)(program, program.directory, stage, null, {
    parentSpan
  });
  return doBuildRenderer(program.directory, config, stage);
};
exports.buildRenderer = buildRenderer;
const buildPartialHydrationRenderer = async (program, stage, parentSpan) => {
  const config = await (0, _webpack2.default)(program, program.directory, stage, null, {
    parentSpan
  });
  for (const rule of config.module.rules) {
    if (`./test.js`.match(rule.test)) {
      if (!rule.use) {
        rule.use = [];
      }
      if (!Array.isArray(rule.use)) {
        rule.use = [rule.use];
      }
      rule.use.push({
        loader: require.resolve(`../utils/webpack/loaders/partial-hydration-reference-loader`)
      });
    }
  }

  // TODO add caching
  config.cache = false;
  config.output.path = path.join(program.directory, `.cache`, `partial-hydration`);

  // require.resolve might fail the build if the package is not installed
  // Instead of failing it'll be ignored
  try {
    // TODO collect javascript aliases to match the partial hydration bundle
    config.resolve.alias[`gatsby-plugin-image`] = require.resolve(`gatsby-plugin-image/dist/gatsby-image.browser.modern`);
  } catch (e) {
    // do nothing
  }
  return doBuildPartialHydrationRenderer(program.directory, config, stage);
};

// TODO remove after v4 release and update cloud internals
exports.buildPartialHydrationRenderer = buildPartialHydrationRenderer;
const deleteRenderer = async rendererPath => {
  try {
    await _fsExtra.default.remove(rendererPath);
    await _fsExtra.default.remove(`${rendererPath}.map`);
  } catch (e) {
    // This function will fail on Windows with no further consequences.
  }
};
exports.deleteRenderer = deleteRenderer;
const renderHTMLQueue = async (workerPool, activity, htmlComponentRendererPath, pages, stage = _types.Stage.BuildHTML) => {
  // We need to only pass env vars that are set programmatically in gatsby-cli
  // to child process. Other vars will be picked up from environment.
  const envVars = [[`NODE_ENV`, process.env.NODE_ENV], [`gatsby_executing_command`, process.env.gatsby_executing_command], [`gatsby_log_level`, process.env.gatsby_log_level]];
  const segments = (0, _chunk2.default)(pages, 50);
  const sessionId = Date.now();
  const {
    webpackCompilationHash
  } = _redux.store.getState();
  const renderHTML = stage === `build-html` ? workerPool.single.renderHTMLProd : workerPool.single.renderHTMLDev;
  const uniqueUnsafeBuiltinUsedStacks = new Set();
  try {
    await _bluebird.default.map(segments, async pageSegment => {
      const renderHTMLResult = await renderHTML({
        envVars,
        htmlComponentRendererPath,
        paths: pageSegment,
        sessionId,
        webpackCompilationHash
      });
      if (isPreview) {
        const htmlRenderMeta = renderHTMLResult;
        const seenErrors = new Set();
        const errorMessages = new Map();
        await Promise.all(Object.entries(htmlRenderMeta.previewErrors).map(async ([pagePath, error]) => {
          if (!seenErrors.has(error.stack)) {
            errorMessages.set(error.stack, {
              pagePaths: [pagePath]
            });
            seenErrors.add(error.stack);
            const prettyError = (0, _errors.createErrorFromString)(error.stack, `${htmlComponentRendererPath}.map`);
            const errorMessageStr = `${prettyError.stack}${prettyError.codeFrame ? `\n\n${prettyError.codeFrame}\n` : ``}`;
            const errorMessage = errorMessages.get(error.stack);
            errorMessage.errorMessage = errorMessageStr;
            errorMessages.set(error.stack, errorMessage);
          } else {
            const errorMessage = errorMessages.get(error.stack);
            errorMessage.pagePaths.push(pagePath);
            errorMessages.set(error.stack, errorMessage);
          }
        }));
        for (const value of errorMessages.values()) {
          const errorMessage = `The following page(s) saw this error when building their HTML:\n\n${value.pagePaths.map(p => `- ${p}`).join(`\n`)}\n\n${value.errorMessage}`;
          _reporter.default.error({
            id: `95314`,
            context: {
              errorMessage
            }
          });
        }
      }
      if (stage === `build-html`) {
        const htmlRenderMeta = renderHTMLResult;
        _redux.store.dispatch({
          type: `HTML_GENERATED`,
          payload: pageSegment
        });
        if ("5" === `5` && process.env.GATSBY_SLICES) {
          _redux.store.dispatch({
            type: `SET_SLICES_PROPS`,
            payload: htmlRenderMeta.slicesPropsPerPage
          });
        }
        for (const [_pagePath, arrayOfUsages] of Object.entries(htmlRenderMeta.unsafeBuiltinsUsageByPagePath)) {
          for (const unsafeUsageStack of arrayOfUsages) {
            uniqueUnsafeBuiltinUsedStacks.add(unsafeUsageStack);
          }
        }
      }
      if (activity && activity.tick) {
        activity.tick(pageSegment.length);
      }
    });
  } catch (e) {
    var _e$context;
    if (e !== null && e !== void 0 && (_e$context = e.context) !== null && _e$context !== void 0 && _e$context.unsafeBuiltinsUsageByPagePath) {
      for (const [_pagePath, arrayOfUsages] of Object.entries(e.context.unsafeBuiltinsUsageByPagePath)) {
        // @ts-ignore TS doesn't know arrayOfUsages is Iterable
        for (const unsafeUsageStack of arrayOfUsages) {
          uniqueUnsafeBuiltinUsedStacks.add(unsafeUsageStack);
        }
      }
    }
    throw e;
  } finally {
    if (uniqueUnsafeBuiltinUsedStacks.size > 0) {
      console.warn(`Unsafe builtin method was used, future builds will need to rebuild all pages`);
      _redux.store.dispatch({
        type: `SSR_USED_UNSAFE_BUILTIN`
      });
    }
    for (const unsafeBuiltinUsedStack of uniqueUnsafeBuiltinUsedStacks) {
      const prettyError = (0, _errors.createErrorFromString)(unsafeBuiltinUsedStack, `${htmlComponentRendererPath}.map`);
      const warningMessage = `${prettyError.stack}${prettyError.codeFrame ? `\n\n${prettyError.codeFrame}\n` : ``}`;
      _reporter.default.warn(warningMessage);
    }
  }
};
const renderPartialHydrationQueue = async (workerPool, activity, pages, program) => {
  // We need to only pass env vars that are set programmatically in gatsby-cli
  // to child process. Other vars will be picked up from environment.
  const envVars = [[`NODE_ENV`, process.env.NODE_ENV], [`gatsby_executing_command`, process.env.gatsby_executing_command], [`gatsby_log_level`, process.env.gatsby_log_level]];
  const segments = (0, _chunk2.default)(pages, 50);
  const sessionId = Date.now();
  const {
    config
  } = _redux.store.getState();
  const {
    assetPrefix,
    pathPrefix
  } = config;

  // Let the error bubble up
  await Promise.all(segments.map(async pageSegment => {
    await workerPool.single.renderPartialHydrationProd({
      envVars,
      paths: pageSegment,
      sessionId,
      pathPrefix: (0, _getPublicPath.getPublicPath)({
        assetPrefix,
        pathPrefix,
        ...program
      })
    });
    if (activity && activity.tick) {
      activity.tick(pageSegment.length);
    }
  }));
};
class BuildHTMLError extends Error {
  codeFrame = ``;
  constructor(error) {
    super(error.message);

    // We must use getOwnProperty because keys like `stack` are not enumerable,
    // but we want to copy over the entire error
    Object.getOwnPropertyNames(error).forEach(key => {
      this[key] = error[key];
    });
  }
}
const doBuildPages = async (rendererPath, pagePaths, activity, workerPool, stage) => {
  try {
    await renderHTMLQueue(workerPool, activity, rendererPath, pagePaths, stage);
  } catch (error) {
    var _error$context;
    const prettyError = (0, _errors.createErrorFromString)(error, `${rendererPath}.map`);
    const buildError = new BuildHTMLError(prettyError);
    buildError.context = error.context;
    if (error !== null && error !== void 0 && (_error$context = error.context) !== null && _error$context !== void 0 && _error$context.path) {
      const pageData = await (0, _getPageData.getPageData)(error.context.path);
      const modifiedPageDataForErrorMessage = (0, _pageData.modifyPageDataForErrorMessage)(pageData);
      const errorMessage = `Truncated page data information for the failed page "${error.context.path}": ${JSON.stringify(modifiedPageDataForErrorMessage, null, 2)}`;

      // This is our only error during preview so customize it a bit + add the
      // pretty build error.
      if (isPreview) {
        _reporter.default.error({
          id: `95314`,
          context: {
            errorMessage
          },
          error: buildError
        });
      } else {
        _reporter.default.error(errorMessage);
      }
    }

    // Don't crash the builder when we're in preview-mode.
    if (!isPreview) {
      throw buildError;
    }
  }
};

// TODO remove in v4 - this could be a "public" api
exports.doBuildPages = doBuildPages;
const buildHTML = async ({
  program,
  stage,
  pagePaths,
  activity,
  workerPool
}) => {
  const rendererPath = `${program.directory}/${_constants.ROUTES_DIRECTORY}render-page.js`;
  await doBuildPages(rendererPath, pagePaths, activity, workerPool, stage);
  if ((process.env.GATSBY_PARTIAL_HYDRATION === `true` || process.env.GATSBY_PARTIAL_HYDRATION === `1`) && "5" === `5`) {
    await renderPartialHydrationQueue(workerPool, activity, pagePaths, program);
  }
};
exports.buildHTML = buildHTML;
async function buildHTMLPagesAndDeleteStaleArtifacts({
  workerPool,
  parentSpan,
  program
}) {
  const rendererPath = `${program.directory}/${_constants.ROUTES_DIRECTORY}render-page.js`;
  buildUtils.markHtmlDirtyIfResultOfUsedStaticQueryChanged();
  const {
    toRegenerate,
    toDelete,
    toCleanupFromTrackedState
  } = buildUtils.calcDirtyHtmlFiles(_redux.store.getState());
  _redux.store.dispatch({
    type: `HTML_TRACKED_PAGES_CLEANUP`,
    payload: toCleanupFromTrackedState
  });
  if (toRegenerate.length > 0) {
    const buildHTMLActivityProgress = _reporter.default.createProgress(`Building static HTML for pages`, toRegenerate.length, 0, {
      parentSpan
    });
    buildHTMLActivityProgress.start();
    try {
      await doBuildPages(rendererPath, toRegenerate, buildHTMLActivityProgress, workerPool, _types.Stage.BuildHTML);
    } catch (err) {
      let id = `95313`;
      const context = {
        errorPath: err.context && err.context.path,
        undefinedGlobal: ``
      };
      const undefinedGlobal = (0, _extractUndefinedGlobal.extractUndefinedGlobal)(err);
      if (undefinedGlobal) {
        id = `95312`;
        context.undefinedGlobal = undefinedGlobal;
      }
      buildHTMLActivityProgress.panic({
        id,
        context,
        error: err
      });
    }
    buildHTMLActivityProgress.end();
  } else {
    _reporter.default.info(`There are no new or changed html files to build.`);
  }
  if ((process.env.GATSBY_PARTIAL_HYDRATION === `true` || process.env.GATSBY_PARTIAL_HYDRATION === `1`) && "5" === `5`) {
    if (toRegenerate.length > 0) {
      const buildHTMLActivityProgress = _reporter.default.createProgress(`Building partial HTML for pages`, toRegenerate.length, 0, {
        parentSpan
      });
      try {
        buildHTMLActivityProgress.start();
        await renderPartialHydrationQueue(workerPool, buildHTMLActivityProgress, toRegenerate, program);
      } catch (error) {
        // Generic error with page path and useful stack trace, accurate code frame can be a future improvement
        buildHTMLActivityProgress.panic({
          id: `80000`,
          context: error.context,
          error
        });
      } finally {
        buildHTMLActivityProgress.end();
      }
    }
  }
  if ("5" !== `5` && !program.keepPageRenderer) {
    try {
      await deleteRenderer(rendererPath);
    } catch (err) {
      // pass through
    }
  }
  if ("5" === `5` && process.env.GATSBY_SLICES) {
    await buildSlices({
      program,
      workerPool,
      parentSpan
    });
    await stitchSlicesIntoPagesHTML({
      publicDir: path.join(program.directory, `public`),
      parentSpan
    });
  }
  if (toDelete.length > 0) {
    const publicDir = path.join(program.directory, `public`);
    const deletePageDataActivityTimer = _reporter.default.activityTimer(`Delete previous page data`);
    deletePageDataActivityTimer.start();
    await buildUtils.removePageFiles(publicDir, toDelete);
    deletePageDataActivityTimer.end();
  }
  return {
    toRegenerate,
    toDelete
  };
}
async function buildSlices({
  program,
  workerPool,
  parentSpan
}) {
  const state = _redux.store.getState();

  // for now we always render everything, everytime
  const slicesProps = [];
  for (const [sliceId, {
    props,
    sliceName,
    hasChildren,
    pages,
    dirty
  }] of state.html.slicesProps.bySliceId.entries()) {
    if (dirty && pages.size > 0) {
      slicesProps.push({
        sliceId,
        props,
        sliceName,
        hasChildren
      });
    }
  }
  if (slicesProps.length > 0) {
    const buildHTMLActivityProgress = _reporter.default.activityTimer(`Building slices HTML (${slicesProps.length})`, {
      parentSpan
    });
    buildHTMLActivityProgress.start();
    const htmlComponentRendererPath = `${program.directory}/${_constants.ROUTES_DIRECTORY}render-page.js`;
    try {
      const slices = Array.from(state.slices.entries());
      const staticQueriesBySliceTemplate = {};
      for (const slice of state.slices.values()) {
        staticQueriesBySliceTemplate[slice.componentPath] = state.staticQueriesByTemplate.get(slice.componentPath);
      }
      await workerPool.single.renderSlices({
        publicDir: path.join(program.directory, `public`),
        htmlComponentRendererPath,
        slices,
        slicesProps,
        staticQueriesBySliceTemplate
      });
    } catch (err) {
      const prettyError = (0, _errors.createErrorFromString)(err.stack, `${htmlComponentRendererPath}.map`);
      const undefinedGlobal = (0, _extractUndefinedGlobal.extractUndefinedGlobal)(err);
      let id = `11339`;
      if (undefinedGlobal) {
        id = `11340`;
        err.context.undefinedGlobal = undefinedGlobal;
      }
      buildHTMLActivityProgress.panic({
        id,
        context: err.context,
        error: prettyError
      });
    } finally {
      buildHTMLActivityProgress.end();
    }

    // for now separate action for cleaning dirty flag and removing stale entries
    _redux.store.dispatch({
      type: `SLICES_PROPS_RENDERED`,
      payload: slicesProps
    });
  } else {
    _reporter.default.info(`There are no new or changed slice html files to build.`);
  }
  _redux.store.dispatch({
    type: `SLICES_PROPS_REMOVE_STALE`
  });
}
async function stitchSlicesIntoPagesHTML({
  publicDir,
  parentSpan
}) {
  const stitchSlicesActivity = _reporter.default.activityTimer(`stitching slices`, {
    parentSpan
  });
  stitchSlicesActivity.start();
  try {
    const {
      html: {
        pagesThatNeedToStitchSlices
      },
      pages
    } = _redux.store.getState();
    const stitchQueue = (0, _fastq.default)(async (pagePath, cb) => {
      await (0, _stitching.stitchSliceForAPage)({
        pagePath,
        publicDir
      });
      cb(null);
    }, 25);
    for (const pagePath of pagesThatNeedToStitchSlices) {
      const page = pages.get(pagePath);
      if (!page) {
        continue;
      }
      if ((0, _pageMode.getPageMode)(page) === `SSG`) {
        stitchQueue.push(pagePath);
      }
    }
    if (!stitchQueue.idle()) {
      await new Promise(resolve => {
        stitchQueue.drain = resolve;
      });
    }
    _redux.store.dispatch({
      type: `SLICES_STITCHED`
    });
  } finally {
    stitchSlicesActivity.end();
  }
}
//# sourceMappingURL=build-html.js.map