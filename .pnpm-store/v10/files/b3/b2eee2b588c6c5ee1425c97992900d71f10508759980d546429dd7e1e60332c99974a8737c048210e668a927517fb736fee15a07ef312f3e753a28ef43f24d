/**
 * @since 2.0.0
 */
import * as Equal from "./Equal.js";
import type * as equivalence from "./Equivalence.js";
import type { Inspectable } from "./Inspectable.js";
import * as Option from "./Option.js";
import * as order from "./Order.js";
import type { Pipeable } from "./Pipeable.js";
declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface Duration extends Equal.Equal, Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
    readonly value: DurationValue;
}
/**
 * @since 2.0.0
 * @category models
 */
export type DurationValue = {
    readonly _tag: "Millis";
    readonly millis: number;
} | {
    readonly _tag: "Nanos";
    readonly nanos: bigint;
} | {
    readonly _tag: "Infinity";
};
/**
 * @since 2.0.0
 * @category models
 */
export type Unit = "nano" | "nanos" | "micro" | "micros" | "milli" | "millis" | "second" | "seconds" | "minute" | "minutes" | "hour" | "hours" | "day" | "days" | "week" | "weeks";
/**
 * @since 2.0.0
 * @category models
 */
export type DurationInput = Duration | number | bigint | readonly [seconds: number, nanos: number] | `${number} ${Unit}`;
/**
 * @since 2.0.0
 */
export declare const decode: (input: DurationInput) => Duration;
/**
 * @since 2.5.0
 */
export declare const decodeUnknown: (u: unknown) => Option.Option<Duration>;
/**
 * @since 2.0.0
 * @category guards
 */
export declare const isDuration: (u: unknown) => u is Duration;
/**
 * @since 2.0.0
 * @category guards
 */
export declare const isFinite: (self: Duration) => boolean;
/**
 * @since 3.5.0
 * @category guards
 */
export declare const isZero: (self: Duration) => boolean;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const zero: Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const infinity: Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const nanos: (nanos: bigint) => Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const micros: (micros: bigint) => Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const millis: (millis: number) => Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const seconds: (seconds: number) => Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const minutes: (minutes: number) => Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const hours: (hours: number) => Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const days: (days: number) => Duration;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const weeks: (weeks: number) => Duration;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const toMillis: (self: DurationInput) => number;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const toSeconds: (self: DurationInput) => number;
/**
 * @since 3.8.0
 * @category getters
 */
export declare const toMinutes: (self: DurationInput) => number;
/**
 * @since 3.8.0
 * @category getters
 */
export declare const toHours: (self: DurationInput) => number;
/**
 * @since 3.8.0
 * @category getters
 */
export declare const toDays: (self: DurationInput) => number;
/**
 * @since 3.8.0
 * @category getters
 */
export declare const toWeeks: (self: DurationInput) => number;
/**
 * Get the duration in nanoseconds as a bigint.
 *
 * If the duration is infinite, returns `Option.none()`
 *
 * @since 2.0.0
 * @category getters
 */
export declare const toNanos: (self: DurationInput) => Option.Option<bigint>;
/**
 * Get the duration in nanoseconds as a bigint.
 *
 * If the duration is infinite, it throws an error.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const unsafeToNanos: (self: DurationInput) => bigint;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const toHrTime: (self: DurationInput) => [seconds: number, nanos: number];
/**
 * @since 2.0.0
 * @category pattern matching
 */
export declare const match: {
    /**
     * @since 2.0.0
     * @category pattern matching
     */
    <A, B>(options: {
        readonly onMillis: (millis: number) => A;
        readonly onNanos: (nanos: bigint) => B;
    }): (self: DurationInput) => A | B;
    /**
     * @since 2.0.0
     * @category pattern matching
     */
    <A, B>(self: DurationInput, options: {
        readonly onMillis: (millis: number) => A;
        readonly onNanos: (nanos: bigint) => B;
    }): A | B;
};
/**
 * @since 2.0.0
 * @category pattern matching
 */
export declare const matchWith: {
    /**
     * @since 2.0.0
     * @category pattern matching
     */
    <A, B>(that: DurationInput, options: {
        readonly onMillis: (self: number, that: number) => A;
        readonly onNanos: (self: bigint, that: bigint) => B;
    }): (self: DurationInput) => A | B;
    /**
     * @since 2.0.0
     * @category pattern matching
     */
    <A, B>(self: DurationInput, that: DurationInput, options: {
        readonly onMillis: (self: number, that: number) => A;
        readonly onNanos: (self: bigint, that: bigint) => B;
    }): A | B;
};
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Order: order.Order<Duration>;
/**
 * Checks if a `Duration` is between a `minimum` and `maximum` value.
 *
 * @category predicates
 * @since 2.0.0
 */
export declare const between: {
    /**
     * Checks if a `Duration` is between a `minimum` and `maximum` value.
     *
     * @category predicates
     * @since 2.0.0
     */
    (options: {
        minimum: DurationInput;
        maximum: DurationInput;
    }): (self: DurationInput) => boolean;
    /**
     * Checks if a `Duration` is between a `minimum` and `maximum` value.
     *
     * @category predicates
     * @since 2.0.0
     */
    (self: DurationInput, options: {
        minimum: DurationInput;
        maximum: DurationInput;
    }): boolean;
};
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Equivalence: equivalence.Equivalence<Duration>;
/**
 * @since 2.0.0
 */
export declare const min: {
    /**
     * @since 2.0.0
     */
    (that: DurationInput): (self: DurationInput) => Duration;
    /**
     * @since 2.0.0
     */
    (self: DurationInput, that: DurationInput): Duration;
};
/**
 * @since 2.0.0
 * @category order
 */
export declare const max: {
    /**
     * @since 2.0.0
     * @category order
     */
    (that: DurationInput): (self: DurationInput) => Duration;
    /**
     * @since 2.0.0
     * @category order
     */
    (self: DurationInput, that: DurationInput): Duration;
};
/**
 * @since 2.0.0
 * @category order
 */
export declare const clamp: {
    /**
     * @since 2.0.0
     * @category order
     */
    (options: {
        minimum: DurationInput;
        maximum: DurationInput;
    }): (self: DurationInput) => Duration;
    /**
     * @since 2.0.0
     * @category order
     */
    (self: DurationInput, options: {
        minimum: DurationInput;
        maximum: DurationInput;
    }): Duration;
};
/**
 * @since 2.4.19
 * @category math
 */
export declare const divide: {
    /**
     * @since 2.4.19
     * @category math
     */
    (by: number): (self: DurationInput) => Option.Option<Duration>;
    /**
     * @since 2.4.19
     * @category math
     */
    (self: DurationInput, by: number): Option.Option<Duration>;
};
/**
 * @since 2.4.19
 * @category math
 */
export declare const unsafeDivide: {
    /**
     * @since 2.4.19
     * @category math
     */
    (by: number): (self: DurationInput) => Duration;
    /**
     * @since 2.4.19
     * @category math
     */
    (self: DurationInput, by: number): Duration;
};
/**
 * @since 2.0.0
 * @category math
 */
export declare const times: {
    /**
     * @since 2.0.0
     * @category math
     */
    (times: number): (self: DurationInput) => Duration;
    /**
     * @since 2.0.0
     * @category math
     */
    (self: DurationInput, times: number): Duration;
};
/**
 * @since 2.0.0
 * @category math
 */
export declare const subtract: {
    /**
     * @since 2.0.0
     * @category math
     */
    (that: DurationInput): (self: DurationInput) => Duration;
    /**
     * @since 2.0.0
     * @category math
     */
    (self: DurationInput, that: DurationInput): Duration;
};
/**
 * @since 2.0.0
 * @category math
 */
export declare const sum: {
    /**
     * @since 2.0.0
     * @category math
     */
    (that: DurationInput): (self: DurationInput) => Duration;
    /**
     * @since 2.0.0
     * @category math
     */
    (self: DurationInput, that: DurationInput): Duration;
};
/**
 * @since 2.0.0
 * @category predicates
 */
export declare const lessThan: {
    /**
     * @since 2.0.0
     * @category predicates
     */
    (that: DurationInput): (self: DurationInput) => boolean;
    /**
     * @since 2.0.0
     * @category predicates
     */
    (self: DurationInput, that: DurationInput): boolean;
};
/**
 * @since 2.0.0
 * @category predicates
 */
export declare const lessThanOrEqualTo: {
    /**
     * @since 2.0.0
     * @category predicates
     */
    (that: DurationInput): (self: DurationInput) => boolean;
    /**
     * @since 2.0.0
     * @category predicates
     */
    (self: DurationInput, that: DurationInput): boolean;
};
/**
 * @since 2.0.0
 * @category predicates
 */
export declare const greaterThan: {
    /**
     * @since 2.0.0
     * @category predicates
     */
    (that: DurationInput): (self: DurationInput) => boolean;
    /**
     * @since 2.0.0
     * @category predicates
     */
    (self: DurationInput, that: DurationInput): boolean;
};
/**
 * @since 2.0.0
 * @category predicates
 */
export declare const greaterThanOrEqualTo: {
    /**
     * @since 2.0.0
     * @category predicates
     */
    (that: DurationInput): (self: DurationInput) => boolean;
    /**
     * @since 2.0.0
     * @category predicates
     */
    (self: DurationInput, that: DurationInput): boolean;
};
/**
 * @since 2.0.0
 * @category predicates
 */
export declare const equals: {
    /**
     * @since 2.0.0
     * @category predicates
     */
    (that: DurationInput): (self: DurationInput) => boolean;
    /**
     * @since 2.0.0
     * @category predicates
     */
    (self: DurationInput, that: DurationInput): boolean;
};
/**
 * Converts a `Duration` to its parts.
 *
 * @since 3.8.0
 * @category conversions
 */
export declare const parts: (self: DurationInput) => {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    millis: number;
    nanos: number;
};
/**
 * Converts a `Duration` to a human readable string.
 *
 * @since 2.0.0
 * @category conversions
 * @example
 * ```ts
 * import { Duration } from "effect"
 *
 * Duration.format(Duration.millis(1000)) // "1s"
 * Duration.format(Duration.millis(1001)) // "1s 1ms"
 * ```
 */
export declare const format: (self: DurationInput) => string;
/**
 * Formats a Duration into an ISO8601 duration string.
 *
 * Months are assumed to be 30 days and years are assumed to be 365 days.
 *
 * Milliseconds and nanoseconds are expressed as fractional seconds.
 *
 * @example
 * ```ts
 * import { Duration } from "effect"
 *
 * Duration.unsafeFormatIso(Duration.days(1)) // => "P1D"
 * Duration.unsafeFormatIso(Duration.minutes(90)) // => "PT1H30M"
 * Duration.unsafeFormatIso(Duration.millis(1500)) // => "PT1.5S"
 * ```
 *
 * @throws `RangeError` If the duration is not finite.
 *
 * @since 3.13.0
 * @category conversions
 */
export declare const unsafeFormatIso: (self: DurationInput) => string;
/**
 * Formats a Duration into an ISO8601 duration string.
 *
 * Months are assumed to be 30 days and years are assumed to be 365 days.
 *
 * Returns `Option.none()` if the duration is infinite.
 *
 * @example
 * ```ts
 * import { Duration, Option } from "effect"
 *
 * Duration.formatIso(Duration.days(1)) // => Option.some("P1D")
 * Duration.formatIso(Duration.minutes(90)) // => Option.some("PT1H30M")
 * Duration.formatIso(Duration.millis(1500)) // => Option.some("PT1.5S")
 * Duration.formatIso(Duration.infinity) // => Option.none()
 * ```
 *
 * @since 3.13.0
 * @category conversions
 */
export declare const formatIso: (self: DurationInput) => Option.Option<string>;
/**
 * Parses an ISO8601 duration string into a `Duration`.
 *
 * Months are assumed to be 30 days and years are assumed to be 365 days.
 *
 * @example
 * ```ts
 * import { Duration, Option } from "effect"
 *
 * Duration.fromIso("P1D") // => Option.some(Duration.days(1))
 * Duration.fromIso("PT1H") // => Option.some(Duration.hours(1))
 * Duration.fromIso("PT1M") // => Option.some(Duration.minutes(1))
 * Duration.fromIso("PT1.5S") // => Option.some(Duration.seconds(1.5))
 * ```
 *
 * @since 3.13.0
 * @category conversions
 */
export declare const fromIso: (iso: string) => Option.Option<Duration>;
export {};
//# sourceMappingURL=Duration.d.ts.map