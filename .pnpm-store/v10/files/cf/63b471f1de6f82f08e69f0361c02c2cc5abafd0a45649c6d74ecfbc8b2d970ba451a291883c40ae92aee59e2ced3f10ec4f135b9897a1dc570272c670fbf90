// Extracted from: https://github.com/TooTallNate/util-deprecate
let deprecate;
try {
  const util = require('util');
  deprecate = util.deprecate;
} catch (err) {
  deprecate = function deprecate(fn, msg) {
    var warned = false;
    function deprecated() {
      if (!warned) {
        console.warn(msg);
        warned = true;
      }
      return fn.apply(this, arguments);
    }

    return deprecated;
  };
}
module.exports = deprecate;
