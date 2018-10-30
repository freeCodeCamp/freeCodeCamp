function resolveMemberExpressions(object = {}, property = {}) {
  if (object.type === 'JSXMemberExpression') {
    return `${resolveMemberExpressions(object.object, object.property)}.${property.name}`;
  }

  return `${object.name}.${property.name}`;
}

/**
 * Returns the tagName associated with a JSXElement.
 */
export default function elementType(node = {}) {
  const { name } = node;

  if (!name) {
    throw new Error('The argument provided is not a JSXElement node.');
  }

  if (name.type === 'JSXMemberExpression') {
    const { object = {}, property = {} } = name;
    return resolveMemberExpressions(object, property);
  } else if (name.type === 'JSXNamespacedName') {
    return `${name.namespace.name}:${name.name.name}`;
  }

  return node.name.name;
}
