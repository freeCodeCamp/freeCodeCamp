// @flow
import isEqual from 'lodash.isequal';

import * as effects from 'redux-saga/effects';

import { eventChannel } from 'redux-saga';

import { ARGUMENT, ERROR, NONE, FINISH, FINISH_ARGUMENT } from './historyTypes';

import {
  ALL,
  ACTION_CHANNEL,
  CALL,
  CANCEL,
  CANCELLED,
  CPS,
  FLUSH,
  FORK,
  GET_CONTEXT,
  JOIN,
  PUT,
  RACE,
  SELECT,
  SET_CONTEXT,
  TAKE,
} from '../shared/keys';

import SagaTestError from '../shared/SagaTestError';
import createErrorMessage from './createErrorMessage';
import assertSameEffect from './assertSameEffect';

export default function testSaga(saga: Function, ...sagaArgs: Array<any>): Api {
  const api = {
    next,
    back,
    finish,
    restart,
    save,
    restore,
    throw: throwError,
  };

  const savePoints: SavePoints = {};
  let history: Array<HistoryItem> = [];
  let finalSagaArgs = sagaArgs;
  let iterator = createIterator();

  function createEffectTester(
    name: string,
    key?: string,
    effect: Function,
    isForkedEffect: boolean = false,
  ): EffectTesterCreator {
    return yieldedValue => (...args) => {
      assertSameEffect(
        eventChannel,
        name,
        key,
        isForkedEffect,
        yieldedValue,
        effect(...args),
        history.length,
      );

      return api;
    };
  }

  function createEffectTesterFromEffects(
    name: string,
    key: string,
  ): EffectTesterCreator {
    return createEffectTester(name, key, effects[name]);
  }

  function createEffectTesterFromHelperEffect(
    name: string,
  ): EffectTesterCreator {
    return createEffectTester(name, undefined, effects[name], true);
  }

  const effectsTestersCreators: EffectTestersCreator = {
    actionChannel: createEffectTesterFromEffects(
      'actionChannel',
      ACTION_CHANNEL,
    ),
    all: createEffectTesterFromEffects('all', ALL),
    apply: createEffectTesterFromEffects('apply', CALL),
    call: createEffectTesterFromEffects('call', CALL),
    cancel: createEffectTesterFromEffects('cancel', CANCEL),
    cancelled: createEffectTesterFromEffects('cancelled', CANCELLED),
    cps: createEffectTesterFromEffects('cps', CPS),
    debounce: createEffectTesterFromHelperEffect('debounce'),
    delay: createEffectTesterFromEffects('delay', CALL),
    flush: createEffectTesterFromEffects('flush', FLUSH),
    fork: createEffectTesterFromEffects('fork', FORK),
    getContext: createEffectTesterFromEffects('getContext', GET_CONTEXT),
    join: createEffectTesterFromEffects('join', JOIN),
    put: createEffectTesterFromEffects('put', PUT),
    putResolve: createEffectTesterFromEffects('putResolve', PUT),
    race: createEffectTesterFromEffects('race', RACE),
    select: createEffectTesterFromEffects('select', SELECT),
    setContext: createEffectTesterFromEffects('setContext', SET_CONTEXT),
    spawn: createEffectTesterFromEffects('spawn', FORK),
    take: createEffectTesterFromEffects('take', TAKE),
    takeEvery: createEffectTesterFromHelperEffect('takeEvery'),
    takeLatest: createEffectTesterFromHelperEffect('takeLatest'),
    takeLeading: createEffectTesterFromHelperEffect('takeLeading'),
    takeMaybe: createEffectTesterFromEffects('takeMaybe', TAKE),
    throttle: createEffectTesterFromHelperEffect('throttle'),
    retry: createEffectTesterFromHelperEffect('retry'),

    isDone: done => () => {
      if (!done) {
        throw new SagaTestError('saga not done');
      }

      return api;
    },

    is: value => arg => {
      if (!isEqual(arg, value)) {
        const errorMessage = createErrorMessage(
          'yielded values do not match',
          history.length,
          value,
          arg,
        );

        throw new SagaTestError(errorMessage);
      }

      return api;
    },

    inspect: value => fn => {
      fn(value);
      return api;
    },

    returns: (value, done) => arg => {
      if (!done) {
        throw new SagaTestError('saga not done');
      }

      if (!isEqual(arg, value)) {
        const errorMessage = createErrorMessage(
          'returned values do not match',
          history.length,
          value,
          arg,
        );

        throw new SagaTestError(errorMessage);
      }

      return api;
    },
  };

  function createIterator(): Generator<*, *, *> {
    return saga(...finalSagaArgs);
  }

  function apiWithEffectsTesters({
    value,
    done,
  }: IteratorResult<*, *>): ApiWithEffectsTesters {
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
      returns: effectsTestersCreators.returns(value, done),
    });

    return newApi;
  }

  function restart(...args: Array<any>): Api {
    if (args.length > 0) {
      finalSagaArgs = args;
    }

    history = [];
    iterator = createIterator();

    return api;
  }

  function next(...args: Array<any>): ApiWithEffectsTesters {
    const arg = args[0];
    let result;

    if (args.length === 0) {
      history.push(({ type: NONE }: HistoryItemNone));
      result = iterator.next();
    } else {
      history.push(({ type: ARGUMENT, value: arg }: HistoryItemArgument));
      result = iterator.next(arg);
    }

    return apiWithEffectsTesters(result);
  }

  function finish(...args: Array<any>): ApiWithEffectsTesters {
    const arg = args[0];
    let result;

    if (args.length === 0) {
      history.push(({ type: FINISH }: HistoryItemFinish));
      result = iterator.return();
    } else {
      history.push(
        ({ type: FINISH_ARGUMENT, value: arg }: HistoryItemFinishArgument),
      );
      result = iterator.return(arg);
    }

    return apiWithEffectsTesters(result);
  }

  function throwError(error: Error): ApiWithEffectsTesters {
    history.push(({ type: ERROR, value: error }: HistoryItemError));

    const result = iterator.throw(error);

    return apiWithEffectsTesters(result);
  }

  function restore(name: string): Api {
    if (!savePoints[name]) {
      throw new Error(`No such save point ${name}`);
    }

    iterator = createIterator();
    history = savePoints[name];
    return applyHistory();
  }

  function back(n: number = 1): Api {
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

  function save(name: string): Api {
    savePoints[name] = history.slice(0);
    return api;
  }

  function applyHistory(): Api {
    for (let i = 0, l = history.length; i < l; i++) {
      const arg = history[i];

      switch (arg.type) {
        case NONE:
          iterator.next();
          break;

        case ARGUMENT:
          iterator.next(arg.value);
          break;

        case ERROR:
          iterator.throw(arg.value);
          break;

        case FINISH:
          iterator.return();
          break;

        case FINISH_ARGUMENT:
          iterator.return(arg.value);
          break;

        // no default
      }
    }

    return api;
  }

  return api;
}
