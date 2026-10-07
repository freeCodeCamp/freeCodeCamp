import ownerDocument from './ownerDocument';
/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

export default function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}