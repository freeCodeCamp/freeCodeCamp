require('../../modules/es6.regexp.replace');
var REPLACE = require('../../modules/_wks')('replace');
module.exports = function (it, str, replacer) {
  return RegExp.prototype[REPLACE].call(it, str, replacer);
};
