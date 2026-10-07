"use strict";

exports.__esModule = true;
exports.appendPreloadHeaders = appendPreloadHeaders;
var path = _interopRequireWildcard(require("path"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _findPageByPath = require("./find-page-by-path");
var _pageData = require("./page-data");
var _redux = require("../redux");
var _pageMode = require("./page-mode");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Add preload link headers to responses for .html files. This allows browser to schedule fetching critical resources
 * to render a page faster. Without them it would result in network waterfall (fetch js script -> parse and execute -> start downloading data)
 * With them we can start downloading data before JS executes.
 */
async function appendPreloadHeaders(requestPath, res) {
  // add common.js and socket.io.js preload headers
  // TODO: make socket.io part not blocking - we don't need it anymore to render the page
  res.append(`Link`, `</commons.js>; rel=preload; as=script`);
  res.append(`Link`, `</socket.io/socket.io.js>; rel=preload; as=script`);
  const page = (0, _findPageByPath.findPageByPath)(_redux.store.getState(), requestPath, true);
  // we fallback to 404 pages - so there should always be a page (at worst dev-404)
  // this is just sanity check to not crash server in case it doesn't find anything
  if (page) {
    // add app-data.json preload
    res.append(`Link`, `</page-data/app-data.json>; rel=preload; as=fetch ; crossorigin`);

    // add page-data.json preload
    // our runtime also demands 404 and dev-404 page-data to be fetched to even render (see cache-dir/app.js)
    const pagePathsToPreload = [`/404.html`, `/dev-404-page/`];
    if ((0, _pageMode.getPageMode)(page) !== `SSR` && !pagePathsToPreload.includes(page.path)) {
      // let's make sure page path is first one (order shouldn't matter, just for reasonable order)
      pagePathsToPreload.unshift(page.path);
    }
    const staticQueriesToPreload = new Set();
    for (const pagePath of pagePathsToPreload) {
      res.append(`Link`, `</${path.join(`page-data`, encodeURI((0, _gatsbyCoreUtils.fixedPagePath)(pagePath)), `page-data.json`)}>; rel=preload; as=fetch ; crossorigin`);
      try {
        const pageData = await (0, _pageData.readPageData)(path.join(_redux.store.getState().program.directory, `public`), pagePath);

        // iterate over needed static queries and add them to Set of static queries to preload
        // Set will guarantee uniqueness in case queries are shared by requested page and 404 page.
        for (const staticQueryHash of pageData.staticQueryHashes) {
          staticQueriesToPreload.add(staticQueryHash);
        }
      } catch (e) {
        // there might be timing reasons why this fails - page-data file is not created yet
        // as page was just recently added (so page exists already but page-data doesn't yet)
        // in those cases we just do nothing
      }
    }

    // append accumulated static queries from pages we load
    for (const staticQueryHash of staticQueriesToPreload) {
      res.append(`Link`, `</page-data/sq/d/${staticQueryHash}.json>; rel=preload; as=fetch ; crossorigin`);
    }
  } else {
    // should we track cases when there is actually nothing returned to find cases
    // where we don't add preload headers if above assumption turns out to be wrong?
  }
}
//# sourceMappingURL=develop-preload-headers.js.map