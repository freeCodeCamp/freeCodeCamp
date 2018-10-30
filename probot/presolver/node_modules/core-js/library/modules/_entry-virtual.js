var core = require('./_core');
module.exports = function (CONSTRUCTOR) {
  var C = core[CONSTRUCTOR];
  return (C.virtual || C.prototype);
};
