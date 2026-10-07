"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hasKey = _interopRequireDefault(require("./hasKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies a list of attributes and their values from a source object to a target object.
 * The attributes are only copied if they exist on the source object.
 * @param {Object} source Object to copy the attributes from
 * @param {Object} target Object to copy the attributes to
 * @param {String[]} attributes List of attributes to copy
 * @returns {Object} The target object, now with the copied attributes
 */
function copyAttributes(source, target, attributes) {
  attributes.forEach(function (attributeName) {
    if ((0, _hasKey.default)(source, attributeName)) {
      target[attributeName] = source[attributeName];
    }
  });
  return target;
}

var _default = copyAttributes;
exports.default = _default;