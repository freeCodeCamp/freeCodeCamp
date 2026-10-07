"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.fetchRemoteFile = fetchRemoteFile;
var _fileType = _interopRequireDefault(require("file-type"));
var _path = _interopRequireDefault(require("path"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _fastq = _interopRequireDefault(require("fastq"));
var _createContentDigest = require("./create-content-digest");
var _filenameUtils = require("./filename-utils");
var _path2 = require("./path");
var _fetchFile = require("./remote-file-utils/fetch-file");
var _getStorage = require("./utils/get-storage");
var _mutex = require("./mutex");
const GATSBY_CONCURRENT_DOWNLOAD = process.env.GATSBY_CONCURRENT_DOWNLOAD ? parseInt(process.env.GATSBY_CONCURRENT_DOWNLOAD, 10) || 0 : 50;
const alreadyCopiedFiles = new Set();
/**
 * Downloads a remote file to disk
 */
async function fetchRemoteFile(args) {
  // when cachekey is present we can do more persistance
  if (args.cacheKey) {
    const storage = (0, _getStorage.getStorage)((0, _getStorage.getDatabaseDir)());
    const info = storage.remoteFileInfo.get(args.url);
    const fileDirectory = args.cache ? args.cache.directory : args.directory;
    if ((info === null || info === void 0 ? void 0 : info.cacheKey) === args.cacheKey && fileDirectory) {
      const cachedPath = _path.default.join(info.directory, info.path);
      const downloadPath = _path.default.join(fileDirectory, info.path);
      if (await _fsExtra.default.pathExists(cachedPath)) {
        // If the cached directory is not part of the public directory, we don't need to copy it
        // as it won't be part of the build.
        if (isPublicPath(downloadPath) && cachedPath !== downloadPath) {
          return copyCachedPathToDownloadPath({
            cachedPath,
            downloadPath
          });
        }
        return cachedPath;
      }
    }
  }
  return pushTask({
    args
  });
}
function isPublicPath(downloadPath) {
  var _global$__GATSBY$root, _global$__GATSBY;
  return downloadPath.startsWith(_path.default.join((_global$__GATSBY$root = (_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.root) !== null && _global$__GATSBY$root !== void 0 ? _global$__GATSBY$root : process.cwd(), `public`));
}
async function copyCachedPathToDownloadPath({
  cachedPath,
  downloadPath
}) {
  // Create a mutex to do our copy - we could do a md5 hash check as well but that's also expensive
  if (!alreadyCopiedFiles.has(downloadPath)) {
    const copyFileMutex = (0, _mutex.createMutex)(`gatsby-core-utils:copy-fetch:${downloadPath}`, 200);
    await copyFileMutex.acquire();
    if (!alreadyCopiedFiles.has(downloadPath)) {
      await _fsExtra.default.copy(cachedPath, downloadPath, {
        overwrite: true
      });
    }
    alreadyCopiedFiles.add(downloadPath);
    await copyFileMutex.release();
  }
  return downloadPath;
}
const queue = (0, _fastq.default)(
/**
 * fetchWorker
 * --
 * Handle fetch requests that are pushed in to the Queue
 */
async function fetchWorker(task, cb) {
  try {
    return void cb(null, await fetchFile(task.args));
  } catch (e) {
    return void cb(e);
  }
}, GATSBY_CONCURRENT_DOWNLOAD);

/**
 * pushTask
 * --
 * pushes a task in to the Queue and the processing cache
 *
 * Promisfy a task in queue
 * @param {CreateRemoteFileNodePayload} task
 * @return {Promise<Buffer | string>}
 */
async function pushTask(task) {
  return new Promise((resolve, reject) => {
    queue.push(task, (err, node) => {
      if (!err) {
        resolve(node);
      } else {
        reject(err);
      }
    });
  });
}
async function fetchFile({
  url,
  cache,
  directory,
  auth = {},
  httpHeaders = {},
  ext,
  name,
  cacheKey,
  excludeDigest
}) {
  var _global$__GATSBY$buil, _global$__GATSBY2;
  // global introduced in gatsby 4.0.0
  const BUILD_ID = (_global$__GATSBY$buil = (_global$__GATSBY2 = global.__GATSBY) === null || _global$__GATSBY2 === void 0 ? void 0 : _global$__GATSBY2.buildId) !== null && _global$__GATSBY$buil !== void 0 ? _global$__GATSBY$buil : ``;
  const fileDirectory = cache ? cache.directory : directory;
  const storage = (0, _getStorage.getStorage)((0, _getStorage.getDatabaseDir)());
  if (!cache && !directory) {
    throw new Error(`You must specify either a cache or a directory`);
  }
  const fetchFileMutex = (0, _mutex.createMutex)(`gatsby-core-utils:fetch:${url}`);
  await fetchFileMutex.acquire();

  // Fetch the file.
  try {
    var _cachedEntry$headers;
    const digest = (0, _createContentDigest.createContentDigest)(url);
    const finalDirectory = excludeDigest ? _path.default.resolve(fileDirectory) : _path.default.join(fileDirectory, digest);
    if (!name) {
      name = (0, _filenameUtils.getRemoteFileName)(url);
    }
    if (!ext) {
      ext = (0, _filenameUtils.getRemoteFileExtension)(url);
    }
    const cachedEntry = await storage.remoteFileInfo.get(url);
    const inFlightValue = getInFlightObject(url, BUILD_ID);
    if (inFlightValue) {
      const downloadPath = (0, _filenameUtils.createFilePath)(finalDirectory, name, ext);
      if (!isPublicPath(finalDirectory) || downloadPath === inFlightValue) {
        return inFlightValue;
      }
      return await copyCachedPathToDownloadPath({
        cachedPath: inFlightValue,
        downloadPath: (0, _filenameUtils.createFilePath)(finalDirectory, name, ext)
      });
    }

    // Add htaccess authentication if passed in. This isn't particularly
    // extensible. We should define a proper API that we validate.
    const httpOptions = {};
    if (auth && (auth.htaccess_pass || auth.htaccess_user)) {
      httpOptions.username = auth.htaccess_user;
      httpOptions.password = auth.htaccess_pass;
    }
    await _fsExtra.default.ensureDir(finalDirectory);
    const tmpFilename = (0, _filenameUtils.createFilePath)(fileDirectory, `tmp-${digest}`, ext);
    let filename = (0, _filenameUtils.createFilePath)(finalDirectory, name, ext);

    // See if there's response headers for this url
    // from a previous request.
    const headers = {
      ...httpHeaders
    };
    if (cachedEntry !== null && cachedEntry !== void 0 && (_cachedEntry$headers = cachedEntry.headers) !== null && _cachedEntry$headers !== void 0 && _cachedEntry$headers.etag && (await _fsExtra.default.pathExists(filename))) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      headers[`If-None-Match`] = cachedEntry.headers.etag;
    }
    const response = await (0, _fetchFile.requestRemoteNode)(url, headers, tmpFilename, httpOptions);
    if (response.statusCode === 200) {
      // Save the response headers for future requests.
      // If the user did not provide an extension and we couldn't get one from remote file, try and guess one
      if (!ext) {
        // if this is fresh response - try to guess extension and cache result for future
        const filetype = await _fileType.default.fromFile(tmpFilename);
        if (filetype) {
          ext = `.${filetype.ext}`;
          filename += ext;
        }
      }
      await _fsExtra.default.move(tmpFilename, filename, {
        overwrite: true
      });
      const slashedDirectory = (0, _path2.slash)(finalDirectory);
      await setInFlightObject(url, BUILD_ID, {
        cacheKey,
        extension: ext,
        headers: response.headers.etag ? {
          etag: response.headers.etag
        } : {},
        directory: slashedDirectory,
        path: (0, _path2.slash)(filename).replace(`${slashedDirectory}/`, ``)
      });
    } else if (response.statusCode === 304) {
      await _fsExtra.default.remove(tmpFilename);
    }
    return filename;
  } finally {
    await fetchFileMutex.release();
  }
}
const inFlightMap = new Map();
function getInFlightObject(key, buildId) {
  if (!buildId) {
    return inFlightMap.get(key);
  }
  const remoteFile = (0, _getStorage.getStorage)((0, _getStorage.getDatabaseDir)()).remoteFileInfo.get(key);
  // if buildId match we know it's the same build and it already processed this url this build
  if (remoteFile && remoteFile.buildId === buildId) {
    return _path.default.join(remoteFile.directory, remoteFile.path);
  }
  return undefined;
}
async function setInFlightObject(key, buildId, value) {
  if (!buildId) {
    inFlightMap.set(key, _path.default.join(value.directory, value.path));
  }
  await (0, _getStorage.getStorage)((0, _getStorage.getDatabaseDir)()).remoteFileInfo.put(key, {
    ...value,
    buildId
  });
}