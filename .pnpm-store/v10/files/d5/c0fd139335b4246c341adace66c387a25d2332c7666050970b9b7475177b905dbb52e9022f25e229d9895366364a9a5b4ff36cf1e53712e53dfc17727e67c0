import type { VerbosityLevel } from '../configuration/VerbosityLevel.js';
import type { ExecutionTree } from './ExecutionTree.js';
import type { Parameters } from '../configuration/Parameters.js';
/**
 * Post-run details produced by {@link check}
 *
 * A failing property can easily detected by checking the `failed` flag of this structure
 *
 * @remarks Since 0.0.7
 * @public
 */
export type RunDetails<Ts> = RunDetailsFailureProperty<Ts> | RunDetailsFailureTooManySkips<Ts> | RunDetailsFailureInterrupted<Ts> | RunDetailsSuccess<Ts>;
/**
 * Run reported as failed because
 * the property failed
 *
 * Refer to {@link RunDetailsCommon} for more details
 *
 * @remarks Since 1.25.0
 * @public
 */
export interface RunDetailsFailureProperty<Ts> extends RunDetailsCommon<Ts> {
    failed: true;
    interrupted: boolean;
    counterexample: Ts;
    counterexamplePath: string;
    error: string;
    errorInstance: unknown;
}
/**
 * Run reported as failed because
 * too many retries have been attempted to generate valid values
 *
 * Refer to {@link RunDetailsCommon} for more details
 *
 * @remarks Since 1.25.0
 * @public
 */
export interface RunDetailsFailureTooManySkips<Ts> extends RunDetailsCommon<Ts> {
    failed: true;
    interrupted: false;
    counterexample: null;
    counterexamplePath: null;
    error: null;
    errorInstance: null;
}
/**
 * Run reported as failed because
 * it took too long and thus has been interrupted
 *
 * Refer to {@link RunDetailsCommon} for more details
 *
 * @remarks Since 1.25.0
 * @public
 */
export interface RunDetailsFailureInterrupted<Ts> extends RunDetailsCommon<Ts> {
    failed: true;
    interrupted: true;
    counterexample: null;
    counterexamplePath: null;
    error: null;
    errorInstance: null;
}
/**
 * Run reported as success
 *
 * Refer to {@link RunDetailsCommon} for more details
 *
 * @remarks Since 1.25.0
 * @public
 */
export interface RunDetailsSuccess<Ts> extends RunDetailsCommon<Ts> {
    failed: false;
    interrupted: boolean;
    counterexample: null;
    counterexamplePath: null;
    error: null;
    errorInstance: null;
}
/**
 * Shared part between variants of RunDetails
 * @remarks Since 2.2.0
 * @public
 */
export interface RunDetailsCommon<Ts> {
    /**
     * Does the property failed during the execution of {@link check}?
     * @remarks Since 0.0.7
     */
    failed: boolean;
    /**
     * Was the execution interrupted?
     * @remarks Since 1.19.0
     */
    interrupted: boolean;
    /**
     * Number of runs
     *
     * - In case of failed property: Number of runs up to the first failure (including the failure run)
     * - Otherwise: Number of successful executions
     *
     * @remarks Since 1.0.0
     */
    numRuns: number;
    /**
     * Number of skipped entries due to failed pre-condition
     *
     * As `numRuns` it only takes into account the skipped values that occured before the first failure.
     * Refer to {@link pre} to add such pre-conditions.
     *
     * @remarks Since 1.3.0
     */
    numSkips: number;
    /**
     * Number of shrinks required to get to the minimal failing case (aka counterexample)
     * @remarks Since 1.0.0
     */
    numShrinks: number;
    /**
     * Seed that have been used by the run
     *
     * It can be forced in {@link assert}, {@link check}, {@link sample} and {@link statistics} using `Parameters`
     * @remarks Since 0.0.7
     */
    seed: number;
    /**
     * In case of failure: the counterexample contains the minimal failing case (first failure after shrinking)
     * @remarks Since 0.0.7
     */
    counterexample: Ts | null;
    /**
     * In case of failure: it contains the reason of the failure
     * @remarks Since 0.0.7
     */
    error: string | null;
    /**
     * In case of failure: it contains the error that has been thrown if any
     * @remarks Since 3.0.0
     */
    errorInstance: unknown | null;
    /**
     * In case of failure: path to the counterexample
     *
     * For replay purposes, it can be forced in {@link assert}, {@link check}, {@link sample} and {@link statistics} using `Parameters`
     *
     * @remarks Since 1.0.0
     */
    counterexamplePath: string | null;
    /**
     * List all failures that have occurred during the run
     *
     * You must enable verbose with at least `Verbosity.Verbose` in `Parameters`
     * in order to have values in it
     *
     * @remarks Since 1.1.0
     */
    failures: Ts[];
    /**
     * Execution summary of the run
     *
     * Traces the origin of each value encountered during the test and its execution status.
     * Can help to diagnose shrinking issues.
     *
     * You must enable verbose with at least `Verbosity.Verbose` in `Parameters`
     * in order to have values in it:
     * - Verbose: Only failures
     * - VeryVerbose: Failures, Successes and Skipped
     *
     * @remarks Since 1.9.0
     */
    executionSummary: ExecutionTree<Ts>[];
    /**
     * Verbosity level required by the user
     * @remarks Since 1.9.0
     */
    verbose: VerbosityLevel;
    /**
     * Configuration of the run
     *
     * It includes both local parameters set on {@link check} or {@link assert}
     * and global ones specified using {@link configureGlobal}
     *
     * @remarks Since 1.25.0
     */
    runConfiguration: Parameters<Ts>;
}
