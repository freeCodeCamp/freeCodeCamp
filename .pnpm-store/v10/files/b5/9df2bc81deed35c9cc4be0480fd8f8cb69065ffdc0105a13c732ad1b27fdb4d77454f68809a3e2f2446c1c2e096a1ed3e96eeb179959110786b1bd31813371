"use strict";

var Promise = require("./Promise");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/**
 * Deferred provides a Promise-like API that exposes methods to resolve and
 * reject the Promise. It is most useful when converting non-Promise code to use
 * Promises.
 *
 * If you want to export the Promise without exposing access to the resolve and
 * reject methods, you should export `getPromise` which returns a Promise with
 * the same semantics excluding those methods.
 */
var Deferred = /*#__PURE__*/function () {
  function Deferred() {
    var _this = this;

    _defineProperty(this, "_settled", void 0);

    _defineProperty(this, "_promise", void 0);

    _defineProperty(this, "_resolve", void 0);

    _defineProperty(this, "_reject", void 0);

    this._settled = false;
    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });
  }

  var _proto = Deferred.prototype;

  _proto.getPromise = function getPromise() {
    return this._promise;
  };

  _proto.resolve = function resolve(value) {
    this._settled = true;

    this._resolve(value);
  };

  _proto.reject = function reject(reason) {
    this._settled = true;

    this._reject(reason);
  };

  _proto["catch"] = function _catch(onReject) {
    return Promise.prototype["catch"].apply(this._promise, arguments);
  };

  _proto.then = function then(onFulfill, onReject) {
    return Promise.prototype.then.apply(this._promise, arguments);
  };

  _proto.done = function done(onFulfill, onReject) {
    // Embed the polyfill for the non-standard Promise.prototype.done so that
    // users of the open source fbjs don't need a custom lib for Promise
    var promise = arguments.length ? this._promise.then.apply(this._promise, arguments) : this._promise;
    promise.then(undefined, function (err) {
      setTimeout(function () {
        throw err;
      }, 0);
    });
  };

  _proto.isSettled = function isSettled() {
    return this._settled;
  };

  return Deferred;
}();

module.exports = Deferred;