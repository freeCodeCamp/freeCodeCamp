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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Profiler = require('../core/GraphQLCompilerProfiler');

var crypto = require('crypto');

var fs = require('fs');

var os = require('os');

var path = require('path');
/**
 * A file backed cache. Values are JSON encoded on disk, so only JSON
 * serializable values should be used.
 */


var RelayCompilerCache = /*#__PURE__*/function () {
  /**
   * @param name         Human readable identifier for the cache
   * @param cacheBreaker This should be changed in order to invalidate existing
   *                     caches.
   */
  function RelayCompilerCache(name, cacheBreaker) {
    (0, _defineProperty2["default"])(this, "_dir", null);
    this._name = name;
    this._cacheBreaker = cacheBreaker;
  }

  var _proto = RelayCompilerCache.prototype;

  _proto._getFile = function _getFile(key) {
    if (this._dir == null) {
      // Include username in the cache dir to avoid issues with directories being
      // owned by a different user.
      var username = os.userInfo().username;
      var cacheID = crypto.createHash('md5').update(this._cacheBreaker).update(username).digest('hex');
      var dir = path.join(os.tmpdir(), "".concat(this._name, "-").concat(cacheID));

      if (!fs.existsSync(dir)) {
        try {
          fs.mkdirSync(dir);
        } catch (error) {
          if (error.code !== 'EEXIST') {
            throw error;
          }
        }
      }

      this._dir = dir;
    }

    return path.join(this._dir, key);
  };

  _proto.getOrCompute = function getOrCompute(key, compute) {
    var _this = this;

    return Profiler.run('RelayCompilerCache.getOrCompute', function () {
      var cacheFile = _this._getFile(key);

      if (fs.existsSync(cacheFile)) {
        try {
          return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
        } catch (_unused) {// ignore
        }
      }

      var value = compute();

      try {
        // $FlowFixMe[incompatible-call] JSON.stringify can return undefined
        fs.writeFileSync(cacheFile, JSON.stringify(value), 'utf8');
      } catch (_unused2) {// ignore
      }

      return value;
    });
  };

  return RelayCompilerCache;
}();

module.exports = RelayCompilerCache;