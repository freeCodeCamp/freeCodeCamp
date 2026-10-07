import reduceReducers from 'reduce-reducers';
import invariant from 'invariant';
import isPlainObject from './utils/isPlainObject';
import isMap from './utils/isMap';
import ownKeys from './utils/ownKeys';
import flattenReducerMap from './utils/flattenReducerMap';
import handleAction from './handleAction';
import get from './utils/get';
export default function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }

  invariant(isPlainObject(handlers) || isMap(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = flattenReducerMap(handlers, options);
  var reducers = ownKeys(flattenedReducerMap).map(function (type) {
    return handleAction(type, get(type, flattenedReducerMap), defaultState);
  });
  var reducer = reduceReducers.apply(void 0, reducers.concat([defaultState]));
  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    return reducer(state, action);
  };
}