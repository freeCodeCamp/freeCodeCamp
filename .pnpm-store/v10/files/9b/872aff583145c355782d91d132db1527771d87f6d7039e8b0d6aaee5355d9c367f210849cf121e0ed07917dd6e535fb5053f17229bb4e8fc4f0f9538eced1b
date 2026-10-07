'use strict';

var url = require('url');
var debug = require('debug')('express-http-proxy');

function defaultProxyReqPathResolver(req) {
  return url.parse(req.url).path;
}

function resolveProxyReqPath(container) {
  var resolverFn = container.options.proxyReqPathResolver || defaultProxyReqPathResolver;

  return Promise
    .resolve(resolverFn(container.user.req))
    .then(function(resolvedPath) {
      container.proxy.reqBuilder.path = resolvedPath;
      debug('resolved proxy path:', resolvedPath);
      return Promise.resolve(container);
    });
}

module.exports = resolveProxyReqPath;
