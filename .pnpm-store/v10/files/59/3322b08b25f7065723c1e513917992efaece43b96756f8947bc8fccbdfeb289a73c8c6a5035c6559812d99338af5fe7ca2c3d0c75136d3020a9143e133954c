/**
 * Negates a boolean type.
 */
export type Not<T extends boolean> = T extends true ? false : true;
/**
 * Returns `true` if at least one of the types in the
 * {@linkcode Types} array is `true`, otherwise returns `false`.
 */
export type Or<Types extends boolean[]> = Types[number] extends false ? false : true;
/**
 * Checks if all the boolean types in the {@linkcode Types} array are `true`.
 */
export type And<Types extends boolean[]> = Types[number] extends true ? true : false;
/**
 * Represents an equality type that returns {@linkcode Right} if
 * {@linkcode Left} is `true`,
 * otherwise returns the negation of {@linkcode Right}.
 */
export type Eq<Left extends boolean, Right extends boolean> = Left extends true ? Right : Not<Right>;
/**
 * Represents the exclusive OR operation on a tuple of boolean types.
 * Returns `true` if exactly one of the boolean types is `true`,
 * otherwise returns `false`.
 */
export type Xor<Types extends [boolean, boolean]> = Not<Eq<Types[0], Types[1]>>;
/**
 * @internal
 */
declare const secret: unique symbol;
/**
 * @internal
 */
type Secret = typeof secret;
/**
 * Checks if the given type is `never`.
 */
export type IsNever<T> = [T] extends [never] ? true : false;
/**
 * Checks if the given type is `any`.
 */
export type IsAny<T> = [T] extends [Secret] ? Not<IsNever<T>> : false;
/**
 * Determines if the given type is `unknown`.
 */
export type IsUnknown<T> = [unknown] extends [T] ? Not<IsAny<T>> : false;
/**
 * Determines if a type is either `never` or `any`.
 */
export type IsNeverOrAny<T> = Or<[IsNever<T>, IsAny<T>]>;
/**
 * Subjective "useful" keys from a type. For objects it's just `keyof` but for
 * tuples/arrays it's the number keys.
 *
 * @example
 * ```ts
 * UsefulKeys<{ a: 1; b: 2 }> // 'a' | 'b'
 *
 * UsefulKeys<['a', 'b']> // '0' | '1'
 *
 * UsefulKeys<string[]> // number
 * ```
 */
export type UsefulKeys<T> = T extends any[] ? {
    [K in keyof T]: K;
}[number] : keyof T;
/**
 * Extracts the keys from a type that are required (not optional).
 */
export type RequiredKeys<T> = Extract<{
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T], keyof T>;
/**
 * Gets the keys of an object type that are optional.
 */
export type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;
/**
 * Extracts the keys from a type that are not `readonly`.
 */
export type ReadonlyKeys<T> = Extract<{
    [K in keyof T]-?: ReadonlyEquivalent<{
        [_K in K]: T[K];
    }, {
        -readonly [_K in K]: T[K];
    }> extends true ? never : K;
}[keyof T], keyof T>;
/**
 * Determines if two types, are equivalent in a `readonly` manner.
 *
 * @internal
 */
type ReadonlyEquivalent<X, Y> = Extends<(<T>() => T extends X ? true : false), (<T>() => T extends Y ? true : false)>;
/**
 * Checks if one type extends another. Note: this is not quite the same as `Left extends Right` because:
 * 1. If either type is `never`, the result is `true` iff the other type is also `never`.
 * 2. Types are wrapped in a 1-tuple so that union types are not distributed - instead we consider `string | number` to _not_ extend `number`. If we used `Left extends Right` directly you would get `Extends<string | number, number>` => `false | true` => `boolean`.
 */
export type Extends<Left, Right> = IsNever<Left> extends true ? IsNever<Right> : [Left] extends [Right] ? true : false;
/**
 * Checks if the {@linkcode Left} type extends the {@linkcode Right} type,
 * excluding `any` or `never`.
 */
export type ExtendsExcludingAnyOrNever<Left, Right> = IsAny<Left> extends true ? IsAny<Right> : Extends<Left, Right>;
/**
 * Checks if two types are strictly equal using
 * the TypeScript internal identical-to operator.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/55188#issuecomment-1656328122 | much history}
 */
export type StrictEqualUsingTSInternalIdenticalToOperator<L, R> = (<T>() => T extends (L & T) | T ? true : false) extends <T>() => T extends (R & T) | T ? true : false ? IsNever<L> extends IsNever<R> ? true : false : false;
/**
 * Checks that {@linkcode Left} and {@linkcode Right} extend each other.
 * Not quite the same as an equality check since `any` can make it resolve
 * to `true`. So should only be used when {@linkcode Left} and
 * {@linkcode Right} are known to avoid `any`.
 */
export type MutuallyExtends<Left, Right> = And<[Extends<Left, Right>, Extends<Right, Left>]>;
/**
 * @internal
 */
declare const mismatch: unique symbol;
/**
 * @internal
 */
type Mismatch = {
    [mismatch]: 'mismatch';
};
/**
 * A type which should match anything passed as a value but *doesn't*
 * match {@linkcode Mismatch}. It helps TypeScript select the right overload
 * for {@linkcode PositiveExpectTypeOf.toEqualTypeOf | .toEqualTypeOf()} and
 * {@linkcode PositiveExpectTypeOf.toMatchTypeOf | .toMatchTypeOf()}.
 *
 * @internal
 */
declare const avalue: unique symbol;
/**
 * Represents a value that can be of various types.
 */
export type AValue = {
    [avalue]?: undefined;
} | string | number | boolean | symbol | bigint | null | undefined | void;
/**
 * Represents the type of mismatched arguments between
 * the actual result and the expected result.
 *
 * If {@linkcode ActualResult} and {@linkcode ExpectedResult} are equivalent,
 * the type resolves to an empty tuple `[]`, indicating no mismatch.
 * If they are not equivalent, it resolves to a tuple containing the element
 * {@linkcode Mismatch}, signifying a discrepancy between
 * the expected and actual results.
 */
export type MismatchArgs<ActualResult extends boolean, ExpectedResult extends boolean> = Eq<ActualResult, ExpectedResult> extends true ? [] : [Mismatch];
/**
 * Represents the options for the {@linkcode ExpectTypeOf} function.
 */
export interface ExpectTypeOfOptions {
    positive: boolean;
    branded: boolean;
}
/**
 * Convert a union to an intersection.
 * `A | B | C` -\> `A & B & C`
 */
export type UnionToIntersection<Union> = (Union extends any ? (distributedUnion: Union) => void : never) extends (mergedIntersection: infer Intersection) => void ? Intersection : never;
/**
 * Get the last element of a union.
 * First, converts to a union of `() => T` functions,
 * then uses {@linkcode UnionToIntersection} to get the last one.
 */
export type LastOf<Union> = UnionToIntersection<Union extends any ? () => Union : never> extends () => infer R ? R : never;
/**
 * Intermediate type for {@linkcode UnionToTuple} which pushes the
 * "last" union member to the end of a tuple, and recursively prepends
 * the remainder of the union.
 */
export type TuplifyUnion<Union, LastElement = LastOf<Union>> = IsNever<Union> extends true ? [] : [...TuplifyUnion<Exclude<Union, LastElement>>, LastElement];
/**
 * Convert a union like `1 | 2 | 3` to a tuple like `[1, 2, 3]`.
 */
export type UnionToTuple<Union> = TuplifyUnion<Union>;
export type IsTuple<T> = Or<[Extends<T, []>, Extends<T, [any, ...any[]]>]>;
export type IsUnion<T> = Not<Extends<UnionToTuple<T>['length'], 1>>;
/**
 * A recursive version of `Pick` that selects properties from the left type that are present in the right type.
 * The "leaf" types from `Left` are used - only the keys of `Right` are considered.
 *
 * @example
 * ```ts
 * const user = {email: 'a@b.com', name: 'John Doe', address: {street: '123 2nd St', city: 'New York', zip: '10001', state: 'NY', country: 'USA'}}
 *
 * type Result = DeepPickMatchingProps<typeof user, {name: unknown; address: {city: unknown}}> // {name: string, address: {city: string}}
 * ```
 */
export type DeepPickMatchingProps<Left, Right> = Left extends Record<string, unknown> ? Pick<{
    [K in keyof Left]: K extends keyof Right ? DeepPickMatchingProps<Left[K], Right[K]> : never;
}, Extract<keyof Left, keyof Right>> : Left;
export {};
