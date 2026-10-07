'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var delayP = require('@redux-saga/delay-p');
var is = require('@redux-saga/is');
var symbols = require('@redux-saga/symbols');

var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = /*#__PURE__*/konst(true);
var noop = function noop() {};
var identity = function identity(v) {
  return v;
};
var assignWithSymbols = function assignWithSymbols(target, source) {
  _extends["default"](target, source);
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

// creates empty, but not-holey array
var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, symbols.SAGA_ACTION, {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === symbols.TERMINATE;
};
var shouldCancel = function shouldCancel(res) {
  return res === symbols.TASK_CANCEL;
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;
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
  return instrumented[symbols.SAGA_LOCATION];
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

var makeEffect = function makeEffect(type, payload) {
  var _ref;
  return _ref = {}, _ref[symbols.IO] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};
var detach = function detach(eff) {
  return makeEffect(FORK, _extends["default"]({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
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
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel, action) {
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
function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }
  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }
  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = symbols.SELF_CANCELLATION;
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
  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}

/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/
function actionChannel(pattern, buffer) {
  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern,
    buffer: buffer
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel) {
  return makeEffect(FLUSH, channel);
}
function getContext(prop) {
  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  return makeEffect(SET_CONTEXT, props);
}
var delay = /*#__PURE__*/call.bind(null, delayP["default"]);

exports.ACTION_CHANNEL = ACTION_CHANNEL;
exports.ALL = ALL;
exports.CALL = CALL;
exports.CANCEL = CANCEL;
exports.CANCELLED = CANCELLED;
exports.CPS = CPS;
exports.FLUSH = FLUSH;
exports.FORK = FORK;
exports.GET_CONTEXT = GET_CONTEXT;
exports.JOIN = JOIN;
exports.PUT = PUT;
exports.RACE = RACE;
exports.SELECT = SELECT;
exports.SET_CONTEXT = SET_CONTEXT;
exports.TAKE = TAKE;
exports.actionChannel = actionChannel;
exports.all = all;
exports.apply = apply;
exports.assignWithSymbols = assignWithSymbols;
exports.buffers = buffers;
exports.call = call;
exports.cancel = cancel;
exports.cancelled = cancelled;
exports.compose = compose;
exports.cps = cps;
exports.createAllStyleChildCallbacks = createAllStyleChildCallbacks;
exports.createEmptyArray = createEmptyArray;
exports.delay = delay;
exports.detach = detach;
exports.effectTypes = effectTypes;
exports.expanding = expanding;
exports.flatMap = flatMap;
exports.flush = flush;
exports.fork = fork;
exports.getContext = getContext;
exports.getLocation = getLocation;
exports.getMetaInfo = getMetaInfo;
exports.identity = identity;
exports.join = join;
exports.kTrue = kTrue;
exports.logError = logError;
exports.makeIterator = makeIterator;
exports.none = none;
exports.noop = noop;
exports.once = once;
exports.put = put;
exports.putResolve = putResolve;
exports.race = race;
exports.remove = remove;
exports.select = select;
exports.setContext = setContext;
exports.shouldCancel = shouldCancel;
exports.shouldComplete = shouldComplete;
exports.shouldTerminate = shouldTerminate;
exports.sliding = sliding;
exports.spawn = spawn;
exports.take = take;
exports.takeMaybe = takeMaybe;
exports.wrapSagaDispatch = wrapSagaDispatch;
