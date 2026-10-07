/**
 * @fileoverview Provides helper functions to start/stop the time measurements
 * that are provided by the ESLint 'stats' option.
 * @author Mara Kiefer <http://github.com/mnkiefer>
 */
"use strict";

/**
 * Start time measurement
 * @returns {[number, number]} t variable for tracking time
 */
function startTime() {
	return process.hrtime();
}

/**
 * End time measurement
 * @param {[number, number]} t Variable for tracking time
 * @returns {number} The measured time in milliseconds
 */
function endTime(t) {
	const time = process.hrtime(t);

	return time[0] * 1e3 + time[1] / 1e6;
}

module.exports = {
	startTime,
	endTime,
};
