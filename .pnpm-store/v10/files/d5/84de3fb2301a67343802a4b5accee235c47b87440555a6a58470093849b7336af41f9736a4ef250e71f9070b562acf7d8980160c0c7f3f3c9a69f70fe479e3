/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const asyncLib = require("neo-async");

/** @typedef {import("./MultiCompiler")} MultiCompiler */
/** @typedef {import("./Watching")} Watching */

/**
 * @template T
 * @callback Callback
 * @param {(Error | null)=} err
 * @param {T=} result
 */

class MultiWatching {
	/**
	 * @param {Watching[]} watchings child compilers' watchers
	 * @param {MultiCompiler} compiler the compiler
	 */
	constructor(watchings, compiler) {
		this.watchings = watchings;
		this.compiler = compiler;
	}

	/**
	 * @param {Callback<void>=} callback signals when the build has completed again
	 * @returns {void}
	 */
	invalidate(callback) {
		if (callback) {
			asyncLib.each(
				this.watchings,
				(watching, callback) => watching.invalidate(callback),
				callback
			);
		} else {
			for (const watching of this.watchings) {
				watching.invalidate();
			}
		}
	}

	suspend() {
		for (const watching of this.watchings) {
			watching.suspend();
		}
	}

	resume() {
		for (const watching of this.watchings) {
			watching.resume();
		}
	}

	/**
	 * @param {Callback<void>} callback signals when the watcher is closed
	 * @returns {void}
	 */
	close(callback) {
		asyncLib.each(
			this.watchings,
			(watching, finishedCallback) => {
				watching.close(finishedCallback);
			},
			err => {
				this.compiler.hooks.watchClose.call();
				if (typeof callback === "function") {
					this.compiler.running = false;
					callback(err);
				}
			}
		);
	}
}

module.exports = MultiWatching;
