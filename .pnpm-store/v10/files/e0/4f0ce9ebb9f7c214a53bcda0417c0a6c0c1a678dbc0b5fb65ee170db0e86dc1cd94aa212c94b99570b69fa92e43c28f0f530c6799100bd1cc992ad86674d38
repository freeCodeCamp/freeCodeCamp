import { DEFAULT_NAMESPACE, ACTION_TYPE_DELIMITER } from '../constants';
import ownKeys from './ownKeys';
import get from './get';

export default predicate =>
  function flatten(
    map,
    { namespace = DEFAULT_NAMESPACE, prefix } = {},
    partialFlatMap = {},
    partialFlatActionType = ''
  ) {
    function connectNamespace(type) {
      if (!partialFlatActionType) return type;
      const types = type.toString().split(ACTION_TYPE_DELIMITER);
      const partials = partialFlatActionType.split(ACTION_TYPE_DELIMITER);
      return []
        .concat(...partials.map(p => types.map(t => `${p}${namespace}${t}`)))
        .join(ACTION_TYPE_DELIMITER);
    }

    function connectPrefix(type) {
      if (
        partialFlatActionType ||
        !prefix ||
        (prefix && new RegExp(`^${prefix}${namespace}`).test(type))
      ) {
        return type;
      }

      return `${prefix}${namespace}${type}`;
    }

    ownKeys(map).forEach(type => {
      const nextNamespace = connectPrefix(connectNamespace(type));
      const mapValue = get(type, map);

      if (predicate(mapValue)) {
        flatten(mapValue, { namespace, prefix }, partialFlatMap, nextNamespace);
      } else {
        partialFlatMap[nextNamespace] = mapValue;
      }
    });

    return partialFlatMap;
  };
