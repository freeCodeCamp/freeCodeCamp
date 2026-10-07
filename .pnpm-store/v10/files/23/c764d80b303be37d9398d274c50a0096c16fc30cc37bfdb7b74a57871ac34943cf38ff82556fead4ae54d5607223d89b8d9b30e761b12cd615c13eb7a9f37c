import type { NodeClient } from '../sdk/client';
interface OnUncaughtExceptionOptions {
    /**
     * Controls if the SDK should register a handler to exit the process on uncaught errors:
     * - `true`: The SDK will exit the process on all uncaught errors.
     * - `false`: The SDK will only exit the process when there are no other `uncaughtException` handlers attached.
     *
     * Default: `false`
     */
    exitEvenIfOtherHandlersAreRegistered: boolean;
    /**
     * This is called when an uncaught error would cause the process to exit.
     *
     * @param firstError Uncaught error causing the process to exit
     * @param secondError Will be set if the handler was called multiple times. This can happen either because
     * `onFatalError` itself threw, or because an independent error happened somewhere else while `onFatalError`
     * was running.
     */
    onFatalError?(this: void, firstError: Error, secondError?: Error): void;
}
/**
 * Add a global exception handler.
 */
export declare const onUncaughtExceptionIntegration: (options?: Partial<OnUncaughtExceptionOptions> | undefined) => import("@sentry/core").Integration;
type ErrorHandler = {
    _errorHandler: boolean;
} & ((error: Error) => void);
/** Exported only for tests */
export declare function makeErrorHandler(client: NodeClient, options: OnUncaughtExceptionOptions): ErrorHandler;
export {};
//# sourceMappingURL=onuncaughtexception.d.ts.map