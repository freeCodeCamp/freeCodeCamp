import type { Context, ContextManager } from '../context/types';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 *
 * @since 1.0.0
 */
export declare class ContextAPI {
    private static _instance?;
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    private constructor();
    /** Get the singleton instance of the Context API */
    static getInstance(): ContextAPI;
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */
    setGlobalContextManager(contextManager: ContextManager): boolean;
    /**
     * Get the currently active context
     */
    active(): Context;
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(context: Context, fn: F, thisArg?: ThisParameterType<F>, ...args: A): ReturnType<F>;
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */
    bind<T>(context: Context, target: T): T;
    private _getContextManager;
    /** Disable and remove the global context manager */
    disable(): void;
}
//# sourceMappingURL=context.d.ts.map