// getId expects the image reference node to be the sole node in a paragraph

function getId(node) {
  if (node.type !== 'paragraph') return null;
  if (node.children.length > 1) return null;
  const idHolder = node.children[0];
  if (idHolder.type === 'imageReference') return idHolder.identifier;
  return null;
}

module.exports = getId;
