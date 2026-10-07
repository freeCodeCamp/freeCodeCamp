import { StackFrame } from '../types/stackframe';
type WatchdogReturn = {
    /** Resets the watchdog timer */
    poll: () => void;
    /** Enables or disables the watchdog timer */
    enabled: (state: boolean) => void;
};
type CreateTimerImpl = () => {
    getTimeMs: () => number;
    reset: () => void;
};
/**
 * A node.js watchdog timer
 * @param pollInterval The interval that we expect to get polled at
 * @param anrThreshold The threshold for when we consider ANR
 * @param callback The callback to call for ANR
 * @returns An object with `poll` and `enabled` functions {@link WatchdogReturn}
 */
export declare function watchdogTimer(createTimer: CreateTimerImpl, pollInterval: number, anrThreshold: number, callback: () => void): WatchdogReturn;
interface Location {
    scriptId: string;
    lineNumber: number;
    columnNumber?: number;
}
interface CallFrame {
    functionName: string;
    location: Location;
    url: string;
}
/**
 * Converts Debugger.CallFrame to Sentry StackFrame
 */
export declare function callFrameToStackFrame(frame: CallFrame, url: string | undefined, getModuleFromFilename: (filename: string | undefined) => string | undefined): StackFrame;
export {};
//# sourceMappingURL=anr.d.ts.map
