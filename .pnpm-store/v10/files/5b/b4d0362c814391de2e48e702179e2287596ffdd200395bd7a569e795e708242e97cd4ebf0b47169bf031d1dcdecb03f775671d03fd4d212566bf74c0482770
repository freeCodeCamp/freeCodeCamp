"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.restartWorker = exports.renderDevHTML = exports.initDevWorkerPool = void 0;
var _gatsbyWorker = require("gatsby-worker");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _constants = require("../../constants");
var _requiresWriter = require("../../bootstrap/requires-writer");
var _findPageByPath = require("../find-page-by-path");
var _getPageData = require("../get-page-data");
var _buildHtml = require("../../commands/build-html");
var _getServerData = require("../get-server-data");
var _pageMode = require("../page-mode");
var _parseError = require("./parse-error");
const startWorker = () => {
  const newWorker = new _gatsbyWorker.WorkerPool(require.resolve(`./render-dev-html-child`), {
    numWorkers: 1,
    env: {
      NODE_ENV: (0, _gatsbyCoreUtils.isCI)() ? `production` : `development`,
      forceColors: `true`,
      GATSBY_EXPERIMENTAL_DEV_SSR: `true`
    }
  });
  return newWorker;
};
let worker;
const initDevWorkerPool = () => {
  worker = startWorker();
};
exports.initDevWorkerPool = initDevWorkerPool;
let changeCount = 0;
const restartWorker = htmlComponentRendererPath => {
  changeCount += 1;
  // Forking is expensive — each time we re-require the outputted webpack
  // file, memory grows ~10 mb — 25 regenerations means ~250mb which seems
  // like an acceptable amount of memory to grow before we reclaim it
  // by rebooting the worker process.
  if (changeCount > 25) {
    const oldWorker = worker;
    const newWorker = startWorker();
    worker = newWorker;
    oldWorker.end();
    changeCount = 0;
  } else {
    worker.all.deleteModuleCache(htmlComponentRendererPath);
    delete require.cache[require.resolve(htmlComponentRendererPath)];
  }
};
exports.restartWorker = restartWorker;
const searchFileForString = (substring, filePath) => new Promise(resolve => {
  const escapedSubString = substring.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

  // See if the chunk is in the newComponents array (not the notVisited).
  const chunkRegex = RegExp(`exports.ssrComponents.*${escapedSubString}.*}`, `gs`);
  const stream = _fsExtra.default.createReadStream(filePath);
  let found = false;
  stream.on(`data`, function (d) {
    if (chunkRegex.test(d.toString())) {
      found = true;
      stream.close();
      resolve(found);
    }
  });
  stream.on(`error`, function () {
    resolve(found);
  });
  stream.on(`close`, function () {
    resolve(found);
  });
});
const ensurePathComponentInSSRBundle = async (page, directory, allowTimedFallback) => {
  // This shouldn't happen.
  if (!page) {
    _reporter.default.panic(`page not found`, page);
  }

  // Now check if it's written to the correct path
  const htmlComponentRendererPath = _path.default.join(directory, _constants.ROUTES_DIRECTORY, `render-page.js`);

  // This search takes 1-10ms
  // We do it as there can be a race conditions where two pages
  // are requested at the same time which means that both are told render-page.js
  // has changed when the first page is complete meaning the second
  // page's component won't be in the render meaning its SSR will fail.
  let found = await searchFileForString(page.componentChunkName, htmlComponentRendererPath);
  if (!found) {
    await new Promise(resolve => {
      let readAttempts = 0;
      const searchForStringInterval = setInterval(async () => {
        readAttempts += 1;
        found = await searchFileForString(page.componentChunkName, htmlComponentRendererPath);
        if (found || allowTimedFallback && readAttempts > 5) {
          clearInterval(searchForStringInterval);
          resolve();
        }
      }, 300);
    });
  }
  return found;
};
const renderDevHTML = ({
  path,
  page,
  skipSsr = false,
  store,
  error = undefined,
  htmlComponentRendererPath,
  allowTimedFallback,
  directory,
  req
}) =>
// eslint-disable-next-line no-async-promise-executor
new Promise(async (resolve, reject) => {
  (0, _requiresWriter.startListener)();
  let pageObj;
  if (!page) {
    pageObj = (0, _findPageByPath.findPageByPath)(store.getState(), path);
  } else {
    pageObj = page;
  }
  let isClientOnlyPage = false;
  if (pageObj.matchPath) {
    isClientOnlyPage = true;
  }
  const {
    actions
  } = require(`../../redux/actions`);
  const {
    createServerVisitedPage
  } = actions;
  // Record this page was requested. This will kick off adding its page
  // component to the ssr bundle (if that's not already happened)
  store.dispatch(createServerVisitedPage(pageObj.componentChunkName));

  // Ensure the query has been run and written out.
  try {
    await (0, _getPageData.getPageData)(pageObj.path,
    // 15000 is default timeout for this function - we keep it here for scenarios
    // that allow waiting on it, and set to impossibly high value in case
    // we want to ensure SSR happens
    allowTimedFallback ? 15000 : Number.MAX_SAFE_INTEGER);
  } catch {
    // If we can't get the page, it was probably deleted recently
    // so let's just do a 404 page.
    return reject(`404 page`);
  }

  // Resume the webpack watcher and wait for any compilation necessary to happen.
  // We timeout after 1.5s as the user might not care per se about SSR.
  //
  // We pause and resume so there's no excess webpack activity during normal development.
  const {
    recompileAndResumeWatching,
    needToRecompileSSRBundle
  } = (0, _buildHtml.getDevSSRWebpack)();
  let stopWatching = undefined;
  if (recompileAndResumeWatching && needToRecompileSSRBundle) {
    stopWatching = await recompileAndResumeWatching(allowTimedFallback);
  }

  // Wait for html-renderer to update w/ the page component.
  // Note that webpack is still in watching mode, so even if it didn't recompile
  // everything needed yet (there is debouncing happening in webpack), it still
  // might update the bundle (until we call `stopWatching()` after check that component
  // is in bundle)
  const found = await ensurePathComponentInSSRBundle(pageObj, directory, allowTimedFallback);
  if (stopWatching) {
    stopWatching();
  }

  // If we can't find the page, just force set isClientOnlyPage
  // which skips rendering the body (so we just serve a shell)
  // and the page will render normally on the client.
  //
  // This only happens on the first time we try to render a page component
  // and it's taking a while to bundle its page component.
  if (!found) {
    isClientOnlyPage = true;
  }

  // If the user added the query string `skip-ssr`, we always just render an empty shell.
  if (skipSsr) {
    isClientOnlyPage = true;
  }
  let serverData = undefined;
  const pageMode = (0, _pageMode.getPageMode)(pageObj);
  if (pageMode === `SSR` && found && !isClientOnlyPage) {
    const renderer = require(htmlComponentRendererPath);
    const componentInstance = await renderer.getPageChunk(pageObj);
    try {
      serverData = await (0, _getServerData.getServerData)(req, pageObj, req.path, componentInstance);
    } catch (err) {
      return reject((0, _parseError.parseError)({
        err,
        directory,
        componentPath: pageObj.component,
        htmlComponentRendererPath
      }));
    }
  }
  const publicDir = _path.default.join(directory, `public`);
  try {
    var _serverData;
    const htmlString = await worker.single.renderHTML({
      path,
      componentPath: pageObj.component,
      htmlComponentRendererPath,
      directory,
      publicDir,
      isClientOnlyPage,
      error,
      serverData: (_serverData = serverData) === null || _serverData === void 0 ? void 0 : _serverData.props
    });
    return resolve({
      html: htmlString,
      serverData
    });
  } catch (error) {
    return reject(error);
  }
});
exports.renderDevHTML = renderDevHTML;
//# sourceMappingURL=render-dev-html.js.map