import * as Chunk from "../../Chunk.js";
import * as E from "../../Either.js";
import * as Equal from "../../Equal.js";
import * as Dual from "../../Function.js";
import { Structural } from "../data.js";
/** @internal */
export const OrPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferOrPatch");
function variance(a) {
  return a;
}
/** @internal */
const PatchProto = {
  ...Structural.prototype,
  [OrPatchTypeId]: {
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
const SetLeftProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "SetLeft"
});
/** @internal */
export const makeSetLeft = value => {
  const o = Object.create(SetLeftProto);
  o.value = value;
  return o;
};
const SetRightProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "SetRight"
});
/** @internal */
export const makeSetRight = value => {
  const o = Object.create(SetRightProto);
  o.value = value;
  return o;
};
const UpdateLeftProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "UpdateLeft"
});
/** @internal */
export const makeUpdateLeft = patch => {
  const o = Object.create(UpdateLeftProto);
  o.patch = patch;
  return o;
};
const UpdateRightProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "UpdateRight"
});
/** @internal */
export const makeUpdateRight = patch => {
  const o = Object.create(UpdateRightProto);
  o.patch = patch;
  return o;
};
/** @internal */
export const diff = options => {
  switch (options.oldValue._tag) {
    case "Left":
      {
        switch (options.newValue._tag) {
          case "Left":
            {
              const valuePatch = options.left.diff(options.oldValue.left, options.newValue.left);
              if (Equal.equals(valuePatch, options.left.empty)) {
                return empty();
              }
              return makeUpdateLeft(valuePatch);
            }
          case "Right":
            {
              return makeSetRight(options.newValue.right);
            }
        }
      }
    case "Right":
      {
        switch (options.newValue._tag) {
          case "Left":
            {
              return makeSetLeft(options.newValue.left);
            }
          case "Right":
            {
              const valuePatch = options.right.diff(options.oldValue.right, options.newValue.right);
              if (Equal.equals(valuePatch, options.right.empty)) {
                return empty();
              }
              return makeUpdateRight(valuePatch);
            }
        }
      }
  }
};
/** @internal */
export const combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
export const patch = /*#__PURE__*/Dual.dual(2, (self, {
  left,
  oldValue,
  right
}) => {
  if (self._tag === "Empty") {
    return oldValue;
  }
  let patches = Chunk.of(self);
  let result = oldValue;
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
      case "UpdateLeft":
        {
          if (result._tag === "Left") {
            result = E.left(left.patch(head.patch, result.left));
          }
          patches = tail;
          break;
        }
      case "UpdateRight":
        {
          if (result._tag === "Right") {
            result = E.right(right.patch(head.patch, result.right));
          }
          patches = tail;
          break;
        }
      case "SetLeft":
        {
          result = E.left(head.value);
          patches = tail;
          break;
        }
      case "SetRight":
        {
          result = E.right(head.value);
          patches = tail;
          break;
        }
    }
  }
  return result;
});
//# sourceMappingURL=orPatch.js.map