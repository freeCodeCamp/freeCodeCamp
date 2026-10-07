import * as Equal from "../Equal.js";
import * as Dual from "../Function.js";
import { constant, identity } from "../Function.js";
import { pipeArguments } from "../Pipeable.js";
import * as ChunkPatch from "./differ/chunkPatch.js";
import * as ContextPatch from "./differ/contextPatch.js";
import * as HashMapPatch from "./differ/hashMapPatch.js";
import * as HashSetPatch from "./differ/hashSetPatch.js";
import * as OrPatch from "./differ/orPatch.js";
import * as ReadonlyArrayPatch from "./differ/readonlyArrayPatch.js";
/** @internal */
export const DifferTypeId = /*#__PURE__*/Symbol.for("effect/Differ");
/** @internal */
export const DifferProto = {
  [DifferTypeId]: {
    _P: identity,
    _V: identity
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const make = params => {
  const differ = Object.create(DifferProto);
  differ.empty = params.empty;
  differ.diff = params.diff;
  differ.combine = params.combine;
  differ.patch = params.patch;
  return differ;
};
/** @internal */
export const environment = () => make({
  empty: ContextPatch.empty(),
  combine: (first, second) => ContextPatch.combine(second)(first),
  diff: (oldValue, newValue) => ContextPatch.diff(oldValue, newValue),
  patch: (patch, oldValue) => ContextPatch.patch(oldValue)(patch)
});
/** @internal */
export const chunk = differ => make({
  empty: ChunkPatch.empty(),
  combine: (first, second) => ChunkPatch.combine(second)(first),
  diff: (oldValue, newValue) => ChunkPatch.diff({
    oldValue,
    newValue,
    differ
  }),
  patch: (patch, oldValue) => ChunkPatch.patch(oldValue, differ)(patch)
});
/** @internal */
export const hashMap = differ => make({
  empty: HashMapPatch.empty(),
  combine: (first, second) => HashMapPatch.combine(second)(first),
  diff: (oldValue, newValue) => HashMapPatch.diff({
    oldValue,
    newValue,
    differ
  }),
  patch: (patch, oldValue) => HashMapPatch.patch(oldValue, differ)(patch)
});
/** @internal */
export const hashSet = () => make({
  empty: HashSetPatch.empty(),
  combine: (first, second) => HashSetPatch.combine(second)(first),
  diff: (oldValue, newValue) => HashSetPatch.diff(oldValue, newValue),
  patch: (patch, oldValue) => HashSetPatch.patch(oldValue)(patch)
});
/** @internal */
export const orElseEither = /*#__PURE__*/Dual.dual(2, (self, that) => make({
  empty: OrPatch.empty(),
  combine: (first, second) => OrPatch.combine(first, second),
  diff: (oldValue, newValue) => OrPatch.diff({
    oldValue,
    newValue,
    left: self,
    right: that
  }),
  patch: (patch, oldValue) => OrPatch.patch(patch, {
    oldValue,
    left: self,
    right: that
  })
}));
/** @internal */
export const readonlyArray = differ => make({
  empty: ReadonlyArrayPatch.empty(),
  combine: (first, second) => ReadonlyArrayPatch.combine(first, second),
  diff: (oldValue, newValue) => ReadonlyArrayPatch.diff({
    oldValue,
    newValue,
    differ
  }),
  patch: (patch, oldValue) => ReadonlyArrayPatch.patch(patch, oldValue, differ)
});
/** @internal */
export const transform = /*#__PURE__*/Dual.dual(2, (self, {
  toNew,
  toOld
}) => make({
  empty: self.empty,
  combine: (first, second) => self.combine(first, second),
  diff: (oldValue, newValue) => self.diff(toOld(oldValue), toOld(newValue)),
  patch: (patch, oldValue) => toNew(self.patch(patch, toOld(oldValue)))
}));
/** @internal */
export const update = () => updateWith((_, a) => a);
/** @internal */
export const updateWith = f => make({
  empty: identity,
  combine: (first, second) => {
    if (first === identity) {
      return second;
    }
    if (second === identity) {
      return first;
    }
    return a => second(first(a));
  },
  diff: (oldValue, newValue) => {
    if (Equal.equals(oldValue, newValue)) {
      return identity;
    }
    return constant(newValue);
  },
  patch: (patch, oldValue) => f(oldValue, patch(oldValue))
});
/** @internal */
export const zip = /*#__PURE__*/Dual.dual(2, (self, that) => make({
  empty: [self.empty, that.empty],
  combine: (first, second) => [self.combine(first[0], second[0]), that.combine(first[1], second[1])],
  diff: (oldValue, newValue) => [self.diff(oldValue[0], newValue[0]), that.diff(oldValue[1], newValue[1])],
  patch: (patch, oldValue) => [self.patch(patch[0], oldValue[0]), that.patch(patch[1], oldValue[1])]
}));
//# sourceMappingURL=differ.js.map