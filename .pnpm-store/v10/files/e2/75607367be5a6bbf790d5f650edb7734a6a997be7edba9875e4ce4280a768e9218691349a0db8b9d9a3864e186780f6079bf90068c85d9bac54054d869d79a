"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equals = equals;
exports.symbol = exports.isEqual = exports.equivalence = void 0;
var Hash = _interopRequireWildcard(require("./Hash.js"));
var _Predicate = require("./Predicate.js");
var _Utils = require("./Utils.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const symbol = exports.symbol = /*#__PURE__*/Symbol.for("effect/Equal");
function equals() {
  if (arguments.length === 1) {
    return self => compareBoth(self, arguments[0]);
  }
  return compareBoth(arguments[0], arguments[1]);
}
function compareBoth(self, that) {
  if (self === that) {
    return true;
  }
  const selfType = typeof self;
  if (selfType !== typeof that) {
    return false;
  }
  if (selfType === "object" || selfType === "function") {
    if (self !== null && that !== null) {
      if (isEqual(self) && isEqual(that)) {
        if (Hash.hash(self) === Hash.hash(that) && self[symbol](that)) {
          return true;
        } else {
          return _Utils.structuralRegionState.enabled && _Utils.structuralRegionState.tester ? _Utils.structuralRegionState.tester(self, that) : false;
        }
      } else if (self instanceof Date && that instanceof Date) {
        const t1 = self.getTime();
        const t2 = that.getTime();
        return t1 === t2 || Number.isNaN(t1) && Number.isNaN(t2);
      } else if (self instanceof URL && that instanceof URL) {
        return self.href === that.href;
      }
    }
    if (_Utils.structuralRegionState.enabled) {
      if (self === null || that === null) {
        return false;
      }
      if (Array.isArray(self) && Array.isArray(that)) {
        return self.length === that.length && self.every((v, i) => compareBoth(v, that[i]));
      }
      if (Object.getPrototypeOf(self) === Object.prototype && Object.getPrototypeOf(that) === Object.prototype) {
        const keysSelf = Object.keys(self);
        const keysThat = Object.keys(that);
        if (keysSelf.length === keysThat.length) {
          for (const key of keysSelf) {
            // @ts-expect-error
            if (!(key in that && compareBoth(self[key], that[key]))) {
              return _Utils.structuralRegionState.tester ? _Utils.structuralRegionState.tester(self, that) : false;
            }
          }
          return true;
        }
      }
      return _Utils.structuralRegionState.tester ? _Utils.structuralRegionState.tester(self, that) : false;
    }
  }
  return _Utils.structuralRegionState.enabled && _Utils.structuralRegionState.tester ? _Utils.structuralRegionState.tester(self, that) : false;
}
/**
 * @since 2.0.0
 * @category guards
 */
const isEqual = u => (0, _Predicate.hasProperty)(u, symbol);
/**
 * @since 2.0.0
 * @category instances
 */
exports.isEqual = isEqual;
const equivalence = () => equals;
exports.equivalence = equivalence;
//# sourceMappingURL=Equal.js.map