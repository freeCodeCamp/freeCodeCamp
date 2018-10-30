require('../../modules/es6.date.to-primitive');
var toPrimitive = require('../../modules/_date-to-primitive');
module.exports = function (it, hint) {
  return toPrimitive.call(it, hint);
};
