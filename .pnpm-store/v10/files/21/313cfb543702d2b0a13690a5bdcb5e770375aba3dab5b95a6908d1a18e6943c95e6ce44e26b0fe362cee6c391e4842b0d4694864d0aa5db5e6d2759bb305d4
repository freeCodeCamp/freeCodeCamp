/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sergey Melyukov @smelukov
*/

"use strict";

const { ReplaceSource, RawSource, ConcatSource } = require("webpack-sources");
const { UsageState } = require("../ExportsInfo");
const Generator = require("../Generator");
const InitFragment = require("../InitFragment");
const {
	JS_AND_CSS_EXPORT_TYPES,
	JS_AND_CSS_TYPES
} = require("../ModuleSourceTypesConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").CssAutoGeneratorOptions} CssAutoGeneratorOptions */
/** @typedef {import("../../declarations/WebpackOptions").CssGlobalGeneratorOptions} CssGlobalGeneratorOptions */
/** @typedef {import("../../declarations/WebpackOptions").CssModuleGeneratorOptions} CssModuleGeneratorOptions */
/** @typedef {import("../CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").CssData} CssData */
/** @typedef {import("../DependencyTemplate").CssDependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Generator").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../util/Hash")} Hash */

class CssGenerator extends Generator {
	/**
	 * @param {CssAutoGeneratorOptions | CssGlobalGeneratorOptions | CssModuleGeneratorOptions} options options
	 */
	constructor(options) {
		super();
		this.convention = options.exportsConvention;
		this.localIdentName = options.localIdentName;
		this.exportsOnly = options.exportsOnly;
		this.esModule = options.esModule;
	}

	/**
	 * @param {NormalModule} module module for which the bailout reason should be determined
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(module, context) {
		if (!this.esModule) {
			return "Module is not an ECMAScript module";
		}

		return undefined;
	}

	/**
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(module, generateContext) {
		const source =
			generateContext.type === "javascript"
				? new ReplaceSource(new RawSource(""))
				: new ReplaceSource(/** @type {Source} */ (module.originalSource()));

		/** @type {InitFragment<GenerateContext>[]} */
		const initFragments = [];
		/** @type {CssData} */
		const cssData = {
			esModule: this.esModule,
			exports: new Map()
		};

		/** @type {InitFragment<GenerateContext>[] | undefined} */
		let chunkInitFragments;
		/** @type {DependencyTemplateContext} */
		const templateContext = {
			runtimeTemplate: generateContext.runtimeTemplate,
			dependencyTemplates: generateContext.dependencyTemplates,
			moduleGraph: generateContext.moduleGraph,
			chunkGraph: generateContext.chunkGraph,
			module,
			runtime: generateContext.runtime,
			runtimeRequirements: generateContext.runtimeRequirements,
			concatenationScope: generateContext.concatenationScope,
			codeGenerationResults:
				/** @type {CodeGenerationResults} */
				(generateContext.codeGenerationResults),
			initFragments,
			cssData,
			get chunkInitFragments() {
				if (!chunkInitFragments) {
					const data =
						/** @type {NonNullable<GenerateContext["getData"]>} */
						(generateContext.getData)();
					chunkInitFragments = data.get("chunkInitFragments");
					if (!chunkInitFragments) {
						chunkInitFragments = [];
						data.set("chunkInitFragments", chunkInitFragments);
					}
				}

				return chunkInitFragments;
			}
		};

		/**
		 * @param {Dependency} dependency dependency
		 */
		const handleDependency = dependency => {
			const constructor =
				/** @type {new (...args: EXPECTED_ANY[]) => Dependency} */
				(dependency.constructor);
			const template = generateContext.dependencyTemplates.get(constructor);
			if (!template) {
				throw new Error(
					`No template for dependency: ${dependency.constructor.name}`
				);
			}

			template.apply(dependency, source, templateContext);
		};

		for (const dependency of module.dependencies) {
			handleDependency(dependency);
		}

		switch (generateContext.type) {
			case "javascript": {
				module.buildInfo.cssData = cssData;

				generateContext.runtimeRequirements.add(RuntimeGlobals.module);

				if (generateContext.concatenationScope) {
					const source = new ConcatSource();
					const usedIdentifiers = new Set();
					for (const [name, v] of cssData.exports) {
						const usedName = generateContext.moduleGraph
							.getExportInfo(module, name)
							.getUsedName(name, generateContext.runtime);
						if (!usedName) {
							continue;
						}
						let identifier = Template.toIdentifier(usedName);
						const { RESERVED_IDENTIFIER } = require("../util/propertyName");
						if (RESERVED_IDENTIFIER.has(identifier)) {
							identifier = `_${identifier}`;
						}
						const i = 0;
						while (usedIdentifiers.has(identifier)) {
							identifier = Template.toIdentifier(name + i);
						}
						usedIdentifiers.add(identifier);
						generateContext.concatenationScope.registerExport(name, identifier);
						source.add(
							`${
								generateContext.runtimeTemplate.supportsConst()
									? "const"
									: "var"
							} ${identifier} = ${JSON.stringify(v)};\n`
						);
					}
					return source;
				}

				const needNsObj =
					this.esModule &&
					generateContext.moduleGraph
						.getExportsInfo(module)
						.otherExportsInfo.getUsed(generateContext.runtime) !==
						UsageState.Unused;

				if (needNsObj) {
					generateContext.runtimeRequirements.add(
						RuntimeGlobals.makeNamespaceObject
					);
				}

				const exports = [];

				for (const [name, v] of cssData.exports) {
					exports.push(`\t${JSON.stringify(name)}: ${JSON.stringify(v)}`);
				}

				return new RawSource(
					`${needNsObj ? `${RuntimeGlobals.makeNamespaceObject}(` : ""}${
						module.moduleArgument
					}.exports = {\n${exports.join(",\n")}\n}${needNsObj ? ")" : ""};`
				);
			}
			case "css": {
				if (module.presentationalDependencies !== undefined) {
					for (const dependency of module.presentationalDependencies) {
						handleDependency(dependency);
					}
				}

				generateContext.runtimeRequirements.add(RuntimeGlobals.hasCssModules);

				return InitFragment.addToSource(source, initFragments, generateContext);
			}
		}
	}

	/**
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		// TODO, find a better way to prevent the original module from being removed after concatenation, maybe it is a bug
		return this.exportsOnly ? JS_AND_CSS_EXPORT_TYPES : JS_AND_CSS_TYPES;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		switch (type) {
			case "javascript": {
				if (!module.buildInfo.cssData) {
					return 42;
				}

				const exports = module.buildInfo.cssData.exports;
				const stringifiedExports = JSON.stringify(
					Array.from(exports).reduce((obj, [key, value]) => {
						obj[key] = value;
						return obj;
					}, {})
				);

				return stringifiedExports.length + 42;
			}
			case "css": {
				const originalSource = module.originalSource();

				if (!originalSource) {
					return 0;
				}

				return originalSource.size();
			}
		}
	}

	/**
	 * @param {Hash} hash hash that will be modified
	 * @param {UpdateHashContext} updateHashContext context for updating hash
	 */
	updateHash(hash, { module }) {
		hash.update(this.esModule.toString());
	}
}

module.exports = CssGenerator;
