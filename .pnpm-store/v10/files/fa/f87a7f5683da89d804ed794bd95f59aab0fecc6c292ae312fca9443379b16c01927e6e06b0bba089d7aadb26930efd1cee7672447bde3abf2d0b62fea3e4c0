/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ConcatenationScope = require("../ConcatenationScope");
const InitFragment = require("../InitFragment");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const { propertyAccess } = require("../util/property");
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
/** @typedef {import("./HarmonyExportInitFragment").ExportMap} ExportMap */

class HarmonyExportExpressionDependency extends NullDependency {
	/**
	 * Creates an instance of HarmonyExportExpressionDependency.
	 * @param {Range} range range
	 * @param {Range} rangeStatement range statement
	 * @param {string} prefix prefix
	 * @param {string | { id?: string | undefined, range: Range, prefix: string, suffix: string }=} declarationId declaration id
	 */
	constructor(range, rangeStatement, prefix, declarationId) {
		super();
		this.range = range;
		this.rangeStatement = rangeStatement;
		this.prefix = prefix;
		this.declarationId = declarationId;
		this.isAnonymousDefault = false;
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
	 * Gets module evaluation side effects state.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this dependency connects the module to referencing modules
	 */
	getModuleEvaluationSideEffectsState(moduleGraph) {
		// The expression/declaration is already covered by SideEffectsFlagPlugin
		return false;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.range);
		write(this.rangeStatement);
		write(this.prefix);
		write(this.declarationId);
		write(this.isAnonymousDefault);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.range = read();
		this.rangeStatement = read();
		this.prefix = read();
		this.declarationId = read();
		this.isAnonymousDefault = read();
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
	 * Applies the plugin by registering its hooks on the compiler.
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
			/** @type {string} */
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
					/** @type {ExportMap} */
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

			if (typeof declarationId !== "string" && dep.isAnonymousDefault) {
				// Fix .name for anonymous default export function declarations
				// see test/test262-cases/test/language/module-code/instn-named-bndng-dflt-fun-anon.js cspell:disable-line
				initFragments.push(
					new InitFragment(
						`Object.defineProperty(${name}, "name", { value: "default", configurable: true });\n`,
						InitFragment.STAGE_HARMONY_EXPORTS,
						2
					)
				);
			}
		} else {
			/** @type {string} */
			let content;
			let name = ConcatenationScope.DEFAULT_EXPORT;
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
						/** @type {ExportMap} */
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
					// No local `__WEBPACK_DEFAULT_EXPORT__` binding is created in this path,
					// so the anonymous-default `.name` fix-up below must reference the actual
					// assignment target instead. See issue #20793.
					name = `${exportsName}${propertyAccess(
						typeof used === "string" ? [used] : used
					)}`;
					content = `/* harmony default export */ ${name} = `;
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
				if (dep.isAnonymousDefault) {
					// Fix .name for anonymous default export expressions
					// see test/test262-cases/test/language/module-code/eval-export-dflt-cls-anon.js cspell:disable-line
					source.replace(
						dep.range[1],
						dep.rangeStatement[1] - 0.5,
						`);\n(Object.getOwnPropertyDescriptor(${name}, "name") || {}).writable || Object.defineProperty(${name}, "name", { value: "default", configurable: true });`
					);
				} else {
					source.replace(dep.range[1], dep.rangeStatement[1] - 0.5, ");");
				}
				return;
			}

			source.replace(dep.rangeStatement[0], dep.rangeStatement[1] - 1, content);
		}
	}
};

module.exports = HarmonyExportExpressionDependency;
