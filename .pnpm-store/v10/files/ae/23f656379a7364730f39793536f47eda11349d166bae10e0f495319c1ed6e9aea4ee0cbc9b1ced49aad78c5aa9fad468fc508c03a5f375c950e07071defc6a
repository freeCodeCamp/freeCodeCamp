"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.guessSafeChunkSize = guessSafeChunkSize;
exports.readFromCache = readFromCache;
exports.writeToCache = writeToCache;
var _path = _interopRequireDefault(require("path"));
var _os = _interopRequireDefault(require("os"));
var _v = _interopRequireDefault(require("v8"));
var _fsExtra = require("fs-extra");
var _glob = require("glob");
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
const getReduxCacheFolder = () =>
// This is a function for the case that somebody does a process.chdir (#19800)
_path.default.join(process.cwd(), `.cache/redux`);
const getWorkerSlicesFolder = () =>
// This is a function for the case that somebody does a process.chdir (#19800)
_path.default.join(process.cwd(), `.cache/worker`);
function reduxSharedFile(dir) {
  return _path.default.join(dir, `redux.rest.state`);
}
function reduxChunkedNodesFilePrefix(dir) {
  return _path.default.join(dir, `redux.node.state_`);
}
function reduxChunkedPagesFilePrefix(dir) {
  return _path.default.join(dir, `redux.page.state_`);
}
function reduxWorkerSlicesPrefix(dir) {
  return _path.default.join(dir, `redux.worker.slices_`);
}
function readFromCache(slices, optionalPrefix = ``) {
  // The cache is stored in two steps; the nodes and pages in chunks and the rest
  // First we revive the rest, then we inject the nodes and pages into that obj (if any)
  // Each chunk is stored in its own file, this circumvents max buffer lengths
  // for sites with a _lot_ of content. Since all nodes / pages go into a Map, the order
  // of reading them is not relevant.

  let cacheFolder = getReduxCacheFolder();
  if (slices) {
    cacheFolder = getWorkerSlicesFolder();
    return _v.default.deserialize((0, _fsExtra.readFileSync)(reduxWorkerSlicesPrefix(cacheFolder) + `${optionalPrefix}_` + (0, _gatsbyCoreUtils.createContentDigest)(slices)));
  }
  const obj = _v.default.deserialize((0, _fsExtra.readFileSync)(reduxSharedFile(cacheFolder)));

  // Note: at 1M pages, this will be 1M/chunkSize chunks (ie. 1m/10k=100)
  const nodesChunks = (0, _glob.sync)(reduxChunkedNodesFilePrefix(cacheFolder) + `*`).map(file => _v.default.deserialize((0, _fsExtra.readFileSync)(file)));
  const nodes = [].concat(...nodesChunks);
  if (!nodesChunks.length) {
    _reporter.default.info(`Cache exists but contains no nodes. There should be at least some nodes available so it seems the cache was corrupted. Disregarding the cache and proceeding as if there was none.`);
    return {};
  }
  obj.nodes = new Map(nodes);

  // Note: at 1M pages, this will be 1M/chunkSize chunks (ie. 1m/10k=100)
  const pagesChunks = (0, _glob.sync)(reduxChunkedPagesFilePrefix(cacheFolder) + `*`).map(file => _v.default.deserialize((0, _fsExtra.readFileSync)(file)));
  const pages = [].concat(...pagesChunks);
  obj.pages = new Map(pages);
  return obj;
}
function guessSafeChunkSize(values, showMaxSizeWarning = false) {
  // Pick a few random elements and measure their size then pick a chunk size
  // ceiling based on the worst case. Each test takes time so there's trade-off.
  // This attempts to prevent small sites with very large pages from OOMing.
  // This heuristic could still fail if it randomly grabs the smallest nodes.
  // TODO: test a few nodes per each type instead of from all nodes

  const nodesToTest = 11; // Very arbitrary number
  const valueCount = values.length;
  const step = Math.max(1, Math.ceil(valueCount / nodesToTest));
  let maxSize = 0;
  for (let i = 0; i < valueCount; i += step) {
    const size = _v.default.serialize(values[i]).length;
    maxSize = Math.max(size, maxSize);
  }

  // Sends a warning once if any of the chunkSizes exceeds approx 500kb limit
  if (showMaxSizeWarning && maxSize > 500000) {
    _reporter.default.warn(`The size of at least one page context chunk exceeded 500kb, which could lead to degraded performance. Consider putting less data in the page context.`);
  }

  // Max size of a Buffer is 2gb (yeah, we're assuming 64bit system)
  // https://stackoverflow.com/questions/8974375/whats-the-maximum-size-of-a-node-js-buffer
  // Use 1.5gb as the target ceiling, allowing for some margin of error
  return Math.floor(1.5 * 1024 * 1024 * 1024 / maxSize);
}
function prepareCacheFolder(targetDir, contents) {
  // Temporarily save the nodes and pages and remove them from the main redux store
  // This prevents an OOM when the page nodes collectively contain too much data
  const nodesMap = contents.nodes;
  contents.nodes = undefined;
  const pagesMap = contents.pages;
  contents.pages = undefined;
  (0, _fsExtra.writeFileSync)(reduxSharedFile(targetDir), _v.default.serialize(contents));

  // Now restore them on the redux store
  contents.nodes = nodesMap;
  contents.pages = pagesMap;
  if (nodesMap) {
    if (nodesMap.size === 0) {
      // Nodes are actually stored in LMDB.
      // But we need at least one node in redux state to workaround the warning above:
      // "Cache exists but contains no nodes..." (when loading cache).
      const dummyNode = {
        id: `dummy-node-id`,
        parent: ``,
        children: [],
        internal: {
          type: `DummyNode`,
          contentDigest: `dummy-node`,
          counter: 0,
          owner: ``
        },
        fields: []
      };
      nodesMap.set(dummyNode.id, dummyNode);
    }
    // Now store the nodes separately, chunk size determined by a heuristic
    const values = [...nodesMap.entries()];
    const chunkSize = guessSafeChunkSize(values);
    const chunks = Math.ceil(values.length / chunkSize);
    for (let i = 0; i < chunks; ++i) {
      (0, _fsExtra.writeFileSync)(reduxChunkedNodesFilePrefix(targetDir) + i, _v.default.serialize(values.slice(i * chunkSize, i * chunkSize + chunkSize)));
    }
  }
  if (pagesMap) {
    // Now store the nodes separately, chunk size determined by a heuristic
    const values = [...pagesMap.entries()];
    const chunkSize = guessSafeChunkSize(values, true);
    const chunks = Math.ceil(values.length / chunkSize);
    for (let i = 0; i < chunks; ++i) {
      (0, _fsExtra.writeFileSync)(reduxChunkedPagesFilePrefix(targetDir) + i, _v.default.serialize(values.slice(i * chunkSize, i * chunkSize + chunkSize)));
    }
  }
}
function safelyRenameToBak(cacheFolder) {
  // Basically try to work around the potential of previous renamed caches
  // not being removed for whatever reason. _That_ should not be a blocker.
  const tmpSuffix = `.bak`;
  let suffixCounter = 0;
  let bakName = cacheFolder + tmpSuffix; // Start without number

  while ((0, _fsExtra.existsSync)(bakName)) {
    ++suffixCounter;
    bakName = cacheFolder + tmpSuffix + suffixCounter;
  }
  (0, _fsExtra.moveSync)(cacheFolder, bakName);
  return bakName;
}
function writeToCache(contents, slices, optionalPrefix = ``) {
  // Writing the "slices" also to the "redux" folder introduces subtle bugs when
  // e.g. the whole folder gets replaced some "slices" are lost
  // Thus they get written to dedicated "worker" folder
  if (slices) {
    const cacheFolder = getWorkerSlicesFolder();
    (0, _fsExtra.outputFileSync)(reduxWorkerSlicesPrefix(cacheFolder) + `${optionalPrefix}_` + (0, _gatsbyCoreUtils.createContentDigest)(slices), _v.default.serialize(contents));
    return;
  }

  // Note: this should be a transactional operation. So work in a tmp dir and
  // make sure the cache cannot be left in a corruptable state due to errors.

  const tmpDir = (0, _fsExtra.mkdtempSync)(_path.default.join(_os.default.tmpdir(), `reduxcache`)); // linux / windows

  prepareCacheFolder(tmpDir, contents);

  // Replace old cache folder with new. If the first rename fails, the cache
  // is just stale. If the second rename fails, the cache is empty. In either
  // case the cache is not left in a corrupt state.

  const reduxCacheFolder = getReduxCacheFolder();
  let bakName = ``;
  if ((0, _fsExtra.existsSync)(reduxCacheFolder)) {
    // Don't drop until after swapping over (renaming is less likely to fail)
    bakName = safelyRenameToBak(reduxCacheFolder);
  }

  // The redux cache folder should now not exist so we can rename our tmp to it
  (0, _fsExtra.moveSync)(tmpDir, reduxCacheFolder);

  // Now try to yolorimraf the old cache folder
  try {
    if (bakName !== ``) {
      (0, _fsExtra.removeSync)(bakName);
    }
  } catch (e) {
    _reporter.default.warn(`Non-fatal: Deleting the old cache folder failed, left behind in \`${bakName}\`. Rimraf reported this error: ${e}`);
  }
}
//# sourceMappingURL=persist.js.map