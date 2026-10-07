type Tail<T extends any[]> = ((...t: T) => any) extends (
	_: any,
	...tail: infer TT
) => any
	? TT
	: []

type PrimitiveType = number | string | boolean

/** Object types that should never be mapped */
type AtomicObject =
	| Function
	| WeakMap<any, any>
	| WeakSet<any>
	| Promise<any>
	| Date
	| RegExp

export type Draft<T> = T extends PrimitiveType
	? T
	: T extends AtomicObject
	? T
	: T extends Map<infer K, infer V>
	? DraftMap<K, V>
	: T extends Set<infer V>
	? DraftSet<V>
	: T extends object
	? {-readonly [K in keyof T]: Draft<T[K]>}
	: T

// Inline these in ts 3.7
interface DraftMap<K, V> extends Map<Draft<K>, Draft<V>> {}

// Inline these in ts 3.7
interface DraftSet<V> extends Set<Draft<V>> {}

/** Convert a mutable type into a readonly type */
export type Immutable<T> = T extends PrimitiveType
	? T
	: T extends AtomicObject
	? T
	: T extends Map<infer K, infer V> // Ideally, but wait for TS 3.7:    ? Omit<ImmutableMap<K, V>, "set" | "delete" | "clear">
	? ImmutableMap<K, V>
	: T extends Set<infer V> // Ideally, but wait for TS 3.7:    ? Omit<ImmutableSet<V>, "add" | "delete" | "clear">
	? ImmutableSet<V>
	: T extends object
	? {readonly [K in keyof T]: Immutable<T[K]>}
	: T

interface ImmutableMap<K, V> extends Map<Immutable<K>, Immutable<V>> {}

interface ImmutableSet<V> extends Set<Immutable<V>> {}

export interface Patch {
	op: "replace" | "remove" | "add"
	path: (string | number)[]
	value?: any
}

export type PatchListener = (patches: Patch[], inversePatches: Patch[]) => void

/** Converts `nothing` into `undefined` */
type FromNothing<T> = T extends Nothing ? undefined : T

/** The inferred return type of `produce` */
export type Produced<Base, Return> = Return extends void
	? Base
	: Return extends Promise<infer Result>
	? Promise<Result extends void ? Base : FromNothing<Result>>
	: FromNothing<Return>

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
export interface IProduce {
	/** Curried producer */
	<
		Recipe extends (...args: any[]) => any,
		Params extends any[] = Parameters<Recipe>,
		T = Params[0]
	>(
		recipe: Recipe
	): <Base extends Immutable<T>>(
		base: Base,
		...rest: Tail<Params>
	) => Produced<Base, ReturnType<Recipe>>
	//   ^ by making the returned type generic, the actual type of the passed in object is preferred
	//     over the type used in the recipe. However, it does have to satisfy the immutable version used in the recipe
	//     Note: the type of S is the widened version of T, so it can have more props than T, but that is technically actually correct!

	/** Curried producer with initial state */
	<
		Recipe extends (...args: any[]) => any,
		Params extends any[] = Parameters<Recipe>,
		T = Params[0]
	>(
		recipe: Recipe,
		initialState: Immutable<T>
	): <Base extends Immutable<T>>(
		base?: Base,
		...rest: Tail<Params>
	) => Produced<Base, ReturnType<Recipe>>

	/** Normal producer */
	<Base, D = Draft<Base>, Return = void>(
		base: Base,
		recipe: (draft: D) => Return,
		listener?: PatchListener
	): Produced<Base, Return>
}

export const produce: IProduce
export default produce

/**
 * Like `produce`, but instead of just returning the new state,
 * a tuple is returned with [nextState, patches, inversePatches]
 *
 * Like produce, this function supports currying
 */
export interface IProduceWithPatches {
	/** Curried producer */
	<
		Recipe extends (...args: any[]) => any,
		Params extends any[] = Parameters<Recipe>,
		T = Params[0]
	>(
		recipe: Recipe
	): <Base extends Immutable<T>>(
		base: Base,
		...rest: Tail<Params>
	) => [Produced<Base, ReturnType<Recipe>>, Patch[], Patch[]]
	//   ^ by making the returned type generic, the actual type of the passed in object is preferred
	//     over the type used in the recipe. However, it does have to satisfy the immutable version used in the recipe
	//     Note: the type of S is the widened version of T, so it can have more props than T, but that is technically actually correct!

	/** Curried producer with initial state */
	<
		Recipe extends (...args: any[]) => any,
		Params extends any[] = Parameters<Recipe>,
		T = Params[0]
	>(
		recipe: Recipe,
		initialState: Immutable<T>
	): <Base extends Immutable<T>>(
		base?: Base,
		...rest: Tail<Params>
	) => [Produced<Base, ReturnType<Recipe>>, Patch[], Patch[]]

	/** Normal producer */
	<Base, D = Draft<Base>, Return = void>(
		base: Base,
		recipe: (draft: D) => Return
	): [Produced<Base, Return>, Patch[], Patch[]]
}
export const produceWithPatches: IProduceWithPatches

/** Use a class type for `nothing` so its type is unique */
declare class Nothing {
	// This lets us do `Exclude<T, Nothing>`
	private _: any
}

/**
 * The sentinel value returned by producers to replace the draft with undefined.
 */
export const nothing: Nothing

/**
 * To let Immer treat your class instances as plain immutable objects
 * (albeit with a custom prototype), you must define either an instance property
 * or a static property on each of your custom classes.
 *
 * Otherwise, your class instance will never be drafted, which means it won't be
 * safe to mutate in a produce callback.
 */
export const immerable: unique symbol

/**
 * Pass true to automatically freeze all copies created by Immer.
 *
 * By default, auto-freezing is disabled in production.
 */
export function setAutoFreeze(autoFreeze: boolean): void

/**
 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
 * always faster than using ES5 proxies.
 *
 * By default, feature detection is used, so calling this is rarely necessary.
 */
export function setUseProxies(useProxies: boolean): void

/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */
export function applyPatches<S>(base: S, patches: Patch[]): S

/**
 * Create an Immer draft from the given base state, which may be a draft itself.
 * The draft can be modified until you finalize it with the `finishDraft` function.
 */
export function createDraft<T>(base: T): Draft<T>

/**
 * Finalize an Immer draft from a `createDraft` call, returning the base state
 * (if no changes were made) or a modified copy. The draft must *not* be
 * mutated afterwards.
 *
 * Pass a function as the 2nd argument to generate Immer patches based on the
 * changes that were made.
 */
export function finishDraft<T>(draft: T, listener?: PatchListener): Immutable<T>

/** Get the underlying object that is represented by the given draft */
export function original<T>(value: T): T | void

/** Takes a snapshot of the current state of a draft and finalizes it (but without freezing). This is a great utility to print the current state during debugging (no Proxies in the way). The output of current can also be safely leaked outside the producer. */
export function current<T>(value: T): T

/** Returns true if the given value is an Immer draft */
export function isDraft(value: any): boolean

/** Returns true if the given value can be drafted by Immer */
export function isDraftable(value: any): boolean

export class Immer {
	constructor(config: {
		useProxies?: boolean
		autoFreeze?: boolean
		onAssign?: (
			state: ImmerState,
			prop: string | number,
			value: unknown
		) => void
		onDelete?: (state: ImmerState, prop: string | number) => void
		onCopy?: (state: ImmerState) => void
	})
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
	produce: IProduce
	/**
	 * When true, `produce` will freeze the copies it creates.
	 */
	readonly autoFreeze: boolean
	/**
	 * When true, drafts are ES2015 proxies.
	 */
	readonly useProxies: boolean
	/**
	 * Pass true to automatically freeze all copies created by Immer.
	 *
	 * By default, auto-freezing is disabled in production.
	 */
	setAutoFreeze(autoFreeze: boolean): void
	/**
	 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
	 * always faster than using ES5 proxies.
	 *
	 * By default, feature detection is used, so calling this is rarely necessary.
	 */
	setUseProxies(useProxies: boolean): void
}

export interface ImmerState<T = any> {
	parent?: ImmerState
	base: T
	copy: T
	assigned: {[prop: string]: boolean; [index: number]: boolean}
}

// Backward compatibility with --target es5
declare global {
	interface Set<T> {}
	interface Map<K, V> {}
	interface WeakSet<T> {}
	interface WeakMap<K extends object, V> {}
}

export declare function enableAllPlugins(): void
export declare function enableES5(): void
export declare function enableMapSet(): void
export declare function enablePatches(): void
