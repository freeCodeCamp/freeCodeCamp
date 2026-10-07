import { isUndef } from "./TypeCheck.js";
import type { BaseContext } from "../context/BaseContext.js";
import type { Time } from "../type/Units.js";

/**
 * Assert that the statement is true, otherwise invoke the error.
 * @param statement
 * @param error The message which is passed into an Error
 */
export function assert(statement: boolean, error: string): asserts statement {
	if (!statement) {
		throw new Error(error);
	}
}

/**
 * Make sure that the given value is within the range
 */
export function assertRange(value: number, gte: number, lte = Infinity): void {
	if (!(gte <= value && value <= lte)) {
		throw new RangeError(
			`Value must be within [${gte}, ${lte}], got: ${value}`
		);
	}
}

/**
 * Warn if the context is not running.
 */
export function assertContextRunning(context: BaseContext): void {
	// add a warning if the context is not started
	if (!context.isOffline && context.state !== "running") {
		warn(
			'The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.'
		);
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
export function enterScheduledCallback(insideCallback: boolean): void {
	isInsideScheduledCallback = insideCallback;
}

/**
 * Make sure that a time was passed into
 */
export function assertUsedScheduleTime(time?: Time): void {
	if (
		isUndef(time) &&
		isInsideScheduledCallback &&
		!printedScheduledWarning
	) {
		printedScheduledWarning = true;
		warn(
			"Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"
		);
	}
}

/**
 * A basic logging interface
 */
interface Logger {
	log: (args?: any[]) => void;
	warn: (args?: any[]) => void;
}

/**
 * The default logger is the console
 */
let defaultLogger: Logger = console;

/**
 * Set the logging interface
 */
export function setLogger(logger: Logger): void {
	defaultLogger = logger;
}

/**
 * Log anything
 */
export function log(...args: any[]): void {
	defaultLogger.log(...args);
}

/**
 * Warn anything
 */
export function warn(...args: any[]): void {
	defaultLogger.warn(...args);
}
