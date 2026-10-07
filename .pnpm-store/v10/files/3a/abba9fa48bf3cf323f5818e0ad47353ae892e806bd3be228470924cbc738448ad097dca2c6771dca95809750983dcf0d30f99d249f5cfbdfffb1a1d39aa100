import { DEFAULT_NAMESPACE } from '../constants';
import isEmpty from './isEmpty';
import camelCase from './camelCase';

export default function unflattenActionCreators(
  flatActionCreators,
  { namespace = DEFAULT_NAMESPACE, prefix } = {}
) {
  function unflatten(
    flatActionType,
    partialNestedActionCreators,
    partialFlatActionTypePath
  ) {
    const nextNamespace = camelCase(partialFlatActionTypePath.shift());
    if (isEmpty(partialFlatActionTypePath)) {
      partialNestedActionCreators[nextNamespace] =
        flatActionCreators[flatActionType];
    } else {
      if (!partialNestedActionCreators[nextNamespace]) {
        partialNestedActionCreators[nextNamespace] = {};
      }
      unflatten(
        flatActionType,
        partialNestedActionCreators[nextNamespace],
        partialFlatActionTypePath
      );
    }
  }

  const nestedActionCreators = {};
  Object.getOwnPropertyNames(flatActionCreators).forEach(type => {
    const unprefixedType = prefix
      ? type.replace(`${prefix}${namespace}`, '')
      : type;
    return unflatten(
      type,
      nestedActionCreators,
      unprefixedType.split(namespace)
    );
  });

  return nestedActionCreators;
}
