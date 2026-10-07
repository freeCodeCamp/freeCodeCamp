import * as Equal from "../Equal.js";
import { dual, pipe } from "../Function.js";
import { globalValue } from "../GlobalValue.js";
import * as Hash from "../Hash.js";
import * as HashSet from "../HashSet.js";
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js";
import * as MutableRef from "../MutableRef.js";
import * as Option from "../Option.js";
import { hasProperty } from "../Predicate.js";
/** @internal */
const FiberIdSymbolKey = "effect/FiberId";
/** @internal */
export const FiberIdTypeId = /*#__PURE__*/Symbol.for(FiberIdSymbolKey);
/** @internal */
const OP_NONE = "None";
/** @internal */
const OP_RUNTIME = "Runtime";
/** @internal */
const OP_COMPOSITE = "Composite";
const emptyHash = /*#__PURE__*/Hash.string(`${FiberIdSymbolKey}-${OP_NONE}`);
/** @internal */
class None {
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_NONE;
  id = -1;
  startTimeMillis = -1;
  [Hash.symbol]() {
    return emptyHash;
  }
  [Equal.symbol](that) {
    return isFiberId(that) && that._tag === OP_NONE;
  }
  toString() {
    return format(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
}
/** @internal */
class Runtime {
  id;
  startTimeMillis;
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_RUNTIME;
  constructor(id, startTimeMillis) {
    this.id = id;
    this.startTimeMillis = startTimeMillis;
  }
  [Hash.symbol]() {
    return Hash.cached(this, Hash.string(`${FiberIdSymbolKey}-${this._tag}-${this.id}-${this.startTimeMillis}`));
  }
  [Equal.symbol](that) {
    return isFiberId(that) && that._tag === OP_RUNTIME && this.id === that.id && this.startTimeMillis === that.startTimeMillis;
  }
  toString() {
    return format(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      id: this.id,
      startTimeMillis: this.startTimeMillis
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
}
/** @internal */
class Composite {
  left;
  right;
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_COMPOSITE;
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  _hash;
  [Hash.symbol]() {
    return pipe(Hash.string(`${FiberIdSymbolKey}-${this._tag}`), Hash.combine(Hash.hash(this.left)), Hash.combine(Hash.hash(this.right)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isFiberId(that) && that._tag === OP_COMPOSITE && Equal.equals(this.left, that.left) && Equal.equals(this.right, that.right);
  }
  toString() {
    return format(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      left: toJSON(this.left),
      right: toJSON(this.right)
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
}
/** @internal */
export const none = /*#__PURE__*/new None();
/** @internal */
export const runtime = (id, startTimeMillis) => {
  return new Runtime(id, startTimeMillis);
};
/** @internal */
export const composite = (left, right) => {
  return new Composite(left, right);
};
/** @internal */
export const isFiberId = self => hasProperty(self, FiberIdTypeId);
/** @internal */
export const isNone = self => {
  return self._tag === OP_NONE || pipe(toSet(self), HashSet.every(id => isNone(id)));
};
/** @internal */
export const isRuntime = self => {
  return self._tag === OP_RUNTIME;
};
/** @internal */
export const isComposite = self => {
  return self._tag === OP_COMPOSITE;
};
/** @internal */
export const combine = /*#__PURE__*/dual(2, (self, that) => {
  if (self._tag === OP_NONE) {
    return that;
  }
  if (that._tag === OP_NONE) {
    return self;
  }
  return new Composite(self, that);
});
/** @internal */
export const combineAll = fiberIds => {
  return pipe(fiberIds, HashSet.reduce(none, (a, b) => combine(b)(a)));
};
/** @internal */
export const getOrElse = /*#__PURE__*/dual(2, (self, that) => isNone(self) ? that : self);
/** @internal */
export const ids = self => {
  switch (self._tag) {
    case OP_NONE:
      {
        return HashSet.empty();
      }
    case OP_RUNTIME:
      {
        return HashSet.make(self.id);
      }
    case OP_COMPOSITE:
      {
        return pipe(ids(self.left), HashSet.union(ids(self.right)));
      }
  }
};
const _fiberCounter = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Fiber/Id/_fiberCounter"), () => MutableRef.make(0));
/** @internal */
export const make = (id, startTimeSeconds) => {
  return new Runtime(id, startTimeSeconds);
};
/** @internal */
export const threadName = self => {
  const identifiers = Array.from(ids(self)).map(n => `#${n}`).join(",");
  return identifiers;
};
/** @internal */
export const toOption = self => {
  const fiberIds = toSet(self);
  if (HashSet.size(fiberIds) === 0) {
    return Option.none();
  }
  let first = true;
  let acc;
  for (const fiberId of fiberIds) {
    if (first) {
      acc = fiberId;
      first = false;
    } else {
      // @ts-expect-error
      acc = pipe(acc, combine(fiberId));
    }
  }
  // @ts-expect-error
  return Option.some(acc);
};
/** @internal */
export const toSet = self => {
  switch (self._tag) {
    case OP_NONE:
      {
        return HashSet.empty();
      }
    case OP_RUNTIME:
      {
        return HashSet.make(self);
      }
    case OP_COMPOSITE:
      {
        return pipe(toSet(self.left), HashSet.union(toSet(self.right)));
      }
  }
};
/** @internal */
export const unsafeMake = () => {
  const id = MutableRef.get(_fiberCounter);
  pipe(_fiberCounter, MutableRef.set(id + 1));
  return new Runtime(id, Date.now());
};
//# sourceMappingURL=fiberId.js.map