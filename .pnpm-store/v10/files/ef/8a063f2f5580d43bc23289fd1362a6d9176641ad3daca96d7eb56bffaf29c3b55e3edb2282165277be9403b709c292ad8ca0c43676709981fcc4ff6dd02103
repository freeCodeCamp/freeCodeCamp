"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPrimitive;
function toPrimitive(input, hint) {
  if (typeof input !== "object" || !input) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

//# sourceMappingURL=toPrimitive.js.map
