/**
 * This module provides a data structure called `Context` that can be used for dependency injection in effectful
 * programs. It is essentially a table mapping `Tag`s to their implementations (called `Service`s), and can be used to
 * manage dependencies in a type-safe way. The `Context` data structure is essentially a way of providing access to a set
 * of related services that can be passed around as a single unit. This module provides functions to create, modify, and
 * query the contents of a `Context`, as well as a number of utility types for working with tags and services.
 *
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js"
import type { Equal } from "./Equal.js"
import type { LazyArg } from "./Function.js"
import type { Inspectable } from "./Inspectable.js"
import * as internal from "./internal/context.js"
import type { Option } from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type * as Types from "./Types.js"
import type * as Unify from "./Unify.js"

/**
 * @since 2.0.0
 * @category symbol
 */
export const TagTypeId: unique symbol = internal.TagTypeId

/**
 * @since 2.0.0
 * @category symbol
 */
export type TagTypeId = typeof TagTypeId

/**
 * @since 3.5.9
 * @category models
 */
export interface Tag<in out Id, in out Value> extends Pipeable, Inspectable, ReadonlyTag<Id, Value> {
  readonly _op: "Tag"
  readonly Service: Value
  readonly Identifier: Id
  readonly [TagTypeId]: {
    readonly _Service: Types.Invariant<Value>
    readonly _Identifier: Types.Invariant<Id>
  }
  of(self: Value): Value
  context(self: Value): Context<Id>
  readonly stack?: string | undefined
  readonly key: string
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: TagUnify<this>
  [Unify.ignoreSymbol]?: TagUnifyIgnore
}

/**
 * @since 3.5.9
 * @category models
 */
export interface ReadonlyTag<in out Id, out Value> extends Pipeable, Inspectable, Effect.Effect<Value, never, Id> {
  readonly _op: "Tag"
  readonly Service: Value
  readonly Identifier: Id
  readonly [TagTypeId]: {
    readonly _Service: Types.Covariant<Value>
    readonly _Identifier: Types.Invariant<Id>
  }
  readonly stack?: string | undefined
  readonly key: string
}

/**
 * @since 3.11.0
 * @category symbol
 */
export const ReferenceTypeId: unique symbol = internal.ReferenceTypeId

/**
 * @since 3.11.0
 * @category symbol
 */
export type ReferenceTypeId = typeof ReferenceTypeId

/**
 * @since 3.11.0
 * @category models
 */
export interface Reference<in out Id, in out Value> extends Pipeable, Inspectable {
  readonly [ReferenceTypeId]: ReferenceTypeId
  readonly defaultValue: () => Value

  readonly _op: "Tag"
  readonly Service: Value
  readonly Identifier: Id
  readonly [TagTypeId]: {
    readonly _Service: Types.Invariant<Value>
    readonly _Identifier: Types.Invariant<Id>
  }
  of(self: Value): Value
  context(self: Value): Context<Id>
  readonly stack?: string | undefined
  readonly key: string
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: TagUnify<this>
  [Unify.ignoreSymbol]?: TagUnifyIgnore
}

/**
 * @since 2.0.0
 * @category models
 */
export interface TagClassShape<Id, Shape> {
  readonly [TagTypeId]: TagTypeId
  readonly Type: Shape
  readonly Id: Id
}

// TODO(4.0): move key narrowing to the Tag interface
/**
 * @since 2.0.0
 * @category models
 */
export interface TagClass<Self, Id extends string, Type> extends Tag<Self, Type> {
  new(_: never): TagClassShape<Id, Type>
  readonly key: Id
}

// TODO(4.0): move key narrowing to the Reference interface
/**
 * @since 3.11.0
 * @category models
 */
export interface ReferenceClass<Self, Id extends string, Type> extends Reference<Self, Type> {
  new(_: never): TagClassShape<Id, Type>
  readonly key: Id
}

/**
 * @category models
 * @since 2.0.0
 */
export interface TagUnify<A extends { [Unify.typeSymbol]?: any }> {
  Tag?: () => Extract<A[Unify.typeSymbol], Tag<any, any>>
}

/**
 * @category models
 * @since 2.0.0
 */
export interface TagUnifyIgnore {}

/**
 * @since 2.0.0
 */
export declare namespace Tag {
  /**
   * @since 2.0.0
   */
  export type Service<T extends Tag<any, any> | TagClassShape<any, any>> = T extends Tag<any, any> ? T["Service"]
    : T extends TagClassShape<any, infer A> ? A
    : never
  /**
   * @since 2.0.0
   */
  export type Identifier<T extends Tag<any, any> | TagClassShape<any, any>> = T extends Tag<any, any> ? T["Identifier"]
    : T extends TagClassShape<any, any> ? T
    : never
}

/**
 * Creates a new `Tag` instance with an optional key parameter.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context } from "effect"
 *
 * assert.strictEqual(Context.GenericTag("PORT").key === Context.GenericTag("PORT").key, true)
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const GenericTag: <Identifier, Service = Identifier>(key: string) => Tag<Identifier, Service> =
  internal.makeGenericTag

const TypeId: unique symbol = internal.TypeId as TypeId

/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export type ValidTagsById<R> = R extends infer S ? Tag<S, any> : never

/**
 * @since 2.0.0
 * @category models
 */
export interface Context<in Services> extends Equal, Pipeable, Inspectable {
  readonly [TypeId]: {
    readonly _Services: Types.Contravariant<Services>
  }
  readonly unsafeMap: Map<string, any>
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const unsafeMake: <Services>(unsafeMap: Map<string, any>) => Context<Services> = internal.makeContext

/**
 * Checks if the provided argument is a `Context`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context } from "effect"
 *
 * assert.strictEqual(Context.isContext(Context.empty()), true)
 * ```
 *
 * @since 2.0.0
 * @category guards
 */
export const isContext: (input: unknown) => input is Context<never> = internal.isContext

/**
 * Checks if the provided argument is a `Tag`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context } from "effect"
 *
 * assert.strictEqual(Context.isTag(Context.GenericTag("Tag")), true)
 * ```
 *
 * @since 2.0.0
 * @category guards
 */
export const isTag: (input: unknown) => input is Tag<any, any> = internal.isTag

/**
 * Checks if the provided argument is a `Reference`.
 *
 * @since 3.11.0
 * @category guards
 * @experimental
 */
export const isReference: (u: unknown) => u is Reference<any, any> = internal.isReference

/**
 * Returns an empty `Context`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context } from "effect"
 *
 * assert.strictEqual(Context.isContext(Context.empty()), true)
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty: () => Context<never> = internal.empty

/**
 * Creates a new `Context` with a single service associated to the tag.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context } from "effect"
 *
 * const Port = Context.GenericTag<{ PORT: number }>("Port")
 *
 * const Services = Context.make(Port, { PORT: 8080 })
 *
 * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: <I, S>(tag: Tag<I, S>, service: Types.NoInfer<S>) => Context<I> = internal.make

/**
 * Adds a service to a given `Context`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context, pipe } from "effect"
 *
 * const Port = Context.GenericTag<{ PORT: number }>("Port")
 * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
 *
 * const someContext = Context.make(Port, { PORT: 8080 })
 *
 * const Services = pipe(
 *   someContext,
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
 * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
 * ```
 *
 * @since 2.0.0
 */
export const add: {
  /**
   * Adds a service to a given `Context`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Context, pipe } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const someContext = Context.make(Port, { PORT: 8080 })
   *
   * const Services = pipe(
   *   someContext,
   *   Context.add(Timeout, { TIMEOUT: 5000 })
   * )
   *
   * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
   * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
   * ```
   *
   * @since 2.0.0
   */
  <I, S>(tag: Tag<I, S>, service: Types.NoInfer<S>): <Services>(self: Context<Services>) => Context<Services | I>
  /**
   * Adds a service to a given `Context`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Context, pipe } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const someContext = Context.make(Port, { PORT: 8080 })
   *
   * const Services = pipe(
   *   someContext,
   *   Context.add(Timeout, { TIMEOUT: 5000 })
   * )
   *
   * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
   * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
   * ```
   *
   * @since 2.0.0
   */
  <Services, I, S>(self: Context<Services>, tag: Tag<I, S>, service: Types.NoInfer<S>): Context<Services | I>
} = internal.add

/**
 * Get a service from the context that corresponds to the given tag.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Context } from "effect"
 *
 * const Port = Context.GenericTag<{ PORT: number }>("Port")
 * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
 *
 * const Services = pipe(
 *   Context.make(Port, { PORT: 8080 }),
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export const get: {
  /**
   * Get a service from the context that corresponds to the given tag.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Context } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const Services = pipe(
   *   Context.make(Port, { PORT: 8080 }),
   *   Context.add(Timeout, { TIMEOUT: 5000 })
   * )
   *
   * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
   * ```
   *
   * @since 2.0.0
   * @category getters
   */
  <I, S>(tag: Reference<I, S>): <Services>(self: Context<Services>) => S
  /**
   * Get a service from the context that corresponds to the given tag.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Context } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const Services = pipe(
   *   Context.make(Port, { PORT: 8080 }),
   *   Context.add(Timeout, { TIMEOUT: 5000 })
   * )
   *
   * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
   * ```
   *
   * @since 2.0.0
   * @category getters
   */
  <Services, I extends Services, S>(tag: Tag<I, S>): (self: Context<Services>) => S
  /**
   * Get a service from the context that corresponds to the given tag.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Context } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const Services = pipe(
   *   Context.make(Port, { PORT: 8080 }),
   *   Context.add(Timeout, { TIMEOUT: 5000 })
   * )
   *
   * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
   * ```
   *
   * @since 2.0.0
   * @category getters
   */
  <Services, I, S>(self: Context<Services>, tag: Reference<I, S>): S
  /**
   * Get a service from the context that corresponds to the given tag.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Context } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const Services = pipe(
   *   Context.make(Port, { PORT: 8080 }),
   *   Context.add(Timeout, { TIMEOUT: 5000 })
   * )
   *
   * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
   * ```
   *
   * @since 2.0.0
   * @category getters
   */
  <Services, I extends Services, S>(self: Context<Services>, tag: Tag<I, S>): S
} = internal.get

/**
 * Get a service from the context that corresponds to the given tag, or
 * use the fallback value.
 *
 * @since 3.7.0
 * @category getters
 */
export const getOrElse: {
  /**
   * Get a service from the context that corresponds to the given tag, or
   * use the fallback value.
   *
   * @since 3.7.0
   * @category getters
   */
  <S, I, B>(tag: Tag<I, S>, orElse: LazyArg<B>): <Services>(self: Context<Services>) => S | B
  /**
   * Get a service from the context that corresponds to the given tag, or
   * use the fallback value.
   *
   * @since 3.7.0
   * @category getters
   */
  <Services, S, I, B>(self: Context<Services>, tag: Tag<I, S>, orElse: LazyArg<B>): S | B
} = internal.getOrElse

/**
 * Get a service from the context that corresponds to the given tag.
 * This function is unsafe because if the tag is not present in the context, a runtime error will be thrown.
 *
 * For a safer version see {@link getOption}.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context } from "effect"
 *
 * const Port = Context.GenericTag<{ PORT: number }>("Port")
 * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
 *
 * const Services = Context.make(Port, { PORT: 8080 })
 *
 * assert.deepStrictEqual(Context.unsafeGet(Services, Port), { PORT: 8080 })
 * assert.throws(() => Context.unsafeGet(Services, Timeout))
 * ```
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeGet: {
  /**
   * Get a service from the context that corresponds to the given tag.
   * This function is unsafe because if the tag is not present in the context, a runtime error will be thrown.
   *
   * For a safer version see {@link getOption}.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Context } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const Services = Context.make(Port, { PORT: 8080 })
   *
   * assert.deepStrictEqual(Context.unsafeGet(Services, Port), { PORT: 8080 })
   * assert.throws(() => Context.unsafeGet(Services, Timeout))
   * ```
   *
   * @since 2.0.0
   * @category unsafe
   */
  <S, I>(tag: Tag<I, S>): <Services>(self: Context<Services>) => S
  /**
   * Get a service from the context that corresponds to the given tag.
   * This function is unsafe because if the tag is not present in the context, a runtime error will be thrown.
   *
   * For a safer version see {@link getOption}.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Context } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const Services = Context.make(Port, { PORT: 8080 })
   *
   * assert.deepStrictEqual(Context.unsafeGet(Services, Port), { PORT: 8080 })
   * assert.throws(() => Context.unsafeGet(Services, Timeout))
   * ```
   *
   * @since 2.0.0
   * @category unsafe
   */
  <Services, S, I>(self: Context<Services>, tag: Tag<I, S>): S
} = internal.unsafeGet

/**
 * Get the value associated with the specified tag from the context wrapped in an `Option` object. If the tag is not
 * found, the `Option` object will be `None`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context, Option } from "effect"
 *
 * const Port = Context.GenericTag<{ PORT: number }>("Port")
 * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
 *
 * const Services = Context.make(Port, { PORT: 8080 })
 *
 * assert.deepStrictEqual(Context.getOption(Services, Port), Option.some({ PORT: 8080 }))
 * assert.deepStrictEqual(Context.getOption(Services, Timeout), Option.none())
 * ```
 *
 * @since 2.0.0
 * @category getters
 */
export const getOption: {
  /**
   * Get the value associated with the specified tag from the context wrapped in an `Option` object. If the tag is not
   * found, the `Option` object will be `None`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Context, Option } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const Services = Context.make(Port, { PORT: 8080 })
   *
   * assert.deepStrictEqual(Context.getOption(Services, Port), Option.some({ PORT: 8080 }))
   * assert.deepStrictEqual(Context.getOption(Services, Timeout), Option.none())
   * ```
   *
   * @since 2.0.0
   * @category getters
   */
  <S, I>(tag: Tag<I, S>): <Services>(self: Context<Services>) => Option<S>
  /**
   * Get the value associated with the specified tag from the context wrapped in an `Option` object. If the tag is not
   * found, the `Option` object will be `None`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Context, Option } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const Services = Context.make(Port, { PORT: 8080 })
   *
   * assert.deepStrictEqual(Context.getOption(Services, Port), Option.some({ PORT: 8080 }))
   * assert.deepStrictEqual(Context.getOption(Services, Timeout), Option.none())
   * ```
   *
   * @since 2.0.0
   * @category getters
   */
  <Services, S, I>(self: Context<Services>, tag: Tag<I, S>): Option<S>
} = internal.getOption

/**
 * Merges two `Context`s, returning a new `Context` containing the services of both.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context } from "effect"
 *
 * const Port = Context.GenericTag<{ PORT: number }>("Port")
 * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
 *
 * const firstContext = Context.make(Port, { PORT: 8080 })
 * const secondContext = Context.make(Timeout, { TIMEOUT: 5000 })
 *
 * const Services = Context.merge(firstContext, secondContext)
 *
 * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
 * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
 * ```
 *
 * @since 2.0.0
 */
export const merge: {
  /**
   * Merges two `Context`s, returning a new `Context` containing the services of both.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Context } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const firstContext = Context.make(Port, { PORT: 8080 })
   * const secondContext = Context.make(Timeout, { TIMEOUT: 5000 })
   *
   * const Services = Context.merge(firstContext, secondContext)
   *
   * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
   * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
   * ```
   *
   * @since 2.0.0
   */
  <R1>(that: Context<R1>): <Services>(self: Context<Services>) => Context<R1 | Services>
  /**
   * Merges two `Context`s, returning a new `Context` containing the services of both.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Context } from "effect"
   *
   * const Port = Context.GenericTag<{ PORT: number }>("Port")
   * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
   *
   * const firstContext = Context.make(Port, { PORT: 8080 })
   * const secondContext = Context.make(Timeout, { TIMEOUT: 5000 })
   *
   * const Services = Context.merge(firstContext, secondContext)
   *
   * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
   * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
   * ```
   *
   * @since 2.0.0
   */
  <Services, R1>(self: Context<Services>, that: Context<R1>): Context<Services | R1>
} = internal.merge

/**
 * Merges any number of `Context`s, returning a new `Context` containing the services of all.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context } from "effect"
 *
 * const Port = Context.GenericTag<{ PORT: number }>("Port")
 * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
 * const Host = Context.GenericTag<{ HOST: string }>("Host")
 *
 * const firstContext = Context.make(Port, { PORT: 8080 })
 * const secondContext = Context.make(Timeout, { TIMEOUT: 5000 })
 * const thirdContext = Context.make(Host, { HOST: "localhost" })
 *
 * const Services = Context.mergeAll(firstContext, secondContext, thirdContext)
 *
 * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
 * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
 * assert.deepStrictEqual(Context.get(Services, Host), { HOST: "localhost" })
 * ```
 *
 * @since 3.12.0
 */
export const mergeAll: <T extends Array<unknown>>(
  ...ctxs: [...{ [K in keyof T]: Context<T[K]> }]
) => Context<T[number]> = internal.mergeAll

/**
 * Returns a new `Context` that contains only the specified services.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Context, Option } from "effect"
 *
 * const Port = Context.GenericTag<{ PORT: number }>("Port")
 * const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
 *
 * const someContext = pipe(
 *   Context.make(Port, { PORT: 8080 }),
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * const Services = pipe(someContext, Context.pick(Port))
 *
 * assert.deepStrictEqual(Context.getOption(Services, Port), Option.some({ PORT: 8080 }))
 * assert.deepStrictEqual(Context.getOption(Services, Timeout), Option.none())
 * ```
 *
 * @since 2.0.0
 */
export const pick: <Tags extends ReadonlyArray<Tag<any, any>>>(
  ...tags: Tags
) => <Services>(self: Context<Services>) => Context<Services & Tag.Identifier<Tags[number]>> = internal.pick

/**
 * @since 2.0.0
 */
export const omit: <Tags extends ReadonlyArray<Tag<any, any>>>(
  ...tags: Tags
) => <Services>(self: Context<Services>) => Context<Exclude<Services, Tag.Identifier<Tags[number]>>> = internal.omit

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Context, Layer } from "effect"
 *
 * class MyTag extends Context.Tag("MyTag")<
 *  MyTag,
 *  { readonly myNum: number }
 * >() {
 *  static Live = Layer.succeed(this, { myNum: 108 })
 * }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const Tag: <const Id extends string>(id: Id) => <Self, Shape>() => TagClass<Self, Id, Shape> = internal.Tag

/**
 * Creates a context tag with a default value.
 *
 * **Details**
 *
 * `Context.Reference` allows you to create a tag that can hold a value. You can
 * provide a default value for the service, which will automatically be used
 * when the context is accessed, or override it with a custom implementation
 * when needed.
 *
 * **Example** (Declaring a Tag with a default value)
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Context, Effect } from "effect"
 *
 * class SpecialNumber extends Context.Reference<SpecialNumber>()(
 *   "SpecialNumber",
 *   { defaultValue: () => 2048 }
 * ) {}
 *
 * //      ┌─── Effect<void, never, never>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   const specialNumber = yield* SpecialNumber
 *   console.log(`The special number is ${specialNumber}`)
 * })
 *
 * // No need to provide the SpecialNumber implementation
 * Effect.runPromise(program)
 * // Output: The special number is 2048
 * ```
 *
 * **Example** (Overriding the default value)
 *
 * ```ts
 * import { Context, Effect } from "effect"
 *
 * class SpecialNumber extends Context.Reference<SpecialNumber>()(
 *   "SpecialNumber",
 *   { defaultValue: () => 2048 }
 * ) {}
 *
 * const program = Effect.gen(function* () {
 *   const specialNumber = yield* SpecialNumber
 *   console.log(`The special number is ${specialNumber}`)
 * })
 *
 * Effect.runPromise(program.pipe(Effect.provideService(SpecialNumber, -1)))
 * // Output: The special number is -1
 * ```
 *
 * @since 3.11.0
 * @category constructors
 * @experimental
 */
export const Reference: <Self>() => <const Id extends string, Service>(
  id: Id,
  options: { readonly defaultValue: () => Service }
) => ReferenceClass<Self, Id, Service> = internal.Reference
