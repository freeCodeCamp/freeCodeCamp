/**
 * Insert a given element as the first child of a parent element.
 * 
 * @param node the element to prepend
 * @param parent the parent element
 */
export default function prepend(node, parent) {
  if (node && parent) {
    if (parent.firstElementChild) {
      parent.insertBefore(node, parent.firstElementChild);
    } else {
      parent.appendChild(node);
    }

    return node;
  }

  return null;
}