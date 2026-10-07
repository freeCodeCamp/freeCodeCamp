/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation")} Compilation */

/** @typedef {(wasmModuleSrcPath: string) => string} GenerateBeforeLoadBinaryCode */
/** @typedef {(wasmModuleSrcPath: string) => string} GenerateLoadBinaryCode */
/** @typedef {() => string} GenerateBeforeCompileStreaming */

/**
 * @typedef {object} AsyncWasmCompileRuntimeModuleOptions
 * @property {GenerateLoadBinaryCode} generateLoadBinaryCode
 * @property {GenerateBeforeLoadBinaryCode=} generateBeforeLoadBinaryCode
 * @property {GenerateBeforeCompileStreaming=} generateBeforeCompileStreaming
 * @property {boolean} supportsStreaming
 */

class AsyncWasmCompileRuntimeModule extends RuntimeModule {
	/**
	 * @param {AsyncWasmCompileRuntimeModuleOptions} options options
	 */
	constructor({
		generateLoadBinaryCode,
		generateBeforeLoadBinaryCode,
		generateBeforeCompileStreaming,
		supportsStreaming
	}) {
		super("wasm compile", RuntimeModule.STAGE_NORMAL);
		/** @type {GenerateLoadBinaryCode} */
		this.generateLoadBinaryCode = generateLoadBinaryCode;
		/** @type {GenerateBeforeLoadBinaryCode | undefined} */
		this.generateBeforeLoadBinaryCode = generateBeforeLoadBinaryCode;
		/** @type {GenerateBeforeCompileStreaming | undefined} */
		this.generateBeforeCompileStreaming = generateBeforeCompileStreaming;
		/** @type {boolean} */
		this.supportsStreaming = supportsStreaming;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const { outputOptions, runtimeTemplate } = compilation;
		const fn = RuntimeGlobals.compileWasm;
		const wasmModuleSrcPath = compilation.getPath(
			JSON.stringify(outputOptions.webassemblyModuleFilename),
			{
				hash: `" + ${RuntimeGlobals.getFullHash}() + "`,
				hashWithLength: (length) =>
					`" + ${RuntimeGlobals.getFullHash}}().slice(0, ${length}) + "`,
				module: {
					id: '" + wasmModuleId + "',
					hash: '" + wasmModuleHash + "',
					hashWithLength(length) {
						return `" + wasmModuleHash.slice(0, ${length}) + "`;
					}
				},
				runtime: chunk.runtime
			}
		);

		const loader = this.generateLoadBinaryCode(wasmModuleSrcPath);

		// Fallback path: fetch -> arrayBuffer -> WebAssembly.compile
		const fallback = [
			`.then(${runtimeTemplate.returningFunction("x.arrayBuffer()", "x")})`,
			`.then(${runtimeTemplate.returningFunction(
				"WebAssembly.compile(bytes)",
				"bytes"
			)})`
		];

		const getStreaming = () => {
			/**
			 * @param {string[]} text text
			 * @returns {string} merged text
			 */
			const concat = (...text) => text.join("");
			return [
				this.generateBeforeLoadBinaryCode
					? this.generateBeforeLoadBinaryCode(wasmModuleSrcPath)
					: "",
				`var req = ${loader};`,
				`var fallback = ${runtimeTemplate.returningFunction(
					Template.asString(["req", Template.indent(fallback)])
				)};`,
				concat(
					"return req.then(",
					runtimeTemplate.basicFunction("res", [
						'if (typeof WebAssembly.compileStreaming === "function") {',
						Template.indent(
							this.generateBeforeCompileStreaming
								? this.generateBeforeCompileStreaming()
								: ""
						),
						Template.indent([
							"return WebAssembly.compileStreaming(res)",
							Template.indent([
								".catch(",
								Template.indent([
									runtimeTemplate.basicFunction("e", [
										'if(res.headers.get("Content-Type") !== "application/wasm") {',
										Template.indent([
											'console.warn("`WebAssembly.compileStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.compile` which is slower. Original error:\\n", e);',
											"return fallback();"
										]),
										"}",
										"throw e;"
									])
								]),
								");"
							])
						]),
						"}",
						"return fallback();"
					]),
					");"
				)
			];
		};

		return `${fn} = ${runtimeTemplate.basicFunction(
			"wasmModuleId, wasmModuleHash",
			this.supportsStreaming
				? getStreaming()
				: [
						this.generateBeforeLoadBinaryCode
							? this.generateBeforeLoadBinaryCode(wasmModuleSrcPath)
							: "",
						`return ${loader}`,
						`${Template.indent(fallback)};`
					]
		)};`;
	}
}

module.exports = AsyncWasmCompileRuntimeModule;
