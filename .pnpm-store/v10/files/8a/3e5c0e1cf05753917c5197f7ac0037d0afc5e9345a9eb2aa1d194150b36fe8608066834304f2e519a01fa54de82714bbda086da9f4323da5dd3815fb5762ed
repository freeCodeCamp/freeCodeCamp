"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setFunctionName;
function setFunctionName(fn, name, prefix) {
  if (typeof name === "symbol") {
    name = name.description;
    name = name ? "[" + name + "]" : "";
  }
  try {
    Object.defineProperty(fn, "name", {
      configurable: true,
      value: prefix ? prefix + " " + name : name
    });
  } catch (_) {}
  return fn;
}

//# sourceMappingURL=setFunctionName.js.map
