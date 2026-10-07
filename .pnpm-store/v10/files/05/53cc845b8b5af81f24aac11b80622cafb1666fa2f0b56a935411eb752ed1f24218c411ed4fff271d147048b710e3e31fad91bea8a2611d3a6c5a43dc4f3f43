import * as Chunk from "../../Chunk.js";
import * as Dual from "../../Function.js";
import * as HashSet from "../../HashSet.js";
import { Structural } from "../data.js";
/** @internal */
export const HashSetPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferHashSetPatch");
function variance(a) {
  return a;
}
/** @internal */
const PatchProto = {
  ...Structural.prototype,
  [HashSetPatchTypeId]: {
    _Value: variance,
    _Key: variance,
    _Patch: variance
  }
};
const EmptyProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Empty"
});
const _empty = /*#__PURE__*/Object.create(EmptyProto);
/** @internal */
export const empty = () => _empty;
const AndThenProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "AndThen"
});
/** @internal */
export const makeAndThen = (first, second) => {
  const o = Object.create(AndThenProto);
  o.first = first;
  o.second = second;
  return o;
};
const AddProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Add"
});
/** @internal */
export const makeAdd = value => {
  const o = Object.create(AddProto);
  o.value = value;
  return o;
};
const RemoveProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Remove"
});
/** @internal */
export const makeRemove = value => {
  const o = Object.create(RemoveProto);
  o.value = value;
  return o;
};
/** @internal */
export const diff = (oldValue, newValue) => {
  const [removed, patch] = HashSet.reduce([oldValue, empty()], ([set, patch], value) => {
    if (HashSet.has(value)(set)) {
      return [HashSet.remove(value)(set), patch];
    }
    return [set, combine(makeAdd(value))(patch)];
  })(newValue);
  return HashSet.reduce(patch, (patch, value) => combine(makeRemove(value))(patch))(removed);
};
/** @internal */
export const combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
export const patch = /*#__PURE__*/Dual.dual(2, (self, oldValue) => {
  if (self._tag === "Empty") {
    return oldValue;
  }
  let set = oldValue;
  let patches = Chunk.of(self);
  while (Chunk.isNonEmpty(patches)) {
    const head = Chunk.headNonEmpty(patches);
    const tail = Chunk.tailNonEmpty(patches);
    switch (head._tag) {
      case "Empty":
        {
          patches = tail;
          break;
        }
      case "AndThen":
        {
          patches = Chunk.prepend(head.first)(Chunk.prepend(head.second)(tail));
          break;
        }
      case "Add":
        {
          set = HashSet.add(head.value)(set);
          patches = tail;
          break;
        }
      case "Remove":
        {
          set = HashSet.remove(head.value)(set);
          patches = tail;
        }
    }
  }
  return set;
});
//# sourceMappingURL=hashSetPatch.js.map