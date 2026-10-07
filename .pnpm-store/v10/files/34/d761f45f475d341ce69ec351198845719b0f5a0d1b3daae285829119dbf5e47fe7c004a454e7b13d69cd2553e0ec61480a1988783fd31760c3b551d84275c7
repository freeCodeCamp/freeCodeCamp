"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.requestRemoteNode = requestRemoteNode;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
const STALL_RETRY_LIMIT = process.env.GATSBY_STALL_RETRY_LIMIT ? parseInt(process.env.GATSBY_STALL_RETRY_LIMIT, 10) : 3;
const STALL_TIMEOUT = process.env.GATSBY_STALL_TIMEOUT ? parseInt(process.env.GATSBY_STALL_TIMEOUT, 10) : 30000;
const CONNECTION_TIMEOUT = process.env.GATSBY_CONNECTION_TIMEOUT ? parseInt(process.env.GATSBY_CONNECTION_TIMEOUT, 10) : 30000;
const INCOMPLETE_RETRY_LIMIT = process.env.GATSBY_INCOMPLETE_RETRY_LIMIT ? parseInt(process.env.GATSBY_INCOMPLETE_RETRY_LIMIT, 10) : 3;

// jest doesn't allow us to run all timings infinitely, so we set it 0  in tests
const BACKOFF_TIME = process.env.NODE_ENV === `test` ? 0 : 1000;
function range(start, end) {
  return Array(end - start).fill(null).map((_, i) => start + i);
}

// Based on the defaults of https://github.com/JustinBeckwith/retry-axios
const STATUS_CODES_TO_RETRY = [...range(100, 200), 429, ...range(500, 600)];
const ERROR_CODES_TO_RETRY = [`ETIMEDOUT`, `ECONNRESET`, `EADDRINUSE`, `ECONNREFUSED`, `EPIPE`, `ENOTFOUND`, `ENETUNREACH`, `EAI_AGAIN`, `ERR_NON_2XX_3XX_RESPONSE`, `ERR_GOT_REQUEST_ERROR`];

/**
 * requestRemoteNode
 * --
 * Download the requested file
 *
 * @param  {String}   url
 * @param  {Headers}  headers
 * @param  {String}   tmpFilename
 * @param  {Object}   httpOptions
 * @param  {number}   attempt
 * @return {Promise<Object>}  Resolves with the [http Result Object]{@link https://nodejs.org/api/http.html#http_class_http_serverresponse}
 */
async function requestRemoteNode(url, headers, tmpFilename, httpOptions, attempt = 1) {
  // TODO(v5): use dynamic import syntax - it's currently blocked because older v4 versions have V8-compile-cache
  // const { default: got, RequestError } = await import(`got`)
  const {
    default: got,
    RequestError
  } = require(`got`);
  return new Promise((resolve, reject) => {
    let timeout;
    const fsWriteStream = _fsExtra.default.createWriteStream(tmpFilename);
    fsWriteStream.on(`error`, error => {
      if (timeout) {
        clearTimeout(timeout);
      }
      reject(error);
    });

    // Called if we stall for 30s without receiving any data
    const handleTimeout = async () => {
      fsWriteStream.close();
      await _fsExtra.default.remove(tmpFilename);
      if (attempt < STALL_RETRY_LIMIT) {
        // Retry by calling ourself recursively
        resolve(requestRemoteNode(url, headers, tmpFilename, httpOptions, attempt + 1));
      } else {
        // TODO move to new Error type
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(`Failed to download ${url} after ${STALL_RETRY_LIMIT} attempts`);
      }
    };
    const resetTimeout = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(handleTimeout, STALL_TIMEOUT);
    };
    const responseStream = got.stream(url, {
      headers,
      timeout: {
        send: CONNECTION_TIMEOUT // https://github.com/sindresorhus/got#timeout
      },

      ...httpOptions,
      isStream: true
    });
    let haveAllBytesBeenWritten = false;
    // Fixes a bug in latest got where progress.total gets reset when stream ends, even if it wasn't complete.
    let totalSize = null;
    responseStream.on(`downloadProgress`, progress => {
      // reset the timeout on each progress event to make sure large files don't timeout
      resetTimeout();
      if (progress.total != null && (!totalSize || totalSize < progress.total)) {
        totalSize = progress.total;
      }
      if (progress.transferred === totalSize || totalSize === null) {
        haveAllBytesBeenWritten = true;
      }
    });
    responseStream.pipe(fsWriteStream);

    // If there's a 400/500 response or other error.
    // it will trigger a finish event on fsWriteStream
    responseStream.on(`error`, async error => {
      var _error$response;
      if (timeout) {
        clearTimeout(timeout);
      }
      fsWriteStream.close();
      await _fsExtra.default.remove(tmpFilename);
      if (!(error instanceof RequestError)) {
        return reject(error);
      }

      // This is a replacement for the stream retry logic of got
      // till we can update all got instances to v12
      // https://github.com/sindresorhus/got/blob/main/documentation/7-retry.md
      // https://github.com/sindresorhus/got/blob/main/documentation/3-streams.md#retry
      const statusCode = (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.statusCode;
      const errorCode = error.code || error.message; // got gives error.code, but msw/node returns the error codes in the message only

      if (
      // HTTP STATUS CODE ERRORS
      statusCode && STATUS_CODES_TO_RETRY.includes(statusCode) ||
      // GENERAL NETWORK ERRORS
      errorCode && ERROR_CODES_TO_RETRY.includes(errorCode)) {
        var _error$options, _error$response2, _error$response3, _error$options2, _error$response4;
        if (attempt < INCOMPLETE_RETRY_LIMIT) {
          setTimeout(() => {
            resolve(requestRemoteNode(url, headers, tmpFilename, httpOptions, attempt + 1));
          }, BACKOFF_TIME * attempt);
          return undefined;
        }
        // Throw user friendly error
        error.message = [`Unable to fetch:`, url, `---`, `Reason: ${error.message}`, `---`].join(`\n`);

        // Gather details about what went wrong from the error object and the request
        const details = Object.entries({
          attempt,
          method: (_error$options = error.options) === null || _error$options === void 0 ? void 0 : _error$options.method,
          errorCode: error.code,
          responseStatusCode: (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.statusCode,
          responseStatusMessage: (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.statusMessage,
          requestHeaders: (_error$options2 = error.options) === null || _error$options2 === void 0 ? void 0 : _error$options2.headers,
          responseHeaders: (_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.headers
        })
        // Remove undefined values from the details to keep it clean
        .reduce((a, [k, v]) => v === undefined ? a : (a[k] = v, a), {});
        if (Object.keys(details).length) {
          error.message = [error.message, `Fetch details:`, JSON.stringify(details, null, 2), `---`].join(`\n`);
        }
      }
      return reject(error);
    });
    responseStream.on(`response`, response => {
      resetTimeout();
      fsWriteStream.once(`finish`, async () => {
        if (timeout) {
          clearTimeout(timeout);
        }

        // We have an incomplete download
        if (!haveAllBytesBeenWritten) {
          await _fsExtra.default.remove(tmpFilename);
          if (attempt < INCOMPLETE_RETRY_LIMIT) {
            // let's give node time to remove the file
            setImmediate(() => resolve(requestRemoteNode(url, headers, tmpFilename, httpOptions, attempt + 1)));
            return undefined;
          } else {
            // TODO move to new Error type
            // eslint-disable-next-line prefer-promise-reject-errors
            return reject(`Failed to download ${url} after ${INCOMPLETE_RETRY_LIMIT} attempts`);
          }
        }
        return resolve(response);
      });
    });
  });
}