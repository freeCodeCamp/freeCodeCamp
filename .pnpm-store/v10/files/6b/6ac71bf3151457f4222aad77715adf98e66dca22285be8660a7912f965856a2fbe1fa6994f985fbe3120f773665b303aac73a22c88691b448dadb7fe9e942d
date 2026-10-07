import { __values, __spreadArray, __read, __assign } from './_virtual/_tslib.js';
import { SpecialTargets } from './types.js';
import { raise, send } from './actionTypes.js';
import { DEFAULT_GUARD_TYPE, TARGETLESS_KEY, STATE_DELIMITER } from './constants.js';
import { IS_PRODUCTION } from './environment.js';

var _a;
function keys(value) {
  return Object.keys(value);
}
function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = STATE_DELIMITER;
  }

  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);

  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    } // Parent more specific than child


    return false;
  }

  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }

  return Object.keys(parentStateValue).every(function (key) {
    if (!(key in childStateValue)) {
      return false;
    }

    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}
function getEventType(event) {
  try {
    return isString(event) || typeof event === 'number' ? "".concat(event) : event.type;
  } catch (e) {
    throw new Error('Events must be strings or objects with a string event.type property.');
  }
}
function getActionType(action) {
  try {
    return isString(action) || typeof action === 'number' ? "".concat(action) : isFunction(action) ? action.name : action.type;
  } catch (e) {
    throw new Error('Actions must be strings or objects with a string action.type property.');
  }
}
function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }

    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'".concat(stateId, "' is not a valid state path."));
  }
}
function isStateLike(state) {
  return typeof state === 'object' && 'value' in state && 'context' in state && 'event' in state && '_event' in state;
}
function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }

  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }

  if (typeof stateValue !== 'string') {
    return stateValue;
  }

  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}
function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }

  var value = {};
  var marker = value;

  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }

  return value;
}
function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = Object.keys(collection);

  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }

  return result;
}
function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a;

  var result = {};

  try {
    for (var _b = __values(Object.keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];

      if (!predicate(item)) {
        continue;
      }

      result[key] = iteratee(item, key, collection);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return result;
}
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */

var path = function (props) {
  return function (object) {
    var e_2, _a;

    var result = object;

    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return result;
  };
};
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */

function nestedPath(props, accessorProp) {
  return function (object) {
    var e_3, _a;

    var result = object;

    try {
      for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return result;
  };
}
function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }

  if (isString(stateValue)) {
    return [[stateValue]];
  }

  var result = flatten(Object.keys(stateValue).map(function (key) {
    var subStateValue = stateValue[key];

    if (typeof subStateValue !== 'string' && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }

    return toStatePaths(stateValue[key]).map(function (subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}
function pathsToStateValue(paths) {
  var e_4, _a;

  var result = {};

  if (paths && paths.length === 1 && paths[0].length === 1) {
    return paths[0][0];
  }

  try {
    for (var paths_1 = __values(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()) {
      var currentPath = paths_1_1.value;
      var marker = result; // tslint:disable-next-line:prefer-for-of

      for (var i = 0; i < currentPath.length; i++) {
        var subPath = currentPath[i];

        if (i === currentPath.length - 2) {
          marker[subPath] = currentPath[i + 1];
          break;
        }

        marker[subPath] = marker[subPath] || {};
        marker = marker[subPath];
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (paths_1_1 && !paths_1_1.done && (_a = paths_1.return)) _a.call(paths_1);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return result;
}
function flatten(array) {
  var _a;

  return (_a = []).concat.apply(_a, __spreadArray([], __read(array), false));
}
function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }

  return [value];
}
function toArray(value) {
  if (value === undefined) {
    return [];
  }

  return toArrayStrict(value);
}
function mapContext(mapper, context, _event) {
  var e_5, _a;

  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }

  var result = {};

  try {
    for (var _b = __values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];

      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return result;
}
function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}
function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  } // Check if shape matches the Promise/A+ specification for a "thenable".


  if (value !== null && (isFunction(value) || typeof value === 'object') && isFunction(value.then)) {
    return true;
  }

  return false;
}
function isBehavior(value) {
  return value !== null && typeof value === 'object' && 'transition' in value && typeof value.transition === 'function';
}
function partition(items, predicate) {
  var e_6, _a;

  var _b = __read([[], []], 2),
      truthy = _b[0],
      falsy = _b[1];

  try {
    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;

      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }

  return [truthy, falsy];
}
function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function (subHist, key) {
    if (!subHist) {
      return undefined;
    }

    var subStateValue = (isString(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);

    if (!subStateValue) {
      return undefined;
    }

    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}
function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}
function updateContext(context, _event, assignActions, state) {
  if (!IS_PRODUCTION) {
    warn(!!context, 'Attempting to update undefined context');
  }

  var updatedContext = context ? assignActions.reduce(function (acc, assignAction) {
    var e_7, _a;

    var assignment = assignAction.assignment;
    var meta = {
      state: state,
      action: assignAction,
      _event: _event
    };
    var partialUpdate = {};

    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = __values(Object.keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
} // tslint:disable-next-line:no-empty

var warn = function () {};

if (!IS_PRODUCTION) {
  warn = function (condition, message) {
    var error = condition instanceof Error ? condition : undefined;

    if (!error && condition) {
      return;
    }

    if (console !== undefined) {
      var args = ["Warning: ".concat(message)];

      if (error) {
        args.push(error);
      } // tslint:disable-next-line:no-console


      console.warn.apply(console, args);
    }
  };
}
function isArray(value) {
  return Array.isArray(value);
} // tslint:disable-next-line:ban-types

function isFunction(value) {
  return typeof value === 'function';
}
function isString(value) {
  return typeof value === 'string';
}
function toGuard(condition, guardMap) {
  if (!condition) {
    return undefined;
  }

  if (isString(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition,
      predicate: guardMap ? guardMap[condition] : undefined
    };
  }

  if (isFunction(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition.name,
      predicate: condition
    };
  }

  return condition;
}
function isObservable(value) {
  try {
    return 'subscribe' in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}
var symbolObservable = /*#__PURE__*/function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}(); // TODO: to be removed in v5, left it out just to minimize the scope of the change and maintain compatibility with older versions of integration paackages

var interopSymbols = (_a = {}, _a[symbolObservable] = function () {
  return this;
}, _a[Symbol.observable] = function () {
  return this;
}, _a);
function isMachine(value) {
  return !!value && '__xstatenode' in value;
}
function isActor(value) {
  return !!value && typeof value.send === 'function';
}
var uniqueId = /*#__PURE__*/function () {
  var currentId = 0;
  return function () {
    currentId++;
    return currentId.toString(16);
  };
}();
function toEventObject(event, payload // id?: TEvent['type']
) {
  if (isString(event) || typeof event === 'number') {
    return __assign({
      type: event
    }, payload);
  }

  return event;
}
function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && '$$type' in event && event.$$type === 'scxml') {
    return event;
  }

  var eventObject = toEventObject(event);
  return __assign({
    name: eventObject.type,
    data: eventObject,
    $$type: 'scxml',
    type: 'external'
  }, scxmlEvent);
}
function toTransitionConfigArray(event, configLike) {
  var transitions = toArrayStrict(configLike).map(function (transitionLike) {
    if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string' || isMachine(transitionLike)) {
      return {
        target: transitionLike,
        event: event
      };
    }

    return __assign(__assign({}, transitionLike), {
      event: event
    });
  });
  return transitions;
}
function normalizeTarget(target) {
  if (target === undefined || target === TARGETLESS_KEY) {
    return undefined;
  }

  return toArray(target);
}
function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
  if (!IS_PRODUCTION) {
    var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : '';

    if (originalError === currentError) {
      // tslint:disable-next-line:no-console
      console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
    } else {
      var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : ''; // tslint:disable-next-line:no-console

      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
    }
  }
}
function evaluateGuard(machine, guard, context, _event, state) {
  var guards = machine.options.guards;
  var guardMeta = {
    state: state,
    cond: guard,
    _event: _event
  }; // TODO: do not hardcode!

  if (guard.type === DEFAULT_GUARD_TYPE) {
    return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
  }

  var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];

  if (!condFn) {
    throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine.id, "'."));
  }

  return condFn(context, _event.data, guardMeta);
}
function toInvokeSource(src) {
  if (typeof src === 'string') {
    return {
      type: src
    };
  }

  return src;
}
function toObserver(nextHandler, errorHandler, completionHandler) {
  var noop = function () {};

  var isObserver = typeof nextHandler === 'object';
  var self = isObserver ? nextHandler : null;
  return {
    next: ((isObserver ? nextHandler.next : nextHandler) || noop).bind(self),
    error: ((isObserver ? nextHandler.error : errorHandler) || noop).bind(self),
    complete: ((isObserver ? nextHandler.complete : completionHandler) || noop).bind(self)
  };
}
function createInvokeId(stateNodeId, index) {
  return "".concat(stateNodeId, ":invocation[").concat(index, "]");
}
function isRaisableAction(action) {
  return (action.type === raise || action.type === send && action.to === SpecialTargets.Internal) && typeof action.delay !== 'number';
}

export { createInvokeId, evaluateGuard, flatten, getActionType, getEventType, interopSymbols, isActor, isArray, isBehavior, isBuiltInEvent, isFunction, isMachine, isObservable, isPromiseLike, isRaisableAction, isStateLike, isString, keys, mapContext, mapFilterValues, mapValues, matchesState, nestedPath, normalizeTarget, partition, path, pathToStateValue, pathsToStateValue, reportUnhandledExceptionOnInvocation, symbolObservable, toArray, toArrayStrict, toEventObject, toGuard, toInvokeSource, toObserver, toSCXMLEvent, toStatePath, toStatePaths, toStateValue, toTransitionConfigArray, uniqueId, updateContext, updateHistoryStates, updateHistoryValue, warn };
