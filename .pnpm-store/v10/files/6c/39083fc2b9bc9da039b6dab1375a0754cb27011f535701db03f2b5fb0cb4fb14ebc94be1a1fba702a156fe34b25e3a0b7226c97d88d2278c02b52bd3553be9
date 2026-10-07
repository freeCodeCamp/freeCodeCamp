'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getCloneDimensions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getMargin = require('./get-margin');

var _getMargin2 = _interopRequireDefault(_getMargin);

function getCloneDimensions(node, options) {
  var parentNode = node.parentNode;

  var context = document.createElement('div');
  var clone = node.cloneNode(true);
  var style = getComputedStyle(node);
  var rect = undefined,
      width = undefined,
      height = undefined,
      margin = undefined;

  // give the node some context to measure off of
  // no height and hidden overflow hide node copy
  context.style.height = 0;
  context.style.overflow = 'hidden';

  // clean up any attributes that might cause a conflict with the original node
  // i.e. inputs that should focus or submit data
  clone.setAttribute('id', '');
  clone.setAttribute('name', '');

  // set props to get a true dimension calculation
  if (options.display || style && style.getPropertyValue('display') === 'none') {
    clone.style.display = options.display || 'block';
  }
  if (options.width || style && !parseInt(style.getPropertyValue('width'))) {
    clone.style.width = options.width || 'auto';
  }
  if (options.height || style && !parseInt(style.getPropertyValue('height'))) {
    clone.style.height = options.height || 'auto';
  }

  // append copy to context
  context.appendChild(clone);

  // append context to DOM so we can measure
  parentNode.appendChild(context);

  // get accurate dimensions
  rect = clone.getBoundingClientRect();
  width = clone.offsetWidth;
  height = clone.offsetHeight;

  // destroy clone
  parentNode.removeChild(context);

  return {
    rect: {
      width: width,
      height: height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left
    },
    margin: (0, _getMargin2['default'])(style)
  };
}

module.exports = exports['default'];