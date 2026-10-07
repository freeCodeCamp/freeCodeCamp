"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.renderHTMLProd = exports.renderHTMLDev = void 0;
exports.renderPartialHydrationProd = renderPartialHydrationProd;
exports.renderSlices = renderSlices;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _bluebird = _interopRequireDefault(require("bluebird"));
var path = _interopRequireWildcard(require("path"));
var _pageHtml = require("gatsby-core-utils/page-html");
var _pageData = require("gatsby-core-utils/page-data");
var _clientAssetsForTemplate = require("../../client-assets-for-template");
var _pageData2 = require("../../page-data");
var _staticQueryUtils = require("../../static-query-utils");
var _reachRouter = require("@gatsbyjs/reach-router");
var _ensureFileContent = require("../../ensure-file-content");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable @typescript-eslint/no-namespace */

// we want to force posix-style joins, so Windows doesn't produce backslashes for urls
const {
  join
} = path.posix;
/**
 * Used to track if renderHTMLProd / renderHTMLDev are called within same "session" (from same renderHTMLQueue call).
 * As long as sessionId remains the same we can rely on memoized/cached resources for templates, css file content for inlining and static query results.
 * If session changes we invalidate our memoization caches.
 */
let lastSessionId = 0;
let htmlComponentRenderer;
let webpackStats;
const resourcesForTemplateCache = new Map();
const inFlightResourcesForTemplate = new Map();
function clearCaches() {
  (0, _staticQueryUtils.clearStaticQueryCaches)();
  resourcesForTemplateCache.clear();
  inFlightResourcesForTemplate.clear();
  (0, _clientAssetsForTemplate.clearCache)();
}
async function doGetResourcesForTemplate(pageData) {
  const scriptsAndStyles = await (0, _clientAssetsForTemplate.getScriptsAndStylesForTemplate)(pageData.componentChunkName, webpackStats);
  const {
    staticQueryContext
  } = await (0, _staticQueryUtils.getStaticQueryContext)(pageData.staticQueryHashes);
  return {
    staticQueryContext,
    ...scriptsAndStyles
  };
}
async function getResourcesForTemplate(pageData) {
  const memoizedResourcesForTemplate = resourcesForTemplateCache.get(pageData.componentChunkName);
  if (memoizedResourcesForTemplate) {
    return memoizedResourcesForTemplate;
  }
  const inFlight = inFlightResourcesForTemplate.get(pageData.componentChunkName);
  if (inFlight) {
    return inFlight;
  }
  const doWorkPromise = doGetResourcesForTemplate(pageData);
  inFlightResourcesForTemplate.set(pageData.componentChunkName, doWorkPromise);
  const resources = await doWorkPromise;
  resourcesForTemplateCache.set(pageData.componentChunkName, resources);
  inFlightResourcesForTemplate.delete(pageData.componentChunkName);
  return resources;
}
const generatePreviewErrorPage = async ({
  pagePath,
  publicDir,
  error
}) => {
  const pageData = await (0, _pageData2.readPageData)(publicDir, pagePath);
  const pageDataForErrorMessage = (0, _pageData2.modifyPageDataForErrorMessage)(pageData);
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Failed to render HTML for "${pagePath}"</title>
    <style>
      *, *::before, *::after {
        box-sizing: border-box;
      }
      * {
        margin: 0;
      }
      html, body {
        height: 100%;
      }
      body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
      }
      input, button, textarea, select {
        font: inherit;
      }
      p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
      }

      :root {
        --color-ansi-selection: rgba(95, 126, 151, 0.48);
        --color-ansi-bg: #fafafa;
        --color-ansi-fg: #545454;
        --color-ansi-white: #969896;
        --color-ansi-black: #141414;
        --color-ansi-blue: #183691;
        --color-ansi-cyan: #007faa;
        --color-ansi-green: #008000;
        --color-ansi-magenta: #795da3;
        --color-ansi-red: #d91e18;
        --color-ansi-yellow: #aa5d00;
        --color-ansi-bright-white: #ffffff;
        --color-ansi-bright-black: #545454;
        --color-ansi-bright-blue: #183691;
        --color-ansi-bright-cyan: #007faa;
        --color-ansi-bright-green: #008000;
        --color-ansi-bright-magenta: #795da3;
        --color-ansi-bright-red: #d91e18;
        --color-ansi-bright-yellow: #aa5d00;
        --importantLight: #ffffff;
        --importantDark: #000000;
        --backdrop: rgba(72, 67, 79, 0.5);
        --color: #454a53;
        --background: var(--color-ansi-bright-white);
        --primary: #663399;
        --primaryLight: #9158ca;
        --link: var(--primary);
        --line: #e0e0e0;
        --colorHeader: rgb(244, 244, 244);
        --codeFrame-bg: #eeeeee;
        --codeFrame-color: #414141;
        --codeFrame-button-bg: white;
        --radii: 5px;
        --z-index-backdrop: 9000;
        --z-index-overlay: 10000;
        --space-xxs: 0.25em;
        --space-xs: 0.5em;
        --space-sm: 1em;
        --space: 1.5em;
        --space-lg: 2.5em;
        --rootBoxShadowOpacity: 0.08;
        --ring-opacity: 0.65;
        --ring-color: rgba(138, 75, 175, var(--ring-opacity));
      }

      html {
        font: 18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: var(--background);
        color: var(--color);
      }

      a {
        color: var(--link);
        text-decoration: none;
        font-weight: 500;
      }

      button:focus, a:focus {
        outline: 4px solid transparent;
        box-shadow: 0 0 0 4px var(--ring-color);
      }

      a:hover {
        text-decoration: underline;
      }

      header {
        color: var(--colorHeader);
        background: var(--primary);
        padding: var(--space);
      }

      header p {
        margin-bottom: 0;
      }

      h1 {
        color: var(--importantLight);
        font-weight: 500;
        margin: 0;
      }

      main {
        padding: var(--space);
      }

      h2 {
        font-weight: 500;
        font-size: 1.25em;
        color: var(--importantDark);
        margin-bottom: var(--space-xs);
      }

      p {
        margin-bottom: var(--space-sm);
      }

      pre {
        color: var(--color-ansi-fg);
        background: var(--color-ansi-bg);
        padding: var(--space-sm);
        border-radius: var(--radii);
        overflow: auto;
        margin-bottom: var(--space-sm);
      }

      p code {
        color: var(--color-ansi-fg);
        background: var(--color-ansi-bg);
        border-radius: var(--radii);
        padding: var(--space-xxs)
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --color-ansi-bg: #2b2b2b;
          --color-ansi-fg: #d1d5db;
          --color-ansi-white: #ffffff;
          --color-ansi-black: #d4d0ab;
          --color-ansi-blue: #4791ff;
          --color-ansi-cyan: #00e0e0;
          --color-ansi-green: #abe338;
          --color-ansi-magenta: #dcc6e0;
          --color-ansi-red: #ffa07a;
          --color-ansi-yellow: #ffd700;
          --color-ansi-bright-white: #ffffff;
          --color-ansi-bright-black: #d4d0ab;
          --color-ansi-bright-blue: #4791ff;
          --color-ansi-bright-cyan: #00e0e0;
          --color-ansi-bright-green: #abe338;
          --color-ansi-bright-magenta: #dcc6e0;
          --color-ansi-bright-red: #ffa07a;
          --color-ansi-bright-yellow: #ffd700;
          --importantDark: white;
          --backdrop: rgba(48, 48, 50, 0.75);
          --color: #d1d5db;
          --link: #d9bae8;
          --background: #232129;
          --primary: #452475;
          --primaryLight: #663399;
          --line: #464647;
          --codeFrame-bg: #18171d;
          --codeFrame-color: #d1d5db;
          --codeFrame-button-bg: #232129;
          --rootBoxShadowOpacity: 0.15;
          --ring-color: rgba(217, 186, 232, var(--ring-opacity));
        }
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Failed to render HTML</h1>
      <p>The error occurred on the page: <strong>${pagePath}</strong></p>
    </header>
    <main>
      <p>While trying to render the HTML for "${pagePath}" an error occurred. In order to make the build succeed you'll need to fix the error in your site. See the stacktrace below to find the culprit. Also be sure to read <a href="https://www.gatsbyjs.com/docs/debugging-html-builds/">Debugging HTML Builds</a> if you need more help.</p>
      <h2>Error</h2>
      <pre><code>${error.stack ? error.stack : `No codeFrame could be generated.`}</code></pre>
      <h2>Extra Details</h2>
      <p>Below you'll find additional data that might help you debug the error.</p>
      <details>
        <summary>Page Data</summary>
        <p>The page data contains some metadata about the affected page. If data from the GraphQL is undefined, try running the query in the GraphiQL IDE.</p>
        <pre><code>${JSON.stringify(pageDataForErrorMessage, null, 2)}</code></pre>
      </details>
    </main>
  </body>
</html>
`;
  return html;
};
const renderHTMLProd = async ({
  htmlComponentRendererPath,
  paths,
  envVars,
  sessionId,
  webpackCompilationHash
}) => {
  const publicDir = join(process.cwd(), `public`);
  const isPreview = process.env.GATSBY_IS_PREVIEW === `true`;
  const unsafeBuiltinsUsageByPagePath = {};
  const previewErrors = {};
  const allSlicesProps = {};

  // Check if we need to do setup and cache clearing. Within same session we can reuse memoized data,
  // but it's not safe to reuse them in different sessions. Check description of `lastSessionId` for more details
  if (sessionId !== lastSessionId) {
    clearCaches();

    // This is being executed in child process, so we need to set some vars
    // for modules that aren't bundled by webpack.
    envVars.forEach(([key, value]) => process.env[key] = value);
    htmlComponentRenderer = require(htmlComponentRendererPath);
    webpackStats = await (0, _clientAssetsForTemplate.readWebpackStats)(publicDir);
    lastSessionId = sessionId;
    if (global.unsafeBuiltinUsage && global.unsafeBuiltinUsage.length > 0) {
      unsafeBuiltinsUsageByPagePath[`__import_time__`] = global.unsafeBuiltinUsage;
    }
  }
  await _bluebird.default.map(paths, async pagePath => {
    try {
      const pageData = await (0, _pageData2.readPageData)(publicDir, pagePath);
      const resourcesForTemplate = await getResourcesForTemplate(pageData);
      const {
        html,
        unsafeBuiltinsUsage,
        sliceData
      } = await htmlComponentRenderer.default({
        pagePath,
        pageData,
        webpackCompilationHash,
        context: {
          isDuringBuild: true
        },
        ...resourcesForTemplate
      });
      allSlicesProps[pagePath] = sliceData;
      if (unsafeBuiltinsUsage.length > 0) {
        unsafeBuiltinsUsageByPagePath[pagePath] = unsafeBuiltinsUsage;
      }
      await _fsExtra.default.outputFile((0, _pageHtml.generateHtmlPath)(publicDir, pagePath), html);
    } catch (e) {
      if (e.unsafeBuiltinsUsage && e.unsafeBuiltinsUsage.length > 0) {
        unsafeBuiltinsUsageByPagePath[pagePath] = e.unsafeBuiltinsUsage;
      }
      const htmlRenderError = e;
      htmlRenderError.context = {
        path: pagePath,
        unsafeBuiltinsUsageByPagePath
      };

      // If we're in Preview-mode, write out a simple error html file.
      if (isPreview) {
        const html = await generatePreviewErrorPage({
          pagePath,
          publicDir,
          error: htmlRenderError
        });
        await _fsExtra.default.outputFile((0, _pageHtml.generateHtmlPath)(publicDir, pagePath), html);
        previewErrors[pagePath] = {
          e: htmlRenderError,
          name: htmlRenderError.name,
          message: htmlRenderError.message,
          code: htmlRenderError === null || htmlRenderError === void 0 ? void 0 : htmlRenderError.code,
          stack: htmlRenderError === null || htmlRenderError === void 0 ? void 0 : htmlRenderError.stack
        };
      } else {
        throw e;
      }
    }
  }, {
    concurrency: 2
  });
  return {
    unsafeBuiltinsUsageByPagePath,
    previewErrors,
    slicesPropsPerPage: allSlicesProps
  };
};

// TODO: remove when DEV_SSR is done
exports.renderHTMLProd = renderHTMLProd;
const renderHTMLDev = async ({
  htmlComponentRendererPath,
  paths,
  envVars,
  sessionId
}) => {
  const outputDir = join(process.cwd(), `.cache`, `develop-html`);

  // Check if we need to do setup and cache clearing. Within same session we can reuse memoized data,
  // but it's not safe to reuse them in different sessions. Check description of `lastSessionId` for more details
  if (sessionId !== lastSessionId) {
    clearCaches();

    // This is being executed in child process, so we need to set some vars
    // for modules that aren't bundled by webpack.
    envVars.forEach(([key, value]) => process.env[key] = value);
    htmlComponentRenderer = require(htmlComponentRendererPath);
    lastSessionId = sessionId;
  }
  return _bluebird.default.map(paths, async pagePath => {
    try {
      const htmlString = await htmlComponentRenderer.default({
        pagePath,
        context: {
          isDuringBuild: true
        }
      });
      return _fsExtra.default.outputFile((0, _pageHtml.generateHtmlPath)(outputDir, pagePath), htmlString);
    } catch (e) {
      // add some context to error so we can display more helpful message
      e.context = {
        path: pagePath
      };
      throw e;
    }
  }, {
    concurrency: 2
  });
};
exports.renderHTMLDev = renderHTMLDev;
async function renderPartialHydrationProd({
  paths,
  envVars,
  sessionId,
  pathPrefix
}) {
  const publicDir = join(process.cwd(), `public`);
  const unsafeBuiltinsUsageByPagePath = {};

  // Check if we need to do setup and cache clearing. Within same session we can reuse memoized data,
  // but it's not safe to reuse them in different sessions. Check description of `lastSessionId` for more details
  if (sessionId !== lastSessionId) {
    clearCaches();

    // This is being executed in child process, so we need to set some vars
    // for modules that aren't bundled by webpack.
    envVars.forEach(([key, value]) => process.env[key] = value);
    webpackStats = await (0, _clientAssetsForTemplate.readWebpackStats)(publicDir);
    lastSessionId = sessionId;
    if (global.unsafeBuiltinUsage && global.unsafeBuiltinUsage.length > 0) {
      unsafeBuiltinsUsageByPagePath[`__import_time__`] = global.unsafeBuiltinUsage;
    }
  }
  for (const pagePath of paths) {
    const pageData = await (0, _pageData2.readPageData)(publicDir, pagePath);

    // we collect static query hashes from page template and also all used slices on the page
    const staticQueryHashes = new Set(pageData.staticQueryHashes);
    if (pageData.slicesMap) {
      for (const sliceName of Object.values(pageData.slicesMap)) {
        const sliceDataPath = path.join(publicDir, `slice-data`, `${sliceName}.json`);
        const sliceData = await _fsExtra.default.readJSON(sliceDataPath);
        for (const staticQueryHash of sliceData.staticQueryHashes) {
          staticQueryHashes.add(staticQueryHash);
        }
      }
    }
    const {
      staticQueryContext
    } = await (0, _staticQueryUtils.getStaticQueryContext)(Array.from(staticQueryHashes));
    const pageRenderer = path.join(process.cwd(), `.cache`, `partial-hydration`, `render-page`);
    const {
      getPageChunk,
      StaticQueryContext,
      renderToPipeableStream,
      React
    } = require(pageRenderer);
    const chunk = await getPageChunk({
      componentChunkName: pageData.componentChunkName
    });
    const outputPath = (0, _pageData.generatePageDataPath)(path.join(process.cwd(), `public`), pagePath).replace(`.json`, `-rsc.json`);
    const stream = _fsExtra.default.createWriteStream(outputPath);
    const prefixedPagePath = pathPrefix ? `${pathPrefix}${pageData.path}` : pageData.path;
    const [pathname, search = ``] = prefixedPagePath.split(`?`);
    const {
      pipe
    } = renderToPipeableStream(React.createElement(StaticQueryContext.Provider, {
      value: staticQueryContext
    }, [
    // Make `useLocation` hook usuable in children
    React.createElement(_reachRouter.ServerLocation, {
      key: `partial-hydration-server-location`,
      url: pageData.path
    }, [React.createElement(chunk.default, {
      key: `partial-hydration-page`,
      data: pageData.result.data,
      pageContext: pageData.result.pageContext,
      // Make location available to page as props, logic extracted from `LocationProvider`
      location: {
        pathname,
        search,
        hash: ``
      }
    })])]), JSON.parse(_fsExtra.default.readFileSync(path.join(process.cwd(), `.cache`, `partial-hydration`, `manifest.json`), `utf8`)), {
      // React spits out the error here and does not emit it, we want to emit it
      // so we can reject with the error and handle it upstream
      onError: error => {
        const partialHydrationError = error;
        partialHydrationError.context = {
          path: pagePath,
          unsafeBuiltinsUsageByPagePath
        };
        stream.emit(`error`, error);
      }
    });
    await new Promise((resolve, reject) => {
      stream.on(`error`, error => {
        reject(error);
      });
      stream.on(`close`, () => {
        resolve();
      });
      pipe(stream);
    });
  }
}
async function renderSlices({
  slices,
  htmlComponentRendererPath,
  publicDir,
  slicesProps,
  staticQueriesBySliceTemplate
}) {
  const htmlComponentRenderer = require(htmlComponentRendererPath);
  for (const {
    sliceId,
    props,
    sliceName,
    hasChildren
  } of slicesProps) {
    const sliceEntry = slices.find(f => f[0] === sliceName);
    if (!sliceEntry) {
      throw new Error(`Slice name "${sliceName}" not found when rendering slices`);
    }
    const slice = sliceEntry[1];
    const staticQueryHashes = staticQueriesBySliceTemplate[slice.componentPath] || [];
    const {
      staticQueryContext
    } = await (0, _staticQueryUtils.getStaticQueryContext)(staticQueryHashes);
    const MAGIC_CHILDREN_STRING = `__DO_NOT_USE_OR_ELSE__`;
    const sliceData = await (0, _pageData2.readSliceData)(publicDir, slice.name);
    try {
      var _sliceData$result;
      const html = await htmlComponentRenderer.renderSlice({
        slice,
        staticQueryContext,
        props: {
          data: sliceData === null || sliceData === void 0 ? void 0 : (_sliceData$result = sliceData.result) === null || _sliceData$result === void 0 ? void 0 : _sliceData$result.data,
          ...(hasChildren ? {
            children: MAGIC_CHILDREN_STRING
          } : {}),
          ...props
        }
      });
      const split = html.split(MAGIC_CHILDREN_STRING);

      // TODO always generate both for now
      let index = 1;
      for (const htmlChunk of split) {
        await (0, _ensureFileContent.ensureFileContent)(path.join(publicDir, `_gatsby`, `slices`, `${sliceId}-${index}.html`), htmlChunk);
        index++;
      }
    } catch (err) {
      const renderSliceError = err;
      renderSliceError.context = {
        sliceName,
        sliceData,
        sliceProps: props
      };
      throw renderSliceError;
    }
  }
}
//# sourceMappingURL=render-html.js.map