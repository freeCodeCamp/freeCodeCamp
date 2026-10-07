import propName from './propName';

const DEFAULT_OPTIONS = {
  ignoreCase: true,
};

/**
 * Returns the JSXAttribute itself or undefined, indicating the prop
 * is not present on the JSXOpeningElement.
 *
 */
export default function getProp(props = [], prop = '', options = DEFAULT_OPTIONS) {
  function getName(name) { return options.ignoreCase ? name.toUpperCase() : name; }
  const propToFind = getName(prop);
  function isPropToFind(property) {
    return property.type === 'Property'
      && property.key.type === 'Identifier'
      && propToFind === getName(property.key.name);
  }

  const foundAttribute = props.find((attribute) => {
    // If the props contain a spread prop, try to find the property in the object expression.
    if (attribute.type === 'JSXSpreadAttribute') {
      return attribute.argument.type === 'ObjectExpression'
        && propToFind !== getName('key') // https://github.com/reactjs/rfcs/pull/107
        && attribute.argument.properties.some(isPropToFind);
    }

    return propToFind === getName(propName(attribute));
  });

  if (foundAttribute && foundAttribute.type === 'JSXSpreadAttribute') {
    return propertyToJSXAttribute(foundAttribute.argument.properties.find(isPropToFind));
  }

  return foundAttribute;
}

function propertyToJSXAttribute(node) {
  const { key, value } = node;
  return {
    type: 'JSXAttribute',
    name: { type: 'JSXIdentifier', name: key.name, ...getBaseProps(key) },
    value: value.type === 'Literal'
      ? adjustRangeOfNode(value)
      : { type: 'JSXExpressionContainer', expression: adjustExpressionRange(value), ...getBaseProps(value) },
    ...getBaseProps(node),
  };
}

function adjustRangeOfNode(node) {
  const [start, end] = node.range || [node.start, node.end];

  return {
    ...node,
    end: undefined,
    range: [start, end],
    start: undefined,
  };
}

function adjustExpressionRange({ expressions, quasis, ...expression }) {
  return {
    ...adjustRangeOfNode(expression),
    ...(expressions ? { expressions: expressions.map(adjustRangeOfNode) } : {}),
    ...(quasis ? { quasis: quasis.map(adjustRangeOfNode) } : {}),
  };
}

function getBaseProps({ loc, ...node }) {
  const { range } = adjustRangeOfNode(node);

  return {
    loc: getBaseLocation(loc),
    range,
  };
}

function getBaseLocation({
  start,
  end,
  source,
  filename,
}) {
  return {
    start,
    end,
    ...(source !== undefined ? { source } : {}),
    ...(filename !== undefined ? { filename } : {}),
  };
}
