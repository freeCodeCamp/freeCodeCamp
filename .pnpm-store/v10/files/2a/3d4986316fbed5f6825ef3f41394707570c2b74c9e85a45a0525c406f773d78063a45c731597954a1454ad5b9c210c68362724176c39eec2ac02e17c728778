"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.FILE_CDN = FILE_CDN;
exports.IMAGE_CDN = IMAGE_CDN;
var _path = _interopRequireDefault(require("path"));
var _fetchRemoteFile = require("gatsby-core-utils/fetch-remote-file");
var _cpuCoreCount = require("gatsby-core-utils/cpu-core-count");
var _fastq = _interopRequireDefault(require("fastq"));
var _transformImages = require("../transform-images");
const queue = (0, _fastq.default)(async function transform(task, cb) {
  try {
    return void cb(null, await (0, _transformImages.transformImage)(task));
  } catch (e) {
    return void cb(e);
  }
},
// When inside query workers, we only want to use the current core
process.env.GATSBY_WORKER_POOL_WORKER ? 1 : Math.max(1, (0, _cpuCoreCount.cpuCoreCount)() - 1));

// eslint-disable-next-line @typescript-eslint/naming-convention
async function FILE_CDN({
  outputDir,
  args: {
    url,
    filename,
    contentDigest,
    httpHeaders
  }
}) {
  const ext = _path.default.extname(filename);
  await (0, _fetchRemoteFile.fetchRemoteFile)({
    directory: outputDir,
    url,
    name: _path.default.basename(filename, ext),
    ext,
    cacheKey: contentDigest,
    excludeDigest: true,
    httpHeaders
  });
}

// eslint-disable-next-line @typescript-eslint/naming-convention
async function IMAGE_CDN(args) {
  return new Promise((resolve, reject) => {
    queue.push(args, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}