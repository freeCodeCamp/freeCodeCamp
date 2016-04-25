import { CompositeDisposable, Observable, Subject } from 'rx';

export default (dependencies, ...sagas) => {
  if (typeof dependencies === 'function') {
    sagas.push(dependencies);
    dependencies = {};
  }
  let action$;
  let lifecycle;
  let compositeDisposable;
  let start;
  function sagaMiddleware({ dispatch, getState }) {
    start = () => {
      compositeDisposable = new CompositeDisposable();
      action$ = new Subject();
      lifecycle = new Subject();
      const sagaSubscription = Observable
        .from(sagas)
        .map(saga => saga(action$, getState, dependencies))
        .doOnNext(result$ => {
          if (!Observable.isObservable(result$)) {
            throw new Error('saga should returned an observable');
          }
          if (result$ === action$) {
            throw new Error('Saga returned original action stream!');
          }
        })
        .mergeAll()
        .filter(action => action && typeof action.type === 'string')
        .subscribe(
          action => dispatch(action),
          err => { throw err; },
          () => lifecycle.onCompleted()
        );
      compositeDisposable.add(sagaSubscription);
    };
    start();
    return next => action => {
      const result = next(action);
      action$.onNext(action);
      return result;
    };
  }

  sagaMiddleware.subscribe =
    (...args) => lifecycle.subscribe.apply(lifecycle, args);
  sagaMiddleware.subscribeOnCompleted =
    (...args) => lifecycle.subscribeOnCompleted.apply(lifecycle, args);
  sagaMiddleware.end = () => action$.onCompleted();
  sagaMiddleware.dispose = () => compositeDisposable.dispose();
  sagaMiddleware.restart = () => {
    sagaMiddleware.dispose();
    action$.dispose();
    start();
  };
  return sagaMiddleware;
};
