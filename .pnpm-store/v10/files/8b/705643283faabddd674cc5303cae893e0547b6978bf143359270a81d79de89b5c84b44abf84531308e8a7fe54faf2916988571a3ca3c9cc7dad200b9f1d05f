"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createWriteBundleRequest;

var _constants = require("../constants");

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

var _Bundle = require("../public/Bundle");

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _stream() {
  const data = require("stream");

  _stream = function () {
    return data;
  };

  return data;
}

var _projectPath = require("../projectPath");

var _ParcelConfigRequest = _interopRequireWildcard(require("./ParcelConfigRequest"));

var _PluginOptions = _interopRequireDefault(require("../public/PluginOptions"));

function _logger() {
  const data = require("@parcel/logger");

  _logger = function () {
    return data;
  };

  return data;
}

var _DevDepRequest = require("./DevDepRequest");

var _ParcelConfig = _interopRequireDefault(require("../ParcelConfig"));

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BOUNDARY_LENGTH = _constants.HASH_REF_PREFIX.length + 32 - 1;

/**
 * Writes a bundle to the dist directory, replacing hash references with the final content hashes.
 */
function createWriteBundleRequest(input) {
  let name = (0, _nullthrows().default)(input.bundle.name);
  let nameHash = (0, _nullthrows().default)(input.hashRefToNameHash.get(input.bundle.hashReference));
  return {
    id: `${input.bundle.id}:${input.info.hash}:${nameHash}:${name}`,
    type: 'write_bundle_request',
    run,
    input
  };
}

async function run({
  input,
  options,
  api
}) {
  var _info$time;

  let {
    bundleGraph,
    bundle,
    info,
    hashRefToNameHash
  } = input;
  let {
    inputFS,
    outputFS
  } = options;
  let name = (0, _nullthrows().default)(bundle.name);
  let thisHashReference = bundle.hashReference;

  if (info.type !== bundle.type) {
    name = name.slice(0, -_path().default.extname(name).length) + '.' + info.type;
  }

  if (name.includes(thisHashReference)) {
    let thisNameHash = (0, _nullthrows().default)(hashRefToNameHash.get(thisHashReference));
    name = name.replace(thisHashReference, thisNameHash);
  }

  let filePath = (0, _projectPath.joinProjectPath)(bundle.target.distDir, name); // Watch the bundle and source map for deletion.
  // Also watch the dist dir because invalidateOnFileDelete does not currently
  // invalidate when a parent directory is deleted.
  // TODO: do we want to also watch for file edits?

  api.invalidateOnFileDelete(bundle.target.distDir);
  api.invalidateOnFileDelete(filePath);
  let cacheKeys = info.cacheKeys;
  let mapKey = cacheKeys.map;
  let fullPath = (0, _projectPath.fromProjectPath)(options.projectRoot, filePath);

  if (mapKey && bundle.env.sourceMap && !bundle.env.sourceMap.inline) {
    api.invalidateOnFileDelete((0, _projectPath.toProjectPath)(options.projectRoot, fullPath + '.map'));
  }

  let dir = _path().default.dirname(fullPath);

  await outputFS.mkdirp(dir); // ? Got rid of dist exists, is this an expensive operation
  // Use the file mode from the entry asset as the file mode for the bundle.
  // Don't do this for browser builds, as the executable bit in particular is unnecessary.

  let publicBundle = _Bundle.NamedBundle.get(bundle, bundleGraph, options);

  let mainEntry = publicBundle.getMainEntry();
  let writeOptions = publicBundle.env.isBrowser() || !mainEntry ? undefined : {
    mode: (await inputFS.stat(mainEntry.filePath)).mode
  };
  let contentStream;

  if (info.isLargeBlob) {
    contentStream = options.cache.getStream(cacheKeys.content);
  } else {
    contentStream = (0, _utils().blobToStream)(await options.cache.getBlob(cacheKeys.content));
  }

  let size = 0;
  contentStream = contentStream.pipe(new (_utils().TapStream)(buf => {
    size += buf.length;
  }));
  let configResult = (0, _nullthrows().default)(await api.runRequest((0, _ParcelConfigRequest.default)()));
  let config = (0, _ParcelConfigRequest.getCachedParcelConfig)(configResult, options);
  let {
    devDeps,
    invalidDevDeps
  } = await (0, _DevDepRequest.getDevDepRequests)(api);
  (0, _DevDepRequest.invalidateDevDeps)(invalidDevDeps, options, config);
  await writeFiles(contentStream, info, hashRefToNameHash, options, config, outputFS, filePath, writeOptions, devDeps, api);

  if (mapKey && bundle.env.sourceMap && !bundle.env.sourceMap.inline && (await options.cache.has(mapKey))) {
    await writeFiles((0, _utils().blobToStream)(await options.cache.getBlob(mapKey)), info, hashRefToNameHash, options, config, outputFS, (0, _projectPath.toProjectPathUnsafe)((0, _projectPath.fromProjectPathRelative)(filePath) + '.map'), writeOptions, devDeps, api);
  }

  let res = {
    filePath,
    type: info.type,
    stats: {
      size,
      time: (_info$time = info.time) !== null && _info$time !== void 0 ? _info$time : 0
    }
  };
  api.storeResult(res);
  return res;
}

async function writeFiles(inputStream, info, hashRefToNameHash, options, config, outputFS, filePath, writeOptions, devDeps, api) {
  let compressors = await config.getCompressors((0, _projectPath.fromProjectPathRelative)(filePath));
  let fullPath = (0, _projectPath.fromProjectPath)(options.projectRoot, filePath);
  let stream = info.hashReferences.length ? inputStream.pipe(replaceStream(hashRefToNameHash)) : inputStream;
  let promises = [];

  for (let compressor of compressors) {
    promises.push(runCompressor(compressor, cloneStream(stream), options, outputFS, fullPath, writeOptions, devDeps, api));
  }

  await Promise.all(promises);
}

async function runCompressor(compressor, stream, options, outputFS, filePath, writeOptions, devDeps, api) {
  try {
    let res = await compressor.plugin.compress({
      stream,
      options: new _PluginOptions.default(options),
      logger: new (_logger().PluginLogger)({
        origin: compressor.name
      })
    });

    if (res != null) {
      await new Promise((resolve, reject) => (0, _stream().pipeline)(res.stream, outputFS.createWriteStream(filePath + (res.type != null ? '.' + res.type : ''), writeOptions), err => {
        if (err) reject(err);else resolve();
      }));
    }
  } catch (err) {
    throw new (_diagnostic().default)({
      diagnostic: (0, _diagnostic().errorToDiagnostic)(err, {
        origin: compressor.name
      })
    });
  } finally {
    // Add dev deps for compressor plugins AFTER running them, to account for lazy require().
    let devDepRequest = await (0, _DevDepRequest.createDevDependency)({
      specifier: compressor.name,
      resolveFrom: compressor.resolveFrom
    }, devDeps, options);
    await (0, _DevDepRequest.runDevDepRequest)(api, devDepRequest);
  }
}

function replaceStream(hashRefToNameHash) {
  let boundaryStr = '';
  return new (_stream().Transform)({
    transform(chunk, encoding, cb) {
      let str = boundaryStr + chunk.toString();
      let replaced = str.replace(_constants.HASH_REF_REGEX, match => {
        return hashRefToNameHash.get(match) || match;
      });
      boundaryStr = replaced.slice(replaced.length - BOUNDARY_LENGTH);
      let strUpToBoundary = replaced.slice(0, replaced.length - BOUNDARY_LENGTH);
      cb(null, strUpToBoundary);
    },

    flush(cb) {
      cb(null, boundaryStr);
    }

  });
}

function cloneStream(readable) {
  let res = new (_stream().Readable)(); // $FlowFixMe

  res._read = () => {};

  readable.on('data', chunk => res.push(chunk));
  readable.on('end', () => res.push(null));
  readable.on('error', err => res.emit('error', err));
  return res;
}