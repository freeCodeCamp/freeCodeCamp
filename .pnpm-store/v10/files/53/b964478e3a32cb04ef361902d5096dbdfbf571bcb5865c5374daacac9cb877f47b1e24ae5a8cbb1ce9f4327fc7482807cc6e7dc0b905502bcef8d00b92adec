import type { RandomType } from './RandomType.js';
import type { VerbosityLevel } from './VerbosityLevel.js';
import type { RunDetails } from '../reporter/RunDetails.js';
import type { RandomGenerator } from 'pure-rand';
/**
 * Customization of the parameters used to run the properties
 * @remarks Since 0.0.6
 * @public
 */
export interface Parameters<T = void> {
    /**
     * Initial seed of the generator: `Date.now()` by default
     *
     * It can be forced to replay a failed run.
     *
     * In theory, seeds are supposed to be 32-bit integers.
     * In case of double value, the seed will be rescaled into a valid 32-bit integer (eg.: values between 0 and 1 will be evenly spread into the range of possible seeds).
     *
     * @remarks Since 0.0.6
     */
    seed?: number;
    /**
     * Random number generator: `xorshift128plus` by default
     *
     * Random generator is the core element behind the generation of random values - changing it might directly impact the quality and performances of the generation of random values.
     * It can be one of: 'mersenne', 'congruential', 'congruential32', 'xorshift128plus', 'xoroshiro128plus'
     * Or any function able to build a `RandomGenerator` based on a seed
     *
     * As required since pure-rand v6.0.0, when passing a builder for {@link RandomGenerator},
     * the random number generator must generate values between -0x80000000 and 0x7fffffff.
     *
     * @remarks Since 1.6.0
     */
    randomType?: RandomType | ((seed: number) => RandomGenerator);
    /**
     * Number of runs before success: 100 by default
     * @remarks Since 1.0.0
     */
    numRuns?: number;
    /**
     * Maximal number of skipped values per run
     *
     * Skipped is considered globally, so this value is used to compute maxSkips = maxSkipsPerRun * numRuns.
     * Runner will consider a run to have failed if it skipped maxSkips+1 times before having generated numRuns valid entries.
     *
     * See {@link pre} for more details on pre-conditions
     *
     * @remarks Since 1.3.0
     */
    maxSkipsPerRun?: number;
    /**
     * Maximum time in milliseconds for the predicate to answer: disabled by default
     *
     * WARNING: Only works for async code (see {@link asyncProperty}), will not interrupt a synchronous code.
     * @remarks Since 0.0.11
     */
    timeout?: number;
    /**
     * Skip all runs after a given time limit: disabled by default
     *
     * NOTE: Relies on `Date.now()`.
     *
     * NOTE:
     * Useful to stop too long shrinking processes.
     * Replay capability (see `seed`, `path`) can resume the shrinking.
     *
     * WARNING:
     * It skips runs. Thus test might be marked as failed.
     * Indeed, it might not reached the requested number of successful runs.
     *
     * @remarks Since 1.15.0
     */
    skipAllAfterTimeLimit?: number;
    /**
     * Interrupt test execution after a given time limit: disabled by default
     *
     * NOTE: Relies on `Date.now()`.
     *
     * NOTE:
     * Useful to avoid having too long running processes in your CI.
     * Replay capability (see `seed`, `path`) can still be used if needed.
     *
     * WARNING:
     * If the test got interrupted before any failure occured
     * and before it reached the requested number of runs specified by `numRuns`
     * it will be marked as success. Except if `markInterruptAsFailure` has been set to `true`
     *
     * @remarks Since 1.19.0
     */
    interruptAfterTimeLimit?: number;
    /**
     * Mark interrupted runs as failed runs if preceded by one success or more: disabled by default
     * Interrupted with no success at all always defaults to failure whatever the value of this flag.
     * @remarks Since 1.19.0
     */
    markInterruptAsFailure?: boolean;
    /**
     * Skip runs corresponding to already tried values.
     *
     * WARNING:
     * Discarded runs will be retried. Under the hood they are simple calls to `fc.pre`.
     * In other words, if you ask for 100 runs but your generator can only generate 10 values then the property will fail as 100 runs will never be reached.
     * Contrary to `ignoreEqualValues` you always have the number of runs you requested.
     *
     * NOTE: Relies on `fc.stringify` to check the equality.
     *
     * @remarks Since 2.14.0
     */
    skipEqualValues?: boolean;
    /**
     * Discard runs corresponding to already tried values.
     *
     * WARNING:
     * Discarded runs will not be replaced.
     * In other words, if you ask for 100 runs and have 2 discarded runs you will only have 98 effective runs.
     *
     * NOTE: Relies on `fc.stringify` to check the equality.
     *
     * @remarks Since 2.14.0
     */
    ignoreEqualValues?: boolean;
    /**
     * Way to replay a failing property directly with the counterexample.
     * It can be fed with the counterexamplePath returned by the failing test (requires `seed` too).
     * @remarks Since 1.0.0
     */
    path?: string;
    /**
     * Logger (see {@link statistics}): `console.log` by default
     * @remarks Since 0.0.6
     */
    logger?(v: string): void;
    /**
     * Force the use of unbiased arbitraries: biased by default
     * @remarks Since 1.1.0
     */
    unbiased?: boolean;
    /**
     * Enable verbose mode: {@link VerbosityLevel.None} by default
     *
     * Using `verbose: true` is equivalent to `verbose: VerbosityLevel.Verbose`
     *
     * It can prove very useful to troubleshoot issues.
     * See {@link VerbosityLevel} for more details on each level.
     *
     * @remarks Since 1.1.0
     */
    verbose?: boolean | VerbosityLevel;
    /**
     * Custom values added at the beginning of generated ones
     *
     * It enables users to come with examples they want to test at every run
     *
     * @remarks Since 1.4.0
     */
    examples?: T[];
    /**
     * Stop run on failure
     *
     * It makes the run stop at the first encountered failure without shrinking.
     *
     * When used in complement to `seed` and `path`,
     * it replays only the minimal counterexample.
     *
     * @remarks Since 1.11.0
     */
    endOnFailure?: boolean;
    /**
     * Replace the default reporter handling errors by a custom one
     *
     * Reporter is responsible to throw in case of failure: default one throws whenever `runDetails.failed` is true.
     * But you may want to change this behaviour in yours.
     *
     * Only used when calling {@link assert}
     * Cannot be defined in conjonction with `asyncReporter`
     *
     * @remarks Since 1.25.0
     */
    reporter?: (runDetails: RunDetails<T>) => void;
    /**
     * Replace the default reporter handling errors by a custom one
     *
     * Reporter is responsible to throw in case of failure: default one throws whenever `runDetails.failed` is true.
     * But you may want to change this behaviour in yours.
     *
     * Only used when calling {@link assert}
     * Cannot be defined in conjonction with `reporter`
     * Not compatible with synchronous properties: runner will throw
     *
     * @remarks Since 1.25.0
     */
    asyncReporter?: (runDetails: RunDetails<T>) => Promise<void>;
    /**
     * Should the thrown Error include a cause leading to the original Error?
     *
     * In such case the original Error will disappear from the message of the Error thrown by fast-check
     * and only appear within the cause part of it.
     *
     * Remark: At the moment, only node (≥16.14.0) and vitest seem to properly display such errors.
     * Others will just discard the cause at display time.
     */
    errorWithCause?: boolean;
}
