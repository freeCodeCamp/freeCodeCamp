import _extends from '@babel/runtime/helpers/esm/extends';
import delayP from '@redux-saga/delay-p';
import * as is from '@redux-saga/is';
import { TERMINATE, TASK_CANCEL, SAGA_LOCATION, SAGA_ACTION, SELF_CANCELLATION, IO } from '@redux-saga/symbols';

var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = /*#__PURE__*/konst(true);
var noop = function noop() {};
if (typeof Proxy !== 'undefined') {
  noop = /*#__PURE__*/new Proxy(noop, {
    set: function set() {
      throw internalErr('There was an attempt to assign a property to internal `noop` function.');
    }
  });
}
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  _extends(target, source);
  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;
  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    fn();
  };
}
var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};
function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }
  if (name === void 0) {
    name = 'iterator';
  }
  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;
  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n";

// creates empty, but not-holey array
var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }
    return dispatch(Object.defineProperty(action, SAGA_ACTION, {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === TERMINATE;
};
var shouldCancel = function shouldCancel(res) {
  return res === TASK_CANCEL;
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;
  {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }
  var completedCount = 0;
  var completed;
  var results = is.array(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};
  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }
      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };
    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });
  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };
  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[SAGA_LOCATION];
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};
function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }
  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;
  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };
  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };
  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };
  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}
var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var effectTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';
var makeEffect = function makeEffect(type, payload) {
  var _ref;
  return _ref = {}, _ref[IO] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};
var isForkEffect = function isForkEffect(eff) {
  return is.effect(eff) && eff.type === FORK;
};
var detach = function detach(eff) {
  {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }
  return makeEffect(FORK, _extends({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }
  if (arguments.length) {
    check(arguments[0], is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (is.pattern(patternOrChannel)) {
    if (is.notUndef(multicastPattern)) {
      /* eslint-disable no-console */
      console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types");
    }
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }
  if (is.multicast(patternOrChannel) && is.notUndef(multicastPattern) && is.pattern(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }
  if (is.channel(patternOrChannel)) {
    if (is.notUndef(multicastPattern)) {
      /* eslint-disable no-console */
      console.warn("take(channel) takes one argument but two were provided. Second argument is ignored.");
    }
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }
  {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel, action) {
  {
    if (arguments.length > 1) {
      check(channel, is.notUndef, 'put(channel, action): argument channel is undefined');
      check(channel, is.channel, "put(channel, action): argument " + channel + " is not a valid channel");
      check(action, is.notUndef, 'put(channel, action): argument action is undefined');
    } else {
      check(channel, is.notUndef, 'put(action): argument action is undefined');
    }
  }
  if (is.undef(action)) {
    action = channel;
    // `undefined` instead of `null` to make default parameter work
    channel = undefined;
  }
  return makeEffect(PUT, {
    channel: channel,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
}

// this match getFnCallDescriptor logic
var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, is.notUndef, effectName + ": argument fn is undefined or null");
  if (is.func(fnDescriptor)) {
    return;
  }
  var context = null;
  var fn;
  if (is.array(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, is.notUndef, effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (is.object(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, is.notUndef, effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, is.func, effectName + ": argument fn is not function");
    return;
  }
  if (context && is.string(fn)) {
    check(context[fn], is.func, effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }
  check(fn, is.func, effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};
function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;
  if (is.func(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (is.array(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }
    if (context && is.string(fn) && is.func(context[fn])) {
      fn = context[fn];
    }
  }
  return {
    context: context,
    fn: fn,
    args: args
  };
}
var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};
function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }
  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }
  var fnDescriptor = [context, fn];
  {
    validateFnDescriptor('apply', fnDescriptor);
  }
  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  {
    validateFnDescriptor('cps', fnDescriptor);
  }
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  {
    validateFnDescriptor('fork', fnDescriptor);
    check(fnDescriptor, function (arg) {
      return !is.effect(arg);
    }, 'fork: argument must not be an effect');
  }
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  {
    validateFnDescriptor('spawn', fnDescriptor);
  }
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }
  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }
    if (is.array(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, is.task, "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, is.task, "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }
  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = SELF_CANCELLATION;
  }
  {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }
    if (is.array(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, is.task, "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== SELF_CANCELLATION && is.notUndef(taskOrTasks)) {
      check(taskOrTasks, is.task, "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }
  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }
  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }
  if (arguments.length) {
    check(arguments[0], is.notUndef, 'select(selector, [...]): argument selector is undefined');
    check(selector, is.func, "select(selector, [...]): argument " + selector + " is not a function");
  }
  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}

/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/
function actionChannel(pattern, buffer) {
  {
    check(pattern, is.pattern, 'actionChannel(pattern,...): argument pattern is not valid');
    if (arguments.length > 1) {
      check(buffer, is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer, is.buffer, "actionChannel(pattern, buffer): argument " + buffer + " is not a valid buffer");
    }
  }
  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern,
    buffer: buffer
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel) {
  {
    check(channel, is.channel, "flush(channel): argument " + channel + " is not valid channel");
  }
  return makeEffect(FLUSH, channel);
}
function getContext(prop) {
  {
    check(prop, is.string, "getContext(prop): argument " + prop + " is not a string");
  }
  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  {
    check(props, is.object, createSetContextWarning(null, props));
  }
  return makeEffect(SET_CONTEXT, props);
}
var delay = /*#__PURE__*/call.bind(null, delayP);

export { all as $, ALL as A, compose as B, CALL as C, logError as D, wrapSagaDispatch as E, FORK as F, GET_CONTEXT as G, identity as H, buffers as I, JOIN as J, detach as K, take as L, fork as M, cancel as N, call as O, PUT as P, delay as Q, RACE as R, SELECT as S, TAKE as T, actionChannel as U, sliding as V, race as W, effectTypes as X, takeMaybe as Y, put as Z, putResolve as _, CPS as a, apply as a0, cps as a1, spawn as a2, join as a3, select as a4, cancelled as a5, flush as a6, getContext as a7, setContext as a8, CANCEL as b, check as c, ACTION_CHANNEL as d, expanding as e, CANCELLED as f, FLUSH as g, SET_CONTEXT as h, internalErr as i, getMetaInfo as j, kTrue as k, createAllStyleChildCallbacks as l, createEmptyArray as m, none as n, once as o, assignWithSymbols as p, makeIterator as q, remove as r, noop as s, shouldComplete as t, getLocation as u, flatMap as v, createSetContextWarning as w, asyncIteratorSymbol as x, shouldCancel as y, shouldTerminate as z };
