/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../declarations/WebpackOptions").StatsOptions} StatsOptions */
/** @typedef {import("../declarations/WebpackOptions").StatsValue} StatsValue */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsCompilation} StatsCompilation */

class Stats {
	/**
	 * Creates an instance of Stats.
	 * @param {Compilation} compilation webpack compilation
	 */
	constructor(compilation) {
		this.compilation = compilation;
	}

	get hash() {
		return this.compilation.hash;
	}

	get startTime() {
		return this.compilation.startTime;
	}

	get endTime() {
		return this.compilation.endTime;
	}

	/**
	 * Checks whether this stats has warnings.
	 * @returns {boolean} true if the compilation had a warning
	 */
	hasWarnings() {
		return (
			this.compilation.getWarnings().length > 0 ||
			this.compilation.children.some((child) => child.getStats().hasWarnings())
		);
	}

	/**
	 * Checks whether this stats has errors.
	 * @returns {boolean} true if the compilation encountered an error
	 */
	hasErrors() {
		return (
			this.compilation.errors.length > 0 ||
			this.compilation.children.some((child) => child.getStats().hasErrors())
		);
	}

	/**
	 * Returns json output.
	 * @param {StatsValue=} options stats options
	 * @returns {StatsCompilation} json output
	 */
	toJson(options) {
		const normalizedOptions = this.compilation.createStatsOptions(options, {
			forToString: false
		});

		const statsFactory = this.compilation.createStatsFactory(normalizedOptions);

		return statsFactory.create("compilation", this.compilation, {
			compilation: this.compilation
		});
	}

	/**
	 * Returns a string representation.
	 * @param {StatsValue=} options stats options
	 * @returns {string} string output
	 */
	toString(options) {
		const normalizedOptions = this.compilation.createStatsOptions(options, {
			forToString: true
		});

		const statsFactory = this.compilation.createStatsFactory(normalizedOptions);
		const statsPrinter = this.compilation.createStatsPrinter(normalizedOptions);

		const data = statsFactory.create("compilation", this.compilation, {
			compilation: this.compilation
		});
		const result = statsPrinter.print("compilation", data);
		return result === undefined ? "" : result;
	}
}

module.exports = Stats;
