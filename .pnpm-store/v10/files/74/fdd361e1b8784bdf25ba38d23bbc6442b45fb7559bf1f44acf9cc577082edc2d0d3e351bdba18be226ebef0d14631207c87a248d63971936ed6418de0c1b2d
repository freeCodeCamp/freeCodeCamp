"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = exports.empty = exports.diff = exports.combine = exports.HashMapPatchTypeId = void 0;
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var Dual = _interopRequireWildcard(require("../../Function.js"));
var HashMap = _interopRequireWildcard(require("../../HashMap.js"));
var _data = require("../data.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const HashMapPatchTypeId = exports.HashMapPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferHashMapPatch");
function variance(a) {
  return a;
}
/** @internal */
const PatchProto = {
  ..._data.Structural.prototype,
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
const diff = options => {
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
exports.diff = diff;
const combine = exports.combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
const patch = exports.patch = /*#__PURE__*/Dual.dual(3, (self, oldValue, differ) => {
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