import * as Arr from "../../Array.js";
import * as Equal from "../../Equal.js";
import * as Dual from "../../Function.js";
import * as Data from "../data.js";
/** @internal */
export const ReadonlyArrayPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferReadonlyArrayPatch");
function variance(a) {
  return a;
}
const PatchProto = {
  ...Data.Structural.prototype,
  [ReadonlyArrayPatchTypeId]: {
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
    const oldElement = options.oldValue[i];
    const newElement = options.newValue[i];
    const valuePatch = options.differ.diff(oldElement, newElement);
    if (!Equal.equals(valuePatch, options.differ.empty)) {
      patch = combine(patch, makeUpdate(i, valuePatch));
    }
    i = i + 1;
  }
  if (i < options.oldValue.length) {
    patch = combine(patch, makeSlice(0, i));
  }
  if (i < options.newValue.length) {
    patch = combine(patch, makeAppend(Arr.drop(i)(options.newValue)));
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
  let readonlyArray = oldValue.slice();
  let patches = Arr.of(self);
  while (Arr.isNonEmptyArray(patches)) {
    const head = Arr.headNonEmpty(patches);
    const tail = Arr.tailNonEmpty(patches);
    switch (head._tag) {
      case "Empty":
        {
          patches = tail;
          break;
        }
      case "AndThen":
        {
          tail.unshift(head.first, head.second);
          patches = tail;
          break;
        }
      case "Append":
        {
          for (const value of head.values) {
            readonlyArray.push(value);
          }
          patches = tail;
          break;
        }
      case "Slice":
        {
          readonlyArray = readonlyArray.slice(head.from, head.until);
          patches = tail;
          break;
        }
      case "Update":
        {
          readonlyArray[head.index] = differ.patch(head.patch, readonlyArray[head.index]);
          patches = tail;
          break;
        }
    }
  }
  return readonlyArray;
});
//# sourceMappingURL=readonlyArrayPatch.js.map