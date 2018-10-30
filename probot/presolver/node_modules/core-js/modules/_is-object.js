module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
