/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { UsageState } = require("../ExportsInfo");
const makeSerializable = require("../util/makeSerializable");
const { filterRuntime, runtimeToString } = require("../util/runtime");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").RuntimeSpec} RuntimeSpec */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */

class PureExpressionDependency extends NullDependency {
	/**
	 * @param {Range} range the source range
	 */
	constructor(range) {
		super();
		this.range = range;
		/** @type {Set<string> | false} */
		this.usedByExports = false;
	}

	/**
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime current runtimes
	 * @returns {boolean | RuntimeSpec} runtime condition
	 */
	_getRuntimeCondition(moduleGraph, runtime) {
		const usedByExports = this.usedByExports;
		if (usedByExports !== false) {
			const selfModule =
				/** @type {Module} */
				(moduleGraph.getParentModule(this));
			const exportsInfo = moduleGraph.getExportsInfo(selfModule);
			const runtimeCondition = filterRuntime(runtime, runtime => {
				for (const exportName of usedByExports) {
					if (exportsInfo.getUsed(exportName, runtime) !== UsageState.Unused) {
						return true;
					}
				}
				return false;
			});
			return runtimeCondition;
		}
		return false;
	}

	/**
	 * Update the hash
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		const runtimeCondition = this._getRuntimeCondition(
			context.chunkGraph.moduleGraph,
			context.runtime
		);
		if (runtimeCondition === true) {
			return;
		} else if (runtimeCondition === false) {
			hash.update("null");
		} else {
			hash.update(
				`${runtimeToString(runtimeCondition)}|${runtimeToString(
					context.runtime
				)}`
			);
		}
		hash.update(String(this.range));
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this dependency connects the module to referencing modules
	 */
	getModuleEvaluationSideEffectsState(moduleGraph) {
		return false;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.range);
		write(this.usedByExports);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.range = read();
		this.usedByExports = read();
		super.deserialize(context);
	}
}

makeSerializable(
	PureExpressionDependency,
	"webpack/lib/dependencies/PureExpressionDependency"
);

PureExpressionDependency.Template = class PureExpressionDependencyTemplate extends (
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
		{ chunkGraph, moduleGraph, runtime, runtimeTemplate, runtimeRequirements }
	) {
		const dep = /** @type {PureExpressionDependency} */ (dependency);
		const runtimeCondition = dep._getRuntimeCondition(moduleGraph, runtime);
		if (runtimeCondition === true) {
			// Do nothing
		} else if (runtimeCondition === false) {
			source.insert(
				dep.range[0],
				"(/* unused pure expression or super */ null && ("
			);
			source.insert(dep.range[1], "))");
		} else {
			const condition = runtimeTemplate.runtimeConditionExpression({
				chunkGraph,
				runtime,
				runtimeCondition,
				runtimeRequirements
			});
			source.insert(
				dep.range[0],
				`(/* runtime-dependent pure expression or super */ ${condition} ? (`
			);
			source.insert(dep.range[1], ") : null)");
		}
	}
};

module.exports = PureExpressionDependency;
