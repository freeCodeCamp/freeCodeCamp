'use strict';

// No-op version of filter.  Allows everything!

function defaultFilter(proxyReqOptBuilder, userReq) { // eslint-disable-line
  return true;
}

function filterUserRequest(container) {
  var resolverFn = container.options.filter || defaultFilter;

  return Promise
    .resolve(resolverFn(container.user.req, container.user.res))
    .then(function (shouldIContinue) {
      if (shouldIContinue) {
        return Promise.resolve(container);
      } else {
        return Promise.reject(); // reject with no args should simply call next()
      }
    });
}

module.exports = filterUserRequest;

