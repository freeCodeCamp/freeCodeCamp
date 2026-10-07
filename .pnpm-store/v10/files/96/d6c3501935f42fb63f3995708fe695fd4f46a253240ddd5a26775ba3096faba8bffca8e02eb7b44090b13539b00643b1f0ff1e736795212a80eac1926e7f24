/**
 * @since 2.0.0
 */
import * as Equal from "../Equal.js";
import * as Hash from "../Hash.js";
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js";
import { hasProperty } from "../Predicate.js";
import { EffectPrototype } from "./effectable.js";
const TypeId = /*#__PURE__*/Symbol.for("effect/Option");
const CommonProto = {
  ...EffectPrototype,
  [TypeId]: {
    _A: _ => _
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format(this.toJSON());
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
      value: toJSON(this.value)
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
export const isOption = input => hasProperty(input, TypeId);
/** @internal */
export const isNone = fa => fa._tag === "None";
/** @internal */
export const isSome = fa => fa._tag === "Some";
/** @internal */
export const none = /*#__PURE__*/Object.create(NoneProto);
/** @internal */
export const some = value => {
  const a = Object.create(SomeProto);
  a.value = value;
  return a;
};
//# sourceMappingURL=option.js.map