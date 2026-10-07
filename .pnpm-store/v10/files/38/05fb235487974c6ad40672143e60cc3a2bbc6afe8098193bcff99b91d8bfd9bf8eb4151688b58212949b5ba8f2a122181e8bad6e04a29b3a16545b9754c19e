/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */
'use strict';

var Deferred = require.requireActual("../Deferred");

var fetch = jest.fn(function (uri, options) {
  var deferred = new Deferred();
  fetch.mock.deferreds.push(deferred);
  return deferred.getPromise();
});
fetch.mock.deferreds = [];
module.exports = fetch;