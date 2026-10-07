"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some = exports.none = exports.isSome = exports.isOption = exports.isNone = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Inspectable = require("../Inspectable.js");
var _Predicate = require("../Predicate.js");
var _effectable = require("./effectable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

const TypeId = /*#__PURE__*/Symbol.for("effect/Option");
const CommonProto = {
  ..._effectable.EffectPrototype,
  [TypeId]: {
    _A: _ => _
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  }
};
const SomeProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(CommonProto), {
  _tag: "Some",
  _op: "Some",
  [Equal.symbol](that) {
    return isOption(that) && isSome(that) && Equal.equals(this.value, that.value);
  },
  [Hash.symbol]() {
    return Hash.cached(this, Hash.combine(Hash.hash(this._tag))(Hash.hash(this.value)));
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag,
      value: (0, _Inspectable.toJSON)(this.value)
    };
  }
});
const NoneHash = /*#__PURE__*/Hash.hash("None");
const NoneProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(CommonProto), {
  _tag: "None",
  _op: "None",
  [Equal.symbol](that) {
    return isOption(that) && isNone(that);
  },
  [Hash.symbol]() {
    return NoneHash;
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag
    };
  }
});
/** @internal */
const isOption = input => (0, _Predicate.hasProperty)(input, TypeId);
/** @internal */
exports.isOption = isOption;
const isNone = fa => fa._tag === "None";
/** @internal */
exports.isNone = isNone;
const isSome = fa => fa._tag === "Some";
/** @internal */
exports.isSome = isSome;
const none = exports.none = /*#__PURE__*/Object.create(NoneProto);
/** @internal */
const some = value => {
  const a = Object.create(SomeProto);
  a.value = value;
  return a;
};
exports.some = some;
//# sourceMappingURL=option.js.map