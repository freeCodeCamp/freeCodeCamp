'use strict';

var cookie = require('cookie');
var urlParser = require('url');
var stringify = require('../vendor/json-stringify-safe');

var utils = require('./utils');

module.exports.parseText = function parseText(message, kwargs) {
  kwargs = kwargs || {};
  kwargs.message = message;

  return kwargs;
};

module.exports.parseError = function parseError(err, kwargs, cb) {
  utils.parseStack(err, function(frames) {
    var name =
      ({}.hasOwnProperty.call(err, 'name') ? err.name : err.constructor.name) + '';
    if (typeof kwargs.message === 'undefined') {
      kwargs.message = name + ': ' + (err.message || '<no message>');
    }
    kwargs.exception = [
      {
        type: name,
        value: err.message,
        stacktrace: {
          frames: frames
        }
      }
    ];

    // Save additional error properties to `extra` under the error type (e.g. `extra.AttributeError`)
    var extraErrorProps;
    for (var key in err) {
      if (err.hasOwnProperty(key)) {
        if (key !== 'name' && key !== 'message' && key !== 'stack' && key !== 'domain') {
          extraErrorProps = extraErrorProps || {};
          extraErrorProps[key] = err[key];
        }
      }
    }
    if (extraErrorProps) {
      kwargs.extra = kwargs.extra || {};
      kwargs.extra[name] = extraErrorProps;
    }

    if (!kwargs.transaction && !kwargs.culprit) {
      for (var n = frames.length - 1; n >= 0; n--) {
        if (frames[n].in_app) {
          kwargs.transaction = utils.getTransaction(frames[n]);
          break;
        }
      }
    }

    cb(kwargs);
  });
};

module.exports.parseRequest = function parseRequest(req, parseUser) {
  var kwargs = {};

  // headers:
  //   node, express: req.headers
  //   koa: req.header
  var headers = req.headers || req.header || {};

  // method:
  //   node, express, koa: req.method
  var method = req.method;

  // host:
  //   express: req.hostname in > 4 and req.host in < 4
  //   koa: req.host
  //   node: req.headers.host
  var host = req.hostname || req.host || headers.host || '<no host>';

  // protocol:
  //   node: <n/a>
  //   express, koa: req.protocol
  var protocol =
    req.protocol === 'https' || req.secure || (req.socket || {}).encrypted
      ? 'https'
      : 'http';

  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa: req.url
  var originalUrl = req.originalUrl || req.url;

  // absolute url
  var absoluteUrl = protocol + '://' + host + originalUrl;

  // query string:
  //   node: req.url (raw)
  //   express, koa: req.query
  var query = req.query || urlParser.parse(originalUrl || '', true).query;

  // cookies:
  //   node, express, koa: req.headers.cookie
  var cookies = cookie.parse(headers.cookie || '');

  // body data:
  //   node, express, koa: req.body
  var data = req.body;
  if (['GET', 'HEAD'].indexOf(method) === -1) {
    if (typeof data === 'undefined') {
      data = '<unavailable>';
    }
  }

  if (data && typeof data !== 'string' && {}.toString.call(data) !== '[object String]') {
    // Make sure the request body is a string
    data = stringify(data);
  }

  // http interface
  var http = {
    method: method,
    query_string: query,
    headers: headers,
    cookies: cookies,
    data: data,
    url: absoluteUrl
  };

  // expose http interface
  kwargs.request = http;

  // user: typically found on req.user in express/passport patterns
  // five cases for parseUser value:
  //   absent: grab only id, username, email from req.user
  //   false: capture nothing
  //   true: capture all keys from req.user
  //   array: provided whitelisted keys to grab from req.user
  //   function :: req -> user: custom parsing function
  if (parseUser == null) parseUser = ['id', 'username', 'email'];
  if (parseUser) {
    var user = {};
    if (typeof parseUser === 'function') {
      user = parseUser(req);
    } else if (req.user) {
      if (parseUser === true) {
        for (var key in req.user) {
          if ({}.hasOwnProperty.call(req.user, key)) {
            user[key] = req.user[key];
          }
        }
      } else {
        parseUser.forEach(function(fieldName) {
          if ({}.hasOwnProperty.call(req.user, fieldName)) {
            user[fieldName] = req.user[fieldName];
          }
        });
      }
    }

    // client ip:
    //   node: req.connection.remoteAddress
    //   express, koa: req.ip
    var ip = req.ip || (req.connection && req.connection.remoteAddress);
    if (ip) {
      user.ip_address = ip;
    }

    kwargs.user = user;
  }

  return kwargs;
};
