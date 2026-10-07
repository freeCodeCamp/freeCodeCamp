/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const createHash = require("./util/createHash");

/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./DependencyTemplate")} DependencyTemplate */
/** @typedef {typeof import("./util/Hash")} Hash */

/** @typedef {new (...args: any[]) => Dependency} DependencyConstructor */

class DependencyTemplates {
	/**
	 * @param {string | Hash} hashFunction the hash function to use
	 */
	constructor(hashFunction = "md4") {
		/** @type {Map<Function, DependencyTemplate>} */
		this._map = new Map();
		/** @type {string} */
		this._hash = "31d6cfe0d16ae931b73c59d7e0c089c0";
		this._hashFunction = hashFunction;
	}

	/**
	 * @param {DependencyConstructor} dependency Constructor of Dependency
	 * @returns {DependencyTemplate | undefined} template for this dependency
	 */
	get(dependency) {
		return this._map.get(dependency);
	}

	/**
	 * @param {DependencyConstructor} dependency Constructor of Dependency
	 * @param {DependencyTemplate} dependencyTemplate template for this dependency
	 * @returns {void}
	 */
	set(dependency, dependencyTemplate) {
		this._map.set(dependency, dependencyTemplate);
	}

	/**
	 * @param {string} part additional hash contributor
	 * @returns {void}
	 */
	updateHash(part) {
		const hash = createHash(this._hashFunction);
		hash.update(`${this._hash}${part}`);
		this._hash = /** @type {string} */ (hash.digest("hex"));
	}

	getHash() {
		return this._hash;
	}

	clone() {
		const newInstance = new DependencyTemplates(this._hashFunction);
		newInstance._map = new Map(this._map);
		newInstance._hash = this._hash;
		return newInstance;
	}
}

module.exports = DependencyTemplates;
