import invariant from 'invariant';
import isPlainObject from './utils/isPlainObject';
import isFunction from './utils/isFunction';
import identity from './utils/identity';
import isArray from './utils/isArray';
import isString from './utils/isString';
import isNil from './utils/isNil';
import getLastElement from './utils/getLastElement';
import camelCase from './utils/camelCase';
import arrayToObject from './utils/arrayToObject';
import flattenActionMap from './utils/flattenActionMap';
import unflattenActionCreators from './utils/unflattenActionCreators';
import createAction from './createAction';
import { DEFAULT_NAMESPACE } from './constants';

export default function createActions(actionMap, ...identityActions) {
  const options = isPlainObject(getLastElement(identityActions))
    ? identityActions.pop()
    : {};
  invariant(
    identityActions.every(isString) &&
      (isString(actionMap) || isPlainObject(actionMap)),
    'Expected optional object followed by string action types'
  );
  if (isString(actionMap)) {
    return actionCreatorsFromIdentityActions(
      [actionMap, ...identityActions],
      options
    );
  }
  return {
    ...actionCreatorsFromActionMap(actionMap, options),
    ...actionCreatorsFromIdentityActions(identityActions, options)
  };
}

function actionCreatorsFromActionMap(actionMap, options) {
  const flatActionMap = flattenActionMap(actionMap, options);
  const flatActionCreators = actionMapToActionCreators(flatActionMap);
  return unflattenActionCreators(flatActionCreators, options);
}

function actionMapToActionCreators(
  actionMap,
  { prefix, namespace = DEFAULT_NAMESPACE } = {}
) {
  function isValidActionMapValue(actionMapValue) {
    if (isFunction(actionMapValue) || isNil(actionMapValue)) {
      return true;
    }

    if (isArray(actionMapValue)) {
      const [payload = identity, meta] = actionMapValue;
      return isFunction(payload) && isFunction(meta);
    }

    return false;
  }

  return arrayToObject(
    Object.keys(actionMap),
    (partialActionCreators, type) => {
      const actionMapValue = actionMap[type];
      invariant(
        isValidActionMapValue(actionMapValue),
        'Expected function, undefined, null, or array with payload and meta ' +
          `functions for ${type}`
      );
      const prefixedType = prefix ? `${prefix}${namespace}${type}` : type;
      const actionCreator = isArray(actionMapValue)
        ? createAction(prefixedType, ...actionMapValue)
        : createAction(prefixedType, actionMapValue);
      return { ...partialActionCreators, [type]: actionCreator };
    }
  );
}

function actionCreatorsFromIdentityActions(identityActions, options) {
  const actionMap = arrayToObject(
    identityActions,
    (partialActionMap, type) => ({ ...partialActionMap, [type]: identity })
  );
  const actionCreators = actionMapToActionCreators(actionMap, options);
  return arrayToObject(
    Object.keys(actionCreators),
    (partialActionCreators, type) => ({
      ...partialActionCreators,
      [camelCase(type)]: actionCreators[type]
    })
  );
}
