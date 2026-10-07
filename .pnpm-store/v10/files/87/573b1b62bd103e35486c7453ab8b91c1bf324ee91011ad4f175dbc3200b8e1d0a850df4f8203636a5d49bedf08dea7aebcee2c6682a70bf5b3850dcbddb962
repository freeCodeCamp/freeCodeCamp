"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = staticPage;
exports.getPageChunk = getPageChunk;
var _concat2 = _interopRequireDefault(require("lodash/concat"));
var _uniqBy2 = _interopRequireDefault(require("lodash/uniqBy"));
var _flatten2 = _interopRequireDefault(require("lodash/flatten"));
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
var _merge2 = _interopRequireDefault(require("lodash/merge"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _react = _interopRequireDefault(require("react"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _server = require("react-dom/server");
var _path = _interopRequireDefault(require("path"));
var _apiRunnerSsr = require("./api-runner-ssr");
var _findPath = require("./find-path");
var _ssrSyncRequires = _interopRequireDefault(require("$virtual/ssr-sync-requires"));
var _routeAnnouncerProps = require("./route-announcer-props");
var _reachRouter = require("@gatsbyjs/reach-router");
var _headExportHandlerForSsr = require("./head/head-export-handler-for-ssr");
var _loader = require("./loader");
var _writableAsPromise = require("./server-utils/writable-as-promise");
var _context = require("./slice/context");
/* global BROWSER_ESM_ONLY */

// prefer default export if available
const preferDefault = m => m && m.default || m;
const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};
let cachedStats;
const getStats = publicDir => {
  if (cachedStats) {
    return cachedStats;
  } else {
    cachedStats = JSON.parse(_fsExtra.default.readFileSync(_path.default.join(publicDir, `webpack.stats.json`), `utf-8`));
    return cachedStats;
  }
};
let Html;
try {
  Html = require(`../src/html`);
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = require(`./default-html`);
  } else {
    console.log(`There was an error requiring "src/html.js"\n\n`, err, `\n\n`);
    process.exit();
  }
}
Html = Html && Html.__esModule ? Html.default : Html;
async function staticPage({
  pagePath,
  isClientOnlyPage,
  publicDir,
  error,
  serverData
}) {
  let bodyHtml = ``;
  let headComponents = [/*#__PURE__*/_react.default.createElement("meta", {
    key: "environment",
    name: "note",
    content: "environment=development"
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};
  if (error) {
    postBodyComponents.push([/*#__PURE__*/_react.default.createElement("script", {
      key: "dev-ssr-error",
      dangerouslySetInnerHTML: {
        __html: `window._gatsbyEvents = window._gatsbyEvents || []; window._gatsbyEvents.push(["FAST_REFRESH", { action: "SHOW_DEV_SSR_ERROR", payload: ${JSON.stringify(error)} }])`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      key: "dev-ssr-error-noscript"
    }, /*#__PURE__*/_react.default.createElement("h1", null, "Failed to Server Render (SSR)"), /*#__PURE__*/_react.default.createElement("h2", null, "Error message:"), /*#__PURE__*/_react.default.createElement("p", null, error.sourceMessage), /*#__PURE__*/_react.default.createElement("h2", null, "File:"), /*#__PURE__*/_react.default.createElement("p", null, error.source, ":", error.line, ":", error.column), /*#__PURE__*/_react.default.createElement("h2", null, "Stack:"), /*#__PURE__*/_react.default.createElement("pre", null, /*#__PURE__*/_react.default.createElement("code", null, error.stack)))]);
  }
  const generateBodyHTML = async () => {
    const setHeadComponents = components => {
      headComponents = headComponents.concat(components);
    };
    const setHtmlAttributes = attributes => {
      htmlAttributes = (0, _merge2.default)(htmlAttributes, attributes);
    };
    const setBodyAttributes = attributes => {
      bodyAttributes = (0, _merge2.default)(bodyAttributes, attributes);
    };
    const setPreBodyComponents = components => {
      preBodyComponents = preBodyComponents.concat(components);
    };
    const setPostBodyComponents = components => {
      postBodyComponents = postBodyComponents.concat(components);
    };
    const setBodyProps = props => {
      bodyProps = (0, _merge2.default)({}, bodyProps, props);
    };
    const getHeadComponents = () => headComponents;
    const replaceHeadComponents = components => {
      headComponents = components;
    };
    const replaceBodyHTMLString = body => {
      bodyHtml = body;
    };
    const getPreBodyComponents = () => preBodyComponents;
    const replacePreBodyComponents = components => {
      preBodyComponents = components;
    };
    const getPostBodyComponents = () => postBodyComponents;
    const replacePostBodyComponents = components => {
      postBodyComponents = components;
    };
    const getPageDataPath = path => {
      const fixedPagePath = path === `/` ? `index` : path;
      return _path.default.join(`page-data`, fixedPagePath, `page-data.json`);
    };
    const getPageData = pagePath => {
      const pageDataPath = getPageDataPath(pagePath);
      const absolutePageDataPath = _path.default.join(publicDir, pageDataPath);
      const pageDataJson = _fsExtra.default.readFileSync(absolutePageDataPath, `utf8`);
      try {
        return JSON.parse(pageDataJson);
      } catch (err) {
        return null;
      }
    };
    const pageData = getPageData(pagePath);
    const {
      componentChunkName,
      slicesMap
    } = pageData;
    const pageComponent = await _ssrSyncRequires.default.ssrComponents[componentChunkName];
    let scriptsAndStyles = (0, _flatten2.default)([`commons`].map(chunkKey => {
      const fetchKey = `assetsByChunkName[${chunkKey}]`;
      const stats = getStats(publicDir);
      let chunks = (0, _get2.default)(stats, fetchKey);
      const namedChunkGroups = (0, _get2.default)(stats, `namedChunkGroups`);
      if (!chunks) {
        return null;
      }
      chunks = chunks.map(chunk => {
        if (chunk === `/`) {
          return null;
        }
        return {
          rel: `preload`,
          name: chunk
        };
      });
      namedChunkGroups[chunkKey].assets.forEach(asset => chunks.push({
        rel: `preload`,
        name: asset.name
      }));
      const childAssets = namedChunkGroups[chunkKey].childAssets;
      for (const rel in childAssets) {
        if (childAssets.hasownProperty(rel)) {
          chunks = (0, _concat2.default)(chunks, childAssets[rel].map(chunk => {
            return {
              rel,
              name: chunk
            };
          }));
        }
      }
      return chunks;
    })).filter(s => (0, _isObject2.default)(s)).sort((s1, _s2) => s1.rel == `preload` ? -1 : 1); // given priority to preload

    scriptsAndStyles = (0, _uniqBy2.default)(scriptsAndStyles, item => item.name);
    const styles = scriptsAndStyles.filter(style => style.name && style.name.endsWith(`.css`));
    styles.slice(0).reverse().forEach(style => {
      headComponents.unshift( /*#__PURE__*/_react.default.createElement("link", {
        "data-identity": `gatsby-dev-css`,
        key: style.name,
        rel: "stylesheet",
        type: "text/css",
        href: `${__PATH_PREFIX__}/${style.name}`
      }));
    });
    class RouteHandler extends _react.default.Component {
      render() {
        var _pageData$result, _pageData$result$page;
        const props = {
          ...this.props,
          ...pageData.result,
          serverData,
          params: {
            ...(0, _findPath.grabMatchParams)(this.props.location.pathname),
            ...(((_pageData$result = pageData.result) === null || _pageData$result === void 0 ? void 0 : (_pageData$result$page = _pageData$result.pageContext) === null || _pageData$result$page === void 0 ? void 0 : _pageData$result$page.__params) || {})
          }
        };
        const pageElement = /*#__PURE__*/_react.default.createElement(preferDefault(_ssrSyncRequires.default.ssrComponents[componentChunkName]), props);
        const wrappedPage = (0, _apiRunnerSsr.apiRunner)(`wrapPageElement`, {
          element: pageElement,
          props
        }, pageElement, ({
          result
        }) => {
          return {
            element: result,
            props
          };
        }).pop();
        return wrappedPage;
      }
    }
    const routerElement = _ssrSyncRequires.default.ssrComponents[componentChunkName] && !isClientOnlyPage ? /*#__PURE__*/_react.default.createElement(_reachRouter.ServerLocation, {
      url: `${__BASE_PATH__}${pagePath}`
    }, /*#__PURE__*/_react.default.createElement(_reachRouter.Router, {
      id: "gatsby-focus-wrapper",
      baseuri: __BASE_PATH__
    }, /*#__PURE__*/_react.default.createElement(RouteHandler, {
      path: "/*"
    })), /*#__PURE__*/_react.default.createElement("div", _routeAnnouncerProps.RouteAnnouncerProps)) : null;
    let bodyComponent = (0, _apiRunnerSsr.apiRunner)(`wrapRootElement`, {
      element: routerElement,
      pathname: pagePath
    }, routerElement, ({
      result
    }) => {
      return {
        element: result,
        pathname: pagePath
      };
    }).pop();
    if (process.env.GATSBY_SLICES) {
      const readSliceData = sliceName => {
        const filePath = _path.default.join(publicDir, `slice-data`, `${sliceName}.json`);
        const rawSliceData = _fsExtra.default.readFileSync(filePath, `utf-8`);
        return JSON.parse(rawSliceData);
      };
      const slicesContext = {
        renderEnvironment: `dev-ssr`
      };
      const sliceProps = {};
      const slicesDb = new Map();
      const sliceData = {};
      for (const sliceName of Object.values(slicesMap)) {
        sliceData[sliceName] = await readSliceData(sliceName);
      }
      for (const sliceName of Object.values(slicesMap)) {
        const slice = sliceData[sliceName];
        const {
          default: SliceComponent
        } = await getPageChunk(slice);
        const sliceObject = {
          component: SliceComponent,
          sliceContext: slice.result.sliceContext,
          data: slice.result.data
        };
        slicesDb.set(sliceName, sliceObject);
      }
      bodyComponent = /*#__PURE__*/_react.default.createElement(_context.SlicesContext.Provider, {
        value: slicesContext
      }, /*#__PURE__*/_react.default.createElement(_context.SlicesPropsContext.Provider, {
        value: sliceProps
      }, /*#__PURE__*/_react.default.createElement(_context.SlicesMapContext.Provider, {
        value: slicesMap
      }, /*#__PURE__*/_react.default.createElement(_context.SlicesResultsContext.Provider, {
        value: slicesDb
      }, bodyComponent))));
    }

    // Let the site or plugin render the page component.
    await (0, _apiRunnerSsr.apiRunnerAsync)(`replaceRenderer`, {
      bodyComponent,
      replaceBodyHTMLString,
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      setPreBodyComponents,
      setPostBodyComponents,
      setBodyProps,
      pathname: pagePath,
      pathPrefix: __PATH_PREFIX__
    });

    // If no one stepped up, we'll handle it.
    if (!bodyHtml) {
      try {
        const writableStream = new _writableAsPromise.WritableAsPromise();
        const {
          pipe
        } = (0, _server.renderToPipeableStream)(bodyComponent, {
          onAllReady() {
            pipe(writableStream);
          },
          onError(error) {
            writableStream.destroy(error);
          }
        });
        bodyHtml = await writableStream;
      } catch (e) {
        // ignore @reach/router redirect errors
        if (!(0, _reachRouter.isRedirect)(e)) throw e;
      }
    }
    (0, _apiRunnerSsr.apiRunner)(`onRenderBody`, {
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      setPreBodyComponents,
      setPostBodyComponents,
      setBodyProps,
      pathname: pagePath
    });

    // we want to run Head after onRenderBody, so Html and Body attributes
    // from Head wins over global ones from onRenderBody
    (0, _headExportHandlerForSsr.headHandlerForSSR)({
      pageComponent,
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      staticQueryContext: (0, _loader.getStaticQueryResults)(),
      pageData,
      pagePath
    });
    (0, _apiRunnerSsr.apiRunner)(`onPreRenderHTML`, {
      getHeadComponents,
      replaceHeadComponents,
      getPreBodyComponents,
      replacePreBodyComponents,
      getPostBodyComponents,
      replacePostBodyComponents,
      pathname: pagePath
    });
    return bodyHtml;
  };
  const bodyStr = await generateBodyHTML();
  const htmlElement = /*#__PURE__*/_react.default.createElement(Html, {
    ...bodyProps,
    body: bodyStr,
    headComponents: headComponents.concat([/*#__PURE__*/_react.default.createElement("script", {
      key: `io`,
      src: "/socket.io/socket.io.js"
    })]),
    htmlAttributes,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents: postBodyComponents.concat([!BROWSER_ESM_ONLY && /*#__PURE__*/_react.default.createElement("script", {
      key: `polyfill`,
      src: "/polyfill.js",
      noModule: true
    }), /*#__PURE__*/_react.default.createElement("script", {
      key: `framework`,
      src: "/framework.js"
    }), /*#__PURE__*/_react.default.createElement("script", {
      key: `commons`,
      src: "/commons.js"
    })].filter(Boolean))
  });
  let htmlStr = (0, _server.renderToStaticMarkup)(htmlElement);
  htmlStr = `<!DOCTYPE html>${htmlStr}`;
  return htmlStr;
}
function getPageChunk({
  componentChunkName
}) {
  return _ssrSyncRequires.default.ssrComponents[componentChunkName];
}
//# sourceMappingURL=ssr-develop-static-entry.js.map