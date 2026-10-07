/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js";
import type * as Types from "./Types.js";
import type { Unify } from "./Unify.js";
/**
 * @since 2.0.0
 */
export declare namespace Case {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Constructor<A, Tag extends keyof A = never> {
        (args: Types.VoidIfEmpty<{
            readonly [P in keyof A as P extends Tag ? never : P]: A[P];
        }>): A;
    }
}
/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Data, Equal } from "effect"
 *
 * const alice = Data.struct({ name: "Alice", age: 30 })
 *
 * const bob = Data.struct({ name: "Bob", age: 40 })
 *
 * assert.deepStrictEqual(Equal.equals(alice, alice), true)
 * assert.deepStrictEqual(Equal.equals(alice, Data.struct({ name: "Alice", age: 30 })), true)
 *
 * assert.deepStrictEqual(Equal.equals(alice, { name: "Alice", age: 30 }), false)
 * assert.deepStrictEqual(Equal.equals(alice, bob), false)
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const struct: <A extends Record<string, any>>(a: A) => {
    readonly [P in keyof A]: A[P];
};
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const unsafeStruct: <A extends Record<string, any>>(as: A) => { readonly [P in keyof A]: A[P]; };
/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Data, Equal } from "effect"
 *
 * const alice = Data.tuple("Alice", 30)
 *
 * const bob = Data.tuple("Bob", 40)
 *
 * assert.deepStrictEqual(Equal.equals(alice, alice), true)
 * assert.deepStrictEqual(Equal.equals(alice, Data.tuple("Alice", 30)), true)
 *
 * assert.deepStrictEqual(Equal.equals(alice, ["Alice", 30]), false)
 * assert.deepStrictEqual(Equal.equals(alice, bob), false)
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const tuple: <As extends ReadonlyArray<any>>(...as: As) => Readonly<As>;
/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Data, Equal } from "effect"
 *
 * const alice = Data.struct({ name: "Alice", age: 30 })
 * const bob = Data.struct({ name: "Bob", age: 40 })
 *
 * const persons = Data.array([alice, bob])
 *
 * assert.deepStrictEqual(
 *   Equal.equals(
 *     persons,
 *     Data.array([
 *       Data.struct({ name: "Alice", age: 30 }),
 *       Data.struct({ name: "Bob", age: 40 })
 *     ])
 *   ),
 *   true
 * )
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const array: <As extends ReadonlyArray<any>>(as: As) => Readonly<As>;
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const unsafeArray: <As extends ReadonlyArray<any>>(as: As) => Readonly<As>;
declare const _case: <A>() => Case.Constructor<A>;
export { 
/**
 * Provides a constructor for the specified `Case`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Data, Equal } from "effect"
 *
 * interface Person {
 *   readonly name: string
 * }
 *
 * // Creating a constructor for the specified Case
 * const Person = Data.case<Person>()
 *
 * // Creating instances of Person
 * const mike1 = Person({ name: "Mike" })
 * const mike2 = Person({ name: "Mike" })
 * const john = Person({ name: "John" })
 *
 * // Checking equality
 * assert.deepStrictEqual(Equal.equals(mike1, mike2), true)
 * assert.deepStrictEqual(Equal.equals(mike1, john), false)
 *
 * ```
 * @since 2.0.0
 * @category constructors
 */
_case as case };
/**
 * Provides a tagged constructor for the specified `Case`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Data } from "effect"
 *
 * interface Person {
 *   readonly _tag: "Person" // the tag
 *   readonly name: string
 * }
 *
 * const Person = Data.tagged<Person>("Person")
 *
 * const mike = Person({ name: "Mike" })
 *
 * assert.deepEqual(mike, { _tag: "Person", name: "Mike" })
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const tagged: <A extends {
    readonly _tag: string;
}>(tag: A["_tag"]) => Case.Constructor<A, "_tag">;
/**
 * Provides a constructor for a Case Class.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Data, Equal } from "effect"
 *
 * class Person extends Data.Class<{ readonly name: string }> {}
 *
 * // Creating instances of Person
 * const mike1 = new Person({ name: "Mike" })
 * const mike2 = new Person({ name: "Mike" })
 * const john = new Person({ name: "John" })
 *
 * // Checking equality
 * assert.deepStrictEqual(Equal.equals(mike1, mike2), true)
 * assert.deepStrictEqual(Equal.equals(mike1, john), false)
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const Class: new <A extends Record<string, any> = {}>(args: Types.VoidIfEmpty<{
    readonly [P in keyof A]: A[P];
}>) => Readonly<A>;
/**
 * Provides a Tagged constructor for a Case Class.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Data, Equal } from "effect"
 *
 * class Person extends Data.TaggedClass("Person")<{ readonly name: string }> {}
 *
 * // Creating instances of Person
 * const mike1 = new Person({ name: "Mike" })
 * const mike2 = new Person({ name: "Mike" })
 * const john = new Person({ name: "John" })
 *
 * // Checking equality
 * assert.deepStrictEqual(Equal.equals(mike1, mike2), true)
 * assert.deepStrictEqual(Equal.equals(mike1, john), false)
 *
 * assert.deepStrictEqual(mike1._tag, "Person")
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const TaggedClass: <Tag extends string>(tag: Tag) => new <A extends Record<string, any> = {}>(args: Types.VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
    readonly _tag: Tag;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Structural: new <A>(args: Types.VoidIfEmpty<{
    readonly [P in keyof A]: A[P];
}>) => {};
/**
 * Create a tagged enum data type, which is a union of `Data` structs.
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Data } from "effect"
 *
 * type HttpError = Data.TaggedEnum<{
 *   BadRequest: { readonly status: 400, readonly message: string }
 *   NotFound: { readonly status: 404, readonly message: string }
 * }>
 *
 * // Equivalent to:
 * type HttpErrorPlain =
 *   | {
 *     readonly _tag: "BadRequest"
 *     readonly status: 400
 *     readonly message: string
 *   }
 *   | {
 *     readonly _tag: "NotFound"
 *     readonly status: 404
 *     readonly message: string
 *   }
 * ```
 *
 * @since 2.0.0
 * @category models
 */
export type TaggedEnum<A extends Record<string, Record<string, any>> & UntaggedChildren<A>> = keyof A extends infer Tag ? Tag extends keyof A ? Types.Simplify<{
    readonly _tag: Tag;
} & {
    readonly [K in keyof A[Tag]]: A[Tag][K];
}> : never : never;
type ChildrenAreTagged<A> = keyof A extends infer K ? K extends keyof A ? "_tag" extends keyof A[K] ? true : false : never : never;
type UntaggedChildren<A> = true extends ChildrenAreTagged<A> ? "It looks like you're trying to create a tagged enum, but one or more of its members already has a `_tag` property." : unknown;
/**
 * @since 2.0.0
 */
export declare namespace TaggedEnum {
    /**
     * @since 2.0.0
     * @category models
     */
    interface WithGenerics<Count extends number> {
        readonly taggedEnum: {
            readonly _tag: string;
        };
        readonly numberOfGenerics: Count;
        readonly A: unknown;
        readonly B: unknown;
        readonly C: unknown;
        readonly D: unknown;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    type Kind<Z extends WithGenerics<number>, A = unknown, B = unknown, C = unknown, D = unknown> = (Z & {
        readonly A: A;
        readonly B: B;
        readonly C: C;
        readonly D: D;
    })["taggedEnum"];
    /**
     * @since 2.0.0
     */
    type Args<A extends {
        readonly _tag: string;
    }, K extends A["_tag"], E = Extract<A, {
        readonly _tag: K;
    }>> = {
        readonly [K in keyof E as K extends "_tag" ? never : K]: E[K];
    } extends infer T ? Types.VoidIfEmpty<T> : never;
    /**
     * @since 2.0.0
     */
    type Value<A extends {
        readonly _tag: string;
    }, K extends A["_tag"]> = Extract<A, {
        readonly _tag: K;
    }>;
    /**
     * @since 3.1.0
     */
    type Constructor<A extends {
        readonly _tag: string;
    }> = Types.Simplify<{
        readonly [Tag in A["_tag"]]: Case.Constructor<Extract<A, {
            readonly _tag: Tag;
        }>, "_tag">;
    } & {
        readonly $is: <Tag extends A["_tag"]>(tag: Tag) => (u: unknown) => u is Extract<A, {
            readonly _tag: Tag;
        }>;
        readonly $match: {
            <const Cases extends {
                readonly [Tag in A["_tag"]]: (args: Extract<A, {
                    readonly _tag: Tag;
                }>) => any;
            }>(cases: Cases & {
                [K in Exclude<keyof Cases, A["_tag"]>]: never;
            }): (value: A) => Unify<ReturnType<Cases[A["_tag"]]>>;
            <const Cases extends {
                readonly [Tag in A["_tag"]]: (args: Extract<A, {
                    readonly _tag: Tag;
                }>) => any;
            }>(value: A, cases: Cases & {
                [K in Exclude<keyof Cases, A["_tag"]>]: never;
            }): Unify<ReturnType<Cases[A["_tag"]]>>;
        };
    }>;
    /**
     * @since 3.2.0
     */
    interface GenericMatchers<Z extends WithGenerics<number>> {
        readonly $is: <Tag extends Z["taggedEnum"]["_tag"]>(tag: Tag) => {
            <T extends TaggedEnum.Kind<Z, any, any, any, any>>(u: T): u is T & {
                readonly _tag: Tag;
            };
            (u: unknown): u is Extract<TaggedEnum.Kind<Z>, {
                readonly _tag: Tag;
            }>;
        };
        readonly $match: {
            <A, B, C, D, Cases extends {
                readonly [Tag in Z["taggedEnum"]["_tag"]]: (args: Extract<TaggedEnum.Kind<Z, A, B, C, D>, {
                    readonly _tag: Tag;
                }>) => any;
            }>(cases: Cases & {
                [K in Exclude<keyof Cases, Z["taggedEnum"]["_tag"]>]: never;
            }): (self: TaggedEnum.Kind<Z, A, B, C, D>) => Unify<ReturnType<Cases[Z["taggedEnum"]["_tag"]]>>;
            <A, B, C, D, Cases extends {
                readonly [Tag in Z["taggedEnum"]["_tag"]]: (args: Extract<TaggedEnum.Kind<Z, A, B, C, D>, {
                    readonly _tag: Tag;
                }>) => any;
            }>(self: TaggedEnum.Kind<Z, A, B, C, D>, cases: Cases & {
                [K in Exclude<keyof Cases, Z["taggedEnum"]["_tag"]>]: never;
            }): Unify<ReturnType<Cases[Z["taggedEnum"]["_tag"]]>>;
        };
    }
}
/**
 * Create a constructor for a tagged union of `Data` structs.
 *
 * You can also pass a `TaggedEnum.WithGenerics` if you want to add generics to
 * the constructor.
 *
 * @example
 * ```ts
 * import { Data } from "effect"
 *
 * const { BadRequest, NotFound } = Data.taggedEnum<
 *   | { readonly _tag: "BadRequest"; readonly status: 400; readonly message: string }
 *   | { readonly _tag: "NotFound"; readonly status: 404; readonly message: string }
 * >()
 *
 * const notFound = NotFound({ status: 404, message: "Not Found" })
 * ```
 *
 * @example
 * import { Data } from "effect"
 *
 * type MyResult<E, A> = Data.TaggedEnum<{
 *   Failure: { readonly error: E }
 *   Success: { readonly value: A }
 * }>
 * interface MyResultDefinition extends Data.TaggedEnum.WithGenerics<2> {
 *   readonly taggedEnum: MyResult<this["A"], this["B"]>
 * }
 * const { Failure, Success } = Data.taggedEnum<MyResultDefinition>()
 *
 * const success = Success({ value: 1 })
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const taggedEnum: {
    /**
     * Create a constructor for a tagged union of `Data` structs.
     *
     * You can also pass a `TaggedEnum.WithGenerics` if you want to add generics to
     * the constructor.
     *
     * @example
     * ```ts
     * import { Data } from "effect"
     *
     * const { BadRequest, NotFound } = Data.taggedEnum<
     *   | { readonly _tag: "BadRequest"; readonly status: 400; readonly message: string }
     *   | { readonly _tag: "NotFound"; readonly status: 404; readonly message: string }
     * >()
     *
     * const notFound = NotFound({ status: 404, message: "Not Found" })
     * ```
     *
     * @example
     * import { Data } from "effect"
     *
     * type MyResult<E, A> = Data.TaggedEnum<{
     *   Failure: { readonly error: E }
     *   Success: { readonly value: A }
     * }>
     * interface MyResultDefinition extends Data.TaggedEnum.WithGenerics<2> {
     *   readonly taggedEnum: MyResult<this["A"], this["B"]>
     * }
     * const { Failure, Success } = Data.taggedEnum<MyResultDefinition>()
     *
     * const success = Success({ value: 1 })
     *
     * @category constructors
     * @since 2.0.0
     */
    <Z extends TaggedEnum.WithGenerics<1>>(): Types.Simplify<{
        readonly [Tag in Z["taggedEnum"]["_tag"]]: <A>(args: TaggedEnum.Args<TaggedEnum.Kind<Z, A>, Tag, Extract<TaggedEnum.Kind<Z, A>, {
            readonly _tag: Tag;
        }>>) => TaggedEnum.Value<TaggedEnum.Kind<Z, A>, Tag>;
    } & TaggedEnum.GenericMatchers<Z>>;
    /**
     * Create a constructor for a tagged union of `Data` structs.
     *
     * You can also pass a `TaggedEnum.WithGenerics` if you want to add generics to
     * the constructor.
     *
     * @example
     * ```ts
     * import { Data } from "effect"
     *
     * const { BadRequest, NotFound } = Data.taggedEnum<
     *   | { readonly _tag: "BadRequest"; readonly status: 400; readonly message: string }
     *   | { readonly _tag: "NotFound"; readonly status: 404; readonly message: string }
     * >()
     *
     * const notFound = NotFound({ status: 404, message: "Not Found" })
     * ```
     *
     * @example
     * import { Data } from "effect"
     *
     * type MyResult<E, A> = Data.TaggedEnum<{
     *   Failure: { readonly error: E }
     *   Success: { readonly value: A }
     * }>
     * interface MyResultDefinition extends Data.TaggedEnum.WithGenerics<2> {
     *   readonly taggedEnum: MyResult<this["A"], this["B"]>
     * }
     * const { Failure, Success } = Data.taggedEnum<MyResultDefinition>()
     *
     * const success = Success({ value: 1 })
     *
     * @category constructors
     * @since 2.0.0
     */
    <Z extends TaggedEnum.WithGenerics<2>>(): Types.Simplify<{
        readonly [Tag in Z["taggedEnum"]["_tag"]]: <A, B>(args: TaggedEnum.Args<TaggedEnum.Kind<Z, A, B>, Tag, Extract<TaggedEnum.Kind<Z, A, B>, {
            readonly _tag: Tag;
        }>>) => TaggedEnum.Value<TaggedEnum.Kind<Z, A, B>, Tag>;
    } & TaggedEnum.GenericMatchers<Z>>;
    /**
     * Create a constructor for a tagged union of `Data` structs.
     *
     * You can also pass a `TaggedEnum.WithGenerics` if you want to add generics to
     * the constructor.
     *
     * @example
     * ```ts
     * import { Data } from "effect"
     *
     * const { BadRequest, NotFound } = Data.taggedEnum<
     *   | { readonly _tag: "BadRequest"; readonly status: 400; readonly message: string }
     *   | { readonly _tag: "NotFound"; readonly status: 404; readonly message: string }
     * >()
     *
     * const notFound = NotFound({ status: 404, message: "Not Found" })
     * ```
     *
     * @example
     * import { Data } from "effect"
     *
     * type MyResult<E, A> = Data.TaggedEnum<{
     *   Failure: { readonly error: E }
     *   Success: { readonly value: A }
     * }>
     * interface MyResultDefinition extends Data.TaggedEnum.WithGenerics<2> {
     *   readonly taggedEnum: MyResult<this["A"], this["B"]>
     * }
     * const { Failure, Success } = Data.taggedEnum<MyResultDefinition>()
     *
     * const success = Success({ value: 1 })
     *
     * @category constructors
     * @since 2.0.0
     */
    <Z extends TaggedEnum.WithGenerics<3>>(): Types.Simplify<{
        readonly [Tag in Z["taggedEnum"]["_tag"]]: <A, B, C>(args: TaggedEnum.Args<TaggedEnum.Kind<Z, A, B, C>, Tag, Extract<TaggedEnum.Kind<Z, A, B, C>, {
            readonly _tag: Tag;
        }>>) => TaggedEnum.Value<TaggedEnum.Kind<Z, A, B, C>, Tag>;
    } & TaggedEnum.GenericMatchers<Z>>;
    /**
     * Create a constructor for a tagged union of `Data` structs.
     *
     * You can also pass a `TaggedEnum.WithGenerics` if you want to add generics to
     * the constructor.
     *
     * @example
     * ```ts
     * import { Data } from "effect"
     *
     * const { BadRequest, NotFound } = Data.taggedEnum<
     *   | { readonly _tag: "BadRequest"; readonly status: 400; readonly message: string }
     *   | { readonly _tag: "NotFound"; readonly status: 404; readonly message: string }
     * >()
     *
     * const notFound = NotFound({ status: 404, message: "Not Found" })
     * ```
     *
     * @example
     * import { Data } from "effect"
     *
     * type MyResult<E, A> = Data.TaggedEnum<{
     *   Failure: { readonly error: E }
     *   Success: { readonly value: A }
     * }>
     * interface MyResultDefinition extends Data.TaggedEnum.WithGenerics<2> {
     *   readonly taggedEnum: MyResult<this["A"], this["B"]>
     * }
     * const { Failure, Success } = Data.taggedEnum<MyResultDefinition>()
     *
     * const success = Success({ value: 1 })
     *
     * @category constructors
     * @since 2.0.0
     */
    <Z extends TaggedEnum.WithGenerics<4>>(): Types.Simplify<{
        readonly [Tag in Z["taggedEnum"]["_tag"]]: <A, B, C, D>(args: TaggedEnum.Args<TaggedEnum.Kind<Z, A, B, C, D>, Tag, Extract<TaggedEnum.Kind<Z, A, B, C, D>, {
            readonly _tag: Tag;
        }>>) => TaggedEnum.Value<TaggedEnum.Kind<Z, A, B, C, D>, Tag>;
    } & TaggedEnum.GenericMatchers<Z>>;
    /**
     * Create a constructor for a tagged union of `Data` structs.
     *
     * You can also pass a `TaggedEnum.WithGenerics` if you want to add generics to
     * the constructor.
     *
     * @example
     * ```ts
     * import { Data } from "effect"
     *
     * const { BadRequest, NotFound } = Data.taggedEnum<
     *   | { readonly _tag: "BadRequest"; readonly status: 400; readonly message: string }
     *   | { readonly _tag: "NotFound"; readonly status: 404; readonly message: string }
     * >()
     *
     * const notFound = NotFound({ status: 404, message: "Not Found" })
     * ```
     *
     * @example
     * import { Data } from "effect"
     *
     * type MyResult<E, A> = Data.TaggedEnum<{
     *   Failure: { readonly error: E }
     *   Success: { readonly value: A }
     * }>
     * interface MyResultDefinition extends Data.TaggedEnum.WithGenerics<2> {
     *   readonly taggedEnum: MyResult<this["A"], this["B"]>
     * }
     * const { Failure, Success } = Data.taggedEnum<MyResultDefinition>()
     *
     * const success = Success({ value: 1 })
     *
     * @category constructors
     * @since 2.0.0
     */
    <A extends {
        readonly _tag: string;
    }>(): TaggedEnum.Constructor<A>;
};
/**
 * Provides a constructor for a Case Class.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const Error: new <A extends Record<string, any> = {}>(args: Types.VoidIfEmpty<{
    readonly [P in keyof A]: A[P];
}>) => Cause.YieldableError & Readonly<A>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const TaggedError: <Tag extends string>(tag: Tag) => new <A extends Record<string, any> = {}>(args: Types.VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Cause.YieldableError & {
    readonly _tag: Tag;
} & Readonly<A>;
//# sourceMappingURL=Data.d.ts.map