'use strict';

var debug = require('debug')('express-http-proxy');

function defaultDecorator(proxyReqOptBody/*, userReq */) {
  return proxyReqOptBody;
}

function decorateProxyReqBody(container) {
  var userDecorator = container.options.proxyReqBodyDecorator;
  var resolverFn = userDecorator || defaultDecorator;

  if (userDecorator) {
    debug('using custom proxyReqBodyDecorator');
  }

  return Promise
    .resolve(resolverFn(container.proxy.bodyContent, container.user.req))
    .then(function(bodyContent) {
      container.proxy.bodyContent = bodyContent;
      return Promise.resolve(container);
    });
}

module.exports = decorateProxyReqBody;
