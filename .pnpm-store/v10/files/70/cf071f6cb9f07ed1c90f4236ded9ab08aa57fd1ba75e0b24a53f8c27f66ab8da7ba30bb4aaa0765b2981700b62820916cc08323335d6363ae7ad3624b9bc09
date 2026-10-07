import { GraphQLError } from '../../error/GraphQLError.mjs';
import { Kind } from '../../language/kinds.mjs';
const MAX_LISTS_DEPTH = 3;
export function MaxIntrospectionDepthRule(context) {
  /**
   * Counts the depth of list fields in "__Type" recursively and
   * returns `true` if the limit has been reached.
   */
  function checkDepth(node, visitedFragments = Object.create(null), depth = 0) {
    if (node.kind === Kind.FRAGMENT_SPREAD) {
      const fragmentName = node.name.value;

      if (visitedFragments[fragmentName] === true) {
        // Fragment cycles are handled by `NoFragmentCyclesRule`.
        return false;
      }

      const fragment = context.getFragment(fragmentName);

      if (!fragment) {
        // Missing fragments checks are handled by `KnownFragmentNamesRule`.
        return false;
      } // Rather than following an immutable programming pattern which has
      // significant memory and garbage collection overhead, we've opted to
      // take a mutable approach for efficiency's sake. Importantly visiting a
      // fragment twice is fine, so long as you don't do one visit inside the
      // other.

      try {
        visitedFragments[fragmentName] = true;
        return checkDepth(fragment, visitedFragments, depth);
      } finally {
        visitedFragments[fragmentName] = undefined;
      }
    }

    if (
      node.kind === Kind.FIELD && // check all introspection lists
      (node.name.value === 'fields' ||
        node.name.value === 'interfaces' ||
        node.name.value === 'possibleTypes' ||
        node.name.value === 'inputFields')
    ) {
      // eslint-disable-next-line no-param-reassign
      depth++;

      if (depth >= MAX_LISTS_DEPTH) {
        return true;
      }
    } // handles fields and inline fragments

    if ('selectionSet' in node && node.selectionSet) {
      for (const child of node.selectionSet.selections) {
        if (checkDepth(child, visitedFragments, depth)) {
          return true;
        }
      }
    }

    return false;
  }

  return {
    Field(node) {
      if (node.name.value === '__schema' || node.name.value === '__type') {
        if (checkDepth(node)) {
          context.reportError(
            new GraphQLError('Maximum introspection depth exceeded', {
              nodes: [node],
            }),
          );
          return false;
        }
      }
    },
  };
}
