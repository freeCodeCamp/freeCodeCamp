import type * as DateTime from "./DateTime.js";
import * as Either from "./Either.js";
import * as Equal from "./Equal.js";
import * as equivalence from "./Equivalence.js";
import { type Inspectable } from "./Inspectable.js";
import * as Option from "./Option.js";
import { type Pipeable } from "./Pipeable.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface Cron extends Pipeable, Equal.Equal, Inspectable {
    readonly [TypeId]: TypeId;
    readonly tz: Option.Option<DateTime.TimeZone>;
    readonly seconds: ReadonlySet<number>;
    readonly minutes: ReadonlySet<number>;
    readonly hours: ReadonlySet<number>;
    readonly days: ReadonlySet<number>;
    readonly months: ReadonlySet<number>;
    readonly weekdays: ReadonlySet<number>;
}
/**
 * Checks if a given value is a `Cron` instance.
 *
 * @since 2.0.0
 * @category guards
 */
export declare const isCron: (u: unknown) => u is Cron;
/**
 * Creates a `Cron` instance.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (values: {
    readonly seconds?: Iterable<number> | undefined;
    readonly minutes: Iterable<number>;
    readonly hours: Iterable<number>;
    readonly days: Iterable<number>;
    readonly months: Iterable<number>;
    readonly weekdays: Iterable<number>;
    readonly tz?: DateTime.TimeZone | undefined;
}) => Cron;
/**
 * @since 2.0.0
 * @category symbol
 */
export declare const ParseErrorTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type ParseErrorTypeId = typeof ParseErrorTypeId;
declare const ParseError_base: new <A extends Record<string, any> = {}>(args: import("./Types.js").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("./Cause.js").YieldableError & {
    readonly _tag: "CronParseError";
} & Readonly<A>;
/**
 * Represents a checked exception which occurs when decoding fails.
 *
 * @since 2.0.0
 * @category models
 */
export declare class ParseError extends ParseError_base<{
    readonly message: string;
    readonly input?: string;
}> {
    /**
     * @since 2.0.0
     */
    readonly [ParseErrorTypeId]: symbol;
}
/**
 * Returns `true` if the specified value is an `ParseError`, `false` otherwise.
 *
 * @since 2.0.0
 * @category guards
 */
export declare const isParseError: (u: unknown) => u is ParseError;
/**
 * Parses a cron expression into a `Cron` instance.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Cron, Either } from "effect"
 *
 * // At 04:00 on every day-of-month from 8 through 14.
 * assert.deepStrictEqual(Cron.parse("0 0 4 8-14 * *"), Either.right(Cron.make({
 *   seconds: [0],
 *   minutes: [0],
 *   hours: [4],
 *   days: [8, 9, 10, 11, 12, 13, 14],
 *   months: [],
 *   weekdays: []
 * })))
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const parse: (cron: string, tz?: DateTime.TimeZone | string) => Either.Either<Cron, ParseError>;
/**
 * Parses a cron expression into a `Cron` instance.
 *
 * **Details**
 *
 * This function takes a cron expression as a string and attempts to parse it
 * into a `Cron` instance. If the expression is valid, the resulting `Cron`
 * instance will represent the schedule defined by the cron expression.
 *
 * If the expression is invalid, the function throws a `ParseError`.
 *
 * You can optionally provide a time zone (`tz`) to interpret the cron
 * expression in a specific time zone. If no time zone is provided, the cron
 * expression will use the default time zone.
 *
 * @example
 * ```ts
 * import { Cron } from "effect"
 *
 * // At 04:00 on every day-of-month from 8 through 14.
 * console.log(Cron.unsafeParse("0 4 8-14 * *"))
 * // Output:
 * // {
 * //   _id: 'Cron',
 * //   tz: { _id: 'Option', _tag: 'None' },
 * //   seconds: [ 0 ],
 * //   minutes: [ 0 ],
 * //   hours: [ 4 ],
 * //   days: [
 * //      8,  9, 10, 11,
 * //     12, 13, 14
 * //   ],
 * //   months: [],
 * //   weekdays: []
 * // }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unsafeParse: (cron: string, tz?: DateTime.TimeZone | string) => Cron;
/**
 * Checks if a given `Date` falls within an active `Cron` time window.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Cron, Either } from "effect"
 *
 * const cron = Either.getOrThrow(Cron.parse("0 4 8-14 * *"))
 * assert.deepStrictEqual(Cron.match(cron, new Date("2021-01-08 04:00:00")), true)
 * assert.deepStrictEqual(Cron.match(cron, new Date("2021-01-08 05:00:00")), false)
 * ```
 *
 * @throws `IllegalArgumentException` if the given `DateTime.Input` is invalid.
 *
 * @since 2.0.0
 */
export declare const match: (cron: Cron, date: DateTime.DateTime.Input) => boolean;
/**
 * Returns the next run `Date` for the given `Cron` instance.
 *
 * Uses the current time as a starting point if no value is provided for `startFrom`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Cron, Either } from "effect"
 *
 * const after = new Date("2021-01-01 00:00:00")
 * const cron = Either.getOrThrow(Cron.parse("0 4 8-14 * *"))
 * assert.deepStrictEqual(Cron.next(cron, after), new Date("2021-01-08 04:00:00"))
 * ```
 *
 * @throws `IllegalArgumentException` if the given `DateTime.Input` is invalid.
 * @throws `Error` if the next run date cannot be found within 10,000 iterations.
 *
 * @since 2.0.0
 */
export declare const next: (cron: Cron, startFrom?: DateTime.DateTime.Input) => Date;
/**
 * Returns the previous run `Date` for the given `Cron` instance.
 *
 * Uses the current time as a starting point if no value is provided for `startFrom`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Cron, Either } from "effect"
 *
 * const before = new Date("2021-01-15 00:00:00")
 * const cron = Either.getOrThrow(Cron.parse("0 4 8-14 * *"))
 * assert.deepStrictEqual(Cron.prev(cron, before), new Date("2021-01-14 04:00:00"))
 * ```
 *
 * @throws `IllegalArgumentException` if the given `DateTime.Input` is invalid.
 * @throws `Error` if the previous run date cannot be found within 10,000 iterations.
 *
 * @since 3.20.0
 */
export declare const prev: (cron: Cron, startFrom?: DateTime.DateTime.Input) => Date;
/**
 * Returns an `IterableIterator` which yields the sequence of `Date`s that match the `Cron` instance.
 *
 * @since 2.0.0
 */
export declare const sequence: (cron: Cron, startFrom?: DateTime.DateTime.Input) => IterableIterator<Date>;
/**
 * Returns an `IterableIterator` which yields the sequence of `Date`s that match the `Cron` instance,
 * in reverse direction.
 *
 * @since 3.20.0
 */
export declare const sequenceReverse: (cron: Cron, startFrom?: DateTime.DateTime.Input) => IterableIterator<Date>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Equivalence: equivalence.Equivalence<Cron>;
/**
 * Checks if two `Cron`s are equal.
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const equals: {
    /**
     * Checks if two `Cron`s are equal.
     *
     * @since 2.0.0
     * @category predicates
     */
    (that: Cron): (self: Cron) => boolean;
    /**
     * Checks if two `Cron`s are equal.
     *
     * @since 2.0.0
     * @category predicates
     */
    (self: Cron, that: Cron): boolean;
};
export {};
//# sourceMappingURL=Cron.d.ts.map