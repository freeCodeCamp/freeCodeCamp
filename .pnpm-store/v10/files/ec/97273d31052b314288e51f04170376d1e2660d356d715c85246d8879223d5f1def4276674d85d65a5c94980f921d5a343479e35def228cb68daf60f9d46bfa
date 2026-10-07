"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.PlaceholderType = void 0;
exports.generatePlaceholder = generatePlaceholder;
var _path = _interopRequireDefault(require("path"));
var _fsExtra = require("fs-extra");
var _fetchRemoteFile = require("gatsby-core-utils/fetch-remote-file");
var _mutex = require("gatsby-core-utils/mutex");
var _fastq = _interopRequireDefault(require("fastq"));
var _gatsbySharp = _interopRequireDefault(require("gatsby-sharp"));
var _cache = require("./utils/cache");
var _mimeTypeHelpers = require("./utils/mime-type-helpers");
var _getRequestHeadersForUrl = require("./utils/get-request-headers-for-url");
let PlaceholderType;
exports.PlaceholderType = PlaceholderType;
(function (PlaceholderType) {
  PlaceholderType["BLURRED"] = "blurred";
  PlaceholderType["DOMINANT_COLOR"] = "dominantColor";
  PlaceholderType["TRACED_SVG"] = "tracedSVG";
})(PlaceholderType || (exports.PlaceholderType = PlaceholderType = {}));
const QUEUE_CONCURRENCY = 10;
const PLACEHOLDER_BASE64_WIDTH = 20;
const PLACEHOLDER_QUALITY = 25;
const PLACEHOLDER_DOMINANT_WIDTH = 200;
const PLACEHOLDER_TRACED_WIDTH = 200;
let tmpDir;
let didShowTraceSVGRemovalWarning = false;
const queue = (0, _fastq.default)(async function ({
  url,
  contentDigest,
  width,
  height,
  type,
  store
}, cb) {
  const sharp = await (0, _gatsbySharp.default)();
  if (!tmpDir) {
    const cache = (0, _cache.getCache)();
    tmpDir = await (0, _fsExtra.mkdtemp)(_path.default.join(cache.directory, `placeholder-`));
  }
  const httpHeaders = (0, _getRequestHeadersForUrl.getRequestHeadersForUrl)(url, store);
  const filePath = await (0, _fetchRemoteFile.fetchRemoteFile)({
    url,
    cacheKey: contentDigest,
    directory: tmpDir,
    httpHeaders
  });
  if (type === PlaceholderType.TRACED_SVG) {
    if (!didShowTraceSVGRemovalWarning) {
      // we should not hit this code path, field resolver should fallback earlier, this is just in-case.
      // also this falls back to BLURRED because the shape is compatible. DOMINANT_COLOR is not compatible
      // and fallback to DOMINANT_COLOR need to happen very early on and not when already generating value
      console.warn(`"TRACED_SVG" placeholder is no longer supported, falling back to "BLURRED". See https://gatsby.dev/tracesvg-removal/`);
      didShowTraceSVGRemovalWarning = true;
    }
    type = PlaceholderType.BLURRED;
  }
  switch (type) {
    case PlaceholderType.BLURRED:
      {
        let buffer;
        try {
          const fileStream = (0, _fsExtra.createReadStream)(filePath);
          const pipeline = sharp();
          fileStream.pipe(pipeline);
          buffer = await pipeline.resize(PLACEHOLDER_BASE64_WIDTH, Math.ceil(PLACEHOLDER_BASE64_WIDTH / (width / height))).toBuffer();
        } catch (e) {
          buffer = await (0, _fsExtra.readFile)(filePath);
        }
        return cb(null, `data:image/jpg;base64,${buffer.toString(`base64`)}`);
      }
    case PlaceholderType.DOMINANT_COLOR:
      {
        const fileStream = (0, _fsExtra.createReadStream)(filePath);
        const pipeline = sharp({
          failOn: `none`
        });
        fileStream.pipe(pipeline);
        const {
          dominant
        } = await pipeline.stats();
        return cb(null, dominant ? `rgb(${dominant.r},${dominant.g},${dominant.b})` : `rgba(0,0,0,0)`);
      }
  }
}, QUEUE_CONCURRENCY);

// eslint-disable-next-line consistent-return
async function generatePlaceholder(source, placeholderType, store) {
  switch (placeholderType) {
    case PlaceholderType.BLURRED:
      {
        return {
          fallback: await runPlaceholder({
            id: source.id,
            placeholderUrl: source.placeholderUrl,
            originalUrl: source.url,
            format: (0, _mimeTypeHelpers.getImageFormatFromMimeType)(source.mimeType),
            width: source.width,
            height: source.height,
            contentDigest: source.internal.contentDigest,
            type: PlaceholderType.BLURRED,
            placeholderOptions: {
              width: PLACEHOLDER_BASE64_WIDTH,
              quality: PLACEHOLDER_QUALITY
            },
            store
          })
        };
      }
    case PlaceholderType.DOMINANT_COLOR:
      {
        return {
          backgroundColor: await runPlaceholder({
            id: source.id,
            placeholderUrl: source.placeholderUrl,
            originalUrl: source.url,
            format: (0, _mimeTypeHelpers.getImageFormatFromMimeType)(source.mimeType),
            width: source.width,
            height: source.height,
            contentDigest: source.internal.contentDigest,
            type: PlaceholderType.DOMINANT_COLOR,
            placeholderOptions: {
              width: PLACEHOLDER_DOMINANT_WIDTH,
              quality: PLACEHOLDER_QUALITY
            },
            store
          })
        };
      }
    case PlaceholderType.TRACED_SVG:
      {
        return {
          fallback: await runPlaceholder({
            id: source.id,
            placeholderUrl: source.placeholderUrl,
            originalUrl: source.url,
            format: (0, _mimeTypeHelpers.getImageFormatFromMimeType)(source.mimeType),
            width: source.width,
            height: source.height,
            contentDigest: source.internal.contentDigest,
            type: PlaceholderType.TRACED_SVG,
            placeholderOptions: {
              width: PLACEHOLDER_TRACED_WIDTH,
              quality: PLACEHOLDER_QUALITY
            },
            store
          })
        };
      }
  }
}
async function runPlaceholder({
  placeholderUrl,
  originalUrl,
  width,
  height,
  id,
  contentDigest,
  type,
  placeholderOptions,
  store
}) {
  const cache = (0, _cache.getCache)();
  const cacheKey = `image-cdn:${id}-${contentDigest}:${type}`;
  let cachedValue = await cache.get(cacheKey);
  if (cachedValue) {
    return cachedValue;
  }
  const mutex = (0, _mutex.createMutex)(`gatsby-plugin-utils:placeholder:${id}-${contentDigest}`);
  await mutex.acquire();
  try {
    // check cache again after mutex is acquired
    cachedValue = await cache.get(cacheKey);
    if (cachedValue) {
      return cachedValue;
    }
    let url = originalUrl;
    if (placeholderUrl) {
      url = generatePlaceholderUrl({
        url: placeholderUrl,
        originalWidth: width,
        originalHeight: height,
        ...placeholderOptions
      });
    }
    const result = await new Promise((resolve, reject) => {
      queue.push({
        url,
        contentDigest,
        width,
        height,
        type,
        store
      }, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
    await cache.set(cacheKey, result);
    return result;
  } finally {
    await mutex.release();
  }
}
function generatePlaceholderUrl({
  url,
  width,
  quality,
  originalWidth,
  originalHeight
}) {
  const aspectRatio = originalWidth / originalHeight;
  return url.replaceAll(`%width%`, String(width)).replaceAll(`%height%`, Math.floor(width / aspectRatio).toString()).replaceAll(`%quality%`, String(quality));
}