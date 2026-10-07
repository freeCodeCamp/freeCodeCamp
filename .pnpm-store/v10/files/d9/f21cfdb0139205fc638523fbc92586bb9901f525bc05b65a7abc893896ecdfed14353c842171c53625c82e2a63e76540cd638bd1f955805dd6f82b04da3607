/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const t = require("@webassemblyjs/ast");
const { moduleContextFromModuleAST } = require("@webassemblyjs/ast");
const { decode } = require("@webassemblyjs/wasm-parser");
const Parser = require("../Parser");
const StaticExportsDependency = require("../dependencies/StaticExportsDependency");
const WebAssemblyExportImportedDependency = require("../dependencies/WebAssemblyExportImportedDependency");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");

/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../Parser").PreparsedAst} PreparsedAst */

const JS_COMPAT_TYPES = new Set(["i32", "i64", "f32", "f64", "externref"]);

/**
 * @param {t.Signature} signature the func signature
 * @returns {null | string} the type incompatible with js types
 */
const getJsIncompatibleType = signature => {
	for (const param of signature.params) {
		if (!JS_COMPAT_TYPES.has(param.valtype)) {
			return `${param.valtype} as parameter`;
		}
	}
	for (const type of signature.results) {
		if (!JS_COMPAT_TYPES.has(type)) return `${type} as result`;
	}
	return null;
};

/**
 * TODO why are there two different Signature types?
 * @param {t.FuncSignature} signature the func signature
 * @returns {null | string} the type incompatible with js types
 */
const getJsIncompatibleTypeOfFuncSignature = signature => {
	for (const param of signature.args) {
		if (!JS_COMPAT_TYPES.has(param)) {
			return `${param} as parameter`;
		}
	}
	for (const type of signature.result) {
		if (!JS_COMPAT_TYPES.has(type)) return `${type} as result`;
	}
	return null;
};

const decoderOpts = {
	ignoreCodeSection: true,
	ignoreDataSection: true,

	// this will avoid having to lookup with identifiers in the ModuleContext
	ignoreCustomNameSection: true
};

class WebAssemblyParser extends Parser {
	/**
	 * @param {{}=} options parser options
	 */
	constructor(options) {
		super();
		this.hooks = Object.freeze({});
		this.options = options;
	}

	/**
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		if (!Buffer.isBuffer(source)) {
			throw new Error("WebAssemblyParser input must be a Buffer");
		}

		// flag it as ESM
		/** @type {BuildInfo} */
		(state.module.buildInfo).strict = true;
		/** @type {BuildMeta} */
		(state.module.buildMeta).exportsType = "namespace";

		// parse it
		const program = decode(source, decoderOpts);
		const module = program.body[0];

		const moduleContext = moduleContextFromModuleAST(module);

		// extract imports and exports
		/** @type {string[]} */
		const exports = [];
		const buildMeta = /** @type {BuildMeta} */ (state.module.buildMeta);
		/** @type {Record<string, string> | undefined} */
		let jsIncompatibleExports = (buildMeta.jsIncompatibleExports = undefined);

		/** @type {TODO[]} */
		const importedGlobals = [];
		t.traverse(module, {
			ModuleExport({ node }) {
				const descriptor = node.descr;

				if (descriptor.exportType === "Func") {
					const funcIdx = descriptor.id.value;

					/** @type {t.FuncSignature} */
					const funcSignature = moduleContext.getFunction(funcIdx);

					const incompatibleType =
						getJsIncompatibleTypeOfFuncSignature(funcSignature);

					if (incompatibleType) {
						if (jsIncompatibleExports === undefined) {
							jsIncompatibleExports =
								/** @type {BuildMeta} */
								(state.module.buildMeta).jsIncompatibleExports = {};
						}
						jsIncompatibleExports[node.name] = incompatibleType;
					}
				}

				exports.push(node.name);

				if (node.descr && node.descr.exportType === "Global") {
					const refNode =
						importedGlobals[/** @type {TODO} */ (node.descr.id.value)];
					if (refNode) {
						const dep = new WebAssemblyExportImportedDependency(
							node.name,
							refNode.module,
							refNode.name,
							refNode.descr.valtype
						);

						state.module.addDependency(dep);
					}
				}
			},

			Global({ node }) {
				const init = node.init[0];

				let importNode = null;

				if (init.id === "get_global") {
					const globalIdx = init.args[0].value;

					if (globalIdx < importedGlobals.length) {
						importNode = importedGlobals[globalIdx];
					}
				}

				importedGlobals.push(importNode);
			},

			ModuleImport({ node }) {
				/** @type {false | string} */
				let onlyDirectImport = false;

				if (t.isMemory(node.descr) === true) {
					onlyDirectImport = "Memory";
				} else if (t.isTable(node.descr) === true) {
					onlyDirectImport = "Table";
				} else if (t.isFuncImportDescr(node.descr) === true) {
					const incompatibleType = getJsIncompatibleType(
						/** @type {t.Signature} */ (node.descr.signature)
					);
					if (incompatibleType) {
						onlyDirectImport = `Non-JS-compatible Func Signature (${incompatibleType})`;
					}
				} else if (t.isGlobalType(node.descr) === true) {
					const type = /** @type {string} */ (node.descr.valtype);
					if (!JS_COMPAT_TYPES.has(type)) {
						onlyDirectImport = `Non-JS-compatible Global Type (${type})`;
					}
				}

				const dep = new WebAssemblyImportDependency(
					node.module,
					node.name,
					node.descr,
					onlyDirectImport
				);

				state.module.addDependency(dep);

				if (t.isGlobalType(node.descr)) {
					importedGlobals.push(node);
				}
			}
		});

		state.module.addDependency(new StaticExportsDependency(exports, false));

		return state;
	}
}

module.exports = WebAssemblyParser;
