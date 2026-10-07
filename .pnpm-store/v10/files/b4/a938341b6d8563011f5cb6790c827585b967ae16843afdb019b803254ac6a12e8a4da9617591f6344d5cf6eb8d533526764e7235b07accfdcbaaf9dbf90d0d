'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromObjectExpression;

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Extractor function for an ObjectExpression type value node.
 * An object expression is using {}.
 *
 * @returns - a representation of the object
 */
function extractValueFromObjectExpression(value) {
  // eslint-disable-next-line global-require
  var getValue = require('.').default;
  return value.properties.reduce(function (obj, property) {
    // Support types: SpreadProperty and ExperimentalSpreadProperty
    if (/^(?:Experimental)?Spread(?:Property|Element)$/.test(property.type)) {
      if (property.argument.type === 'ObjectExpression') {
        return (0, _object2.default)({}, obj, extractValueFromObjectExpression(property.argument));
      }
    } else {
      return (0, _object2.default)({}, obj, _defineProperty({}, getValue(property.key), getValue(property.value)));
    }
    return obj;
  }, {});
}