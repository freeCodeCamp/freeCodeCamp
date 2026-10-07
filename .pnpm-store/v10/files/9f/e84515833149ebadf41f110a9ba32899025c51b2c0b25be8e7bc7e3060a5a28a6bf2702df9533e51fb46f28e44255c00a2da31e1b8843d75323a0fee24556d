import _extends from "@babel/runtime/helpers/esm/extends";
import css from './css';
import getOffset from './offset';
import getOffsetParent from './offsetParent';
import scrollLeft from './scrollLeft';
import scrollTop from './scrollTop';

var nodeName = function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};
/**
 * Returns the relative position of a given element.
 * 
 * @param node the element
 * @param offsetParent the offset parent
 */


export default function position(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if (css(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    var parent = offsetParent || getOffsetParent(node);
    offset = getOffset(node);
    if (nodeName(parent) !== 'html') parentOffset = getOffset(parent);
    var borderTop = String(css(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - scrollTop(parent) || 0;
    var borderLeft = String(css(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - scrollLeft(parent) || 0;
  }

  var marginTop = String(css(node, 'marginTop') || 0);
  var marginLeft = String(css(node, 'marginLeft') || 0); // Subtract parent offsets and node margins

  return _extends({}, offset, {
    top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}