"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = summarizeRequest;

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
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

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NODE_MODULES = `${_path().default.sep}node_modules${_path().default.sep}`;
const BUFFER_LIMIT = 5000000; // 5mb

async function summarizeRequest(fs, req) {
  let {
    content,
    hash,
    size
  } = await summarizeDiskRequest(fs, req);
  let isSource = isFilePathSource(fs, req.filePath);
  return {
    content,
    hash,
    size,
    isSource
  };
}

function isFilePathSource(fs, filePath) {
  return !filePath.includes(NODE_MODULES);
}

async function summarizeDiskRequest(fs, req) {
  let code = req.code;
  let content;
  let hash;
  let size;

  if (code == null) {
    // Get the filesize. If greater than BUFFER_LIMIT, use a stream to
    // compute the hash. In the common case, it's faster to just read the entire
    // file first and do the hash all at once without the overhead of streams.
    size = (await fs.stat(req.filePath)).size;

    if (size > BUFFER_LIMIT) {
      return new Promise((resolve, reject) => {
        let stream = fs.createReadStream(req.filePath);
        stream.on('error', reject);
        (0, _utils().hashStream)(stream).then(hash => resolve({
          content: fs.createReadStream(req.filePath),
          hash,
          size
        }), reject);
      });
    } else {
      content = await fs.readFile(req.filePath);
      hash = (0, _hash().hashBuffer)(content);
    }
  } else {
    content = code;
    hash = (0, _hash().hashString)(code);
    size = Buffer.byteLength(code);
  }

  return {
    content,
    hash,
    size
  };
}