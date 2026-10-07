/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Compilation")} Compilation */

class ToBinaryRuntimeModule extends RuntimeModule {
	constructor() {
		super("to binary");
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const fn = RuntimeGlobals.toBinary;
		const { runtimeTemplate } = compilation;

		// Inspired by esbuild

		const isNodePlatform = compilation.compiler.platform.node;
		const isWebPlatform = compilation.compiler.platform.web;
		const isNeutralPlatform = runtimeTemplate.isNeutralPlatform();
		const toImmutableBytes = runtimeTemplate.basicFunction("value", [
			runtimeTemplate.destructureObject(["buffer"], "value"),
			`${runtimeTemplate.renderConst()} throwErr = ${runtimeTemplate.basicFunction("", ["throw new TypeError('ArrayBuffer is immutable');"])};`,
			"Object.defineProperties(buffer, { immutable: { value: true },  resize: { value: throwErr }, transfer: { value: throwErr }, transferToFixedLength: { value: throwErr } });",
			"Object.freeze(buffer);",
			"return value;"
		]);

		return Template.asString([
			"// define to binary helper",
			`${runtimeTemplate.renderConst()} toImmutableBytes = ${toImmutableBytes}`,
			`${fn} = ${isNeutralPlatform ? "typeof Buffer !== 'undefined' ? " : ""}${
				isNodePlatform || isNeutralPlatform
					? `${runtimeTemplate.returningFunction("toImmutableBytes(new Uint8Array(Buffer.from(base64, 'base64')))", "base64")}`
					: ""
			} ${isNeutralPlatform ? ": " : ""}${
				isWebPlatform || isNeutralPlatform
					? `(${runtimeTemplate.basicFunction("", [
							`${runtimeTemplate.renderConst()} table = new Uint8Array(128);`,
							"for (var i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;",
							`return ${runtimeTemplate.basicFunction("base64", [
								`${runtimeTemplate.renderConst()} n = base64.length, bytes = new Uint8Array((n - (base64[n - 1] == '=') - (base64[n - 2] == '=')) * 3 / 4 | 0);`,
								"for (var i = 0, j = 0; i < n;) {",
								Template.indent([
									`${runtimeTemplate.renderConst()} c0 = table[base64.charCodeAt(i++)], c1 = table[base64.charCodeAt(i++)];`,
									`${runtimeTemplate.renderConst()} c2 = table[base64.charCodeAt(i++)], c3 = table[base64.charCodeAt(i++)];`,
									"bytes[j++] = (c0 << 2) | (c1 >> 4);",
									"bytes[j++] = (c1 << 4) | (c2 >> 2);",
									"bytes[j++] = (c2 << 6) | c3;"
								]),
								"}",
								"return toImmutableBytes(bytes)"
							])}`
						])})();`
					: ""
			}`
		]);
	}
}

module.exports = ToBinaryRuntimeModule;
