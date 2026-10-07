"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.sanitizeNode = void 0;
var _each2 = _interopRequireDefault(require("lodash/each"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _pickBy2 = _interopRequireDefault(require("lodash/pickBy"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
/**
 * @param {Object|Array} data
 * @returns {Object|Array} data without undefined values
 */
const omitUndefined = data => {
  const isPlainObject = (0, _isPlainObject2.default)(data);
  if (isPlainObject) {
    return (0, _pickBy2.default)(data, p => p !== undefined);
  }
  return data.filter(p => p !== undefined);
};
/**
 * @param {*} data
 * @return {boolean} Boolean if type is supported
 */
const isTypeSupported = data => {
  if (data === null) {
    return true;
  }
  const type = typeof data;
  const isSupported = type === `number` || type === `string` || type === `boolean` || data instanceof Date;
  return isSupported;
};
/**
 * Make data serializable
 * @param {(Object|Array)} data to sanitize
 * @param {boolean} isNode = true
 * @param {Set<string>} path = new Set
 */
const sanitizeNode = (data, isNode = true, path = new Set()) => {
  const isPlainObject = (0, _isPlainObject2.default)(data);
  const isArray = (0, _isArray2.default)(data);
  if (isPlainObject || isArray) {
    if (path.has(data)) return data;
    path.add(data);
    const returnData = isPlainObject ? {} : [];
    let anyFieldChanged = false;

    // _.each is a "Collection" method and thus objects with "length" property are iterated as arrays
    const hasLengthProperty = isPlainObject ? Object.prototype.hasOwnProperty.call(data, `length`) : false;
    let lengthProperty;
    if (hasLengthProperty) {
      lengthProperty = data.length;
      delete data.length;
    }
    (0, _each2.default)(data, (value, key) => {
      if (isNode && key === `internal`) {
        returnData[key] = value;
        return;
      }
      returnData[key] = sanitizeNode(value, false, path);
      if (returnData[key] !== value) {
        anyFieldChanged = true;
      }
    });
    if (hasLengthProperty) {
      ;
      data.length = lengthProperty;
      returnData.length = sanitizeNode(lengthProperty, false, path);
      if (returnData.length !== lengthProperty) {
        anyFieldChanged = true;
      }
    }
    if (anyFieldChanged) {
      data = omitUndefined(returnData);
    }

    // arrays and plain objects are supported - no need to to sanitize
    return data;
  }
  if (!isTypeSupported(data)) {
    return undefined;
  } else {
    return data;
  }
};
exports.sanitizeNode = sanitizeNode;
//# sourceMappingURL=sanitize-node.js.map