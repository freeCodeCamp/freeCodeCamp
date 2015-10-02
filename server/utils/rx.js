import Rx from 'rx';
import debugFactory from 'debug';

const debug = debugFactory('freecc:rxUtils');

export function saveInstance(instance) {
  return new Rx.Observable.create(function(observer) {
    if (!instance || typeof instance.save !== 'function') {
      debug('no instance or save method');
      observer.onNext();
      return observer.onCompleted();
    }
    instance.save(function(err, savedInstance) {
      if (err) {
        return observer.onError(err);
      }
      debug('instance saved');
      observer.onNext(savedInstance);
      observer.onCompleted();
    });
  });
}

// alias saveInstance
export const saveUser = saveInstance;

export function observeQuery(Model, method, query) {
  return Rx.Observable.fromNodeCallback(Model[method], Model)(query);
}

export function observeMethod(context, methodName) {
  return Rx.Observable.fromNodeCallback(context[methodName], context);
}
