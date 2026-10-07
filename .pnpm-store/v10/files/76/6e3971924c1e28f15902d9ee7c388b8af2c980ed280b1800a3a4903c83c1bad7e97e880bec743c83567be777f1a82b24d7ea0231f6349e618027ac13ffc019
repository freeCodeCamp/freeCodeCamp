import type { BaseContext } from "../context/BaseContext.js";
import type { Time } from "../type/Units.js";
/**
 * Assert that the statement is true, otherwise invoke the error.
 * @param statement
 * @param error The message which is passed into an Error
 */
export declare function assert(statement: boolean, error: string): asserts statement;
/**
 * Make sure that the given value is within the range
 */
export declare function assertRange(value: number, gte: number, lte?: number): void;
/**
 * Warn if the context is not running.
 */
export declare function assertContextRunning(context: BaseContext): void;
/**
 * Notify that the following block of code is occurring inside a Transport callback.
 */
export declare function enterScheduledCallback(insideCallback: boolean): void;
/**
 * Make sure that a time was passed into
 */
export declare function assertUsedScheduleTime(time?: Time): void;
/**
 * A basic logging interface
 */
interface Logger {
    log: (args?: any[]) => void;
    warn: (args?: any[]) => void;
}
/**
 * Set the logging interface
 */
export declare function setLogger(logger: Logger): void;
/**
 * Log anything
 */
export declare function log(...args: any[]): void;
/**
 * Warn anything
 */
export declare function warn(...args: any[]): void;
export {};
