import * as Chunk from "../../Chunk.js";
import * as Equal from "../../Equal.js";
import * as Dual from "../../Function.js";
import { pipe } from "../../Function.js";
import * as Data from "../data.js";
/** @internal */
export const ChunkPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferChunkPatch");
function variance(a) {
  return a;
}
const PatchProto = {
  ...Data.Structural.prototype,
  [ChunkPatchTypeId]: {
    _Value: variance,
    _Patch: variance
  }
};
const EmptyProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Empty"
});
const _empty = /*#__PURE__*/Object.create(EmptyProto);
/**
 * @internal
 */
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
const AppendProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Append"
});
const makeAppend = values => {
  const o = Object.create(AppendProto);
  o.values = values;
  return o;
};
const SliceProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Slice"
});
const makeSlice = (from, until) => {
  const o = Object.create(SliceProto);
  o.from = from;
  o.until = until;
  return o;
};
const UpdateProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Update"
});
const makeUpdate = (index, patch) => {
  const o = Object.create(UpdateProto);
  o.index = index;
  o.patch = patch;
  return o;
};
/** @internal */
export const diff = options => {
  let i = 0;
  let patch = empty();
  while (i < options.oldValue.length && i < options.newValue.length) {
    const oldElement = Chunk.unsafeGet(i)(options.oldValue);
    const newElement = Chunk.unsafeGet(i)(options.newValue);
    const valuePatch = options.differ.diff(oldElement, newElement);
    if (!Equal.equals(valuePatch, options.differ.empty)) {
      patch = pipe(patch, combine(makeUpdate(i, valuePatch)));
    }
    i = i + 1;
  }
  if (i < options.oldValue.length) {
    patch = pipe(patch, combine(makeSlice(0, i)));
  }
  if (i < options.newValue.length) {
    patch = pipe(patch, combine(makeAppend(Chunk.drop(i)(options.newValue))));
  }
  return patch;
};
/** @internal */
export const combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
export const patch = /*#__PURE__*/Dual.dual(3, (self, oldValue, differ) => {
  if (self._tag === "Empty") {
    return oldValue;
  }
  let chunk = oldValue;
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
      case "Append":
        {
          chunk = Chunk.appendAll(head.values)(chunk);
          patches = tail;
          break;
        }
      case "Slice":
        {
          const array = Chunk.toReadonlyArray(chunk);
          chunk = Chunk.unsafeFromArray(array.slice(head.from, head.until));
          patches = tail;
          break;
        }
      case "Update":
        {
          const array = Chunk.toReadonlyArray(chunk);
          array[head.index] = differ.patch(head.patch, array[head.index]);
          chunk = Chunk.unsafeFromArray(array);
          patches = tail;
          break;
        }
    }
  }
  return chunk;
});
//# sourceMappingURL=chunkPatch.js.map