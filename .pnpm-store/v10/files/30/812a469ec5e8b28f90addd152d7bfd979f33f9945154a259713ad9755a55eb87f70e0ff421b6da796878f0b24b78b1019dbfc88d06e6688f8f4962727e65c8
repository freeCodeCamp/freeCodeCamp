/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource, PrefixSource } = require("webpack-sources");
const { WEBPACK_MODULE_TYPE_RUNTIME } = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").Output} OutputOptions */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("./Compilation").AssetInfo} AssetInfo */
/** @typedef {import("./Compilation").PathData} PathData */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./ModuleTemplate")} ModuleTemplate */
/** @typedef {import("./RuntimeModule")} RuntimeModule */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("./javascript/JavascriptModulesPlugin").ChunkRenderContext} ChunkRenderContext */
/** @typedef {import("./javascript/JavascriptModulesPlugin").RenderContext} RenderContext */

const START_LOWERCASE_ALPHABET_CODE = "a".charCodeAt(0);
const START_UPPERCASE_ALPHABET_CODE = "A".charCodeAt(0);
const DELTA_A_TO_Z = "z".charCodeAt(0) - START_LOWERCASE_ALPHABET_CODE + 1;
const NUMBER_OF_IDENTIFIER_START_CHARS = DELTA_A_TO_Z * 2 + 2; // a-z A-Z _ $
const NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS =
	NUMBER_OF_IDENTIFIER_START_CHARS + 10; // a-z A-Z _ $ 0-9
const FUNCTION_CONTENT_REGEX = /^function\s?\(\)\s?\{\r?\n?|\r?\n?\}$/g;
const INDENT_MULTILINE_REGEX = /^\t/gm;
const LINE_SEPARATOR_REGEX = /\r?\n/g;
const IDENTIFIER_NAME_REPLACE_REGEX = /^([^a-zA-Z$_])/;
const IDENTIFIER_ALPHA_NUMERIC_NAME_REPLACE_REGEX = /[^a-zA-Z0-9$]+/g;
const COMMENT_END_REGEX = /\*\//g;
const PATH_NAME_NORMALIZE_REPLACE_REGEX = /[^a-zA-Z0-9_!§$()=\-^°]+/g;
const MATCH_PADDED_HYPHENS_REPLACE_REGEX = /^-|-$/g;

/**
 * @typedef {object} RenderManifestOptions
 * @property {Chunk} chunk the chunk used to render
 * @property {string} hash
 * @property {string} fullHash
 * @property {OutputOptions} outputOptions
 * @property {CodeGenerationResults} codeGenerationResults
 * @property {{javascript: ModuleTemplate}} moduleTemplates
 * @property {DependencyTemplates} dependencyTemplates
 * @property {RuntimeTemplate} runtimeTemplate
 * @property {ModuleGraph} moduleGraph
 * @property {ChunkGraph} chunkGraph
 */

/** @typedef {RenderManifestEntryTemplated | RenderManifestEntryStatic} RenderManifestEntry */

/**
 * @typedef {object} RenderManifestEntryTemplated
 * @property {function(): Source} render
 * @property {TemplatePath} filenameTemplate
 * @property {PathData=} pathOptions
 * @property {AssetInfo=} info
 * @property {string} identifier
 * @property {string=} hash
 * @property {boolean=} auxiliary
 */

/**
 * @typedef {object} RenderManifestEntryStatic
 * @property {function(): Source} render
 * @property {string} filename
 * @property {AssetInfo} info
 * @property {string} identifier
 * @property {string=} hash
 * @property {boolean=} auxiliary
 */

/**
 * @typedef {object} HasId
 * @property {number | string} id
 */

/**
 * @typedef {function(Module, number): boolean} ModuleFilterPredicate
 */

class Template {
	/**
	 * @param {Function} fn a runtime function (.runtime.js) "template"
	 * @returns {string} the updated and normalized function string
	 */
	static getFunctionContent(fn) {
		return fn
			.toString()
			.replace(FUNCTION_CONTENT_REGEX, "")
			.replace(INDENT_MULTILINE_REGEX, "")
			.replace(LINE_SEPARATOR_REGEX, "\n");
	}

	/**
	 * @param {string} str the string converted to identifier
	 * @returns {string} created identifier
	 */
	static toIdentifier(str) {
		if (typeof str !== "string") return "";
		return str
			.replace(IDENTIFIER_NAME_REPLACE_REGEX, "_$1")
			.replace(IDENTIFIER_ALPHA_NUMERIC_NAME_REPLACE_REGEX, "_");
	}

	/**
	 * @param {string} str string to be converted to commented in bundle code
	 * @returns {string} returns a commented version of string
	 */
	static toComment(str) {
		if (!str) return "";
		return `/*! ${str.replace(COMMENT_END_REGEX, "* /")} */`;
	}

	/**
	 * @param {string} str string to be converted to "normal comment"
	 * @returns {string} returns a commented version of string
	 */
	static toNormalComment(str) {
		if (!str) return "";
		return `/* ${str.replace(COMMENT_END_REGEX, "* /")} */`;
	}

	/**
	 * @param {string} str string path to be normalized
	 * @returns {string} normalized bundle-safe path
	 */
	static toPath(str) {
		if (typeof str !== "string") return "";
		return str
			.replace(PATH_NAME_NORMALIZE_REPLACE_REGEX, "-")
			.replace(MATCH_PADDED_HYPHENS_REPLACE_REGEX, "");
	}

	// map number to a single character a-z, A-Z or multiple characters if number is too big
	/**
	 * @param {number} n number to convert to ident
	 * @returns {string} returns single character ident
	 */
	static numberToIdentifier(n) {
		if (n >= NUMBER_OF_IDENTIFIER_START_CHARS) {
			// use multiple letters
			return (
				Template.numberToIdentifier(n % NUMBER_OF_IDENTIFIER_START_CHARS) +
				Template.numberToIdentifierContinuation(
					Math.floor(n / NUMBER_OF_IDENTIFIER_START_CHARS)
				)
			);
		}

		// lower case
		if (n < DELTA_A_TO_Z) {
			return String.fromCharCode(START_LOWERCASE_ALPHABET_CODE + n);
		}
		n -= DELTA_A_TO_Z;

		// upper case
		if (n < DELTA_A_TO_Z) {
			return String.fromCharCode(START_UPPERCASE_ALPHABET_CODE + n);
		}

		if (n === DELTA_A_TO_Z) return "_";
		return "$";
	}

	/**
	 * @param {number} n number to convert to ident
	 * @returns {string} returns single character ident
	 */
	static numberToIdentifierContinuation(n) {
		if (n >= NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS) {
			// use multiple letters
			return (
				Template.numberToIdentifierContinuation(
					n % NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS
				) +
				Template.numberToIdentifierContinuation(
					Math.floor(n / NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS)
				)
			);
		}

		// lower case
		if (n < DELTA_A_TO_Z) {
			return String.fromCharCode(START_LOWERCASE_ALPHABET_CODE + n);
		}
		n -= DELTA_A_TO_Z;

		// upper case
		if (n < DELTA_A_TO_Z) {
			return String.fromCharCode(START_UPPERCASE_ALPHABET_CODE + n);
		}
		n -= DELTA_A_TO_Z;

		// numbers
		if (n < 10) {
			return `${n}`;
		}

		if (n === 10) return "_";
		return "$";
	}

	/**
	 * @param {string | string[]} s string to convert to identity
	 * @returns {string} converted identity
	 */
	static indent(s) {
		if (Array.isArray(s)) {
			return s.map(Template.indent).join("\n");
		}
		const str = s.trimEnd();
		if (!str) return "";
		const ind = str[0] === "\n" ? "" : "\t";
		return ind + str.replace(/\n([^\n])/g, "\n\t$1");
	}

	/**
	 * @param {string|string[]} s string to create prefix for
	 * @param {string} prefix prefix to compose
	 * @returns {string} returns new prefix string
	 */
	static prefix(s, prefix) {
		const str = Template.asString(s).trim();
		if (!str) return "";
		const ind = str[0] === "\n" ? "" : prefix;
		return ind + str.replace(/\n([^\n])/g, `\n${prefix}$1`);
	}

	/**
	 * @param {string|string[]} str string or string collection
	 * @returns {string} returns a single string from array
	 */
	static asString(str) {
		if (Array.isArray(str)) {
			return str.join("\n");
		}
		return str;
	}

	/**
	 * @typedef {object} WithId
	 * @property {string|number} id
	 */

	/**
	 * @param {WithId[]} modules a collection of modules to get array bounds for
	 * @returns {[number, number] | false} returns the upper and lower array bounds
	 * or false if not every module has a number based id
	 */
	static getModulesArrayBounds(modules) {
		let maxId = -Infinity;
		let minId = Infinity;
		for (const module of modules) {
			const moduleId = module.id;
			if (typeof moduleId !== "number") return false;
			if (maxId < moduleId) maxId = moduleId;
			if (minId > moduleId) minId = moduleId;
		}
		if (minId < 16 + String(minId).length) {
			// add minId x ',' instead of 'Array(minId).concat(…)'
			minId = 0;
		}
		// start with -1 because the first module needs no comma
		let objectOverhead = -1;
		for (const module of modules) {
			// module id + colon + comma
			objectOverhead += `${module.id}`.length + 2;
		}
		// number of commas, or when starting non-zero the length of Array(minId).concat()
		const arrayOverhead = minId === 0 ? maxId : 16 + `${minId}`.length + maxId;
		return arrayOverhead < objectOverhead ? [minId, maxId] : false;
	}

	/**
	 * @param {ChunkRenderContext} renderContext render context
	 * @param {Module[]} modules modules to render (should be ordered by identifier)
	 * @param {function(Module): Source | null} renderModule function to render a module
	 * @param {string=} prefix applying prefix strings
	 * @returns {Source | null} rendered chunk modules in a Source object or null if no modules
	 */
	static renderChunkModules(renderContext, modules, renderModule, prefix = "") {
		const { chunkGraph } = renderContext;
		const source = new ConcatSource();
		if (modules.length === 0) {
			return null;
		}
		/** @type {{id: string|number, source: Source|string}[]} */
		const allModules = modules.map(module => ({
			id: /** @type {ModuleId} */ (chunkGraph.getModuleId(module)),
			source: renderModule(module) || "false"
		}));
		const bounds = Template.getModulesArrayBounds(allModules);
		if (bounds) {
			// Render a spare array
			const minId = bounds[0];
			const maxId = bounds[1];
			if (minId !== 0) {
				source.add(`Array(${minId}).concat(`);
			}
			source.add("[\n");
			/** @type {Map<string|number, {id: string|number, source: Source|string}>} */
			const modules = new Map();
			for (const module of allModules) {
				modules.set(module.id, module);
			}
			for (let idx = minId; idx <= maxId; idx++) {
				const module = modules.get(idx);
				if (idx !== minId) {
					source.add(",\n");
				}
				source.add(`/* ${idx} */`);
				if (module) {
					source.add("\n");
					source.add(module.source);
				}
			}
			source.add(`\n${prefix}]`);
			if (minId !== 0) {
				source.add(")");
			}
		} else {
			// Render an object
			source.add("{\n");
			for (let i = 0; i < allModules.length; i++) {
				const module = allModules[i];
				if (i !== 0) {
					source.add(",\n");
				}
				source.add(`\n/***/ ${JSON.stringify(module.id)}:\n`);
				source.add(module.source);
			}
			source.add(`\n\n${prefix}}`);
		}
		return source;
	}

	/**
	 * @param {RuntimeModule[]} runtimeModules array of runtime modules in order
	 * @param {RenderContext & { codeGenerationResults?: CodeGenerationResults }} renderContext render context
	 * @returns {Source} rendered runtime modules in a Source object
	 */
	static renderRuntimeModules(runtimeModules, renderContext) {
		const source = new ConcatSource();
		for (const module of runtimeModules) {
			const codeGenerationResults = renderContext.codeGenerationResults;
			let runtimeSource;
			if (codeGenerationResults) {
				runtimeSource = codeGenerationResults.getSource(
					module,
					renderContext.chunk.runtime,
					WEBPACK_MODULE_TYPE_RUNTIME
				);
			} else {
				const codeGenResult = module.codeGeneration({
					chunkGraph: renderContext.chunkGraph,
					dependencyTemplates: renderContext.dependencyTemplates,
					moduleGraph: renderContext.moduleGraph,
					runtimeTemplate: renderContext.runtimeTemplate,
					runtime: renderContext.chunk.runtime,
					codeGenerationResults
				});
				if (!codeGenResult) continue;
				runtimeSource = codeGenResult.sources.get("runtime");
			}
			if (runtimeSource) {
				source.add(`${Template.toNormalComment(module.identifier())}\n`);
				if (!module.shouldIsolate()) {
					source.add(runtimeSource);
					source.add("\n\n");
				} else if (renderContext.runtimeTemplate.supportsArrowFunction()) {
					source.add("(() => {\n");
					source.add(new PrefixSource("\t", runtimeSource));
					source.add("\n})();\n\n");
				} else {
					source.add("!function() {\n");
					source.add(new PrefixSource("\t", runtimeSource));
					source.add("\n}();\n\n");
				}
			}
		}
		return source;
	}

	/**
	 * @param {RuntimeModule[]} runtimeModules array of runtime modules in order
	 * @param {RenderContext} renderContext render context
	 * @returns {Source} rendered chunk runtime modules in a Source object
	 */
	static renderChunkRuntimeModules(runtimeModules, renderContext) {
		return new PrefixSource(
			"/******/ ",
			new ConcatSource(
				`function(${RuntimeGlobals.require}) { // webpackRuntimeModules\n`,
				this.renderRuntimeModules(runtimeModules, renderContext),
				"}\n"
			)
		);
	}
}

module.exports = Template;
module.exports.NUMBER_OF_IDENTIFIER_START_CHARS =
	NUMBER_OF_IDENTIFIER_START_CHARS;
module.exports.NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS =
	NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS;
