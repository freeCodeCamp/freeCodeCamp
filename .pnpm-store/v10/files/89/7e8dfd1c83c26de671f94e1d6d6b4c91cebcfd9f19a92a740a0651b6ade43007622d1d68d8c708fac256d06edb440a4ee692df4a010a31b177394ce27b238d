import process from 'node:process';
import { table } from 'table';

// Inspired by ESLint's timing.js
// https://github.com/eslint/eslint/blob/09bc2a88c00aa9a93c7de505795fc4e85b2e6357/lib/linter/timing.js

/**
 * Start time measurement.
 * @returns {bigint} Variable for tracking time in nanoseconds.
 */
function startTime() {
	return process.hrtime.bigint();
}

/**
 * End time measurement.
 * @param {bigint} start Variable for tracking time in nanoseconds.
 * @returns {number} The measured time in milliseconds.
 */
function endTime(start) {
	const diff = process.hrtime.bigint() - start;

	return Number(diff) / 1e6;
}

const HEADERS = ['#', 'Rule', 'Time (ms)', 'Relative'];

/**
 * Decide how many rules to show in the output list.
 * @returns {number} The number of rules to show.
 */
function getListSize() {
	const TIMING = process.env.TIMING;

	if (typeof TIMING === 'undefined') {
		return 0;
	}

	if (TIMING.toLowerCase() === 'all') {
		return Number.POSITIVE_INFINITY;
	}

	const parsed = Number.parseInt(TIMING, 10);

	if (!Number.isNaN(parsed) && parsed >= 1) {
		return parsed;
	}

	return 0;
}

const listSize = getListSize();
const enabled = listSize !== 0;

/** @type {import('table').TableUserConfig}  */
const tableConfig = {
	columns: [
		{ alignment: 'right' },
		{ alignment: 'left' },
		{ alignment: 'right' },
		{ alignment: 'right' },
	],
};

/**
 * Display the timing data.
 * @param {{ [key: string]: number }} data Data object to be displayed.
 * @returns {void}
 * @private
 */
function display(data) {
	let total = 0;

	/** @type {Array<[string, number]>} */
	const rows = Object.keys(data).map((key) => {
		const t = data[key] ?? 0;

		total += t;

		return [key, t];
	});

	rows.sort((a, b) => b[1] - a[1]);
	const limitedRows = rows.slice(0, listSize);

	// Format rows with percentages
	const formattedRows = limitedRows.map((row, index) => {
		const percentage = total > 0 ? `${((row[1] * 100) / total).toFixed(1)}%` : '0.0%';
		const timeStr = row[1].toFixed(3);

		return [index + 1, row[0], timeStr, percentage];
	});

	formattedRows.unshift(HEADERS);

	// eslint-disable-next-line no-console
	console.log(table(formattedRows, tableConfig));
}

/** @type {{ [key: string]: number }} */
const data = Object.create(null);

/**
 * Time the execution of a function.
 * @param {string} key Key from the data object.
 * @param {Function} fn Function to be called.
 * @returns {Function} Function to be executed.
 * @private
 */
function time(key, fn) {
	return function timedFunction(/** @type {any} */ ...args) {
		const t = startTime();
		const result = fn(...args);
		const timeDiff = endTime(t);

		data[key] = (data[key] ?? 0) + timeDiff;

		return result;
	};
}

if (enabled) {
	process.on('exit', () => {
		display(data);
	});
}

export default {
	display,
	enabled,
	getListSize,
	tableConfig,
	time,
};
