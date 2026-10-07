import { Primitive } from './aliases-and-guards';
/**
 * Credits to all the people who given inspiration and shared some very useful code snippets
 * in the following github issue: https://github.com/Microsoft/TypeScript/issues/12215
 */
/**
 * SetIntersection (same as Extract)
 * @desc Set intersection of given union types `A` and `B`
 * @example
 *   // Expect: "2" | "3"
 *   SetIntersection<'1' | '2' | '3', '2' | '3' | '4'>;
 *
 *   // Expect: () => void
 *   SetIntersection<string | number | (() => void), Function>;
 */
export declare type SetIntersection<A, B> = A extends B ? A : never;
/**
 * SetDifference (same as Exclude)
 * @desc Set difference of given union types `A` and `B`
 * @example
 *   // Expect: "1"
 *   SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;
 *
 *   // Expect: string | number
 *   SetDifference<string | number | (() => void), Function>;
 */
export declare type SetDifference<A, B> = A extends B ? never : A;
/**
 * SetComplement
 * @desc Set complement of given union types `A` and (it's subset) `A1`
 * @example
 *   // Expect: "1"
 *   SetComplement<'1' | '2' | '3', '2' | '3'>;
 */
export declare type SetComplement<A, A1 extends A> = SetDifference<A, A1>;
/**
 * SymmetricDifference
 * @desc Set difference of union and intersection of given union types `A` and `B`
 * @example
 *   // Expect: "1" | "4"
 *   SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>;
 */
export declare type SymmetricDifference<A, B> = SetDifference<A | B, A & B>;
/**
 * NonUndefined
 * @desc Exclude undefined from set `A`
 * @example
 *   // Expect: "string | null"
 *   SymmetricDifference<string | null | undefined>;
 */
export declare type NonUndefined<A> = A extends undefined ? never : A;
/**
 * NonNullable
 * @desc Exclude undefined and null from set `A`
 * @example
 *   // Expect: "string"
 *   SymmetricDifference<string | null | undefined>;
 */
/**
 * FunctionKeys
 * @desc Get union type of keys that are functions in object type `T`
 * @example
 *  type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};
 *
 *   // Expect: "setName | someFn"
 *   type Keys = FunctionKeys<MixedProps>;
 */
export declare type FunctionKeys<T extends object> = {
    [K in keyof T]-?: NonUndefined<T[K]> extends Function ? K : never;
}[keyof T];
/**
 * NonFunctionKeys
 * @desc Get union type of keys that are non-functions in object type `T`
 * @example
 *   type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};
 *
 *   // Expect: "name | someKey"
 *   type Keys = NonFunctionKeys<MixedProps>;
 */
export declare type NonFunctionKeys<T extends object> = {
    [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K;
}[keyof T];
/**
 * MutableKeys
 * @desc Get union type of keys that are mutable in object type `T`
 * Credit: Matt McCutchen
 * https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript
 * @example
 *   type Props = { readonly foo: string; bar: number };
 *
 *   // Expect: "bar"
 *   type Keys = MutableKeys<Props>;
 */
export declare type MutableKeys<T extends object> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P>;
}[keyof T];
export declare type WritableKeys<T extends object> = MutableKeys<T>;
/**
 * ReadonlyKeys
 * @desc Get union type of keys that are readonly in object type `T`
 * Credit: Matt McCutchen
 * https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript
 * @example
 *   type Props = { readonly foo: string; bar: number };
 *
 *   // Expect: "foo"
 *   type Keys = ReadonlyKeys<Props>;
 */
export declare type ReadonlyKeys<T extends object> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, never, P>;
}[keyof T];
declare type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
/**
 * RequiredKeys
 * @desc Get union type of keys that are required in object type `T`
 * @see https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object
 * @example
 *   type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };
 *
 *   // Expect: "req" | "reqUndef"
 *   type Keys = RequiredKeys<Props>;
 */
export declare type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
/**
 * OptionalKeys
 * @desc Get union type of keys that are optional in object type `T`
 * @see https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object
 * @example
 *   type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };
 *
 *   // Expect: "opt" | "optUndef"
 *   type Keys = OptionalKeys<Props>;
 */
export declare type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];
/**
 * PickByValue
 * @desc From `T` pick a set of properties by value matching `ValueType`.
 * Credit: [Piotr Lewandowski](https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c)
 * @example
 *   type Props = { req: number; reqUndef: number | undefined; opt?: string; };
 *
 *   // Expect: { req: number }
 *   type Props = PickByValue<Props, number>;
 *   // Expect: { req: number; reqUndef: number | undefined; }
 *   type Props = PickByValue<Props, number | undefined>;
 */
export declare type PickByValue<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: T[Key] extends ValueType ? Key : never;
}[keyof T]>;
/**
 * PickByValueExact
 * @desc From `T` pick a set of properties by value matching exact `ValueType`.
 * @example
 *   type Props = { req: number; reqUndef: number | undefined; opt?: string; };
 *
 *   // Expect: { req: number }
 *   type Props = PickByValueExact<Props, number>;
 *   // Expect: { reqUndef: number | undefined; }
 *   type Props = PickByValueExact<Props, number | undefined>;
 */
export declare type PickByValueExact<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: [ValueType] extends [T[Key]] ? [T[Key]] extends [ValueType] ? Key : never : never;
}[keyof T]>;
/**
 * Omit (complements Pick)
 * @desc From `T` remove a set of properties by key `K`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type Props = Omit<Props, 'age'>;
 */
export declare type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>;
/**
 * OmitByValue
 * @desc From `T` remove a set of properties by value matching `ValueType`.
 * Credit: [Piotr Lewandowski](https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c)
 * @example
 *   type Props = { req: number; reqUndef: number | undefined; opt?: string; };
 *
 *   // Expect: { reqUndef: number | undefined; opt?: string; }
 *   type Props = OmitByValue<Props, number>;
 *   // Expect: { opt?: string; }
 *   type Props = OmitByValue<Props, number | undefined>;
 */
export declare type OmitByValue<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: T[Key] extends ValueType ? never : Key;
}[keyof T]>;
/**
 * OmitByValueExact
 * @desc From `T` remove a set of properties by value matching exact `ValueType`.
 * @example
 *   type Props = { req: number; reqUndef: number | undefined; opt?: string; };
 *
 *   // Expect: { reqUndef: number | undefined; opt?: string; }
 *   type Props = OmitByValueExact<Props, number>;
 *   // Expect: { req: number; opt?: string }
 *   type Props = OmitByValueExact<Props, number | undefined>;
 */
export declare type OmitByValueExact<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: [ValueType] extends [T[Key]] ? [T[Key]] extends [ValueType] ? never : Key : Key;
}[keyof T]>;
/**
 * Intersection
 * @desc From `T` pick properties that exist in `U`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { age: number; }
 *   type DuplicateProps = Intersection<Props, DefaultProps>;
 */
export declare type Intersection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>;
/**
 * Diff
 * @desc From `T` remove properties that exist in `U`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type DiffProps = Diff<Props, DefaultProps>;
 */
export declare type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>;
/**
 * Subtract
 * @desc From `T` remove properties that exist in `T1` (`T1` has a subset of the properties of `T`)
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type RestProps = Subtract<Props, DefaultProps>;
 */
export declare type Subtract<T extends T1, T1 extends object> = Pick<T, SetComplement<keyof T, keyof T1>>;
/**
 * Overwrite
 * @desc From `U` overwrite properties to `T`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NewProps = { age: string; other: string };
 *
 *   // Expect: { name: string; age: string; visible: boolean; }
 *   type ReplacedProps = Overwrite<Props, NewProps>;
 */
export declare type Overwrite<T extends object, U extends object, I = Diff<T, U> & Intersection<U, T>> = Pick<I, keyof I>;
/**
 * Assign
 * @desc From `U` assign properties to `T` (just like object assign)
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NewProps = { age: string; other: string };
 *
 *   // Expect: { name: string; age: number; visible: boolean; other: string; }
 *   type ExtendedProps = Assign<Props, NewProps>;
 */
export declare type Assign<T extends object, U extends object, I = Diff<T, U> & Intersection<U, T> & Diff<U, T>> = Pick<I, keyof I>;
/**
 * Exact
 * @desc Create branded object type for exact type matching
 */
export declare type Exact<A extends object> = A & {
    __brand: keyof A;
};
/**
 * Unionize
 * @desc Disjoin object to form union of objects, each with single property
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: { name: string; } | { age: number; } | { visible: boolean; }
 *   type UnionizedType = Unionize<Props>;
 */
export declare type Unionize<T extends object> = {
    [P in keyof T]: {
        [Q in P]: T[P];
    };
}[keyof T];
/**
 * PromiseType
 * @desc Obtain Promise resolve type
 * @example
 *   // Expect: string;
 *   type Response = PromiseType<Promise<string>>;
 */
export declare type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
/**
 * DeepReadonly
 * @desc Readonly that works for deeply nested structure
 * @example
 *   // Expect: {
 *   //   readonly first: {
 *   //     readonly second: {
 *   //       readonly name: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 *   type ReadonlyNestedProps = DeepReadonly<NestedProps>;
 */
export declare type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive ? T : T extends _DeepReadonlyArray<infer U> ? _DeepReadonlyArray<U> : T extends _DeepReadonlyObject<infer V> ? _DeepReadonlyObject<V> : T;
/** @private */
export interface _DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {
}
/** @private */
export declare type _DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};
/**
 * DeepRequired
 * @desc Required that works for deeply nested structure
 * @example
 *   // Expect: {
 *   //   first: {
 *   //     second: {
 *   //       name: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     first?: {
 *       second?: {
 *         name?: string;
 *       };
 *     };
 *   };
 *   type RequiredNestedProps = DeepRequired<NestedProps>;
 */
export declare type DeepRequired<T> = T extends (...args: any[]) => any ? T : T extends any[] ? _DeepRequiredArray<T[number]> : T extends object ? _DeepRequiredObject<T> : T;
/** @private */
export interface _DeepRequiredArray<T> extends Array<DeepRequired<NonUndefined<T>>> {
}
/** @private */
export declare type _DeepRequiredObject<T> = {
    [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>;
};
/**
 * DeepNonNullable
 * @desc NonNullable that works for deeply nested structure
 * @example
 *   // Expect: {
 *   //   first: {
 *   //     second: {
 *   //       name: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     first?: null | {
 *       second?: null | {
 *         name?: string | null |
 *         undefined;
 *       };
 *     };
 *   };
 *   type RequiredNestedProps = DeepNonNullable<NestedProps>;
 */
export declare type DeepNonNullable<T> = T extends (...args: any[]) => any ? T : T extends any[] ? _DeepNonNullableArray<T[number]> : T extends object ? _DeepNonNullableObject<T> : T;
/** @private */
export interface _DeepNonNullableArray<T> extends Array<DeepNonNullable<NonNullable<T>>> {
}
/** @private */
export declare type _DeepNonNullableObject<T> = {
    [P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>>;
};
/**
 * DeepPartial
 * @desc Partial that works for deeply nested structure
 * @example
 *   // Expect: {
 *   //   first?: {
 *   //     second?: {
 *   //       name?: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 *   type PartialNestedProps = DeepPartial<NestedProps>;
 */
export declare type DeepPartial<T> = {
    [P in keyof T]?: _DeepPartial<T[P]>;
};
/** @private */
export declare type _DeepPartial<T> = T extends Function ? T : T extends Array<infer U> ? _DeepPartialArray<U> : T extends object ? DeepPartial<T> : T | undefined;
/** @private */
export interface _DeepPartialArray<T> extends Array<_DeepPartial<T>> {
}
/**
 * Brand
 * @desc Define nominal type of U based on type of T. Similar to Opaque types in Flow.
 * @example
 *   type USD = Brand<number, "USD">
 *   type EUR = Brand<number, "EUR">
 *
 *   const tax = 5 as USD;
 *   const usd = 10 as USD;
 *   const eur = 10 as EUR;
 *
 *   function gross(net: USD): USD {
 *     return (net + tax) as USD;
 *   }
 *
 *   // Expect: No compile error
 *   gross(usd);
 *   // Expect: Compile error (Type '"EUR"' is not assignable to type '"USD"'.)
 *   gross(eur);
 */
export declare type Brand<T, U> = T & {
    __brand: U;
};
/**
 * Optional
 * @desc From `T` make a set of properties by key `K` become optional
 * @example
 *    type Props = {
 *      name: string;
 *      age: number;
 *      visible: boolean;
 *    };
 *
 *    // Expect: { name?: string; age?: number; visible?: boolean; }
 *    type Props = Optional<Props>;
 *
 *    // Expect: { name: string; age?: number; visible?: boolean; }
 *    type Props = Optional<Props, 'age' | 'visible'>;
 */
export declare type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
/**
 * ValuesType
 * @desc Get the union type of all the values in an object, array or array-like type `T`
 * @example
 *    type Props = { name: string; age: number; visible: boolean };
 *    // Expect: string | number | boolean
 *    type PropsValues = ValuesType<Props>;
 *
 *    type NumberArray = number[];
 *    // Expect: number
 *    type NumberItems = ValuesType<NumberArray>;
 *
 *    type ReadonlySymbolArray = readonly symbol[];
 *    // Expect: symbol
 *    type SymbolItems = ValuesType<ReadonlySymbolArray>;
 *
 *    type NumberTuple = [1, 2];
 *    // Expect: 1 | 2
 *    type NumberUnion = ValuesType<NumberTuple>;
 *
 *    type ReadonlyNumberTuple = readonly [1, 2];
 *    // Expect: 1 | 2
 *    type AnotherNumberUnion = ValuesType<NumberTuple>;
 *
 *    type BinaryArray = Uint8Array;
 *    // Expect: number
 *    type BinaryItems = ValuesType<BinaryArray>;
 */
export declare type ValuesType<T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>> = T extends ReadonlyArray<any> ? T[number] : T extends ArrayLike<any> ? T[number] : T extends object ? T[keyof T] : never;
/**
 * Required
 * @desc From `T` make a set of properties by key `K` become required
 * @example
 *    type Props = {
 *      name?: string;
 *      age?: number;
 *      visible?: boolean;
 *    };
 *
 *    // Expect: { name: string; age: number; visible: boolean; }
 *    type Props = Required<Props>;
 *
 *    // Expect: { name?: string; age: number; visible: boolean; }
 *    type Props = Required<Props, 'age' | 'visible'>;
 */
export declare type AugmentedRequired<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Required<Pick<T, K>>;
/**
 * UnionToIntersection
 * @desc Get intersection type given union type `U`
 * Credit: jcalz
 * @see https://stackoverflow.com/a/50375286/7381355
 * @example
 *   // Expect: { name: string } & { age: number } & { visible: boolean }
 *   UnionToIntersection<{ name: string } | { age: number } | { visible: boolean }>
 */
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
/**
 * Mutable
 * @desc From `T` make all properties become mutable
 * @example
 *    type Props = {
 *      readonly name: string;
 *      readonly age: number;
 *      readonly visible: boolean;
 *    };
 *
 *    // Expect: { name: string; age: number; visible: boolean; }
 *    Mutable<Props>;
 */
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare type Writable<T> = Mutable<T>;
export {};
