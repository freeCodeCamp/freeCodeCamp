/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const t = require("@webassemblyjs/ast");
const { decode } = require("@webassemblyjs/wasm-parser");
const EnvironmentNotSupportAsyncWarning = require("../EnvironmentNotSupportAsyncWarning");
const Parser = require("../Parser");
const StaticExportsDependency = require("../dependencies/StaticExportsDependency");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");

/** @typedef {import("./AsyncWebAssemblyModulesPlugin").AsyncWasmModuleClass} AsyncWasmModule */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../Parser").PreparsedAst} PreparsedAst */

const WASM_HEADER = Buffer.from([0x00, 0x61, 0x73, 0x6d]);

const decoderOpts = {
	ignoreCodeSection: true,
	ignoreDataSection: true,

	// this will avoid having to lookup with identifiers in the ModuleContext
	ignoreCustomNameSection: true
};

class WebAssemblyParser extends Parser {
	/**
	 * Parses the provided source and updates the parser state.
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		if (!Buffer.isBuffer(source)) {
			throw new Error("WebAssemblyParser input must be a Buffer");
		}

		const buildMeta = /** @type {BuildMeta} */ (state.module.buildMeta);
		buildMeta.exportsType = "namespace";
		buildMeta.async = true;

		EnvironmentNotSupportAsyncWarning.check(
			state.module,
			state.compilation.runtimeTemplate,
			"asyncWebAssembly"
		);

		// flag it as async module
		const buildInfo = /** @type {BuildInfo} */ (state.module.buildInfo);

		buildInfo.strict = true;

		if (/** @type {AsyncWasmModule} */ (state.module).phase === "source") {
			// For source phase, only validate magic header
			if (source.length < 4 || !source.subarray(0, 4).equals(WASM_HEADER)) {
				throw new Error(
					"Source phase imports require valid WebAssembly modules. Invalid magic header (expected \\0asm)."
				);
			}

			// Source phase exports the WebAssembly.Module as default
			state.module.addDependency(
				new StaticExportsDependency(["default"], false)
			);

			// Skip full parsing - no exports/imports needed for source phase
			return state;
		}

		// parse it
		const program = decode(source, decoderOpts);
		const module = program.body[0];
		/** @type {string[]} */
		const exports = [];

		t.traverse(module, {
			ModuleExport({ node }) {
				exports.push(node.name);
			},

			ModuleImport({ node }) {
				const dep = new WebAssemblyImportDependency(
					node.module,
					node.name,
					node.descr,
					false
				);

				state.module.addDependency(dep);
			}
		});

		state.module.addDependency(new StaticExportsDependency(exports, false));

		return state;
	}
}

module.exports = WebAssemblyParser;
