/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */
'use strict';

var Promise = require("./Promise");

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ExecutionEnvironment = require("./ExecutionEnvironment");

var sprintf = require("./sprintf");

var fetch = require("./fetch");

var warning = require("./warning");

var DEFAULT_TIMEOUT = 15000;
var DEFAULT_RETRIES = [1000, 3000];
/**
 * Makes a POST request to the server with the given data as the payload.
 * Automatic retries are done based on the values in `retryDelays`.
 */

function fetchWithRetries(uri, initWithRetries) {
  var _ref = initWithRetries || {},
      fetchTimeout = _ref.fetchTimeout,
      retryDelays = _ref.retryDelays,
      init = _objectWithoutPropertiesLoose(_ref, ["fetchTimeout", "retryDelays"]);

  var _fetchTimeout = fetchTimeout != null ? fetchTimeout : DEFAULT_TIMEOUT;

  var _retryDelays = retryDelays != null ? retryDelays : DEFAULT_RETRIES;

  var requestsAttempted = 0;
  var requestStartTime = 0;
  return new Promise(function (resolve, reject) {
    /**
     * Sends a request to the server that will timeout after `fetchTimeout`.
     * If the request fails or times out a new request might be scheduled.
     */
    function sendTimedRequest() {
      requestsAttempted++;
      requestStartTime = Date.now();
      var isRequestAlive = true;
      var request = fetch(uri, init);
      var requestTimeout = setTimeout(function () {
        isRequestAlive = false;

        if (shouldRetry(requestsAttempted)) {
          process.env.NODE_ENV !== "production" ? warning(false, 'fetchWithRetries: HTTP timeout, retrying.') : void 0;
          retryRequest();
        } else {
          reject(new Error(sprintf('fetchWithRetries(): Failed to get response from server, ' + 'tried %s times.', requestsAttempted)));
        }
      }, _fetchTimeout);
      request.then(function (response) {
        clearTimeout(requestTimeout);

        if (isRequestAlive) {
          // We got a response, we can clear the timeout.
          if (response.status >= 200 && response.status < 300) {
            // Got a response code that indicates success, resolve the promise.
            resolve(response);
          } else if (shouldRetry(requestsAttempted)) {
            // Fetch was not successful, retrying.
            // TODO(#7595849): Only retry on transient HTTP errors.
            process.env.NODE_ENV !== "production" ? warning(false, 'fetchWithRetries: HTTP error, retrying.') : void 0, retryRequest();
          } else {
            // Request was not successful, giving up.
            var error = new Error(sprintf('fetchWithRetries(): Still no successful response after ' + '%s retries, giving up.', requestsAttempted));
            error.response = response;
            reject(error);
          }
        }
      })["catch"](function (error) {
        clearTimeout(requestTimeout);

        if (shouldRetry(requestsAttempted)) {
          retryRequest();
        } else {
          reject(error);
        }
      });
    }
    /**
     * Schedules another run of sendTimedRequest based on how much time has
     * passed between the time the last request was sent and now.
     */


    function retryRequest() {
      var retryDelay = _retryDelays[requestsAttempted - 1];
      var retryStartTime = requestStartTime + retryDelay; // Schedule retry for a configured duration after last request started.

      setTimeout(sendTimedRequest, retryStartTime - Date.now());
    }
    /**
     * Checks if another attempt should be done to send a request to the server.
     */


    function shouldRetry(attempt) {
      return ExecutionEnvironment.canUseDOM && attempt <= _retryDelays.length;
    }

    sendTimedRequest();
  });
}

module.exports = fetchWithRetries;