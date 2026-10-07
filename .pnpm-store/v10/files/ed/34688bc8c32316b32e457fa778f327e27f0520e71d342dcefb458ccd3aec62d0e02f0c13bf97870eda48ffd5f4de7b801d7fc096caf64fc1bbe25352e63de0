import { Nothing } from "../internal";
declare type AnyFunc = (...args: any[]) => any;
declare type PrimitiveType = number | string | boolean;
/** Object types that should never be mapped */
declare type AtomicObject = Function | Promise<any> | Date | RegExp;
/**
 * If the lib "ES2015.Collection" is not included in tsconfig.json,
 * types like ReadonlyArray, WeakMap etc. fall back to `any` (specified nowhere)
 * or `{}` (from the node types), in both cases entering an infinite recursion in
 * pattern matching type mappings
 * This type can be used to cast these types to `void` in these cases.
 */
export declare type IfAvailable<T, Fallback = void> = true | false extends (T extends never ? true : false) ? Fallback : keyof T extends never ? Fallback : T;
/**
 * These should also never be mapped but must be tested after regular Map and
 * Set
 */
declare type WeakReferences = IfAvailable<WeakMap<any, any>> | IfAvailable<WeakSet<any>>;
export declare type WritableDraft<T> = {
    -readonly [K in keyof T]: Draft<T[K]>;
};
/** Convert a readonly type into a mutable type, if possible */
export declare type Draft<T> = T extends PrimitiveType ? T : T extends AtomicObject ? T : T extends IfAvailable<ReadonlyMap<infer K, infer V>> ? Map<Draft<K>, Draft<V>> : T extends IfAvailable<ReadonlySet<infer V>> ? Set<Draft<V>> : T extends WeakReferences ? T : T extends object ? WritableDraft<T> : T;
/** Convert a mutable type into a readonly type */
export declare type Immutable<T> = T extends PrimitiveType ? T : T extends AtomicObject ? T : T extends IfAvailable<ReadonlyMap<infer K, infer V>> ? ReadonlyMap<Immutable<K>, Immutable<V>> : T extends IfAvailable<ReadonlySet<infer V>> ? ReadonlySet<Immutable<V>> : T extends WeakReferences ? T : T extends object ? {
    readonly [K in keyof T]: Immutable<T[K]>;
} : T;
export interface Patch {
    op: "replace" | "remove" | "add";
    path: (string | number)[];
    value?: any;
}
export declare type PatchListener = (patches: Patch[], inversePatches: Patch[]) => void;
/** Converts `nothing` into `undefined` */
declare type FromNothing<T> = T extends Nothing ? undefined : T;
/** The inferred return type of `produce` */
export declare type Produced<Base, Return> = Return extends void ? Base : Return extends Promise<infer Result> ? Promise<Result extends void ? Base : FromNothing<Result>> : FromNothing<Return>;
/**
 * Utility types
 */
declare type PatchesTuple<T> = readonly [T, Patch[], Patch[]];
declare type ValidRecipeReturnType<State> = State | void | undefined | (State extends undefined ? Nothing : never);
declare type ValidRecipeReturnTypePossiblyPromise<State> = ValidRecipeReturnType<State> | Promise<ValidRecipeReturnType<State>>;
declare type PromisifyReturnIfNeeded<State, Recipe extends AnyFunc, UsePatches extends boolean> = ReturnType<Recipe> extends Promise<any> ? Promise<UsePatches extends true ? PatchesTuple<State> : State> : UsePatches extends true ? PatchesTuple<State> : State;
/**
 * Core Producer inference
 */
declare type InferRecipeFromCurried<Curried> = Curried extends (base: infer State, ...rest: infer Args) => any ? ReturnType<Curried> extends State ? (draft: Draft<State>, ...rest: Args) => ValidRecipeReturnType<Draft<State>> : never : never;
declare type InferInitialStateFromCurried<Curried> = Curried extends (base: infer State, ...rest: any[]) => any ? State : never;
declare type InferCurriedFromRecipe<Recipe, UsePatches extends boolean> = Recipe extends (draft: infer DraftState, ...args: infer RestArgs) => any ? ReturnType<Recipe> extends ValidRecipeReturnTypePossiblyPromise<DraftState> ? (base: Immutable<DraftState>, ...args: RestArgs) => PromisifyReturnIfNeeded<DraftState, Recipe, UsePatches> : never : never;
declare type InferCurriedFromInitialStateAndRecipe<State, Recipe, UsePatches extends boolean> = Recipe extends (draft: Draft<State>, ...rest: infer RestArgs) => ValidRecipeReturnTypePossiblyPromise<State> ? (base?: State | undefined, ...args: RestArgs) => PromisifyReturnIfNeeded<State, Recipe, UsePatches> : never;
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
    <Curried>(recipe: InferRecipeFromCurried<Curried>, initialState?: InferInitialStateFromCurried<Curried>): Curried;
    /** Curried producer that infers curried from the recipe  */
    <Recipe extends AnyFunc>(recipe: Recipe): InferCurriedFromRecipe<Recipe, false>;
    /** Curried producer that infers curried from the State generic, which is explicitly passed in.  */
    <State>(recipe: (state: Draft<State>, initialState: State) => ValidRecipeReturnType<State>): (state?: State) => State;
    <State, Args extends any[]>(recipe: (state: Draft<State>, ...args: Args) => ValidRecipeReturnType<State>, initialState: State): (state?: State, ...args: Args) => State;
    <State>(recipe: (state: Draft<State>) => ValidRecipeReturnType<State>): (state: State) => State;
    <State, Args extends any[]>(recipe: (state: Draft<State>, ...args: Args) => ValidRecipeReturnType<State>): (state: State, ...args: Args) => State;
    /** Curried producer with initial state, infers recipe from initial state */
    <State, Recipe extends Function>(recipe: Recipe, initialState: State): InferCurriedFromInitialStateAndRecipe<State, Recipe, false>;
    /** Normal producer */
    <Base, D = Draft<Base>>(// By using a default inferred D, rather than Draft<Base> in the recipe, we can override it.
    base: Base, recipe: (draft: D) => ValidRecipeReturnType<D>, listener?: PatchListener): Base;
    /** Promisified normal producer */
    <Base, D = Draft<Base>>(base: Base, recipe: (draft: D) => Promise<ValidRecipeReturnType<D>>, listener?: PatchListener): Promise<Base>;
}
/**
 * Like `produce`, but instead of just returning the new state,
 * a tuple is returned with [nextState, patches, inversePatches]
 *
 * Like produce, this function supports currying
 */
export interface IProduceWithPatches {
    <Recipe extends AnyFunc>(recipe: Recipe): InferCurriedFromRecipe<Recipe, true>;
    <State, Recipe extends Function>(recipe: Recipe, initialState: State): InferCurriedFromInitialStateAndRecipe<State, Recipe, true>;
    <Base, D = Draft<Base>>(base: Base, recipe: (draft: D) => ValidRecipeReturnType<D>, listener?: PatchListener): PatchesTuple<Base>;
    <Base, D = Draft<Base>>(base: Base, recipe: (draft: D) => Promise<ValidRecipeReturnType<D>>, listener?: PatchListener): Promise<PatchesTuple<Base>>;
}
/**
 * The type for `recipe function`
 */
export declare type Producer<T> = (draft: Draft<T>) => ValidRecipeReturnType<Draft<T>> | Promise<ValidRecipeReturnType<Draft<T>>>;
export declare function never_used(): void;
export {};
//# sourceMappingURL=types-external.d.ts.map