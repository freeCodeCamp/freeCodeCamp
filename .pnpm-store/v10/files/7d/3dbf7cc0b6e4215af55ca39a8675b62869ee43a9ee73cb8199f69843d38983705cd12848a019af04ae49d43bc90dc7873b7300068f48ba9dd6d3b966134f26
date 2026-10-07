import getWindow from './isWindow';
import offset from './offset';
/**
 * Returns the width of a given element.
 * 
 * @param node the element
 * @param client whether to use `clientWidth` if possible
 */

export default function getWidth(node, client) {
  var win = getWindow(node);
  return win ? win.innerWidth : client ? node.clientWidth : offset(node).width;
}