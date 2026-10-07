"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDynamicImport = canUseDynamicImport;

/* istanbul ignore file -- @preserve */
let result;

function canUseDynamicImport() {
  if (result === undefined) {
    try {
      new Function('id', 'return import(id);');
      result = true;
    } catch (e) {
      result = false;
    }
  }

  return result;
}
//# sourceMappingURL=canUseDynamicImport.js.map