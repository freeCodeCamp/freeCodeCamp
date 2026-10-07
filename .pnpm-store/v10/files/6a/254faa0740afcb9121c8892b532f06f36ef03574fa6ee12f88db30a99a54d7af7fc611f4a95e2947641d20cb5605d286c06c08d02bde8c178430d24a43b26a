import type { Debugger, InspectorNotification } from 'node:inspector';
import type { StackFrame, StackParser } from '@sentry/core';
import type { LocalVariablesIntegrationOptions, Variables } from './common';
/** Creates a unique hash from stack frames */
export declare function hashFrames(frames: StackFrame[] | undefined): string | undefined;
/**
 * We use the stack parser to create a unique hash from the exception stack trace
 * This is used to lookup vars when the exception passes through the event processor
 */
export declare function hashFromStack(stackParser: StackParser, stack: string | undefined): string | undefined;
type OnPauseEvent = InspectorNotification<Debugger.PausedEventDataType>;
export interface DebugSession {
    /** Configures and connects to the debug session */
    configureAndConnect(onPause: (message: OnPauseEvent, complete: () => void) => void, captureAll: boolean): void;
    /** Updates which kind of exceptions to capture */
    setPauseOnExceptions(captureAll: boolean): void;
    /** Gets local variables for an objectId */
    getLocalVariables(objectId: string, callback: (vars: Variables) => void): void;
}
type Next<T> = (result: T) => void;
type Add<T> = (fn: Next<T>) => void;
type CallbackWrapper<T> = {
    add: Add<T>;
    next: Next<T>;
};
/** Creates a container for callbacks to be called sequentially */
export declare function createCallbackList<T>(complete: Next<T>): CallbackWrapper<T>;
/**
 * Adds local variables to exception frames.
 */
export declare const localVariablesSyncIntegration: (options?: LocalVariablesIntegrationOptions | undefined, sessionOverride?: DebugSession | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=local-variables-sync.d.ts.map