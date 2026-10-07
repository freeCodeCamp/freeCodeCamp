// @flow
/* eslint-disable no-underscore-dangle */
import { runSaga, stdChannel } from 'redux-saga';
import * as is from '@redux-saga/is';
import * as effects from 'redux-saga/effects';
import { splitAt } from '../utils/array';
import ArraySet from '../utils/ArraySet';
import { warn } from '../utils/logging';
import { delay, schedule } from '../utils/async';
import identity from '../utils/identity';
import parseEffect from './parseEffect';
import { NEXT, provideValue } from './provideValue';
import { mapValues } from '../utils/object';
import findDispatchableActionIndex from './findDispatchableActionIndex';
import createSagaWrapper, { isSagaWrapper } from './sagaWrapper';
import sagaIdFactory from './sagaIdFactory';
import { coalesceProviders } from './providers/helpers';
import { asEffect } from '../utils/asEffect';

import type { Expectation } from './expectations';

import {
  createEffectExpectation,
  createReturnExpectation,
  createStoreStateExpectation,
  createErrorExpectation,
} from './expectations';

import {
  ACTION_CHANNEL,
  ALL,
  CALL,
  CPS,
  FORK,
  GET_CONTEXT,
  PUT,
  RACE,
  SELECT,
  SET_CONTEXT,
  TAKE,
} from '../shared/keys';

const { all, call, fork, race, spawn } = effects;

const INIT_ACTION = { type: '@@redux-saga-test-plan/INIT' };
const defaultSagaWrapper = createSagaWrapper();

function extractState(reducer: Reducer, initialState?: any): any {
  return initialState || reducer(undefined, INIT_ACTION);
}

function toJSON(object: mixed): mixed {
  if (Array.isArray(object)) {
    return object.map(toJSON);
  }

  if (typeof object === 'function') {
    return `@@redux-saga-test-plan/json/function/${object.name ||
      '<anonymous>'}`;
  }

  if (typeof object === 'object' && object !== null) {
    return mapValues(object, toJSON);
  }

  return object;
}

function lacksSagaWrapper(value: Object): boolean {
  const { type, effect } = parseEffect(value);
  return type !== 'FORK' || !isSagaWrapper(effect.fn);
}

const exposableEffects = {
  [TAKE]: 'take',
  [PUT]: 'put',
  [RACE]: 'race',
  [CALL]: 'call',
  [CPS]: 'cps',
  [FORK]: 'fork',
  [GET_CONTEXT]: 'getContext',
  [SELECT]: 'select',
  [SET_CONTEXT]: 'setContext',
  [ACTION_CHANNEL]: 'actionChannel',
};

export default function expectSaga(
  generator: Function,
  ...sagaArgs: mixed[]
): ExpectApi {
  const allEffects = [];
  const effectStores = {
    [TAKE]: new ArraySet(),
    [PUT]: new ArraySet(),
    [RACE]: new ArraySet(),
    [CALL]: new ArraySet(),
    [CPS]: new ArraySet(),
    [FORK]: new ArraySet(),
    [GET_CONTEXT]: new ArraySet(),
    [SET_CONTEXT]: new ArraySet(),
    [SELECT]: new ArraySet(),
    [ACTION_CHANNEL]: new ArraySet(),
  };

  const expectations: Array<Expectation> = [];
  const ioChannel = stdChannel();
  const queuedActions = [];
  const forkedTasks = [];
  const outstandingForkEffects = new Map();
  const outstandingActionChannelEffects = new Map();
  const channelsToPatterns = new Map();
  const dispatchPromise = Promise.resolve();
  const nextSagaId = sagaIdFactory();

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

  let storeState: any;

  function setReturnValue(value: any): void {
    returnValue = value;
  }

  function setErrorValue(value: any): void {
    errorValue = value;
  }

  function useProvidedValue(value) {
    function addEffect() {
      // Because we are providing a return value and not hitting redux-saga, we
      // need to manually store the effect so assertions on the effect work.
      processEffect({
        effectId: nextSagaId(),
        effect: value,
      });
    }

    try {
      const providedValue = provideValue(providers, value);

      if (providedValue === NEXT) {
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
    const parsedEffect = parseEffect(value);
    const localProviders = providers || {};
    const { type, effect } = parsedEffect;

    switch (true) {
      case type === RACE && !localProviders.race:
        processEffect({
          effectId: nextSagaId(),
          effect: value,
        });

        return race(parsedEffect.mapEffects(refineYieldedValue));

      case type === ALL && !localProviders.all:
        return all(parsedEffect.mapEffects(refineYieldedValue));

      case type === FORK: {
        const { args, detached, context, fn } = effect;

        const providedValue = useProvidedValue(value);
        const isProvided = providedValue !== value;

        if (!detached && !isProvided) {
          // Because we wrap the `fork`, we need to manually store the effect,
          // so assertions on the `fork` work.
          processEffect({
            effectId: nextSagaId(),
            effect: value,
          });

          const finalArgs = args;

          return fork(
            createSagaWrapper(fn.name),
            fn.apply(context, finalArgs),
            refineYieldedValue,
          );
        }

        if (detached && !isProvided) {
          // Because we wrap the `spawn`, we need to manually store the effect,
          // so assertions on the `spawn` work.
          processEffect({
            effectId: nextSagaId(),
            effect: value,
          });

          return spawn(
            createSagaWrapper(fn.name),
            fn.apply(context, args),
            refineYieldedValue,
          );
        }

        return providedValue;
      }

      case type === CALL: {
        const providedValue = useProvidedValue(value);

        if (providedValue !== value) {
          return providedValue;
        }

        // Because we manually consume the `call`, we need to manually store
        // the effect, so assertions on the `call` work.
        processEffect({
          effectId: nextSagaId(),
          effect: value,
        });

        const { context, fn, args } = effect;
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

  let reducer: Reducer = defaultReducer;

  function getAllPromises(): Promise<*> {
    return new Promise(resolve => {
      Promise.all([...forkedTasks.map(taskPromise), mainTaskPromise]).then(
        () => {
          if (stopDirty) {
            stopDirty = false;
            resolve(getAllPromises());
          }
          resolve();
        },
      );
    });
  }

  function addForkedTask(task: Task): void {
    stopDirty = true;
    forkedTasks.push(task);
  }

  function cancelMainTask(
    timeout: number,
    silenceTimeout: boolean,
    timedOut: boolean,
  ): Promise<*> {
    if (!silenceTimeout && timedOut) {
      warn(`Saga exceeded async timeout of ${timeout}ms`);
    }

    mainTask.cancel();

    return mainTaskPromise;
  }

  function scheduleStop(timeout: Timeout | TimeoutConfig): Promise<*> {
    let promise = schedule(getAllPromises).then(() => false);
    let silenceTimeout = false;
    let timeoutLength: ?Timeout;

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
      promise = Promise.race([promise, delay(timeoutLength).then(() => true)]);
    }

    return promise.then(timedOut =>
      schedule(cancelMainTask, [timeoutLength, silenceTimeout, timedOut]),
    );
  }

  function queueAction(action: Action): void {
    queuedActions.push(action);
  }

  function notifyListeners(action: Action): void {
    ioChannel.put(action);
  }

  function dispatch(action: Action): any {
    if (typeof action._delayTime === 'number') {
      const { _delayTime } = action;

      dispatchPromise.then(() => delay(_delayTime)).then(() => {
        storeState = reducer(storeState, action);
        notifyListeners(action);
      });
    } else {
      storeState = reducer(storeState, action);
      dispatchPromise.then(() => notifyListeners(action));
    }
  }

  function associateChannelWithPattern(channel: Object, pattern: any): void {
    channelsToPatterns.set(channel, pattern);
  }

  function getDispatchableActions(effect: Object): Array<Action> {
    const pattern = effect.pattern || channelsToPatterns.get(effect.channel);
    const index = findDispatchableActionIndex(queuedActions, pattern);

    if (index > -1) {
      const actions = queuedActions.splice(0, index + 1);
      return actions;
    }

    return [];
  }

  function processEffect(event: Object): void {
    const parsedEffect = parseEffect(event.effect);

    // Using string literal for flow
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
      case FORK: {
        outstandingForkEffects.set(event.effectId, parsedEffect.effect);
        break;
      }

      case TAKE: {
        const actions = getDispatchableActions(parsedEffect.effect);

        const [reducerActions, [sagaAction]] = splitAt(actions, -1);

        reducerActions.forEach(action => {
          dispatch(action);
        });

        if (sagaAction) {
          dispatch(sagaAction);
        }

        break;
      }

      case ACTION_CHANNEL: {
        outstandingActionChannelEffects.set(
          event.effectId,
          parsedEffect.effect,
        );
        break;
      }

      // no default
    }
  }

  function addExpectation(expectation: Function): void {
    expectations.push(expectation);
  }

  const io = {
    dispatch,

    channel: ioChannel,

    getState(): any {
      return storeState;
    },

    sagaMonitor: {
      effectTriggered(event: Object): void {
        processEffect(event);
      },

      effectResolved(effectId: number, value: any): void {
        const forkEffect = outstandingForkEffects.get(effectId);

        if (forkEffect) {
          addForkedTask(value);
          return;
        }

        const actionChannelEffect = outstandingActionChannelEffects.get(
          effectId,
        );

        if (actionChannelEffect) {
          associateChannelWithPattern(value, actionChannelEffect.pattern);
        }
      },

      effectRejected() {},
      effectCancelled() {},
    },

    logger: () => {},
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

    actionChannel: createEffectTesterFromEffects(
      'actionChannel',
      ACTION_CHANNEL,
      asEffect.actionChannel,
    ),
    apply: createEffectTesterFromEffects('apply', CALL, asEffect.call),
    call: createEffectTesterFromEffects('call', CALL, asEffect.call),
    cps: createEffectTesterFromEffects('cps', CPS, asEffect.cps),
    fork: createEffectTesterFromEffects('fork', FORK, asEffect.fork),
    getContext: createEffectTesterFromEffects(
      'getContext',
      GET_CONTEXT,
      asEffect.getContext,
    ),
    put: createEffectTesterFromEffects('put', PUT, asEffect.put),
    putResolve: createEffectTesterFromEffects('putResolve', PUT, asEffect.put),
    race: createEffectTesterFromEffects('race', RACE, asEffect.race),
    select: createEffectTesterFromEffects('select', SELECT, asEffect.select),
    spawn: createEffectTesterFromEffects('spawn', FORK, asEffect.fork),
    setContext: createEffectTesterFromEffects(
      'setContext',
      SET_CONTEXT,
      asEffect.setContext,
    ),
    take: createEffectTesterFromEffects('take', TAKE, asEffect.take),
    takeMaybe: createEffectTesterFromEffects('takeMaybe', TAKE, asEffect.take),
  };

  api.actionChannel.like = createEffectTester(
    'actionChannel',
    ACTION_CHANNEL,
    effects.actionChannel,
    asEffect.actionChannel,
    true,
  );
  api.actionChannel.pattern = pattern => api.actionChannel.like({ pattern });

  api.apply.like = createEffectTester(
    'apply',
    CALL,
    effects.apply,
    asEffect.call,
    true,
  );
  api.apply.fn = fn => api.apply.like({ fn });

  api.call.like = createEffectTester(
    'call',
    CALL,
    effects.call,
    asEffect.call,
    true,
  );
  api.call.fn = fn => api.call.like({ fn });

  api.cps.like = createEffectTester(
    'cps',
    CPS,
    effects.cps,
    asEffect.cps,
    true,
  );
  api.cps.fn = fn => api.cps.like({ fn });

  api.fork.like = createEffectTester(
    'fork',
    FORK,
    effects.fork,
    asEffect.fork,
    true,
  );
  api.fork.fn = fn => api.fork.like({ fn });

  api.put.like = createEffectTester(
    'put',
    PUT,
    effects.put,
    asEffect.put,
    true,
  );
  api.put.actionType = type => api.put.like({ action: { type } });

  api.putResolve.like = createEffectTester(
    'putResolve',
    PUT,
    effects.putResolve,
    asEffect.put,
    true,
  );
  api.putResolve.actionType = type => api.putResolve.like({ action: { type } });

  api.select.like = createEffectTester(
    'select',
    SELECT,
    effects.select,
    asEffect.select,
    true,
  );
  api.select.selector = selector => api.select.like({ selector });

  api.spawn.like = createEffectTester(
    'spawn',
    FORK,
    effects.spawn,
    asEffect.fork,
    true,
  );
  api.spawn.fn = fn => api.spawn.like({ fn });

  function checkExpectations(): void {
    expectations.forEach(expectation => {
      expectation({ storeState, returnValue, errorValue });
    });
  }

  function apiDispatch(action: Action): ExpectApi {
    let dispatchableAction;

    if (typeof delayTime === 'number') {
      dispatchableAction = Object.assign({}, action, {
        _delayTime: delayTime,
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

  function taskPromise(task: Task): Promise<*> {
    return task.toPromise();
  }

  function start(): ExpectApi {
    const sagaWrapper = createSagaWrapper(generator.name);

    isRunning = true;
    iterator = generator(...sagaArgs);

    mainTask = runSaga(
      io,
      sagaWrapper,
      iterator,
      refineYieldedValue,
      setReturnValue,
      setErrorValue,
    );

    mainTaskPromise = taskPromise(mainTask)
      .then(checkExpectations, e => (!expectError && e) || checkExpectations())
      // Pass along the error instead of rethrowing or allowing to
      // bubble up to avoid PromiseRejectionHandledWarning
      .catch(identity);

    return api;
  }

  function stop(timeout: Timeout | TimeoutConfig): Promise<*> {
    return scheduleStop(timeout).then(err => {
      if (err) {
        throw err;
      }
    });
  }

  function exposeResults(): Object {
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
      toJSON: () => toJSON(finalEffects),
    };
  }

  function run(
    timeout?: Timeout | TimeoutConfig = expectSaga.DEFAULT_TIMEOUT,
  ): Promise<*> {
    start();
    return stop(timeout).then(exposeResults);
  }

  function silentRun(
    timeout?: Timeout = expectSaga.DEFAULT_TIMEOUT,
  ): Promise<*> {
    return run({
      timeout,
      silenceTimeout: true,
    });
  }

  function withState(state: any): ExpectApi {
    storeState = state;
    return api;
  }

  function withReducer(newReducer: Reducer, initialState?: any): ExpectApi {
    reducer = newReducer;

    storeState = extractState(newReducer, initialState);

    return api;
  }

  function provide(newProviders: Providers | Array<Providers | [Object, any]>) {
    providers = Array.isArray(newProviders)
      ? coalesceProviders(newProviders)
      : newProviders;

    return api;
  }

  function returns(value: any): ExpectApi {
    addExpectation(
      createReturnExpectation({
        value,
        expected: !negateNextAssertion,
      }),
    );

    return api;
  }

  function throws(type: any): ExpectApi {
    expectError = true;

    addExpectation(
      createErrorExpectation({
        type,
        expected: !negateNextAssertion,
      }),
    );

    return api;
  }

  function hasFinalState(state: mixed): ExpectApi {
    addExpectation(
      createStoreStateExpectation({
        state,
        expected: !negateNextAssertion,
      }),
    );

    return api;
  }

  function apiDelay(time: number): ExpectApi {
    delayTime = time;
    return api;
  }

  function createEffectTester(
    effectName: string,
    storeKey: string,
    effectCreator: Function,
    extractEffect: Function,
    like: boolean = false,
  ): Function {
    return (...args: mixed[]) => {
      const expectedEffect = like ? args[0] : effectCreator(...args);

      addExpectation(
        createEffectExpectation({
          effectName,
          expectedEffect,
          storeKey,
          like,
          extractEffect,
          store: effectStores[storeKey],
          expected: !negateNextAssertion,
        }),
      );

      negateNextAssertion = false;

      return api;
    };
  }

  function createEffectTesterFromEffects(
    effectName: string,
    storeKey: string,
    extractEffect: Function,
  ): Function {
    return createEffectTester(
      effectName,
      storeKey,
      effects[effectName],
      extractEffect,
    );
  }

  return api;
}

expectSaga.DEFAULT_TIMEOUT = 250;
