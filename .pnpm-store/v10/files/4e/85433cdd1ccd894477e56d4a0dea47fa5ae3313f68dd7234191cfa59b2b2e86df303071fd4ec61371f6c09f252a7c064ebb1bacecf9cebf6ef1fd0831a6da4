"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getFunctionsManifest = getFunctionsManifest;
exports.getRoutesManifest = getRoutesManifest;
exports.initAdapterManager = initAdapterManager;
exports.setWebpackAssets = setWebpackAssets;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyPageUtils = require("gatsby-page-utils");
var _pageHtml = require("gatsby-core-utils/page-html");
var _path = require("gatsby-core-utils/path");
var _pageData = require("gatsby-core-utils/page-data");
var _path2 = require("path");
var _glob = require("glob");
var _fsExtra = require("fs-extra");
var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));
var _redux = require("../../redux");
var _pageMode = require("../page-mode");
var _staticQueryUtils = require("../static-query-utils");
var _init = require("./init");
var _enginesHelpers = require("../engines-helpers");
var _constants = require("./constants");
var _createHeaders = require("./create-headers");
var _types = require("../../redux/types");
var _rankRoute = require("../rank-route");
var _getRoutePath = require("./get-route-path");
var _noOpManager = require("./no-op-manager");
var _lmdbDatastore = require("../../datastore/lmdb/lmdb-datastore");
async function setAdapter({
  instance,
  manager
}) {
  const configFromAdapter = await manager.config();
  _redux.store.dispatch({
    type: `SET_ADAPTER`,
    payload: {
      manager,
      instance,
      config: configFromAdapter
    }
  });
  if (instance) {
    var _configFromAdapter$su, _configFromAdapter$su2;
    // if adapter reports that it doesn't support certain features, we need to fail the build
    // to avoid broken deploys

    const incompatibleFeatures = [];

    // pathPrefix support
    if ((configFromAdapter === null || configFromAdapter === void 0 ? void 0 : (_configFromAdapter$su = configFromAdapter.supports) === null || _configFromAdapter$su === void 0 ? void 0 : _configFromAdapter$su.pathPrefix) === false && _redux.store.getState().program.prefixPaths && _redux.store.getState().config.pathPrefix) {
      incompatibleFeatures.push(`pathPrefix is not supported.`);
    }

    // trailingSlash support
    if (configFromAdapter !== null && configFromAdapter !== void 0 && (_configFromAdapter$su2 = configFromAdapter.supports) !== null && _configFromAdapter$su2 !== void 0 && _configFromAdapter$su2.trailingSlash) {
      const {
        trailingSlash
      } = _redux.store.getState().config;
      if (!configFromAdapter.supports.trailingSlash.includes(trailingSlash !== null && trailingSlash !== void 0 ? trailingSlash : `always`)) {
        incompatibleFeatures.push(`trailingSlash option "${trailingSlash}". Supported option${configFromAdapter.supports.trailingSlash.length > 1 ? `s` : ``}: ${configFromAdapter.supports.trailingSlash.map(option => `"${option}"`).join(`, `)}`);
      }
    }
    if (incompatibleFeatures.length > 0) {
      _reporter.default.warn(`Adapter "${instance.name}" is not compatible with following settings:\n${incompatibleFeatures.map(line => ` - ${line}`).join(`\n`)}`);
    }
    if (configFromAdapter.pluginsToDisable.length > 0) {
      _redux.store.dispatch({
        type: `DISABLE_PLUGINS_BY_NAME`,
        payload: {
          pluginsToDisable: configFromAdapter.pluginsToDisable,
          reason: `Not compatible with the "${instance.name}" adapter. Please remove it from your gatsby-config.`
        }
      });
    }
  }
}
async function initAdapterManager() {
  let adapter;
  const config = _redux.store.getState().config;
  const {
    adapter: adapterFromGatsbyConfig,
    trailingSlash,
    pathPrefix
  } = config;

  // If the user specified an adapter inside their gatsby-config, use that instead of trying to figure out an adapter for the current environment
  if (adapterFromGatsbyConfig) {
    adapter = adapterFromGatsbyConfig;
    _reporter.default.verbose(`Using adapter ${adapter.name} from gatsby-config`);
  } else {
    const adapterInit = await (0, _init.getAdapterInit)();

    // If we don't have adapter, use no-op adapter manager
    if (!adapterInit) {
      const manager = (0, _noOpManager.noOpAdapterManager)();
      await setAdapter({
        manager
      });
      return manager;
    }
    adapter = adapterInit();
  }
  _reporter.default.info(`Using ${adapter.name} adapter`);
  const directoriesToCache = [`.cache`, `public`];
  const manager = {
    restoreCache: async () => {
      if (!adapter.cache) {
        return;
      }
      const result = await adapter.cache.restore({
        directories: directoriesToCache,
        reporter: _reporter.default
      });
      if (result === false) {
        // if adapter reports `false`, we can skip trying to re-hydrate state
        return;
      }
      const cachedState = (0, _redux.readState)();

      // readState() returns empty object if there is no cached state or it's corrupted etc
      // so we want to avoid dispatching RESTORE_CACHE action in that case
      if (Object.keys(cachedState).length > 0) {
        _redux.store.dispatch({
          type: `RESTORE_CACHE`,
          payload: cachedState
        });
      }
    },
    storeCache: async () => {
      if (!adapter.cache) {
        return;
      }
      await adapter.cache.store({
        directories: directoriesToCache,
        reporter: _reporter.default
      });
    },
    adapt: async () => {
      if (!adapter.adapt) {
        return;
      }

      // handle lmdb file
      const mdbInPublicPath = `public/${(0, _enginesHelpers.getLmdbOnCdnPath)()}`;
      if (!(0, _enginesHelpers.shouldBundleDatastore)()) {
        const mdbPath = (0, _lmdbDatastore.getDefaultDbPath)() + `/data.mdb`;
        (0, _fsExtra.copy)(mdbPath, mdbInPublicPath);
      } else {
        // ensure public dir doesn't have lmdb file
        if (await (0, _fsExtra.pathExists)(mdbInPublicPath)) {
          await (0, _fsExtra.unlink)(mdbInPublicPath);
        }
      }
      let _routesManifest = undefined;
      let _functionsManifest = undefined;
      let _headerRoutes = undefined;
      let _imageCdnAllowedUrls = undefined;
      const adaptContext = {
        get routesManifest() {
          if (!_routesManifest) {
            const {
              routes,
              headers
            } = getRoutesManifest();
            _routesManifest = routes;
            _headerRoutes = headers;
          }
          return _routesManifest;
        },
        get functionsManifest() {
          if (!_functionsManifest) {
            _functionsManifest = getFunctionsManifest();
          }
          return _functionsManifest;
        },
        get headerRoutes() {
          if (!_headerRoutes) {
            const {
              routes,
              headers
            } = getRoutesManifest();
            _routesManifest = routes;
            _headerRoutes = headers;
          }
          return _headerRoutes;
        },
        get remoteFileAllowedUrls() {
          if (!_imageCdnAllowedUrls) {
            _imageCdnAllowedUrls = Array.from(_redux.store.getState().remoteFileAllowedUrls).map(urlPattern => {
              return {
                urlPattern,
                regexSource: (0, _pathToRegexp.default)(urlPattern).source
              };
            });
          }
          return _imageCdnAllowedUrls;
        },
        reporter: _reporter.default,
        // Our internal Gatsby config allows this to be undefined but for the adapter we should always pass through the default values and correctly show this in the TypeScript types
        trailingSlash: trailingSlash,
        pathPrefix: pathPrefix
      };
      await adapter.adapt(adaptContext);
    },
    config: async () => {
      var _configFromAdapter$ex, _configFromAdapter5, _configFromAdapter6, _configFromAdapter7, _configFromAdapter$pl, _configFromAdapter8, _configFromAdapter9, _configFromAdapter10;
      let configFromAdapter = undefined;
      if (adapter.config) {
        var _configFromAdapter, _configFromAdapter2, _configFromAdapter3, _configFromAdapter4;
        configFromAdapter = await adapter.config({
          reporter: _reporter.default
        });
        if ((_configFromAdapter = configFromAdapter) !== null && _configFromAdapter !== void 0 && _configFromAdapter.excludeDatastoreFromEngineFunction && !((_configFromAdapter2 = configFromAdapter) !== null && _configFromAdapter2 !== void 0 && _configFromAdapter2.deployURL)) {
          throw new Error(`Can't exclude datastore from engine function without adapter providing deployURL`);
        }
        if ((_configFromAdapter3 = configFromAdapter) !== null && _configFromAdapter3 !== void 0 && _configFromAdapter3.imageCDNUrlGeneratorModulePath) {
          global.__GATSBY.imageCDNUrlGeneratorModulePath = configFromAdapter.imageCDNUrlGeneratorModulePath;
        }
        if ((_configFromAdapter4 = configFromAdapter) !== null && _configFromAdapter4 !== void 0 && _configFromAdapter4.fileCDNUrlGeneratorModulePath) {
          global.__GATSBY.fileCDNUrlGeneratorModulePath = configFromAdapter.fileCDNUrlGeneratorModulePath;
        }
      }
      return {
        excludeDatastoreFromEngineFunction: (_configFromAdapter$ex = (_configFromAdapter5 = configFromAdapter) === null || _configFromAdapter5 === void 0 ? void 0 : _configFromAdapter5.excludeDatastoreFromEngineFunction) !== null && _configFromAdapter$ex !== void 0 ? _configFromAdapter$ex : false,
        deployURL: (_configFromAdapter6 = configFromAdapter) === null || _configFromAdapter6 === void 0 ? void 0 : _configFromAdapter6.deployURL,
        supports: (_configFromAdapter7 = configFromAdapter) === null || _configFromAdapter7 === void 0 ? void 0 : _configFromAdapter7.supports,
        pluginsToDisable: (_configFromAdapter$pl = (_configFromAdapter8 = configFromAdapter) === null || _configFromAdapter8 === void 0 ? void 0 : _configFromAdapter8.pluginsToDisable) !== null && _configFromAdapter$pl !== void 0 ? _configFromAdapter$pl : [],
        functionsArch: (_configFromAdapter9 = configFromAdapter) === null || _configFromAdapter9 === void 0 ? void 0 : _configFromAdapter9.functionsArch,
        functionsPlatform: (_configFromAdapter10 = configFromAdapter) === null || _configFromAdapter10 === void 0 ? void 0 : _configFromAdapter10.functionsPlatform
      };
    }
  };
  await setAdapter({
    manager,
    instance: adapter
  });
  return manager;
}
let webpackAssets;
function setWebpackAssets(assets) {
  webpackAssets = assets;
}
const headersAreEqual = (a, b) => a.key === b.key && a.value === b.value;
const getDefaultHeaderRoutes = pathPrefix => [{
  path: `${pathPrefix}/*`,
  headers: _constants.MUST_REVALIDATE_HEADERS
}, {
  path: `${pathPrefix}/static/*`,
  headers: _constants.PERMANENT_CACHE_CONTROL_HEADER
}];
const customHeaderFilter = (route, pathPrefix) => h => {
  for (const baseHeader of _constants.MUST_REVALIDATE_HEADERS) {
    if (headersAreEqual(baseHeader, h)) {
      return false;
    }
  }
  if (route.path.startsWith(`${pathPrefix}/static/`)) {
    for (const cachingHeader of _constants.PERMAMENT_CACHING_HEADERS) {
      if (headersAreEqual(cachingHeader, h)) {
        return false;
      }
    }
  }
  return true;
};
function getRoutesManifest() {
  var _state$config$pathPre;
  const routes = [];
  const state = _redux.store.getState();
  const pathPrefix = state.program.prefixPaths ? (_state$config$pathPre = state.config.pathPrefix) !== null && _state$config$pathPre !== void 0 ? _state$config$pathPre : `` : ``;
  const createHeaders = (0, _createHeaders.createHeadersMatcher)(state.config.headers, pathPrefix);
  const headerRoutes = [...getDefaultHeaderRoutes(pathPrefix)];
  const fileAssets = new Set((0, _glob.sync)(`**/**`, {
    cwd: _path2.posix.join(process.cwd(), `public`),
    nodir: true,
    dot: true
  }).map(filePath => (0, _path.slash)(filePath)));

  // TODO: This could be a "addSortedRoute" function that would add route to the list in sorted order. TBD if necessary performance-wise
  function addRoute(route) {
    if (!(route.path.startsWith(`https://`) || route.path.startsWith(`http://`))) {
      if (!route.path.startsWith(`/`)) {
        route.path = `/${route.path}`;
      }
      if (pathPrefix && !route.path.startsWith(pathPrefix)) {
        route.path = _path2.posix.join(pathPrefix, route.path);
      }
    }

    // Apply trailing slash behavior unless it's a redirect. Redirects should always be exact matches
    if (route.type !== `redirect`) {
      route.path = (0, _gatsbyPageUtils.applyTrailingSlashOption)(route.path, state.config.trailingSlash);
    }
    if (route.type !== `function`) {
      route.headers = createHeaders(route.path, route.headers);
      const customHeaders = route.headers.filter(customHeaderFilter(route, pathPrefix));
      if (customHeaders.length > 0) {
        headerRoutes.push({
          path: route.path,
          headers: customHeaders
        });
      }
    }
    const routeWithScore = {
      ...route,
      score: (0, _rankRoute.rankRoute)(route.path)
    };
    routes.push(routeWithScore);
  }
  function addStaticRoute({
    path,
    pathToFillInPublicDir,
    headers
  }) {
    addRoute({
      path,
      type: `static`,
      filePath: _path2.posix.join(`public`, pathToFillInPublicDir),
      headers
    });
    if (fileAssets.has(pathToFillInPublicDir)) {
      fileAssets.delete(pathToFillInPublicDir);
    } else {
      _reporter.default.verbose(`[Adapters] Tried to remove "${pathToFillInPublicDir}" from fileAssets but it wasn't there`);
    }
  }

  // routes - pages - static (SSG) or function (DSG/SSR)
  for (const page of state.pages.values()) {
    const htmlRoutePath = (0, _path.slash)((0, _getRoutePath.getRoutePathFromPage)(page));
    const pageDataRoutePath = (0, _path.slash)((0, _pageData.generatePageDataPath)(``, htmlRoutePath));
    const pageMode = (0, _pageMode.getPageMode)(page);
    if (pageMode === `SSG`) {
      const htmlFilePath = (0, _path.slash)((0, _pageHtml.generateHtmlPath)(``, page.path));
      const pageDataFilePath = (0, _path.slash)((0, _pageData.generatePageDataPath)(``, page.path));
      addStaticRoute({
        path: htmlRoutePath,
        pathToFillInPublicDir: htmlFilePath,
        headers: _constants.MUST_REVALIDATE_HEADERS
      });
      addStaticRoute({
        path: pageDataRoutePath,
        pathToFillInPublicDir: pageDataFilePath,
        headers: _constants.MUST_REVALIDATE_HEADERS
      });
    } else {
      const commonFields = {
        type: `function`,
        functionId: `ssr-engine`
      };
      if (pageMode === `DSG`) {
        commonFields.cache = true;
      }
      addRoute({
        path: htmlRoutePath,
        ...commonFields
      });
      addRoute({
        path: pageDataRoutePath,
        ...commonFields
      });
    }
  }

  // static query json assets
  for (const staticQueryComponent of state.staticQueryComponents.values()) {
    const staticQueryResultPath = (0, _staticQueryUtils.getStaticQueryPath)(staticQueryComponent.hash);
    addStaticRoute({
      path: staticQueryResultPath,
      pathToFillInPublicDir: staticQueryResultPath,
      headers: _constants.MUST_REVALIDATE_HEADERS
    });
  }

  // app-data.json
  {
    const appDataFilePath = _path2.posix.join(`page-data`, `app-data.json`);
    addStaticRoute({
      path: appDataFilePath,
      pathToFillInPublicDir: appDataFilePath,
      headers: _constants.MUST_REVALIDATE_HEADERS
    });
  }

  // webpack assets
  if (!webpackAssets) {
    _reporter.default.panic({
      id: `12200`,
      context: {}
    });
  }
  for (const asset of webpackAssets) {
    addStaticRoute({
      path: asset,
      pathToFillInPublicDir: asset,
      headers: _constants.PERMAMENT_CACHING_HEADERS
    });
  }

  // chunk-map.json
  {
    const chunkMapFilePath = _path2.posix.join(`chunk-map.json`);
    addStaticRoute({
      path: chunkMapFilePath,
      pathToFillInPublicDir: chunkMapFilePath,
      headers: _constants.MUST_REVALIDATE_HEADERS
    });
  }

  // webpack.stats.json
  {
    const webpackStatsFilePath = _path2.posix.join(`webpack.stats.json`);
    addStaticRoute({
      path: webpackStatsFilePath,
      pathToFillInPublicDir: webpackStatsFilePath,
      headers: _constants.MUST_REVALIDATE_HEADERS
    });
  }
  for (const slice of state.slices.values()) {
    const sliceDataPath = _path2.posix.join(`slice-data`, `${slice.name}.json`);
    addStaticRoute({
      path: sliceDataPath,
      pathToFillInPublicDir: sliceDataPath,
      headers: _constants.MUST_REVALIDATE_HEADERS
    });
  }
  function addSliceHtmlRoute(name, hasChildren) {
    const sliceHtml1Path = _path2.posix.join(`_gatsby`, `slices`, `${name}-1.html`);
    addStaticRoute({
      path: sliceHtml1Path,
      pathToFillInPublicDir: sliceHtml1Path,
      headers: _constants.MUST_REVALIDATE_HEADERS
    });
    if (hasChildren) {
      const sliceHtml2Path = _path2.posix.join(`_gatsby`, `slices`, `${name}-2.html`);
      addStaticRoute({
        path: sliceHtml2Path,
        pathToFillInPublicDir: sliceHtml2Path,
        headers: _constants.MUST_REVALIDATE_HEADERS
      });
    }
  }
  addSliceHtmlRoute(`_gatsby-scripts`, false);
  for (const [name, {
    hasChildren
  }] of state.html.slicesProps.bySliceId.entries()) {
    addSliceHtmlRoute(name, hasChildren);
  }

  // redirect routes
  for (const redirect of state.redirects.values()) {
    const {
      fromPath,
      toPath,
      statusCode,
      isPermanent,
      ignoreCase,
      redirectInBrowser,
      ...platformSpecificFields
    } = redirect;
    addRoute({
      path: fromPath,
      type: `redirect`,
      toPath: toPath,
      status: statusCode !== null && statusCode !== void 0 ? statusCode : isPermanent ? _types.HTTP_STATUS_CODE.MOVED_PERMANENTLY_301 : _types.HTTP_STATUS_CODE.FOUND_302,
      ignoreCase: ignoreCase,
      headers: _constants.BASE_HEADERS,
      ...platformSpecificFields
    });
  }

  // function routes
  for (const functionInfo of state.functions.values()) {
    addRoute({
      path: `/api/${(0, _getRoutePath.getRoutePathFromFunction)(functionInfo)}`,
      type: `function`,
      functionId: functionInfo.functionId
    });
  }
  for (const fileAsset of fileAssets) {
    // try to classify remaining assets
    let headers = undefined;
    if (fileAsset.startsWith(`~partytown`)) {
      // no hashes, must revalidate
      headers = _constants.MUST_REVALIDATE_HEADERS;
    } else if (fileAsset.startsWith(`_gatsby/image`) || fileAsset.startsWith(`_gatsby/file`)) {
      headers = _constants.PERMAMENT_CACHING_HEADERS;
    }
    if (!headers) {
      headers = _constants.BASE_HEADERS;
    }
    addStaticRoute({
      path: fileAsset,
      pathToFillInPublicDir: fileAsset,
      headers
    });
  }
  const sortedRoutes = routes.sort((a, b) => {
    // The higher the score, the higher the specificity of our path
    const order = b.score - a.score;
    if (order !== 0) {
      return order;
    }

    // if specificity is the same we do lexigraphic comparison of path to ensure
    // deterministic order regardless of order pages where created
    return a.path.localeCompare(b.path);
  })
  // The score should be internal only, so we remove it from the final manifest
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .map(({
    score,
    ...rest
  }) => {
    return {
      ...rest
    };
  });
  return {
    routes: sortedRoutes,
    headers: headerRoutes
  };
}
function getFunctionsManifest() {
  const functions = [];
  for (const functionInfo of _redux.store.getState().functions.values()) {
    const pathToEntryPoint = _path2.posix.join(`.cache`, `functions`, functionInfo.relativeCompiledFilePath);
    const relativePathWithoutFileExtension = _path2.posix.join(_path2.posix.parse(functionInfo.originalRelativeFilePath).dir, _path2.posix.parse(functionInfo.originalRelativeFilePath).name);
    functions.push({
      functionId: functionInfo.functionId,
      name: `/api/${relativePathWithoutFileExtension}`,
      pathToEntryPoint,
      requiredFiles: [pathToEntryPoint]
    });
  }
  if ((0, _enginesHelpers.shouldGenerateEngines)()) {
    function getFilesFrom(dir) {
      return (0, _glob.sync)(`**/**`, {
        cwd: _path2.posix.join(process.cwd(), dir),
        nodir: true,
        dot: true
      }).map(file => _path2.posix.join(dir, file));
    }
    functions.push({
      functionId: `ssr-engine`,
      pathToEntryPoint: _path2.posix.join(`.cache`, `page-ssr`, `lambda.js`),
      name: `SSR & DSG`,
      requiredFiles: [`public/404.html`, `public/500.html`, ...((0, _enginesHelpers.shouldBundleDatastore)() ? getFilesFrom(_path2.posix.join(`.cache`, `data`, `datastore`)) : []), ...getFilesFrom(_path2.posix.join(`.cache`, `page-ssr`)), ...getFilesFrom(_path2.posix.join(`.cache`, `query-engine`))]
    });
  }
  return functions;
}
//# sourceMappingURL=manager.js.map