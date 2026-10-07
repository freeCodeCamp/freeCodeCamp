"use strict";

exports.__esModule = true;
exports.RETRY_INTERVAL = void 0;
exports.getPageData = getPageData;
var path = _interopRequireWildcard(require("path"));
var _redux = require("../redux");
var _pageData = require("./page-data");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DEFAULT_WAIT_TIMEOUT = 15 * 1000;
const RETRY_INTERVAL = 5 * 1000;
exports.RETRY_INTERVAL = RETRY_INTERVAL;
async function getPageData(pagePath, waitForMS = DEFAULT_WAIT_TIMEOUT) {
  return doGetPageData(pagePath, waitForMS, waitForMS);
}
async function doGetPageData(pagePath, waitForMS, initialWaitForMs) {
  const {
    queries,
    pendingPageDataWrites,
    pages
  } = _redux.store.getState();
  if (!pages.has(pagePath)) {
    throw new Error(`Page "${pagePath}" doesn't exist. It might have been deleted recently.`);
  }
  const query = queries.trackedQueries.get(pagePath);
  if (!query) {
    throw new Error(`Could not find query ${pagePath}`);
  }
  if (query.running !== 0) {
    return waitNextPageData(pagePath, waitForMS, initialWaitForMs);
  }
  if (query.dirty !== 0) {
    _redux.emitter.emit(`QUERY_RUN_REQUESTED`, {
      pagePath
    });
    return waitNextPageData(pagePath, waitForMS, initialWaitForMs);
  }
  if (pendingPageDataWrites.pagePaths.has(pagePath)) {
    return waitNextPageData(pagePath, waitForMS, initialWaitForMs);
  }
  // Results are up-to-date
  return readPageData(pagePath);
}
async function waitNextPageData(pagePath, remainingTime, initialWaitForMs) {
  if (remainingTime > 0) {
    return new Promise(resolve => {
      _redux.emitter.on(`CLEAR_PENDING_PAGE_DATA_WRITE`, listener);
      const timeout = setTimeout(() => {
        _redux.emitter.off(`CLEAR_PENDING_PAGE_DATA_WRITE`, listener);
        resolve(doGetPageData(pagePath, Math.max(remainingTime - RETRY_INTERVAL, 0), initialWaitForMs));
      }, Math.min(RETRY_INTERVAL, remainingTime));
      function listener(data) {
        if (data.payload.page === pagePath) {
          clearTimeout(timeout);
          _redux.emitter.off(`CLEAR_PENDING_PAGE_DATA_WRITE`, listener);
          // page-data was flushed, but we don't know if query wasn't marked as stale in meantime
          // so we call `doGetPageData` again that will make checks and wait for fresh result
          // or resolve immediately if it's not stale.
          // Remaining time change is not actually "correct", but timeout overall is meant to ensure
          // we do resolve (or reject) eventually, it doesn't have to be 100% correct - we do decrease
          // it slightly to not end up in infinite loop situations.
          // We also need to delay calling `doGetPageData` because it can cause adding another `CLEAR_PENDING_PAGE_DATA_WRITE`
          // callback in same tick and `mett` will run this callback (because it will happen before current callback finishes
          // and `mett` doesn't guarantee it will only run callbacks registered before message was emitted)
          process.nextTick(() => resolve(doGetPageData(pagePath, Math.max(remainingTime - RETRY_INTERVAL / 5, 0), initialWaitForMs)));
        }
      }
    });
  } else {
    // not ideal ... but try to push results we might have (stale)
    // or fail/reject
    return readPageData(pagePath).catch(() => {
      throw new Error(`Couldn't get query results for "${pagePath}" in ${(initialWaitForMs / 1000).toFixed(3)}s.`);
    });
  }
}
async function readPageData(pagePath) {
  const {
    program
  } = _redux.store.getState();
  try {
    return await (0, _pageData.readPageData)(path.join(program.directory, `public`), pagePath);
  } catch (err) {
    throw new Error(`Error loading a result for the page query in "${pagePath}". Query was not run and no cached result was found.`);
  }
}
//# sourceMappingURL=get-page-data.js.map