/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Deferred = require("./Deferred");

var invariant = require("./invariant");
/**
 * A map of asynchronous values that can be get or set in any order. Unlike a
 * normal map, setting the value for a particular key more than once throws.
 * Also unlike a normal map, a key can either be resolved or rejected.
 */


var PromiseMap = /*#__PURE__*/function () {
  function PromiseMap() {
    _defineProperty(this, "_deferred", void 0);

    this._deferred = {};
  }

  var _proto = PromiseMap.prototype;

  _proto.get = function get(key) {
    return getDeferred(this._deferred, key).getPromise();
  };

  _proto.resolveKey = function resolveKey(key, value) {
    var entry = getDeferred(this._deferred, key);
    !!entry.isSettled() ? process.env.NODE_ENV !== "production" ? invariant(false, 'PromiseMap: Already settled `%s`.', key) : invariant(false) : void 0;
    entry.resolve(value);
  };

  _proto.rejectKey = function rejectKey(key, reason) {
    var entry = getDeferred(this._deferred, key);
    !!entry.isSettled() ? process.env.NODE_ENV !== "production" ? invariant(false, 'PromiseMap: Already settled `%s`.', key) : invariant(false) : void 0;
    entry.reject(reason);
  };

  return PromiseMap;
}();

function getDeferred(entries, key) {
  if (!entries.hasOwnProperty(key)) {
    entries[key] = new Deferred();
  }

  return entries[key];
}

module.exports = PromiseMap;