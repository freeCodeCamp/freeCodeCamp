import type { StrictEqualUsingBranding } from './branding';
import type { And, Extends, ExtendsExcludingAnyOrNever, IsAny, IsNever, IsUnknown, Not, OptionalKeys, UsefulKeys } from './utils';
/**
 * Determines the printable type representation for a given type.
 */
export type PrintType<T> = IsUnknown<T> extends true ? 'unknown' : IsNever<T> extends true ? 'never' : IsAny<T> extends true ? never : boolean extends T ? 'boolean' : T extends boolean ? `literal boolean: ${T}` : string extends T ? 'string' : T extends string ? `literal string: ${T}` : number extends T ? 'number' : T extends number ? `literal number: ${T}` : bigint extends T ? 'bigint' : T extends bigint ? `literal bigint: ${T}` : T extends null ? 'null' : T extends undefined ? 'undefined' : T extends (...args: any[]) => any ? 'function' : '...';
/**
 * Helper for showing end-user a hint why their type assertion is failing.
 * This swaps "leaf" types with a literal message about what the actual and
 * expected types are. Needs to check for `Not<IsAny<Actual>>` because
 * otherwise `LeafTypeOf<Actual>` returns `never`, which extends everything 🤔
 */
export type MismatchInfo<Actual, Expected> = And<[Extends<PrintType<Actual>, '...'>, Not<IsAny<Actual>>]> extends true ? And<[Extends<any[], Actual>, Extends<any[], Expected>]> extends true ? Array<MismatchInfo<Extract<Actual, any[]>[number], Extract<Expected, any[]>[number]>> : Optionalify<{
    [K in UsefulKeys<Actual> | UsefulKeys<Expected>]: MismatchInfo<K extends keyof Actual ? Actual[K] : never, K extends keyof Expected ? Expected[K] : never>;
}, OptionalKeys<Expected>> : StrictEqualUsingBranding<Actual, Expected> extends true ? Actual : `Expected: ${PrintType<Expected>}, Actual: ${PrintType<Exclude<Actual, Expected>>}`;
/**
 * Helper for making some keys of a type optional. Only useful so far for `MismatchInfo` - it makes sure we
 * don't get bogus errors about optional properties mismatching, when actually it's something else that's wrong.
 *
 * - Note: this helper is a no-op if there are no optional keys in the type.
 */
export type Optionalify<T, TOptionalKeys> = [TOptionalKeys] extends [never] ? T : ({
    [K in Exclude<keyof T, TOptionalKeys>]: T[K];
} & {
    [K in Extract<keyof T, TOptionalKeys>]?: T[K];
}) extends infer X ? {
    [K in keyof X]: X[K];
} : never;
/**
 * @internal
 */
declare const inverted: unique symbol;
/**
 * @internal
 */
type Inverted<T> = {
    [inverted]: T;
};
/**
 * @internal
 */
declare const expectNull: unique symbol;
export type ExpectNull<T> = {
    [expectNull]: T;
    result: ExtendsExcludingAnyOrNever<T, null>;
};
/**
 * @internal
 */
declare const expectUndefined: unique symbol;
export type ExpectUndefined<T> = {
    [expectUndefined]: T;
    result: ExtendsExcludingAnyOrNever<T, undefined>;
};
/**
 * @internal
 */
declare const expectNumber: unique symbol;
export type ExpectNumber<T> = {
    [expectNumber]: T;
    result: ExtendsExcludingAnyOrNever<T, number>;
};
/**
 * @internal
 */
declare const expectString: unique symbol;
export type ExpectString<T> = {
    [expectString]: T;
    result: ExtendsExcludingAnyOrNever<T, string>;
};
/**
 * @internal
 */
declare const expectBoolean: unique symbol;
export type ExpectBoolean<T> = {
    [expectBoolean]: T;
    result: ExtendsExcludingAnyOrNever<T, boolean>;
};
/**
 * @internal
 */
declare const expectVoid: unique symbol;
export type ExpectVoid<T> = {
    [expectVoid]: T;
    result: ExtendsExcludingAnyOrNever<T, void>;
};
/**
 * @internal
 */
declare const expectFunction: unique symbol;
export type ExpectFunction<T> = {
    [expectFunction]: T;
    result: ExtendsExcludingAnyOrNever<T, (...args: any[]) => any>;
};
/**
 * @internal
 */
declare const expectObject: unique symbol;
export type ExpectObject<T> = {
    [expectObject]: T;
    result: ExtendsExcludingAnyOrNever<T, object>;
};
/**
 * @internal
 */
declare const expectArray: unique symbol;
export type ExpectArray<T> = {
    [expectArray]: T;
    result: ExtendsExcludingAnyOrNever<T, any[]>;
};
/**
 * @internal
 */
declare const expectSymbol: unique symbol;
export type ExpectSymbol<T> = {
    [expectSymbol]: T;
    result: ExtendsExcludingAnyOrNever<T, symbol>;
};
/**
 * @internal
 */
declare const expectAny: unique symbol;
export type ExpectAny<T> = {
    [expectAny]: T;
    result: IsAny<T>;
};
/**
 * @internal
 */
declare const expectUnknown: unique symbol;
export type ExpectUnknown<T> = {
    [expectUnknown]: T;
    result: IsUnknown<T>;
};
/**
 * @internal
 */
declare const expectNever: unique symbol;
export type ExpectNever<T> = {
    [expectNever]: T;
    result: IsNever<T>;
};
/**
 * @internal
 */
declare const expectNullable: unique symbol;
export type ExpectNullable<T> = {
    [expectNullable]: T;
    result: Not<StrictEqualUsingBranding<T, NonNullable<T>>>;
};
/**
 * @internal
 */
declare const expectBigInt: unique symbol;
export type ExpectBigInt<T> = {
    [expectBigInt]: T;
    result: ExtendsExcludingAnyOrNever<T, bigint>;
};
/**
 * Checks if the result of an expecter matches the specified options, and
 * resolves to a fairly readable error message if not.
 */
export type Scolder<Expecter extends {
    result: boolean;
}, Options extends {
    positive: boolean;
}> = Expecter['result'] extends Options['positive'] ? () => true : Options['positive'] extends true ? Expecter : Inverted<Expecter>;
export {};
