import {NOTHING} from "../internal"

type AnyFunc = (...args: any[]) => any

type PrimitiveType = number | string | boolean

/** Object types that should never be mapped */
type AtomicObject = Function | Promise<any> | Date | RegExp

/**
 * If the lib "ES2015.Collection" is not included in tsconfig.json,
 * types like ReadonlyArray, WeakMap etc. fall back to `any` (specified nowhere)
 * or `{}` (from the node types), in both cases entering an infinite recursion in
 * pattern matching type mappings
 * This type can be used to cast these types to `void` in these cases.
 */
export type IfAvailable<T, Fallback = void> =
	// fallback if any
	true | false extends (T extends never
	? true
	: false)
		? Fallback // fallback if empty type
		: keyof T extends never
		? Fallback // original type
		: T

/**
 * These should also never be mapped but must be tested after regular Map and
 * Set
 */
type WeakReferences = IfAvailable<WeakMap<any, any>> | IfAvailable<WeakSet<any>>

export type WritableDraft<T> = T extends any[]
	? number extends T["length"]
		? Draft<T[number]>[]
		: WritableNonArrayDraft<T>
	: WritableNonArrayDraft<T>

type WritableNonArrayDraft<T> = {
	-readonly [K in keyof T]: T[K] extends infer V
		? V extends object
			? Draft<V>
			: V
		: never
}

/** Convert a readonly type into a mutable type, if possible */
export type Draft<T> = T extends PrimitiveType
	? T
	: T extends AtomicObject
	? T
	: T extends ReadonlyMap<infer K, infer V> // Map extends ReadonlyMap
	? Map<Draft<K>, Draft<V>>
	: T extends ReadonlySet<infer V> // Set extends ReadonlySet
	? Set<Draft<V>>
	: T extends WeakReferences
	? T
	: T extends object
	? WritableDraft<T>
	: T

/** Convert a mutable type into a readonly type */
export type Immutable<T> = T extends PrimitiveType
	? T
	: T extends AtomicObject
	? T
	: T extends ReadonlyMap<infer K, infer V> // Map extends ReadonlyMap
	? ReadonlyMap<Immutable<K>, Immutable<V>>
	: T extends ReadonlySet<infer V> // Set extends ReadonlySet
	? ReadonlySet<Immutable<V>>
	: T extends WeakReferences
	? T
	: T extends object
	? {readonly [K in keyof T]: Immutable<T[K]>}
	: T

export interface Patch {
	op: "replace" | "remove" | "add"
	path: (string | number)[]
	value?: any
}

export type PatchListener = (patches: Patch[], inversePatches: Patch[]) => void

/** Converts `nothing` into `undefined` */
type FromNothing<T> = T extends typeof NOTHING ? undefined : T

/** The inferred return type of `produce` */
export type Produced<Base, Return> = Return extends void
	? Base
	: FromNothing<Return>

/**
 * Utility types
 */
type PatchesTuple<T> = readonly [T, Patch[], Patch[]]

type ValidRecipeReturnType<State> =
	| State
	| void
	| undefined
	| (State extends undefined ? typeof NOTHING : never)

type ReturnTypeWithPatchesIfNeeded<
	State,
	UsePatches extends boolean
> = UsePatches extends true ? PatchesTuple<State> : State

/**
 * Core Producer inference
 */
type InferRecipeFromCurried<Curried> = Curried extends (
	base: infer State,
	...rest: infer Args
) => any // extra assertion to make sure this is a proper curried function (state, args) => state
	? ReturnType<Curried> extends State
		? (
				draft: Draft<State>,
				...rest: Args
		  ) => ValidRecipeReturnType<Draft<State>>
		: never
	: never

type InferInitialStateFromCurried<Curried> = Curried extends (
	base: infer State,
	...rest: any[]
) => any // extra assertion to make sure this is a proper curried function (state, args) => state
	? State
	: never

type InferCurriedFromRecipe<
	Recipe,
	UsePatches extends boolean
> = Recipe extends (draft: infer DraftState, ...args: infer RestArgs) => any // verify return type
	? ReturnType<Recipe> extends ValidRecipeReturnType<DraftState>
		? (
				base: Immutable<DraftState>,
				...args: RestArgs
		  ) => ReturnTypeWithPatchesIfNeeded<DraftState, UsePatches> // N.b. we return mutable draftstate, in case the recipe's first arg isn't read only, and that isn't expected as output either
		: never // incorrect return type
	: never // not a function

type InferCurriedFromInitialStateAndRecipe<
	State,
	Recipe,
	UsePatches extends boolean
> = Recipe extends (
	draft: Draft<State>,
	...rest: infer RestArgs
) => ValidRecipeReturnType<State>
	? (
			base?: State | undefined,
			...args: RestArgs
	  ) => ReturnTypeWithPatchesIfNeeded<State, UsePatches>
	: never // recipe doesn't match initial state

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
	/** Curried producer that infers the recipe from the curried output function (e.g. when passing to setState) */
	<Curried>(
		recipe: InferRecipeFromCurried<Curried>,
		initialState?: InferInitialStateFromCurried<Curried>
	): Curried

	/** Curried producer that infers curried from the recipe  */
	<Recipe extends AnyFunc>(recipe: Recipe): InferCurriedFromRecipe<
		Recipe,
		false
	>

	/** Curried producer that infers curried from the State generic, which is explicitly passed in.  */
	<State>(
		recipe: (
			state: Draft<State>,
			initialState: State
		) => ValidRecipeReturnType<State>
	): (state?: State) => State
	<State, Args extends any[]>(
		recipe: (
			state: Draft<State>,
			...args: Args
		) => ValidRecipeReturnType<State>,
		initialState: State
	): (state?: State, ...args: Args) => State
	<State>(recipe: (state: Draft<State>) => ValidRecipeReturnType<State>): (
		state: State
	) => State
	<State, Args extends any[]>(
		recipe: (state: Draft<State>, ...args: Args) => ValidRecipeReturnType<State>
	): (state: State, ...args: Args) => State

	/** Curried producer with initial state, infers recipe from initial state */
	<State, Recipe extends Function>(
		recipe: Recipe,
		initialState: State
	): InferCurriedFromInitialStateAndRecipe<State, Recipe, false>

	/** Normal producer */
	<Base, D = Draft<Base>>( // By using a default inferred D, rather than Draft<Base> in the recipe, we can override it.
		base: Base,
		recipe: (draft: D) => ValidRecipeReturnType<D>,
		listener?: PatchListener
	): Base
}

/**
 * Like `produce`, but instead of just returning the new state,
 * a tuple is returned with [nextState, patches, inversePatches]
 *
 * Like produce, this function supports currying
 */
export interface IProduceWithPatches {
	// Types copied from IProduce, wrapped with PatchesTuple
	<Recipe extends AnyFunc>(recipe: Recipe): InferCurriedFromRecipe<Recipe, true>
	<State, Recipe extends Function>(
		recipe: Recipe,
		initialState: State
	): InferCurriedFromInitialStateAndRecipe<State, Recipe, true>
	<Base, D = Draft<Base>>(
		base: Base,
		recipe: (draft: D) => ValidRecipeReturnType<D>,
		listener?: PatchListener
	): PatchesTuple<Base>
}

/**
 * The type for `recipe function`
 */
export type Producer<T> = (draft: Draft<T>) => ValidRecipeReturnType<Draft<T>>

// Fixes #507: bili doesn't export the types of this file if there is no actual source in it..
// hopefully it get's tree-shaken away for everyone :)
export function never_used() {}
