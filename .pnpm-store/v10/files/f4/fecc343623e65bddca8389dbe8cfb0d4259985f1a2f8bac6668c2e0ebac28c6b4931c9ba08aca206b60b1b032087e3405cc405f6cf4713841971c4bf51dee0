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

var profileHandlersByName = {};
var defaultProfiler = {
  stop: function stop() {}
};
/**
 * @public
 *
 * Instruments methods to allow profiling various parts of Relay. Profiling code
 * in Relay consists of three steps:
 *
 *  - Instrument the function to be profiled.
 *  - Attach handlers to the instrumented function.
 *  - Run the code which triggers the handlers.
 *
 * Handlers attached to instrumented methods are called with an instrumentation
 * name and a callback that must be synchronously executed:
 *
 *   instrumentedMethod.attachHandler(function(name, callback) {
 *     const start = performance.now();
 *     callback();
 *     console.log('Duration', performance.now() - start);
 *   });
 *
 * Handlers for profiles are callbacks that return a stop method:
 *
 *   RelayProfiler.attachProfileHandler('profileName', (name, state) => {
 *     const start = performance.now();
 *     return function stop(name, state) {
 *       console.log(`Duration (${name})`, performance.now() - start);
 *     }
 *   });
 */

var RelayProfiler = {
  /**
   * Instruments profiling for arbitrarily asynchronous code by a name.
   *
   *   const timerProfiler = RelayProfiler.profile('timeout');
   *   setTimeout(function() {
   *     timerProfiler.stop();
   *   }, 1000);
   *
   *   RelayProfiler.attachProfileHandler('timeout', ...);
   *
   * Arbitrary state can also be passed into `profile` as a second argument. The
   * attached profile handlers will receive this as the second argument.
   */
  profile: function profile(name, state) {
    var handlers = profileHandlersByName[name];

    if (handlers && handlers.length > 0) {
      var stopHandlers = [];

      for (var ii = handlers.length - 1; ii >= 0; ii--) {
        var stopHandler = handlers[ii](name, state);
        stopHandlers.unshift(stopHandler);
      }

      return {
        stop: function stop(error) {
          stopHandlers.forEach(function (stopHandler) {
            return stopHandler(error);
          });
        }
      };
    }

    return defaultProfiler;
  },

  /**
   * Attaches a handler to profiles with the supplied name.
   */
  attachProfileHandler: function attachProfileHandler(name, handler) {
    if (!profileHandlersByName.hasOwnProperty(name)) {
      profileHandlersByName[name] = [];
    }

    profileHandlersByName[name].push(handler);
  },

  /**
   * Detaches a handler attached via `attachProfileHandler`.
   */
  detachProfileHandler: function detachProfileHandler(name, handler) {
    if (profileHandlersByName.hasOwnProperty(name)) {
      removeFromArray(profileHandlersByName[name], handler);
    }
  }
};

function removeFromArray(array, element) {
  var index = array.indexOf(element);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

module.exports = RelayProfiler;