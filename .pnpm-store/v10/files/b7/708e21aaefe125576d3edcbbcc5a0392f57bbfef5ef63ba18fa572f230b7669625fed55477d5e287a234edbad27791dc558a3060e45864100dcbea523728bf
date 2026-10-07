/**
 * @since 2.0.0
 */
import * as Equal from "../Equal.js";
import { dual } from "../Function.js";
import * as Hash from "../Hash.js";
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js";
import { hasProperty } from "../Predicate.js";
import { EffectPrototype } from "./effectable.js";
import * as option from "./option.js";
/**
 * @internal
 */
export const TypeId = /*#__PURE__*/Symbol.for("effect/Either");
const CommonProto = {
  ...EffectPrototype,
  [TypeId]: {
    _R: _ => _
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format(this.toJSON());
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
      right: toJSON(this.right)
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
      left: toJSON(this.left)
    };
  }
});
/** @internal */
export const isEither = input => hasProperty(input, TypeId);
/** @internal */
export const isLeft = ma => ma._tag === "Left";
/** @internal */
export const isRight = ma => ma._tag === "Right";
/** @internal */
export const left = left => {
  const a = Object.create(LeftProto);
  a.left = left;
  return a;
};
/** @internal */
export const right = right => {
  const a = Object.create(RightProto);
  a.right = right;
  return a;
};
/** @internal */
export const getLeft = self => isRight(self) ? option.none : option.some(self.left);
/** @internal */
export const getRight = self => isLeft(self) ? option.none : option.some(self.right);
/** @internal */
export const fromOption = /*#__PURE__*/dual(2, (self, onNone) => option.isNone(self) ? left(onNone()) : right(self.value));
//# sourceMappingURL=either.js.map