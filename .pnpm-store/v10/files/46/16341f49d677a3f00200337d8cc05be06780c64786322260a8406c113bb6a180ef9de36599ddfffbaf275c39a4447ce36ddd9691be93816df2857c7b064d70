/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @emails oncall+relay
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var invariant = require('invariant');

var StrictMap = /*#__PURE__*/function () {
  function StrictMap(iterable) {
    this._map = new Map(iterable);
    return this;
  }

  var _proto = StrictMap.prototype;

  _proto.clear = function clear() {
    this._map.clear();
  };

  _proto["delete"] = function _delete(key) {
    return this._map["delete"](key);
  };

  _proto.entries = function entries() {
    return this._map.entries();
  };

  _proto.forEach = function forEach(callbackfn, thisArg) {
    this._map.forEach(callbackfn, thisArg);
  };

  _proto.map = function map(f) {
    var result = new StrictMap();

    var _iterator = (0, _createForOfIteratorHelper2["default"])(this._map),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            val = _step$value[1];
        result.set(key, f(val, key, this));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result;
  };

  _proto.asyncMap = /*#__PURE__*/function () {
    var _asyncMap = _asyncToGenerator(function* (f) {
      var _this = this;

      var entryPromises = [];

      var _iterator2 = (0, _createForOfIteratorHelper2["default"])(this._map),
          _step2;

      try {
        var _loop = function _loop() {
          var _step2$value = _step2.value,
              key = _step2$value[0],
              val = _step2$value[1];
          entryPromises.push(f(val, key, _this).then(function (resultVal) {
            return [key, resultVal];
          }));
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var entries = yield Promise.all(entryPromises);
      return new StrictMap(entries);
    });

    function asyncMap(_x) {
      return _asyncMap.apply(this, arguments);
    }

    return asyncMap;
  }();

  _proto.get = function get(key) {
    !this.has(key) ? process.env.NODE_ENV !== "production" ? invariant(false, 'StrictMap: trying to read non-existent key `%s`.', String(key)) : invariant(false) : void 0; // $FlowFixMe[incompatible-return] - we checked the key exists

    return this._map.get(key);
  };

  _proto.has = function has(key) {
    return this._map.has(key);
  };

  _proto.keys = function keys() {
    return this._map.keys();
  };

  _proto.set = function set(key, value) {
    this._map.set(key, value);

    return this;
  };

  _proto.values = function values() {
    return this._map.values();
  };

  return StrictMap;
}();

module.exports = StrictMap;