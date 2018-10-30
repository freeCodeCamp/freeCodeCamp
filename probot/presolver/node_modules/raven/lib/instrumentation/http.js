'use strict';
var util = require('util');
var utils = require('../utils');

module.exports = function(Raven, http, originals) {
  var OrigClientRequest = http.ClientRequest;
  var ClientRequest = function(options, cb) {
    // Note: this won't capture a breadcrumb if a response never comes
    // It would be useful to know if that was the case, though, so
    // todo: revisit to see if we can capture sth indicating response never came
    // possibility: capture one breadcrumb for "req sent" and one for "res recvd"
    // seems excessive but solves the problem and *is* strictly more information
    // could be useful for weird response sequencing bug scenarios
    OrigClientRequest.call(this, options, cb);

    // We could just always reconstruct this from this.agent, this._headers, this.path, etc
    // but certain other http-instrumenting libraries (like nock, which we use for tests) fail to
    // maintain the guarantee that after calling OrigClientRequest, those fields will be populated
    if (typeof options === 'string') {
      this.__ravenBreadcrumbUrl = options;
    } else {
      var protocol = options.protocol || '';
      var hostname = options.hostname || options.host || '';
      // Don't log standard :80 (http) and :443 (https) ports to reduce the noise
      var port =
        !options.port || options.port === 80 || options.port === 443
          ? ''
          : ':' + options.port;
      var path = options.path || '/';

      this.__ravenBreadcrumbUrl = protocol + '//' + hostname + port + path;
    }
  };
  util.inherits(ClientRequest, OrigClientRequest);

  utils.fill(ClientRequest.prototype, 'emit', function(origEmit) {
    return function(evt, maybeResp) {
      if (evt === 'response' && this.__ravenBreadcrumbUrl) {
        if (!Raven.dsn || this.__ravenBreadcrumbUrl.indexOf(Raven.dsn.host) === -1) {
          Raven.captureBreadcrumb({
            type: 'http',
            category: 'http',
            data: {
              method: this.method,
              url: this.__ravenBreadcrumbUrl,
              status_code: maybeResp.statusCode
            }
          });
        }
      }
      return origEmit.apply(this, arguments);
    };
  });

  utils.fill(
    http,
    'ClientRequest',
    function() {
      return ClientRequest;
    },
    originals
  );

  // http.request orig refs module-internal ClientRequest, not exported one, so
  // it still points at orig ClientRequest after our monkeypatch; these reimpls
  // just get that reference updated to use our new ClientRequest
  utils.fill(
    http,
    'request',
    function() {
      return function(options, cb) {
        return new http.ClientRequest(options, cb);
      };
    },
    originals
  );

  utils.fill(
    http,
    'get',
    function() {
      return function(options, cb) {
        var req = http.request(options, cb);
        req.end();
        return req;
      };
    },
    originals
  );

  return http;
};
