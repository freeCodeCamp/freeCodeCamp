"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = exports.makeRemove = exports.makeAndThen = exports.makeAdd = exports.empty = exports.diff = exports.combine = exports.HashSetPatchTypeId = void 0;
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Dual = _interopRequireWildcard(require("../../Function.js"));
var HashSet = _interopRequireWildcard(require("../../HashSet.js"));
var _data = require("../data.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const HashSetPatchTypeId = exports.HashSetPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferHashSetPatch");
function variance(a) {
  return a;
}
/** @internal */
const PatchProto = {
  ..._data.Structural.prototype,
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
const AddProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Add"
});
/** @internal */
const makeAdd = value => {
  const o = Object.create(AddProto);
  o.value = value;
  return o;
};
exports.makeAdd = makeAdd;
const RemoveProto = /*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(PatchProto), {
  _tag: "Remove"
});
/** @internal */
const makeRemove = value => {
  const o = Object.create(RemoveProto);
  o.value = value;
  return o;
};
/** @internal */
exports.makeRemove = makeRemove;
const diff = (oldValue, newValue) => {
  const [removed, patch] = HashSet.reduce([oldValue, empty()], ([set, patch], value) => {
    if (HashSet.has(value)(set)) {
      return [HashSet.remove(value)(set), patch];
    }
    return [set, combine(makeAdd(value))(patch)];
  })(newValue);
  return HashSet.reduce(patch, (patch, value) => combine(makeRemove(value))(patch))(removed);
};
/** @internal */
exports.diff = diff;
const combine = exports.combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
const patch = exports.patch = /*#__PURE__*/Dual.dual(2, (self, oldValue) => {
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