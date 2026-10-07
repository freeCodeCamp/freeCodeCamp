/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../AsyncDependenciesBlock")} AsyncDependenciesBlock */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class AMDRequireDependency extends NullDependency {
	/**
	 * @param {Range} outerRange outer range
	 * @param {Range} arrayRange array range
	 * @param {Range | null} functionRange function range
	 * @param {Range | null} errorCallbackRange error callback range
	 */
	constructor(outerRange, arrayRange, functionRange, errorCallbackRange) {
		super();

		this.outerRange = outerRange;
		this.arrayRange = arrayRange;
		this.functionRange = functionRange;
		this.errorCallbackRange = errorCallbackRange;
		this.functionBindThis = false;
		this.errorCallbackBindThis = false;
	}

	get category() {
		return "amd";
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.outerRange);
		write(this.arrayRange);
		write(this.functionRange);
		write(this.errorCallbackRange);
		write(this.functionBindThis);
		write(this.errorCallbackBindThis);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.outerRange = read();
		this.arrayRange = read();
		this.functionRange = read();
		this.errorCallbackRange = read();
		this.functionBindThis = read();
		this.errorCallbackBindThis = read();

		super.deserialize(context);
	}
}

makeSerializable(
	AMDRequireDependency,
	"webpack/lib/dependencies/AMDRequireDependency"
);

AMDRequireDependency.Template = class AMDRequireDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(
		dependency,
		source,
		{ runtimeTemplate, moduleGraph, chunkGraph, runtimeRequirements }
	) {
		const dep = /** @type {AMDRequireDependency} */ (dependency);
		const depBlock = /** @type {AsyncDependenciesBlock} */ (
			moduleGraph.getParentBlock(dep)
		);
		const promise = runtimeTemplate.blockPromise({
			chunkGraph,
			block: depBlock,
			message: "AMD require",
			runtimeRequirements
		});

		// has array range but no function range
		if (dep.arrayRange && !dep.functionRange) {
			const startBlock = `${promise}.then(function() {`;
			const endBlock = `;})['catch'](${RuntimeGlobals.uncaughtErrorHandler})`;
			runtimeRequirements.add(RuntimeGlobals.uncaughtErrorHandler);

			source.replace(dep.outerRange[0], dep.arrayRange[0] - 1, startBlock);

			source.replace(dep.arrayRange[1], dep.outerRange[1] - 1, endBlock);

			return;
		}

		// has function range but no array range
		if (dep.functionRange && !dep.arrayRange) {
			const startBlock = `${promise}.then((`;
			const endBlock = `).bind(exports, ${RuntimeGlobals.require}, exports, module))['catch'](${RuntimeGlobals.uncaughtErrorHandler})`;
			runtimeRequirements.add(RuntimeGlobals.uncaughtErrorHandler);

			source.replace(dep.outerRange[0], dep.functionRange[0] - 1, startBlock);

			source.replace(dep.functionRange[1], dep.outerRange[1] - 1, endBlock);

			return;
		}

		// has array range, function range, and errorCallbackRange
		if (dep.arrayRange && dep.functionRange && dep.errorCallbackRange) {
			const startBlock = `${promise}.then(function() { `;
			const errorRangeBlock = `}${
				dep.functionBindThis ? ".bind(this)" : ""
			})['catch'](`;
			const endBlock = `${dep.errorCallbackBindThis ? ".bind(this)" : ""})`;

			source.replace(dep.outerRange[0], dep.arrayRange[0] - 1, startBlock);

			source.insert(dep.arrayRange[0], "var __WEBPACK_AMD_REQUIRE_ARRAY__ = ");

			source.replace(dep.arrayRange[1], dep.functionRange[0] - 1, "; (");

			source.insert(
				dep.functionRange[1],
				").apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);"
			);

			source.replace(
				dep.functionRange[1],
				dep.errorCallbackRange[0] - 1,
				errorRangeBlock
			);

			source.replace(
				dep.errorCallbackRange[1],
				dep.outerRange[1] - 1,
				endBlock
			);

			return;
		}

		// has array range, function range, but no errorCallbackRange
		if (dep.arrayRange && dep.functionRange) {
			const startBlock = `${promise}.then(function() { `;
			const endBlock = `}${
				dep.functionBindThis ? ".bind(this)" : ""
			})['catch'](${RuntimeGlobals.uncaughtErrorHandler})`;
			runtimeRequirements.add(RuntimeGlobals.uncaughtErrorHandler);

			source.replace(dep.outerRange[0], dep.arrayRange[0] - 1, startBlock);

			source.insert(dep.arrayRange[0], "var __WEBPACK_AMD_REQUIRE_ARRAY__ = ");

			source.replace(dep.arrayRange[1], dep.functionRange[0] - 1, "; (");

			source.insert(
				dep.functionRange[1],
				").apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);"
			);

			source.replace(dep.functionRange[1], dep.outerRange[1] - 1, endBlock);
		}
	}
};

module.exports = AMDRequireDependency;
