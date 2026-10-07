import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { Scheduler } from './_internals/interfaces/Scheduler.js';
export type { Scheduler, SchedulerReportItem, SchedulerSequenceItem } from './_internals/interfaces/Scheduler.js';
/**
 * Constraints to be applied on {@link scheduler}
 * @remarks Since 2.2.0
 * @public
 */
export interface SchedulerConstraints {
    /**
     * Ensure that all scheduled tasks will be executed in the right context (for instance it can be the `act` of React)
     * @remarks Since 1.21.0
     */
    act: (f: () => Promise<void>) => Promise<unknown>;
}
/**
 * For scheduler of promises
 * @remarks Since 1.20.0
 * @public
 */
export declare function scheduler<TMetaData = unknown>(constraints?: SchedulerConstraints): Arbitrary<Scheduler<TMetaData>>;
/**
 * For custom scheduler with predefined resolution order
 *
 * Ordering is defined by using a template string like the one generated in case of failure of a {@link scheduler}
 *
 * It may be something like:
 *
 * @example
 * ```typescript
 * fc.schedulerFor()`
 *   -> [task\${2}] promise pending
 *   -> [task\${3}] promise pending
 *   -> [task\${1}] promise pending
 * `
 * ```
 *
 * Or more generally:
 * ```typescript
 * fc.schedulerFor()`
 *   This scheduler will resolve task ${2} first
 *   followed by ${3} and only then task ${1}
 * `
 * ```
 *
 * WARNING:
 * Custom scheduler will
 * neither check that all the referred promises have been scheduled
 * nor that they resolved with the same status and value.
 *
 *
 * WARNING:
 * If one the promises is wrongly defined it will fail - for instance asking to resolve 5 while 5 does not exist.
 *
 * @remarks Since 1.25.0
 * @public
 */
declare function schedulerFor<TMetaData = unknown>(constraints?: SchedulerConstraints): (_strs: TemplateStringsArray, ...ordering: number[]) => Scheduler<TMetaData>;
/**
 * For custom scheduler with predefined resolution order
 *
 * WARNING:
 * Custom scheduler will not check that all the referred promises have been scheduled.
 *
 *
 * WARNING:
 * If one the promises is wrongly defined it will fail - for instance asking to resolve 5 while 5 does not exist.
 *
 * @param customOrdering - Array defining in which order the promises will be resolved.
 * Id of the promises start at 1. 1 means first scheduled promise, 2 second scheduled promise and so on.
 *
 * @remarks Since 1.25.0
 * @public
 */
declare function schedulerFor<TMetaData = unknown>(customOrdering: number[], constraints?: SchedulerConstraints): Scheduler<TMetaData>;
export { schedulerFor };
