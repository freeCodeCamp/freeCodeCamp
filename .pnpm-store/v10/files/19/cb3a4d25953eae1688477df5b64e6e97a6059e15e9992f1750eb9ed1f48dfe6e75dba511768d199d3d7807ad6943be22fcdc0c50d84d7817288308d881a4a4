export interface Clock {
    /**
     * Return the current time in milliseconds from some epoch such as the Unix epoch or process start
     */
    now(): number;
}
/**
 * A utility for returning wall times anchored to a given point in time. Wall time measurements will
 * not be taken from the system, but instead are computed by adding a monotonic clock time
 * to the anchor point.
 *
 * This is needed because the system time can change and result in unexpected situations like
 * spans ending before they are started. Creating an anchored clock for each local root span
 * ensures that span timings and durations are accurate while preventing span times from drifting
 * too far from the system clock.
 *
 * Only creating an anchored clock once per local trace ensures span times are correct relative
 * to each other. For example, a child span will never have a start time before its parent even
 * if the system clock is corrected during the local trace.
 *
 * Heavily inspired by the OTel Java anchored clock
 * https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk/trace/src/main/java/io/opentelemetry/sdk/trace/AnchoredClock.java
 */
export declare class AnchoredClock implements Clock {
    private _monotonicClock;
    private _epochMillis;
    private _performanceMillis;
    /**
     * Create a new AnchoredClock anchored to the current time returned by systemClock.
     *
     * @param systemClock should be a clock that returns the number of milliseconds since January 1 1970 such as Date
     * @param monotonicClock should be a clock that counts milliseconds monotonically such as window.performance or perf_hooks.performance
     */
    constructor(systemClock: Clock, monotonicClock: Clock);
    /**
     * Returns the current time by adding the number of milliseconds since the
     * AnchoredClock was created to the creation epoch time
     */
    now(): number;
}
//# sourceMappingURL=anchored-clock.d.ts.map