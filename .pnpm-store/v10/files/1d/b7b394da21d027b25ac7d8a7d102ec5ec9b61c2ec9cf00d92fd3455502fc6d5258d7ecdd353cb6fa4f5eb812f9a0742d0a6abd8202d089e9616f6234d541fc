/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const { RawSource, ReplaceSource } = require("webpack-sources");
const Generator = require("../Generator");
const InitFragment = require("../InitFragment");
const { JS_TYPES } = require("../ModuleSourceTypesConstants");
const HarmonyCompatibilityDependency = require("../dependencies/HarmonyCompatibilityDependency");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../DependenciesBlock")} DependenciesBlock */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate")} DependencyTemplate */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */

// TODO: clean up this file
// replace with newer constructs

const deprecatedGetInitFragments = util.deprecate(
	/**
	 * @param {DependencyTemplate} template template
	 * @param {Dependency} dependency dependency
	 * @param {DependencyTemplateContext} templateContext template context
	 * @returns {InitFragment<GenerateContext>[]} init fragments
	 */
	(template, dependency, templateContext) =>
		/** @type {DependencyTemplate & { getInitFragments: function(Dependency, DependencyTemplateContext): InitFragment<GenerateContext>[] }} */
		(template).getInitFragments(dependency, templateContext),
	"DependencyTemplate.getInitFragment is deprecated (use apply(dep, source, { initFragments }) instead)",
	"DEP_WEBPACK_JAVASCRIPT_GENERATOR_GET_INIT_FRAGMENTS"
);

class JavascriptGenerator extends Generator {
	/**
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return JS_TYPES;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		const originalSource = module.originalSource();
		if (!originalSource) {
			return 39;
		}
		return originalSource.size();
	}

	/**
	 * @param {NormalModule} module module for which the bailout reason should be determined
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(module, context) {
		// Only harmony modules are valid for optimization
		if (
			!module.buildMeta ||
			module.buildMeta.exportsType !== "namespace" ||
			module.presentationalDependencies === undefined ||
			!module.presentationalDependencies.some(
				d => d instanceof HarmonyCompatibilityDependency
			)
		) {
			return "Module is not an ECMAScript module";
		}

		// Some expressions are not compatible with module concatenation
		// because they may produce unexpected results. The plugin bails out
		// if some were detected upfront.
		if (module.buildInfo && module.buildInfo.moduleConcatenationBailout) {
			return `Module uses ${module.buildInfo.moduleConcatenationBailout}`;
		}
	}

	/**
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(module, generateContext) {
		const originalSource = module.originalSource();
		if (!originalSource) {
			return new RawSource("throw new Error('No source available');");
		}

		const source = new ReplaceSource(originalSource);
		/** @type {InitFragment<GenerateContext>[]} */
		const initFragments = [];

		this.sourceModule(module, initFragments, source, generateContext);

		return InitFragment.addToSource(source, initFragments, generateContext);
	}

	/**
	 * @param {Module} module the module to generate
	 * @param {InitFragment<GenerateContext>[]} initFragments mutable list of init fragments
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {GenerateContext} generateContext the generateContext
	 * @returns {void}
	 */
	sourceModule(module, initFragments, source, generateContext) {
		for (const dependency of module.dependencies) {
			this.sourceDependency(
				module,
				dependency,
				initFragments,
				source,
				generateContext
			);
		}

		if (module.presentationalDependencies !== undefined) {
			for (const dependency of module.presentationalDependencies) {
				this.sourceDependency(
					module,
					dependency,
					initFragments,
					source,
					generateContext
				);
			}
		}

		for (const childBlock of module.blocks) {
			this.sourceBlock(
				module,
				childBlock,
				initFragments,
				source,
				generateContext
			);
		}
	}

	/**
	 * @param {Module} module the module to generate
	 * @param {DependenciesBlock} block the dependencies block which will be processed
	 * @param {InitFragment<GenerateContext>[]} initFragments mutable list of init fragments
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {GenerateContext} generateContext the generateContext
	 * @returns {void}
	 */
	sourceBlock(module, block, initFragments, source, generateContext) {
		for (const dependency of block.dependencies) {
			this.sourceDependency(
				module,
				dependency,
				initFragments,
				source,
				generateContext
			);
		}

		for (const childBlock of block.blocks) {
			this.sourceBlock(
				module,
				childBlock,
				initFragments,
				source,
				generateContext
			);
		}
	}

	/**
	 * @param {Module} module the current module
	 * @param {Dependency} dependency the dependency to generate
	 * @param {InitFragment<GenerateContext>[]} initFragments mutable list of init fragments
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {GenerateContext} generateContext the render context
	 * @returns {void}
	 */
	sourceDependency(module, dependency, initFragments, source, generateContext) {
		const constructor =
			/** @type {new (...args: EXPECTED_ANY[]) => Dependency} */
			(dependency.constructor);
		const template = generateContext.dependencyTemplates.get(constructor);
		if (!template) {
			throw new Error(
				`No template for dependency: ${dependency.constructor.name}`
			);
		}

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
				/** @type {NonNullable<GenerateContext["codeGenerationResults"]>} */
				(generateContext.codeGenerationResults),
			initFragments,
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

		template.apply(dependency, source, templateContext);

		// TODO remove in webpack 6
		if ("getInitFragments" in template) {
			const fragments = deprecatedGetInitFragments(
				template,
				dependency,
				templateContext
			);

			if (fragments) {
				for (const fragment of fragments) {
					initFragments.push(fragment);
				}
			}
		}
	}
}

module.exports = JavascriptGenerator;
