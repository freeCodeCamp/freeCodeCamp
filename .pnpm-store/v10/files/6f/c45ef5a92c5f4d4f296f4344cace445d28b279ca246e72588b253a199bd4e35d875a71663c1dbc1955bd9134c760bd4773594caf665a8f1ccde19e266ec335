function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
export default function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }

  var options = isPlainObject(getLastElement(identityActions)) ? identityActions.pop() : {};
  invariant(identityActions.every(isString) && (isString(actionMap) || isPlainObject(actionMap)), 'Expected optional object followed by string action types');

  if (isString(actionMap)) {
    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
  }

  return _objectSpread({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
}

function actionCreatorsFromActionMap(actionMap, options) {
  var flatActionMap = flattenActionMap(actionMap, options);
  var flatActionCreators = actionMapToActionCreators(flatActionMap);
  return unflattenActionCreators(flatActionCreators, options);
}

function actionMapToActionCreators(actionMap, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      prefix = _ref.prefix,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace;

  function isValidActionMapValue(actionMapValue) {
    if (isFunction(actionMapValue) || isNil(actionMapValue)) {
      return true;
    }

    if (isArray(actionMapValue)) {
      var _actionMapValue$ = actionMapValue[0],
          payload = _actionMapValue$ === void 0 ? identity : _actionMapValue$,
          meta = actionMapValue[1];
      return isFunction(payload) && isFunction(meta);
    }

    return false;
  }

  return arrayToObject(Object.keys(actionMap), function (partialActionCreators, type) {
    var _objectSpread2;

    var actionMapValue = actionMap[type];
    invariant(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
    var prefixedType = prefix ? "" + prefix + namespace + type : type;
    var actionCreator = isArray(actionMapValue) ? createAction.apply(void 0, [prefixedType].concat(actionMapValue)) : createAction(prefixedType, actionMapValue);
    return _objectSpread({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
  });
}

function actionCreatorsFromIdentityActions(identityActions, options) {
  var actionMap = arrayToObject(identityActions, function (partialActionMap, type) {
    var _objectSpread3;

    return _objectSpread({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = identity, _objectSpread3));
  });
  var actionCreators = actionMapToActionCreators(actionMap, options);
  return arrayToObject(Object.keys(actionCreators), function (partialActionCreators, type) {
    var _objectSpread4;

    return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[camelCase(type)] = actionCreators[type], _objectSpread4));
  });
}