// getId expects the image reference node to be the sole node in a paragraph

function getId(node) {
  if (node.type !== 'paragraph') return null;
  if (node.children.length > 1) return null;
  const idHolder = node.children[0];
  // the ids should be of the form ![id]().  If the url exists, it's likely a
  // mistake.
  if (idHolder.type === 'image' && idHolder.url === '') {
    return idHolder.alt;
  }
  return null;
}

module.exports = getId;
