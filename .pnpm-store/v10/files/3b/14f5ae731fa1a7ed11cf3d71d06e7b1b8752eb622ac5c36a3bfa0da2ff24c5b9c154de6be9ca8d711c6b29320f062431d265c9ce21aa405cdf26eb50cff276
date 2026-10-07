type Warn = (message: string) => void;
type Warning = {
    (condition: boolean, message: string): void;
    cache: {
        [message: string]: boolean;
    };
};
/**
 * Logs a warning when this function is called, in development environment only.
 */
declare let deprecate: <TCallback extends (...args: any[]) => any>(fn: TCallback, message: string) => TCallback;
/**
 * Logs a warning
 * This is used to log issues in development environment only.
 */
declare let warn: Warn;
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */
declare let warning: Warning;
export { warn, deprecate, warning };
