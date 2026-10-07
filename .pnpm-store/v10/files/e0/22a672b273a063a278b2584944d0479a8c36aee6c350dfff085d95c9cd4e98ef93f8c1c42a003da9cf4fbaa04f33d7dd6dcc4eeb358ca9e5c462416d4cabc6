import * as Chunk from "../../Chunk.js";
import * as Equal from "../../Equal.js";
import * as Dual from "../../Function.js";
import * as HashMap from "../../HashMap.js";
import { Structural } from "../data.js";
/** @internal */
export const HashMapPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferHashMapPatch");
function variance(a) {
  return a;
}
/** @internal */
const PatchProto = {
  ...Structural.prototype,
  [HashMapPatchTypeId]: {
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
const makeAndThen = (first, second) => {
  const o = Object.create(AndThenProto);
  o.first = first;
  o.second = second;
  return o;
};
const AddProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Add"
});
const makeAdd = (key, value) => {
  const o = Object.create(AddProto);
  o.key = key;
  o.value = value;
  return o;
};
const RemoveProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Remove"
});
const makeRemove = key => {
  const o = Object.create(RemoveProto);
  o.key = key;
  return o;
};
const UpdateProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Update"
});
const makeUpdate = (key, patch) => {
  const o = Object.create(UpdateProto);
  o.key = key;
  o.patch = patch;
  return o;
};
/** @internal */
export const diff = options => {
  const [removed, patch] = HashMap.reduce([options.oldValue, empty()], ([map, patch], newValue, key) => {
    const option = HashMap.get(key)(map);
    switch (option._tag) {
      case "Some":
        {
          const valuePatch = options.differ.diff(option.value, newValue);
          if (Equal.equals(valuePatch, options.differ.empty)) {
            return [HashMap.remove(key)(map), patch];
          }
          return [HashMap.remove(key)(map), combine(makeUpdate(key, valuePatch))(patch)];
        }
      case "None":
        {
          return [map, combine(makeAdd(key, newValue))(patch)];
        }
    }
  })(options.newValue);
  return HashMap.reduce(patch, (patch, _, key) => combine(makeRemove(key))(patch))(removed);
};
/** @internal */
export const combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
export const patch = /*#__PURE__*/Dual.dual(3, (self, oldValue, differ) => {
  if (self._tag === "Empty") {
    return oldValue;
  }
  let map = oldValue;
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
          map = HashMap.set(head.key, head.value)(map);
          patches = tail;
          break;
        }
      case "Remove":
        {
          map = HashMap.remove(head.key)(map);
          patches = tail;
          break;
        }
      case "Update":
        {
          const option = HashMap.get(head.key)(map);
          if (option._tag === "Some") {
            map = HashMap.set(head.key, differ.patch(head.patch, option.value))(map);
          }
          patches = tail;
          break;
        }
    }
  }
  return map;
});
//# sourceMappingURL=hashMapPatch.js.map