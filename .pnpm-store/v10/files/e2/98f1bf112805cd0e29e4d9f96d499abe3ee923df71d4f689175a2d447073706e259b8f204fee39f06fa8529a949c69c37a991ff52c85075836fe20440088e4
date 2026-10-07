"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.enqueueFlush = enqueueFlush;
exports.flush = flush;
exports.handleStalePageData = handleStalePageData;
exports.isFlushEnqueued = isFlushEnqueued;
exports.modifyPageDataForErrorMessage = modifyPageDataForErrorMessage;
exports.pageDataExists = pageDataExists;
exports.readPageData = readPageData;
exports.readPageQueryResult = readPageQueryResult;
exports.readSliceData = readSliceData;
exports.removePageData = removePageData;
exports.savePageQueryResult = savePageQueryResult;
exports.waitUntilPageQueryResultsAreStored = waitUntilPageQueryResultsAreStored;
exports.writePageData = writePageData;
exports.writeSliceData = writeSliceData;
var _fs = require("@nodelib/fs.walk");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _fastq = _interopRequireDefault(require("fastq"));
var _path = _interopRequireDefault(require("path"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _websocketManager = require("./websocket-manager");
var _webpackStatus = require("./webpack-status");
var _redux = require("../redux");
var _queries = require("../redux/reducers/queries");
var _pageDataHelpers = require("./page-data-helpers");
exports.reverseFixedPagePath = _pageDataHelpers.reverseFixedPagePath;
var _nodeManifest = require("../utils/node-manifest");
var _pageMode = require("./page-mode");
var _ensureFileContent = require("./ensure-file-content");
async function readPageData(publicDir, pagePath) {
  const filePath = (0, _gatsbyCoreUtils.generatePageDataPath)(publicDir, pagePath);
  const rawPageData = await _fsExtra.default.readFile(filePath, `utf-8`);
  return JSON.parse(rawPageData);
}
async function removePageData(publicDir, pagePath) {
  const filePath = (0, _gatsbyCoreUtils.generatePageDataPath)(publicDir, pagePath);
  if (_fsExtra.default.existsSync(filePath)) {
    return await _fsExtra.default.remove(filePath);
  }
  return Promise.resolve();
}
function pageDataExists(publicDir, pagePath) {
  return _fsExtra.default.existsSync((0, _gatsbyCoreUtils.generatePageDataPath)(publicDir, pagePath));
}
let lmdbPageQueryResultsCache;
function getLMDBPageQueryResultsCache() {
  if (!lmdbPageQueryResultsCache) {
    const GatsbyCacheLmdbImpl = require(`./cache-lmdb`).default;
    lmdbPageQueryResultsCache = new GatsbyCacheLmdbImpl({
      name: `internal-tmp-query-results`,
      encoding: `string`
    }).init();
  }
  return lmdbPageQueryResultsCache;
}
let savePageQueryResultsPromise = Promise.resolve();
function waitUntilPageQueryResultsAreStored() {
  return savePageQueryResultsPromise;
}
async function savePageQueryResult(pagePath, stringifiedResult) {
  savePageQueryResultsPromise = getLMDBPageQueryResultsCache().set(pagePath, stringifiedResult);
}
async function readPageQueryResult(pagePath) {
  const stringifiedResult = await getLMDBPageQueryResultsCache().get(pagePath);
  if (typeof stringifiedResult === `string`) {
    return stringifiedResult;
  }
  throw new Error(`Couldn't find temp query result for "${pagePath}".`);
}
async function writePageData(publicDir, pageData, slicesUsedByTemplates, slices) {
  const result = await readPageQueryResult(pageData.path);
  const outputFilePath = (0, _gatsbyCoreUtils.generatePageDataPath)(publicDir, pageData.path);
  const body = (0, _pageDataHelpers.constructPageDataString)(pageData, result, slicesUsedByTemplates, slices);

  // transform asset size to kB (from bytes) to fit 64 bit to numbers
  const pageDataSize = Buffer.byteLength(body) / 1000;
  _redux.store.dispatch({
    type: `ADD_PAGE_DATA_STATS`,
    payload: {
      pagePath: pageData.path,
      filePath: outputFilePath,
      size: pageDataSize,
      pageDataHash: (0, _gatsbyCoreUtils.createContentDigest)(body)
    }
  });
  await (0, _ensureFileContent.ensureFileContent)(outputFilePath, body);
  return body;
}
async function writeSliceData(publicDir, {
  componentChunkName,
  name
}, staticQueryHashes) {
  const result = JSON.parse((await readPageQueryResult(`slice--${name}`)).toString());
  const outputFilePath = _path.default.join(publicDir, `slice-data`, `${name}.json`);
  const sliceData = {
    componentChunkName,
    result,
    staticQueryHashes
  };
  const body = JSON.stringify(sliceData);
  const sliceDataSize = Buffer.byteLength(body) / 1000;
  _redux.store.dispatch({
    type: `ADD_SLICE_DATA_STATS`,
    payload: {
      sliceName: name,
      filePath: outputFilePath,
      size: sliceDataSize,
      sliceDataHash: (0, _gatsbyCoreUtils.createContentDigest)(body)
    }
  });
  await (0, _ensureFileContent.ensureFileContent)(outputFilePath, body);
  return body;
}
async function readSliceData(publicDir, sliceName) {
  const filePath = _path.default.join(publicDir, `slice-data`, `${sliceName}.json`);
  const rawPageData = await _fsExtra.default.readFile(filePath, `utf-8`);
  return JSON.parse(rawPageData);
}
let isFlushPending = false;
let isFlushing = false;
function isFlushEnqueued() {
  return isFlushPending;
}
let staleNodeManifests = false;
const maxManifestIdsToLog = 50;
async function flush(parentSpan) {
  var _program$_;
  if (isFlushing) {
    // We're already in the middle of a flush
    return;
  }
  await waitUntilPageQueryResultsAreStored();
  isFlushPending = false;
  isFlushing = true;
  const {
    pendingPageDataWrites,
    pages,
    program,
    staticQueriesByTemplate,
    queries,
    slices,
    slicesByTemplate,
    nodeManifests
  } = _redux.store.getState();
  const isBuild = (program === null || program === void 0 ? void 0 : (_program$_ = program._) === null || _program$_ === void 0 ? void 0 : _program$_[0]) !== `develop`;
  const {
    pagePaths,
    sliceNames
  } = pendingPageDataWrites;
  let writePageDataActivity;
  let nodeManifestPagePathMap;
  if (pagePaths.size > 0) {
    // we process node manifests in this location because we need to add the manifestId to the page data.
    // We use this manifestId to determine if the page data is up to date when routing. Here we create a map of "pagePath": "manifestId" while processing and writing node manifest files.
    // We only do this when there are pending page-data writes because otherwise we could flush pending createNodeManifest calls before page-data.json files are written. Which means those page-data files wouldn't have the corresponding manifest id's written to them.
    nodeManifestPagePathMap = await (0, _nodeManifest.processNodeManifests)();
  } else if (nodeManifests.length > 0 && staleNodeManifests) {
    staleNodeManifests = false;
    _reporter.default.warn(`[gatsby] node manifests were created but no page-data.json files were written, so manifest ID's were not added to page-data.json files. This may be a bug or it may be due to a source plugin creating a node manifest for a node that did not change. Node manifest IDs: ${nodeManifests.map(n => n.manifestId).slice(0, maxManifestIdsToLog).join(`,`)}${nodeManifests.length > maxManifestIdsToLog ? ` There were ${nodeManifests.length - maxManifestIdsToLog} additional ID's that were not logged due to output length.` : ``}`);
    nodeManifestPagePathMap = await (0, _nodeManifest.processNodeManifests)();
  } else if (nodeManifests.length > 0) {
    staleNodeManifests = true;
  }
  if (pagePaths.size > 0 || sliceNames.size > 0) {
    writePageDataActivity = _reporter.default.createProgress(`Writing page-data.json and slice-data.json files to public directory`, pagePaths.size + sliceNames.size, 0, {
      id: `write-page-data-public-directory`,
      parentSpan
    });
    writePageDataActivity.start();
  }
  const flushQueue = (0, _fastq.default)(async (task, cb) => {
    if (task.type === `page`) {
      const {
        pagePath
      } = task;
      const page = pages.get(pagePath);
      let shouldClearPendingWrite = true;

      // It's a gloomy day in Bombay, let me tell you a short story...
      // Once upon a time, writing page-data.json files were atomic
      // After this change (#24808), they are not and this means that
      // between adding a pending write for a page and actually flushing
      // them, a page might not exist anymore щ（ﾟДﾟщ）
      // This is why we need this check
      if (page) {
        if (page.path && nodeManifestPagePathMap) {
          page.manifestId = nodeManifestPagePathMap.get(page.path);
        }
        if (!isBuild && process.env.GATSBY_QUERY_ON_DEMAND) {
          // check if already did run query for this page
          // with query-on-demand we might have pending page-data write due to
          // changes in static queries assigned to page template, but we might not
          // have query result for it
          const query = queries.trackedQueries.get(page.path);
          if (!query) {
            // this should not happen ever
            throw new Error(`We have a page, but we don't have registered query for it (???)`);
          }
          if ((0, _queries.hasFlag)(query.dirty, _queries.FLAG_DIRTY_NEW_PAGE)) {
            // query results are not written yet
            setImmediate(() => cb(null, true));
            return;
          }
        }

        // In develop we rely on QUERY_ON_DEMAND so we just go through
        // In build we only build these page-json for SSG pages
        if (!isBuild || isBuild && (0, _pageMode.getPageMode)(page) === `SSG`) {
          const staticQueryHashes = staticQueriesByTemplate.get(page.componentPath) || [];
          try {
            const result = await writePageData(_path.default.join(program.directory, `public`), {
              ...page,
              staticQueryHashes
            }, slicesByTemplate, slices);
            if (!isBuild) {
              _websocketManager.websocketManager.emitPageData({
                id: pagePath,
                result: JSON.parse(result)
              });
            }
          } catch (e) {
            shouldClearPendingWrite = false;
            _reporter.default.panicOnBuild(`Failed to write page-data for ""${page.path}`, e);
          }
          writePageDataActivity.tick();
        }
      }
      if (shouldClearPendingWrite) {
        _redux.store.dispatch({
          type: `CLEAR_PENDING_PAGE_DATA_WRITE`,
          payload: {
            page: pagePath
          }
        });
      }
    } else if (task.type === `slice`) {
      const {
        sliceName
      } = task;
      const slice = slices.get(sliceName);
      if (slice) {
        const staticQueryHashes = staticQueriesByTemplate.get(slice.componentPath) || [];
        const result = await writeSliceData(_path.default.join(program.directory, `public`), slice, staticQueryHashes);
        writePageDataActivity.tick();
        if (!isBuild) {
          _websocketManager.websocketManager.emitSliceData({
            id: sliceName,
            result: JSON.parse(result)
          });
        }
      }
      _redux.store.dispatch({
        type: `CLEAR_PENDING_SLICE_DATA_WRITE`,
        payload: {
          name: sliceName
        }
      });
    }

    // `setImmediate` below is a workaround against stack overflow
    // occurring when there are many non-SSG pages
    setImmediate(() => cb(null, true));
    return;
  }, 25);
  for (const pagePath of pagePaths) {
    flushQueue.push({
      type: `page`,
      pagePath
    }, () => {});
  }
  for (const sliceName of sliceNames) {
    flushQueue.push({
      type: `slice`,
      sliceName
    }, () => {});
  }
  if (!flushQueue.idle()) {
    await new Promise(resolve => {
      flushQueue.drain = resolve;
    });
  }
  if (writePageDataActivity) {
    writePageDataActivity.end();
  }
  isFlushing = false;
  return;
}
function enqueueFlush(parentSpan) {
  if ((0, _webpackStatus.isWebpackStatusPending)()) {
    isFlushPending = true;
  } else {
    flush(parentSpan);
  }
}
async function handleStalePageData(parentSpan) {
  if (!(await _fsExtra.default.pathExists(`public/page-data`))) {
    return;
  }

  // public directory might have stale page-data files from previous builds
  // we get the list of those and compare against expected page-data files
  // and remove ones that shouldn't be there anymore

  const activity = _reporter.default.activityTimer(`Cleaning up stale page-data`, {
    parentSpan
  });
  activity.start();
  const pageDataFilesFromPreviousBuilds = await new Promise((resolve, reject) => {
    const results = new Set();
    const stream = (0, _fs.walkStream)(`public/page-data`);
    stream.on(`data`, data => {
      if (data.name === `page-data.json`) {
        results.add(data.path);
      }
    });
    stream.on(`error`, e => {
      reject(e);
    });
    stream.on(`end`, () => resolve(results));
  });
  const expectedPageDataFiles = new Set();
  _redux.store.getState().pages.forEach(page => {
    expectedPageDataFiles.add((0, _gatsbyCoreUtils.generatePageDataPath)(`public`, page.path));
  });
  const deletionPromises = [];
  pageDataFilesFromPreviousBuilds.forEach(pageDataFilePath => {
    if (!expectedPageDataFiles.has(pageDataFilePath)) {
      deletionPromises.push(_fsExtra.default.remove(pageDataFilePath));
    }
  });
  await Promise.all(deletionPromises);
  activity.end();
}
function modifyPageDataForErrorMessage(input) {
  var _input$result, _input$result2, _input$result3;
  const optionalData = {
    ...((_input$result = input.result) !== null && _input$result !== void 0 && _input$result.pageContext ? {
      pageContext: input.result.pageContext
    } : {}),
    ...((_input$result2 = input.result) !== null && _input$result2 !== void 0 && _input$result2.pageContext ? {
      pageContext: input.result.pageContext
    } : {})
  };
  const optionalErrors = {
    ...((_input$result3 = input.result) !== null && _input$result3 !== void 0 && _input$result3.errors ? {
      graphql: input.result.errors
    } : {}),
    ...(input.getServerDataError ? {
      getServerData: input.getServerDataError
    } : {})
  };
  return {
    errors: {
      ...optionalErrors
    },
    path: input.path,
    matchPath: input.matchPath,
    slicesMap: input.slicesMap,
    ...optionalData
  };
}
//# sourceMappingURL=page-data.js.map