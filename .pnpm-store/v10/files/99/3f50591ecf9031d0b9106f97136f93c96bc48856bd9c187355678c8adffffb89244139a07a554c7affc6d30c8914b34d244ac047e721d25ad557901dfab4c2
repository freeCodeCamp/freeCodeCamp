"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.right = exports.left = exports.isRight = exports.isLeft = exports.isEither = exports.getRight = exports.getLeft = exports.fromOption = exports.TypeId = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Inspectable = require("../Inspectable.js");
var _Predicate = require("../Predicate.js");
var _effectable = require("./effectable.js");
var option = _interopRequireWildcard(require("./option.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @internal
 */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/Either");
const CommonProto = {
  ..._effectable.EffectPrototype,
  [TypeId]: {
    _R: _ => _
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  }
};
const RightProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(CommonProto), {
  _tag: "Right",
  _op: "Right",
  [Equal.symbol](that) {
    return isEither(that) && isRight(that) && Equal.equals(this.right, that.right);
  },
  [Hash.symbol]() {
    return Hash.combine(Hash.hash(this._tag))(Hash.hash(this.right));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      right: (0, _Inspectable.toJSON)(this.right)
    };
  }
});
const LeftProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(CommonProto), {
  _tag: "Left",
  _op: "Left",
  [Equal.symbol](that) {
    return isEither(that) && isLeft(that) && Equal.equals(this.left, that.left);
  },
  [Hash.symbol]() {
    return Hash.combine(Hash.hash(this._tag))(Hash.hash(this.left));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      left: (0, _Inspectable.toJSON)(this.left)
    };
  }
});
/** @internal */
const isEither = input => (0, _Predicate.hasProperty)(input, TypeId);
/** @internal */
exports.isEither = isEither;
const isLeft = ma => ma._tag === "Left";
/** @internal */
exports.isLeft = isLeft;
const isRight = ma => ma._tag === "Right";
/** @internal */
exports.isRight = isRight;
const left = left => {
  const a = Object.create(LeftProto);
  a.left = left;
  return a;
};
/** @internal */
exports.left = left;
const right = right => {
  const a = Object.create(RightProto);
  a.right = right;
  return a;
};
/** @internal */
exports.right = right;
const getLeft = self => isRight(self) ? option.none : option.some(self.left);
/** @internal */
exports.getLeft = getLeft;
const getRight = self => isLeft(self) ? option.none : option.some(self.right);
/** @internal */
exports.getRight = getRight;
const fromOption = exports.fromOption = /*#__PURE__*/(0, _Function.dual)(2, (self, onNone) => option.isNone(self) ? left(onNone()) : right(self.value));
//# sourceMappingURL=either.js.map