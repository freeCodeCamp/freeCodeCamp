'use strict';

var debug = require('debug')('express-http-proxy');

function defaultDecorator(proxyReqOptBuilder /*, userReq */) {
  return proxyReqOptBuilder;
}

function decorateProxyReqOpt(container) {
  var resolverFn = container.options.proxyReqOptDecorator || defaultDecorator;

  return Promise
    .resolve(resolverFn(container.proxy.reqBuilder, container.user.req))
    .then(function (processedReqOpts) {
      delete processedReqOpts.params;
      container.proxy.reqBuilder = processedReqOpts;
      debug('Request options (after processing): %o', processedReqOpts);
      return Promise.resolve(container);
    });
}

module.exports = decorateProxyReqOpt;
