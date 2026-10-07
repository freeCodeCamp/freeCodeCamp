'use strict';
var requestOptions = require('../../lib/requestOptions');

function resolveProxyHost(container) {
  var parsedHost;

  if (container.options.memoizeHost && container.options.memoizedHost) {
    parsedHost = container.options.memoizedHost;
  } else {
    parsedHost = requestOptions.parseHost(container);
  }

  container.proxy.reqBuilder.host = parsedHost.host;
  container.proxy.reqBuilder.port = container.options.port || parsedHost.port;
  container.proxy.requestModule = parsedHost.module;
  return Promise.resolve(container);
}

module.exports = resolveProxyHost;
