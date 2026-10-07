(function () {

  'use strict';

  var assign = require('object-assign');
  var vary = require('vary');

  var defaults = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }
      return false;
    } else if (isString(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }

  function configureOrigin(options, req) {
    var requestOrigin = req.headers.origin,
      headers = [],
      isAllowed;

    if (!options.origin || options.origin === '*') {
      // allow any origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: '*'
      }]);
    } else if (isString(options.origin)) {
      // fixed origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: options.origin
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options.origin);
      // reflect origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    }

    return headers;
  }

  function configureMethods(options) {
    var methods = options.methods;
    if (methods.join) {
      methods = options.methods.join(','); // .methods is an array, so turn it into a string
    }
    return {
      key: 'Access-Control-Allow-Methods',
      value: methods
    };
  }

  function configureCredentials(options) {
    if (options.credentials === true) {
      return {
        key: 'Access-Control-Allow-Credentials',
        value: 'true'
      };
    }
    return null;
  }

  function configureAllowedHeaders(options, req) {
    var allowedHeaders = options.allowedHeaders || options.headers;
    var headers = [];

    if (!allowedHeaders) {
      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers
      headers.push([{
        key: 'Vary',
        value: 'Access-Control-Request-Headers'
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
    }
    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: 'Access-Control-Allow-Headers',
        value: allowedHeaders
      }]);
    }

    return headers;
  }

  function configureExposedHeaders(options) {
    var headers = options.exposedHeaders;
    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(','); // .headers is an array, so turn it into a string
    }
    if (headers && headers.length) {
      return {
        key: 'Access-Control-Expose-Headers',
        value: headers
      };
    }
    return null;
  }

  function configureMaxAge(options) {
    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString()
    if (maxAge && maxAge.length) {
      return {
        key: 'Access-Control-Max-Age',
        value: maxAge
      };
    }
    return null;
  }

  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];
      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === 'Vary' && header.value) {
          vary(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }

  function cors(options, req, res, next) {
    var headers = [],
      method = req.method && req.method.toUpperCase && req.method.toUpperCase();

    if (method === 'OPTIONS') {
      // preflight
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureMethods(options, req));
      headers.push(configureAllowedHeaders(options, req));
      headers.push(configureMaxAge(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);

      if (options.preflightContinue) {
        next();
      } else {
        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        res.statusCode = options.optionsSuccessStatus;
        res.setHeader('Content-Length', '0');
        res.end();
      }
    } else {
      // actual response
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);
      next();
    }
  }

  function middlewareWrapper(o) {
    // if options are static (either via defaults or custom options passed in), wrap in a function
    var optionsCallback = null;
    if (typeof o === 'function') {
      optionsCallback = o;
    } else {
      optionsCallback = function (req, cb) {
        cb(null, o);
      };
    }

    return function corsMiddleware(req, res, next) {
      optionsCallback(req, function (err, options) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options);
          var originCallback = null;
          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function (origin, cb) {
              cb(null, corsOptions.origin);
            };
          }

          if (originCallback) {
            originCallback(req.headers.origin, function (err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  }

  // can pass either an options hash, an options delegate, or nothing
  module.exports = middlewareWrapper;

}());
