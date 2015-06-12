var Rx = require('rx');
var debug = require('debug')('freecc:user:remote');

function destroyAllRelated(id, Model) {
  return Rx.Observable.fromNodeCallback(
    Model.destroyAll,
    Model
  )({ userId: id });
}

module.exports = function(app) {
  var User = app.models.User;
  var UserIdentity = app.models.UserIdentity;
  var UserCredential = app.models.UserCredential;
  User.observe('before delete', function(ctx, next) {
    debug('removing user', ctx.where);
    var id = ctx.where && ctx.where.id ? ctx.where.id : null;
    if (!id) {
      return next();
    }
    Rx.Observable.combineLatest(
      destroyAllRelated(id, UserIdentity),
      destroyAllRelated(id, UserCredential),
      function(identData, credData) {
        return {
          identData: identData,
          credData: credData
        };
      }
    ).subscribe(
      function(data) {
        debug('deleted', data);
      },
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
