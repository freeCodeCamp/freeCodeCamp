/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var ErrorUtils = jest.genMockFromModule("../ErrorUtils");
ErrorUtils.applyWithGuard.mockImplementation(function (callback, context, args) {
  return callback.apply(context, args);
});
ErrorUtils.guard.mockImplementation(function (callback) {
  return callback;
});
module.exports = ErrorUtils;