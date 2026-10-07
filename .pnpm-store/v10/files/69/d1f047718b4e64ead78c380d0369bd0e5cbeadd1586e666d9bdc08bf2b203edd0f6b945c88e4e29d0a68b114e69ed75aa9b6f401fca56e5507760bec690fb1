"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Filesystem Cache
 *
 * Given a file and a transform function, cache the result into files
 * or retrieve the previously cached files if the given file is already known.
 *
 * @see https://github.com/babel/babel-loader/issues/34
 * @see https://github.com/babel/babel-loader/pull/41
 */
const fs = require("fs");
const os = require("os");
const path = require("path");
const zlib = require("zlib");
const crypto = require("crypto");
const findCacheDir = require("find-cache-dir");
const {
  promisify
} = require("util");
const transform = require("./transform");
// Lazily instantiated when needed
let defaultCacheDirectory = null;
let hashType = "sha256";
// use md5 hashing if sha256 is not available
try {
  crypto.createHash(hashType);
} catch (err) {
  hashType = "md5";
}
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const gunzip = promisify(zlib.gunzip);
const gzip = promisify(zlib.gzip);
const makeDir = require("make-dir");

/**
 * Read the contents from the compressed file.
 *
 * @async
 * @params {String} filename
 * @params {Boolean} compress
 */
const read = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (filename, compress) {
    const data = yield readFile(filename + (compress ? ".gz" : ""));
    const content = compress ? yield gunzip(data) : data;
    return JSON.parse(content.toString());
  });
  return function read(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Write contents into a compressed file.
 *
 * @async
 * @params {String} filename
 * @params {Boolean} compress
 * @params {String} result
 */
const write = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (filename, compress, result) {
    const content = JSON.stringify(result);
    const data = compress ? yield gzip(content) : content;
    return yield writeFile(filename + (compress ? ".gz" : ""), data);
  });
  return function write(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Build the filename for the cached file
 *
 * @params {String} source  File source code
 * @params {Object} options Options used
 *
 * @return {String}
 */
const filename = function (source, identifier, options) {
  const hash = crypto.createHash(hashType);
  const contents = JSON.stringify({
    source,
    options,
    identifier
  });
  hash.update(contents);
  return hash.digest("hex") + ".json";
};

/**
 * Handle the cache
 *
 * @params {String} directory
 * @params {Object} params
 */
const handleCache = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (directory, params) {
    const {
      source,
      options = {},
      cacheIdentifier,
      cacheDirectory,
      cacheCompression,
      logger
    } = params;
    const file = path.join(directory, filename(source, cacheIdentifier, options));
    try {
      // No errors mean that the file was previously cached
      // we just need to return it
      logger.debug(`reading cache file '${file}'`);
      return yield read(file, cacheCompression);
    } catch (err) {
      // conitnue if cache can't be read
      logger.debug(`discarded cache as it can not be read`);
    }
    const fallback = typeof cacheDirectory !== "string" && directory !== os.tmpdir();

    // Make sure the directory exists.
    try {
      logger.debug(`creating cache folder '${directory}'`);
      yield makeDir(directory);
    } catch (err) {
      if (fallback) {
        return handleCache(os.tmpdir(), params);
      }
      throw err;
    }

    // Otherwise just transform the file
    // return it to the user asap and write it in cache
    logger.debug(`applying Babel transform`);
    const result = yield transform(source, options);

    // Do not cache if there are external dependencies,
    // since they might change and we cannot control it.
    if (!result.externalDependencies.length) {
      try {
        logger.debug(`writing result to cache file '${file}'`);
        yield write(file, cacheCompression, result);
      } catch (err) {
        if (fallback) {
          // Fallback to tmpdir if node_modules folder not writable
          return handleCache(os.tmpdir(), params);
        }
        throw err;
      }
    }
    return result;
  });
  return function handleCache(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Retrieve file from cache, or create a new one for future reads
 *
 * @async
 * @param  {Object}   params
 * @param  {String}   params.cacheDirectory   Directory to store cached files
 * @param  {String}   params.cacheIdentifier  Unique identifier to bust cache
 * @param  {Boolean}  params.cacheCompression Whether compressing cached files
 * @param  {String}   params.source   Original contents of the file to be cached
 * @param  {Object}   params.options  Options to be given to the transform fn
 *
 * @example
 *
 *   const result = await cache({
 *     cacheDirectory: '.tmp/cache',
 *     cacheIdentifier: 'babel-loader-cachefile',
 *     cacheCompression: false,
 *     source: *source code from file*,
 *     options: {
 *       experimental: true,
 *       runtime: true
 *     },
 *   });
 */

module.exports = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (params) {
    let directory;
    if (typeof params.cacheDirectory === "string") {
      directory = params.cacheDirectory;
    } else {
      if (defaultCacheDirectory === null) {
        defaultCacheDirectory = findCacheDir({
          name: "babel-loader"
        }) || os.tmpdir();
      }
      directory = defaultCacheDirectory;
    }
    return yield handleCache(directory, params);
  });
  return function (_x8) {
    return _ref4.apply(this, arguments);
  };
}();