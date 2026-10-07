/**
 * A class that manages a queue of retry jobs.
 */
export class Retrier {
    /**
     * Creates a new instance.
     * @param {Function} check The function to call.
     * @param {object} [options] The options for the instance.
     * @param {number} [options.timeout] The timeout for the queue.
     * @param {number} [options.maxDelay] The maximum delay for the queue.
     * @param {number} [options.concurrency] The maximum number of concurrent tasks.
     */
    constructor(check: Function, { timeout, maxDelay, concurrency }?: {
        timeout?: number | undefined;
        maxDelay?: number | undefined;
        concurrency?: number | undefined;
    } | undefined);
    /**
     * Gets the number of tasks waiting to be retried.
     * @returns {number} The number of tasks in the retry queue.
     */
    get retrying(): number;
    /**
     * Gets the number of tasks waiting to be processed in the pending queue.
     * @returns {number} The number of tasks in the pending queue.
     */
    get pending(): number;
    /**
     * Gets the number of tasks currently being processed.
     * @returns {number} The number of tasks currently being processed.
     */
    get working(): number;
    /**
     * Adds a new retry job to the queue.
     * @template {(...args: unknown[]) => Promise<unknown>} Func
     * @template {Awaited<ReturnType<Func>>} RetVal
     * @param {Func} fn The function to call.
     * @param {object} [options] The options for the job.
     * @param {AbortSignal} [options.signal] The AbortSignal to monitor for cancellation.
     * @returns {Promise<RetVal>} A promise that resolves when the queue is processed.
     */
    retry<Func extends (...args: unknown[]) => Promise<unknown>, RetVal extends Awaited<ReturnType<Func>>>(fn: Func, { signal }?: {
        signal?: AbortSignal | undefined;
    } | undefined): Promise<RetVal>;
    #private;
}
