"use strict";

exports.__esModule = true;
exports.default = void 0;
var path = _interopRequireWildcard(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _https = require("https");
var _http = require("http");
var _os = require("os");
var _stream = require("stream");
var _url = require("url");
var _util = require("util");
var _linkfs = require("linkfs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const cdnDatastorePath = `%CDN_DATASTORE_PATH%`;
// this is fallback origin, we will prefer to extract it from first request instead
// as in some cases one reported by adapter might not be correct
const cdnDatastoreOrigin = `%CDN_DATASTORE_ORIGIN%`;
const PATH_PREFIX = `%PATH_PREFIX%`;

// this file should be in `.cache/page-ssr-module/lambda.js`
// so getting `.cache` location should be one directory above
// directory of this file
const cacheDir = path.join(__dirname, `..`);

// gatsby relies on process.cwd() a lot, so this ensures that CWD is set correctly
// in relation to bundled files for lambda. In some scenarios those files are not in
// expected relative locations to CWD, so here we are forcing setting CWD so the
// relative paths are correct
process.chdir(path.join(cacheDir, `..`));
function setupFsWrapper() {
  // setup global._fsWrapper
  try {
    fs.accessSync(__filename, fs.constants.W_OK);
    return path.join(cacheDir, `data`, `datastore`);
  } catch (e) {
    // we are in a read-only filesystem, so we need to use a temp dir

    const TEMP_DIR = path.join((0, _os.tmpdir)(), `gatsby`);
    const TEMP_CACHE_DIR = path.join(TEMP_DIR, `.cache`);
    global.__GATSBY.root = TEMP_DIR;

    // we need to rewrite fs
    const rewrites = [[path.join(cacheDir, `caches`), path.join(TEMP_CACHE_DIR, `caches`)], [path.join(cacheDir, `caches-lmdb`), path.join(TEMP_CACHE_DIR, `caches-lmdb`)], [path.join(cacheDir, `data`), path.join(TEMP_CACHE_DIR, `data`)]];
    console.log(`Preparing Gatsby filesystem`, {
      from: cacheDir,
      to: TEMP_CACHE_DIR,
      rewrites
    });

    // copied from https://github.com/streamich/linkfs/blob/master/src/index.ts#L126-L142
    function mapPathUsingRewrites(fsPath) {
      let filename = path.resolve(String(fsPath));
      for (const [from, to] of rewrites) {
        if (filename.indexOf(from) === 0) {
          const rootRegex = /(?:^[a-zA-Z]:\\$)|(?:^\/$)/; // C:\ vs /
          const isRoot = from.match(rootRegex);
          const baseRegex = `^(` + from.replace(/\\/g, `\\\\`) + `)`;
          if (isRoot) {
            const regex = new RegExp(baseRegex);
            filename = filename.replace(regex, () => to + path.sep);
          } else {
            const regex = new RegExp(baseRegex + `(\\\\|/|$)`);
            filename = filename.replace(regex, (_match, _p1, p2) => to + p2);
          }
        }
      }
      return filename;
    }
    function applyRename(fsToRewrite, lfs, method) {
      const original = fsToRewrite[method];
      if (original) {
        // @ts-ignore - complains about __promisify__ which doesn't actually exist in runtime
        lfs[method] = (...args) => {
          args[0] = mapPathUsingRewrites(args[0]);
          args[1] = mapPathUsingRewrites(args[1]);
          // @ts-ignore - can't decide which signature this is, but we just preserve the original
          // signature here and mostly care about first 2 arguments being PathLike
          return original.apply(fsToRewrite, args);
        };
      }
    }

    // linkfs doesn't handle following methods, so we need to add them manually
    _linkfs.rewritableMethods.push(`createWriteStream`, `createReadStream`, `rm`);
    function createLinkedFS(fsToRewrite) {
      const linkedFS = (0, _linkfs.link)(fsToRewrite, rewrites);

      // linkfs doesn't handle `to` argument in `rename` and `renameSync` methods
      applyRename(fsToRewrite, linkedFS, `rename`);
      applyRename(fsToRewrite, linkedFS, `renameSync`);
      return linkedFS;
    }

    // Alias the cache dir paths to the temp dir
    const lfs = createLinkedFS(fs);

    // linkfs doesn't pass across the `native` prop, which graceful-fs needs
    for (const key in lfs) {
      if (Object.hasOwnProperty.call(fs[key], `native`)) {
        lfs[key].native = fs[key].native;
      }
    }
    // 'promises' is not initially linked within the 'linkfs'
    // package, and is needed by underlying Gatsby code (the
    // @graphql-tools/code-file-loader)
    lfs.promises = createLinkedFS(fs.promises);
    const originalWritesStream = fs.WriteStream;
    function LinkedWriteStream(...args) {
      args[0] = mapPathUsingRewrites(args[0]);
      args[1] = typeof args[1] === `string` ? {
        flags: args[1],
        // @ts-ignore there is `fs` property in options doh (https://nodejs.org/api/fs.html#fscreatewritestreampath-options)
        fs: lfs
      } : {
        ...(args[1] || {}),
        // @ts-ignore there is `fs` property in options doh (https://nodejs.org/api/fs.html#fscreatewritestreampath-options)
        fs: lfs
      };

      // @ts-ignore TS doesn't like extending prototype "classes"
      return originalWritesStream.apply(this, args);
    }
    LinkedWriteStream.prototype = Object.create(originalWritesStream.prototype);
    // @ts-ignore TS doesn't like extending prototype "classes"
    lfs.WriteStream = LinkedWriteStream;
    const originalReadStream = fs.ReadStream;
    function LinkedReadStream(...args) {
      args[0] = mapPathUsingRewrites(args[0]);
      args[1] = typeof args[1] === `string` ? {
        flags: args[1],
        // @ts-ignore there is `fs` property in options doh (https://nodejs.org/api/fs.html#fscreatewritestreampath-options)
        fs: lfs
      } : {
        ...(args[1] || {}),
        // @ts-ignore there is `fs` property in options doh (https://nodejs.org/api/fs.html#fscreatewritestreampath-options)
        fs: lfs
      };

      // @ts-ignore TS doesn't like extending prototype "classes"
      return originalReadStream.apply(this, args);
    }
    LinkedReadStream.prototype = Object.create(originalReadStream.prototype);
    // @ts-ignore TS doesn't like extending prototype "classes"
    lfs.ReadStream = LinkedReadStream;
    const dbPath = path.join(TEMP_CACHE_DIR, `data`, `datastore`);

    // Gatsby uses this instead of fs if present
    // eslint-disable-next-line no-underscore-dangle
    // @ts-ignore __promisify__ stuff
    global._fsWrapper = lfs;
    if (!cdnDatastorePath) {
      const dir = `data`;
      if (!process.env.NETLIFY_LOCAL && fs.existsSync(path.join(TEMP_CACHE_DIR, dir))) {
        console.log(`directory already exists`);
        return dbPath;
      }
      console.log(`Start copying ${dir}`);
      fs.copySync(path.join(cacheDir, dir), path.join(TEMP_CACHE_DIR, dir));
      console.log(`End copying ${dir}`);
    }
    return dbPath;
  }
}
global.__GATSBY = {
  root: process.cwd(),
  buildId: ``
};

// eslint-disable-next-line no-constant-condition
if (`%IMAGE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH%`) {
  global.__GATSBY.imageCDNUrlGeneratorModulePath = require.resolve(`%IMAGE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH%`);
}
// eslint-disable-next-line no-constant-condition
if (`%FILE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH%`) {
  global.__GATSBY.fileCDNUrlGeneratorModulePath = require.resolve(`%FILE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH%`);
}
const dbPath = setupFsWrapper();

// using require instead of import here for now because of type hell + import path doesn't exist in current context
// as this file will be copied elsewhere

const {
  GraphQLEngine
} = require(`../query-engine`);
const {
  getData,
  renderPageData,
  renderHTML,
  findEnginePageByPath
} = require(`./index`);
const streamPipeline = (0, _util.promisify)(_stream.pipeline);
function get(url, callback) {
  return new _url.URL(url).protocol === `https:` ? (0, _https.get)(url, callback) : (0, _http.get)(url, callback);
}
function shouldDownloadDatastoreFromCDN() {
  return !!cdnDatastorePath;
}
async function downloadDatastoreFromCDN(origin) {
  const cdnDatastore = `${origin}/${cdnDatastorePath}`;
  // if this variable is set we need to download the datastore from the CDN
  const downloadPath = dbPath + `/data.mdb`;
  console.log(`Downloading datastore from CDN (${cdnDatastore} -> ${downloadPath})`);
  await fs.ensureDir(dbPath);
  await new Promise((resolve, reject) => {
    const req = get(cdnDatastore, response => {
      if (!response.statusCode || response.statusCode < 200 || response.statusCode > 299) {
        const engineError = new Error(`Failed to download ${cdnDatastore}: ${response.statusCode} ${response.statusMessage || ``}`);
        engineError.downloadError = true;
        reject(engineError);
        return;
      }
      const fileStream = fs.createWriteStream(downloadPath);
      streamPipeline(response, fileStream).then(resolve).catch(error => {
        console.log(`Error downloading ${cdnDatastore}`, error);
        const engineError = error;
        engineError.downloadError = true;
        reject(engineError);
      });
    });
    req.on(`error`, error => {
      console.log(`Error downloading ${cdnDatastore}`, error);
      const engineError = error;
      engineError.downloadError = true;
      reject(engineError);
    });
  });
  console.log(`Downloaded datastore from CDN`);
}
async function initializeGraphqlEngine(origin) {
  if (shouldDownloadDatastoreFromCDN()) {
    await downloadDatastoreFromCDN(origin);
  }
  const graphqlEngine = new GraphQLEngine({
    dbPath
  });
  await graphqlEngine.ready;
  return graphqlEngine;
}
let memoizedGraphqlEnginePromise = null;
const originToGraphqlEnginePromise = new Map();
function tryToInitializeGraphqlEngineFromCollectedOrigins() {
  for (const [origin, originEngineState] of originToGraphqlEnginePromise) {
    if (!(originEngineState instanceof Error)) {
      if (originEngineState === null) {
        const engineForOriginPromise = initializeGraphqlEngine(origin).catch(e => {
          originToGraphqlEnginePromise.set(origin, e instanceof Error ? e : new Error(e));
          if (e.downloadError) {
            return tryToInitializeGraphqlEngineFromCollectedOrigins();
          }
          throw e;
        });
        originToGraphqlEnginePromise.set(origin, engineForOriginPromise);
        return engineForOriginPromise;
      } else {
        return originEngineState;
      }
    }
  }
  return Promise.reject(new Error(`No engine available`));
}
function memoizedInitializeGraphqlEngine(origin) {
  if (!originToGraphqlEnginePromise.has(origin)) {
    // register origin, but for now don't init anything
    originToGraphqlEnginePromise.set(origin, null);
  }
  if (!memoizedGraphqlEnginePromise) {
    // pick first non-errored entry
    memoizedGraphqlEnginePromise = tryToInitializeGraphqlEngineFromCollectedOrigins().catch(e => {
      // at this point we don't have any origin that work, but maybe we will get one in future
      // so unset memoizedGraphqlEnginePromise as it would be not allowing any more attempts once it settled
      memoizedGraphqlEnginePromise = null;
      throw e;
    });
  }
  return memoizedGraphqlEnginePromise;
}
memoizedInitializeGraphqlEngine(cdnDatastoreOrigin).catch(() =>
// we don't want to crash the process if we can't get the engine without a request
null);
function reverseFixedPagePath(pageDataRequestPath) {
  return pageDataRequestPath === `index` ? `/` : pageDataRequestPath;
}
function getPathInfo(requestPath) {
  const matches = requestPath.matchAll(/^\/?page-data\/(.+)\/page-data.json$/gm);
  for (const [, requestedPagePath] of matches) {
    return {
      isPageData: true,
      pagePath: reverseFixedPagePath(requestedPagePath)
    };
  }

  // if not matched
  return {
    isPageData: false,
    pagePath: requestPath
  };
}
function setStatusAndHeaders({
  page,
  data,
  res
}) {
  if (page.mode === `SSR`) {
    if (data.serverDataStatus) {
      res.status(data.serverDataStatus);
    }
  }
  if (data.serverDataHeaders) {
    for (const [name, value] of Object.entries(data.serverDataHeaders)) {
      res.setHeader(name, value);
    }
  }
}
function getErrorBody(statusCode) {
  let body = `<html><body><h1>${statusCode}</h1><p>${statusCode === 404 ? `Not found` : `Internal Server Error`}</p></body></html>`;
  if (statusCode === 404 || statusCode === 500) {
    const filename = path.join(process.cwd(), `public`, `${statusCode}.html`);
    if (fs.existsSync(filename)) {
      body = fs.readFileSync(filename, `utf8`);
    }
  }
  return body;
}
function getPage(pathname) {
  const pathInfo = getPathInfo(pathname);
  if (!pathInfo) {
    return undefined;
  }
  const {
    isPageData,
    pagePath
  } = pathInfo;
  const page = findEnginePageByPath(pagePath);
  if (!page) {
    return undefined;
  }
  return {
    page,
    isPageData,
    pagePath
  };
}
async function engineHandler(req, res) {
  try {
    var _req$url;
    let pageInfo;
    const originalPathName = (_req$url = req.url) !== null && _req$url !== void 0 ? _req$url : ``;
    if (PATH_PREFIX && originalPathName.startsWith(PATH_PREFIX)) {
      const maybePath = originalPathName.slice(PATH_PREFIX.length);
      pageInfo = getPage(maybePath);
    }
    if (!pageInfo) {
      pageInfo = getPage(originalPathName);
    }
    if (!pageInfo) {
      res.status(404).send(getErrorBody(404));
      return;
    }
    const {
      pagePath,
      isPageData,
      page
    } = pageInfo;
    const data = await getData({
      pathName: pagePath,
      getGraphqlEngine: () => memoizedInitializeGraphqlEngine(req !== null && req !== void 0 && req.rawUrl ? new _url.URL(req.rawUrl).origin : cdnDatastoreOrigin),
      req
    });
    if (isPageData) {
      const results = await renderPageData({
        data
      });
      setStatusAndHeaders({
        page,
        data,
        res
      });
      res.json(results);
      return;
    } else {
      const results = await renderHTML({
        data
      });
      setStatusAndHeaders({
        page,
        data,
        res
      });
      res.send(results);
      return;
    }
  } catch (e) {
    console.error(`Engine failed to handle request`, e);
    res.status(500).send(getErrorBody(500));
  }
}
var _default = engineHandler;
exports.default = _default;
//# sourceMappingURL=lambda.js.map