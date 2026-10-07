export declare function resolvedSyncPromise(): PromiseLike<void>;
export declare function resolvedSyncPromise<T>(value: T | PromiseLike<T>): PromiseLike<T>;
/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
export declare function rejectedSyncPromise<T = never>(reason?: any): PromiseLike<T>;
type Executor<T> = (resolve: (value?: T | PromiseLike<T> | null) => void, reject: (reason?: any) => void) => void;
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
export declare class SyncPromise<T> implements PromiseLike<T> {
    private _state;
    private _handlers;
    private _value;
    constructor(executor: Executor<T>);
    /** @inheritdoc */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): PromiseLike<TResult1 | TResult2>;
    /** @inheritdoc */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): PromiseLike<T | TResult>;
    /** @inheritdoc */
    finally<TResult>(onfinally?: (() => void) | null): PromiseLike<TResult>;
    /** Excute the resolve/reject handlers. */
    private _executeHandlers;
    /** Run the executor for the SyncPromise. */
    private _runExecutor;
}
export {};
//# sourceMappingURL=syncpromise.d.ts.map
