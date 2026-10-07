/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const identifierUtils = require("./util/identifier");

/** @typedef {import("../declarations/WebpackOptions").StatsOptions} StatsOptions */
/** @typedef {import("./Compilation").CreateStatsOptionsContext} CreateStatsOptionsContext */
/** @typedef {import("./Compilation").NormalizedStatsOptions} NormalizedStatsOptions */
/** @typedef {import("./Stats")} Stats */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").KnownStatsCompilation} KnownStatsCompilation */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsCompilation} StatsCompilation */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsError} StatsError */

/**
 * @param {string} str string
 * @param {string} prefix pref
 * @returns {string} indent
 */
const indent = (str, prefix) => {
	const rem = str.replace(/\n([^\n])/g, `\n${prefix}$1`);
	return prefix + rem;
};

/** @typedef {{ version: boolean, hash: boolean, errorsCount: boolean, warningsCount: boolean, errors: boolean, warnings: boolean, children: NormalizedStatsOptions[] }} ChildOptions */

class MultiStats {
	/**
	 * @param {Stats[]} stats the child stats
	 */
	constructor(stats) {
		this.stats = stats;
	}

	get hash() {
		return this.stats.map(stat => stat.hash).join("");
	}

	/**
	 * @returns {boolean} true if a child compilation encountered an error
	 */
	hasErrors() {
		return this.stats.some(stat => stat.hasErrors());
	}

	/**
	 * @returns {boolean} true if a child compilation had a warning
	 */
	hasWarnings() {
		return this.stats.some(stat => stat.hasWarnings());
	}

	/**
	 * @param {string | boolean | StatsOptions | undefined} options stats options
	 * @param {CreateStatsOptionsContext} context context
	 * @returns {ChildOptions} context context
	 */
	_createChildOptions(options, context) {
		const getCreateStatsOptions = () => {
			if (!options) {
				options = {};
			}

			const { children: childrenOptions = undefined, ...baseOptions } =
				typeof options === "string"
					? { preset: options }
					: /** @type {StatsOptions} */ (options);

			return { childrenOptions, baseOptions };
		};

		const children = this.stats.map((stat, idx) => {
			if (typeof options === "boolean") {
				return stat.compilation.createStatsOptions(options, context);
			}
			const { childrenOptions, baseOptions } = getCreateStatsOptions();
			const childOptions = Array.isArray(childrenOptions)
				? childrenOptions[idx]
				: childrenOptions;
			return stat.compilation.createStatsOptions(
				{
					...baseOptions,
					...(typeof childOptions === "string"
						? { preset: childOptions }
						: childOptions && typeof childOptions === "object"
							? childOptions
							: undefined)
				},
				context
			);
		});
		return {
			version: children.every(o => o.version),
			hash: children.every(o => o.hash),
			errorsCount: children.every(o => o.errorsCount),
			warningsCount: children.every(o => o.warningsCount),
			errors: children.every(o => o.errors),
			warnings: children.every(o => o.warnings),
			children
		};
	}

	/**
	 * @param {(string | boolean | StatsOptions)=} options stats options
	 * @returns {StatsCompilation} json output
	 */
	toJson(options) {
		const childOptions = this._createChildOptions(options, {
			forToString: false
		});
		/** @type {KnownStatsCompilation} */
		const obj = {};
		obj.children = this.stats.map((stat, idx) => {
			const obj = stat.toJson(childOptions.children[idx]);
			const compilationName = stat.compilation.name;
			const name =
				compilationName &&
				identifierUtils.makePathsRelative(
					stat.compilation.compiler.context,
					compilationName,
					stat.compilation.compiler.root
				);
			obj.name = name;
			return obj;
		});
		if (childOptions.version) {
			obj.version = obj.children[0].version;
		}
		if (childOptions.hash) {
			obj.hash = obj.children.map(j => j.hash).join("");
		}
		/**
		 * @param {StatsCompilation} j stats error
		 * @param {StatsError} obj Stats error
		 * @returns {TODO} result
		 */
		const mapError = (j, obj) => ({
			...obj,
			compilerPath: obj.compilerPath ? `${j.name}.${obj.compilerPath}` : j.name
		});
		if (childOptions.errors) {
			obj.errors = [];
			for (const j of obj.children) {
				const errors =
					/** @type {NonNullable<KnownStatsCompilation["errors"]>} */
					(j.errors);
				for (const i of errors) {
					obj.errors.push(mapError(j, i));
				}
			}
		}
		if (childOptions.warnings) {
			obj.warnings = [];
			for (const j of obj.children) {
				const warnings =
					/** @type {NonNullable<KnownStatsCompilation["warnings"]>} */
					(j.warnings);
				for (const i of warnings) {
					obj.warnings.push(mapError(j, i));
				}
			}
		}
		if (childOptions.errorsCount) {
			obj.errorsCount = 0;
			for (const j of obj.children) {
				obj.errorsCount += /** @type {number} */ (j.errorsCount);
			}
		}
		if (childOptions.warningsCount) {
			obj.warningsCount = 0;
			for (const j of obj.children) {
				obj.warningsCount += /** @type {number} */ (j.warningsCount);
			}
		}
		return obj;
	}

	/**
	 * @param {(string | boolean | StatsOptions)=} options stats options
	 * @returns {string} string output
	 */
	toString(options) {
		const childOptions = this._createChildOptions(options, {
			forToString: true
		});
		const results = this.stats.map((stat, idx) => {
			const str = stat.toString(childOptions.children[idx]);
			const compilationName = stat.compilation.name;
			const name =
				compilationName &&
				identifierUtils
					.makePathsRelative(
						stat.compilation.compiler.context,
						compilationName,
						stat.compilation.compiler.root
					)
					.replace(/\|/g, " ");
			if (!str) return str;
			return name ? `${name}:\n${indent(str, "  ")}` : str;
		});
		return results.filter(Boolean).join("\n\n");
	}
}

module.exports = MultiStats;
