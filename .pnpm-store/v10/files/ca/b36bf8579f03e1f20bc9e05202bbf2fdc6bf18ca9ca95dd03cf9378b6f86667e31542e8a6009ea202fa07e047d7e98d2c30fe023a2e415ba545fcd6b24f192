"use strict";

const path = require("path");

const {
  parse
} = require("url");

const querystring = require("querystring");

const getPaths = require("./getPaths");
/** @typedef {import("../index.js").IncomingMessage} IncomingMessage */

/** @typedef {import("../index.js").ServerResponse} ServerResponse */


const cacheStore = new WeakMap();
/**
 * @template T
 * @param {Function} fn
 * @param {{ cache?: Map<string, { data: T }> } | undefined} cache
 * @param {(value: T) => T} callback
 * @returns {any}
 */
// @ts-ignore

const mem = (fn, {
  cache = new Map()
} = {}, callback) => {
  /**
   * @param {any} arguments_
   * @return {any}
   */
  const memoized = (...arguments_) => {
    const [key] = arguments_;
    const cacheItem = cache.get(key);

    if (cacheItem) {
      return cacheItem.data;
    }

    let result = fn.apply(void 0, arguments_);
    result = callback(result);
    cache.set(key, {
      data: result
    });
    return result;
  };

  cacheStore.set(memoized, cache);
  return memoized;
}; // eslint-disable-next-line no-undefined


const memoizedParse = mem(parse, undefined, value => {
  if (value.pathname) {
    // eslint-disable-next-line no-param-reassign
    value.pathname = decode(value.pathname);
  }

  return value;
});
const UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/;
/**
 * @typedef {Object} Extra
 * @property {import("fs").Stats=} stats
 * @property {number=} errorCode
 */

/**
 * decodeURIComponent.
 *
 * Allows V8 to only deoptimize this fn instead of all of send().
 *
 * @param {string} input
 * @returns {string}
 */

function decode(input) {
  return querystring.unescape(input);
}
/**
 * @template {IncomingMessage} Request
 * @template {ServerResponse} Response
 * @param {import("../index.js").Context<Request, Response>} context
 * @param {string} url
 * @param {Extra=} extra
 * @returns {string | undefined}
 */


function getFilenameFromUrl(context, url, extra = {}) {
  const {
    options
  } = context;
  const paths = getPaths(context);
  /** @type {string | undefined} */

  let foundFilename;
  /** @type {URL} */

  let urlObject;

  try {
    // The `url` property of the `request` is contains only  `pathname`, `search` and `hash`
    urlObject = memoizedParse(url, false, true);
  } catch (_ignoreError) {
    return;
  }

  for (const {
    publicPath,
    outputPath
  } of paths) {
    /** @type {string | undefined} */
    let filename;
    /** @type {URL} */

    let publicPathObject;

    try {
      publicPathObject = memoizedParse(publicPath !== "auto" && publicPath ? publicPath : "/", false, true);
    } catch (_ignoreError) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const {
      pathname
    } = urlObject;
    const {
      pathname: publicPathPathname
    } = publicPathObject;

    if (pathname && pathname.startsWith(publicPathPathname)) {
      // Null byte(s)
      if (pathname.includes("\0")) {
        // eslint-disable-next-line no-param-reassign
        extra.errorCode = 400;
        return;
      } // ".." is malicious


      if (UP_PATH_REGEXP.test(path.normalize(`./${pathname}`))) {
        // eslint-disable-next-line no-param-reassign
        extra.errorCode = 403;
        return;
      } // Strip the `pathname` property from the `publicPath` option from the start of requested url
      // `/complex/foo.js` => `foo.js`
      // and add outputPath
      // `foo.js` => `/home/user/my-project/dist/foo.js`


      filename = path.join(outputPath, pathname.slice(publicPathPathname.length));

      try {
        // eslint-disable-next-line no-param-reassign
        extra.stats =
        /** @type {import("fs").statSync} */
        context.outputFileSystem.statSync(filename);
      } catch (_ignoreError) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (extra.stats.isFile()) {
        foundFilename = filename;
        break;
      } else if (extra.stats.isDirectory() && (typeof options.index === "undefined" || options.index)) {
        const indexValue = typeof options.index === "undefined" || typeof options.index === "boolean" ? "index.html" : options.index;
        filename = path.join(filename, indexValue);

        try {
          // eslint-disable-next-line no-param-reassign
          extra.stats =
          /** @type {import("fs").statSync} */
          context.outputFileSystem.statSync(filename);
        } catch (__ignoreError) {
          // eslint-disable-next-line no-continue
          continue;
        }

        if (extra.stats.isFile()) {
          foundFilename = filename;
          break;
        }
      }
    }
  } // eslint-disable-next-line consistent-return


  return foundFilename;
}

module.exports = getFilenameFromUrl;