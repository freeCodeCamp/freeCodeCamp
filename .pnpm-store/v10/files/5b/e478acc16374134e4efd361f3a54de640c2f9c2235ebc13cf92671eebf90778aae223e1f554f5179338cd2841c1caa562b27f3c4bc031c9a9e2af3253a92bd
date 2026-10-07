/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */

class GetTrustedTypesPolicyRuntimeModule extends HelperRuntimeModule {
	/**
	 * @param {ReadOnlyRuntimeRequirements} runtimeRequirements runtime requirements
	 */
	constructor(runtimeRequirements) {
		super("trusted types policy");
		this.runtimeRequirements = runtimeRequirements;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate, outputOptions } = compilation;
		const { trustedTypes } = outputOptions;
		const fn = RuntimeGlobals.getTrustedTypesPolicy;
		const wrapPolicyCreationInTryCatch = trustedTypes
			? trustedTypes.onPolicyCreationFailure === "continue"
			: false;

		return Template.asString([
			"var policy;",
			`${fn} = ${runtimeTemplate.basicFunction("", [
				"// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.",
				"if (policy === undefined) {",
				Template.indent([
					"policy = {",
					Template.indent(
						[
							...(this.runtimeRequirements.has(RuntimeGlobals.createScript)
								? [
										`createScript: ${runtimeTemplate.returningFunction(
											"script",
											"script"
										)}`
									]
								: []),
							...(this.runtimeRequirements.has(RuntimeGlobals.createScriptUrl)
								? [
										`createScriptURL: ${runtimeTemplate.returningFunction(
											"url",
											"url"
										)}`
									]
								: [])
						].join(",\n")
					),
					"};",
					...(trustedTypes
						? [
								'if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {',
								Template.indent([
									...(wrapPolicyCreationInTryCatch ? ["try {"] : []),
									...[
										`policy = trustedTypes.createPolicy(${JSON.stringify(
											trustedTypes.policyName
										)}, policy);`
									].map(line =>
										wrapPolicyCreationInTryCatch ? Template.indent(line) : line
									),
									...(wrapPolicyCreationInTryCatch
										? [
												"} catch (e) {",
												Template.indent([
													`console.warn('Could not create trusted-types policy ${JSON.stringify(
														trustedTypes.policyName
													)}');`
												]),
												"}"
											]
										: [])
								]),
								"}"
							]
						: [])
				]),
				"}",
				"return policy;"
			])};`
		]);
	}
}

module.exports = GetTrustedTypesPolicyRuntimeModule;
