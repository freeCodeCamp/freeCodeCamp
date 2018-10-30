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
  const propToFind = options.ignoreCase ? prop.toUpperCase() : prop;

  return props.find((attribute) => {
    // If the props contain a spread prop, then skip.
    if (attribute.type === 'JSXSpreadAttribute') {
      return false;
    }

    const currentProp = options.ignoreCase ?
      propName(attribute).toUpperCase() :
      propName(attribute);

    return propToFind === currentProp;
  });
}
