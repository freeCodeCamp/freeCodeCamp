var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');

module.exports = function define(target, mixin) {
  var keys = ownKeys(toIObject(mixin));
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) dP.f(target, key = keys[i++], gOPD.f(mixin, key));
  return target;
};
