var Rx = require('rx');
var debug = require('debug')('freecc:rxUtils');

exports.saveInstance = function saveInstance(instance) {
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
};

// alias saveInstance
exports.saveUser = exports.saveInstance;

exports.observeQuery = exports.observableQueryFromModel =
  function observableQueryFromModel(Model, method, query) {
    return Rx.Observable.fromNodeCallback(Model[method], Model)(query);
  };

exports.observeMethod = function observeMethod(context, methodName) {
  return Rx.Observable.fromNodeCallback(context[methodName], context);
};
