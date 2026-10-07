"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* jslint unused:false */
if (global.ErrorUtils) {
  module.exports = global.ErrorUtils;
} else {
  var ErrorUtils = {
    applyWithGuard: function applyWithGuard(callback, context, args, onError, name) {
      return callback.apply(context, args);
    },
    guard: function guard(callback, name) {
      return callback;
    }
  };
  module.exports = ErrorUtils;
}