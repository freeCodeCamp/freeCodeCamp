/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const binarySearchBounds = require("./binarySearchBounds");

/** @typedef {function(number): void} Callback */

class ParallelismFactorCalculator {
	constructor() {
		/** @type {number[]} */
		this._rangePoints = [];
		/** @type {Callback[]} */
		this._rangeCallbacks = [];
	}

	/**
	 * @param {number} start range start
	 * @param {number} end range end
	 * @param {Callback} callback callback
	 * @returns {void}
	 */
	range(start, end, callback) {
		if (start === end) return callback(1);
		this._rangePoints.push(start);
		this._rangePoints.push(end);
		this._rangeCallbacks.push(callback);
	}

	calculate() {
		const segments = Array.from(new Set(this._rangePoints)).sort((a, b) =>
			a < b ? -1 : 1
		);
		const parallelism = segments.map(() => 0);
		const rangeStartIndices = [];
		for (let i = 0; i < this._rangePoints.length; i += 2) {
			const start = this._rangePoints[i];
			const end = this._rangePoints[i + 1];
			let idx = binarySearchBounds.eq(segments, start);
			rangeStartIndices.push(idx);
			do {
				parallelism[idx]++;
				idx++;
			} while (segments[idx] < end);
		}
		for (let i = 0; i < this._rangeCallbacks.length; i++) {
			const start = this._rangePoints[i * 2];
			const end = this._rangePoints[i * 2 + 1];
			let idx = rangeStartIndices[i];
			let sum = 0;
			let totalDuration = 0;
			let current = start;
			do {
				const p = parallelism[idx];
				idx++;
				const duration = segments[idx] - current;
				totalDuration += duration;
				current = segments[idx];
				sum += p * duration;
			} while (current < end);
			this._rangeCallbacks[i](sum / totalDuration);
		}
	}
}

module.exports = ParallelismFactorCalculator;
