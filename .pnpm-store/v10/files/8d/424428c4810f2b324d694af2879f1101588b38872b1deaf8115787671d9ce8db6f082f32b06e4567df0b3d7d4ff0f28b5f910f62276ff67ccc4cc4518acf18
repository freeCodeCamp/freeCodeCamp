/* eslint-disable no-new-func, camelcase */
/* globals __non_webpack__require__ */

const realImport = new Function('modulePath', 'return import(modulePath)')

function realRequire(modulePath) {
  if (typeof __non_webpack__require__ === 'function') {
    return __non_webpack__require__(modulePath)
  }

  return require(modulePath)
}

module.exports = { realImport, realRequire }
