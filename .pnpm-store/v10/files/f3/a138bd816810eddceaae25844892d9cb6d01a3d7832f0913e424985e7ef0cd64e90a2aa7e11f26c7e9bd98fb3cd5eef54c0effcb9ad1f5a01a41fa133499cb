import * as internal from "./internal/context.js";
/**
 * @since 2.0.0
 * @category symbol
 */
export const TagTypeId = internal.TagTypeId;
/**
 * @since 3.11.0
 * @category symbol
 */
export const ReferenceTypeId = internal.ReferenceTypeId;
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
export const GenericTag = internal.makeGenericTag;
const TypeId = internal.TypeId;
/**
 * @since 2.0.0
 * @category constructors
 */
export const unsafeMake = internal.makeContext;
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
export const isContext = internal.isContext;
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
export const isTag = internal.isTag;
/**
 * Checks if the provided argument is a `Reference`.
 *
 * @since 3.11.0
 * @category guards
 * @experimental
 */
export const isReference = internal.isReference;
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
export const empty = internal.empty;
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
export const make = internal.make;
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
export const add = internal.add;
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
export const get = internal.get;
/**
 * Get a service from the context that corresponds to the given tag, or
 * use the fallback value.
 *
 * @since 3.7.0
 * @category getters
 */
export const getOrElse = internal.getOrElse;
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
export const unsafeGet = internal.unsafeGet;
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
export const getOption = internal.getOption;
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
export const merge = internal.merge;
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
export const mergeAll = internal.mergeAll;
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
export const pick = internal.pick;
/**
 * @since 2.0.0
 */
export const omit = internal.omit;
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
export const Tag = internal.Tag;
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
export const Reference = internal.Reference;
//# sourceMappingURL=Context.js.map