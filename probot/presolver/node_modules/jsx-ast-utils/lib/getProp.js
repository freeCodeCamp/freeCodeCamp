'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProp;

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  ignoreCase: true
};

/**
 * Returns the JSXAttribute itself or undefined, indicating the prop
 * is not present on the JSXOpeningElement.
 *
 */
function getProp() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;

  var propToFind = options.ignoreCase ? prop.toUpperCase() : prop;

  return props.find(function (attribute) {
    // If the props contain a spread prop, then skip.
    if (attribute.type === 'JSXSpreadAttribute') {
      return false;
    }

    var currentProp = options.ignoreCase ? (0, _propName2.default)(attribute).toUpperCase() : (0, _propName2.default)(attribute);

    return propToFind === currentProp;
  });
}