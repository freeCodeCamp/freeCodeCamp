"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = exports.randomWith = exports.nextRange = exports.nextIntBetween = exports.nextInt = exports.nextBoolean = exports.next = exports.make = exports.fixed = exports.choice = exports.RandomTypeId = exports.Random = void 0;
var defaultServices = _interopRequireWildcard(require("./internal/defaultServices.js"));
var internal = _interopRequireWildcard(require("./internal/random.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const RandomTypeId = exports.RandomTypeId = internal.RandomTypeId;
/**
 * Returns the next numeric value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
const next = exports.next = defaultServices.next;
/**
 * Returns the next integer value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
const nextInt = exports.nextInt = defaultServices.nextInt;
/**
 * Returns the next boolean value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
const nextBoolean = exports.nextBoolean = defaultServices.nextBoolean;
/**
 * Returns the next numeric value in the specified range from the
 * pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
const nextRange = exports.nextRange = defaultServices.nextRange;
/**
 * Returns the next integer value in the specified range from the
 * pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
const nextIntBetween = exports.nextIntBetween = defaultServices.nextIntBetween;
/**
 * Uses the pseudo-random number generator to shuffle the specified iterable.
 *
 * @since 2.0.0
 * @category constructors
 */
const shuffle = exports.shuffle = defaultServices.shuffle;
/**
 * Get a random element from an iterable.
 *
 * @example
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * Effect.gen(function* () {
 *   const randomItem = yield* Random.choice([1, 2, 3])
 *   console.log(randomItem)
 * })
 * ```
 *
 * @since 3.6.0
 * @category constructors
 */
const choice = exports.choice = defaultServices.choice;
/**
 * Retreives the `Random` service from the context and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 * @category constructors
 */
const randomWith = exports.randomWith = defaultServices.randomWith;
/**
 * @since 2.0.0
 * @category context
 */
const Random = exports.Random = internal.randomTag;
/**
 * Constructs the `Random` service, seeding the pseudo-random number generator
 * with an hash of the specified seed.
 * This constructor is useful for generating predictable sequences of random values for specific use cases.
 *
 * Example uses:
 * - Generating random UI data for visual tests.
 * - Creating data that needs to change daily but remain the same throughout a single day, such as using a date as the seed.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Effect, Random } from "effect"
 *
 * const random1 = Random.make("myseed")
 * const random2 = Random.make("myseed")
 *
 * assert.equal(Effect.runSync(random1.next), Effect.runSync(random2.next))
 * ```
 *
 * @since 3.5.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Constructs the `Random` service from an array of literal values.
 * The service will cycle through the provided values in order when generating random values.
 * This constructor is useful for creating deterministic sequences for testing or when specific values need to be returned.
 *
 * @example
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * Effect.gen(function* () {
 *   console.log(yield* Random.next) // 0.2
 *   console.log(yield* Random.next) // 0.5
 *   console.log(yield* Random.next) // 0.8
 *   console.log(yield* Random.next) // 0.2 (cycles back)
 * }).pipe(Effect.withRandom(Random.fixed([0.2, 0.5, 0.8])))
 * ```
 *
 * @example
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * Effect.gen(function* () {
 *   console.log(yield* Random.nextBoolean) // true
 *   console.log(yield* Random.nextBoolean) // false
 *   console.log(yield* Random.nextBoolean) // true
 * }).pipe(Effect.withRandom(Random.fixed([true, false, true])))
 * ```
 *
 * @since 3.11.0
 * @category constructors
 */
const fixed = exports.fixed = internal.fixed;
//# sourceMappingURL=Random.js.map