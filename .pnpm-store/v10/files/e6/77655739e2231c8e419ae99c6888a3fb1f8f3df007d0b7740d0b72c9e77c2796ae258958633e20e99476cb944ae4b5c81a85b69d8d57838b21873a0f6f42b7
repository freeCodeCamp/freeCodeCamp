/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var generateID = require('../util/generateID');

/**
 * Wraps the network with logging to ensure that network requests are
 * always logged. Relying on each network callsite to be wrapped is
 * untenable and will eventually lead to holes in the logging.
 * NOTE: This function takes an environment instance, because Relay
 * devtools will mutate the `env.__log` method, and the devtools rely
 * on it to receive network events.
 */
function wrapNetworkWithLogObserver(env, network) {
  return {
    execute: function execute(params, variables, cacheConfig, uploadables) {
      var networkRequestId = generateID();
      var logObserver = {
        start: function start(subscription) {
          env.__log({
            name: 'network.start',
            networkRequestId: networkRequestId,
            params: params,
            variables: variables,
            cacheConfig: cacheConfig
          });
        },
        next: function next(response) {
          env.__log({
            name: 'network.next',
            networkRequestId: networkRequestId,
            response: response
          });
        },
        error: function error(_error) {
          env.__log({
            name: 'network.error',
            networkRequestId: networkRequestId,
            error: _error
          });
        },
        complete: function complete() {
          env.__log({
            name: 'network.complete',
            networkRequestId: networkRequestId
          });
        },
        unsubscribe: function unsubscribe() {
          env.__log({
            name: 'network.unsubscribe',
            networkRequestId: networkRequestId
          });
        }
      };

      var logRequestInfo = function logRequestInfo(info) {
        env.__log({
          name: 'network.info',
          networkRequestId: networkRequestId,
          info: info
        });
      };

      return network.execute(params, variables, cacheConfig, uploadables, logRequestInfo)["do"](logObserver);
    }
  };
}

module.exports = wrapNetworkWithLogObserver;