/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const LogType = Object.freeze({
	error: /** @type {"error"} */ ("error"), // message, c style arguments
	warn: /** @type {"warn"} */ ("warn"), // message, c style arguments
	info: /** @type {"info"} */ ("info"), // message, c style arguments
	log: /** @type {"log"} */ ("log"), // message, c style arguments
	debug: /** @type {"debug"} */ ("debug"), // message, c style arguments

	trace: /** @type {"trace"} */ ("trace"), // no arguments

	group: /** @type {"group"} */ ("group"), // [label]
	groupCollapsed: /** @type {"groupCollapsed"} */ ("groupCollapsed"), // [label]
	groupEnd: /** @type {"groupEnd"} */ ("groupEnd"), // [label]

	profile: /** @type {"profile"} */ ("profile"), // [profileName]
	profileEnd: /** @type {"profileEnd"} */ ("profileEnd"), // [profileName]

	time: /** @type {"time"} */ ("time"), // name, time as [seconds, nanoseconds]

	clear: /** @type {"clear"} */ ("clear"), // no arguments
	status: /** @type {"status"} */ ("status") // message, arguments
});

module.exports.LogType = LogType;

/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */
/** @typedef {Map<string | undefined, [number, number]>} TimersMap */

const LOG_SYMBOL = Symbol("webpack logger raw log method");
const TIMERS_SYMBOL = Symbol("webpack logger times");
const TIMERS_AGGREGATES_SYMBOL = Symbol("webpack logger aggregated times");

/** @typedef {EXPECTED_ANY[]} Args */
/** @typedef {(type: LogTypeEnum, args?: Args) => void} LogFn */
/** @typedef {(name: string | (() => string)) => WebpackLogger} GetChildLogger */

class WebpackLogger {
	/**
	 * Creates an instance of WebpackLogger.
	 * @param {LogFn} log log function
	 * @param {GetChildLogger} getChildLogger function to create child logger
	 */
	constructor(log, getChildLogger) {
		/** @type {LogFn} */
		this[LOG_SYMBOL] = log;
		/** @type {GetChildLogger} */
		this.getChildLogger = getChildLogger;
	}

	/**
	 * Processes the provided arg.
	 * @param {Args} args args
	 */
	error(...args) {
		this[LOG_SYMBOL](LogType.error, args);
	}

	/**
	 * Processes the provided arg.
	 * @param {Args} args args
	 */
	warn(...args) {
		this[LOG_SYMBOL](LogType.warn, args);
	}

	/**
	 * Processes the provided arg.
	 * @param {Args} args args
	 */
	info(...args) {
		this[LOG_SYMBOL](LogType.info, args);
	}

	/**
	 * Processes the provided arg.
	 * @param {Args} args args
	 */
	log(...args) {
		this[LOG_SYMBOL](LogType.log, args);
	}

	/**
	 * Processes the provided arg.
	 * @param {Args} args args
	 */
	debug(...args) {
		this[LOG_SYMBOL](LogType.debug, args);
	}

	/**
	 * Processes the provided condition.
	 * @param {boolean=} condition condition
	 * @param {Args} args args
	 */
	assert(condition, ...args) {
		if (!condition) {
			this[LOG_SYMBOL](LogType.error, args);
		}
	}

	trace() {
		this[LOG_SYMBOL](LogType.trace, ["Trace"]);
	}

	clear() {
		this[LOG_SYMBOL](LogType.clear);
	}

	/**
	 * Processes the provided arg.
	 * @param {Args} args args
	 */
	status(...args) {
		this[LOG_SYMBOL](LogType.status, args);
	}

	/**
	 * Processes the provided arg.
	 * @param {Args} args args
	 */
	group(...args) {
		this[LOG_SYMBOL](LogType.group, args);
	}

	/**
	 * Processes the provided arg.
	 * @param {Args} args args
	 */
	groupCollapsed(...args) {
		this[LOG_SYMBOL](LogType.groupCollapsed, args);
	}

	groupEnd() {
		this[LOG_SYMBOL](LogType.groupEnd);
	}

	/**
	 * Processes the provided label.
	 * @param {string=} label label
	 */
	profile(label) {
		this[LOG_SYMBOL](LogType.profile, [label]);
	}

	/**
	 * Processes the provided label.
	 * @param {string=} label label
	 */
	profileEnd(label) {
		this[LOG_SYMBOL](LogType.profileEnd, [label]);
	}

	/**
	 * Processes the provided label.
	 * @param {string} label label
	 */
	time(label) {
		/** @type {TimersMap} */
		this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
		this[TIMERS_SYMBOL].set(label, process.hrtime());
	}

	/**
	 * Processes the provided label.
	 * @param {string=} label label
	 */
	timeLog(label) {
		const prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
		if (!prev) {
			throw new Error(`No such label '${label}' for WebpackLogger.timeLog()`);
		}
		const time = process.hrtime(prev);
		this[LOG_SYMBOL](LogType.time, [label, ...time]);
	}

	/**
	 * Processes the provided label.
	 * @param {string=} label label
	 */
	timeEnd(label) {
		const prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
		if (!prev) {
			throw new Error(`No such label '${label}' for WebpackLogger.timeEnd()`);
		}
		const time = process.hrtime(prev);
		/** @type {TimersMap} */
		(this[TIMERS_SYMBOL]).delete(label);
		this[LOG_SYMBOL](LogType.time, [label, ...time]);
	}

	/**
	 * Processes the provided label.
	 * @param {string=} label label
	 */
	timeAggregate(label) {
		const prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
		if (!prev) {
			throw new Error(
				`No such label '${label}' for WebpackLogger.timeAggregate()`
			);
		}
		const time = process.hrtime(prev);
		/** @type {TimersMap} */
		(this[TIMERS_SYMBOL]).delete(label);
		/** @type {TimersMap} */
		this[TIMERS_AGGREGATES_SYMBOL] =
			this[TIMERS_AGGREGATES_SYMBOL] || new Map();
		const current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
		if (current !== undefined) {
			if (time[1] + current[1] > 1e9) {
				time[0] += current[0] + 1;
				time[1] = time[1] - 1e9 + current[1];
			} else {
				time[0] += current[0];
				time[1] += current[1];
			}
		}
		this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
	}

	/**
	 * Time aggregate end.
	 * @param {string=} label label
	 */
	timeAggregateEnd(label) {
		if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
		const time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
		if (time === undefined) return;
		this[TIMERS_AGGREGATES_SYMBOL].delete(label);
		this[LOG_SYMBOL](LogType.time, [label, ...time]);
	}
}

module.exports.Logger = WebpackLogger;
