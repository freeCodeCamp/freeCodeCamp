"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeMake = exports.globalScope = exports.FiberScopeTypeId = void 0;
var FiberId = _interopRequireWildcard(require("../FiberId.js"));
var _GlobalValue = require("../GlobalValue.js");
var FiberMessage = _interopRequireWildcard(require("./fiberMessage.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const FiberScopeSymbolKey = "effect/FiberScope";
/** @internal */
const FiberScopeTypeId = exports.FiberScopeTypeId = /*#__PURE__*/Symbol.for(FiberScopeSymbolKey);
/** @internal */
class Global {
  [FiberScopeTypeId] = FiberScopeTypeId;
  fiberId = FiberId.none;
  roots = /*#__PURE__*/new Set();
  add(_runtimeFlags, child) {
    this.roots.add(child);
    child.addObserver(() => {
      this.roots.delete(child);
    });
  }
}
/** @internal */
class Local {
  fiberId;
  parent;
  [FiberScopeTypeId] = FiberScopeTypeId;
  constructor(fiberId, parent) {
    this.fiberId = fiberId;
    this.parent = parent;
  }
  add(_runtimeFlags, child) {
    this.parent.tell(FiberMessage.stateful(parentFiber => {
      parentFiber.addChild(child);
      child.addObserver(() => {
        parentFiber.removeChild(child);
      });
    }));
  }
}
/** @internal */
const unsafeMake = fiber => {
  return new Local(fiber.id(), fiber);
};
/** @internal */
exports.unsafeMake = unsafeMake;
const globalScope = exports.globalScope = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberScope/Global"), () => new Global());
//# sourceMappingURL=fiberScope.js.map