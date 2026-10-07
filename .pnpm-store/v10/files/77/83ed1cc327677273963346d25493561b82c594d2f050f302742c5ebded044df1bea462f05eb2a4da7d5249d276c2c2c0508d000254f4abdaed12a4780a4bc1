'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getNodeDimensions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getCloneDimensions = require('./get-clone-dimensions');

var _getCloneDimensions2 = _interopRequireDefault(_getCloneDimensions);

var _getMargin = require('./get-margin');

var _getMargin2 = _interopRequireDefault(_getMargin);

function getNodeDimensions(node) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var rect = node.getBoundingClientRect();
  var width = undefined,
      height = undefined,
      margin = undefined;

  // determine if we need to clone the element to get proper dimensions or not
  if (!rect.width || !rect.height || options.clone) {
    var cloneDimensions = (0, _getCloneDimensions2['default'])(node, options);
    rect = cloneDimensions.rect;
    margin = cloneDimensions.margin;
  }
  // if no cloning needed, we need to determine if margin should be accounted for
  else if (options.margin) {
      margin = (0, _getMargin2['default'])(getComputedStyle(node));
    }

  // include margin in width/height calculation if desired
  if (options.margin) {
    width = margin.left + rect.width + margin.right;
    height = margin.top + rect.height + margin.bottom;
  } else {
    width = rect.width;
    height = rect.height;
  }

  return {
    width: width,
    height: height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left
  };
}

module.exports = exports['default'];