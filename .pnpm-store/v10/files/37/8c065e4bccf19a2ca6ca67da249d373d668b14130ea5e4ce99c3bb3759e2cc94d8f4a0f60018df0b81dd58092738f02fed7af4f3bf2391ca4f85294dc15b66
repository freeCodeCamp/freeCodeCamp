"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.startServer = startServer;
var _webpackHotMiddleware = _interopRequireDefault(require("@gatsbyjs/webpack-hot-middleware"));
var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));
var _got = _interopRequireDefault(require("got"));
var _webpack = _interopRequireDefault(require("webpack"));
var _express = _interopRequireDefault(require("express"));
var _compression = _interopRequireDefault(require("compression"));
var _express2 = require("graphql-http/lib/use/express");
var _gatsbyGraphiqlExplorer = _interopRequireDefault(require("gatsby-graphiql-explorer"));
var _graphql = require("graphql");
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _http = _interopRequireDefault(require("http"));
var _https = _interopRequireDefault(require("https"));
var _cors = _interopRequireDefault(require("cors"));
var _launchEditor = _interopRequireDefault(require("react-dev-utils/launchEditor"));
var _codeFrame = require("@babel/code-frame");
var fs = _interopRequireWildcard(require("fs-extra"));
var _path = require("../utils/path");
var _webpack2 = _interopRequireDefault(require("../utils/webpack.config"));
var _redux = require("../redux");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var WorkerPool = _interopRequireWildcard(require("../utils/worker/pool"));
var _developStatic = require("../commands/develop-static");
var _context = _interopRequireDefault(require("../schema/context"));
var _websocketManager = require("../utils/websocket-manager");
var _pageData = require("./page-data");
var _getPageData = require("./get-page-data");
var _findPageByPath = require("./find-page-by-path");
var _apiRunnerNode = _interopRequireDefault(require("../utils/api-runner-node"));
var path = _interopRequireWildcard(require("path"));
var _types = require("../commands/types");
var _stackTraceUtils = require("./stack-trace-utils");
var _developPreloadHeaders = require("./develop-preload-headers");
var _loadingIndicator = require("./loading-indicator");
var _renderDevHtml = require("./dev-ssr/render-dev-html");
var _getServerData = require("./get-server-data");
var _constants = require("../constants");
var _pageMode = require("./page-mode");
var _expressMiddlewares = require("./express-middlewares");
var _polyfillRemoteFile = require("gatsby-plugin-utils/polyfill-remote-file");
var _isFileInsideCompilations = require("./webpack/utils/is-file-inside-compilations");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
async function startServer(program, app, workerPool = WorkerPool.create()) {
  const directory = program.directory;
  const PAGE_RENDERER_PATH = path.join(program.directory, _constants.ROUTES_DIRECTORY, `render-page.js`);
  const webpackActivity = _reporter.default.activityTimer(`Building development bundle`, {
    id: `webpack-develop`
  });
  webpackActivity.start();

  // loading indicator
  // write virtual module always to not fail webpack compilation, but only add express route handlers when
  // query on demand is enabled and loading indicator is not disabled
  (0, _loadingIndicator.writeVirtualLoadingIndicatorModule)();

  // Remove the following when merging GATSBY_EXPERIMENTAL_DEV_SSR
  const directoryPath = (0, _path.withBasePath)(directory);
  const {
    buildRenderer,
    doBuildPages
  } = require(`../commands/build-html`);
  const createIndexHtml = async activity => {
    try {
      const {
        rendererPath,
        close
      } = await buildRenderer(program, _types.Stage.DevelopHTML, activity.span);
      await doBuildPages(rendererPath, [`/`], activity, workerPool, _types.Stage.DevelopHTML);
      // close the compiler
      await close();
    } catch (err) {
      if (err.name !== `WebpackError`) {
        _reporter.default.panic(err);
        return;
      }
      _reporter.default.panic(_reporter.default.stripIndent`
          There was an error compiling the html.js component for the development server.
          See our docs page on debugging HTML builds for help https://gatsby.dev/debug-html
        `, err);
    }
  };
  const indexHTMLActivity = _reporter.default.phantomActivity(`building index.html`, {});
  let pageRenderer;
  if (process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
    const {
      buildRenderer
    } = require(`../commands/build-html`);
    pageRenderer = (await buildRenderer(program, _types.Stage.DevelopHTML)).rendererPath;
    const {
      initDevWorkerPool
    } = require(`./dev-ssr/render-dev-html`);
    initDevWorkerPool();
  } else {
    indexHTMLActivity.start();
    await createIndexHtml(indexHTMLActivity);
    indexHTMLActivity.end();
  }
  const devConfig = await (0, _webpack2.default)(program, directory, _types.Stage.Develop, program.port, {
    parentSpan: webpackActivity.span
  });
  const compiler = (0, _webpack.default)(devConfig);

  /**
   * Set up the express app.
   **/
  app.use((0, _compression.default)());
  app.use((0, _webpackHotMiddleware.default)(compiler, {
    log: false,
    path: `/__webpack_hmr`,
    heartbeat: 10 * 1000
  }));
  app.use((0, _cors.default)());

  /**
   * Pattern matching all endpoints with graphql or graphiql with 1 or more leading underscores
   */
  const graphqlEndpoint = `/_+graphi?ql`;
  (0, _gatsbyGraphiqlExplorer.default)(app, {
    graphqlEndpoint,
    getFragments: function getFragments() {
      const fragments = [];
      for (const def of _redux.store.getState().definitions.values()) {
        if (def.def.kind === _graphql.Kind.FRAGMENT_DEFINITION) {
          fragments.push(def.def);
        }
      }
      return fragments;
    }
  });
  app.use(graphqlEndpoint, (0, _express2.createHandler)({
    schema() {
      return _redux.store.getState().schema;
    },
    context() {
      return (0, _context.default)({
        schema: _redux.store.getState().schema,
        schemaComposer: _redux.store.getState().schemaCustomization.composer,
        context: {},
        customContext: _redux.store.getState().schemaCustomization.context
      });
    },
    onOperation(_req, _args, result) {
      if (result.errors) {
        result.errors = result.errors.map(err => ({
          ...err.toJSON(),
          extensions: {
            stack: err.stack ? err.stack.split(`\n`) : []
          }
        }));
      }
      result.extensions = {
        enableRefresh: process.env.ENABLE_GATSBY_REFRESH_ENDPOINT,
        refreshToken: process.env.GATSBY_REFRESH_TOKEN
      };
      return result;
    }
  }));

  /**
   * Refresh external data sources.
   * This behavior is disabled by default, but the ENABLE_GATSBY_REFRESH_ENDPOINT env var enables it
   * If no GATSBY_REFRESH_TOKEN env var is available, then no Authorization header is required
   **/
  const REFRESH_ENDPOINT = `/__refresh`;
  const refresh = async (req, pluginName) => {
    global.__GATSBY.buildId = _gatsbyCoreUtils.uuid.v4();
    _redux.emitter.emit(`WEBHOOK_RECEIVED`, {
      webhookBody: req.body,
      pluginName
    });
  };
  app.post(`${REFRESH_ENDPOINT}/:plugin_name?`, _express.default.json(), (req, res) => {
    const pluginName = req.params[`plugin_name`];
    const enableRefresh = process.env.ENABLE_GATSBY_REFRESH_ENDPOINT;
    const refreshToken = process.env.GATSBY_REFRESH_TOKEN;
    const authorizedRefresh = !refreshToken || req.headers.authorization === refreshToken;
    if (enableRefresh && authorizedRefresh) {
      refresh(req, pluginName);
      res.status(200);
      res.setHeader(`content-type`, `application/json`);
    } else {
      res.status(authorizedRefresh ? 404 : 403);
      res.json({
        error: enableRefresh ? `Authorization failed. Make sure you add authorization header to your refresh requests` : `Refresh endpoint is not enabled. Run gatsby with "ENABLE_GATSBY_REFRESH_ENDPOINT=true" environment variable set.`,
        isEnabled: !!process.env.ENABLE_GATSBY_REFRESH_ENDPOINT
      });
    }
    res.end();
  });
  app.get(`/__open-stack-frame-in-editor`, (req, res) => {
    if (req.query.fileName) {
      const fileName = path.resolve(process.cwd(), req.query.fileName);
      const lineNumber = parseInt(req.query.lineNumber, 10);
      (0, _launchEditor.default)(fileName, isNaN(lineNumber) ? 1 : lineNumber);
    }
    res.end();
  });
  (0, _polyfillRemoteFile.addImageRoutes)(app, _redux.store);
  const webpackDevMiddlewareInstance = (0, _webpackDevMiddleware.default)(compiler, {
    publicPath: devConfig.output.publicPath,
    stats: `errors-only`,
    serverSideRender: true
  });
  app.use(webpackDevMiddlewareInstance);
  app.get(`/page-data/:pagePath(*)/page-data.json`, async (req, res, next) => {
    const requestedPagePath = req.params.pagePath;
    if (!requestedPagePath) {
      next();
      return;
    }
    const potentialPagePath = (0, _pageData.reverseFixedPagePath)(requestedPagePath);
    const page = (0, _findPageByPath.findPageByPath)(_redux.store.getState(), potentialPagePath, false);
    if (page) {
      try {
        let serverDataPromise = Promise.resolve({});
        const pageMode = (0, _pageMode.getPageMode)(page);
        if (pageMode === `SSR`) {
          const renderer = require(PAGE_RENDERER_PATH);
          const componentInstance = await renderer.getPageChunk(page);
          serverDataPromise = (0, _getServerData.getServerData)(req, page, potentialPagePath, componentInstance).catch(error => error);
        }
        let pageData;
        // TODO move to query-engine
        if (process.env.GATSBY_QUERY_ON_DEMAND) {
          pageData = await (0, _getPageData.getPageData)(page.path);
        } else {
          pageData = await (0, _pageData.readPageData)(path.join(_redux.store.getState().program.directory, `public`), page.path);
        }
        let statusCode = 200;
        if (pageMode === `SSR`) {
          try {
            const result = await serverDataPromise;
            if (result instanceof Error) {
              throw result;
            }
            if (result.headers) {
              for (const [name, value] of Object.entries(result.headers)) {
                res.setHeader(name, value);
              }
            }
            if (result.status) {
              statusCode = result.status;
            }
            pageData.result.serverData = result.props;
            pageData.getServerDataError = null;
          } catch (error) {
            const structuredError = _reporter.default.panicOnBuild({
              id: `95315`,
              context: {
                sourceMessage: error.message,
                pagePath: requestedPagePath,
                potentialPagePath
              },
              error
            });
            // Use page-data.json file instead of emitting via websockets as this makes it easier
            // to only display the relevant error + clearing of the error
            // The query-result-store reacts to this
            pageData.getServerDataError = structuredError;
          }
          pageData.path = page.matchPath ? `/${potentialPagePath}` : page.path;
        } else {
          // When user removes getServerData function, Gatsby browser runtime still has cached version of page-data.
          // Send `null` to always reset cached serverData:
          pageData.result.serverData = null;
        }
        res.status(statusCode).send(pageData);
        return;
      } catch (e) {
        _reporter.default.error(`Error loading a result for the page query in "${requestedPagePath}" / "${potentialPagePath}". Query was not run and no cached result was found.`, e);
      }
    }
    res.status(404).send({
      path: potentialPagePath
    });
  });
  app.get(`/__original-stack-frame`, (req, res) => {
    var _req$query, _sourceLine, _sourceColumn;
    const emptyResponse = {
      codeFrame: `No codeFrame could be generated`,
      sourcePosition: null,
      sourceContent: null
    };
    let sourceContent;
    let sourceLine;
    let sourceColumn;
    let sourceEndLine;
    let sourceEndColumn;
    let sourcePosition;
    if ((_req$query = req.query) !== null && _req$query !== void 0 && _req$query.skipSourceMap) {
      var _req$query2, _res$locals, _res$locals$webpack, _res$locals$webpack$d, _res$locals$webpack$d2, _req$query3;
      if (!((_req$query2 = req.query) !== null && _req$query2 !== void 0 && _req$query2.moduleId)) {
        res.json(emptyResponse);
        return;
      }
      const absolutePath = path.resolve(_redux.store.getState().program.directory, req.query.moduleId);
      const compilation = (_res$locals = res.locals) === null || _res$locals === void 0 ? void 0 : (_res$locals$webpack = _res$locals.webpack) === null || _res$locals$webpack === void 0 ? void 0 : (_res$locals$webpack$d = _res$locals$webpack.devMiddleware) === null || _res$locals$webpack$d === void 0 ? void 0 : (_res$locals$webpack$d2 = _res$locals$webpack$d.stats) === null || _res$locals$webpack$d2 === void 0 ? void 0 : _res$locals$webpack$d2.compilation;
      if (!compilation) {
        res.json(emptyResponse);
        return;
      }
      if (!(0, _isFileInsideCompilations.isFileInsideCompilations)(absolutePath, compilation)) {
        res.json(emptyResponse);
        return;
      }
      try {
        sourceContent = fs.readFileSync(absolutePath, `utf-8`);
      } catch (e) {
        res.json(emptyResponse);
        return;
      }
      if ((_req$query3 = req.query) !== null && _req$query3 !== void 0 && _req$query3.lineNumber) {
        try {
          var _req$query4, _req$query5, _req$query6;
          sourceLine = parseInt(req.query.lineNumber, 10);
          if ((_req$query4 = req.query) !== null && _req$query4 !== void 0 && _req$query4.endLineNumber) {
            sourceEndLine = parseInt(req.query.endLineNumber, 10);
          }
          if ((_req$query5 = req.query) !== null && _req$query5 !== void 0 && _req$query5.columnNumber) {
            sourceColumn = parseInt(req.query.columnNumber, 10);
          }
          if ((_req$query6 = req.query) !== null && _req$query6 !== void 0 && _req$query6.endColumnNumber) {
            sourceEndColumn = parseInt(req.query.endColumnNumber, 10);
          }
        } catch {
          // failed to get line/column, we should still try to show the code frame
        }
      }
      sourcePosition = {
        line: sourceLine,
        column: sourceColumn
      };
    } else {
      var _res$locals2, _res$locals2$webpack, _res$locals2$webpack$, _res$locals2$webpack$2, _req$query7, _ref, _req$query8, _ref2, _req$query9, _compilation$codeGene, _compilation$codeGene2, _sourcePosition, _sourcePosition2;
      const compilation = (_res$locals2 = res.locals) === null || _res$locals2 === void 0 ? void 0 : (_res$locals2$webpack = _res$locals2.webpack) === null || _res$locals2$webpack === void 0 ? void 0 : (_res$locals2$webpack$ = _res$locals2$webpack.devMiddleware) === null || _res$locals2$webpack$ === void 0 ? void 0 : (_res$locals2$webpack$2 = _res$locals2$webpack$.stats) === null || _res$locals2$webpack$2 === void 0 ? void 0 : _res$locals2$webpack$2.compilation;
      if (!compilation) {
        res.json(emptyResponse);
        return;
      }
      const moduleId = (_req$query7 = req.query) === null || _req$query7 === void 0 ? void 0 : _req$query7.moduleId;
      const lineNumber = parseInt((_ref = (_req$query8 = req.query) === null || _req$query8 === void 0 ? void 0 : _req$query8.lineNumber) !== null && _ref !== void 0 ? _ref : 1, 10);
      const columnNumber = parseInt((_ref2 = (_req$query9 = req.query) === null || _req$query9 === void 0 ? void 0 : _req$query9.columnNumber) !== null && _ref2 !== void 0 ? _ref2 : 1, 10);
      let fileModule;
      for (const module of compilation.modules) {
        const moduleIdentifier = compilation.chunkGraph.getModuleId(module);
        if (moduleIdentifier === moduleId) {
          fileModule = module;
          break;
        }
      }
      if (!fileModule) {
        res.json(emptyResponse);
        return;
      }

      // We need the internal webpack file that is used in the bundle, not the module source.
      // It doesn't have the correct sourceMap.
      const webpackSource = compilation === null || compilation === void 0 ? void 0 : (_compilation$codeGene = compilation.codeGenerationResults) === null || _compilation$codeGene === void 0 ? void 0 : (_compilation$codeGene2 = _compilation$codeGene.get(fileModule)) === null || _compilation$codeGene2 === void 0 ? void 0 : _compilation$codeGene2.sources.get(`javascript`);
      const sourceMap = webpackSource === null || webpackSource === void 0 ? void 0 : webpackSource.map();
      if (!sourceMap) {
        res.json(emptyResponse);
        return;
      }
      const position = {
        line: lineNumber,
        column: columnNumber
      };
      const result = (0, _stackTraceUtils.findOriginalSourcePositionAndContent)(sourceMap, position);
      sourcePosition = result === null || result === void 0 ? void 0 : result.sourcePosition;
      sourceLine = (_sourcePosition = sourcePosition) === null || _sourcePosition === void 0 ? void 0 : _sourcePosition.line;
      sourceColumn = (_sourcePosition2 = sourcePosition) === null || _sourcePosition2 === void 0 ? void 0 : _sourcePosition2.column;
      sourceContent = result === null || result === void 0 ? void 0 : result.sourceContent;
      if (!sourceContent || !sourceLine) {
        res.json(emptyResponse);
        return;
      }
    }
    const codeFrame = (0, _codeFrame.codeFrameColumns)(sourceContent, {
      start: {
        line: (_sourceLine = sourceLine) !== null && _sourceLine !== void 0 ? _sourceLine : 0,
        column: (_sourceColumn = sourceColumn) !== null && _sourceColumn !== void 0 ? _sourceColumn : 0
      },
      end: sourceEndLine ? {
        line: sourceEndLine,
        column: sourceEndColumn
      } : undefined
    }, {
      highlightCode: true
    });
    res.json({
      codeFrame,
      sourcePosition,
      sourceContent
    });
  });
  app.get(`/__file-code-frame`, async (req, res) => {
    var _req$query10, _req$query11, _req$query12, _res$locals3, _res$locals3$webpack, _res$locals3$webpack$, _res$locals3$webpack$2;
    const emptyResponse = {
      codeFrame: `No codeFrame could be generated`,
      sourcePosition: null,
      sourceContent: null
    };
    const filePath = (_req$query10 = req.query) === null || _req$query10 === void 0 ? void 0 : _req$query10.filePath;
    const lineNumber = parseInt((_req$query11 = req.query) === null || _req$query11 === void 0 ? void 0 : _req$query11.lineNumber, 10);
    const columnNumber = parseInt((_req$query12 = req.query) === null || _req$query12 === void 0 ? void 0 : _req$query12.columnNumber, 10);
    if (!filePath) {
      res.json(emptyResponse);
      return;
    }
    const absolutePath = path.resolve(_redux.store.getState().program.directory, filePath);
    const compilation = (_res$locals3 = res.locals) === null || _res$locals3 === void 0 ? void 0 : (_res$locals3$webpack = _res$locals3.webpack) === null || _res$locals3$webpack === void 0 ? void 0 : (_res$locals3$webpack$ = _res$locals3$webpack.devMiddleware) === null || _res$locals3$webpack$ === void 0 ? void 0 : (_res$locals3$webpack$2 = _res$locals3$webpack$.stats) === null || _res$locals3$webpack$2 === void 0 ? void 0 : _res$locals3$webpack$2.compilation;
    if (!compilation) {
      res.json(emptyResponse);
      return;
    }
    if (!(0, _isFileInsideCompilations.isFileInsideCompilations)(absolutePath, compilation)) {
      res.json(emptyResponse);
      return;
    }
    const sourceContent = await fs.readFile(absolutePath, `utf-8`);
    const codeFrame = (0, _codeFrame.codeFrameColumns)(sourceContent, {
      start: {
        line: lineNumber,
        column: columnNumber !== null && columnNumber !== void 0 ? columnNumber : 0
      }
    }, {
      highlightCode: true
    });
    res.json({
      codeFrame
    });
  });

  // Expose access to app for advanced use cases
  const {
    developMiddleware
  } = _redux.store.getState().config;
  if (developMiddleware) {
    developMiddleware(app);
  }
  const {
    proxy,
    trailingSlash
  } = _redux.store.getState().config;
  app.use((0, _expressMiddlewares.configureTrailingSlash)(() => _redux.store.getState(), trailingSlash));

  // Disable directory indexing i.e. serving index.html from a directory.
  // This can lead to serving stale html files during development.
  //
  // We serve by default an empty index.html that sets up the dev environment.
  app.use((0, _developStatic.developStatic)(`public`, {
    index: false
  }));

  // Set up API proxy.
  if (proxy) {
    proxy.forEach(({
      prefix,
      url
    }) => {
      app.use(`${prefix}/*`, (req, res) => {
        const proxiedUrl = url + req.originalUrl;
        const {
          // remove `host` from copied headers
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          headers: {
            host,
            ...headers
          },
          method
        } = req;
        req.pipe(_got.default.stream(proxiedUrl, {
          headers,
          method: method,
          decompress: false
        }).on(`response`, response => res.writeHead(response.statusCode || 200, response.headers)).on(`error`, (err, _, response) => {
          if (response) {
            res.writeHead(response.statusCode || 400, response.headers);
          } else {
            const message = `Error when trying to proxy request "${req.originalUrl}" to "${proxiedUrl}"`;
            _reporter.default.error(message, err);
            res.sendStatus(500);
          }
        })).pipe(res);
      });
    }, (0, _cors.default)());
  }
  await (0, _apiRunnerNode.default)(`onCreateDevServer`, {
    app,
    deferNodeMutation: true
  });

  // In case nothing before handled hot-update - send 404.
  // This fixes "Unexpected token < in JSON at position 0" runtime
  // errors after restarting development server and
  // cause automatic hard refresh in the browser.
  app.use(/.*\.hot-update\.json$/i, (_, res) => {
    res.status(404).end();
  });

  // Render an HTML page and serve it.
  if (process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
    app.get(`*`, async (req, res, next) => {
      const pathObj = (0, _findPageByPath.findPageByPath)(_redux.store.getState(), decodeURI(req.path));
      if (!pathObj) {
        return next();
      }
      const allowTimedFallback = !req.headers[`x-gatsby-wait-for-dev-ssr`];
      await (0, _developPreloadHeaders.appendPreloadHeaders)(pathObj.path, res);
      const htmlActivity = _reporter.default.phantomActivity(`building HTML for path`, {});
      htmlActivity.start();
      try {
        const {
          html: renderResponse,
          serverData
        } = await (0, _renderDevHtml.renderDevHTML)({
          path: pathObj.path,
          page: pathObj,
          skipSsr: Object.prototype.hasOwnProperty.call(req.query, `skip-ssr`),
          store: _redux.store,
          allowTimedFallback,
          htmlComponentRendererPath: PAGE_RENDERER_PATH,
          directory: program.directory,
          req
        });
        if (serverData !== null && serverData !== void 0 && serverData.headers) {
          for (const [name, value] of Object.entries(serverData.headers)) {
            res.setHeader(name, value);
          }
        }
        let statusCode = 200;
        if (serverData !== null && serverData !== void 0 && serverData.status) {
          statusCode = serverData.status;
        }
        res.status(statusCode).send(renderResponse);
      } catch (error) {
        // The page errored but couldn't read the page component.
        // This is a race condition when a page is deleted but its requested
        // immediately after before anything can recompile.
        if (error === `404 page`) {
          return next();
        }

        // renderDevHTML throws an error with these information
        const lineNumber = error === null || error === void 0 ? void 0 : error.line;
        const columnNumber = error === null || error === void 0 ? void 0 : error.column;
        const filePath = error === null || error === void 0 ? void 0 : error.filename;
        const sourceContent = error === null || error === void 0 ? void 0 : error.sourceContent;
        _reporter.default.error({
          id: `11614`,
          context: {
            path: pathObj.path,
            filePath: filePath,
            line: lineNumber,
            column: columnNumber
          }
        });
        const emptyResponse = {
          codeFrame: `No codeFrame could be generated`,
          sourcePosition: null,
          sourceContent: null
        };
        if (!sourceContent || !lineNumber) {
          res.json(emptyResponse);
          return null;
        }
        const codeFrame = (0, _codeFrame.codeFrameColumns)(sourceContent, {
          start: {
            line: lineNumber,
            column: columnNumber !== null && columnNumber !== void 0 ? columnNumber : 0
          }
        }, {
          highlightCode: true
        });
        const message = {
          codeFrame,
          source: filePath,
          line: lineNumber,
          column: columnNumber !== null && columnNumber !== void 0 ? columnNumber : 0,
          sourceMessage: error === null || error === void 0 ? void 0 : error.message,
          stack: error === null || error === void 0 ? void 0 : error.stack
        };
        try {
          // Generate a shell for client-only content -- for the error overlay
          const {
            html: clientOnlyShell
          } = await (0, _renderDevHtml.renderDevHTML)({
            path: pathObj.path,
            page: pathObj,
            skipSsr: true,
            store: _redux.store,
            error: message,
            htmlComponentRendererPath: PAGE_RENDERER_PATH,
            directory: program.directory,
            req,
            allowTimedFallback
          });
          res.send(clientOnlyShell);
        } catch (e) {
          _reporter.default.error({
            id: `11616`,
            context: {
              sourceMessage: e.message
            },
            filePath: e.filename,
            location: {
              start: {
                line: e.line,
                column: e.column
              }
            }
          });
          const minimalHTML = `<head><title>Failed to Server Render (SSR)</title></head><body><h1>Failed to Server Render (SSR)</h1><h2>Error message:</h2><p>${e.message}</p><h2>File:</h2><p>${e.filename}:${e.line}:${e.column}</p><h2>Stack:</h2><pre><code>${e.stack}</code></pre></body>`;
          res.send(minimalHTML).status(500);
        }
      }
      htmlActivity.end();
      return null;
    });
  }
  if (process.env.GATSBY_QUERY_ON_DEMAND && process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR === `true`) {
    (0, _loadingIndicator.routeLoadingIndicatorRequests)(app);
  }
  app.use(async (req, res) => {
    // in this catch-all block we don't support POST so we should 404
    if (req.method === `POST`) {
      res.status(404).end();
      return;
    }
    const fullUrl = req.protocol + `://` + req.get(`host`) + req.originalUrl;
    // This isn't used in development.
    if (fullUrl.endsWith(`app-data.json`)) {
      res.json({
        webpackCompilationHash: `123`
      });
      // If this gets here, it's a non-existent file so just send back 404.
    } else if (fullUrl.endsWith(`.json`)) {
      res.json({}).status(404);
    } else {
      await (0, _developPreloadHeaders.appendPreloadHeaders)(req.path, res);
      if (process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
        try {
          const allowTimedFallback = !req.headers[`x-gatsby-wait-for-dev-ssr`];
          const {
            html: renderResponse
          } = await (0, _renderDevHtml.renderDevHTML)({
            path: `/dev-404-page/`,
            // Let renderDevHTML figure it out.
            page: undefined,
            store: _redux.store,
            htmlComponentRendererPath: pageRenderer,
            directory: program.directory,
            req,
            allowTimedFallback
          });
          res.status(404).send(renderResponse);
        } catch (e) {
          _reporter.default.error({
            id: `11615`,
            context: {
              sourceMessage: e.message
            },
            filePath: e.filename,
            location: {
              start: {
                line: e.line,
                column: e.column
              }
            }
          });
          res.send(e).status(500);
        }
      } else {
        const potentialPagePath = (0, _pageData.reverseFixedPagePath)(decodeURI(req.path));
        const page = (0, _findPageByPath.findPageByPath)(_redux.store.getState(), potentialPagePath, false);

        // When we can't find a page we send 404
        if (!page) {
          res.status(404);
        }
        res.sendFile(directoryPath(`.cache/develop-html/index.html`), err => {
          if (err) {
            res.status(500).end();
          }
        });
      }
    }
  });

  /**
   * Set up the HTTP server and socket.io.
   **/
  const server = program.ssl ? new _https.default.Server(program.ssl, app) : new _http.default.Server(app);
  const socket = _websocketManager.websocketManager.init({
    server
  });
  const listener = server.listen(program.port, program.host);
  if (!process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
    const chokidar = require(`chokidar`);
    // Register watcher that rebuilds index.html every time html.js changes.
    const watchGlobs = [`src/html.js`, `plugins/**/gatsby-ssr.js`].map(path => (0, _gatsbyCoreUtils.slash)(directoryPath(path)));
    chokidar.watch(watchGlobs).on(`change`, async () => {
      await createIndexHtml(indexHTMLActivity);
      // eslint-disable-next-line no-unused-expressions
      socket === null || socket === void 0 ? void 0 : socket.to(`clients`).emit(`reload`);
    });
  }
  return {
    compiler,
    listener,
    webpackActivity,
    websocketManager: _websocketManager.websocketManager,
    workerPool,
    webpackWatching: webpackDevMiddlewareInstance.context.watching
  };
}
//# sourceMappingURL=start-server.js.map