/**
 * Function responsible to run the passed function and surround it with whatever needed.
 * The name has been inspired from the `act` function coming with React.
 *
 * This wrapper function is not supposed to throw. The received function f will never throw.
 *
 * Wrapping order in the following:
 *
 * - global act defined on `fc.scheduler` wraps wait level one
 * - wait act defined on `s.waitX` wraps local one
 * - local act defined on `s.scheduleX(...)` wraps the trigger function
 *
 * @remarks Since 3.9.0
 * @public
 */
export type SchedulerAct = (f: () => Promise<void>) => Promise<void>;
/**
 * Instance able to reschedule the ordering of promises for a given app
 * @remarks Since 1.20.0
 * @public
 */
export interface Scheduler<TMetaData = unknown> {
    /**
     * Wrap a new task using the Scheduler
     * @remarks Since 1.20.0
     */
    schedule: <T>(task: Promise<T>, label?: string, metadata?: TMetaData, customAct?: SchedulerAct) => Promise<T>;
    /**
     * Automatically wrap function output using the Scheduler
     * @remarks Since 1.20.0
     */
    scheduleFunction: <TArgs extends any[], T>(asyncFunction: (...args: TArgs) => Promise<T>, customAct?: SchedulerAct) => (...args: TArgs) => Promise<T>;
    /**
     * Schedule a sequence of Promise to be executed sequencially.
     * Items within the sequence might be interleaved by other scheduled operations.
     *
     * Please note that whenever an item from the sequence has started,
     * the scheduler will wait until its end before moving to another scheduled task.
     *
     * A handle is returned by the function in order to monitor the state of the sequence.
     * Sequence will be marked:
     * - done if all the promises have been executed properly
     * - faulty if one of the promises within the sequence throws
     *
     * @remarks Since 1.20.0
     */
    scheduleSequence(sequenceBuilders: SchedulerSequenceItem<TMetaData>[], customAct?: SchedulerAct): {
        done: boolean;
        faulty: boolean;
        task: Promise<{
            done: boolean;
            faulty: boolean;
        }>;
    };
    /**
     * Count of pending scheduled tasks
     * @remarks Since 1.20.0
     */
    count(): number;
    /**
     * Wait one scheduled task to be executed
     * @throws Whenever there is no task scheduled
     * @remarks Since 1.20.0
     */
    waitOne: (customAct?: SchedulerAct) => Promise<void>;
    /**
     * Wait all scheduled tasks,
     * including the ones that might be created by one of the resolved task
     * @remarks Since 1.20.0
     */
    waitAll: (customAct?: SchedulerAct) => Promise<void>;
    /**
     * Wait as many scheduled tasks as need to resolve the received Promise
     *
     * Some tests frameworks like `supertest` are not triggering calls to subsequent queries in a synchronous way,
     * some are waiting an explicit call to `then` to trigger them (either synchronously or asynchronously)...
     * As a consequence, none of `waitOne` or `waitAll` cannot wait for them out-of-the-box.
     *
     * This helper is responsible to wait as many scheduled tasks as needed (but the bare minimal) to get
     * `unscheduledTask` resolved. Once resolved it returns its output either success or failure.
     *
     * Be aware that while this helper will wait eveything to be ready for `unscheduledTask` to resolve,
     * having uncontrolled tasks triggering stuff required for `unscheduledTask` might be a source a uncontrollable
     * and not reproducible randomness as those triggers cannot be handled and scheduled by fast-check.
     *
     * @remarks Since 2.24.0
     */
    waitFor: <T>(unscheduledTask: Promise<T>, customAct?: SchedulerAct) => Promise<T>;
    /**
     * Produce an array containing all the scheduled tasks so far with their execution status.
     * If the task has been executed, it includes a string representation of the associated output or error produced by the task if any.
     *
     * Tasks will be returned in the order they get executed by the scheduler.
     *
     * @remarks Since 1.25.0
     */
    report: () => SchedulerReportItem<TMetaData>[];
}
/**
 * Define an item to be passed to `scheduleSequence`
 * @remarks Since 1.20.0
 * @public
 */
export type SchedulerSequenceItem<TMetaData = unknown> = {
    /**
     * Builder to start the task
     * @remarks Since 1.20.0
     */
    builder: () => Promise<any>;
    /**
     * Label
     * @remarks Since 1.20.0
     */
    label: string;
    /**
     * Metadata to be attached into logs
     * @remarks Since 1.25.0
     */
    metadata?: TMetaData;
} | (() => Promise<any>);
/**
 * Describe a task for the report produced by the scheduler
 * @remarks Since 1.25.0
 * @public
 */
export interface SchedulerReportItem<TMetaData = unknown> {
    /**
     * Execution status for this task
     * - resolved: task released by the scheduler and successful
     * - rejected: task released by the scheduler but with errors
     * - pending:  task still pending in the scheduler, not released yet
     *
     * @remarks Since 1.25.0
     */
    status: 'resolved' | 'rejected' | 'pending';
    /**
     * How was this task scheduled?
     * - promise: schedule
     * - function: scheduleFunction
     * - sequence: scheduleSequence
     *
     * @remarks Since 1.25.0
     */
    schedulingType: 'promise' | 'function' | 'sequence';
    /**
     * Incremental id for the task, first received task has taskId = 1
     * @remarks Since 1.25.0
     */
    taskId: number;
    /**
     * Label of the task
     * @remarks Since 1.25.0
     */
    label: string;
    /**
     * Metadata linked when scheduling the task
     * @remarks Since 1.25.0
     */
    metadata?: TMetaData;
    /**
     * Stringified version of the output or error computed using fc.stringify
     * @remarks Since 1.25.0
     */
    outputValue?: string;
}
