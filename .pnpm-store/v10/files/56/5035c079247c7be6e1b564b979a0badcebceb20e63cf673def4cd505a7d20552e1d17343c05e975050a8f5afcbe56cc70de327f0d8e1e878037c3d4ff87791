"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertClassBrand;
function _assertClassBrand(brand, receiver, returnValue) {
  if (typeof brand === "function" ? brand === receiver : brand.has(receiver)) {
    return arguments.length < 3 ? receiver : returnValue;
  }
  throw new TypeError("Private element is not present on this object");
}

//# sourceMappingURL=assertClassBrand.js.map
