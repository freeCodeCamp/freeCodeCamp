"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = exports.updateWith = exports.update = exports.transform = exports.readonlyArray = exports.orElseEither = exports.make = exports.hashSet = exports.hashMap = exports.environment = exports.chunk = exports.DifferTypeId = exports.DifferProto = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = _interopRequireWildcard(require("../Function.js"));
var Dual = _Function;
var _Pipeable = require("../Pipeable.js");
var ChunkPatch = _interopRequireWildcard(require("./differ/chunkPatch.js"));
var ContextPatch = _interopRequireWildcard(require("./differ/contextPatch.js"));
var HashMapPatch = _interopRequireWildcard(require("./differ/hashMapPatch.js"));
var HashSetPatch = _interopRequireWildcard(require("./differ/hashSetPatch.js"));
var OrPatch = _interopRequireWildcard(require("./differ/orPatch.js"));
var ReadonlyArrayPatch = _interopRequireWildcard(require("./differ/readonlyArrayPatch.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const DifferTypeId = exports.DifferTypeId = /*#__PURE__*/Symbol.for("effect/Differ");
/** @internal */
const DifferProto = exports.DifferProto = {
  [DifferTypeId]: {
    _P: _Function.identity,
    _V: _Function.identity
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const make = params => {
  const differ = Object.create(DifferProto);
  differ.empty = params.empty;
  differ.diff = params.diff;
  differ.combine = params.combine;
  differ.patch = params.patch;
  return differ;
};
/** @internal */
exports.make = make;
const environment = () => make({
  empty: ContextPatch.empty(),
  combine: (first, second) => ContextPatch.combine(second)(first),
  diff: (oldValue, newValue) => ContextPatch.diff(oldValue, newValue),
  patch: (patch, oldValue) => ContextPatch.patch(oldValue)(patch)
});
/** @internal */
exports.environment = environment;
const chunk = differ => make({
  empty: ChunkPatch.empty(),
  combine: (first, second) => ChunkPatch.combine(second)(first),
  diff: (oldValue, newValue) => ChunkPatch.diff({
    oldValue,
    newValue,
    differ
  }),
  patch: (patch, oldValue) => ChunkPatch.patch(oldValue, differ)(patch)
});
/** @internal */
exports.chunk = chunk;
const hashMap = differ => make({
  empty: HashMapPatch.empty(),
  combine: (first, second) => HashMapPatch.combine(second)(first),
  diff: (oldValue, newValue) => HashMapPatch.diff({
    oldValue,
    newValue,
    differ
  }),
  patch: (patch, oldValue) => HashMapPatch.patch(oldValue, differ)(patch)
});
/** @internal */
exports.hashMap = hashMap;
const hashSet = () => make({
  empty: HashSetPatch.empty(),
  combine: (first, second) => HashSetPatch.combine(second)(first),
  diff: (oldValue, newValue) => HashSetPatch.diff(oldValue, newValue),
  patch: (patch, oldValue) => HashSetPatch.patch(oldValue)(patch)
});
/** @internal */
exports.hashSet = hashSet;
const orElseEither = exports.orElseEither = /*#__PURE__*/Dual.dual(2, (self, that) => make({
  empty: OrPatch.empty(),
  combine: (first, second) => OrPatch.combine(first, second),
  diff: (oldValue, newValue) => OrPatch.diff({
    oldValue,
    newValue,
    left: self,
    right: that
  }),
  patch: (patch, oldValue) => OrPatch.patch(patch, {
    oldValue,
    left: self,
    right: that
  })
}));
/** @internal */
const readonlyArray = differ => make({
  empty: ReadonlyArrayPatch.empty(),
  combine: (first, second) => ReadonlyArrayPatch.combine(first, second),
  diff: (oldValue, newValue) => ReadonlyArrayPatch.diff({
    oldValue,
    newValue,
    differ
  }),
  patch: (patch, oldValue) => ReadonlyArrayPatch.patch(patch, oldValue, differ)
});
/** @internal */
exports.readonlyArray = readonlyArray;
const transform = exports.transform = /*#__PURE__*/Dual.dual(2, (self, {
  toNew,
  toOld
}) => make({
  empty: self.empty,
  combine: (first, second) => self.combine(first, second),
  diff: (oldValue, newValue) => self.diff(toOld(oldValue), toOld(newValue)),
  patch: (patch, oldValue) => toNew(self.patch(patch, toOld(oldValue)))
}));
/** @internal */
const update = () => updateWith((_, a) => a);
/** @internal */
exports.update = update;
const updateWith = f => make({
  empty: _Function.identity,
  combine: (first, second) => {
    if (first === _Function.identity) {
      return second;
    }
    if (second === _Function.identity) {
      return first;
    }
    return a => second(first(a));
  },
  diff: (oldValue, newValue) => {
    if (Equal.equals(oldValue, newValue)) {
      return _Function.identity;
    }
    return (0, _Function.constant)(newValue);
  },
  patch: (patch, oldValue) => f(oldValue, patch(oldValue))
});
/** @internal */
exports.updateWith = updateWith;
const zip = exports.zip = /*#__PURE__*/Dual.dual(2, (self, that) => make({
  empty: [self.empty, that.empty],
  combine: (first, second) => [self.combine(first[0], second[0]), that.combine(first[1], second[1])],
  diff: (oldValue, newValue) => [self.diff(oldValue[0], newValue[0]), that.diff(oldValue[1], newValue[1])],
  patch: (patch, oldValue) => [self.patch(patch[0], oldValue[0]), that.patch(patch[1], oldValue[1])]
}));
//# sourceMappingURL=differ.js.map