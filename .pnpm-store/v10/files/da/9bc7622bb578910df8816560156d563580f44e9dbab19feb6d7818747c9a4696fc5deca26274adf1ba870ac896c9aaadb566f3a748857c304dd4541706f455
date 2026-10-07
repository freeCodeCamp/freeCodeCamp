"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.transformImage = transformImage;
var _path = _interopRequireDefault(require("path"));
var _fsExtra = require("fs-extra");
var _fetchRemoteFile = require("gatsby-core-utils/fetch-remote-file");
var _createContentDigest = require("gatsby-core-utils/create-content-digest");
var _gatsbySharp = _interopRequireDefault(require("gatsby-sharp"));
var _cache = require("./utils/cache");
// queue is used inside transformImage to batch multiple transforms together
// more info inside the transformImage function
const queue = new Map();

// eslint-disable-next-line @typescript-eslint/naming-convention
async function transformImage({
  outputDir,
  args: {
    url,
    filename,
    contentDigest,
    httpHeaders,
    ...args
  }
}) {
  const cache = (0, _cache.getCache)();
  const digest = (0, _createContentDigest.createContentDigest)({
    url,
    filename,
    contentDigest,
    args
  });
  const cacheKey = `image-cdn:` + digest + `:transform`;
  const cachedValue = await cache.get(cacheKey);
  if (cachedValue && (await (0, _fsExtra.pathExists)(cachedValue))) {
    return cachedValue;
  }
  const ext = _path.default.extname(filename);
  const basename = _path.default.basename(filename, ext);
  const filePath = await (0, _fetchRemoteFile.fetchRemoteFile)({
    directory: cache.directory,
    url,
    name: basename,
    ext,
    cacheKey: contentDigest,
    httpHeaders
  });
  const outputPath = _path.default.join(outputDir, filename);
  await (0, _fsExtra.mkdirp)(_path.default.dirname(outputPath));

  // if the queue already contains the url, we're going to add it to queue so, we can batch the transforms together.
  // We use setImmediate to not block the event loop so the queue can fill up.
  if (queue.has(url)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const queued = queue.get(url);
    queued.transforms.push({
      ...args,
      outputPath
    });
    return queued.promise.then(() => {
      cache.set(cacheKey, outputPath);
      return outputPath;
    });
  } else {
    const defer = new Promise((resolve, reject) => {
      setImmediate(async () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const transforms = queue.get(url).transforms;
        queue.delete(url);
        try {
          await resize(await (0, _fsExtra.readFile)(filePath), transforms);
          await cache.set(cacheKey, outputPath);
          resolve(outputPath);
        } catch (err) {
          reject(err);
        }
      });
    });
    queue.set(url, {
      promise: defer,
      transforms: [{
        ...args,
        outputPath
      }]
    });
    return defer;
  }
}
async function resizeImageWithSharp(pipeline, {
  width,
  height,
  format,
  outputPath,
  quality
}) {
  if (pipeline instanceof Buffer) {
    if (!outputPath) {
      return pipeline;
    }
    return (0, _fsExtra.writeFile)(outputPath, pipeline);
  }
  const resizedImage = pipeline.resize(width, height, {}).jpeg({
    quality
  }).png({
    quality
  }).webp({
    quality
  }).avif({
    quality
  }).toFormat(format);
  if (outputPath) {
    await (0, _fsExtra.writeFile)(outputPath, await resizedImage.toBuffer());
    return undefined;
  } else {
    return await resizedImage.toBuffer();
  }
}
async function resize(buffer, transforms) {
  const sharp = await (0, _gatsbySharp.default)();
  let pipeline;
  if (sharp) {
    pipeline = sharp(buffer);
  }
  if (Array.isArray(transforms)) {
    const results = [];
    for (const transform of transforms) {
      var _pipeline;
      results.push(await resizeImageWithSharp((_pipeline = pipeline) !== null && _pipeline !== void 0 ? _pipeline : buffer, transform));
    }
    return results;
  } else {
    var _pipeline2;
    return resizeImageWithSharp((_pipeline2 = pipeline) !== null && _pipeline2 !== void 0 ? _pipeline2 : buffer, transforms);
  }
}