"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isObject = _interopRequireDefault(require("../object/isObject"));

var _hasKey = _interopRequireDefault(require("../object/hasKey"));

var _isString = _interopRequireDefault(require("../string/isString"));

var _isUndefined = _interopRequireDefault(require("../isUndefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(collection, item) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (Array.isArray(collection) || (0, _isString.default)(collection)) {
    if (options.stringifyFirst) {
      return !(0, _isUndefined.default)(collection.find(function (collectionItem) {
        return collectionItem.toString() === item.toString();
      }));
    } else {
      return collection.indexOf(item) !== -1;
    }
  } else if ((0, _isObject.default)(collection)) {
    return (0, _hasKey.default)(collection, item);
  } else {
    if (options.stringifyFirst) {
      return collection.toString() === item.toString();
    } else {
      return collection === item;
    }
  }
}

var _default = contains;
exports.default = _default;