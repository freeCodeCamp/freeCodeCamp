import type { ConstructorOverloadParameters, NumOverloads, OverloadsInfoUnion } from './overloads';
import type { IsNever, IsAny, IsUnknown, ReadonlyKeys, RequiredKeys, OptionalKeys, MutuallyExtends, UnionToTuple } from './utils';
/**
 * Represents a deeply branded type.
 *
 * Recursively walk a type and replace it with a branded type related to the
 * original. This is useful for equality-checking stricter than
 * `A extends B ? B extends A ? true : false : false`, because it detects the
 * difference between a few edge-case types that vanilla TypeScript
 * doesn't by default:
 * - `any` vs `unknown`
 * - `{ readonly a: string }` vs `{ a: string }`
 * - `{ a?: string }` vs `{ a: string | undefined }`
 *
 * __Note__: not very performant for complex types - this should only be used
 * when you know you need it. If doing an equality check, it's almost always
 * better to use {@linkcode StrictEqualUsingTSInternalIdenticalToOperator}.
 */
export type DeepBrand<T> = IsNever<T> extends true ? {
    type: 'never';
} : IsAny<T> extends true ? {
    type: 'any';
} : IsUnknown<T> extends true ? {
    type: 'unknown';
} : T extends string | number | boolean | symbol | bigint | null | undefined | void ? {
    type: 'primitive';
    value: T;
} : T extends new (...args: any[]) => any ? {
    type: 'constructor';
    params: ConstructorOverloadParameters<T>;
    instance: DeepBrand<InstanceType<Extract<T, new (...args: any) => any>>>;
} : T extends (...args: infer P) => infer R ? NumOverloads<T> extends 1 ? {
    type: 'function';
    params: DeepBrand<P>;
    return: DeepBrand<R>;
    this: DeepBrand<ThisParameterType<T>>;
    props: DeepBrand<Omit<T, keyof Function>>;
} : UnionToTuple<OverloadsInfoUnion<T>> extends infer OverloadsTuple ? {
    type: 'overloads';
    overloads: {
        [K in keyof OverloadsTuple]: DeepBrand<OverloadsTuple[K]>;
    };
} : never : T extends any[] ? {
    type: 'array';
    items: {
        [K in keyof T]: T[K];
    };
} : {
    type: 'object';
    properties: {
        [K in keyof T]: DeepBrand<T[K]>;
    };
    readonly: ReadonlyKeys<T>;
    required: RequiredKeys<T>;
    optional: OptionalKeys<T>;
    constructorParams: DeepBrand<ConstructorOverloadParameters<T>>;
};
/**
 * Checks if two types are strictly equal using branding.
 */
export type StrictEqualUsingBranding<Left, Right> = MutuallyExtends<DeepBrand<Left>, DeepBrand<Right>>;
