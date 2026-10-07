/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ConcatenationScope = require("../ConcatenationScope");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const propertyAccess = require("../util/propertyAccess");
const HarmonyExportInitFragment = require("./HarmonyExportInitFragment");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class HarmonyExportExpressionDependency extends NullDependency {
	/**
	 * @param {Range} range range
	 * @param {Range} rangeStatement range statement
	 * @param {string} prefix prefix
	 * @param {string | { range: Range, prefix: string, suffix: string }} [declarationId] declaration id
	 */
	constructor(range, rangeStatement, prefix, declarationId) {
		super();
		this.range = range;
		this.rangeStatement = rangeStatement;
		this.prefix = prefix;
		this.declarationId = declarationId;
	}

	get type() {
		return "harmony export expression";
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		return {
			exports: ["default"],
			priority: 1,
			terminalBinding: true,
			dependencies: undefined
		};
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this dependency connects the module to referencing modules
	 */
	getModuleEvaluationSideEffectsState(moduleGraph) {
		// The expression/declaration is already covered by SideEffectsFlagPlugin
		return false;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.range);
		write(this.rangeStatement);
		write(this.prefix);
		write(this.declarationId);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.range = read();
		this.rangeStatement = read();
		this.prefix = read();
		this.declarationId = read();
		super.deserialize(context);
	}
}

makeSerializable(
	HarmonyExportExpressionDependency,
	"webpack/lib/dependencies/HarmonyExportExpressionDependency"
);

HarmonyExportExpressionDependency.Template = class HarmonyExportDependencyTemplate extends (
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
		{
			module,
			moduleGraph,
			runtimeTemplate,
			runtimeRequirements,
			initFragments,
			runtime,
			concatenationScope
		}
	) {
		const dep = /** @type {HarmonyExportExpressionDependency} */ (dependency);
		const { declarationId } = dep;
		const exportsName = module.exportsArgument;
		if (declarationId) {
			let name;
			if (typeof declarationId === "string") {
				name = declarationId;
			} else {
				name = ConcatenationScope.DEFAULT_EXPORT;
				source.replace(
					declarationId.range[0],
					declarationId.range[1] - 1,
					`${declarationId.prefix}${name}${declarationId.suffix}`
				);
			}

			if (concatenationScope) {
				concatenationScope.registerExport("default", name);
			} else {
				const used = moduleGraph
					.getExportsInfo(module)
					.getUsedName("default", runtime);
				if (used) {
					const map = new Map();
					map.set(used, `/* export default binding */ ${name}`);
					initFragments.push(new HarmonyExportInitFragment(exportsName, map));
				}
			}

			source.replace(
				dep.rangeStatement[0],
				dep.range[0] - 1,
				`/* harmony default export */ ${dep.prefix}`
			);
		} else {
			/** @type {string} */
			let content;
			const name = ConcatenationScope.DEFAULT_EXPORT;
			if (runtimeTemplate.supportsConst()) {
				content = `/* harmony default export */ const ${name} = `;
				if (concatenationScope) {
					concatenationScope.registerExport("default", name);
				} else {
					const used = moduleGraph
						.getExportsInfo(module)
						.getUsedName("default", runtime);
					if (used) {
						runtimeRequirements.add(RuntimeGlobals.exports);
						const map = new Map();
						map.set(used, name);
						initFragments.push(new HarmonyExportInitFragment(exportsName, map));
					} else {
						content = `/* unused harmony default export */ var ${name} = `;
					}
				}
			} else if (concatenationScope) {
				content = `/* harmony default export */ var ${name} = `;
				concatenationScope.registerExport("default", name);
			} else {
				const used = moduleGraph
					.getExportsInfo(module)
					.getUsedName("default", runtime);
				if (used) {
					runtimeRequirements.add(RuntimeGlobals.exports);
					// This is a little bit incorrect as TDZ is not correct, but we can't use const.
					content = `/* harmony default export */ ${exportsName}${propertyAccess(
						typeof used === "string" ? [used] : used
					)} = `;
				} else {
					content = `/* unused harmony default export */ var ${name} = `;
				}
			}

			if (dep.range) {
				source.replace(
					dep.rangeStatement[0],
					dep.range[0] - 1,
					`${content}(${dep.prefix}`
				);
				source.replace(dep.range[1], dep.rangeStatement[1] - 0.5, ");");
				return;
			}

			source.replace(dep.rangeStatement[0], dep.rangeStatement[1] - 1, content);
		}
	}
};

module.exports = HarmonyExportExpressionDependency;
