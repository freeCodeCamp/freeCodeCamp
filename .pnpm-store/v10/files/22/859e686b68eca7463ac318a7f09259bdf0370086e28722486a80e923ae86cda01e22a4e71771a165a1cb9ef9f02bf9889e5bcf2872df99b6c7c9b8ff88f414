import { IProduce, IProduceWithPatches, Immer, Draft, Immutable } from "./internal";
export { Draft, Immutable, Patch, PatchListener, original, current, isDraft, isDraftable, NOTHING as nothing, DRAFTABLE as immerable, freeze } from "./internal";
/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */
export declare const produce: IProduce;
export default produce;
/**
 * Like `produce`, but `produceWithPatches` always returns a tuple
 * [nextState, patches, inversePatches] (instead of just the next state)
 */
export declare const produceWithPatches: IProduceWithPatches;
/**
 * Pass true to automatically freeze all copies created by Immer.
 *
 * Always freeze by default, even in production mode
 */
export declare const setAutoFreeze: (value: boolean) => void;
/**
 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
 * always faster than using ES5 proxies.
 *
 * By default, feature detection is used, so calling this is rarely necessary.
 */
export declare const setUseProxies: (value: boolean) => void;
/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */
export declare const applyPatches: <T extends import("./internal").Objectish>(base: T, patches: import("./internal").Patch[]) => T;
/**
 * Create an Immer draft from the given base state, which may be a draft itself.
 * The draft can be modified until you finalize it with the `finishDraft` function.
 */
export declare const createDraft: <T extends import("./internal").Objectish>(base: T) => Draft<T>;
/**
 * Finalize an Immer draft from a `createDraft` call, returning the base state
 * (if no changes were made) or a modified copy. The draft must *not* be
 * mutated afterwards.
 *
 * Pass a function as the 2nd argument to generate Immer patches based on the
 * changes that were made.
 */
export declare const finishDraft: <D extends any>(draft: D, patchListener?: import("./internal").PatchListener | undefined) => D extends Draft<infer T> ? T : never;
/**
 * This function is actually a no-op, but can be used to cast an immutable type
 * to an draft type and make TypeScript happy
 *
 * @param value
 */
export declare function castDraft<T>(value: T): Draft<T>;
/**
 * This function is actually a no-op, but can be used to cast a mutable type
 * to an immutable type and make TypeScript happy
 * @param value
 */
export declare function castImmutable<T>(value: T): Immutable<T>;
export { Immer };
export { enableES5 } from "./plugins/es5";
export { enablePatches } from "./plugins/patches";
export { enableMapSet } from "./plugins/mapset";
export { enableAllPlugins } from "./plugins/all";
//# sourceMappingURL=immer.d.ts.map