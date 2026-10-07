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

export default function combineActions(...actionsTypes) {
  invariant(
    isValidActionTypes(actionsTypes),
    'Expected action types to be strings, symbols, or action creators'
  );
  const combinedActionType = actionsTypes
    .map(toString)
    .join(ACTION_TYPE_DELIMITER);
  return { toString: () => combinedActionType };
}
