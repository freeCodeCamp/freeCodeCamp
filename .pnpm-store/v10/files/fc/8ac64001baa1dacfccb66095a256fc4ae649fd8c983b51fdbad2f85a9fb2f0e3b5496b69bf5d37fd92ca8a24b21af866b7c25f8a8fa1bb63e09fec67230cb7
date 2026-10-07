'use strict';


function decorateUserResHeaders(container) {
  var resolverFn = container.options.userResHeaderDecorator;
  var headers = container.user.res.getHeaders ? container.user.res.getHeaders() : container.user.res._headers;

  if (!resolverFn) {
    return Promise.resolve(container);
  }

  const clearAllHeaders = (res) => {
    for (const header in res._headers) {
      res.removeHeader(header)
    }
  }

  return Promise
    .resolve(resolverFn(headers, container.user.req, container.user.res, container.proxy.req, container.proxy.res))
    .then(function(headers) {
      return new Promise(function(resolve) {
        clearAllHeaders(container.user.res);
        container.user.res.set(headers);
        resolve(container);
      });
    });
}

module.exports = decorateUserResHeaders;
