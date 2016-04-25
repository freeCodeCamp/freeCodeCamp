import { Observable, Subject } from 'rx';
import test from 'tape';
import { spy } from 'sinon';
import { applyMiddleware, createStore } from 'redux';
import createSaga from './redux-epic';

const setup = (saga, spy) => {
  const reducer = (state = 0) => state;
  const sagaMiddleware = createSaga(
    action$ => action$
      .filter(({ type }) => type === 'foo')
      .map(() => ({ type: 'bar' })),
    action$ => action$
      .filter(({ type }) => type === 'bar')
      .map(({ type: 'baz' })),
    saga ? saga : () => Observable.empty()
  );
  const store = applyMiddleware(sagaMiddleware)(createStore)(spy || reducer);
  return {
    reducer,
    sagaMiddleware,
    store
  };
};

test('createSaga', t => {
  const sagaMiddleware = createSaga(
    action$ => action$.map({ type: 'foo' })
  );
  t.equal(
    typeof sagaMiddleware,
    'function',
    'sagaMiddleware is not a function'
  );
  t.equal(
    typeof sagaMiddleware.subscribe,
    'function',
    'sagaMiddleware does not have a subscription method'
  );
  t.equal(
    typeof sagaMiddleware.subscribeOnCompleted,
    'function',
    'sagaMiddleware does not have a subscribeOnCompleted method'
  );
  t.equal(
    typeof sagaMiddleware.end,
    'function',
    'sagaMiddleware does not have an end method'
  );
  t.equal(
    typeof sagaMiddleware.restart,
    'function',
    'sagaMiddleware does not have an restart method'
  );
  t.equal(
    typeof sagaMiddleware.dispose,
    'function',
    'sagaMiddleware does not have a dispose method'
  );
  t.end();
});

test('dispatching actions', t => {
  const reducer = spy((state = 0) => state);
  const { store } = setup(null, reducer);
  store.dispatch({ type: 'foo' });
  t.equal(reducer.callCount, 4, 'reducer is called four times');
  t.assert(
    reducer.getCall(1).calledWith(0, { type: 'foo' }),
    'reducer called with initial action'
  );
  t.assert(
    reducer.getCall(2).calledWith(0, { type: 'bar' }),
    'reducer was not called with saga action'
  );
  t.assert(
    reducer.getCall(3).calledWith(0, { type: 'baz' }),
    'second saga responded to action from first saga'
  );
  t.end();
});

test('lifecycle', t => {
  t.test('subscribe', t => {
    const { sagaMiddleware } = setup();
    const subscription = sagaMiddleware.subscribeOnCompleted(() => {});
    t.assert(
      subscription,
      'subscribe did not return a disposable'
    );
    t.isEqual(
      typeof subscription.dispose,
      'function',
      'disposable does not have a dispose method'
    );
    t.doesNotThrow(
      () => subscription.dispose(),
      'disposable is not disposable'
    );
    t.end();
  });

  t.test('end', t => {
    const result$ = new Subject();
    const { sagaMiddleware } = setup(() => result$);
    sagaMiddleware.subscribeOnCompleted(() => {
      t.pass('all sagas completed');
      t.end();
    });
    sagaMiddleware.end();
    t.pass('saga still active');
    result$.onCompleted();
  });

  t.test('disposable', t => {
    const result$ = new Subject();
    const { sagaMiddleware } = setup(() => result$);
    t.plan(2);
    sagaMiddleware.subscribeOnCompleted(() => {
      t.fail('all sagas completed');
    });
    t.assert(
      result$.hasObservers(),
      'saga is observed by sagaMiddleware'
    );
    sagaMiddleware.dispose();
    t.false(
      result$.hasObservers(),
      'watcher has no observers after sagaMiddleware is disposed'
    );
  });
});

test('restart', t => {
  const reducer = spy((state = 0) => state);
  const { sagaMiddleware, store } = setup(null, reducer);
  store.dispatch({ type: 'foo' });
  t.assert(
    reducer.getCall(1).calledWith(0, { type: 'foo' }),
    'reducer called with initial dispatch'
  );
  t.assert(
    reducer.getCall(2).calledWith(0, { type: 'bar' }),
    'reducer called with saga action'
  );
  t.assert(
    reducer.getCall(3).calledWith(0, { type: 'baz' }),
    'second saga responded to action from first saga'
  );
  sagaMiddleware.end();
  t.equal(reducer.callCount, 4, 'saga produced correct amount of actions');
  sagaMiddleware.restart();
  store.dispatch({ type: 'foo' });
  t.equal(
    reducer.callCount,
    7,
    'saga restart and produced correct amount of actions'
  );
  t.assert(
    reducer.getCall(4).calledWith(0, { type: 'foo' }),
    'reducer called with second dispatch'
  );
  t.assert(
    reducer.getCall(5).calledWith(0, { type: 'bar' }),
    'reducer called with saga reaction'
  );
  t.assert(
    reducer.getCall(6).calledWith(0, { type: 'baz' }),
    'second saga responded to action from first saga'
  );
  t.end();
});

test('long lived saga', t => {
  let count = 0;
  const tickSaga = action$ => action$
    .filter(({ type }) => type === 'start-tick')
    .flatMap(() => Observable.interval(500))
    // make sure long lived saga's do not persist after
    // action$ has completed
    .takeUntil(action$.last())
    .map(({ type: 'tick' }));

  const reducerSpy = spy((state = 0) => state);
  const { store, sagaMiddleware } = setup(tickSaga, reducerSpy);
  const unlisten = store.subscribe(() => {
    count += 1;
    if (count >= 5) {
      sagaMiddleware.end();
    }
  });
  sagaMiddleware.subscribeOnCompleted(() => {
    t.equal(
      count,
      5,
      'saga dispatched correct amount of ticks'
    );
    unlisten();
    t.pass('long lived saga completed');
    t.end();
  });
  store.dispatch({ type: 'start-tick' });
});
