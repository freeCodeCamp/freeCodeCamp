"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = exports.makeUpdateRight = exports.makeUpdateLeft = exports.makeSetRight = exports.makeSetLeft = exports.makeAndThen = exports.empty = exports.diff = exports.combine = exports.OrPatchTypeId = void 0;
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var E = _interopRequireWildcard(require("../../Either.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var Dual = _interopRequireWildcard(require("../../Function.js"));
var _data = require("../data.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const OrPatchTypeId = exports.OrPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferOrPatch");
function variance(a) {
  return a;
}
/** @internal */
const PatchProto = {
  ..._data.Structural.prototype,
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
const empty = () => _empty;
exports.empty = empty;
const AndThenProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "AndThen"
});
/** @internal */
const makeAndThen = (first, second) => {
  const o = Object.create(AndThenProto);
  o.first = first;
  o.second = second;
  return o;
};
exports.makeAndThen = makeAndThen;
const SetLeftProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "SetLeft"
});
/** @internal */
const makeSetLeft = value => {
  const o = Object.create(SetLeftProto);
  o.value = value;
  return o;
};
exports.makeSetLeft = makeSetLeft;
const SetRightProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "SetRight"
});
/** @internal */
const makeSetRight = value => {
  const o = Object.create(SetRightProto);
  o.value = value;
  return o;
};
exports.makeSetRight = makeSetRight;
const UpdateLeftProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "UpdateLeft"
});
/** @internal */
const makeUpdateLeft = patch => {
  const o = Object.create(UpdateLeftProto);
  o.patch = patch;
  return o;
};
exports.makeUpdateLeft = makeUpdateLeft;
const UpdateRightProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "UpdateRight"
});
/** @internal */
const makeUpdateRight = patch => {
  const o = Object.create(UpdateRightProto);
  o.patch = patch;
  return o;
};
/** @internal */
exports.makeUpdateRight = makeUpdateRight;
const diff = options => {
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
exports.diff = diff;
const combine = exports.combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
const patch = exports.patch = /*#__PURE__*/Dual.dual(2, (self, {
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