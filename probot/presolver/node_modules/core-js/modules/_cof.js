var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};
