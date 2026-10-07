import { q as makeIterator, L as take, M as fork, N as cancel, O as call, Q as delay, U as actionChannel, V as sliding, W as race, c as check } from '../../dist/io-e3db6b7a.development.esm.js';
export { U as actionChannel, $ as all, a0 as apply, O as call, N as cancel, a5 as cancelled, a1 as cps, Q as delay, X as effectTypes, a6 as flush, M as fork, a7 as getContext, a3 as join, Z as put, _ as putResolve, W as race, a4 as select, a8 as setContext, a2 as spawn, L as take, Y as takeMaybe } from '../../dist/io-e3db6b7a.development.esm.js';
import * as is from '@redux-saga/is';
import '@babel/runtime/helpers/extends';
import '@redux-saga/delay-p';
import '@redux-saga/symbols';

var done = function done(value) {
  return {
    done: true,
    value: value
  };
};
var qEnd = {};
function safeName(patternOrChannel) {
  if (is.channel(patternOrChannel)) {
    return 'channel';
  }
  if (is.stringableFunc(patternOrChannel)) {
    return String(patternOrChannel);
  }
  if (is.func(patternOrChannel)) {
    return patternOrChannel.name;
  }
  return String(patternOrChannel);
}
function fsmIterator(fsm, startState, name) {
  var stateUpdater,
    errorState,
    effect,
    nextState = startState;
  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }
    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }
  return makeIterator(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery$1(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var yTake = {
    done: false,
    value: take(patternOrChannel)
  };
  var yFork = function yFork(ac) {
    return {
      done: false,
      value: fork.apply(void 0, [worker].concat(args, [ac]))
    };
  };
  var action,
    setAction = function setAction(ac) {
      return action = ac;
    };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest$1(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var yTake = {
    done: false,
    value: take(patternOrChannel)
  };
  var yFork = function yFork(ac) {
    return {
      done: false,
      value: fork.apply(void 0, [worker].concat(args, [ac]))
    };
  };
  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: cancel(task)
    };
  };
  var task, action;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading$1(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var yTake = {
    done: false,
    value: take(patternOrChannel)
  };
  var yCall = function yCall(ac) {
    return {
      done: false,
      value: call.apply(void 0, [worker].concat(args, [ac]))
    };
  };
  var action;
  var setAction = function setAction(ac) {
    return action = ac;
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle$1(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }
  var action, channel;
  var yTake = function yTake() {
    return {
      done: false,
      value: take(channel)
    };
  };
  var yFork = function yFork(ac) {
    return {
      done: false,
      value: fork.apply(void 0, [worker].concat(args, [ac]))
    };
  };
  var yDelay = {
    done: false,
    value: delay(delayLength)
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };
  var needsChannel = !is.channel(patternOrChannel);
  if (!needsChannel) {
    setChannel(patternOrChannel);
  }
  return fsmIterator({
    q1: function q1() {
      var yActionChannel = {
        done: false,
        value: actionChannel(patternOrChannel, sliding(1))
      };
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, needsChannel ? 'q1' : 'q2', "throttle(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function retry$1(maxTries, delayLength, fn) {
  var counter = maxTries;
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }
  var yCall = {
    done: false,
    value: call.apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: delay(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;
      if (counter <= 0) {
        throw error;
      }
      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }
  var action, raceOutput;
  var yTake = {
    done: false,
    value: take(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: race({
      action: take(patternOrChannel),
      debounce: delay(delayLength)
    })
  };
  var yFork = function yFork(ac) {
    return {
      done: false,
      value: fork.apply(void 0, [worker].concat(args, [ac]))
    };
  };
  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  check(patternOrChannel, is.notUndef, fn.name + " requires a pattern or channel");
  check(worker, is.notUndef, fn.name + " requires a saga parameter");
};
function takeEvery(patternOrChannel, worker) {
  {
    validateTakeEffect(takeEvery, patternOrChannel, worker);
  }
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return fork.apply(void 0, [takeEvery$1, patternOrChannel, worker].concat(args));
}
function takeLatest(patternOrChannel, worker) {
  {
    validateTakeEffect(takeLatest, patternOrChannel, worker);
  }
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }
  return fork.apply(void 0, [takeLatest$1, patternOrChannel, worker].concat(args));
}
function takeLeading(patternOrChannel, worker) {
  {
    validateTakeEffect(takeLeading, patternOrChannel, worker);
  }
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }
  return fork.apply(void 0, [takeLeading$1, patternOrChannel, worker].concat(args));
}
function throttle(ms, patternOrChannel, worker) {
  {
    check(patternOrChannel, is.notUndef, "throttle requires a pattern or channel");
    check(worker, is.notUndef, 'throttle requires a saga parameter');
  }
  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }
  return fork.apply(void 0, [throttle$1, ms, patternOrChannel, worker].concat(args));
}
function retry(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }
  return call.apply(void 0, [retry$1, maxTries, delayLength, worker].concat(args));
}
function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }
  return fork.apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}

export { debounce, retry, takeEvery, takeLatest, takeLeading, throttle };
