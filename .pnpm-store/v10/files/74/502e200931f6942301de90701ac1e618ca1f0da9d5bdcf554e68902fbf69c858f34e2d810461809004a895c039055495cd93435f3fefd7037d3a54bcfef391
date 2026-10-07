import invariant from 'invariant';
import isFunction from './utils/isFunction';
import isPlainObject from './utils/isPlainObject';
import identity from './utils/identity';
import isNil from './utils/isNil';
import isUndefined from './utils/isUndefined';
import toString from './utils/toString';
import { ACTION_TYPE_DELIMITER } from './constants';
export default function handleAction(type, reducer, defaultState) {
  if (reducer === void 0) {
    reducer = identity;
  }

  var types = toString(type).split(ACTION_TYPE_DELIMITER);
  invariant(!isUndefined(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
  invariant(isFunction(reducer) || isPlainObject(reducer), 'Expected reducer to be a function or object with next and throw reducers');

  var _ref = isFunction(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
    return isNil(aReducer) ? identity : aReducer;
  }),
      nextReducer = _ref[0],
      throwReducer = _ref[1];

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    var actionType = action.type;

    if (!actionType || types.indexOf(toString(actionType)) === -1) {
      return state;
    }

    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}