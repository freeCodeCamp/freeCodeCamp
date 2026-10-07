import getWindow from './isWindow';
import offset from './offset';
/**
 * Returns the height of a given element.
 * 
 * @param node the element
 * @param client whether to use `clientHeight` if possible
 */

export default function height(node, client) {
  var win = getWindow(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset(node).height;
}