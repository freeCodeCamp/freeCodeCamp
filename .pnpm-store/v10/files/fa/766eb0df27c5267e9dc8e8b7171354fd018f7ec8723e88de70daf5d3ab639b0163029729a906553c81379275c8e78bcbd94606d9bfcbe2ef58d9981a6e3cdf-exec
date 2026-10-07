"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expectSaga;

var _reduxSaga = require("redux-saga");

var is = _interopRequireWildcard(require("@redux-saga/is"));

var effects = _interopRequireWildcard(require("redux-saga/effects"));

var _array = require("../utils/array");

var _ArraySet = _interopRequireDefault(require("../utils/ArraySet"));

var _logging = require("../utils/logging");

var _async = require("../utils/async");

var _identity = _interopRequireDefault(require("../utils/identity"));

var _parseEffect = _interopRequireDefault(require("./parseEffect"));

var _provideValue = require("./provideValue");

var _object = require("../utils/object");

var _findDispatchableActionIndex = _interopRequireDefault(require("./findDispatchableActionIndex"));

var _sagaWrapper = _interopRequireWildcard(require("./sagaWrapper"));

var _sagaIdFactory = _interopRequireDefault(require("./sagaIdFactory"));

var _helpers = require("./providers/helpers");

var _asEffect = require("../utils/asEffect");

var _expectations = require("./expectations");

var _keys = require("../shared/keys");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-underscore-dangle */
const {
  all,
  call,
  fork,
  race,
  spawn
} = effects;
const INIT_ACTION = {
  type: '@@redux-saga-test-plan/INIT'
};
const defaultSagaWrapper = (0, _sagaWrapper.default)();

function extractState(reducer, initialState) {
  return initialState || reducer(undefined, INIT_ACTION);
}

function toJSON(object) {
  if (Array.isArray(object)) {
    return object.map(toJSON);
  }

  if (typeof object === 'function') {
    return `@@redux-saga-test-plan/json/function/${object.name || '<anonymous>'}`;
  }

  if (typeof object === 'object' && object !== null) {
    return (0, _object.mapValues)(object, toJSON);
  }

  return object;
}

function lacksSagaWrapper(value) {
  const {
    type,
    effect
  } = (0, _parseEffect.default)(value);
  return type !== 'FORK' || !(0, _sagaWrapper.isSagaWrapper)(effect.fn);
}

const exposableEffects = {
  [_keys.TAKE]: 'take',
  [_keys.PUT]: 'put',
  [_keys.RACE]: 'race',
  [_keys.CALL]: 'call',
  [_keys.CPS]: 'cps',
  [_keys.FORK]: 'fork',
  [_keys.GET_CONTEXT]: 'getContext',
  [_keys.SELECT]: 'select',
  [_keys.SET_CONTEXT]: 'setContext',
  [_keys.ACTION_CHANNEL]: 'actionChannel'
};

function expectSaga(generator, ...sagaArgs) {
  const allEffects = [];
  const effectStores = {
    [_keys.TAKE]: new _ArraySet.default(),
    [_keys.PUT]: new _ArraySet.default(),
    [_keys.RACE]: new _ArraySet.default(),
    [_keys.CALL]: new _ArraySet.default(),
    [_keys.CPS]: new _ArraySet.default(),
    [_keys.FORK]: new _ArraySet.default(),
    [_keys.GET_CONTEXT]: new _ArraySet.default(),
    [_keys.SET_CONTEXT]: new _ArraySet.default(),
    [_keys.SELECT]: new _ArraySet.default(),
    [_keys.ACTION_CHANNEL]: new _ArraySet.default()
  };
  const expectations = [];
  const ioChannel = (0, _reduxSaga.stdChannel)();
  const queuedActions = [];
  const forkedTasks = [];
  const outstandingForkEffects = new Map();
  const outstandingActionChannelEffects = new Map();
  const channelsToPatterns = new Map();
  const dispatchPromise = Promise.resolve();
  const nextSagaId = (0, _sagaIdFactory.default)();
  let stopDirty = false;
  let negateNextAssertion = false;
  let isRunning = false;
  let delayTime = null;
  let iterator;
  let mainTask;
  let mainTaskPromise;
  let providers;
  let returnValue;
  let errorValue;
  let expectError = false;
  let storeState;

  function setReturnValue(value) {
    returnValue = value;
  }

  function setErrorValue(value) {
    errorValue = value;
  }

  function useProvidedValue(value) {
    function addEffect() {
      // Because we are providing a return value and not hitting redux-saga, we
      // need to manually store the effect so assertions on the effect work.
      processEffect({
        effectId: nextSagaId(),
        effect: value
      });
    }

    try {
      const providedValue = (0, _provideValue.provideValue)(providers, value);

      if (providedValue === _provideValue.NEXT) {
        return value;
      }

      addEffect();
      return providedValue;
    } catch (e) {
      addEffect();
      throw e;
    }
  }

  function refineYieldedValue(value) {
    const parsedEffect = (0, _parseEffect.default)(value);
    const localProviders = providers || {};
    const {
      type,
      effect
    } = parsedEffect;

    switch (true) {
      case type === _keys.RACE && !localProviders.race:
        processEffect({
          effectId: nextSagaId(),
          effect: value
        });
        return race(parsedEffect.mapEffects(refineYieldedValue));

      case type === _keys.ALL && !localProviders.all:
        return all(parsedEffect.mapEffects(refineYieldedValue));

      case type === _keys.FORK:
        {
          const {
            args,
            detached,
            context,
            fn
          } = effect;
          const providedValue = useProvidedValue(value);
          const isProvided = providedValue !== value;

          if (!detached && !isProvided) {
            // Because we wrap the `fork`, we need to manually store the effect,
            // so assertions on the `fork` work.
            processEffect({
              effectId: nextSagaId(),
              effect: value
            });
            const finalArgs = args;
            return fork((0, _sagaWrapper.default)(fn.name), fn.apply(context, finalArgs), refineYieldedValue);
          }

          if (detached && !isProvided) {
            // Because we wrap the `spawn`, we need to manually store the effect,
            // so assertions on the `spawn` work.
            processEffect({
              effectId: nextSagaId(),
              effect: value
            });
            return spawn((0, _sagaWrapper.default)(fn.name), fn.apply(context, args), refineYieldedValue);
          }

          return providedValue;
        }

      case type === _keys.CALL:
        {
          const providedValue = useProvidedValue(value);

          if (providedValue !== value) {
            return providedValue;
          } // Because we manually consume the `call`, we need to manually store
          // the effect, so assertions on the `call` work.


          processEffect({
            effectId: nextSagaId(),
            effect: value
          });
          const {
            context,
            fn,
            args
          } = effect;
          const result = fn.apply(context, args);

          if (is.iterator(result)) {
            return call(defaultSagaWrapper, result, refineYieldedValue);
          }

          return result;
        }
      // Ensure we wrap yielded iterators (i.e. `yield someInnerSaga()`) for
      // providers to work.

      case is.iterator(value):
        return useProvidedValue(defaultSagaWrapper(value, refineYieldedValue));

      default:
        return useProvidedValue(value);
    }
  }

  function defaultReducer(state = storeState) {
    return state;
  }

  let reducer = defaultReducer;

  function getAllPromises() {
    return new Promise(resolve => {
      Promise.all([...forkedTasks.map(taskPromise), mainTaskPromise]).then(() => {
        if (stopDirty) {
          stopDirty = false;
          resolve(getAllPromises());
        }

        resolve();
      });
    });
  }

  function addForkedTask(task) {
    stopDirty = true;
    forkedTasks.push(task);
  }

  function cancelMainTask(timeout, silenceTimeout, timedOut) {
    if (!silenceTimeout && timedOut) {
      (0, _logging.warn)(`Saga exceeded async timeout of ${timeout}ms`);
    }

    mainTask.cancel();
    return mainTaskPromise;
  }

  function scheduleStop(timeout) {
    let promise = (0, _async.schedule)(getAllPromises).then(() => false);
    let silenceTimeout = false;
    let timeoutLength;

    if (typeof timeout === 'number') {
      timeoutLength = timeout;
    } else if (typeof timeout === 'object') {
      silenceTimeout = timeout.silenceTimeout === true;

      if ('timeout' in timeout) {
        timeoutLength = timeout.timeout;
      } else {
        timeoutLength = expectSaga.DEFAULT_TIMEOUT;
      }
    }

    if (typeof timeoutLength === 'number') {
      promise = Promise.race([promise, (0, _async.delay)(timeoutLength).then(() => true)]);
    }

    return promise.then(timedOut => (0, _async.schedule)(cancelMainTask, [timeoutLength, silenceTimeout, timedOut]));
  }

  function queueAction(action) {
    queuedActions.push(action);
  }

  function notifyListeners(action) {
    ioChannel.put(action);
  }

  function dispatch(action) {
    if (typeof action._delayTime === 'number') {
      const {
        _delayTime
      } = action;
      dispatchPromise.then(() => (0, _async.delay)(_delayTime)).then(() => {
        storeState = reducer(storeState, action);
        notifyListeners(action);
      });
    } else {
      storeState = reducer(storeState, action);
      dispatchPromise.then(() => notifyListeners(action));
    }
  }

  function associateChannelWithPattern(channel, pattern) {
    channelsToPatterns.set(channel, pattern);
  }

  function getDispatchableActions(effect) {
    const pattern = effect.pattern || channelsToPatterns.get(effect.channel);
    const index = (0, _findDispatchableActionIndex.default)(queuedActions, pattern);

    if (index > -1) {
      const actions = queuedActions.splice(0, index + 1);
      return actions;
    }

    return [];
  }

  function processEffect(event) {
    const parsedEffect = (0, _parseEffect.default)(event.effect); // Using string literal for flow

    if (parsedEffect.type === 'NONE') {
      return;
    }

    const effectStore = effectStores[parsedEffect.type];

    if (!effectStore) {
      return;
    }

    allEffects.push(event.effect);
    effectStore.add(event.effect);

    switch (parsedEffect.type) {
      case _keys.FORK:
        {
          outstandingForkEffects.set(event.effectId, parsedEffect.effect);
          break;
        }

      case _keys.TAKE:
        {
          const actions = getDispatchableActions(parsedEffect.effect);
          const [reducerActions, [sagaAction]] = (0, _array.splitAt)(actions, -1);
          reducerActions.forEach(action => {
            dispatch(action);
          });

          if (sagaAction) {
            dispatch(sagaAction);
          }

          break;
        }

      case _keys.ACTION_CHANNEL:
        {
          outstandingActionChannelEffects.set(event.effectId, parsedEffect.effect);
          break;
        }
      // no default
    }
  }

  function addExpectation(expectation) {
    expectations.push(expectation);
  }

  const io = {
    dispatch,
    channel: ioChannel,

    getState() {
      return storeState;
    },

    sagaMonitor: {
      effectTriggered(event) {
        processEffect(event);
      },

      effectResolved(effectId, value) {
        const forkEffect = outstandingForkEffects.get(effectId);

        if (forkEffect) {
          addForkedTask(value);
          return;
        }

        const actionChannelEffect = outstandingActionChannelEffects.get(effectId);

        if (actionChannelEffect) {
          associateChannelWithPattern(value, actionChannelEffect.pattern);
        }
      },

      effectRejected() {},

      effectCancelled() {}

    },
    logger: () => {}
  };
  const api = {
    run,
    silentRun,
    withState,
    withReducer,
    provide,
    returns,
    throws,
    hasFinalState,
    dispatch: apiDispatch,
    delay: apiDelay,

    // $FlowFixMe
    get not() {
      negateNextAssertion = true;
      return api;
    },

    actionChannel: createEffectTesterFromEffects('actionChannel', _keys.ACTION_CHANNEL, _asEffect.asEffect.actionChannel),
    apply: createEffectTesterFromEffects('apply', _keys.CALL, _asEffect.asEffect.call),
    call: createEffectTesterFromEffects('call', _keys.CALL, _asEffect.asEffect.call),
    cps: createEffectTesterFromEffects('cps', _keys.CPS, _asEffect.asEffect.cps),
    fork: createEffectTesterFromEffects('fork', _keys.FORK, _asEffect.asEffect.fork),
    getContext: createEffectTesterFromEffects('getContext', _keys.GET_CONTEXT, _asEffect.asEffect.getContext),
    put: createEffectTesterFromEffects('put', _keys.PUT, _asEffect.asEffect.put),
    putResolve: createEffectTesterFromEffects('putResolve', _keys.PUT, _asEffect.asEffect.put),
    race: createEffectTesterFromEffects('race', _keys.RACE, _asEffect.asEffect.race),
    select: createEffectTesterFromEffects('select', _keys.SELECT, _asEffect.asEffect.select),
    spawn: createEffectTesterFromEffects('spawn', _keys.FORK, _asEffect.asEffect.fork),
    setContext: createEffectTesterFromEffects('setContext', _keys.SET_CONTEXT, _asEffect.asEffect.setContext),
    take: createEffectTesterFromEffects('take', _keys.TAKE, _asEffect.asEffect.take),
    takeMaybe: createEffectTesterFromEffects('takeMaybe', _keys.TAKE, _asEffect.asEffect.take)
  };
  api.actionChannel.like = createEffectTester('actionChannel', _keys.ACTION_CHANNEL, effects.actionChannel, _asEffect.asEffect.actionChannel, true);

  api.actionChannel.pattern = pattern => api.actionChannel.like({
    pattern
  });

  api.apply.like = createEffectTester('apply', _keys.CALL, effects.apply, _asEffect.asEffect.call, true);

  api.apply.fn = fn => api.apply.like({
    fn
  });

  api.call.like = createEffectTester('call', _keys.CALL, effects.call, _asEffect.asEffect.call, true);

  api.call.fn = fn => api.call.like({
    fn
  });

  api.cps.like = createEffectTester('cps', _keys.CPS, effects.cps, _asEffect.asEffect.cps, true);

  api.cps.fn = fn => api.cps.like({
    fn
  });

  api.fork.like = createEffectTester('fork', _keys.FORK, effects.fork, _asEffect.asEffect.fork, true);

  api.fork.fn = fn => api.fork.like({
    fn
  });

  api.put.like = createEffectTester('put', _keys.PUT, effects.put, _asEffect.asEffect.put, true);

  api.put.actionType = type => api.put.like({
    action: {
      type
    }
  });

  api.putResolve.like = createEffectTester('putResolve', _keys.PUT, effects.putResolve, _asEffect.asEffect.put, true);

  api.putResolve.actionType = type => api.putResolve.like({
    action: {
      type
    }
  });

  api.select.like = createEffectTester('select', _keys.SELECT, effects.select, _asEffect.asEffect.select, true);

  api.select.selector = selector => api.select.like({
    selector
  });

  api.spawn.like = createEffectTester('spawn', _keys.FORK, effects.spawn, _asEffect.asEffect.fork, true);

  api.spawn.fn = fn => api.spawn.like({
    fn
  });

  function checkExpectations() {
    expectations.forEach(expectation => {
      expectation({
        storeState,
        returnValue,
        errorValue
      });
    });
  }

  function apiDispatch(action) {
    let dispatchableAction;

    if (typeof delayTime === 'number') {
      dispatchableAction = Object.assign({}, action, {
        _delayTime: delayTime
      });
      delayTime = null;
    } else {
      dispatchableAction = action;
    }

    if (isRunning) {
      dispatch(dispatchableAction);
    } else {
      queueAction(dispatchableAction);
    }

    return api;
  }

  function taskPromise(task) {
    return task.toPromise();
  }

  function start() {
    const sagaWrapper = (0, _sagaWrapper.default)(generator.name);
    isRunning = true;
    iterator = generator(...sagaArgs);
    mainTask = (0, _reduxSaga.runSaga)(io, sagaWrapper, iterator, refineYieldedValue, setReturnValue, setErrorValue);
    mainTaskPromise = taskPromise(mainTask).then(checkExpectations, e => !expectError && e || checkExpectations()) // Pass along the error instead of rethrowing or allowing to
    // bubble up to avoid PromiseRejectionHandledWarning
    .catch(_identity.default);
    return api;
  }

  function stop(timeout) {
    return scheduleStop(timeout).then(err => {
      if (err) {
        throw err;
      }
    });
  }

  function exposeResults() {
    const finalEffects = Object.keys(exposableEffects).reduce((memo, key) => {
      const effectName = exposableEffects[key];
      const values = effectStores[key].values().filter(lacksSagaWrapper);

      if (values.length > 0) {
        // eslint-disable-next-line no-param-reassign
        memo[effectName] = effectStores[key].values().filter(lacksSagaWrapper);
      }

      return memo;
    }, {});
    return {
      storeState,
      returnValue,
      effects: finalEffects,
      allEffects,
      toJSON: () => toJSON(finalEffects)
    };
  }

  function run(timeout = expectSaga.DEFAULT_TIMEOUT) {
    start();
    return stop(timeout).then(exposeResults);
  }

  function silentRun(timeout = expectSaga.DEFAULT_TIMEOUT) {
    return run({
      timeout,
      silenceTimeout: true
    });
  }

  function withState(state) {
    storeState = state;
    return api;
  }

  function withReducer(newReducer, initialState) {
    reducer = newReducer;
    storeState = extractState(newReducer, initialState);
    return api;
  }

  function provide(newProviders) {
    providers = Array.isArray(newProviders) ? (0, _helpers.coalesceProviders)(newProviders) : newProviders;
    return api;
  }

  function returns(value) {
    addExpectation((0, _expectations.createReturnExpectation)({
      value,
      expected: !negateNextAssertion
    }));
    return api;
  }

  function throws(type) {
    expectError = true;
    addExpectation((0, _expectations.createErrorExpectation)({
      type,
      expected: !negateNextAssertion
    }));
    return api;
  }

  function hasFinalState(state) {
    addExpectation((0, _expectations.createStoreStateExpectation)({
      state,
      expected: !negateNextAssertion
    }));
    return api;
  }

  function apiDelay(time) {
    delayTime = time;
    return api;
  }

  function createEffectTester(effectName, storeKey, effectCreator, extractEffect, like = false) {
    return (...args) => {
      const expectedEffect = like ? args[0] : effectCreator(...args);
      addExpectation((0, _expectations.createEffectExpectation)({
        effectName,
        expectedEffect,
        storeKey,
        like,
        extractEffect,
        store: effectStores[storeKey],
        expected: !negateNextAssertion
      }));
      negateNextAssertion = false;
      return api;
    };
  }

  function createEffectTesterFromEffects(effectName, storeKey, extractEffect) {
    return createEffectTester(effectName, storeKey, effects[effectName], extractEffect);
  }

  return api;
}

expectSaga.DEFAULT_TIMEOUT = 250;