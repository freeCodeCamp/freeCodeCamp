var Rx = require('rx');
var debug = require('debug')('freecc:rxUtils');
var slice = Array.prototype.slice;

exports.saveUser = function saveUser(user) {
  return new Rx.Observable.create(function(observer) {
    if (!user || typeof user.save !== 'function') {
      debug('no user or save method');
      observer.onNext();
      return observer.onCompleted();
    }
    user.save(function(err, savedUser) {
      if (err) {
        return observer.onError(err);
      }
      debug('user saved');
      observer.onNext(savedUser);
      observer.onCompleted();
    });
  });
};

exports.observableQueryFromModel =
  function observableQueryFromModel(Model, method, query) {
    return Rx.Observable.fromNodeCallback(Model[method], Model)(query);
  };

exports.observeMethod = function observeMethod(Model, method) {
  return Rx.Observable.fromNodeCallback(Model[method], Model);
};
