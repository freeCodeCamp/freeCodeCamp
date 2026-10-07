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
/** @typedef {() => string} GenerateBeforeInstantiateStreaming */

/**
 * @typedef {object} AsyncWasmLoadingRuntimeModuleOptions
 * @property {GenerateLoadBinaryCode} generateLoadBinaryCode
 * @property {GenerateBeforeLoadBinaryCode=} generateBeforeLoadBinaryCode
 * @property {GenerateBeforeInstantiateStreaming=} generateBeforeInstantiateStreaming
 * @property {boolean} supportsStreaming
 */

class AsyncWasmLoadingRuntimeModule extends RuntimeModule {
	/**
	 * @param {AsyncWasmLoadingRuntimeModuleOptions} options options
	 */
	constructor({
		generateLoadBinaryCode,
		generateBeforeLoadBinaryCode,
		generateBeforeInstantiateStreaming,
		supportsStreaming
	}) {
		super("wasm loading", RuntimeModule.STAGE_NORMAL);
		/** @type {GenerateLoadBinaryCode} */
		this.generateLoadBinaryCode = generateLoadBinaryCode;
		/** @type {generateBeforeLoadBinaryCode | undefined} */
		this.generateBeforeLoadBinaryCode = generateBeforeLoadBinaryCode;
		/** @type {generateBeforeInstantiateStreaming | undefined} */
		this.generateBeforeInstantiateStreaming =
			generateBeforeInstantiateStreaming;
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
		const fn = RuntimeGlobals.instantiateWasm;
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
		const fallback = [
			`.then(${runtimeTemplate.returningFunction("x.arrayBuffer()", "x")})`,
			`.then(${runtimeTemplate.returningFunction(
				"WebAssembly.instantiate(bytes, importsObj)",
				"bytes"
			)})`,
			`.then(${runtimeTemplate.returningFunction(
				"Object.assign(exports, res.instance.exports)",
				"res"
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
						'if (typeof WebAssembly.instantiateStreaming === "function") {',
						Template.indent(
							this.generateBeforeInstantiateStreaming
								? this.generateBeforeInstantiateStreaming()
								: ""
						),
						Template.indent([
							"return WebAssembly.instantiateStreaming(res, importsObj)",
							Template.indent([
								".then(",
								Template.indent([
									`${runtimeTemplate.returningFunction(
										"Object.assign(exports, res.instance.exports)",
										"res"
									)},`,
									runtimeTemplate.basicFunction("e", [
										'if(res.headers.get("Content-Type") !== "application/wasm") {',
										Template.indent([
											'console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n", e);',
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
			"exports, wasmModuleId, wasmModuleHash, importsObj",
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

module.exports = AsyncWasmLoadingRuntimeModule;
