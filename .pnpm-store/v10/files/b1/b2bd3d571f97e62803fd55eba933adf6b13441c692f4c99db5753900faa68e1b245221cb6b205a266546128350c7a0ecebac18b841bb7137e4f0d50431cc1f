"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = exports.empty = exports.diff = exports.combine = exports.ReadonlyArrayPatchTypeId = void 0;
var Arr = _interopRequireWildcard(require("../../Array.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var Dual = _interopRequireWildcard(require("../../Function.js"));
var Data = _interopRequireWildcard(require("../data.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ReadonlyArrayPatchTypeId = exports.ReadonlyArrayPatchTypeId = /*#__PURE__*/Symbol.for("effect/DifferReadonlyArrayPatch");
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
exports.diff = diff;
const combine = exports.combine = /*#__PURE__*/Dual.dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
const patch = exports.patch = /*#__PURE__*/Dual.dual(3, (self, oldValue, differ) => {
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