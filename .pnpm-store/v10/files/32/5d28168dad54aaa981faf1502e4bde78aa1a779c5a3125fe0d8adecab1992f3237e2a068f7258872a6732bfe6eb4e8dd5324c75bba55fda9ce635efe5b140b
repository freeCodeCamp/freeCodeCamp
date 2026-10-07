"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = exports.updateWith = exports.update = exports.transform = exports.readonlyArray = exports.patch = exports.orElseEither = exports.make = exports.hashSet = exports.hashMap = exports.environment = exports.empty = exports.diff = exports.combine = exports.chunk = exports.TypeId = void 0;
var Dual = _interopRequireWildcard(require("./Function.js"));
var internal = _interopRequireWildcard(require("./internal/differ.js"));
var ChunkPatch = _interopRequireWildcard(require("./internal/differ/chunkPatch.js"));
var ContextPatch = _interopRequireWildcard(require("./internal/differ/contextPatch.js"));
var HashMapPatch = _interopRequireWildcard(require("./internal/differ/hashMapPatch.js"));
var HashSetPatch = _interopRequireWildcard(require("./internal/differ/hashSetPatch.js"));
var OrPatch = _interopRequireWildcard(require("./internal/differ/orPatch.js"));
var ReadonlyArrayPatch = _interopRequireWildcard(require("./internal/differ/readonlyArrayPatch.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbol
 */
const TypeId = exports.TypeId = internal.DifferTypeId;
const ChunkPatchTypeId = ChunkPatch.ChunkPatchTypeId;
const ContextPatchTypeId = ContextPatch.ContextPatchTypeId;
const HashMapPatchTypeId = HashMapPatch.HashMapPatchTypeId;
const HashSetPatchTypeId = HashSetPatch.HashSetPatchTypeId;
const OrPatchTypeId = OrPatch.OrPatchTypeId;
const ReadonlyArrayPatchTypeId = ReadonlyArrayPatch.ReadonlyArrayPatchTypeId;
/**
 * An empty patch that describes no changes.
 *
 * @since 2.0.0
 * @category patch
 */
const empty = self => self.empty;
/**
 * @since 2.0.0
 * @category patch
 */
exports.empty = empty;
const diff = exports.diff = /*#__PURE__*/Dual.dual(3, (self, oldValue, newValue) => self.diff(oldValue, newValue));
/**
 * Combines two patches to produce a new patch that describes the updates of
 * the first patch and then the updates of the second patch. The combine
 * operation should be associative. In addition, if the combine operation is
 * commutative then joining multiple fibers concurrently will result in
 * deterministic `FiberRef` values.
 *
 * @since 2.0.0
 * @category patch
 */
const combine = exports.combine = /*#__PURE__*/Dual.dual(3, (self, first, second) => self.combine(first, second));
/**
 * Applies a patch to an old value to produce a new value that is equal to the
 * old value with the updates described by the patch.
 *
 * @since 2.0.0
 * @category patch
 */
const patch = exports.patch = /*#__PURE__*/Dual.dual(3, (self, patch, oldValue) => self.patch(patch, oldValue));
/**
 * Constructs a new `Differ`.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Constructs a differ that knows how to diff `Env` values.
 *
 * @since 2.0.0
 * @category constructors
 */
const environment = exports.environment = internal.environment;
/**
 * Constructs a differ that knows how to diff a `Chunk` of values given a
 * differ that knows how to diff the values.
 *
 * @since 2.0.0
 * @category constructors
 */
const chunk = exports.chunk = internal.chunk;
/**
 * Constructs a differ that knows how to diff a `HashMap` of keys and values given
 * a differ that knows how to diff the values.
 *
 * @since 2.0.0
 * @category constructors
 */
const hashMap = exports.hashMap = internal.hashMap;
/**
 * Constructs a differ that knows how to diff a `HashSet` of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const hashSet = exports.hashSet = internal.hashSet;
/**
 * Combines this differ and the specified differ to produce a differ that
 * knows how to diff the sum of their values.
 *
 * @since 2.0.0
 */
const orElseEither = exports.orElseEither = internal.orElseEither;
/**
 * Constructs a differ that knows how to diff a `ReadonlyArray` of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const readonlyArray = exports.readonlyArray = internal.readonlyArray;
/**
 * Transforms the type of values that this differ knows how to differ using
 * the specified functions that map the new and old value types to each other.
 *
 * @since 2.0.0
 */
const transform = exports.transform = internal.transform;
/**
 * Constructs a differ that just diffs two values by returning a function that
 * sets the value to the new value. This differ does not support combining
 * multiple updates to the value compositionally and should only be used when
 * there is no compositional way to update them.
 *
 * @since 2.0.0
 */
const update = exports.update = internal.update;
/**
 * A variant of `update` that allows specifying the function that will be used
 * to combine old values with new values.
 *
 * @since 2.0.0
 */
const updateWith = exports.updateWith = internal.updateWith;
/**
 * Combines this differ and the specified differ to produce a new differ that
 * knows how to diff the product of their values.
 *
 * @since 2.0.0
 */
const zip = exports.zip = internal.zip;
//# sourceMappingURL=Differ.js.map