import propName from './propName';

const DEFAULT_OPTIONS = {
  spreadStrict: true,
  ignoreCase: true,
};

/**
 * Returns boolean indicating whether an prop exists on the props
 * property of a JSX element node.
 */
export default function hasProp(props = [], prop = '', options = DEFAULT_OPTIONS) {
  const propToCheck = options.ignoreCase ? prop.toUpperCase() : prop;

  return props.some((attribute) => {
    // If the props contain a spread prop, then refer to strict param.
    if (attribute.type === 'JSXSpreadAttribute') {
      return !options.spreadStrict;
    }

    const currentProp = options.ignoreCase
      ? propName(attribute).toUpperCase()
      : propName(attribute);

    return propToCheck === currentProp;
  });
}

/**
 * Given the props on a node and a list of props to check, this returns a boolean
 * indicating if any of them exist on the node.
 */
export function hasAnyProp(nodeProps = [], props = [], options = DEFAULT_OPTIONS) {
  const propsToCheck = typeof props === 'string' ? props.split(' ') : props;

  return propsToCheck.some((prop) => hasProp(nodeProps, prop, options));
}

/**
 * Given the props on a node and a list of props to check, this returns a boolean
 * indicating if all of them exist on the node
 */
export function hasEveryProp(nodeProps = [], props = [], options = DEFAULT_OPTIONS) {
  const propsToCheck = typeof props === 'string' ? props.split(' ') : props;

  return propsToCheck.every((prop) => hasProp(nodeProps, prop, options));
}
