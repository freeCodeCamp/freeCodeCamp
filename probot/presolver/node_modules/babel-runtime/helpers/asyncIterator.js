"use strict";

exports.__esModule = true;

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (iterable) {
  if (typeof _symbol2.default === "function") {
    if (_symbol2.default.asyncIterator) {
      var method = iterable[_symbol2.default.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (_iterator2.default) {
      return (0, _getIterator3.default)(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
};