/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource, PrefixSource } = require("webpack-sources");
const InitFragment = require("./InitFragment");
const Template = require("./Template");
const { mergeRuntime } = require("./util/runtime");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./Generator").GenerateContext} GenerateContext */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @param {string} condition condition
 * @param {string | Source} source source
 * @returns {string | Source} wrapped source
 */
const wrapInCondition = (condition, source) => {
	if (typeof source === "string") {
		return Template.asString([
			`if (${condition}) {`,
			Template.indent(source),
			"}",
			""
		]);
	}
	return new ConcatSource(
		`if (${condition}) {\n`,
		new PrefixSource("\t", source),
		"}\n"
	);
};

/**
 * @extends {InitFragment<GenerateContext>}
 */
class ConditionalInitFragment extends InitFragment {
	/**
	 * @param {string | Source | undefined} content the source code that will be included as initialization code
	 * @param {number} stage category of initialization code (contribute to order)
	 * @param {number} position position in the category (contribute to order)
	 * @param {string | undefined} key unique key to avoid emitting the same initialization code twice
	 * @param {RuntimeSpec | boolean} runtimeCondition in which runtime this fragment should be executed
	 * @param {string | Source=} endContent the source code that will be included at the end of the module
	 */
	constructor(
		content,
		stage,
		position,
		key,
		runtimeCondition = true,
		endContent = undefined
	) {
		super(content, stage, position, key, endContent);
		this.runtimeCondition = runtimeCondition;
	}

	/**
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included as initialization code
	 */
	getContent(context) {
		if (this.runtimeCondition === false || !this.content) return "";
		if (this.runtimeCondition === true) return this.content;
		const expr = context.runtimeTemplate.runtimeConditionExpression({
			chunkGraph: context.chunkGraph,
			runtimeRequirements: context.runtimeRequirements,
			runtime: context.runtime,
			runtimeCondition: this.runtimeCondition
		});
		if (expr === "true") return this.content;
		return wrapInCondition(expr, this.content);
	}

	/**
	 * @param {GenerateContext} context context
	 * @returns {string|Source=} the source code that will be included at the end of the module
	 */
	getEndContent(context) {
		if (this.runtimeCondition === false || !this.endContent) return "";
		if (this.runtimeCondition === true) return this.endContent;
		const expr = context.runtimeTemplate.runtimeConditionExpression({
			chunkGraph: context.chunkGraph,
			runtimeRequirements: context.runtimeRequirements,
			runtime: context.runtime,
			runtimeCondition: this.runtimeCondition
		});
		if (expr === "true") return this.endContent;
		return wrapInCondition(expr, this.endContent);
	}

	/**
	 * @param {ConditionalInitFragment} other fragment to merge with
	 * @returns {ConditionalInitFragment} merged fragment
	 */
	merge(other) {
		if (this.runtimeCondition === true) return this;
		if (other.runtimeCondition === true) return other;
		if (this.runtimeCondition === false) return other;
		if (other.runtimeCondition === false) return this;
		const runtimeCondition = mergeRuntime(
			this.runtimeCondition,
			other.runtimeCondition
		);
		return new ConditionalInitFragment(
			this.content,
			this.stage,
			this.position,
			this.key,
			runtimeCondition,
			this.endContent
		);
	}
}

module.exports = ConditionalInitFragment;
