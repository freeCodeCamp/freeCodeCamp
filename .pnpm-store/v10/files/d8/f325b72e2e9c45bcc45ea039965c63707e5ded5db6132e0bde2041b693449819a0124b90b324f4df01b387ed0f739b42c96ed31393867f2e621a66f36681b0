/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { parseResource } = require("../util/identifier");

/** @typedef {import("estree").Node} EsTreeNode */
/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../../declarations/WebpackOptions").ModuleOptionsNormalized} ModuleOptions */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/BasicEvaluatedExpression")} BasicEvaluatedExpression */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("./ContextDependency")} ContextDependency */
/** @typedef {import("./ContextDependency").ContextDependencyOptions} ContextDependencyOptions */

/**
 * Escapes regular expression metacharacters
 * @param {string} str String to quote
 * @returns {string} Escaped string
 */
const quoteMeta = str => str.replace(/[-[\]\\/{}()*+?.^$|]/g, "\\$&");

/**
 * @param {string} prefix prefix
 * @returns {{prefix: string, context: string}} result
 */
const splitContextFromPrefix = prefix => {
	const idx = prefix.lastIndexOf("/");
	let context = ".";
	if (idx >= 0) {
		context = prefix.slice(0, idx);
		prefix = `.${prefix.slice(idx)}`;
	}
	return {
		context,
		prefix
	};
};

/** @typedef {Partial<Omit<ContextDependencyOptions, "resource">>} PartialContextDependencyOptions */
/** @typedef {{ new(options: ContextDependencyOptions, range: Range, valueRange: [number, number], ...args: any[]): ContextDependency }} ContextDependencyConstructor */

/**
 * @param {ContextDependencyConstructor} Dep the Dependency class
 * @param {Range} range source range
 * @param {BasicEvaluatedExpression} param context param
 * @param {EsTreeNode} expr expr
 * @param {Pick<JavascriptParserOptions, `${"expr"|"wrapped"}Context${"Critical"|"Recursive"|"RegExp"}` | "exprContextRequest">} options options for context creation
 * @param {PartialContextDependencyOptions} contextOptions options for the ContextModule
 * @param {JavascriptParser} parser the parser
 * @param {...any} depArgs depArgs
 * @returns {ContextDependency} the created Dependency
 */
module.exports.create = (
	Dep,
	range,
	param,
	expr,
	options,
	contextOptions,
	parser,
	...depArgs
) => {
	if (param.isTemplateString()) {
		const quasis = /** @type {BasicEvaluatedExpression[]} */ (param.quasis);
		const prefixRaw = /** @type {string} */ (quasis[0].string);
		const postfixRaw =
			/** @type {string} */
			(quasis.length > 1 ? quasis[quasis.length - 1].string : "");

		const valueRange = /** @type {Range} */ (param.range);
		const { context, prefix } = splitContextFromPrefix(prefixRaw);
		const {
			path: postfix,
			query,
			fragment
		} = parseResource(postfixRaw, parser);

		// When there are more than two quasis, the generated RegExp can be more precise
		// We join the quasis with the expression regexp
		const innerQuasis = quasis.slice(1, -1);
		const innerRegExp =
			/** @type {RegExp} */ (options.wrappedContextRegExp).source +
			innerQuasis
				.map(
					q =>
						quoteMeta(/** @type {string} */ (q.string)) +
						/** @type {RegExp} */ (options.wrappedContextRegExp).source
				)
				.join("");

		// Example: `./context/pre${e}inner${e}inner2${e}post?query#frag`
		// context: "./context"
		// prefix: "./pre"
		// innerQuasis: [BEE("inner"), BEE("inner2")]
		// (BEE = BasicEvaluatedExpression)
		// postfix: "post"
		// query: "?query"
		// fragment: "#frag"
		// regExp: /^\.\/pre.*inner.*inner2.*post$/
		const regExp = new RegExp(
			`^${quoteMeta(prefix)}${innerRegExp}${quoteMeta(postfix)}$`
		);
		const dep = new Dep(
			{
				request: context + query + fragment,
				recursive: /** @type {boolean} */ (options.wrappedContextRecursive),
				regExp,
				mode: "sync",
				...contextOptions
			},
			range,
			valueRange,
			...depArgs
		);
		dep.loc = /** @type {DependencyLocation} */ (expr.loc);

		/** @type {{ value: string, range: Range }[]} */
		const replaces = [];
		const parts = /** @type {BasicEvaluatedExpression[]} */ (param.parts);

		for (const [i, part] of parts.entries()) {
			if (i % 2 === 0) {
				// Quasis or merged quasi
				let range = /** @type {Range} */ (part.range);
				let value = /** @type {string} */ (part.string);
				if (param.templateStringKind === "cooked") {
					value = JSON.stringify(value);
					value = value.slice(1, -1);
				}
				if (i === 0) {
					// prefix
					value = prefix;
					range = [
						/** @type {Range} */ (param.range)[0],
						/** @type {Range} */ (part.range)[1]
					];
					value =
						(param.templateStringKind === "cooked" ? "`" : "String.raw`") +
						value;
				} else if (i === parts.length - 1) {
					// postfix
					value = postfix;
					range = [
						/** @type {Range} */ (part.range)[0],
						/** @type {Range} */ (param.range)[1]
					];
					value = `${value}\``;
				} else if (
					part.expression &&
					part.expression.type === "TemplateElement" &&
					part.expression.value.raw === value
				) {
					// Shortcut when it's a single quasi and doesn't need to be replaced
					continue;
				}
				replaces.push({
					range,
					value
				});
			} else {
				// Expression
				parser.walkExpression(part.expression);
			}
		}

		dep.replaces = replaces;
		dep.critical =
			options.wrappedContextCritical &&
			"a part of the request of a dependency is an expression";
		return dep;
	} else if (
		param.isWrapped() &&
		((param.prefix && param.prefix.isString()) ||
			(param.postfix && param.postfix.isString()))
	) {
		const prefixRaw =
			/** @type {string} */
			(param.prefix && param.prefix.isString() ? param.prefix.string : "");
		const postfixRaw =
			/** @type {string} */
			(param.postfix && param.postfix.isString() ? param.postfix.string : "");
		const prefixRange =
			param.prefix && param.prefix.isString() ? param.prefix.range : null;
		const postfixRange =
			param.postfix && param.postfix.isString() ? param.postfix.range : null;
		const valueRange = /** @type {Range} */ (param.range);
		const { context, prefix } = splitContextFromPrefix(prefixRaw);
		const {
			path: postfix,
			query,
			fragment
		} = parseResource(postfixRaw, parser);
		const regExp = new RegExp(
			`^${quoteMeta(prefix)}${
				/** @type {RegExp} */ (options.wrappedContextRegExp).source
			}${quoteMeta(postfix)}$`
		);
		const dep = new Dep(
			{
				request: context + query + fragment,
				recursive: /** @type {boolean} */ (options.wrappedContextRecursive),
				regExp,
				mode: "sync",
				...contextOptions
			},
			range,
			valueRange,
			...depArgs
		);
		dep.loc = /** @type {DependencyLocation} */ (expr.loc);
		const replaces = [];
		if (prefixRange) {
			replaces.push({
				range: prefixRange,
				value: JSON.stringify(prefix)
			});
		}
		if (postfixRange) {
			replaces.push({
				range: postfixRange,
				value: JSON.stringify(postfix)
			});
		}
		dep.replaces = replaces;
		dep.critical =
			options.wrappedContextCritical &&
			"a part of the request of a dependency is an expression";

		if (parser && param.wrappedInnerExpressions) {
			for (const part of param.wrappedInnerExpressions) {
				if (part.expression) parser.walkExpression(part.expression);
			}
		}

		return dep;
	}
	const dep = new Dep(
		{
			request: /** @type {string} */ (options.exprContextRequest),
			recursive: /** @type {boolean} */ (options.exprContextRecursive),
			regExp: /** @type {RegExp} */ (options.exprContextRegExp),
			mode: "sync",
			...contextOptions
		},
		range,
		/** @type {Range} */ (param.range),
		...depArgs
	);
	dep.loc = /** @type {DependencyLocation} */ (expr.loc);
	dep.critical =
		options.exprContextCritical &&
		"the request of a dependency is an expression";

	parser.walkExpression(param.expression);

	return dep;
};
