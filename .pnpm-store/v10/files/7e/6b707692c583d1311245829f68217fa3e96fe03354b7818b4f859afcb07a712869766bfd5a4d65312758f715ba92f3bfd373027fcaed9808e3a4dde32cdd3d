"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = exports.empty = exports.diff = exports.combine = exports.ChunkPatchTypeId = void 0;
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = _interopRequireWildcard(require("../../Function.js"));
var Dual = _Function;
var Data = _interopRequireWildcard(require("../data.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ChunkPatchTypeId = exports.ChunkPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferChunkPatch");
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
const empty = () => _empty;
exports.empty = empty;
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
const diff = options => {
  let i = 0;
  let patch = empty();
  while (i < options.oldValue.length && i < options.newValue.length) {
    const oldElement = Chunk.unsafeGet(i)(options.oldValue);
    const newElement = Chunk.unsafeGet(i)(options.newValue);
    const valuePatch = options.differ.diff(oldElement, newElement);
    if (!Equal.equals(valuePatch, options.differ.empty)) {
      patch = (0, _Function.pipe)(patch, combine(makeUpdate(i, valuePatch)));
    }
    i = i + 1;
  }
  if (i < options.oldValue.length) {
    patch = (0, _Function.pipe)(patch, combine(makeSlice(0, i)));
  }
  if (i < options.newValue.length) {
    patch = (0, _Function.pipe)(patch, combine(makeAppend(Chunk.drop(i)(options.newValue))));
  }
  return patch;
};
/** @internal */
exports.diff = diff;
const combine = exports.combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
const patch = exports.patch = /*#__PURE__*/Dual.dual(3, (self, oldValue, differ) => {
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