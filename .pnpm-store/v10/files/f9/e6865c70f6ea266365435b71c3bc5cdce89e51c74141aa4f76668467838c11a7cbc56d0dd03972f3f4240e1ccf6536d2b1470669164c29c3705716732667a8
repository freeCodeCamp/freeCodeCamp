'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @format
 */

var CONSTANTS = require('./YGEnums');

var Layout = function () {
  function Layout(left, right, top, bottom, width, height) {
    _classCallCheck(this, Layout);

    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
  }

  _createClass(Layout, [{
    key: 'fromJS',
    value: function fromJS(expose) {
      expose(this.left, this.right, this.top, this.bottom, this.width, this.height);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<Layout#' + this.left + ':' + this.right + ';' + this.top + ':' + this.bottom + ';' + this.width + ':' + this.height + '>';
    }
  }]);

  return Layout;
}();

var Size = function () {
  _createClass(Size, null, [{
    key: 'fromJS',
    value: function fromJS(_ref) {
      var width = _ref.width,
          height = _ref.height;

      return new Size(width, height);
    }
  }]);

  function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
  }

  _createClass(Size, [{
    key: 'fromJS',
    value: function fromJS(expose) {
      expose(this.width, this.height);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<Size#' + this.width + 'x' + this.height + '>';
    }
  }]);

  return Size;
}();

var Value = function () {
  function Value(unit, value) {
    _classCallCheck(this, Value);

    this.unit = unit;
    this.value = value;
  }

  _createClass(Value, [{
    key: 'fromJS',
    value: function fromJS(expose) {
      expose(this.unit, this.value);
    }
  }, {
    key: 'toString',
    value: function toString() {
      switch (this.unit) {
        case CONSTANTS.UNIT_POINT:
          return String(this.value);
        case CONSTANTS.UNIT_PERCENT:
          return this.value + '%';
        case CONSTANTS.UNIT_AUTO:
          return 'auto';
        default:
          {
            return this.value + '?';
          }
      }
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.value;
    }
  }]);

  return Value;
}();

module.exports = function (bind, lib) {
  function patch(prototype, name, fn) {
    var original = prototype[name];

    prototype[name] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return fn.call.apply(fn, [this, original].concat(args));
    };
  }

  var _arr = ['setPosition', 'setMargin', 'setFlexBasis', 'setWidth', 'setHeight', 'setMinWidth', 'setMinHeight', 'setMaxWidth', 'setMaxHeight', 'setPadding'];

  var _loop = function _loop() {
    var _methods;

    var fnName = _arr[_i];
    var methods = (_methods = {}, _defineProperty(_methods, CONSTANTS.UNIT_POINT, lib.Node.prototype[fnName]), _defineProperty(_methods, CONSTANTS.UNIT_PERCENT, lib.Node.prototype[fnName + 'Percent']), _defineProperty(_methods, CONSTANTS.UNIT_AUTO, lib.Node.prototype[fnName + 'Auto']), _methods);

    patch(lib.Node.prototype, fnName, function (original) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      // We patch all these functions to add support for the following calls:
      // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

      var value = args.pop();
      var unit = void 0,
          asNumber = void 0;

      if (value === 'auto') {
        unit = CONSTANTS.UNIT_AUTO;
        asNumber = undefined;
      } else if (value instanceof Value) {
        unit = value.unit;
        asNumber = value.valueOf();
      } else {
        unit = typeof value === 'string' && value.endsWith('%') ? CONSTANTS.UNIT_PERCENT : CONSTANTS.UNIT_POINT;
        asNumber = parseFloat(value);
        if (!Number.isNaN(value) && Number.isNaN(asNumber)) {
          throw new Error('Invalid value ' + value + ' for ' + fnName);
        }
      }

      if (!methods[unit]) throw new Error('Failed to execute "' + fnName + '": Unsupported unit \'' + value + '\'');

      if (asNumber !== undefined) {
        var _methods$unit;

        return (_methods$unit = methods[unit]).call.apply(_methods$unit, [this].concat(args, [asNumber]));
      } else {
        var _methods$unit2;

        return (_methods$unit2 = methods[unit]).call.apply(_methods$unit2, [this].concat(args));
      }
    });
  };

  for (var _i = 0; _i < _arr.length; _i++) {
    _loop();
  }

  patch(lib.Config.prototype, 'free', function () {
    // Since we handle the memory allocation ourselves (via lib.Config.create),
    // we also need to handle the deallocation
    lib.Config.destroy(this);
  });

  patch(lib.Node, 'create', function (_, config) {
    // We decide the constructor we want to call depending on the parameters
    return config ? lib.Node.createWithConfig(config) : lib.Node.createDefault();
  });

  patch(lib.Node.prototype, 'free', function () {
    // Since we handle the memory allocation ourselves (via lib.Node.create),
    // we also need to handle the deallocation
    lib.Node.destroy(this);
  });

  patch(lib.Node.prototype, 'freeRecursive', function () {
    for (var t = 0, T = this.getChildCount(); t < T; ++t) {
      this.getChild(0).freeRecursive();
    }
    this.free();
  });

  patch(lib.Node.prototype, 'setMeasureFunc', function (original, measureFunc) {
    // This patch is just a convenience patch, since it helps write more
    // idiomatic source code (such as .setMeasureFunc(null))
    // We also automatically convert the return value of the measureFunc
    // to a Size object, so that we can return anything that has .width and
    // .height properties
    if (measureFunc) {
      return original.call(this, function () {
        return Size.fromJS(measureFunc.apply(undefined, arguments));
      });
    } else {
      return this.unsetMeasureFunc();
    }
  });

  patch(lib.Node.prototype, 'calculateLayout', function (original) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
    var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CONSTANTS.DIRECTION_LTR;

    // Just a small patch to add support for the function default parameters
    return original.call(this, width, height, direction);
  });

  return _extends({
    Config: lib.Config,
    Node: lib.Node,
    Layout: bind('Layout', Layout),
    Size: bind('Size', Size),
    Value: bind('Value', Value),
    getInstanceCount: function getInstanceCount() {
      return lib.getInstanceCount.apply(lib, arguments);
    }
  }, CONSTANTS);
};