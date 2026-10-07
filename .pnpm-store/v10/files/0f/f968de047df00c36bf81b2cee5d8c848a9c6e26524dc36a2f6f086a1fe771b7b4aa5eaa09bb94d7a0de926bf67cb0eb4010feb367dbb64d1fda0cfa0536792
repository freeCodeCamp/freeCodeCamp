"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.StaticQueryContext = exports.React = void 0;
exports.default = staticPage;
exports.getPageChunk = getPageChunk;
exports.renderSlice = renderSlice;
exports.sanitizeComponents = exports.reorderHeadComponents = exports.renderToPipeableStream = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _writerNode = require("react-server-dom-webpack/writer.node.server");
exports.renderToPipeableStream = _writerNode.renderToPipeableStream;
const React = require(`react`);
exports.React = React;
const path = require(`path`);
const {
  renderToStaticMarkup,
  renderToPipeableStream
} = require(`react-dom/server`);
exports.renderToPipeableStream = renderToPipeableStream;
const {
  ServerLocation,
  Router,
  isRedirect
} = require(`@gatsbyjs/reach-router`);
const merge = require(`deepmerge`);
const {
  StaticQueryContext
} = require(`gatsby`);
exports.StaticQueryContext = StaticQueryContext;
const fs = require(`fs`);
const {
  WritableAsPromise
} = require(`./server-utils/writable-as-promise`);
const {
  RouteAnnouncerProps
} = require(`./route-announcer-props`);
const {
  apiRunner,
  apiRunnerAsync
} = require(`./api-runner-ssr`);
const asyncRequires = require(`$virtual/async-requires`);
const {
  version: gatsbyVersion
} = require(`gatsby/package.json`);
const {
  grabMatchParams
} = require(`./find-path`);
const {
  headHandlerForSSR
} = require(`./head/head-export-handler-for-ssr`);
const {
  SlicesResultsContext,
  SlicesContext,
  SlicesMapContext,
  SlicesPropsContext
} = require(`./slice/context`);
const {
  ServerSliceRenderer
} = require(`./slice/server-slice-renderer`);

// we want to force posix-style joins, so Windows doesn't produce backslashes for urls
const {
  join
} = path.posix;
const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};
let Html;
try {
  Html = require(`../src/html`);
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = require(`./default-html`);
  } else {
    throw err;
  }
}
Html = Html && Html.__esModule ? Html.default : Html;
const getPageDataPath = path => {
  const fixedPagePath = path === `/` ? `index` : path;
  return join(`page-data`, fixedPagePath, `page-data.json`);
};
const createElement = React.createElement;
const sanitizeComponents = components => {
  const componentsArray = [].concat(components).flat(Infinity).filter(Boolean);
  return componentsArray.map(component => {
    // Ensure manifest is always loaded from content server
    // And not asset server when an assetPrefix is used
    if (__ASSET_PREFIX__ && component.props.rel === `manifest`) {
      return React.cloneElement(component, {
        href: component.props.href.replace(__ASSET_PREFIX__, ``)
      });
    }
    return component;
  });
};
exports.sanitizeComponents = sanitizeComponents;
function deepMerge(a, b) {
  const combineMerge = (target, source, options) => {
    const destination = target.slice();
    source.forEach((item, index) => {
      if (typeof destination[index] === `undefined`) {
        destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
      } else if (options.isMergeableObject(item)) {
        destination[index] = merge(target[index], item, options);
      } else if (target.indexOf(item) === -1) {
        destination.push(item);
      }
    });
    return destination;
  };
  return merge(a, b, {
    arrayMerge: combineMerge
  });
}

/**
Reorder headComponents so meta tags are always at the top and aren't missed by crawlers by being pushed down by large inline styles, etc.
@see https://github.com/gatsbyjs/gatsby/issues/22206
*/
const reorderHeadComponents = headComponents => {
  const sorted = headComponents.sort((a, b) => {
    if (a.type && a.type === `meta` && !(b.type && b.type === `meta`)) {
      return -1;
    }
    return 0;
  });
  return sorted;
};
exports.reorderHeadComponents = reorderHeadComponents;
const DEFAULT_CONTEXT = {
  // whether or not we're building the site now
  // usage in determining original build or engines
  isDuringBuild: false
};
async function staticPage({
  pagePath,
  pageData,
  staticQueryContext,
  styles,
  scripts,
  reversedStyles,
  reversedScripts,
  inlinePageData = false,
  context = {},
  webpackCompilationHash,
  sliceData
}) {
  const renderContext = Object.assign(DEFAULT_CONTEXT, context);

  // for this to work we need this function to be sync or at least ensure there is single execution of it at a time
  global.unsafeBuiltinUsage = [];
  try {
    let bodyHtml = ``;
    let headComponents = [/*#__PURE__*/React.createElement("meta", {
      name: "generator",
      content: `Gatsby ${gatsbyVersion}`,
      key: `generator-${gatsbyVersion}`
    })];
    let htmlAttributes = {};
    let bodyAttributes = {};
    let preBodyComponents = [];
    let postBodyComponents = [];
    let bodyProps = {};
    function loadPageDataSync(_pagePath) {
      if (_pagePath === pagePath) {
        // no need to use fs if we are asking for pageData of current page
        return pageData;
      }
      const pageDataPath = getPageDataPath(_pagePath);
      const pageDataFile = join(process.cwd(), `public`, pageDataPath);
      try {
        // deprecation notice
        const myErrorHolder = {
          name: `Usage of loadPageDataSync for page other than currently generated page disables incremental html generation in future builds`
        };
        Error.captureStackTrace(myErrorHolder, loadPageDataSync);
        global.unsafeBuiltinUsage.push(myErrorHolder.stack);
        const pageDataJson = fs.readFileSync(pageDataFile);
        return JSON.parse(pageDataJson);
      } catch (error) {
        // not an error if file is not found. There's just no page data
        return null;
      }
    }
    const replaceBodyHTMLString = body => {
      bodyHtml = body;
    };
    const setHeadComponents = components => {
      headComponents = headComponents.concat(sanitizeComponents(components));
    };
    const setHtmlAttributes = attributes => {
      // TODO - we should remove deep merges
      htmlAttributes = deepMerge(htmlAttributes, attributes);
    };
    const setBodyAttributes = attributes => {
      // TODO - we should remove deep merges
      bodyAttributes = deepMerge(bodyAttributes, attributes);
    };
    const setPreBodyComponents = components => {
      preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
    };
    const setPostBodyComponents = components => {
      postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
    };
    const setBodyProps = props => {
      // TODO - we should remove deep merges
      bodyProps = deepMerge({}, bodyProps, props);
    };
    const getHeadComponents = () => headComponents;
    const replaceHeadComponents = components => {
      headComponents = sanitizeComponents(components);
    };
    const getPreBodyComponents = () => preBodyComponents;
    const replacePreBodyComponents = components => {
      preBodyComponents = sanitizeComponents(components);
    };
    const getPostBodyComponents = () => postBodyComponents;
    const replacePostBodyComponents = components => {
      postBodyComponents = sanitizeComponents(components);
    };
    const {
      componentChunkName,
      slicesMap
    } = pageData;
    const pageComponent = await asyncRequires.components[componentChunkName]();
    class RouteHandler extends React.Component {
      render() {
        var _pageData$result, _pageData$result$page;
        const props = {
          ...this.props,
          ...pageData.result,
          params: {
            ...grabMatchParams(this.props.location.pathname),
            ...(((_pageData$result = pageData.result) === null || _pageData$result === void 0 ? void 0 : (_pageData$result$page = _pageData$result.pageContext) === null || _pageData$result$page === void 0 ? void 0 : _pageData$result$page.__params) || {})
          }
        };
        const pageElement = createElement(pageComponent.default, props);
        const wrappedPage = apiRunner(`wrapPageElement`, {
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
    const routerElement = /*#__PURE__*/React.createElement(ServerLocation, {
      url: `${__BASE_PATH__}${pagePath}`
    }, /*#__PURE__*/React.createElement(Router, {
      id: "gatsby-focus-wrapper",
      baseuri: __BASE_PATH__
    }, /*#__PURE__*/React.createElement(RouteHandler, {
      path: "/*"
    })), /*#__PURE__*/React.createElement("div", RouteAnnouncerProps));
    const sliceProps = {};
    let body = apiRunner(`wrapRootElement`, {
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
    const slicesContext = {
      // if we're in build now, we know we're on the server
      // otherwise we're in an engine
      renderEnvironment: renderContext.isDuringBuild ? `server` : `engines`
    };
    if (process.env.GATSBY_SLICES) {
      // if we're running in an engine, we need to manually wrap body with
      // the results context to pass the map of slice name to component/data/context
      if (slicesContext.renderEnvironment === `engines`) {
        // this is the same name used in the browser
        // since this immitates behavior
        const slicesDb = new Map();
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
        body = /*#__PURE__*/React.createElement(SlicesResultsContext.Provider, {
          value: slicesDb
        }, body);
      }
      body = /*#__PURE__*/React.createElement(SlicesContext.Provider, {
        value: slicesContext
      }, /*#__PURE__*/React.createElement(SlicesPropsContext.Provider, {
        value: sliceProps
      }, /*#__PURE__*/React.createElement(SlicesMapContext.Provider, {
        value: slicesMap
      }, body)));
    }
    const bodyComponent = /*#__PURE__*/React.createElement(StaticQueryContext.Provider, {
      value: staticQueryContext
    }, body);

    // Let the site or plugin render the page component.
    await apiRunnerAsync(`replaceRenderer`, {
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
        const writableStream = new WritableAsPromise();
        const {
          pipe
        } = renderToPipeableStream(bodyComponent, {
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
        if (!isRedirect(e)) throw e;
      }
    }
    apiRunner(`onRenderBody`, {
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      setPreBodyComponents,
      setPostBodyComponents,
      setBodyProps,
      pathname: pagePath,
      loadPageDataSync,
      bodyHtml,
      scripts,
      styles,
      pathPrefix: __PATH_PREFIX__
    });

    // we want to run Head after onRenderBody, so Html and Body attributes
    // from Head wins over global ones from onRenderBody
    headHandlerForSSR({
      pageComponent,
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      staticQueryContext,
      pageData,
      pagePath
    });
    reversedScripts.forEach(script => {
      // Add preload/prefetch <link>s magic comments
      if (script.shouldGenerateLink) {
        headComponents.push( /*#__PURE__*/React.createElement("link", {
          as: "script",
          rel: script.rel,
          key: script.name,
          href: `${__PATH_PREFIX__}/${script.name}`
        }));
      }
    });
    reversedStyles.forEach(style => {
      // Add <link>s for styles that should be prefetched
      // otherwise, inline as a <style> tag

      if (style.rel === `prefetch`) {
        headComponents.push( /*#__PURE__*/React.createElement("link", {
          as: "style",
          rel: style.rel,
          key: style.name,
          href: `${__PATH_PREFIX__}/${style.name}`
        }));
      } else {
        headComponents.unshift( /*#__PURE__*/React.createElement("style", {
          "data-href": `${__PATH_PREFIX__}/${style.name}`,
          "data-identity": `gatsby-global-css`,
          dangerouslySetInnerHTML: {
            __html: style.content
          }
        }));
      }
    });

    // Add page metadata for the current page
    const windowPageData = `/*<![CDATA[*/window.pagePath=${JSON.stringify(pagePath)};${process.env.GATSBY_SLICES ? `` : `window.___webpackCompilationHash="${webpackCompilationHash}";`}${inlinePageData ? `window.pageData=${JSON.stringify(pageData)};` : ``}/*]]>*/`;
    postBodyComponents.push( /*#__PURE__*/React.createElement("script", {
      key: `script-loader`,
      id: `gatsby-script-loader`,
      dangerouslySetInnerHTML: {
        __html: windowPageData
      }
    }));
    if (process.env.GATSBY_SLICES) {
      postBodyComponents.push(createElement(ServerSliceRenderer, {
        sliceId: `_gatsby-scripts`
      }));
    } else {
      const chunkMapping = require(`../public/chunk-map.json`);
      // restore the old behavior
      // Add chunk mapping metadata
      const scriptChunkMapping = `/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;
      postBodyComponents.push( /*#__PURE__*/React.createElement("script", {
        key: `chunk-mapping`,
        id: `gatsby-chunk-mapping`,
        dangerouslySetInnerHTML: {
          __html: scriptChunkMapping
        }
      }));
      let bodyScripts = [];
      if (chunkMapping[`polyfill`]) {
        chunkMapping[`polyfill`].forEach(script => {
          const scriptPath = `${__PATH_PREFIX__}${script}`;
          bodyScripts.push( /*#__PURE__*/React.createElement("script", {
            key: scriptPath,
            src: scriptPath,
            noModule: true
          }));
        });
      }

      // Filter out prefetched bundles as adding them as a script tag
      // would force high priority fetching.
      bodyScripts = bodyScripts.concat(scripts.filter(s => s.rel !== `prefetch`).map(s => {
        const scriptPath = `${__PATH_PREFIX__}/${JSON.stringify(s.name).slice(1, -1)}`;
        return /*#__PURE__*/React.createElement("script", {
          key: scriptPath,
          src: scriptPath,
          async: true
        });
      }));
      postBodyComponents.push(...bodyScripts);
    }
    headComponents = reorderHeadComponents(headComponents);
    apiRunner(`onPreRenderHTML`, {
      getHeadComponents,
      replaceHeadComponents,
      getPreBodyComponents,
      replacePreBodyComponents,
      getPostBodyComponents,
      replacePostBodyComponents,
      pathname: pagePath,
      pathPrefix: __PATH_PREFIX__
    });
    let htmlElement = /*#__PURE__*/React.createElement(Html, (0, _extends2.default)({}, bodyProps, {
      headComponents: headComponents,
      htmlAttributes: htmlAttributes,
      bodyAttributes: bodyAttributes,
      preBodyComponents: preBodyComponents,
      postBodyComponents: postBodyComponents,
      body: bodyHtml,
      path: pagePath
    }));
    if (process.env.GATSBY_SLICES) {
      htmlElement = /*#__PURE__*/React.createElement(SlicesContext.Provider, {
        value: slicesContext
      }, htmlElement);
    }
    const html = `<!DOCTYPE html>${renderToStaticMarkup(htmlElement)}`;
    return {
      html,
      unsafeBuiltinsUsage: global.unsafeBuiltinUsage,
      sliceData: sliceProps
    };
  } catch (e) {
    e.unsafeBuiltinsUsage = global.unsafeBuiltinUsage;
    throw e;
  }
}
function getPageChunk({
  componentChunkName
}) {
  return asyncRequires.components[componentChunkName]();
}
async function renderSlice({
  slice,
  staticQueryContext,
  props = {}
}) {
  const {
    default: SliceComponent
  } = await getPageChunk(slice);
  const slicesContext = {
    // we are not yet supporting using <Slice /> placeholders within slice components
    // setting this renderEnvironemnt to throw meaningful error on `<Slice />` usage
    // `slices` renderEnvironment should be removed once we support nested `<Slice />` placeholders
    renderEnvironment: `slices`,
    sliceRoot: slice
  };
  const sliceElement = /*#__PURE__*/React.createElement(SliceComponent, (0, _extends2.default)({
    sliceContext: slice.context
  }, props));
  const sliceWrappedWithWrapRootElement = apiRunner(`wrapRootElement`, {
    element: sliceElement
  }, sliceElement, ({
    result
  }) => {
    return {
      element: result
    };
  }).pop();
  const sliceWrappedWithWrapRootElementAndContexts = /*#__PURE__*/React.createElement(SlicesContext.Provider, {
    value: slicesContext
  }, /*#__PURE__*/React.createElement(StaticQueryContext.Provider, {
    value: staticQueryContext
  }, sliceWrappedWithWrapRootElement));
  const writableStream = new WritableAsPromise();
  const {
    pipe
  } = renderToPipeableStream(sliceWrappedWithWrapRootElementAndContexts, {
    onAllReady() {
      pipe(writableStream);
    },
    onError(error) {
      writableStream.destroy(error);
    }
  });
  return await writableStream;
}
//# sourceMappingURL=static-entry.js.map