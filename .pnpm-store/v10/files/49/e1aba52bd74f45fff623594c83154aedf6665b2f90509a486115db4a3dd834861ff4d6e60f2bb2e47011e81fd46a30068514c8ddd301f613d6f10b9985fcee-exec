"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = testSaga;

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var effects = _interopRequireWildcard(require("redux-saga/effects"));

var _reduxSaga = require("redux-saga");

var _historyTypes = require("./historyTypes");

var _keys = require("../shared/keys");

var _SagaTestError = _interopRequireDefault(require("../shared/SagaTestError"));

var _createErrorMessage = _interopRequireDefault(require("./createErrorMessage"));

var _assertSameEffect = _interopRequireDefault(require("./assertSameEffect"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function testSaga(saga, ...sagaArgs) {
  const api = {
    next,
    back,
    finish,
    restart,
    save,
    restore,
    throw: throwError
  };
  const savePoints = {};
  let history = [];
  let finalSagaArgs = sagaArgs;
  let iterator = createIterator();

  function createEffectTester(name, key, effect, isForkedEffect = false) {
    return yieldedValue => (...args) => {
      (0, _assertSameEffect.default)(_reduxSaga.eventChannel, name, key, isForkedEffect, yieldedValue, effect(...args), history.length);
      return api;
    };
  }

  function createEffectTesterFromEffects(name, key) {
    return createEffectTester(name, key, effects[name]);
  }

  function createEffectTesterFromHelperEffect(name) {
    return createEffectTester(name, undefined, effects[name], true);
  }

  const effectsTestersCreators = {
    actionChannel: createEffectTesterFromEffects('actionChannel', _keys.ACTION_CHANNEL),
    all: createEffectTesterFromEffects('all', _keys.ALL),
    apply: createEffectTesterFromEffects('apply', _keys.CALL),
    call: createEffectTesterFromEffects('call', _keys.CALL),
    cancel: createEffectTesterFromEffects('cancel', _keys.CANCEL),
    cancelled: createEffectTesterFromEffects('cancelled', _keys.CANCELLED),
    cps: createEffectTesterFromEffects('cps', _keys.CPS),
    debounce: createEffectTesterFromHelperEffect('debounce'),
    delay: createEffectTesterFromEffects('delay', _keys.CALL),
    flush: createEffectTesterFromEffects('flush', _keys.FLUSH),
    fork: createEffectTesterFromEffects('fork', _keys.FORK),
    getContext: createEffectTesterFromEffects('getContext', _keys.GET_CONTEXT),
    join: createEffectTesterFromEffects('join', _keys.JOIN),
    put: createEffectTesterFromEffects('put', _keys.PUT),
    putResolve: createEffectTesterFromEffects('putResolve', _keys.PUT),
    race: createEffectTesterFromEffects('race', _keys.RACE),
    select: createEffectTesterFromEffects('select', _keys.SELECT),
    setContext: createEffectTesterFromEffects('setContext', _keys.SET_CONTEXT),
    spawn: createEffectTesterFromEffects('spawn', _keys.FORK),
    take: createEffectTesterFromEffects('take', _keys.TAKE),
    takeEvery: createEffectTesterFromHelperEffect('takeEvery'),
    takeLatest: createEffectTesterFromHelperEffect('takeLatest'),
    takeLeading: createEffectTesterFromHelperEffect('takeLeading'),
    takeMaybe: createEffectTesterFromEffects('takeMaybe', _keys.TAKE),
    throttle: createEffectTesterFromHelperEffect('throttle'),
    retry: createEffectTesterFromHelperEffect('retry'),
    isDone: done => () => {
      if (!done) {
        throw new _SagaTestError.default('saga not done');
      }

      return api;
    },
    is: value => arg => {
      if (!(0, _lodash.default)(arg, value)) {
        const errorMessage = (0, _createErrorMessage.default)('yielded values do not match', history.length, value, arg);
        throw new _SagaTestError.default(errorMessage);
      }

      return api;
    },
    inspect: value => fn => {
      fn(value);
      return api;
    },
    returns: (value, done) => arg => {
      if (!done) {
        throw new _SagaTestError.default('saga not done');
      }

      if (!(0, _lodash.default)(arg, value)) {
        const errorMessage = (0, _createErrorMessage.default)('returned values do not match', history.length, value, arg);
        throw new _SagaTestError.default(errorMessage);
      }

      return api;
    }
  };

  function createIterator() {
    return saga(...finalSagaArgs);
  }

  function apiWithEffectsTesters({
    value,
    done
  }) {
    const newApi = Object.assign({}, api, {
      actionChannel: effectsTestersCreators.actionChannel(value),
      all: effectsTestersCreators.all(value),
      apply: effectsTestersCreators.apply(value),
      call: effectsTestersCreators.call(value),
      cancel: effectsTestersCreators.cancel(value),
      cancelled: effectsTestersCreators.cancelled(value),
      cps: effectsTestersCreators.cps(value),
      debounce: effectsTestersCreators.debounce(value),
      delay: effectsTestersCreators.delay(value),
      flush: effectsTestersCreators.flush(value),
      fork: effectsTestersCreators.fork(value),
      getContext: effectsTestersCreators.getContext(value),
      join: effectsTestersCreators.join(value),
      put: effectsTestersCreators.put(value),
      putResolve: effectsTestersCreators.putResolve(value),
      race: effectsTestersCreators.race(value),
      select: effectsTestersCreators.select(value),
      setContext: effectsTestersCreators.setContext(value),
      spawn: effectsTestersCreators.spawn(value),
      take: effectsTestersCreators.take(value),
      takeEvery: effectsTestersCreators.takeEvery(value),
      takeLatest: effectsTestersCreators.takeLatest(value),
      takeLeading: effectsTestersCreators.takeLeading(value),
      takeMaybe: effectsTestersCreators.takeMaybe(value),
      throttle: effectsTestersCreators.throttle(value),
      retry: effectsTestersCreators.retry(value),
      is: effectsTestersCreators.is(value),
      inspect: effectsTestersCreators.inspect(value),
      isDone: effectsTestersCreators.isDone(done),
      returns: effectsTestersCreators.returns(value, done)
    });
    return newApi;
  }

  function restart(...args) {
    if (args.length > 0) {
      finalSagaArgs = args;
    }

    history = [];
    iterator = createIterator();
    return api;
  }

  function next(...args) {
    const arg = args[0];
    let result;

    if (args.length === 0) {
      history.push({
        type: _historyTypes.NONE
      });
      result = iterator.next();
    } else {
      history.push({
        type: _historyTypes.ARGUMENT,
        value: arg
      });
      result = iterator.next(arg);
    }

    return apiWithEffectsTesters(result);
  }

  function finish(...args) {
    const arg = args[0];
    let result;

    if (args.length === 0) {
      history.push({
        type: _historyTypes.FINISH
      });
      result = iterator.return();
    } else {
      history.push({
        type: _historyTypes.FINISH_ARGUMENT,
        value: arg
      });
      result = iterator.return(arg);
    }

    return apiWithEffectsTesters(result);
  }

  function throwError(error) {
    history.push({
      type: _historyTypes.ERROR,
      value: error
    });
    const result = iterator.throw(error);
    return apiWithEffectsTesters(result);
  }

  function restore(name) {
    if (!savePoints[name]) {
      throw new Error(`No such save point ${name}`);
    }

    iterator = createIterator();
    history = savePoints[name];
    return applyHistory();
  }

  function back(n = 1) {
    if (n > history.length) {
      throw new Error('Cannot go back any further');
    }

    let m = n;

    while (m--) {
      history.pop();
    }

    iterator = createIterator();
    return applyHistory();
  }

  function save(name) {
    savePoints[name] = history.slice(0);
    return api;
  }

  function applyHistory() {
    for (let i = 0, l = history.length; i < l; i++) {
      const arg = history[i];

      switch (arg.type) {
        case _historyTypes.NONE:
          iterator.next();
          break;

        case _historyTypes.ARGUMENT:
          iterator.next(arg.value);
          break;

        case _historyTypes.ERROR:
          iterator.throw(arg.value);
          break;

        case _historyTypes.FINISH:
          iterator.return();
          break;

        case _historyTypes.FINISH_ARGUMENT:
          iterator.return(arg.value);
          break;
        // no default
      }
    }

    return api;
  }

  return api;
}