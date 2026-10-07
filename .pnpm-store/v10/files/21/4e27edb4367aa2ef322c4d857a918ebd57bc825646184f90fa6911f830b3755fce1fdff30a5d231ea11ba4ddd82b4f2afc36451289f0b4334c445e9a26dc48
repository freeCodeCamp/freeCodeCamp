/**
 * Module dependencies.
 */

var crypto = require('crypto');

/**
 * Sign the given `val` with `secret`.
 *
 * @param {String} val
 * @param {String} secret
 * @return {String}
 * @api private
 */

exports.sign = function(val, secret){
  if ('string' != typeof val) throw new TypeError("Cookie value must be provided as a string.");
  if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
  return val + '.' + crypto
    .createHmac('sha256', secret)
    .update(val)
    .digest('base64')
    .replace(/\=+$/, '');
};

/**
 * Unsign and decode the given `val` with `secret`,
 * returning `false` if the signature is invalid.
 *
 * @param {String} val
 * @param {String} secret
 * @return {String|Boolean}
 * @api private
 */

exports.unsign = function(val, secret){
  if ('string' != typeof val) throw new TypeError("Signed cookie string must be provided.");
  if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
  var str = val.slice(0, val.lastIndexOf('.'))
    , mac = exports.sign(str, secret);
  
  return sha1(mac) == sha1(val) ? str : false;
};

/**
 * Private
 */

function sha1(str){
  return crypto.createHash('sha1').update(str).digest('hex');
}
