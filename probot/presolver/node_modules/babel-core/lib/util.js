"use strict";

exports.__esModule = true;
exports.inspect = exports.inherits = undefined;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _util = require("util");

Object.defineProperty(exports, "inherits", {
  enumerable: true,
  get: function get() {
    return _util.inherits;
  }
});
Object.defineProperty(exports, "inspect", {
  enumerable: true,
  get: function get() {
    return _util.inspect;
  }
});
exports.canCompile = canCompile;
exports.list = list;
exports.regexify = regexify;
exports.arrayify = arrayify;
exports.booleanify = booleanify;
exports.shouldIgnore = shouldIgnore;

var _escapeRegExp = require("lodash/escapeRegExp");

var _escapeRegExp2 = _interopRequireDefault(_escapeRegExp);

var _startsWith = require("lodash/startsWith");

var _startsWith2 = _interopRequireDefault(_startsWith);

var _minimatch = require("minimatch");

var _minimatch2 = _interopRequireDefault(_minimatch);

var _includes = require("lodash/includes");

var _includes2 = _interopRequireDefault(_includes);

var _isRegExp = require("lodash/isRegExp");

var _isRegExp2 = _interopRequireDefault(_isRegExp);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _slash = require("slash");

var _slash2 = _interopRequireDefault(_slash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function canCompile(filename, altExts) {
  var exts = altExts || canCompile.EXTENSIONS;
  var ext = _path2.default.extname(filename);
  return (0, _includes2.default)(exts, ext);
}

canCompile.EXTENSIONS = [".js", ".jsx", ".es6", ".es"];

function list(val) {
  if (!val) {
    return [];
  } else if (Array.isArray(val)) {
    return val;
  } else if (typeof val === "string") {
    return val.split(",");
  } else {
    return [val];
  }
}

function regexify(val) {
  if (!val) {
    return new RegExp(/.^/);
  }

  if (Array.isArray(val)) {
    val = new RegExp(val.map(_escapeRegExp2.default).join("|"), "i");
  }

  if (typeof val === "string") {
    val = (0, _slash2.default)(val);

    if ((0, _startsWith2.default)(val, "./") || (0, _startsWith2.default)(val, "*/")) val = val.slice(2);
    if ((0, _startsWith2.default)(val, "**/")) val = val.slice(3);

    var regex = _minimatch2.default.makeRe(val, { nocase: true });
    return new RegExp(regex.source.slice(1, -1), "i");
  }

  if ((0, _isRegExp2.default)(val)) {
    return val;
  }

  throw new TypeError("illegal type for regexify");
}

function arrayify(val, mapFn) {
  if (!val) return [];
  if (typeof val === "boolean") return arrayify([val], mapFn);
  if (typeof val === "string") return arrayify(list(val), mapFn);

  if (Array.isArray(val)) {
    if (mapFn) val = val.map(mapFn);
    return val;
  }

  return [val];
}

function booleanify(val) {
  if (val === "true" || val == 1) {
    return true;
  }

  if (val === "false" || val == 0 || !val) {
    return false;
  }

  return val;
}

function shouldIgnore(filename) {
  var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var only = arguments[2];

  filename = filename.replace(/\\/g, "/");

  if (only) {
    for (var _iterator = only, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var pattern = _ref;

      if (_shouldIgnore(pattern, filename)) return false;
    }
    return true;
  } else if (ignore.length) {
    for (var _iterator2 = ignore, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _pattern = _ref2;

      if (_shouldIgnore(_pattern, filename)) return true;
    }
  }

  return false;
}

function _shouldIgnore(pattern, filename) {
  if (typeof pattern === "function") {
    return pattern(filename);
  } else {
    return pattern.test(filename);
  }
}