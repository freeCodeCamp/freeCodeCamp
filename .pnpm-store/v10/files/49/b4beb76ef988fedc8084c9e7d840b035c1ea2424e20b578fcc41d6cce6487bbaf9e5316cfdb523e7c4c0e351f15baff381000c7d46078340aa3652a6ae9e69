import collectSiblings from './collectSiblings';
/**
 * Collects all previous and next sibling elements of a given element.
 * 
 * @param node the element
 */

export default function siblings(node) {
  return collectSiblings(node && node.parentElement ? node.parentElement.firstElementChild : null, node);
}