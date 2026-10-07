"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _path = _interopRequireDefault(require("path"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _buildHtml = require("./build-html");
var _buildJavascript = require("./build-javascript");
var _bootstrap = require("../bootstrap");
var _apiRunnerNode = _interopRequireDefault(require("../utils/api-runner-node"));
var _graphqlRunner = require("../query/graphql-runner");
var _getStaticDir = require("../utils/get-static-dir");
var _tracer = require("../utils/tracer");
var db = _interopRequireWildcard(require("../redux/save-state"));
var _redux = require("../redux");
var appDataUtil = _interopRequireWildcard(require("../utils/app-data"));
var _pageData = require("../utils/page-data");
var _webpackErrorUtils = require("../utils/webpack-error-utils");
var _feedback = require("../utils/feedback");
var _actions = require("../redux/actions");
var _waitUntilJobsComplete = require("../utils/wait-until-jobs-complete");
var _types = require("./types");
var _services = require("../services");
var _webpackStatus = require("../utils/webpack-status");
var _showExperimentNotice = require("../utils/show-experiment-notice");
var _pool = require("../utils/worker/pool");
var _bundleWebpack = require("../schema/graphql-engine/bundle-webpack");
var _bundleWebpack2 = require("../utils/page-ssr-module/bundle-webpack");
var _enginesHelpers = require("../utils/engines-helpers");
var _pageMode = require("../utils/page-mode");
var _validateEngines = require("../utils/validate-engines");
var _gatsbyCloudConfig = require("../utils/gatsby-cloud-config");
var _workerMessaging = require("../utils/jobs/worker-messaging");
var _getSsrChunkHashes = require("../utils/webpack/get-ssr-chunk-hashes");
var _tsCodegen = require("../utils/graphql-typegen/ts-codegen");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
module.exports = async function build(program,
// Let external systems running Gatsby to inject attributes
externalTelemetryAttributes) {
  // global gatsby object to use without store
  global.__GATSBY = {
    buildId: _gatsbyCoreUtils.uuid.v4(),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    root: program.directory
  };
  if ((0, _gatsbyCoreUtils.isTruthy)(process.env.VERBOSE)) {
    program.verbose = true;
  }
  _reporter.default.setVerbose(program.verbose);
  if (program.profile) {
    _reporter.default.warn(`React Profiling is enabled. This can have a performance impact. See https://www.gatsbyjs.com/docs/profiling-site-performance-with-react-profiler/#performance-impact`);
  }
  _reporter.default.verbose(`Running build in "${process.env.NODE_ENV}" environment`);
  await (0, _gatsbyCoreUtils.updateInternalSiteMetadata)({
    name: program.sitePackageJson.name,
    sitePath: program.directory,
    lastRun: Date.now(),
    pid: process.pid
  });
  (0, _webpackStatus.markWebpackStatusAsPending)();
  const publicDir = _path.default.join(program.directory, `public`);
  if (!externalTelemetryAttributes) {
    await (0, _tracer.initTracer)(process.env.GATSBY_OPEN_TRACING_CONFIG_FILE || program.openTracingConfigFile);
  }
  const buildActivity = _reporter.default.phantomActivity(`build`);
  buildActivity.start();
  const buildSpan = buildActivity.span;
  buildSpan.setTag(`directory`, program.directory);

  // Add external tags to buildSpan
  if (externalTelemetryAttributes) {
    Object.entries(externalTelemetryAttributes).forEach(([key, value]) => {
      buildActivity.span.setTag(key, value);
    });
  }
  const {
    gatsbyNodeGraphQLFunction,
    workerPool,
    adapterManager
  } = await (0, _bootstrap.bootstrap)({
    program,
    parentSpan: buildSpan
  });
  await (0, _apiRunnerNode.default)(`onPreBuild`, {
    graphql: gatsbyNodeGraphQLFunction,
    parentSpan: buildSpan
  });

  // writes sync and async require files to disk
  // used inside routing "html" + "javascript"
  await (0, _services.writeOutRequires)({
    store: _redux.store,
    parentSpan: buildSpan
  });
  let closeJavascriptBundleCompilation;
  let closeHTMLBundleCompilation;
  let closePartialHydrationBundleCompilation;
  let webpackCompilationHash = null;
  let webpackSSRCompilationHash = null;
  let templateCompilationHashes = {};
  const engineBundlingPromises = [];
  const buildActivityTimer = _reporter.default.activityTimer(`Building production JavaScript and CSS bundles`, {
    parentSpan: buildSpan
  });
  buildActivityTimer.start();
  try {
    const {
      stats,
      close
    } = await (0, _buildJavascript.buildProductionBundle)(program, buildActivityTimer.span);
    closeJavascriptBundleCompilation = close;
    if (stats.hasWarnings()) {
      const rawMessages = stats.toJson({
        all: false,
        warnings: true
      });
      (0, _webpackErrorUtils.reportWebpackWarnings)(rawMessages.warnings, _reporter.default);
    }
    webpackCompilationHash = stats.hash;
  } catch (err) {
    buildActivityTimer.panic((0, _webpackErrorUtils.structureWebpackErrors)(_types.Stage.BuildJavascript, err));
  } finally {
    buildActivityTimer.end();
  }
  const buildSSRBundleActivityProgress = _reporter.default.activityTimer(`Building HTML renderer`, {
    parentSpan: buildSpan
  });
  buildSSRBundleActivityProgress.start();
  try {
    const {
      close,
      stats
    } = await (0, _buildHtml.buildRenderer)(program, _types.Stage.BuildHTML, buildSSRBundleActivityProgress.span);
    closeHTMLBundleCompilation = close;
    if ("5" === `5` && process.env.GATSBY_SLICES) {
      const {
        renderPageHash,
        templateHashes
      } = (0, _getSsrChunkHashes.getSSRChunkHashes)({
        stats,
        components: _redux.store.getState().components
      });
      webpackSSRCompilationHash = renderPageHash;
      templateCompilationHashes = templateHashes;
    } else {
      webpackSSRCompilationHash = stats.hash;
    }
    await close();
  } catch (err) {
    buildActivityTimer.panic((0, _webpackErrorUtils.structureWebpackErrors)(_types.Stage.BuildHTML, err));
  } finally {
    buildSSRBundleActivityProgress.end();
  }
  if ((process.env.GATSBY_PARTIAL_HYDRATION === `true` || process.env.GATSBY_PARTIAL_HYDRATION === `1`) && "5" === `5`) {
    const buildPartialHydrationBundleActivityProgress = _reporter.default.activityTimer(`Building Partial Hydration renderer`, {
      parentSpan: buildSpan
    });
    buildPartialHydrationBundleActivityProgress.start();
    try {
      const {
        buildPartialHydrationRenderer
      } = await Promise.resolve().then(() => _interopRequireWildcard(require(`./build-html`)));
      const {
        close
      } = await buildPartialHydrationRenderer(program, _types.Stage.BuildHTML, buildPartialHydrationBundleActivityProgress.span);
      closePartialHydrationBundleCompilation = close;
      await close();
    } catch (err) {
      buildActivityTimer.panic((0, _webpackErrorUtils.structureWebpackErrors)(_types.Stage.BuildHTML, err));
    } finally {
      buildPartialHydrationBundleActivityProgress.end();
    }
  }

  // exec outer config function for each template
  const pageConfigActivity = _reporter.default.activityTimer(`Execute page configs`, {
    parentSpan: buildSpan
  });
  pageConfigActivity.start();
  try {
    await (0, _pageMode.preparePageTemplateConfigs)(gatsbyNodeGraphQLFunction);
  } catch (err) {
    _reporter.default.panic(err);
  } finally {
    pageConfigActivity.end();
  }
  if ((0, _enginesHelpers.shouldGenerateEngines)()) {
    const state = _redux.store.getState();
    const buildActivityTimer = _reporter.default.activityTimer(`Building Rendering Engines`, {
      parentSpan: buildSpan
    });
    try {
      buildActivityTimer.start();
      // bundle graphql-engine
      engineBundlingPromises.push((0, _bundleWebpack.createGraphqlEngineBundle)(program.directory, _reporter.default, program.verbose));
      engineBundlingPromises.push((0, _bundleWebpack2.createPageSSRBundle)({
        rootDir: program.directory,
        components: state.components,
        staticQueriesByTemplate: state.staticQueriesByTemplate,
        webpackCompilationHash: webpackCompilationHash,
        // we set webpackCompilationHash above
        reporter: _reporter.default,
        isVerbose: program.verbose
      }));
      await Promise.all(engineBundlingPromises);
    } catch (err) {
      _reporter.default.panic(err);
    } finally {
      buildActivityTimer.end();
    }
    await (0, _validateEngines.validateEnginesWithActivity)(program.directory, buildSpan);
  }
  const cacheActivity = _reporter.default.activityTimer(`Caching Webpack compilations`, {
    parentSpan: buildSpan
  });
  try {
    var _closeJavascriptBundl, _closeHTMLBundleCompi, _closePartialHydratio;
    cacheActivity.start();
    await Promise.all([(_closeJavascriptBundl = closeJavascriptBundleCompilation) === null || _closeJavascriptBundl === void 0 ? void 0 : _closeJavascriptBundl(), (_closeHTMLBundleCompi = closeHTMLBundleCompilation) === null || _closeHTMLBundleCompi === void 0 ? void 0 : _closeHTMLBundleCompi(), (_closePartialHydratio = closePartialHydrationBundleCompilation) === null || _closePartialHydratio === void 0 ? void 0 : _closePartialHydratio()]);
  } finally {
    cacheActivity.end();
  }
  const graphqlRunner = new _graphqlRunner.GraphQLRunner(_redux.store, {
    collectStats: true,
    graphqlTracing: program.graphqlTracing
  });
  const {
    queryIds
  } = await (0, _services.calculateDirtyQueries)({
    store: _redux.store
  });

  // Only run queries with mode SSG

  queryIds.pageQueryIds = queryIds.pageQueryIds.filter(query => (0, _pageMode.getPageMode)(query) === `SSG`);

  // Start saving page.mode in the main process (while queries run in workers in parallel)
  const waitMaterializePageMode = (0, _pageMode.materializePageMode)();
  let waitForWorkerPoolRestart = Promise.resolve();
  // If one wants to debug query running you can set the CPU count to 1
  if ((0, _gatsbyCoreUtils.cpuCoreCount)() === 1) {
    await (0, _services.runStaticQueries)({
      queryIds,
      parentSpan: buildSpan,
      store: _redux.store,
      graphqlRunner
    });
    await (0, _services.runPageQueries)({
      queryIds,
      graphqlRunner,
      parentSpan: buildSpan,
      store: _redux.store
    });
  } else {
    await (0, _pool.runQueriesInWorkersQueue)(workerPool, queryIds, {
      parentSpan: buildSpan
    });
    // Jobs still might be running even though query running finished
    await Promise.all([(0, _waitUntilJobsComplete.waitUntilAllJobsComplete)(), (0, _workerMessaging.waitUntilWorkerJobsAreComplete)()]);
    // Restart worker pool before merging state to lower memory pressure while merging state
    waitForWorkerPoolRestart = workerPool.restart();
    await (0, _pool.mergeWorkerState)(workerPool, buildSpan);
  }
  if ("5" === `5` && process.env.GATSBY_SLICES) {
    await (0, _services.runSliceQueries)({
      queryIds,
      graphqlRunner,
      parentSpan: buildSpan,
      store: _redux.store
    });
  }
  const engineTemplatePaths = new Set();
  {
    let SSGCount = 0;
    let DSGCount = 0;
    let SSRCount = 0;
    for (const page of _redux.store.getState().pages.values()) {
      if (page.mode === `SSR`) {
        SSRCount++;
        engineTemplatePaths.add(page.componentPath);
      } else if (page.mode === `DSG`) {
        DSGCount++;
        engineTemplatePaths.add(page.componentPath);
      } else {
        SSGCount++;
      }
    }
  }
  await (0, _bundleWebpack2.copyStaticQueriesToEngine)({
    engineTemplatePaths,
    staticQueriesByTemplate: _redux.store.getState().staticQueriesByTemplate,
    components: _redux.store.getState().components
  });
  if (!("5" === `5` && process.env.GATSBY_SLICES)) {
    if (process.send && (0, _enginesHelpers.shouldGenerateEngines)()) {
      await waitMaterializePageMode;
      process.send({
        type: `LOG_ACTION`,
        action: {
          type: `ENGINES_READY`,
          timestamp: new Date().toJSON()
        }
      });
    }
  }

  // create scope so we don't leak state object
  {
    const state = _redux.store.getState();
    if (webpackCompilationHash !== state.webpackCompilationHash || !appDataUtil.exists(publicDir)) {
      _redux.store.dispatch({
        type: `SET_WEBPACK_COMPILATION_HASH`,
        payload: webpackCompilationHash
      });
      const rewriteActivityTimer = _reporter.default.activityTimer(`Rewriting compilation hashes`, {
        parentSpan: buildSpan
      });
      rewriteActivityTimer.start();
      await appDataUtil.write(publicDir, webpackCompilationHash);
      rewriteActivityTimer.end();
    }
    if ("5" === `5` && process.env.GATSBY_SLICES) {
      Object.entries(templateCompilationHashes).forEach(([templatePath, templateHash]) => {
        const component = _redux.store.getState().components.get(templatePath);
        if (component) {
          const action = {
            type: `SET_SSR_TEMPLATE_WEBPACK_COMPILATION_HASH`,
            payload: {
              templatePath,
              templateHash,
              pages: component.pages,
              isSlice: component.isSlice
            }
          };
          _redux.store.dispatch(action);
        } else {
          console.error({
            templatePath,
            templateHash,
            availableTemplates: [..._redux.store.getState().components.keys()]
          });
          throw new Error(`something changed in webpack but I don't know what`);
        }
      });
    }
    if (state.html.ssrCompilationHash !== webpackSSRCompilationHash) {
      _redux.store.dispatch({
        type: `SET_SSR_WEBPACK_COMPILATION_HASH`,
        payload: webpackSSRCompilationHash
      });
    }
  }
  await (0, _pageData.flush)(buildSpan);
  (0, _webpackStatus.markWebpackStatusAsDone)();
  if ("5" === `5` && process.env.GATSBY_SLICES) {
    if ((0, _enginesHelpers.shouldGenerateEngines)()) {
      const state = _redux.store.getState();
      const sliceDataPath = _path.default.join(state.program.directory, `public`, `slice-data`);
      if (_fsExtra.default.existsSync(sliceDataPath)) {
        const destination = _path.default.join(state.program.directory, `.cache`, `page-ssr`, `slice-data`);
        _fsExtra.default.copySync(sliceDataPath, destination);
      }
      if (process.send) {
        await waitMaterializePageMode;
        process.send({
          type: `LOG_ACTION`,
          action: {
            type: `ENGINES_READY`,
            timestamp: new Date().toJSON()
          }
        });
      }
    }
  }

  // Copy files from the static directory to
  // an equivalent static directory within public.
  (0, _getStaticDir.copyStaticDirs)();
  _redux.store.dispatch(_actions.actions.setProgramStatus(`BOOTSTRAP_QUERY_RUNNING_FINISHED`));
  await db.saveState();
  await (0, _waitUntilJobsComplete.waitUntilAllJobsComplete)();

  // we need to save it again to make sure our latest state has been saved
  await db.saveState();
  if ((0, _enginesHelpers.shouldGenerateEngines)()) {
    // well, tbf we should just generate this in `.cache` and avoid deleting it :shrug:
    program.keepPageRenderer = true;
  }
  await waitForWorkerPoolRestart;
  const {
    toRegenerate,
    toDelete
  } = await (0, _buildHtml.buildHTMLPagesAndDeleteStaleArtifacts)({
    program,
    workerPool,
    parentSpan: buildSpan
  });
  await waitMaterializePageMode;
  const waitWorkerPoolEnd = Promise.all(workerPool.end());

  // create scope so we don't leak state object
  {
    const {
      schema,
      definitions,
      config
    } = _redux.store.getState();
    const directory = program.directory;
    const graphqlTypegenOptions = config.graphqlTypegen;

    // Only generate types when the option is enabled
    if (graphqlTypegenOptions && graphqlTypegenOptions.generateOnBuild) {
      const typegenActivity = _reporter.default.activityTimer(`Generating TypeScript types`, {
        parentSpan: buildSpan
      });
      typegenActivity.start();
      try {
        await (0, _tsCodegen.writeTypeScriptTypes)(directory, schema, definitions, graphqlTypegenOptions);
      } catch (err) {
        typegenActivity.panicOnBuild({
          id: `12100`,
          context: {
            sourceMessage: err
          }
        });
      }
      typegenActivity.end();
    }
  }
  const postBuildActivityTimer = _reporter.default.activityTimer(`onPostBuild`, {
    parentSpan: buildSpan
  });
  postBuildActivityTimer.start();
  await (0, _apiRunnerNode.default)(`onPostBuild`, {
    graphql: gatsbyNodeGraphQLFunction,
    parentSpan: postBuildActivityTimer.span
  });
  postBuildActivityTimer.end();

  // Wait for any jobs that were started in onPostBuild
  // This could occur due to queries being run which invoke sharp for instance
  await (0, _waitUntilJobsComplete.waitUntilAllJobsComplete)();
  try {
    await waitWorkerPoolEnd;
  } catch (e) {
    _reporter.default.warn(`Error when closing WorkerPool: ${e.message}`);
  }

  // Make sure we saved the latest state so we have all jobs cached
  await db.saveState();
  const state = _redux.store.getState();
  _reporter.default._renderPageTree({
    components: state.components,
    functions: state.functions,
    pages: state.pages,
    root: state.program.directory
  });
  if (process.send) {
    const gatsbyCloudConfig = (0, _gatsbyCloudConfig.constructConfigObject)(state.config);
    process.send({
      type: `LOG_ACTION`,
      action: {
        type: `GATSBY_CONFIG_KEYS`,
        payload: gatsbyCloudConfig,
        timestamp: new Date().toJSON()
      }
    });
  }
  _reporter.default.info(`Done building in ${process.uptime()} sec`);
  buildActivity.end();
  if (!externalTelemetryAttributes) {
    await (0, _tracer.stopTracer)();
  }
  if (program.logPages) {
    if (toRegenerate.length) {
      _reporter.default.info(`Built pages:\n${toRegenerate.map(path => `Updated page: ${path}`).join(`\n`)}`);
    }
    if (toDelete.length) {
      _reporter.default.info(`Deleted pages:\n${toDelete.map(path => `Deleted page: ${path}`).join(`\n`)}`);
    }
  }
  if (program.writeToFile) {
    const createdFilesPath = _path.default.resolve(`${program.directory}/.cache`, `newPages.txt`);
    const createdFilesContent = toRegenerate.length ? `${toRegenerate.join(`\n`)}\n` : ``;
    const deletedFilesPath = _path.default.resolve(`${program.directory}/.cache`, `deletedPages.txt`);
    const deletedFilesContent = toDelete.length ? `${toDelete.join(`\n`)}\n` : ``;
    await _fsExtra.default.writeFile(createdFilesPath, createdFilesContent, `utf8`);
    _reporter.default.info(`.cache/newPages.txt created`);
    await _fsExtra.default.writeFile(deletedFilesPath, deletedFilesContent, `utf8`);
    _reporter.default.info(`.cache/deletedPages.txt created`);
  }
  if (adapterManager) {
    await adapterManager.storeCache();
    await adapterManager.adapt();
  }
  (0, _showExperimentNotice.showExperimentNotices)();
  if (await (0, _feedback.userGetsSevenDayFeedback)()) {
    (0, _feedback.showSevenDayFeedbackRequest)();
  } else if (await (0, _feedback.userPassesFeedbackRequestHeuristic)()) {
    (0, _feedback.showFeedbackRequest)();
  }
};
//# sourceMappingURL=build.js.map