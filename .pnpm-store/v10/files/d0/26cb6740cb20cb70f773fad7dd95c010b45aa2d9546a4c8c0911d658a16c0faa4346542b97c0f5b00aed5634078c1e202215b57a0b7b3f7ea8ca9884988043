/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

class Semaphore {
	/**
	 * Creates an instance of Semaphore.
	 * @param {number} available the amount available number of "tasks"
	 * in the Semaphore
	 */
	constructor(available) {
		this.available = available;
		/** @type {(function(): void)[]} */
		this.waiters = [];
		/** @private */
		this._continue = this._continue.bind(this);
	}

	/**
	 * @param {function(): void} callback function block to capture and run
	 * @returns {void}
	 */
	acquire(callback) {
		if (this.available > 0) {
			this.available--;
			callback();
		} else {
			this.waiters.push(callback);
		}
	}

	release() {
		this.available++;
		if (this.waiters.length > 0) {
			process.nextTick(this._continue);
		}
	}

	_continue() {
		if (this.available > 0 && this.waiters.length > 0) {
			this.available--;
			const callback = /** @type {(function(): void)} */ (this.waiters.pop());
			callback();
		}
	}
}

module.exports = Semaphore;
