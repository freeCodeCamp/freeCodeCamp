import * as Dual from "./Function.js";
import * as internal from "./internal/differ.js";
import * as ChunkPatch from "./internal/differ/chunkPatch.js";
import * as ContextPatch from "./internal/differ/contextPatch.js";
import * as HashMapPatch from "./internal/differ/hashMapPatch.js";
import * as HashSetPatch from "./internal/differ/hashSetPatch.js";
import * as OrPatch from "./internal/differ/orPatch.js";
import * as ReadonlyArrayPatch from "./internal/differ/readonlyArrayPatch.js";
/**
 * @since 2.0.0
 * @category symbol
 */
export const TypeId = internal.DifferTypeId;
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
export const empty = self => self.empty;
/**
 * @since 2.0.0
 * @category patch
 */
export const diff = /*#__PURE__*/Dual.dual(3, (self, oldValue, newValue) => self.diff(oldValue, newValue));
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
export const combine = /*#__PURE__*/Dual.dual(3, (self, first, second) => self.combine(first, second));
/**
 * Applies a patch to an old value to produce a new value that is equal to the
 * old value with the updates described by the patch.
 *
 * @since 2.0.0
 * @category patch
 */
export const patch = /*#__PURE__*/Dual.dual(3, (self, patch, oldValue) => self.patch(patch, oldValue));
/**
 * Constructs a new `Differ`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = internal.make;
/**
 * Constructs a differ that knows how to diff `Env` values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const environment = internal.environment;
/**
 * Constructs a differ that knows how to diff a `Chunk` of values given a
 * differ that knows how to diff the values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const chunk = internal.chunk;
/**
 * Constructs a differ that knows how to diff a `HashMap` of keys and values given
 * a differ that knows how to diff the values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const hashMap = internal.hashMap;
/**
 * Constructs a differ that knows how to diff a `HashSet` of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const hashSet = internal.hashSet;
/**
 * Combines this differ and the specified differ to produce a differ that
 * knows how to diff the sum of their values.
 *
 * @since 2.0.0
 */
export const orElseEither = internal.orElseEither;
/**
 * Constructs a differ that knows how to diff a `ReadonlyArray` of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const readonlyArray = internal.readonlyArray;
/**
 * Transforms the type of values that this differ knows how to differ using
 * the specified functions that map the new and old value types to each other.
 *
 * @since 2.0.0
 */
export const transform = internal.transform;
/**
 * Constructs a differ that just diffs two values by returning a function that
 * sets the value to the new value. This differ does not support combining
 * multiple updates to the value compositionally and should only be used when
 * there is no compositional way to update them.
 *
 * @since 2.0.0
 */
export const update = internal.update;
/**
 * A variant of `update` that allows specifying the function that will be used
 * to combine old values with new values.
 *
 * @since 2.0.0
 */
export const updateWith = internal.updateWith;
/**
 * Combines this differ and the specified differ to produce a new differ that
 * knows how to diff the product of their values.
 *
 * @since 2.0.0
 */
export const zip = internal.zip;
//# sourceMappingURL=Differ.js.map