var Rx = require('rx');
var debug = require('debug')('freecc:user:remote');

function destroyById(id, Model) {
  return Rx.Observable.create(function(observer) {
    Model.destroyById(id, function(err) {
      if (err) { return observer.onError(err); }
      observer.onCompleted();
    });
    return Rx.Disposable(Rx.helpers.noop);
  });
}

module.exports = function(app) {
  var User = app.models.User;
  var UserIdentity = app.models.UserIdentity;
  var UserCredential = app.models.UserCredential;
  User.observe('after delete', function(ctx, next) {
    debug('removing user', ctx.where);
    var id = ctx.where && ctx.where.id ? ctx.where.id : null;
    if (!id) {
      return next();
    }
    Rx.Observable.combineLatest(
      destroyById(id, UserIdentity),
      destroyById(id, UserCredential),
      Rx.helpers.noop
    ).subscribe(
      Rx.helpers.noop,
      function(err) {
        debug('error deleting user %s stuff', id, err);
        next(err);
      },
      function() {
        debug('user stuff deleted for user %s', id);
        next();
      }
    );
  });
};
