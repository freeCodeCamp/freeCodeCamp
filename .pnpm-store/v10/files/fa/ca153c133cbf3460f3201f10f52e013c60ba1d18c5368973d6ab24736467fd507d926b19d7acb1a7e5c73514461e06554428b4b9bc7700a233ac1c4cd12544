var resolve = require('resolve');

module.exports = function(cwd, moduleName, register) {
  var result;
  try {
    var modulePath = resolve.sync(moduleName, { basedir: cwd });
    result = require(modulePath);
    if (typeof register === 'function') {
      register(result);
    }
  } catch (e) {
    result = e;
  }
  return result;
};
