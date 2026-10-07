import fileType from "file-type";
import path from "path";
import fs from "fs-extra";
import Queue from "fastq";
import { createContentDigest } from "./create-content-digest";
import { getRemoteFileName, getRemoteFileExtension, createFilePath } from "./filename-utils";
import { slash } from "./path";
import { requestRemoteNode } from "./remote-file-utils/fetch-file";
import { getStorage, getDatabaseDir } from "./utils/get-storage";
import { createMutex } from "./mutex";
const GATSBY_CONCURRENT_DOWNLOAD = process.env.GATSBY_CONCURRENT_DOWNLOAD ? parseInt(process.env.GATSBY_CONCURRENT_DOWNLOAD, 10) || 0 : 50;
const alreadyCopiedFiles = new Set();
/**
 * Downloads a remote file to disk
 */
export async function fetchRemoteFile(args) {
  // when cachekey is present we can do more persistance
  if (args.cacheKey) {
    const storage = getStorage(getDatabaseDir());
    const info = storage.remoteFileInfo.get(args.url);
    const fileDirectory = args.cache ? args.cache.directory : args.directory;
    if ((info === null || info === void 0 ? void 0 : info.cacheKey) === args.cacheKey && fileDirectory) {
      const cachedPath = path.join(info.directory, info.path);
      const downloadPath = path.join(fileDirectory, info.path);
      if (await fs.pathExists(cachedPath)) {
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
  return downloadPath.startsWith(path.join((_global$__GATSBY$root = (_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.root) !== null && _global$__GATSBY$root !== void 0 ? _global$__GATSBY$root : process.cwd(), `public`));
}
async function copyCachedPathToDownloadPath({
  cachedPath,
  downloadPath
}) {
  // Create a mutex to do our copy - we could do a md5 hash check as well but that's also expensive
  if (!alreadyCopiedFiles.has(downloadPath)) {
    const copyFileMutex = createMutex(`gatsby-core-utils:copy-fetch:${downloadPath}`, 200);
    await copyFileMutex.acquire();
    if (!alreadyCopiedFiles.has(downloadPath)) {
      await fs.copy(cachedPath, downloadPath, {
        overwrite: true
      });
    }
    alreadyCopiedFiles.add(downloadPath);
    await copyFileMutex.release();
  }
  return downloadPath;
}
const queue = Queue(
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
  const storage = getStorage(getDatabaseDir());
  if (!cache && !directory) {
    throw new Error(`You must specify either a cache or a directory`);
  }
  const fetchFileMutex = createMutex(`gatsby-core-utils:fetch:${url}`);
  await fetchFileMutex.acquire();

  // Fetch the file.
  try {
    var _cachedEntry$headers;
    const digest = createContentDigest(url);
    const finalDirectory = excludeDigest ? path.resolve(fileDirectory) : path.join(fileDirectory, digest);
    if (!name) {
      name = getRemoteFileName(url);
    }
    if (!ext) {
      ext = getRemoteFileExtension(url);
    }
    const cachedEntry = await storage.remoteFileInfo.get(url);
    const inFlightValue = getInFlightObject(url, BUILD_ID);
    if (inFlightValue) {
      const downloadPath = createFilePath(finalDirectory, name, ext);
      if (!isPublicPath(finalDirectory) || downloadPath === inFlightValue) {
        return inFlightValue;
      }
      return await copyCachedPathToDownloadPath({
        cachedPath: inFlightValue,
        downloadPath: createFilePath(finalDirectory, name, ext)
      });
    }

    // Add htaccess authentication if passed in. This isn't particularly
    // extensible. We should define a proper API that we validate.
    const httpOptions = {};
    if (auth && (auth.htaccess_pass || auth.htaccess_user)) {
      httpOptions.username = auth.htaccess_user;
      httpOptions.password = auth.htaccess_pass;
    }
    await fs.ensureDir(finalDirectory);
    const tmpFilename = createFilePath(fileDirectory, `tmp-${digest}`, ext);
    let filename = createFilePath(finalDirectory, name, ext);

    // See if there's response headers for this url
    // from a previous request.
    const headers = {
      ...httpHeaders
    };
    if (cachedEntry !== null && cachedEntry !== void 0 && (_cachedEntry$headers = cachedEntry.headers) !== null && _cachedEntry$headers !== void 0 && _cachedEntry$headers.etag && (await fs.pathExists(filename))) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      headers[`If-None-Match`] = cachedEntry.headers.etag;
    }
    const response = await requestRemoteNode(url, headers, tmpFilename, httpOptions);
    if (response.statusCode === 200) {
      // Save the response headers for future requests.
      // If the user did not provide an extension and we couldn't get one from remote file, try and guess one
      if (!ext) {
        // if this is fresh response - try to guess extension and cache result for future
        const filetype = await fileType.fromFile(tmpFilename);
        if (filetype) {
          ext = `.${filetype.ext}`;
          filename += ext;
        }
      }
      await fs.move(tmpFilename, filename, {
        overwrite: true
      });
      const slashedDirectory = slash(finalDirectory);
      await setInFlightObject(url, BUILD_ID, {
        cacheKey,
        extension: ext,
        headers: response.headers.etag ? {
          etag: response.headers.etag
        } : {},
        directory: slashedDirectory,
        path: slash(filename).replace(`${slashedDirectory}/`, ``)
      });
    } else if (response.statusCode === 304) {
      await fs.remove(tmpFilename);
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
  const remoteFile = getStorage(getDatabaseDir()).remoteFileInfo.get(key);
  // if buildId match we know it's the same build and it already processed this url this build
  if (remoteFile && remoteFile.buildId === buildId) {
    return path.join(remoteFile.directory, remoteFile.path);
  }
  return undefined;
}
async function setInFlightObject(key, buildId, value) {
  if (!buildId) {
    inFlightMap.set(key, path.join(value.directory, value.path));
  }
  await getStorage(getDatabaseDir()).remoteFileInfo.put(key, {
    ...value,
    buildId
  });
}