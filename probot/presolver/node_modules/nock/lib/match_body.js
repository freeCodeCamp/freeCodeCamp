'use strict';

var deepEqual = require('deep-equal');
var qs = require('qs');
var _ = require('lodash')
var common = require('./common');

module.exports =
function matchBody(spec, body) {
  if (typeof spec === 'undefined') {
    return true;
  }
  var options = this || {};

  if (Buffer.isBuffer(body)) {
    body = body.toString();
  }

  if (Buffer.isBuffer(spec)) {
    if (common.isBinaryBuffer(spec)) {
      spec = spec.toString('hex');
    } else {
      spec = spec.toString('utf8');
    }
  }

  var contentType = (
    options.headers &&
    (options.headers['Content-Type'] || options.headers['content-type']) ||
    ''
  ).toString();

  var isMultipart = contentType.indexOf('multipart') >= 0;
  var isUrlencoded = contentType.indexOf('application/x-www-form-urlencoded') >= 0;

  // try to transform body to json
  var json;
  if (typeof spec === 'object' || typeof spec === 'function') {
    try { json = JSON.parse(body);} catch(err) {}
    if (json !== undefined) {
      body = json;
    } else if (isUrlencoded) {
      body = qs.parse(body, { allowDots: true });
    }
  }

  if (typeof spec === "function") {
    return spec.call(this, body);
  }

  //strip line endings from both so that we get a match no matter what OS we are running on
  //if Content-Type does not contains 'multipart'
  if (!isMultipart && typeof body === "string") {
    body = body.replace(/\r?\n|\r/g, '');
  }

  if (spec instanceof RegExp) {
    if (typeof body === "string") {
      return body.match(spec);
    } else {
      return qs.stringify(body).match(spec);
    }
  }

  if (!isMultipart && typeof spec === "string") {
    spec = spec.replace(/\r?\n|\r/g, '');
  }

  if (isUrlencoded) {
    spec = mapValuesDeep(spec, function(val) {
      if (_.isRegExp(val)) {
        return val
      }
      return val + ''
    })
  }

  return deepEqualExtended(spec, body);
};


/**
 * Based on lodash issue discussion
 * https://github.com/lodash/lodash/issues/1244
 */
function mapValuesDeep(obj, cb) {
  if (_.isArray(obj)) {
    return obj.map(function(v) {
      return mapValuesDeep(v, cb)
    })
  }
  if (_.isPlainObject(obj)) {
    return _.mapValues(obj, function(v) {
      return mapValuesDeep(v, cb)
    })
  }
  return cb(obj)
}

function deepEqualExtended(spec, body) {
  if (spec && spec.constructor === RegExp) {
    return spec.test(body);
  }
  if (spec && (spec.constructor === Object || spec.constructor === Array) && body) {
    var keys = Object.keys(spec);
    var bodyKeys = Object.keys(body);
    if (keys.length !== bodyKeys.length) {
      return false;
    }
    for (var i = 0; i < keys.length; i++) {
      if (!deepEqualExtended(spec[keys[i]], body[keys[i]])) {
        return false;
      }
    }
    return true;
  }
  return deepEqual(spec, body, { strict: true });
}
