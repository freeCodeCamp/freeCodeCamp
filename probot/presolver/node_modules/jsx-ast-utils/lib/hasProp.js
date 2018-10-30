'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasProp;
exports.hasAnyProp = hasAnyProp;
exports.hasEveryProp = hasEveryProp;

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  spreadStrict: true,
  ignoreCase: true
};

/**
 * Returns boolean indicating whether an prop exists on the props
 * property of a JSX element node.
 */
function hasProp() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;

  var propToCheck = options.ignoreCase ? prop.toUpperCase() : prop;

  return props.some(function (attribute) {
    // If the props contain a spread prop, then refer to strict param.
    if (attribute.type === 'JSXSpreadAttribute') {
      return !options.spreadStrict;
    }

    var currentProp = options.ignoreCase ? (0, _propName2.default)(attribute).toUpperCase() : (0, _propName2.default)(attribute);

    return propToCheck === currentProp;
  });
}

/**
 * Given the props on a node and a list of props to check, this returns a boolean
 * indicating if any of them exist on the node.
 */
function hasAnyProp() {
  var nodeProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;

  var propsToCheck = typeof props === 'string' ? props.split(' ') : props;

  return propsToCheck.some(function (prop) {
    return hasProp(nodeProps, prop, options);
  });
}

/**
 * Given the props on a node and a list of props to check, this returns a boolean
 * indicating if all of them exist on the node
 */
function hasEveryProp() {
  var nodeProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;

  var propsToCheck = typeof props === 'string' ? props.split(' ') : props;

  return propsToCheck.every(function (prop) {
    return hasProp(nodeProps, prop, options);
  });
}