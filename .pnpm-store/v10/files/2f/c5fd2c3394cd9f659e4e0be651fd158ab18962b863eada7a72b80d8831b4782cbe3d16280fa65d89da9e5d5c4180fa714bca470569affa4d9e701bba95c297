"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.struct = exports.Structural = exports.ArrayProto = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _effectable = require("./effectable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ArrayProto = exports.ArrayProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(Array.prototype), {
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
const Structural = exports.Structural = /*#__PURE__*/function () {
  function Structural(args) {
    if (args) {
      Object.assign(this, args);
    }
  }
  Structural.prototype = _effectable.StructuralPrototype;
  return Structural;
}();
/** @internal */
const struct = as => Object.assign(Object.create(_effectable.StructuralPrototype), as);
exports.struct = struct;
//# sourceMappingURL=data.js.map