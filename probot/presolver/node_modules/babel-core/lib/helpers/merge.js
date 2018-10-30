"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = function (dest, src) {
  if (!dest || !src) return;

  return (0, _mergeWith2.default)(dest, src, function (a, b) {
    if (b && Array.isArray(a)) {
      var newArray = b.slice(0);

      for (var _iterator = a, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var item = _ref;

        if (newArray.indexOf(item) < 0) {
          newArray.push(item);
        }
      }

      return newArray;
    }
  });
};

var _mergeWith = require("lodash/mergeWith");

var _mergeWith2 = _interopRequireDefault(_mergeWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"];