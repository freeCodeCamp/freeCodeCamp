/**
 * @public
 */
export interface AbortHandler {
    (this: AbortSignal, ev: any): any;
}
/**
 * @public
 *
 * Holders of an AbortSignal object may query if the associated operation has
 * been aborted and register an onabort handler.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
 */
export interface AbortSignal {
    /**
     * Whether the action represented by this signal has been cancelled.
     */
    readonly aborted: boolean;
    /**
     * A function to be invoked when the action represented by this signal has
     * been cancelled.
     */
    onabort: AbortHandler | Function | null;
}
/**
 * @public
 *
 * The AWS SDK uses a Controller/Signal model to allow for cooperative
 * cancellation of asynchronous operations. When initiating such an operation,
 * the caller can create an AbortController and then provide linked signal to
 * subtasks. This allows a single source to communicate to multiple consumers
 * that an action has been aborted without dictating how that cancellation
 * should be handled.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortController
 */
export interface AbortController {
    /**
     * An object that reports whether the action associated with this
     * `AbortController` has been cancelled.
     */
    readonly signal: AbortSignal;
    /**
     * Declares the operation associated with this AbortController to have been
     * cancelled.
     */
    abort(): void;
}
