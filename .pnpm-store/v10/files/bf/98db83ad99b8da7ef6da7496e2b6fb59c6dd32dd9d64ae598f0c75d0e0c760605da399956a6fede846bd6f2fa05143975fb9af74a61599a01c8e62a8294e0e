/**
 * Removes all child nodes from a given node.
 * 
 * @param node the node to clear
 */
export default function clear(node) {
  if (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }

    return node;
  }

  return null;
}