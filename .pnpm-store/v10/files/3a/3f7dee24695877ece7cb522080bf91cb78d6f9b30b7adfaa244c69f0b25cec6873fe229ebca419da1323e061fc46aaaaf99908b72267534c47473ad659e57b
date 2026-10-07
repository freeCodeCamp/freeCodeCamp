/**
 * Error that is thrown on timeouts.
 */
export declare class TimeoutError extends Error {
    constructor(message?: string);
}
/**
 * Adds a timeout to a promise and rejects if the specified timeout has elapsed. Also rejects if the specified promise
 * rejects, and resolves if the specified promise resolves.
 *
 * <p> NOTE: this operation will continue even after it throws a {@link TimeoutError}.
 *
 * @param promise promise to use with timeout.
 * @param timeout the timeout in milliseconds until the returned promise is rejected.
 */
export declare function callWithTimeout<T>(promise: Promise<T>, timeout: number): Promise<T>;
//# sourceMappingURL=timeout.d.ts.map