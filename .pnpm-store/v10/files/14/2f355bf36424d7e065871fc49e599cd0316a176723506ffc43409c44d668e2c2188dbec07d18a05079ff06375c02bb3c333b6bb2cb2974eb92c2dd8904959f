"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeMake = exports.unsafeGet = exports.pick = exports.omit = exports.mergeAll = exports.merge = exports.make = exports.isTag = exports.isReference = exports.isContext = exports.getOrElse = exports.getOption = exports.get = exports.empty = exports.add = exports.TagTypeId = exports.Tag = exports.ReferenceTypeId = exports.Reference = exports.GenericTag = void 0;
var internal = _interopRequireWildcard(require("./internal/context.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbol
 */
const TagTypeId = exports.TagTypeId = internal.TagTypeId;
/**
 * @since 3.11.0
 * @category symbol
 */
const ReferenceTypeId = exports.ReferenceTypeId = internal.ReferenceTypeId;
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
const GenericTag = exports.GenericTag = internal.makeGenericTag;
const TypeId = internal.TypeId;
/**
 * @since 2.0.0
 * @category constructors
 */
const unsafeMake = exports.unsafeMake = internal.makeContext;
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
const isContext = exports.isContext = internal.isContext;
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
const isTag = exports.isTag = internal.isTag;
/**
 * Checks if the provided argument is a `Reference`.
 *
 * @since 3.11.0
 * @category guards
 * @experimental
 */
const isReference = exports.isReference = internal.isReference;
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
const empty = exports.empty = internal.empty;
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
const make = exports.make = internal.make;
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
const add = exports.add = internal.add;
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
const get = exports.get = internal.get;
/**
 * Get a service from the context that corresponds to the given tag, or
 * use the fallback value.
 *
 * @since 3.7.0
 * @category getters
 */
const getOrElse = exports.getOrElse = internal.getOrElse;
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
const unsafeGet = exports.unsafeGet = internal.unsafeGet;
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
const getOption = exports.getOption = internal.getOption;
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
const merge = exports.merge = internal.merge;
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
const mergeAll = exports.mergeAll = internal.mergeAll;
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
const pick = exports.pick = internal.pick;
/**
 * @since 2.0.0
 */
const omit = exports.omit = internal.omit;
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
const Tag = exports.Tag = internal.Tag;
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
const Reference = exports.Reference = internal.Reference;
//# sourceMappingURL=Context.js.map