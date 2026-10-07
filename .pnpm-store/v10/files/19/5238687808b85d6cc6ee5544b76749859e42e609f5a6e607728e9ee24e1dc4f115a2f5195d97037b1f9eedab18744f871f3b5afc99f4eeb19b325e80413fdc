import invariant from 'invariant';
import isFunction from './utils/isFunction';
import isPlainObject from './utils/isPlainObject';
import identity from './utils/identity';
import isNil from './utils/isNil';
import isUndefined from './utils/isUndefined';
import toString from './utils/toString';
import { ACTION_TYPE_DELIMITER } from './constants';

export default function handleAction(type, reducer = identity, defaultState) {
  const types = toString(type).split(ACTION_TYPE_DELIMITER);
  invariant(
    !isUndefined(defaultState),
    `defaultState for reducer handling ${types.join(', ')} should be defined`
  );
  invariant(
    isFunction(reducer) || isPlainObject(reducer),
    'Expected reducer to be a function or object with next and throw reducers'
  );

  const [nextReducer, throwReducer] = isFunction(reducer)
    ? [reducer, reducer]
    : [reducer.next, reducer.throw].map(
        aReducer => (isNil(aReducer) ? identity : aReducer)
      );

  return (state = defaultState, action) => {
    const { type: actionType } = action;
    if (!actionType || types.indexOf(toString(actionType)) === -1) {
      return state;
    }

    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}
