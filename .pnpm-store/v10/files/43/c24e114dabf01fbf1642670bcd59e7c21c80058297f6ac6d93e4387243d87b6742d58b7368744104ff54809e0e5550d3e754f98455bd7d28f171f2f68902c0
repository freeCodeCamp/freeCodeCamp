'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getProp;

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  function getName(name) {
    return options.ignoreCase ? name.toUpperCase() : name;
  }
  var propToFind = getName(prop);
  function isPropToFind(property) {
    return property.type === 'Property' && property.key.type === 'Identifier' && propToFind === getName(property.key.name);
  }

  var foundAttribute = props.find(function (attribute) {
    // If the props contain a spread prop, try to find the property in the object expression.
    if (attribute.type === 'JSXSpreadAttribute') {
      return attribute.argument.type === 'ObjectExpression' && propToFind !== getName('key') // https://github.com/reactjs/rfcs/pull/107
      && attribute.argument.properties.some(isPropToFind);
    }

    return propToFind === getName((0, _propName2.default)(attribute));
  });

  if (foundAttribute && foundAttribute.type === 'JSXSpreadAttribute') {
    return propertyToJSXAttribute(foundAttribute.argument.properties.find(isPropToFind));
  }

  return foundAttribute;
}

function propertyToJSXAttribute(node) {
  var key = node.key,
      value = node.value;

  return _extends({
    type: 'JSXAttribute',
    name: _extends({ type: 'JSXIdentifier', name: key.name }, getBaseProps(key)),
    value: value.type === 'Literal' ? adjustRangeOfNode(value) : _extends({ type: 'JSXExpressionContainer', expression: adjustExpressionRange(value) }, getBaseProps(value))
  }, getBaseProps(node));
}

function adjustRangeOfNode(node) {
  var _ref = node.range || [node.start, node.end],
      _ref2 = _slicedToArray(_ref, 2),
      start = _ref2[0],
      end = _ref2[1];

  return _extends({}, node, {
    end: undefined,
    range: [start, end],
    start: undefined
  });
}

function adjustExpressionRange(_ref3) {
  var expressions = _ref3.expressions,
      quasis = _ref3.quasis,
      expression = _objectWithoutProperties(_ref3, ['expressions', 'quasis']);

  return _extends({}, adjustRangeOfNode(expression), expressions ? { expressions: expressions.map(adjustRangeOfNode) } : {}, quasis ? { quasis: quasis.map(adjustRangeOfNode) } : {});
}

function getBaseProps(_ref4) {
  var loc = _ref4.loc,
      node = _objectWithoutProperties(_ref4, ['loc']);

  var _adjustRangeOfNode = adjustRangeOfNode(node),
      range = _adjustRangeOfNode.range;

  return {
    loc: getBaseLocation(loc),
    range: range
  };
}

function getBaseLocation(_ref5) {
  var start = _ref5.start,
      end = _ref5.end,
      source = _ref5.source,
      filename = _ref5.filename;

  return _extends({
    start: start,
    end: end
  }, source !== undefined ? { source: source } : {}, filename !== undefined ? { filename: filename } : {});
}