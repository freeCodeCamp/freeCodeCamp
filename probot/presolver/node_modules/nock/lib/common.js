'use strict';

var _ = require('lodash');
var debug = require('debug')('nock.common');
var semver = require('semver')

/**
 * Normalizes the request options so that it always has `host` property.
 *
 * @param  {Object} options - a parsed options object of the request
 */
var normalizeRequestOptions = function(options) {
  options.proto = options.proto || (options._https_ ? 'https': 'http');
  options.port = options.port || ((options.proto === 'http') ? 80 : 443);
  if (options.host) {
    debug('options.host:', options.host);
    if (! options.hostname) {
      if (options.host.split(':').length == 2) {
        options.hostname = options.host.split(':')[0];
      } else {
        options.hostname = options.host;
      }
    }
  }
  debug('options.hostname in the end: %j', options.hostname);
  options.host = (options.hostname || 'localhost') + ':' + options.port;
  debug('options.host in the end: %j', options.host);

  /// lowercase host names
  ['hostname', 'host'].forEach(function(attr) {
    if (options[attr]) {
      options[attr] = options[attr].toLowerCase();
    }
  });

  return options;
};

/**
 * Returns true if the data contained in buffer is binary which in this case means
 * that it cannot be reconstructed from its utf8 representation.
 *
 * @param  {Object} buffer - a Buffer object
 */
var isBinaryBuffer = function(buffer) {

  if(!Buffer.isBuffer(buffer)) {
    return false;
  }

  //  Test if the buffer can be reconstructed verbatim from its utf8 encoding.
  var utfEncodedBuffer = buffer.toString('utf8');
  var reconstructedBuffer = Buffer.from(utfEncodedBuffer, 'utf8');
  var compareBuffers = function(lhs, rhs) {
    if(lhs.length !== rhs.length) {
      return false;
    }

    for(var i = 0; i < lhs.length; ++i) {
      if(lhs[i] !== rhs[i]) {
        return false;
      }
    }

    return true;
  };

  //  If the buffers are *not* equal then this is a "binary buffer"
  //  meaning that it cannot be faitfully represented in utf8.
  return !compareBuffers(buffer, reconstructedBuffer);

};

/**
 * If the chunks are Buffer objects then it returns a single Buffer object with the data from all the chunks.
 * If the chunks are strings then it returns a single string value with data from all the chunks.
 *
 * @param  {Array} chunks - an array of Buffer objects or strings
 */
var mergeChunks = function(chunks) {

  if(_.isEmpty(chunks)) {
    return Buffer.alloc(0);
  }

  //  We assume that all chunks are Buffer objects if the first is buffer object.
  var areBuffers = Buffer.isBuffer(_.first(chunks));

  if(!areBuffers) {
    //  When the chunks are not buffers we assume that they are strings.
    return chunks.join('');
  }

  //  Merge all the buffers into a single Buffer object.
  return Buffer.concat(chunks);

};

//  Array where all information about all the overridden requests are held.
var requestOverride = [];

/**
 * Overrides the current `request` function of `http` and `https` modules with
 * our own version which intercepts issues HTTP/HTTPS requests and forwards them
 * to the given `newRequest` function.
 *
 * @param  {Function} newRequest - a function handling requests; it accepts four arguments:
 *   - proto - a string with the overridden module's protocol name (either `http` or `https`)
 *   - overriddenRequest - the overridden module's request function already bound to module's object
 *   - options - the options of the issued request
 *   - callback - the callback of the issued request
 */
var overrideRequests = function(newRequest) {
  debug('overriding requests');

  ['http', 'https'].forEach(function(proto) {
    debug('- overriding request for', proto);

    var moduleName = proto, // 1 to 1 match of protocol and module is fortunate :)
        module = {
          http: require('http'),
          https: require('https')
        }[moduleName],
        overriddenRequest = module.request,
        overriddenGet = module.get;

    if(requestOverride[moduleName]) {
      throw new Error('Module\'s request already overridden for ' + moduleName + ' protocol.');
    }

    //  Store the properties of the overridden request so that it can be restored later on.
    requestOverride[moduleName] = {
      module: module,
      request: overriddenRequest,
      get: overriddenGet
    };

    module.request = function(options, callback) {
      // debug('request options:', options);
      return newRequest(proto, overriddenRequest.bind(module), options, callback);
    };

    if (semver.satisfies(process.version, '>=8')) {
      module.get = function(options, callback) {
        var req = newRequest(proto, overriddenRequest.bind(module), options, callback);
        req.end();
        return req;
      }
    }

    debug('- overridden request for', proto);
  });
};

/**
 * Restores `request` function of `http` and `https` modules to values they
 * held before they were overridden by us.
 */
var restoreOverriddenRequests = function() {
  debug('restoring requests');

  //  Restore any overridden requests.
  _(requestOverride).keys().each(function(proto) {
    debug('- restoring request for', proto);

    var override = requestOverride[proto];
    if(override) {
      override.module.request = override.request;
      override.module.get = override.get;
      debug('- restored request for', proto);
    }
  });
  requestOverride = [];
};

/**
 * Get high level information about request as string
 * @param  {Object} options
 * @param  {string} options.method
 * @param  {string} options.port
 * @param  {string} options.proto
 * @param  {string} options.hostname
 * @param  {string} options.path
 * @param  {Object} options.headers
 * @param  {string|object} body
 * @return {string}
 */
function stringifyRequest(options, body) {
  var method = options.method || 'GET';

  var port = options.port;
  if (! port) port = (options.proto == 'https' ? '443' : '80');

  if (options.proto == 'https' && port == '443' ||
      options.proto == 'http' && port == '80') {
    port = '';
  }

  if (port) port = ':' + port;

  var path = options.path ? options.path : '';

  var log = {
    method: method,
    url: options.proto + '://' + options.hostname + port + path,
    headers: options.headers
  };

  if (body) {
    log.body = body;
  }

  return JSON.stringify(log, null, 2);
}

function isContentEncoded(headers) {
  var contentEncoding = _.get(headers, 'content-encoding');
  return _.isString(contentEncoding) && contentEncoding !== '';
}

function contentEncoding(headers, encoder) {
  var contentEncoding = _.get(headers, 'content-encoding');
  return contentEncoding === encoder;
}

function isJSONContent(headers) {
  var contentType = _.get(headers, 'content-type');
  if (Array.isArray(contentType)) {
    contentType = contentType[0];
  }
  contentType = (contentType || '').toLocaleLowerCase();

  return contentType === 'application/json';
}

var headersFieldNamesToLowerCase = function(headers) {
  if(!_.isObject(headers)) {
    return headers;
  }

  //  For each key in the headers, delete its value and reinsert it with lower-case key.
  //  Keys represent headers field names.
  var lowerCaseHeaders = {};
  _.forOwn(headers, function(fieldVal, fieldName) {
    var lowerCaseFieldName = fieldName.toLowerCase();
    if(!_.isUndefined(lowerCaseHeaders[lowerCaseFieldName])) {
      throw new Error('Failed to convert header keys to lower case due to field name conflict: ' + lowerCaseFieldName);
    }
    lowerCaseHeaders[lowerCaseFieldName] = fieldVal;
  });

  return lowerCaseHeaders;
};

var headersFieldsArrayToLowerCase = function (headers) {
  return _.uniq(_.map(headers, function (fieldName) {
    return fieldName.toLowerCase();
  }));
};

var headersArrayToObject = function (rawHeaders) {
  if(!_.isArray(rawHeaders)) {
    return rawHeaders;
  }

  var headers = {};

  for (var i=0, len=rawHeaders.length; i<len; i=i+2) {
    var key = rawHeaders[i].toLowerCase();
    var value = rawHeaders[i+1];

    if (headers[key]) {
      headers[key] = _.isArray(headers[key]) ? headers[key] : [headers[key]];
      headers[key].push(value);
    } else {
      headers[key] = value;
    }
  }

  return headers;
};

/**
 * Deletes the given `fieldName` property from `headers` object by performing
 * case-insensitive search through keys.
 *
 * @headers   {Object} headers - object of header field names and values
 * @fieldName {String} field name - string with the case-insensitive field name
 */
var deleteHeadersField = function(headers, fieldNameToDelete) {

  if(!_.isObject(headers) || !_.isString(fieldNameToDelete)) {
    return;
  }

  var lowerCaseFieldNameToDelete = fieldNameToDelete.toLowerCase();

  //  Search through the headers and delete all values whose field name matches the given field name.
  _(headers).keys().each(function(fieldName) {
    var lowerCaseFieldName = fieldName.toLowerCase();
    if(lowerCaseFieldName === lowerCaseFieldNameToDelete) {
      delete headers[fieldName];
      //  We don't stop here but continue in order to remove *all* matching field names
      //  (even though if seen regorously there shouldn't be any)
    }
  });

};

function percentDecode (str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (e) {
    return str;
  }
}

function percentEncode(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function matchStringOrRegexp(target, pattern) {
  var str = (!_.isUndefined(target) && target.toString && target.toString()) || '';

  return pattern instanceof RegExp  ? str.match(pattern) : str === String(pattern);
}

/**
 * Formats a query parameter.
 *
 * @param key                The key of the query parameter to format.
 * @param value              The value of the query parameter to format.
 * @param stringFormattingFn The function used to format string values. Can
 *                           be used to encode or decode the query value.
 *
 * @returns the formatted [key, value] pair.
 */
function formatQueryValue(key, value, stringFormattingFn) {
  switch (true) {
    case _.isNumber(value): // fall-through
    case _.isBoolean(value):
      value = value.toString();
      break;
    case _.isUndefined(value): // fall-through
    case _.isNull(value):
      value = '';
      break;
    case _.isString(value):
      if(stringFormattingFn) {
        value = stringFormattingFn(value);
      }
      break;
    case (value instanceof RegExp):
      break;
    case _.isArray(value):
      var tmpArray = new Array(value.length);
      for (var i = 0; i < value.length; ++i) {
        tmpArray[i] = formatQueryValue(i, value[i], stringFormattingFn)[1];
      }
      value = tmpArray;
      break;
    case _.isObject(value):
      var tmpObj = {};
      _.forOwn(value, function(subVal, subKey){
        var subPair = formatQueryValue(subKey, subVal, stringFormattingFn);
        tmpObj[subPair[0]] = subPair[1];
      });
      value = tmpObj;
      break;
  }

  if (stringFormattingFn) key = stringFormattingFn(key);
  return [key, value];
}

function isStream(obj) {
  return obj &&
      (typeof a !== 'string') &&
      (! Buffer.isBuffer(obj)) &&
      _.isFunction(obj.setEncoding);
}

exports.normalizeRequestOptions = normalizeRequestOptions;
exports.isBinaryBuffer = isBinaryBuffer;
exports.mergeChunks = mergeChunks;
exports.overrideRequests = overrideRequests;
exports.restoreOverriddenRequests = restoreOverriddenRequests;
exports.stringifyRequest = stringifyRequest;
exports.isContentEncoded = isContentEncoded;
exports.contentEncoding = contentEncoding;
exports.isJSONContent = isJSONContent;
exports.headersFieldNamesToLowerCase = headersFieldNamesToLowerCase;
exports.headersFieldsArrayToLowerCase = headersFieldsArrayToLowerCase;
exports.headersArrayToObject = headersArrayToObject;
exports.deleteHeadersField = deleteHeadersField;
exports.percentEncode = percentEncode;
exports.percentDecode = percentDecode;
exports.matchStringOrRegexp = matchStringOrRegexp;
exports.formatQueryValue = formatQueryValue;
exports.isStream = isStream;
