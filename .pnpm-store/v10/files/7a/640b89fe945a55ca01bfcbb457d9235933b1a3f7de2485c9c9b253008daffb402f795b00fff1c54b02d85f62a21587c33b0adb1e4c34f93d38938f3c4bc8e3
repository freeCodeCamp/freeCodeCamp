/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * Simple counting semaphore used to limit how many asynchronous tasks may run
 * concurrently.
 */
class Semaphore {
	/**
	 * Initializes the semaphore with the number of permits that may be held at
	 * the same time.
	 * @param {number} available the amount available number of "tasks"
	 * in the Semaphore
	 */
	constructor(available) {
		this.available = available;
		/** @type {(() => void)[]} */
		this.waiters = [];
		/** @private */
		this._continue = this._continue.bind(this);
	}

	/**
	 * Acquires a permit for the callback immediately when one is available or
	 * queues the callback until another task releases its permit.
	 * @param {() => void} callback function block to capture and run
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

	/**
	 * Releases a permit and schedules the next waiting callback, if any.
	 */
	release() {
		this.available++;
		if (this.waiters.length > 0) {
			process.nextTick(this._continue);
		}
	}

	/**
	 * Drains the next waiting callback after a permit becomes available.
	 */
	_continue() {
		if (this.available > 0 && this.waiters.length > 0) {
			this.available--;
			const callback = /** @type {(() => void)} */ (this.waiters.pop());
			callback();
		}
	}
}

module.exports = Semaphore;
