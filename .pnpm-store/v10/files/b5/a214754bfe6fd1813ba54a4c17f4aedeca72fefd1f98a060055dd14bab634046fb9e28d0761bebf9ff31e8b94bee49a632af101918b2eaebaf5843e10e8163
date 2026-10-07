/**
 * @fileoverview Tracks performance of individual rules.
 * @author Brandon Mills
 */

"use strict";

const { startTime, endTime } = require("../shared/stats");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/* c8 ignore next */
/**
 * Align the string to left
 * @param {string} str string to evaluate
 * @param {number} len length of the string
 * @param {string} ch delimiter character
 * @returns {string} modified string
 * @private
 */
function alignLeft(str, len, ch) {
	return str + new Array(len - str.length + 1).join(ch || " ");
}

/* c8 ignore next */
/**
 * Align the string to right
 * @param {string} str string to evaluate
 * @param {number} len length of the string
 * @param {string} ch delimiter character
 * @returns {string} modified string
 * @private
 */
function alignRight(str, len, ch) {
	return new Array(len - str.length + 1).join(ch || " ") + str;
}

//------------------------------------------------------------------------------
// Module definition
//------------------------------------------------------------------------------

const enabled = !!process.env.TIMING;

const HEADERS = ["Rule", "Time (ms)", "Relative"];
const ALIGN = [alignLeft, alignRight, alignRight];

/**
 * Decide how many rules to show in the output list.
 * @returns {number} the number of rules to show
 */
function getListSize() {
	const MINIMUM_SIZE = 10;

	if (typeof process.env.TIMING !== "string") {
		return MINIMUM_SIZE;
	}

	if (process.env.TIMING.toLowerCase() === "all") {
		return Number.POSITIVE_INFINITY;
	}

	const TIMING_ENV_VAR_AS_INTEGER = Number.parseInt(process.env.TIMING, 10);

	return TIMING_ENV_VAR_AS_INTEGER > 10
		? TIMING_ENV_VAR_AS_INTEGER
		: MINIMUM_SIZE;
}

/* c8 ignore next */
/**
 * display the data
 * @param {Object} data Data object to be displayed
 * @returns {void} prints modified string with console.log
 * @private
 */
function display(data) {
	let total = 0;
	const rows = Object.keys(data)
		.map(key => {
			const time = data[key];

			total += time;
			return [key, time];
		})
		.sort((a, b) => b[1] - a[1])
		.slice(0, getListSize());

	rows.forEach(row => {
		row.push(`${((row[1] * 100) / total).toFixed(1)}%`);
		row[1] = row[1].toFixed(3);
	});

	rows.unshift(HEADERS);

	const widths = [];

	rows.forEach(row => {
		const len = row.length;

		for (let i = 0; i < len; i++) {
			const n = row[i].length;

			if (!widths[i] || n > widths[i]) {
				widths[i] = n;
			}
		}
	});

	const table = rows.map(row =>
		row.map((cell, index) => ALIGN[index](cell, widths[index])).join(" | "),
	);

	table.splice(
		1,
		0,
		widths
			.map((width, index) => {
				const extraAlignment =
					index !== 0 && index !== widths.length - 1 ? 2 : 1;

				return ALIGN[index](":", width + extraAlignment, "-");
			})
			.join("|"),
	);

	console.log(table.join("\n")); // eslint-disable-line no-console -- Debugging function
}

/* c8 ignore next */
module.exports = (function () {
	const data = Object.create(null);
	let displayEnabled = true;

	/**
	 * Time the run
	 * @param {any} key key from the data object
	 * @param {Function} fn function to be called
	 * @param {boolean} stats if 'stats' is true, return the result and the time difference
	 * @returns {Function} function to be executed
	 * @private
	 */
	function time(key, fn, stats) {
		return function (...args) {
			const t = startTime();
			const result = fn(...args);
			const tdiff = endTime(t);

			if (enabled) {
				if (typeof data[key] === "undefined") {
					data[key] = 0;
				}

				data[key] += tdiff;
			}

			return stats ? { result, tdiff } : result;
		};
	}

	/**
	 * Returns a shallow copy of the collected timings data.
	 * @returns {Record<string, number>} mapping of ruleId to total time in ms
	 */
	function getData() {
		return { ...data };
	}

	/**
	 * Merges rule timing totals collected elsewhere into this process' totals.
	 * @param {Record<string, number>} dataToMerge mapping of ruleId to total time in ms
	 * @returns {void}
	 */
	function mergeData(dataToMerge) {
		for (const [key, value] of Object.entries(dataToMerge)) {
			if (typeof data[key] === "undefined") {
				data[key] = 0;
			}
			data[key] += value;
		}
	}

	/**
	 * Disables printing of timing data on process exit.
	 * Intended for worker threads or non-main contexts.
	 * @returns {void}
	 */
	function disableDisplay() {
		displayEnabled = false;
	}

	if (enabled) {
		process.on("exit", () => {
			if (displayEnabled && Object.keys(data).length > 0) {
				display(data);
			}
		});
	}

	return {
		time,
		enabled,
		getListSize,
		getData,
		mergeData,
		disableDisplay,
	};
})();
