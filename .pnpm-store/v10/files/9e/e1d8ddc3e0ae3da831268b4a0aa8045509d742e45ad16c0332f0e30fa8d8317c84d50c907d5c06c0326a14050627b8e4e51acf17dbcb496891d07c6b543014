/* eslint-disable no-var, comma-dangle */
var Reflect; // eslint-disable-line no-unused-vars
var idObj;

function checkIsNodeV6OrAbove() {
  if (typeof process === 'undefined') {
    return false;
  }

  return parseInt(process.versions.node.split('.')[0], 10) >= 6;
}

if (!checkIsNodeV6OrAbove()) {
  Reflect = require('harmony-reflect'); // eslint-disable-line global-require
}

idObj = new Proxy({}, {
  get: function getter(target, key) {
    if (key === '__esModule') {
      return false;
    }
    return key;
  }
});

module.exports = idObj;
