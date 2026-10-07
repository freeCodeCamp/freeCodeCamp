import invariant from 'invariant';
import isFunction from './utils/isFunction';
import isSymbol from './utils/isSymbol';
import isEmpty from './utils/isEmpty';
import toString from './utils/toString';
import isString from './utils/isString';
import { ACTION_TYPE_DELIMITER } from './constants';

function isValidActionType(type) {
  return isString(type) || isFunction(type) || isSymbol(type);
}

function isValidActionTypes(types) {
  if (isEmpty(types)) {
    return false;
  }

  return types.every(isValidActionType);
}

export default function combineActions() {
  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  invariant(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(toString).join(ACTION_TYPE_DELIMITER);
  return {
    toString: function toString() {
      return combinedActionType;
    }
  };
}