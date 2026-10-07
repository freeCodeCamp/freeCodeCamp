// @flow
import { END } from 'redux-saga';
import { findIndex } from '../utils/array';

export default function findDispatchableActionIndex(
  actions: Array<Action>,
  pattern: ?Pattern,
): number {
  if (pattern == null || actions.length <= 0) {
    return -1;
  }

  if (pattern === '*') {
    return 0;
  }

  if (typeof pattern === 'function' && hasOwn(pattern, 'toString')) {
    return findDispatchableActionIndex(actions, String(pattern));
  }

  if (typeof pattern === 'function') {
    // Refinements not catching that `pattern` is a function
    // $FlowFixMe
    return findIndex(actions, a => pattern(a));
  }

  if (Array.isArray(pattern)) {
    for (let i = 0, l = pattern.length; i < l; i++) {
      const index = findDispatchableActionIndex(actions, pattern[i]);

      if (index > -1) {
        return index;
      }
    }

    return -1;
  }

  return findIndex(actions, a => a.type === pattern || a.type === END.type);
}

function hasOwn(object: Object, key: string): boolean {
  return {}.hasOwnProperty.call(object, key);
}
