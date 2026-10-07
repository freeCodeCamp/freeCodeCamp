"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dictionaryFrom = _interopRequireDefault(require("../object/dictionaryFrom"));

var _arrayFrom = _interopRequireDefault(require("../array/arrayFrom"));

var _isObject = _interopRequireDefault(require("../object/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function without(target) {
  var attributesToOmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var omitDict = (0, _dictionaryFrom.default)((0, _arrayFrom.default)(attributesToOmit));

  if (Array.isArray(target)) {
    return target.reduce(function (memo, element) {
      if (!(omitDict[element] && (options.stringifyFirst || omitDict[element].value === element))) {
        memo.push(element);
      }

      return memo;
    }, []);
  } else if ((0, _isObject.default)(target)) {
    return Object.keys(target).reduce(function (memo, key) {
      if (!omitDict[key]) {
        memo[key] = target[key];
      }

      return memo;
    }, {});
  } else {
    return target;
  }
}

var _default = without;
exports.default = _default;