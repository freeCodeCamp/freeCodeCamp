"use strict"

var hasOwn = typeof Object.hasOwn === "undefined" ? Function.call.bind(Object.prototype.hasOwnProperty) : Object.hasOwn

function mergeModules (target, module) {
  for (var key in module) {
    if (hasOwn(module, key)) {
      target[key] = module[key]
    }
  }
}

module.exports = mergeModules
