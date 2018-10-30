// for a legacy code and future fixes
module.exports = function () {
  return Function.call.apply(Array.prototype.unshift, arguments);
};
