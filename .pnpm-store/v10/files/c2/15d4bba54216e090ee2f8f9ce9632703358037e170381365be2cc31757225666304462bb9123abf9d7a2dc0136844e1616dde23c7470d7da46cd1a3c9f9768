import * as Equal from "../Equal.js";
import * as Hash from "../Hash.js";
import { StructuralPrototype } from "./effectable.js";
/** @internal */
export const ArrayProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(Array.prototype), {
  [Hash.symbol]() {
    return Hash.cached(this, Hash.array(this));
  },
  [Equal.symbol](that) {
    if (Array.isArray(that) && this.length === that.length) {
      return this.every((v, i) => Equal.equals(v, that[i]));
    } else {
      return false;
    }
  }
});
/** @internal */
export const Structural = /*#__PURE__*/function () {
  function Structural(args) {
    if (args) {
      Object.assign(this, args);
    }
  }
  Structural.prototype = StructuralPrototype;
  return Structural;
}();
/** @internal */
export const struct = as => Object.assign(Object.create(StructuralPrototype), as);
//# sourceMappingURL=data.js.map