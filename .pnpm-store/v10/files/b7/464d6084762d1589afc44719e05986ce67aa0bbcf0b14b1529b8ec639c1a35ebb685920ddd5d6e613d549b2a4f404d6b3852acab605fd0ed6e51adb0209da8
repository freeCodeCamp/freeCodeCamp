import type { StrictEqualUsingBranding } from './branding';
import type { ExpectAny, ExpectArray, ExpectBigInt, ExpectBoolean, ExpectFunction, ExpectNever, ExpectNull, ExpectNullable, ExpectNumber, ExpectObject, ExpectString, ExpectSymbol, ExpectUndefined, ExpectUnknown, ExpectVoid, MismatchInfo, Scolder } from './messages';
import type { ConstructorOverloadParameters, OverloadParameters, OverloadReturnTypes, OverloadsNarrowedByParameters } from './overloads';
import type { AValue, DeepPickMatchingProps, Extends, IsUnion, MismatchArgs, Not, StrictEqualUsingTSInternalIdenticalToOperator } from './utils';
export * from './branding';
export * from './messages';
export * from './overloads';
export * from './utils';
/**
 * Represents the positive assertion methods available for type checking in the
 * {@linkcode expectTypeOf()} utility.
 */
export interface PositiveExpectTypeOf<Actual> extends BaseExpectTypeOf<Actual, {
    positive: true;
    branded: false;
}> {
    /**
     * Similar to jest's `expect(...).toMatchObject(...)` but for types.
     * Deeply "picks" the properties of the actual type based on the expected type, then performs a strict check to make sure the types match `Expected`.
     *
     * **Note**: optional properties on the {@linkcode Expected | expected type} are not allowed to be missing on the {@linkcode Actual | actual type}.
     *
     * @example
     * ```ts
     * expectTypeOf({ a: 1, b: 1 }).toMatchObjectType<{ a: number }>()
     *
     * expectTypeOf({ a: 1, b: 1 }).not.toMatchObjectType<{ a: number; c?: number }>()
     * ```
     *
     * @param MISMATCH - The mismatch arguments.
     * @returns `true`.
     */
    toMatchObjectType: <Expected extends IsUnion<Expected> extends true ? 'toMatchObject does not support union types' : Not<Extends<Expected, Record<string, unknown>>> extends true ? 'toMatchObject only supports object types' : StrictEqualUsingTSInternalIdenticalToOperator<DeepPickMatchingProps<Actual, Expected>, Expected> extends true ? unknown : MismatchInfo<DeepPickMatchingProps<Actual, Expected>, Expected>>(...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<DeepPickMatchingProps<Actual, Expected>, Expected>, true>) => true;
    /**
     * Check if your type extends the expected type
     *
     * A less strict version of {@linkcode toEqualTypeOf | .toEqualTypeOf()} that allows for extra properties.
     * This is roughly equivalent to an `extends` constraint in a function type argument.
     *
     * @example
     * ```ts
     * expectTypeOf({ a: 1, b: 1 }).toExtend<{ a: number }>()
     *
     * expectTypeOf({ a: 1 }).not.toExtend<{ b: number }>()
     * ```
     *
     * @param MISMATCH - The mismatch arguments.
     * @returns `true`.
     */
    toExtend: <Expected extends Extends<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(...MISMATCH: MismatchArgs<Extends<Actual, Expected>, true>) => true;
    toEqualTypeOf: {
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode branded | .branded.toEqualTypeOf()}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing | The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param value - The value to compare against the expected type.
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected extends StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(value: Expected & AValue, // reason for `& AValue`: make sure this is only the selected overload when the end-user passes a value for an inferred typearg. The `Mismatch` type does match `AValue`.
        ...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected>, true>): true;
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode branded | .branded.toEqualTypeOf()}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing | The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected extends StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected>, true>): true;
    };
    /**
     * @deprecated Since v1.2.0 - Use either {@linkcode toMatchObjectType} or {@linkcode toExtend} instead
     *
     * - Use {@linkcode toMatchObjectType} to perform a strict check on a subset of your type's keys
     * - Use {@linkcode toExtend} to check if your type extends the expected type
     */
    toMatchTypeOf: {
        /**
         * @deprecated Since v1.2.0 - Use either {@linkcode toMatchObjectType} or {@linkcode toExtend} instead
         *
         * - Use {@linkcode toMatchObjectType} to perform a strict check on a subset of your type's keys
         * - Use {@linkcode toExtend} to check if your type extends the expected type
         *
         * A less strict version of {@linkcode toEqualTypeOf | .toEqualTypeOf()}
         * that allows for extra properties.
         * This is roughly equivalent to an `extends` constraint
         * in a function type argument.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 2 })
         * ```
         *
         * @param value - The value to compare against the expected type.
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected extends Extends<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(value: Expected & AValue, // reason for `& AValue`: make sure this is only the selected overload when the end-user passes a value for an inferred typearg. The `Mismatch` type does match `AValue`.
        ...MISMATCH: MismatchArgs<Extends<Actual, Expected>, true>): true;
        /**
         * @deprecated Since v1.2.0 - Use either {@linkcode toMatchObjectType} or {@linkcode toExtend} instead
         *
         * - Use {@linkcode toMatchObjectType} to perform a strict check on a subset of your type's keys
         * - Use {@linkcode toExtend} to check if your type extends the expected type
         *
         * A less strict version of {@linkcode toEqualTypeOf | .toEqualTypeOf()}
         * that allows for extra properties.
         * This is roughly equivalent to an `extends` constraint
         * in a function type argument.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected extends Extends<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(...MISMATCH: MismatchArgs<Extends<Actual, Expected>, true>): true;
    };
    /**
     * Checks whether an object has a given property.
     *
     * @example
     * <caption>check that properties exist</caption>
     * ```ts
     * const obj = { a: 1, b: '' }
     *
     * expectTypeOf(obj).toHaveProperty('a')
     *
     * expectTypeOf(obj).not.toHaveProperty('c')
     * ```
     *
     * @param key - The property key to check for.
     * @param MISMATCH - The mismatch arguments.
     * @returns `true`.
     */
    toHaveProperty: <KeyType extends keyof Actual>(key: KeyType, ...MISMATCH: MismatchArgs<Extends<KeyType, keyof Actual>, true>) => KeyType extends keyof Actual ? PositiveExpectTypeOf<Actual[KeyType]> : true;
    /**
     * Inverts the result of the following assertions.
     *
     * @example
     * ```ts
     * expectTypeOf({ a: 1 }).not.toMatchTypeOf({ b: 1 })
     * ```
     */
    not: NegativeExpectTypeOf<Actual>;
    /**
     * Intersection types can cause issues with
     * {@linkcode toEqualTypeOf | .toEqualTypeOf()}:
     * ```ts
     * // ❌ The following line doesn't compile, even though the types are arguably the same.
     * expectTypeOf<{ a: 1 } & { b: 2 }>().toEqualTypeOf<{ a: 1; b: 2 }>()
     * ```
     * This helper works around this problem by using
     * a more permissive but less performant check.
     *
     * __Note__: This comes at a performance cost, and can cause the compiler
     * to 'give up' if used with excessively deep types, so use sparingly.
     *
     * @see {@link https://github.com/mmkal/expect-type/pull/21 | Reference}
     */
    branded: {
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode PositiveExpectTypeOf.branded | .branded.toEqualTypeOf()}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing | The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        toEqualTypeOf: <Expected extends StrictEqualUsingBranding<Actual, Expected> extends true ? unknown : MismatchInfo<Actual, Expected>>(...MISMATCH: MismatchArgs<StrictEqualUsingBranding<Actual, Expected>, true>) => true;
    };
}
/**
 * Represents the negative expectation type for the {@linkcode Actual} type.
 */
export interface NegativeExpectTypeOf<Actual> extends BaseExpectTypeOf<Actual, {
    positive: false;
}> {
    /**
     * Similar to jest's `expect(...).toMatchObject(...)` but for types.
     * Deeply "picks" the properties of the actual type based on the expected type, then performs a strict check to make sure the types match `Expected`.
     *
     * **Note**: optional properties on the {@linkcode Expected | expected type} are not allowed to be missing on the {@linkcode Actual | actual type}.
     *
     * @example
     * ```ts
     * expectTypeOf({ a: 1, b: 1 }).toMatchObjectType<{ a: number }>()
     *
     * expectTypeOf({ a: 1, b: 1 }).not.toMatchObjectType<{ a: number; c?: number }>()
     * ```
     *
     * @param MISMATCH - The mismatch arguments.
     * @returns `true`.
     */
    toMatchObjectType: <Expected>(...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Pick<Actual, keyof Actual & keyof Expected>, Expected>, false>) => true;
    /**
     * Check if your type extends the expected type
     *
     * A less strict version of {@linkcode PositiveExpectTypeOf.toEqualTypeOf | .toEqualTypeOf()} that allows for extra properties.
     * This is roughly equivalent to an `extends` constraint in a function type argument.
     *
     * @example
     * ```ts
     * expectTypeOf({ a: 1, b: 1 }).toExtend<{ a: number }>()]
     *
     * expectTypeOf({ a: 1 }).not.toExtend<{ b: number }>()
     * ```
     *
     * @param MISMATCH - The mismatch arguments.
     * @returns `true`.
     */
    toExtend<Expected>(...MISMATCH: MismatchArgs<Extends<Actual, Expected>, false>): true;
    toEqualTypeOf: {
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode PositiveExpectTypeOf.branded | .branded.toEqualTypeOf()}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing | The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param value - The value to compare against the expected type.
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected>(value: Expected & AValue, ...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected>, false>): true;
        /**
         * Uses TypeScript's internal technique to check for type "identicalness".
         *
         * It will check if the types are fully equal to each other.
         * It will not fail if two objects have different values, but the same type.
         * It will fail however if an object is missing a property.
         *
         * **_Unexpected failure_**? For a more permissive but less performant
         * check that accommodates for equivalent intersection types,
         * use {@linkcode PositiveExpectTypeOf.branded | .branded.toEqualTypeOf()}.
         * @see {@link https://github.com/mmkal/expect-type#why-is-my-assertion-failing | The documentation for details}.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
         *
         * expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
         *
         * expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected>(...MISMATCH: MismatchArgs<StrictEqualUsingTSInternalIdenticalToOperator<Actual, Expected>, false>): true;
    };
    /**
     * @deprecated Since v1.2.0 - Use either {@linkcode toMatchObjectType} or {@linkcode toExtend} instead
     *
     * - Use {@linkcode toMatchObjectType} to perform a strict check on a subset of your type's keys
     * - Use {@linkcode toExtend} to check if your type extends the expected type
     */
    toMatchTypeOf: {
        /**
         * @deprecated Since v1.2.0 - Use either {@linkcode toMatchObjectType} or {@linkcode toExtend} instead
         *
         * - Use {@linkcode toMatchObjectType} to perform a strict check on a subset of your type's keys
         * - Use {@linkcode toExtend} to check if your type extends the expected type
         *
         * A less strict version of
         * {@linkcode PositiveExpectTypeOf.toEqualTypeOf | .toEqualTypeOf()}
         * that allows for extra properties.
         * This is roughly equivalent to an `extends` constraint
         * in a function type argument.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 2 })
         * ```
         *
         * @param value - The value to compare against the expected type.
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected>(value: Expected & AValue, // reason for `& AValue`: make sure this is only the selected overload when the end-user passes a value for an inferred typearg. The `Mismatch` type does match `AValue`.
        ...MISMATCH: MismatchArgs<Extends<Actual, Expected>, false>): true;
        /**
         * @deprecated Since v1.2.0 - Use either {@linkcode toMatchObjectType} or {@linkcode toExtend} instead
         *
         * - Use {@linkcode toMatchObjectType} to perform a strict check on a subset of your type's keys
         * - Use {@linkcode toExtend} to check if your type extends the expected type
         *
         * A less strict version of
         * {@linkcode PositiveExpectTypeOf.toEqualTypeOf | .toEqualTypeOf()}
         * that allows for extra properties.
         * This is roughly equivalent to an `extends` constraint
         * in a function type argument.
         *
         * @example
         * <caption>Using generic type argument syntax</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf<{ a: number }>()
         * ```
         *
         * @example
         * <caption>Using inferred type syntax by passing a value</caption>
         * ```ts
         * expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 2 })
         * ```
         *
         * @param MISMATCH - The mismatch arguments.
         * @returns `true`.
         */
        <Expected>(...MISMATCH: MismatchArgs<Extends<Actual, Expected>, false>): true;
    };
    /**
     * Checks whether an object has a given property.
     *
     * @example
     * <caption>check that properties exist</caption>
     * ```ts
     * const obj = { a: 1, b: '' }
     *
     * expectTypeOf(obj).toHaveProperty('a')
     *
     * expectTypeOf(obj).not.toHaveProperty('c')
     * ```
     *
     * @param key - The property key to check for.
     * @param MISMATCH - The mismatch arguments.
     * @returns `true`.
     */
    toHaveProperty: <KeyType extends string | number | symbol>(key: KeyType, ...MISMATCH: MismatchArgs<Extends<KeyType, keyof Actual>, false>) => true;
}
/**
 * Represents a conditional type that selects either
 * {@linkcode PositiveExpectTypeOf} or {@linkcode NegativeExpectTypeOf} based
 * on the value of the `positive` property in the {@linkcode Options} type.
 */
export type ExpectTypeOf<Actual, Options extends {
    positive: boolean;
}> = Options['positive'] extends true ? PositiveExpectTypeOf<Actual> : NegativeExpectTypeOf<Actual>;
/**
 * Represents the base interface for the
 * {@linkcode expectTypeOf()} function.
 * Provides a set of assertion methods to perform type checks on a value.
 */
export interface BaseExpectTypeOf<Actual, Options extends {
    positive: boolean;
}> {
    /**
     * Checks whether the type of the value is `any`.
     */
    toBeAny: Scolder<ExpectAny<Actual>, Options>;
    /**
     * Checks whether the type of the value is `unknown`.
     */
    toBeUnknown: Scolder<ExpectUnknown<Actual>, Options>;
    /**
     * Checks whether the type of the value is `never`.
     */
    toBeNever: Scolder<ExpectNever<Actual>, Options>;
    /**
     * Checks whether the type of the value is `function`.
     */
    toBeFunction: Scolder<ExpectFunction<Actual>, Options>;
    /**
     * Checks whether the type of the value is `object`.
     */
    toBeObject: Scolder<ExpectObject<Actual>, Options>;
    /**
     * Checks whether the type of the value is an {@linkcode Array}.
     */
    toBeArray: Scolder<ExpectArray<Actual>, Options>;
    /**
     * Checks whether the type of the value is `number`.
     */
    toBeNumber: Scolder<ExpectNumber<Actual>, Options>;
    /**
     * Checks whether the type of the value is `string`.
     */
    toBeString: Scolder<ExpectString<Actual>, Options>;
    /**
     * Checks whether the type of the value is `boolean`.
     */
    toBeBoolean: Scolder<ExpectBoolean<Actual>, Options>;
    /**
     * Checks whether the type of the value is `void`.
     */
    toBeVoid: Scolder<ExpectVoid<Actual>, Options>;
    /**
     * Checks whether the type of the value is `symbol`.
     */
    toBeSymbol: Scolder<ExpectSymbol<Actual>, Options>;
    /**
     * Checks whether the type of the value is `null`.
     */
    toBeNull: Scolder<ExpectNull<Actual>, Options>;
    /**
     * Checks whether the type of the value is `undefined`.
     */
    toBeUndefined: Scolder<ExpectUndefined<Actual>, Options>;
    /**
     * Checks whether the type of the value is `null` or `undefined`.
     */
    toBeNullable: Scolder<ExpectNullable<Actual>, Options>;
    /**
     * Transform that type of the value via a callback.
     *
     * @param fn - A callback that transforms the input value. Note that this function is not actually called - it's only used for type inference.
     * @returns A new type which can be used for further assertions.
     */
    map: <T>(fn: (value: Actual) => T) => ExpectTypeOf<T, Options>;
    /**
     * Checks whether the type of the value is **`bigint`**.
     *
     * @example
     * <caption>#### Distinguish between **`number`** and **`bigint`**</caption>
     *
     * ```ts
     * import { expectTypeOf } from 'expect-type'
     *
     * const aVeryBigInteger = 10n ** 100n
     *
     * expectTypeOf(aVeryBigInteger).not.toBeNumber()
     *
     * expectTypeOf(aVeryBigInteger).toBeBigInt()
     * ```
     *
     * @since 1.1.0
     */
    toBeBigInt: Scolder<ExpectBigInt<Actual>, Options>;
    /**
     * Checks whether a function is callable with the given parameters.
     *
     * __Note__: You cannot negate this assertion with
     * {@linkcode PositiveExpectTypeOf.not | .not}, you need to use
     * `ts-expect-error` instead.
     *
     * @example
     * ```ts
     * const f = (a: number) => [a, a]
     *
     * expectTypeOf(f).toBeCallableWith(1)
     * ```
     *
     * __Known Limitation__: This assertion will likely fail if you try to use it
     * with a generic function or an overload.
     * @see {@link https://github.com/mmkal/expect-type/issues/50 | This issue} for an example and a workaround.
     *
     * @param args - The arguments to check for callability.
     * @returns `true`.
     */
    toBeCallableWith: Options['positive'] extends true ? <Args extends OverloadParameters<Actual>>(...args: Args) => ExpectTypeOf<OverloadsNarrowedByParameters<Actual, Args>, Options> : never;
    /**
     * Checks whether a class is constructible with the given parameters.
     *
     * @example
     * ```ts
     * expectTypeOf(Date).toBeConstructibleWith('1970')
     *
     * expectTypeOf(Date).toBeConstructibleWith(0)
     *
     * expectTypeOf(Date).toBeConstructibleWith(new Date())
     *
     * expectTypeOf(Date).toBeConstructibleWith()
     * ```
     *
     * @param args - The arguments to check for constructibility.
     * @returns `true`.
     */
    toBeConstructibleWith: Options['positive'] extends true ? <Args extends ConstructorOverloadParameters<Actual>>(...args: Args) => true : never;
    /**
     * Equivalent to the {@linkcode Extract} utility type.
     * Helps narrow down complex union types.
     *
     * @example
     * ```ts
     * type ResponsiveProp<T> = T | T[] | { xs?: T; sm?: T; md?: T }
     *
     * interface CSSProperties {
     *   margin?: string
     *   padding?: string
     * }
     *
     * function getResponsiveProp<T>(_props: T): ResponsiveProp<T> {
     *   return {}
     * }
     *
     * const cssProperties: CSSProperties = { margin: '1px', padding: '2px' }
     *
     * expectTypeOf(getResponsiveProp(cssProperties))
     *   .extract<{ xs?: any }>() // extracts the last type from a union
     *   .toEqualTypeOf<{
     *     xs?: CSSProperties
     *     sm?: CSSProperties
     *     md?: CSSProperties
     *   }>()
     *
     * expectTypeOf(getResponsiveProp(cssProperties))
     *   .extract<unknown[]>() // extracts an array from a union
     *   .toEqualTypeOf<CSSProperties[]>()
     * ```
     *
     * __Note__: If no type is found in the union, it will return `never`.
     *
     * @param v - The type to extract from the union.
     * @returns The type after extracting the type from the union.
     */
    extract: <V>(v?: V) => ExpectTypeOf<Extract<Actual, V>, Options>;
    /**
     * Equivalent to the {@linkcode Exclude} utility type.
     * Removes types from a union.
     *
     * @example
     * ```ts
     * type ResponsiveProp<T> = T | T[] | { xs?: T; sm?: T; md?: T }
     *
     * interface CSSProperties {
     *   margin?: string
     *   padding?: string
     * }
     *
     * function getResponsiveProp<T>(_props: T): ResponsiveProp<T> {
     *   return {}
     * }
     *
     * const cssProperties: CSSProperties = { margin: '1px', padding: '2px' }
     *
     * expectTypeOf(getResponsiveProp(cssProperties))
     *   .exclude<unknown[]>()
     *   .exclude<{ xs?: unknown }>() // or just `.exclude<unknown[] | { xs?: unknown }>()`
     *   .toEqualTypeOf<CSSProperties>()
     * ```
     */
    exclude: <V>(v?: V) => ExpectTypeOf<Exclude<Actual, V>, Options>;
    /**
     * Equivalent to the {@linkcode Pick} utility type.
     * Helps select a subset of properties from an object type.
     *
     * @example
     * ```ts
     * interface Person {
     *   name: string
     *   age: number
     * }
     *
     * expectTypeOf<Person>()
     *   .pick<'name'>()
     *   .toEqualTypeOf<{ name: string }>()
     * ```
     *
     * @param keyToPick - The property key to pick.
     * @returns The type after picking the property.
     */
    pick: <KeyToPick extends keyof Actual>(keyToPick?: KeyToPick) => ExpectTypeOf<Pick<Actual, KeyToPick>, Options>;
    /**
     * Equivalent to the {@linkcode Omit} utility type.
     * Helps remove a subset of properties from an object type.
     *
     * @example
     * ```ts
     * interface Person {
     *   name: string
     *   age: number
     * }
     *
     * expectTypeOf<Person>().omit<'name'>().toEqualTypeOf<{ age: number }>()
     * ```
     *
     * @param keyToOmit - The property key to omit.
     * @returns The type after omitting the property.
     */
    omit: <KeyToOmit extends keyof Actual | (PropertyKey & Record<never, never>)>(keyToOmit?: KeyToOmit) => ExpectTypeOf<Omit<Actual, KeyToOmit>, Options>;
    /**
     * Extracts a certain function argument with `.parameter(number)` call to
     * perform other assertions on it.
     *
     * @example
     * ```ts
     * function foo(a: number, b: string) {
     *   return [a, b]
     * }
     *
     * expectTypeOf(foo).parameter(0).toBeNumber()
     *
     * expectTypeOf(foo).parameter(1).toBeString()
     * ```
     *
     * @param index - The index of the parameter to extract.
     * @returns The extracted parameter type.
     */
    parameter: <Index extends number>(index: Index) => ExpectTypeOf<OverloadParameters<Actual>[Index], Options>;
    /**
     * Equivalent to the {@linkcode Parameters} utility type.
     * Extracts function parameters to perform assertions on its value.
     * Parameters are returned as an array.
     *
     * @example
     * ```ts
     * function noParam() {}
     *
     * function hasParam(s: string) {}
     *
     * expectTypeOf(noParam).parameters.toEqualTypeOf<[]>()
     *
     * expectTypeOf(hasParam).parameters.toEqualTypeOf<[string]>()
     * ```
     */
    parameters: ExpectTypeOf<OverloadParameters<Actual>, Options>;
    /**
     * Equivalent to the {@linkcode ConstructorParameters} utility type.
     * Extracts constructor parameters as an array of values and
     * perform assertions on them with this method.
     *
     * For overloaded constructors it will return a union of all possible parameter-tuples.
     *
     * @example
     * ```ts
     * expectTypeOf(Date).constructorParameters.toEqualTypeOf<
     *   [] | [string | number | Date]
     * >()
     * ```
     */
    constructorParameters: ExpectTypeOf<ConstructorOverloadParameters<Actual>, Options>;
    /**
     * Equivalent to the {@linkcode ThisParameterType} utility type.
     * Extracts the `this` parameter of a function to
     * perform assertions on its value.
     *
     * @example
     * ```ts
     * function greet(this: { name: string }, message: string) {
     *   return `Hello ${this.name}, here's your message: ${message}`
     * }
     *
     * expectTypeOf(greet).thisParameter.toEqualTypeOf<{ name: string }>()
     * ```
     */
    thisParameter: ExpectTypeOf<ThisParameterType<Actual>, Options>;
    /**
     * Equivalent to the {@linkcode InstanceType} utility type.
     * Extracts the instance type of a class to perform assertions on.
     *
     * @example
     * ```ts
     * expectTypeOf(Date).instance.toHaveProperty('toISOString')
     * ```
     */
    instance: Actual extends new (...args: any[]) => infer I ? ExpectTypeOf<I, Options> : never;
    /**
     * Equivalent to the {@linkcode ReturnType} utility type.
     * Extracts the return type of a function.
     *
     * @example
     * ```ts
     * expectTypeOf(() => {}).returns.toBeVoid()
     *
     * expectTypeOf((a: number) => [a, a]).returns.toEqualTypeOf([1, 2])
     * ```
     */
    returns: Actual extends Function ? ExpectTypeOf<OverloadReturnTypes<Actual>, Options> : never;
    /**
     * Extracts resolved value of a Promise,
     * so you can perform other assertions on it.
     *
     * @example
     * ```ts
     * async function asyncFunc() {
     *   return 123
     * }
     *
     * expectTypeOf(asyncFunc).returns.resolves.toBeNumber()
     *
     * expectTypeOf(Promise.resolve('string')).resolves.toBeString()
     * ```
     *
     * Type Equivalent:
     * ```ts
     * type Resolves<PromiseType> = PromiseType extends PromiseLike<infer ResolvedType>
     *   ? ResolvedType
     *   : never
     * ```
     */
    resolves: Actual extends PromiseLike<infer ResolvedType> ? ExpectTypeOf<ResolvedType, Options> : never;
    /**
     * Extracts array item type to perform assertions on.
     *
     * @example
     * ```ts
     * expectTypeOf([1, 2, 3]).items.toEqualTypeOf<number>()
     *
     * expectTypeOf([1, 2, 3]).items.not.toEqualTypeOf<string>()
     * ```
     *
     * __Type Equivalent__:
     * ```ts
     * type Items<ArrayType> = ArrayType extends ArrayLike<infer ItemType>
     *   ? ItemType
     *   : never
     * ```
     */
    items: Actual extends ArrayLike<infer ItemType> ? ExpectTypeOf<ItemType, Options> : never;
    /**
     * Extracts the type guarded by a function to perform assertions on.
     *
     * @example
     * ```ts
     * function isString(v: any): v is string {
     *   return typeof v === 'string'
     * }
     *
     * expectTypeOf(isString).guards.toBeString()
     * ```
     */
    guards: Actual extends (v: any, ...args: any[]) => v is infer T ? ExpectTypeOf<T, Options> : never;
    /**
     * Extracts the type asserted by a function to perform assertions on.
     *
     * @example
     * ```ts
     * function assertNumber(v: any): asserts v is number {
     *   if (typeof v !== 'number')
     *     throw new TypeError('Nope !')
     * }
     *
     * expectTypeOf(assertNumber).asserts.toBeNumber()
     * ```
     */
    asserts: Actual extends (v: any, ...args: any[]) => asserts v is infer T ? unknown extends T ? never : ExpectTypeOf<T, Options> : never;
}
/**
 * Represents a function that allows asserting the expected type of a value.
 */
export type _ExpectTypeOf = {
    /**
     * Asserts the expected type of a value.
     *
     * @param actual - The actual value being asserted.
     * @returns An object representing the expected type assertion.
     */
    <Actual>(actual: Actual): ExpectTypeOf<Actual, {
        positive: true;
        branded: false;
    }>;
    /**
     * Asserts the expected type of a value without providing an actual value.
     *
     * @returns An object representing the expected type assertion.
     */
    <Actual>(): ExpectTypeOf<Actual, {
        positive: true;
        branded: false;
    }>;
};
/**
 * Similar to Jest's `expect`, but with type-awareness.
 * Gives you access to a number of type-matchers that let you make assertions about the
 * form of a reference or generic type parameter.
 *
 * @example
 * ```ts
 * import { foo, bar } from '../foo'
 * import { expectTypeOf } from 'expect-type'
 *
 * test('foo types', () => {
 *   // make sure `foo` has type { a: number }
 *   expectTypeOf(foo).toMatchTypeOf({ a: 1 })
 *   expectTypeOf(foo).toHaveProperty('a').toBeNumber()
 *
 *   // make sure `bar` is a function taking a string:
 *   expectTypeOf(bar).parameter(0).toBeString()
 *   expectTypeOf(bar).returns.not.toBeAny()
 * })
 * ```
 *
 * @description
 * See the [full docs](https://npmjs.com/package/expect-type#documentation) for lots more examples.
 */
export declare const expectTypeOf: _ExpectTypeOf;
