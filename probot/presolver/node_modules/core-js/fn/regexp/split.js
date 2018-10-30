require('../../modules/es6.regexp.split');
var SPLIT = require('../../modules/_wks')('split');
module.exports = function (it, str, limit) {
  return RegExp.prototype[SPLIT].call(it, str, limit);
};
