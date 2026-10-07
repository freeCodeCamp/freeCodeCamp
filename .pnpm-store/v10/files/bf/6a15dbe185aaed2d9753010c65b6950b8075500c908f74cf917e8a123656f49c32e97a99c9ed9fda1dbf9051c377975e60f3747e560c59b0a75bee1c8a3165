import { isUndef } from "./TypeCheck.js";
/**
 * Assert that the statement is true, otherwise invoke the error.
 * @param statement
 * @param error The message which is passed into an Error
 */
export function assert(statement, error) {
    if (!statement) {
        throw new Error(error);
    }
}
/**
 * Make sure that the given value is within the range
 */
export function assertRange(value, gte, lte = Infinity) {
    if (!(gte <= value && value <= lte)) {
        throw new RangeError(`Value must be within [${gte}, ${lte}], got: ${value}`);
    }
}
/**
 * Warn if the context is not running.
 */
export function assertContextRunning(context) {
    // add a warning if the context is not started
    if (!context.isOffline && context.state !== "running") {
        warn('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.');
    }
}
/**
 * If it is currently inside a scheduled callback
 */
let isInsideScheduledCallback = false;
let printedScheduledWarning = false;
/**
 * Notify that the following block of code is occurring inside a Transport callback.
 */
export function enterScheduledCallback(insideCallback) {
    isInsideScheduledCallback = insideCallback;
}
/**
 * Make sure that a time was passed into
 */
export function assertUsedScheduleTime(time) {
    if (isUndef(time) &&
        isInsideScheduledCallback &&
        !printedScheduledWarning) {
        printedScheduledWarning = true;
        warn("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing");
    }
}
/**
 * The default logger is the console
 */
let defaultLogger = console;
/**
 * Set the logging interface
 */
export function setLogger(logger) {
    defaultLogger = logger;
}
/**
 * Log anything
 */
export function log(...args) {
    defaultLogger.log(...args);
}
/**
 * Warn anything
 */
export function warn(...args) {
    defaultLogger.warn(...args);
}
//# sourceMappingURL=Debug.js.map