import type { StrictEqualUsingTSInternalIdenticalToOperator, IsNever, UnionToIntersection, UnionToTuple } from './utils';
/**
 * The simple(ish) way to get overload info from a function
 * {@linkcode FunctionType}. Recent versions of TypeScript will match any
 * function against a generic 10-overload type, filling in slots with
 * duplicates of the function. So, we can just match against a single type
 * and get all the overloads.
 *
 * For older versions of TypeScript, we'll need to painstakingly do
 * ten separate matches.
 */
export type TSPost53OverloadsInfoUnion<FunctionType> = FunctionType extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) | ((...p: A4) => R4) | ((...p: A5) => R5) | ((...p: A6) => R6) | ((...p: A7) => R7) | ((...p: A8) => R8) | ((...p: A9) => R9) | ((...p: A10) => R10) : never;
/**
 * A function with `unknown` parameters and return type.
 */
export type UnknownFunction = (...args: unknown[]) => unknown;
/**
 * `true` iff {@linkcode FunctionType} is
 * equivalent to `(...args: unknown[]) => unknown`,
 * which is what an overload variant looks like for a non-existent overload.
 * This is useful because older versions of TypeScript end up with
 * 9 "useless" overloads and one real one for parameterless/generic functions.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/28867 | Related}
 */
export type IsUselessOverloadInfo<FunctionType> = StrictEqualUsingTSInternalIdenticalToOperator<FunctionType, UnknownFunction>;
/**
 * Old versions of TypeScript can sometimes seem to refuse to separate out
 * union members unless you put them each in a pointless tuple and add an
 * extra `infer X` expression. There may be a better way to work around this
 * problem, but since it's not a problem in newer versions of TypeScript,
 * it's not a priority right now.
 */
export type Tuplify<Union> = Union extends infer X ? [X] : never;
/**
 * For older versions of TypeScript, we need two separate workarounds
 * to get overload info. First, we need need to use
 * {@linkcode DecreasingOverloadsInfoUnion} to get the overload info for
 * functions with 1-10 overloads. Then, we need to filter out the
 * "useless" overloads that are present in older versions of TypeScript,
 * for parameterless functions. To do this we use
 * {@linkcode IsUselessOverloadInfo} to remove useless overloads.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/28867 | Related}
 */
export type TSPre53OverloadsInfoUnion<FunctionType> = Tuplify<DecreasingOverloadsInfoUnion<FunctionType>> extends infer Tup ? Tup extends [infer Fn] ? IsUselessOverloadInfo<Fn> extends true ? never : Fn : never : never;
/**
 * For versions of TypeScript below 5.3, we need to check for 10 overloads,
 * then 9, then 8, etc., to get a union of the overload variants.
 */
export type DecreasingOverloadsInfoUnion<F> = F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
    (...args: infer A10): infer R10;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) | ((...p: A4) => R4) | ((...p: A5) => R5) | ((...p: A6) => R6) | ((...p: A7) => R7) | ((...p: A8) => R8) | ((...p: A9) => R9) | ((...p: A10) => R10) : F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
    (...args: infer A9): infer R9;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) | ((...p: A4) => R4) | ((...p: A5) => R5) | ((...p: A6) => R6) | ((...p: A7) => R7) | ((...p: A8) => R8) | ((...p: A9) => R9) : F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
    (...args: infer A8): infer R8;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) | ((...p: A4) => R4) | ((...p: A5) => R5) | ((...p: A6) => R6) | ((...p: A7) => R7) | ((...p: A8) => R8) : F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
    (...args: infer A7): infer R7;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) | ((...p: A4) => R4) | ((...p: A5) => R5) | ((...p: A6) => R6) | ((...p: A7) => R7) : F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
    (...args: infer A6): infer R6;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) | ((...p: A4) => R4) | ((...p: A5) => R5) | ((...p: A6) => R6) : F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
    (...args: infer A5): infer R5;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) | ((...p: A4) => R4) | ((...p: A5) => R5) : F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
    (...args: infer A4): infer R4;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) | ((...p: A4) => R4) : F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
    (...args: infer A3): infer R3;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) | ((...p: A3) => R3) : F extends {
    (...args: infer A1): infer R1;
    (...args: infer A2): infer R2;
} ? ((...p: A1) => R1) | ((...p: A2) => R2) : F extends (...args: infer A1) => infer R1 ? ((...p: A1) => R1) : never;
/**
 * Get a union of overload variants for a function {@linkcode FunctionType}.
 * Does a check for whether we can do the one-shot
 * 10-overload matcher (which works for ts\>5.3), and if not,
 * falls back to the more complicated utility.
 */
export type OverloadsInfoUnion<FunctionType> = IsNever<TSPost53OverloadsInfoUnion<(a: 1) => 2>> extends true ? TSPre53OverloadsInfoUnion<FunctionType> : TSPost53OverloadsInfoUnion<FunctionType>;
/**
 * Allows inferring any function using the `infer` keyword.
 */
export type InferFunctionType<FunctionType extends (...args: any) => any> = FunctionType;
/**
 * A union type of the parameters allowed for any
 * overload of function {@linkcode FunctionType}.
 */
export type OverloadParameters<FunctionType> = OverloadsInfoUnion<FunctionType> extends InferFunctionType<infer Fn> ? Parameters<Fn> : never;
/**
 * A union type of the return types for any overload of
 * function {@linkcode FunctionType}.
 */
export type OverloadReturnTypes<FunctionType> = OverloadsInfoUnion<FunctionType> extends InferFunctionType<infer Fn> ? ReturnType<Fn> : never;
/**
 * Takes an overload variants {@linkcode Union},
 * produced from {@linkcode OverloadsInfoUnion} and rejects
 * the ones incompatible with parameters {@linkcode Args}.
 */
export type SelectOverloadsInfo<Union extends UnknownFunction, Args extends unknown[]> = Union extends InferFunctionType<infer Fn> ? (Args extends Parameters<Fn> ? Fn : never) : never;
/**
 * Creates a new overload (an intersection type) from an existing one,
 * which only includes variant(s) which can accept
 * {@linkcode Args} as parameters.
 */
export type OverloadsNarrowedByParameters<FunctionType, Args extends OverloadParameters<FunctionType>> = UnionToIntersection<SelectOverloadsInfo<OverloadsInfoUnion<FunctionType>, Args>>;
/**
 * The simple(ish) way to get overload info from a constructor
 * {@linkcode ConstructorType}. Recent versions of TypeScript will match any
 * constructor against a generic 10-overload type, filling in slots with
 * duplicates of the constructor. So, we can just match against a single type
 * and get all the overloads.
 *
 * For older versions of TypeScript,
 * we'll need to painstakingly do ten separate matches.
 */
export type TSPost53ConstructorOverloadsInfoUnion<ConstructorType> = ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
    new (...args: infer A4): infer R4;
    new (...args: infer A5): infer R5;
    new (...args: infer A6): infer R6;
    new (...args: infer A7): infer R7;
    new (...args: infer A8): infer R8;
    new (...args: infer A9): infer R9;
    new (...args: infer A10): infer R10;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) | (new (...p: A4) => R4) | (new (...p: A5) => R5) | (new (...p: A6) => R6) | (new (...p: A7) => R7) | (new (...p: A8) => R8) | (new (...p: A9) => R9) | (new (...p: A10) => R10) : never;
/**
 * A constructor function with `unknown` parameters and return type.
 */
export type UnknownConstructor = new (...args: unknown[]) => unknown;
/**
 * Same as {@linkcode IsUselessOverloadInfo}, but for constructors.
 */
export type IsUselessConstructorOverloadInfo<FunctionType> = StrictEqualUsingTSInternalIdenticalToOperator<FunctionType, UnknownConstructor>;
/**
 * For older versions of TypeScript, we need two separate workarounds to
 * get constructor overload info. First, we need need to use
 * {@linkcode DecreasingConstructorOverloadsInfoUnion} to get the overload
 * info for constructors with 1-10 overloads. Then, we need to filter out the
 * "useless" overloads that are present in older versions of TypeScript,
 * for parameterless constructors. To do this we use
 * {@linkcode IsUselessConstructorOverloadInfo} to remove useless overloads.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/28867 | Related}
 */
export type TSPre53ConstructorOverloadsInfoUnion<ConstructorType> = Tuplify<DecreasingConstructorOverloadsInfoUnion<ConstructorType>> extends infer Tup ? Tup extends [infer Ctor] ? IsUselessConstructorOverloadInfo<Ctor> extends true ? never : Ctor : never : never;
/**
 * For versions of TypeScript below 5.3, we need to check for 10 overloads,
 * then 9, then 8, etc., to get a union of the overload variants.
 */
export type DecreasingConstructorOverloadsInfoUnion<ConstructorType> = ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
    new (...args: infer A4): infer R4;
    new (...args: infer A5): infer R5;
    new (...args: infer A6): infer R6;
    new (...args: infer A7): infer R7;
    new (...args: infer A8): infer R8;
    new (...args: infer A9): infer R9;
    new (...args: infer A10): infer R10;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) | (new (...p: A4) => R4) | (new (...p: A5) => R5) | (new (...p: A6) => R6) | (new (...p: A7) => R7) | (new (...p: A8) => R8) | (new (...p: A9) => R9) | (new (...p: A10) => R10) : ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
    new (...args: infer A4): infer R4;
    new (...args: infer A5): infer R5;
    new (...args: infer A6): infer R6;
    new (...args: infer A7): infer R7;
    new (...args: infer A8): infer R8;
    new (...args: infer A9): infer R9;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) | (new (...p: A4) => R4) | (new (...p: A5) => R5) | (new (...p: A6) => R6) | (new (...p: A7) => R7) | (new (...p: A8) => R8) | (new (...p: A9) => R9) : ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
    new (...args: infer A4): infer R4;
    new (...args: infer A5): infer R5;
    new (...args: infer A6): infer R6;
    new (...args: infer A7): infer R7;
    new (...args: infer A8): infer R8;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) | (new (...p: A4) => R4) | (new (...p: A5) => R5) | (new (...p: A6) => R6) | (new (...p: A7) => R7) | (new (...p: A8) => R8) : ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
    new (...args: infer A4): infer R4;
    new (...args: infer A5): infer R5;
    new (...args: infer A6): infer R6;
    new (...args: infer A7): infer R7;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) | (new (...p: A4) => R4) | (new (...p: A5) => R5) | (new (...p: A6) => R6) | (new (...p: A7) => R7) : ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
    new (...args: infer A4): infer R4;
    new (...args: infer A5): infer R5;
    new (...args: infer A6): infer R6;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) | (new (...p: A4) => R4) | (new (...p: A5) => R5) | (new (...p: A6) => R6) : ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
    new (...args: infer A4): infer R4;
    new (...args: infer A5): infer R5;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) | (new (...p: A4) => R4) | (new (...p: A5) => R5) : ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
    new (...args: infer A4): infer R4;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) | (new (...p: A4) => R4) : ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
    new (...args: infer A3): infer R3;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) | (new (...p: A3) => R3) : ConstructorType extends {
    new (...args: infer A1): infer R1;
    new (...args: infer A2): infer R2;
} ? (new (...p: A1) => R1) | (new (...p: A2) => R2) : ConstructorType extends new (...args: infer A1) => infer R1 ? (new (...p: A1) => R1) : never;
/**
 * Get a union of overload variants for a constructor
 * {@linkcode ConstructorType}. Does a check for whether we can do the
 * one-shot 10-overload matcher (which works for ts\>5.3), and if not,
 * falls back to the more complicated utility.
 */
export type ConstructorOverloadsUnion<ConstructorType> = IsNever<TSPost53ConstructorOverloadsInfoUnion<new (a: 1) => any>> extends true ? TSPre53ConstructorOverloadsInfoUnion<ConstructorType> : TSPost53ConstructorOverloadsInfoUnion<ConstructorType>;
/**
 * Allows inferring any constructor using the `infer` keyword.
 */
export type InferConstructor<ConstructorType extends new (...args: any) => any> = ConstructorType;
/**
 * A union type of the parameters allowed for any overload
 * of constructor {@linkcode ConstructorType}.
 */
export type ConstructorOverloadParameters<ConstructorType> = ConstructorOverloadsUnion<ConstructorType> extends InferConstructor<infer Ctor> ? ConstructorParameters<Ctor> : never;
/**
 * Calculates the number of overloads for a given function type.
 */
export type NumOverloads<FunctionType> = UnionToTuple<OverloadsInfoUnion<FunctionType>>['length'];
