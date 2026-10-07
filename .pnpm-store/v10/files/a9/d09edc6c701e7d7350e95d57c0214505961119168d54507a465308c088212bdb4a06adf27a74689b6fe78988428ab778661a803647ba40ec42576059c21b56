import matches from './matches';
export default function collectSiblings(node, refNode, selector) {
  if (refNode === void 0) {
    refNode = null;
  }

  if (selector === void 0) {
    selector = null;
  }

  var siblings = [];

  for (; node; node = node.nextElementSibling) {
    if (node !== refNode) {
      if (selector && matches(node, selector)) {
        break;
      }

      siblings.push(node);
    }
  }

  return siblings;
}