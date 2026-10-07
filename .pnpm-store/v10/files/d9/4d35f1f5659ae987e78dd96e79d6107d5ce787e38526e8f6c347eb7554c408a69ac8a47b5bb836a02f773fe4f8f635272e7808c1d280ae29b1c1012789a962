"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _apiRunnerBrowser = require("./api-runner-browser");
var _react = _interopRequireDefault(require("react"));
var _reachRouter = require("@gatsbyjs/reach-router");
var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");
var _staticQuery = require("./static-query");
var _context = require("./slice/context");
var _navigation = require("./navigation");
var _emitter = _interopRequireDefault(require("./emitter"));
var _pageRenderer = _interopRequireDefault(require("./page-renderer"));
var _asyncRequires = _interopRequireDefault(require("$virtual/async-requires"));
var _loader = require("./loader");
var _ensureResources = _interopRequireDefault(require("./ensure-resources"));
var _stripPrefix = _interopRequireDefault(require("./strip-prefix"));
var _matchPaths = _interopRequireDefault(require("$virtual/match-paths.json"));
var _reactDomUtils = require("./react-dom-utils");
// Generated during bootstrap

const loader = new _loader.ProdLoader(_asyncRequires.default, _matchPaths.default, window.pageData);
(0, _loader.setLoader)(loader);
loader.setApiRunner(_apiRunnerBrowser.apiRunner);
const {
  render,
  hydrate
} = (0, _reactDomUtils.reactDOMUtils)();
window.asyncRequires = _asyncRequires.default;
window.___emitter = _emitter.default;
window.___loader = _loader.publicLoader;
(0, _navigation.init)();
const reloadStorageKey = `gatsby-reload-compilation-hash-match`;
(0, _apiRunnerBrowser.apiRunnerAsync)(`onClientEntry`).then(() => {
  const handleUncaughtError = (error, errorInfo) => {
    console.error(`Uncaught error:`, error, errorInfo);
    (0, _apiRunnerBrowser.apiRunner)(`onUncaughtError`, {
      error,
      errorInfo
    });
  };
  const handleCaughtError = (error, errorInfo) => {
    (0, _apiRunnerBrowser.apiRunner)(`onCaughtError`, {
      error,
      errorInfo
    });
  };

  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if ((0, _apiRunnerBrowser.apiRunner)(`registerServiceWorker`).filter(Boolean).length > 0) {
    require(`./register-service-worker`);
  }

  // In gatsby v2 if Router is used in page using matchPaths
  // paths need to contain full path.
  // For example:
  //   - page have `/app/*` matchPath
  //   - inside template user needs to use `/app/xyz` as path
  // Resetting `basepath`/`baseuri` keeps current behaviour
  // to not introduce breaking change.
  // Remove this in v3
  const RouteHandler = props => /*#__PURE__*/_react.default.createElement(_reachRouter.BaseContext.Provider, {
    value: {
      baseuri: `/`,
      basepath: `/`
    }
  }, /*#__PURE__*/_react.default.createElement(_pageRenderer.default, props));
  const DataContext = /*#__PURE__*/_react.default.createContext({});
  const slicesContext = {
    renderEnvironment: `browser`
  };
  class GatsbyRoot extends _react.default.Component {
    render() {
      const {
        children
      } = this.props;
      return /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, ({
        location
      }) => /*#__PURE__*/_react.default.createElement(_ensureResources.default, {
        location: location
      }, ({
        pageResources,
        location
      }) => {
        const staticQueryResults = (0, _loader.getStaticQueryResults)();
        const sliceResults = (0, _loader.getSliceResults)();
        return /*#__PURE__*/_react.default.createElement(_staticQuery.StaticQueryContext.Provider, {
          value: staticQueryResults
        }, /*#__PURE__*/_react.default.createElement(_context.SlicesContext.Provider, {
          value: slicesContext
        }, /*#__PURE__*/_react.default.createElement(_context.SlicesResultsContext.Provider, {
          value: sliceResults
        }, /*#__PURE__*/_react.default.createElement(_context.SlicesMapContext.Provider, {
          value: pageResources.page.slicesMap
        }, /*#__PURE__*/_react.default.createElement(DataContext.Provider, {
          value: {
            pageResources,
            location
          }
        }, children)))));
      }));
    }
  }
  class LocationHandler extends _react.default.Component {
    render() {
      return /*#__PURE__*/_react.default.createElement(DataContext.Consumer, null, ({
        pageResources,
        location
      }) => /*#__PURE__*/_react.default.createElement(_navigation.RouteUpdates, {
        location: location
      }, /*#__PURE__*/_react.default.createElement(_gatsbyReactRouterScroll.ScrollContext, {
        location: location,
        shouldUpdateScroll: _navigation.shouldUpdateScroll
      }, /*#__PURE__*/_react.default.createElement(_reachRouter.Router, {
        basepath: __BASE_PATH__,
        location: location,
        id: "gatsby-focus-wrapper"
      }, /*#__PURE__*/_react.default.createElement(RouteHandler, (0, _extends2.default)({
        path: pageResources.page.path === `/404.html` || pageResources.page.path === `/500.html` ? (0, _stripPrefix.default)(location.pathname, __BASE_PATH__) : encodeURI((pageResources.page.matchPath || pageResources.page.path).split(`?`)[0])
      }, this.props, {
        location: location,
        pageResources: pageResources
      }, pageResources.json))))));
    }
  }
  const {
    pagePath,
    location: browserLoc
  } = window;

  // Explicitly call navigate if the canonical path (window.pagePath)
  // is different to the browser path (window.location.pathname). SSR
  // page paths might include search params, while SSG and DSG won't.
  // If page path include search params we also compare query params.
  // But only if NONE of the following conditions hold:
  //
  // - The url matches a client side route (page.matchPath)
  // - it's a 404 page
  // - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
  if (pagePath && __BASE_PATH__ + pagePath !== browserLoc.pathname + (pagePath.includes(`?`) ? browserLoc.search : ``) && !(loader.findMatchPath((0, _stripPrefix.default)(browserLoc.pathname, __BASE_PATH__)) || pagePath.match(/^\/(404|500)(\/?|.html)$/) || pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))) {
    (0, _reachRouter.navigate)(__BASE_PATH__ + pagePath + (!pagePath.includes(`?`) ? browserLoc.search : ``) + browserLoc.hash, {
      replace: true
    });
  }

  // It's possible that sessionStorage can throw an exception if access is not granted, see https://github.com/gatsbyjs/gatsby/issues/34512
  const getSessionStorage = () => {
    try {
      return sessionStorage;
    } catch {
      return null;
    }
  };
  _loader.publicLoader.loadPage(browserLoc.pathname + browserLoc.search).then(page => {
    var _page$page;
    const sessionStorage = getSessionStorage();
    if (page !== null && page !== void 0 && (_page$page = page.page) !== null && _page$page !== void 0 && _page$page.webpackCompilationHash && page.page.webpackCompilationHash !== window.___webpackCompilationHash) {
      // Purge plugin-offline cache
      if (`serviceWorker` in navigator && navigator.serviceWorker.controller !== null && navigator.serviceWorker.controller.state === `activated`) {
        navigator.serviceWorker.controller.postMessage({
          gatsbyApi: `clearPathResources`
        });
      }

      // We have not matching html + js (inlined `window.___webpackCompilationHash`)
      // with our data (coming from `app-data.json` file). This can cause issues such as
      // errors trying to load static queries (as list of static queries is inside `page-data`
      // which might not match to currently loaded `.js` scripts).
      // We are making attempt to reload if hashes don't match, but we also have to handle case
      // when reload doesn't fix it (possibly broken deploy) so we don't end up in infinite reload loop
      if (sessionStorage) {
        const isReloaded = sessionStorage.getItem(reloadStorageKey) === `1`;
        if (!isReloaded) {
          sessionStorage.setItem(reloadStorageKey, `1`);
          window.location.reload(true);
          return;
        }
      }
    }
    if (sessionStorage) {
      sessionStorage.removeItem(reloadStorageKey);
    }
    if (!page || page.status === _loader.PageResourceStatus.Error) {
      const message = `page resources for ${browserLoc.pathname} not found. Not rendering React`;

      // if the chunk throws an error we want to capture the real error
      // This should help with https://github.com/gatsbyjs/gatsby/issues/19618
      if (page && page.error) {
        console.error(message);
        throw page.error;
      }
      throw new Error(message);
    }
    const SiteRoot = (0, _apiRunnerBrowser.apiRunner)(`wrapRootElement`, {
      element: /*#__PURE__*/_react.default.createElement(LocationHandler, null)
    }, /*#__PURE__*/_react.default.createElement(LocationHandler, null), ({
      result
    }) => {
      return {
        element: result
      };
    }).pop();
    const App = function App() {
      const onClientEntryRanRef = _react.default.useRef(false);
      _react.default.useEffect(() => {
        if (!onClientEntryRanRef.current) {
          onClientEntryRanRef.current = true;
          if (performance.mark) {
            performance.mark(`onInitialClientRender`);
          }
          (0, _apiRunnerBrowser.apiRunner)(`onInitialClientRender`);
        }
      }, []);
      return /*#__PURE__*/_react.default.createElement(GatsbyRoot, null, SiteRoot);
    };
    const focusEl = document.getElementById(`gatsby-focus-wrapper`);

    // Client only pages have any empty body so we just do a normal
    // render to avoid React complaining about hydration mis-matches.
    let defaultRenderer = (Component, el) => render(Component, el, {
      onUncaughtError: handleUncaughtError,
      onCaughtError: handleCaughtError
    });
    if (focusEl && focusEl.children.length) {
      defaultRenderer = (Component, el) => hydrate(Component, el, {
        onUncaughtError: handleUncaughtError,
        onCaughtError: handleCaughtError
      });
    }
    const renderer = (0, _apiRunnerBrowser.apiRunner)(`replaceHydrateFunction`, undefined, defaultRenderer)[0] || defaultRenderer;
    function runRender() {
      const rootElement = typeof window !== `undefined` ? document.getElementById(`___gatsby`) : null;
      renderer( /*#__PURE__*/_react.default.createElement(App, null), rootElement);
    }

    // https://github.com/madrobby/zepto/blob/b5ed8d607f67724788ec9ff492be297f64d47dfc/src/zepto.js#L439-L450
    // TODO remove IE 10 support
    const doc = document;
    if (doc.readyState === `complete` || doc.readyState !== `loading` && !doc.documentElement.doScroll) {
      setTimeout(function () {
        runRender();
      }, 0);
    } else {
      const handler = function () {
        doc.removeEventListener(`DOMContentLoaded`, handler, false);
        window.removeEventListener(`load`, handler, false);
        runRender();
      };
      doc.addEventListener(`DOMContentLoaded`, handler, false);
      window.addEventListener(`load`, handler, false);
    }
    return;
  });
});
//# sourceMappingURL=production-app.js.map