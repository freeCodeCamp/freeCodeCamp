"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _path = _interopRequireDefault(require("path"));
var _betterOpn = _interopRequireDefault(require("better-opn"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _compression = _interopRequireDefault(require("compression"));
var _express = _interopRequireDefault(require("express"));
var _chalk = _interopRequireDefault(require("chalk"));
var _reachRouter = require("@gatsbyjs/reach-router");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _detectPortInUseAndPrompt = require("../utils/detect-port-in-use-and-prompt");
var _getConfigFile = require("../bootstrap/get-config-file");
var _preferDefault = require("../bootstrap/prefer-default");
var _prepareUrls = require("../utils/prepare-urls");
var _pageData = require("../utils/page-data");
var _tracer = require("../utils/tracer");
var _expressMiddlewares = require("../utils/express-middlewares");
var _datastore = require("../datastore");
var _middleware = require("../internal-plugins/functions/middleware");
var _proxy = require("../internal-plugins/partytown/proxy");
var _path2 = require("gatsby-core-utils/path");
const readMatchPaths = async program => {
  const filePath = _path.default.join(program.directory, `.cache`, `match-paths.json`);
  let rawJSON = `[]`;
  try {
    rawJSON = await _fsExtra.default.readFile(filePath, `utf8`);
  } catch (error) {
    _reporter.default.warn(error);
    _reporter.default.warn(`Could not read ${_chalk.default.bold(`match-paths.json`)} from the .cache directory`);
    _reporter.default.warn(`Client-side routing will not work correctly. Maybe you need to re-run ${_chalk.default.bold(`gatsby build`)}?`);
  }
  return JSON.parse(rawJSON);
};
const matchPathRouter = (matchPaths, options) => (req, res, next) => {
  const {
    url
  } = req;
  if (req.accepts(`html`)) {
    const matchPath = matchPaths.find(({
      matchPath
    }) => (0, _reachRouter.match)(matchPath, url) !== null);
    if (matchPath) {
      return res.sendFile(_path.default.join(matchPath.path, `index.html`), options, err => {
        if (err) {
          next();
        }
      });
    }
  }
  return next();
};
module.exports = async program => {
  await (0, _tracer.initTracer)(process.env.GATSBY_OPEN_TRACING_CONFIG_FILE || program.openTracingConfigFile);
  let {
    prefixPaths,
    port,
    open,
    host
  } = program;
  port = typeof port === `string` ? parseInt(port, 10) : port;
  const {
    configModule
  } = await (0, _getConfigFile.getConfigFile)(program.directory, `gatsby-config`);
  const config = (0, _preferDefault.preferDefault)(configModule);
  const {
    pathPrefix: configPathPrefix,
    trailingSlash
  } = config || {};
  const pathPrefix = prefixPaths && configPathPrefix ? configPathPrefix : `/`;
  const root = _path.default.join(program.directory, `public`);
  const app = (0, _express.default)();

  // Proxy gatsby-script using off-main-thread strategy
  const {
    partytownProxiedURLs = []
  } = config || {};
  app.use(_proxy.thirdPartyProxyPath, (0, _proxy.partytownProxy)(partytownProxiedURLs));

  // eslint-disable-next-line new-cap
  const router = _express.default.Router();
  router.use((0, _compression.default)());
  router.use((0, _expressMiddlewares.configureTrailingSlash)(() => ({
    pages: {
      get(pathName) {
        return (0, _datastore.getDataStore)().getNode(`SitePage ${pathName}`);
      },
      values() {
        return (0, _datastore.getDataStore)().iterateNodesByType(`SitePage`);
      }
    }
  }), trailingSlash));
  router.use(_express.default.static(`public`, {
    dotfiles: `allow`
  }));
  const compiledFunctionsDir = _path.default.join(program.directory, `.cache`, `functions`);
  let functions = [];
  try {
    functions = JSON.parse(_fsExtra.default.readFileSync(_path.default.join(compiledFunctionsDir, `manifest.json`), `utf-8`));
  } catch (e) {
    // ignore
  }
  if (functions) {
    const functionMiddlewaresInstances = (0, _middleware.functionMiddlewares)({
      getFunctions() {
        return functions;
      }
    });
    router.use(`/api/*`, ...functionMiddlewaresInstances);
    // TODO(v6) remove handler from app and only keep it on router (router is setup on pathPrefix, while app is always root)
    app.use(`/api/*`, ...functionMiddlewaresInstances);
  }

  // Handle SSR & DSG Pages
  let graphqlEnginePath;
  let pageSSRModule;
  try {
    graphqlEnginePath = require.resolve(_path.default.posix.join((0, _path2.slash)(program.directory), `.cache`, `query-engine`));
    pageSSRModule = require.resolve(_path.default.posix.join((0, _path2.slash)(program.directory), `.cache`, `page-ssr`));
  } catch (error) {
    // TODO: Handle case of engine not being generated
  }
  if (graphqlEnginePath && pageSSRModule) {
    try {
      const {
        GraphQLEngine
      } = require(graphqlEnginePath);
      const {
        getData,
        renderPageData,
        renderHTML,
        findEnginePageByPath
      } = require(pageSSRModule);
      const graphqlEngine = new GraphQLEngine({
        dbPath: _path.default.posix.join((0, _path2.slash)(program.directory), `.cache`, `data`, `datastore`)
      });
      router.get(`/page-data/:pagePath(*)/page-data.json`, async (req, res, next) => {
        const requestedPagePath = req.params.pagePath;
        if (!requestedPagePath) {
          return void next();
        }
        const potentialPagePath = (0, _pageData.reverseFixedPagePath)(requestedPagePath);
        const page = findEnginePageByPath(potentialPagePath);
        if (page && (page.mode === `DSG` || page.mode === `SSR`)) {
          const requestActivity = _reporter.default.phantomActivity(`request for "${req.path}"`);
          requestActivity.start();
          try {
            const spanContext = requestActivity.span.context();
            const data = await getData({
              pathName: req.path,
              graphqlEngine,
              req,
              spanContext
            });
            const results = await renderPageData({
              data,
              spanContext
            });
            if (data.serverDataHeaders) {
              for (const [name, value] of Object.entries(data.serverDataHeaders)) {
                res.setHeader(name, value);
              }
            }
            if (page.mode === `SSR` && data.serverDataStatus) {
              return void res.status(data.serverDataStatus).send(results);
            } else {
              return void res.send(results);
            }
          } catch (e) {
            _reporter.default.error(`Generating page-data for "${requestedPagePath}" / "${potentialPagePath}" failed.`, e);
            return res.status(500).contentType(`text/plain`).send(`Internal server error.`);
          } finally {
            requestActivity.end();
          }
        }
        return void next();
      });
      router.use(async (req, res, next) => {
        if (req.accepts(`html`)) {
          const potentialPagePath = req.path;
          const page = findEnginePageByPath(potentialPagePath);
          if (page && (page.mode === `DSG` || page.mode === `SSR`)) {
            const requestActivity = _reporter.default.phantomActivity(`request for "${req.path}"`);
            requestActivity.start();
            try {
              const spanContext = requestActivity.span.context();
              const data = await getData({
                pathName: potentialPagePath,
                graphqlEngine,
                req,
                spanContext
              });
              const results = await renderHTML({
                data,
                spanContext
              });
              if (data.serverDataHeaders) {
                for (const [name, value] of Object.entries(data.serverDataHeaders)) {
                  res.setHeader(name, value);
                }
              }
              if (page.mode === `SSR` && data.serverDataStatus) {
                return void res.status(data.serverDataStatus).send(results);
              } else {
                return void res.send(results);
              }
            } catch (e) {
              _reporter.default.error(`Rendering html for "${potentialPagePath}" failed.`, e);
              return res.status(500).sendFile(`500.html`, {
                root
              }, err => {
                if (err) {
                  res.contentType(`text/plain`).send(`Internal server error.`);
                }
              });
            } finally {
              requestActivity.end();
            }
          }
        }
        return next();
      });
    } catch (error) {
      _reporter.default.panic({
        id: `98051`,
        error,
        context: {}
      });
    }
  }
  const matchPaths = await readMatchPaths(program);
  router.use(matchPathRouter(matchPaths, {
    root
  }));

  // TODO: Remove/merge with above same block
  router.use((req, res, next) => {
    if (req.accepts(`html`)) {
      return res.status(404).sendFile(`404.html`, {
        root
      });
    }
    return next();
  });
  app.use(function (_, res, next) {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
    next();
  });
  app.use(pathPrefix, router);
  function printInstructions(appName, urls) {
    console.log();
    console.log(`You can now view ${_chalk.default.bold(appName)} in the browser.`);
    console.log();
    if (urls.lanUrlForTerminal) {
      console.log(`  ${_chalk.default.bold(`Local:`)}            ${urls.localUrlForTerminal}`);
      console.log(`  ${_chalk.default.bold(`On Your Network:`)}  ${urls.lanUrlForTerminal}`);
    } else {
      console.log(`  ${urls.localUrlForTerminal}`);
    }
  }
  const startListening = () => {
    app.listen(port, host, () => {
      const urls = (0, _prepareUrls.prepareUrls)(program.ssl ? `https` : `http`, program.host, port);
      printInstructions(program.sitePackageJson.name || `(Unnamed package)`, urls);
      if (open) {
        _reporter.default.info(`Opening browser...`);
        Promise.resolve((0, _betterOpn.default)(urls.localUrlForBrowser)).catch(() => _reporter.default.warn(`Browser not opened because no browser was found`));
      }
    });
  };
  try {
    port = await (0, _detectPortInUseAndPrompt.detectPortInUseAndPrompt)(port, program.host);
    startListening();
  } catch (e) {
    if (e.message === `USER_REJECTED`) {
      return;
    }
    throw e;
  }
};
//# sourceMappingURL=serve.js.map