(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(factory((global.ReduxActions = {})));
}(this, (function (exports) { 'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

var invariant_1 = invariant;

var isFunction = (function (value) {
  return typeof value === 'function';
});

var isSymbol = (function (value) {
  return typeof value === 'symbol' || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';
});

var isEmpty = (function (value) {
  return value.length === 0;
});

var toString = (function (value) {
  return value.toString();
});

var isString = (function (value) {
  return typeof value === 'string';
});

var DEFAULT_NAMESPACE = '/';
var ACTION_TYPE_DELIMITER = '||';

function isValidActionType(type) {
  return isString(type) || isFunction(type) || isSymbol(type);
}

function isValidActionTypes(types) {
  if (isEmpty(types)) {
    return false;
  }

  return types.every(isValidActionType);
}

function combineActions() {
  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  invariant_1(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(toString).join(ACTION_TYPE_DELIMITER);
  return {
    toString: function toString$$1() {
      return combinedActionType;
    }
  };
}

var identity = (function (value) {
  return value;
});

var isNull = (function (value) {
  return value === null;
});

function createAction(type, payloadCreator, metaCreator) {
  if (payloadCreator === void 0) {
    payloadCreator = identity;
  }

  invariant_1(isFunction(payloadCreator) || isNull(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
  var finalPayloadCreator = isNull(payloadCreator) || payloadCreator === identity ? identity : function (head) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));
  };
  var hasMeta = isFunction(metaCreator);
  var typeString = type.toString();

  var actionCreator = function actionCreator() {
    var payload = finalPayloadCreator.apply(void 0, arguments);
    var action = {
      type: type
    };

    if (payload instanceof Error) {
      action.error = true;
    }

    if (payload !== undefined) {
      action.payload = payload;
    }

    if (hasMeta) {
      action.meta = metaCreator.apply(void 0, arguments);
    }

    return action;
  };

  actionCreator.toString = function () {
    return typeString;
  };

  return actionCreator;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var isPlainObject = (function (value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
});

var isArray = (function (value) {
  return Array.isArray(value);
});

var isNil = (function (value) {
  return value === null || value === undefined;
});

var getLastElement = (function (array) {
  return array[array.length - 1];
});

/**
 * Export.
 */
var toNoCase_1 = toNoCase;
/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase();
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
  return string.toLowerCase();
}
/**
 * Separator splitter.
 */


var separatorSplitter = /[\W_]+(.|$)/g;
/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : '';
  });
}
/**
 * Camelcase splitter.
 */


var camelSplitter = /(.)([A-Z]+)/g;
/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
  });
}

/**
 * Export.
 */

var toSpaceCase_1 = toSpaceCase;
/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return toNoCase_1(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : '';
  }).trim();
}

/**
 * Export.
 */

var toCamelCase_1 = toCamelCase;
/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return toSpaceCase_1(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase();
  });
}

var namespacer = '/';
var camelCase = (function (type) {
  return type.indexOf(namespacer) === -1 ? toCamelCase_1(type) : type.split(namespacer).map(toCamelCase_1).join(namespacer);
});

var arrayToObject = (function (array, callback) {
  return array.reduce(function (partialObject, element) {
    return callback(partialObject, element);
  }, {});
});

var isMap = (function (value) {
  return typeof Map !== 'undefined' && value instanceof Map;
});

function ownKeys(object) {
  if (isMap(object)) {
    // We are using loose transforms in babel. Here we are trying to convert an
    // interable to an array. Loose mode expects everything to already be an
    // array. The problem is that our eslint rules encourage us to prefer
    // spread over Array.from.
    //
    // Instead of disabling loose mode we simply disable the warning.
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(object.keys());
  }

  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    return Reflect.ownKeys(object);
  }

  var keys = Object.getOwnPropertyNames(object);

  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }

  return keys;
}

function get(key, x) {
  return isMap(x) ? x.get(key) : x[key];
}

var flattenWhenNode = (function (predicate) {
  return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace,
        prefix = _ref.prefix;

    if (partialFlatMap === void 0) {
      partialFlatMap = {};
    }

    if (partialFlatActionType === void 0) {
      partialFlatActionType = '';
    }

    function connectNamespace(type) {
      var _ref2;

      if (!partialFlatActionType) return type;
      var types = type.toString().split(ACTION_TYPE_DELIMITER);
      var partials = partialFlatActionType.split(ACTION_TYPE_DELIMITER);
      return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
        return types.map(function (t) {
          return "" + p + namespace + t;
        });
      })).join(ACTION_TYPE_DELIMITER);
    }

    function connectPrefix(type) {
      if (partialFlatActionType || !prefix || prefix && new RegExp("^" + prefix + namespace).test(type)) {
        return type;
      }

      return "" + prefix + namespace + type;
    }

    ownKeys(map).forEach(function (type) {
      var nextNamespace = connectPrefix(connectNamespace(type));
      var mapValue = get(type, map);

      if (predicate(mapValue)) {
        flatten(mapValue, {
          namespace: namespace,
          prefix: prefix
        }, partialFlatMap, nextNamespace);
      } else {
        partialFlatMap[nextNamespace] = mapValue;
      }
    });
    return partialFlatMap;
  };
});

var flattenActionMap = flattenWhenNode(isPlainObject);

function unflattenActionCreators(flatActionCreators, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace,
      prefix = _ref.prefix;

  function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {
    var nextNamespace = camelCase(partialFlatActionTypePath.shift());

    if (isEmpty(partialFlatActionTypePath)) {
      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
    } else {
      if (!partialNestedActionCreators[nextNamespace]) {
        partialNestedActionCreators[nextNamespace] = {};
      }

      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
    }
  }

  var nestedActionCreators = {};
  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
    var unprefixedType = prefix ? type.replace("" + prefix + namespace, '') : type;
    return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
  });
  return nestedActionCreators;
}

function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }

  var options = isPlainObject(getLastElement(identityActions)) ? identityActions.pop() : {};
  invariant_1(identityActions.every(isString) && (isString(actionMap) || isPlainObject(actionMap)), 'Expected optional object followed by string action types');

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
    invariant_1(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
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

var justCurryIt = curry;
/*
  function add(a, b, c) {
    return a + b + c;
  }
  curry(add)(1)(2)(3); // 6
  curry(add)(1)(2)(2); // 5
  curry(add)(2)(4, 3); // 9

  function add(...args) {
    return args.reduce((sum, n) => sum + n, 0)
  }
  var curryAdd4 = curry(add, 4)
  curryAdd4(1)(2, 3)(4); // 10

  function converter(ratio, input) {
    return (input*ratio).toFixed(1);
  }
  const curriedConverter = curry(converter)
  const milesToKm = curriedConverter(1.62);
  milesToKm(35); // 56.7
  milesToKm(10); // 16.2
*/

function curry(fn, arity) {
  return function curried() {
    if (arity == null) {
      arity = fn.length;
    }

    var args = [].slice.call(arguments);

    if (args.length >= arity) {
      return fn.apply(this, args);
    } else {
      return function () {
        return curried.apply(this, args.concat([].slice.call(arguments)));
      };
    }
  };
}

var createCurriedAction = (function (type, payloadCreator) {
  return justCurryIt(createAction(type, payloadCreator), payloadCreator.length);
});

var isUndefined = (function (value) {
  return value === undefined;
});

function handleAction(type, reducer, defaultState) {
  if (reducer === void 0) {
    reducer = identity;
  }

  var types = toString(type).split(ACTION_TYPE_DELIMITER);
  invariant_1(!isUndefined(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
  invariant_1(isFunction(reducer) || isPlainObject(reducer), 'Expected reducer to be a function or object with next and throw reducers');

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

var reduceReducers = (function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var initialState = typeof args[args.length - 1] !== 'function' && args.pop();
  var reducers = args;

  if (typeof initialState === 'undefined') {
    throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');
  }

  return function (prevState, value) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var prevStateIsUndefined = typeof prevState === 'undefined';
    var valueIsUndefined = typeof value === 'undefined';

    if (prevStateIsUndefined && valueIsUndefined && initialState) {
      return initialState;
    }

    return reducers.reduce(function (newState, reducer) {
      return reducer.apply(undefined, [newState, value].concat(args));
    }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
  };
});

function hasGeneratorInterface(handler) {
  var keys = ownKeys(handler);
  var hasOnlyInterfaceNames = keys.every(function (ownKey) {
    return ownKey === 'next' || ownKey === 'throw';
  });
  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
}

var flattenReducerMap = flattenWhenNode(function (node) {
  return (isPlainObject(node) || isMap(node)) && !hasGeneratorInterface(node);
});

function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }

  invariant_1(isPlainObject(handlers) || isMap(handlers), 'Expected handlers to be a plain object.');
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

exports.combineActions = combineActions;
exports.createAction = createAction;
exports.createActions = createActions;
exports.createCurriedAction = createCurriedAction;
exports.handleAction = handleAction;
exports.handleActions = handleActions;

Object.defineProperty(exports, '__esModule', { value: true });

})));
