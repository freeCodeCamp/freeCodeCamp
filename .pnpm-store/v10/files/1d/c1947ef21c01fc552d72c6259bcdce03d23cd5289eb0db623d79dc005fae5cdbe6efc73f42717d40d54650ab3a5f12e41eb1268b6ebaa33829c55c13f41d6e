'use strict';
var http = require('http');
var https = require('https');
var url = require('url');
var getRawBody = require('raw-body');
var isUnset = require('./isUnset');

function extend(obj, source, skips) {

  if (!source) {
    return obj;
  }

  for (var prop in source) {
    if (!skips || skips.indexOf(prop) === -1) {
      obj[prop] = source[prop];
    }
  }

  return obj;
}

function parseHost(Container) {
  var host = Container.params.host;
  var req =  Container.user.req;
  var options = Container.options;
  host = (typeof host === 'function') ? host(req) : host.toString();

  if (!host) {
    return new Error('Empty host parameter');
  }

  if (!/http(s)?:\/\//.test(host)) {
    host = 'http://' + host;
  }

  var parsed = url.parse(host);

  if (!parsed.hostname) {
    return new Error('Unable to parse hostname, possibly missing protocol://?');
  }

  var ishttps = options.https || parsed.protocol === 'https:';

  return {
    host: parsed.hostname,
    port: parsed.port || (ishttps ? 443 : 80),
    module: ishttps ? https : http,
  };
}

function reqHeaders(req, options) {


  var headers = options.headers || {};

  var skipHdrs = [ 'connection', 'content-length' ];
  if (!options.preserveHostHdr) {
    skipHdrs.push('host');
  }
  var hds = extend(headers, req.headers, skipHdrs);
  hds.connection = 'close';

  return hds;
}

function createRequestOptions(req, res, options) {

  // prepare proxyRequest

  var reqOpt = {
    headers: reqHeaders(req, options),
    method: req.method,
    path: req.path,
    params: req.params,
  };

  if (options.preserveReqSession) {
    reqOpt.session = req.session;
  }

  return Promise.resolve(reqOpt);
}

// extract to bodyContent object

function bodyContent(req, res, options) {
  var parseReqBody = isUnset(options.parseReqBody) ? true : options.parseReqBody;

  function maybeParseBody(req, limit) {
    if (req.body) {
      return Promise.resolve(req.body);
    } else {
      // Returns a promise if no callback specified and global Promise exists.

      return getRawBody(req, {
        length: req.headers['content-length'],
        limit: limit,
      });
    }
  }

  if (parseReqBody) {
    return maybeParseBody(req, options.limit);
  }
}


module.exports = {
  create: createRequestOptions,
  bodyContent: bodyContent,
  parseHost: parseHost
};
