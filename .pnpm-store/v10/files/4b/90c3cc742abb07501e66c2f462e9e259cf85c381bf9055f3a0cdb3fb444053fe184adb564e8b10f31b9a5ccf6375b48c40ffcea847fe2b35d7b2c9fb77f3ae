/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Compiler")} Compiler */

class AddManagedPathsPlugin {
	/**
	 * @param {Iterable<string | RegExp>} managedPaths list of managed paths
	 * @param {Iterable<string | RegExp>} immutablePaths list of immutable paths
	 * @param {Iterable<string | RegExp>} unmanagedPaths list of unmanaged paths
	 */
	constructor(managedPaths, immutablePaths, unmanagedPaths) {
		this.managedPaths = new Set(managedPaths);
		this.immutablePaths = new Set(immutablePaths);
		this.unmanagedPaths = new Set(unmanagedPaths);
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		for (const managedPath of this.managedPaths) {
			compiler.managedPaths.add(managedPath);
		}
		for (const immutablePath of this.immutablePaths) {
			compiler.immutablePaths.add(immutablePath);
		}
		for (const unmanagedPath of this.unmanagedPaths) {
			compiler.unmanagedPaths.add(unmanagedPath);
		}
	}
}

module.exports = AddManagedPathsPlugin;
