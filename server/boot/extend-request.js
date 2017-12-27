import _ from 'lodash';
import http from 'http';
import { Observable } from 'rx';
import { login } from 'passport/lib/http/request';

// make login polymorphic
// if supplied callback it works as normal
// if called without callback it returns an observable
// login(user, options?, cb?) => Void|Observable
function login$(...args) {
  if (_.isFunction(_.last(args))) {
    return login.apply(this, args);
  }
  return Observable.fromNodeCallback(login).apply(this, args);
}

module.exports = function extendRequest() {
  // see: jaredhanson/passport/blob/master/lib/framework/connect.js#L33
  http.IncomingMessage.prototype.login = login$;
  http.IncomingMessage.prototype.logIn = login$;
};
