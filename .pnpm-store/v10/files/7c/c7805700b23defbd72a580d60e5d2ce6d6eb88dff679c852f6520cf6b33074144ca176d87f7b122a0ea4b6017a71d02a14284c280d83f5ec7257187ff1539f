import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Execution context attached to one predicate run
 * @remarks Since 2.2.0
 * @public
 */
export interface ContextValue {
    /**
     * Log execution details during a test.
     * Very helpful when troubleshooting failures
     * @param data - Data to be logged into the current context
     * @remarks Since 1.8.0
     */
    log(data: string): void;
    /**
     * Number of logs already logged into current context
     * @remarks Since 1.8.0
     */
    size(): number;
}
/**
 * Produce a {@link ContextValue} instance
 * @remarks Since 1.8.0
 * @public
 */
export declare function context(): Arbitrary<ContextValue>;
