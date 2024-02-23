// getId expects the image reference node to be the sole node in a paragraph
function getId(node) {
  const { type, name, attributes } = node;
  if (type !== 'leafDirective' || name !== 'id' || !attributes) return null;
  return attributes.id;
}

module.exports = getId;
