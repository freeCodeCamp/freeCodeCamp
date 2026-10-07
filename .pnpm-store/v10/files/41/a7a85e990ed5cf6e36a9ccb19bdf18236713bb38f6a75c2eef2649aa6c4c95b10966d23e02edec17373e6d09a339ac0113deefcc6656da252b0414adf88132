type DebouncedCallback = {
    (): void | unknown;
    flush: () => void | unknown;
    cancel: () => void;
};
type CallbackFunction = () => unknown;
type DebounceOptions = {
    /** The max. time in ms to wait for the callback to be invoked. */
    maxWait?: number;
    /** This can be overwritten to use a different setTimeout implementation, e.g. to avoid triggering change detection in Angular  */
    setTimeoutImpl?: typeof setTimeout;
};
/**
 * Heavily simplified debounce function based on lodash.debounce.
 *
 * This function takes a callback function (@param fun) and delays its invocation
 * by @param wait milliseconds. Optionally, a maxWait can be specified in @param options,
 * which ensures that the callback is invoked at least once after the specified max. wait time.
 *
 * @param func the function whose invocation is to be debounced
 * @param wait the minimum time until the function is invoked after it was called once
 * @param options the options object, which can contain the `maxWait` property
 *
 * @returns the debounced version of the function, which needs to be called at least once to start the
 *          debouncing process. Subsequent calls will reset the debouncing timer and, in case @paramfunc
 *          was already invoked in the meantime, return @param func's return value.
 *          The debounced function has two additional properties:
 *          - `flush`: Invokes the debounced function immediately and returns its return value
 *          - `cancel`: Cancels the debouncing process and resets the debouncing timer
 */
export declare function debounce(func: CallbackFunction, wait: number, options?: DebounceOptions): DebouncedCallback;
export {};
//# sourceMappingURL=debounce.d.ts.map