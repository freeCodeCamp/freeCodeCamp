export default function collectElements(node, direction) {
  var nextNode = null;
  var nodes = [];
  nextNode = node ? node[direction] : null;

  while (nextNode && nextNode.nodeType !== 9) {
    nodes.push(nextNode);
    nextNode = nextNode[direction] || null;
  }

  return nodes;
}