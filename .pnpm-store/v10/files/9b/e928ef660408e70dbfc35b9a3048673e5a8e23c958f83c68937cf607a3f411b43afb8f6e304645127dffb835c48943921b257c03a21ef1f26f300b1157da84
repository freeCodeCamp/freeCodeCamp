/**
 * @fileoverview Traverser for SourceCode objects.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { parse, matches } = require("./esquery");
const vk = require("eslint-visitor-keys");

//-----------------------------------------------------------------------------
// Typedefs
//-----------------------------------------------------------------------------

/**
 * @import { Language, SourceCode } from "@eslint/core";
 * @import { ESQueryOptions } from "esquery";
 * @import { ESQueryParsedSelector } from "./esquery.js";
 * @import { SourceCodeVisitor } from "./source-code-visitor.js";
 */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const STEP_KIND_VISIT = 1;
const STEP_KIND_CALL = 2;

/**
 * Compares two ESQuery selectors by specificity.
 * @param {ESQueryParsedSelector} a The first selector to compare.
 * @param {ESQueryParsedSelector} b The second selector to compare.
 * @returns {number} A negative number if `a` is less specific than `b` or they are equally specific and `a` <= `b` alphabetically, a positive number if `a` is more specific than `b`.
 */
function compareSpecificity(a, b) {
	return a.compare(b);
}

/**
 * Helper to wrap ESQuery operations.
 */
class ESQueryHelper {
	/**
	 * Creates a new instance.
	 * @param {SourceCodeVisitor} visitor The visitor containing the functions to call.
	 * @param {ESQueryOptions} esqueryOptions `esquery` options for traversing custom nodes.
	 */
	constructor(visitor, esqueryOptions) {
		/**
		 * The visitor to use during traversal.
		 * @type {SourceCodeVisitor}
		 */
		this.visitor = visitor;

		/**
		 * The options for `esquery` to use during matching.
		 * @type {ESQueryOptions}
		 */
		this.esqueryOptions = esqueryOptions;

		/**
		 * A map of node type to selectors targeting that node type on the
		 * enter phase of traversal.
		 * @type {Map<string, ESQueryParsedSelector[]>}
		 */
		this.enterSelectorsByNodeType = new Map();

		/**
		 * A map of node type to selectors targeting that node type on the
		 * exit phase of traversal.
		 * @type {Map<string, ESQueryParsedSelector[]>}
		 */
		this.exitSelectorsByNodeType = new Map();

		/**
		 * An array of selectors that match any node type on the
		 * enter phase of traversal.
		 * @type {ESQueryParsedSelector[]}
		 */
		this.anyTypeEnterSelectors = [];

		/**
		 * An array of selectors that match any node type on the
		 * exit phase of traversal.
		 * @type {ESQueryParsedSelector[]}
		 */
		this.anyTypeExitSelectors = [];

		visitor.forEachName(rawSelector => {
			const selector = parse(rawSelector);

			/*
			 * If this selector has identified specific node types,
			 * add it to the map for these node types for faster lookup.
			 */
			if (selector.nodeTypes) {
				const typeMap = selector.isExit
					? this.exitSelectorsByNodeType
					: this.enterSelectorsByNodeType;

				selector.nodeTypes.forEach(nodeType => {
					if (!typeMap.has(nodeType)) {
						typeMap.set(nodeType, []);
					}
					typeMap.get(nodeType).push(selector);
				});
				return;
			}

			/*
			 * Remaining selectors are added to the "any type" selectors
			 * list for the appropriate phase of traversal. This ensures
			 * that all selectors will still be applied even if no
			 * specific node type is matched.
			 */
			const selectors = selector.isExit
				? this.anyTypeExitSelectors
				: this.anyTypeEnterSelectors;

			selectors.push(selector);
		});

		// sort all selectors by specificity for prioritizing call order
		this.anyTypeEnterSelectors.sort(compareSpecificity);
		this.anyTypeExitSelectors.sort(compareSpecificity);
		this.enterSelectorsByNodeType.forEach(selectorList =>
			selectorList.sort(compareSpecificity),
		);
		this.exitSelectorsByNodeType.forEach(selectorList =>
			selectorList.sort(compareSpecificity),
		);
	}

	/**
	 * Checks if a node matches a given selector.
	 * @param {ASTNode} node The node to check
	 * @param {ASTNode[]} ancestry The ancestry of the node being checked.
	 * @param {ESQueryParsedSelector} selector An AST selector descriptor
	 * @returns {boolean} `true` if the selector matches the node, `false` otherwise
	 */
	matches(node, ancestry, selector) {
		return matches(node, selector.root, ancestry, this.esqueryOptions);
	}

	/**
	 * Calculates all appropriate selectors to a node, in specificity order
	 * @param {ASTNode} node The node to check
	 * @param {ASTNode[]} ancestry The ancestry of the node being checked.
	 * @param {boolean} isExit `false` if the node is currently being entered, `true` if it's currently being exited
	 * @returns {string[]} An array of selectors that match the node.
	 */
	calculateSelectors(node, ancestry, isExit) {
		const nodeTypeKey = this.esqueryOptions?.nodeTypeKey || "type";
		const selectors = [];

		/*
		 * Get the selectors that may match this node. First, check
		 * to see if the node type has specific selectors,
		 * then gather the "any type" selectors.
		 */
		const selectorsByNodeType =
			(isExit
				? this.exitSelectorsByNodeType
				: this.enterSelectorsByNodeType
			).get(node[nodeTypeKey]) || [];
		const anyTypeSelectors = isExit
			? this.anyTypeExitSelectors
			: this.anyTypeEnterSelectors;

		/*
		 * selectorsByNodeType and anyTypeSelectors were already sorted by specificity in the constructor.
		 * Iterate through each of them, applying selectors in the right order.
		 */
		let selectorsByNodeTypeIndex = 0;
		let anyTypeSelectorsIndex = 0;

		while (
			selectorsByNodeTypeIndex < selectorsByNodeType.length ||
			anyTypeSelectorsIndex < anyTypeSelectors.length
		) {
			/*
			 * If we've already exhausted the selectors for this node type,
			 * or if the next any type selector is more specific than the
			 * next selector for this node type, apply the any type selector.
			 */
			const hasMoreNodeTypeSelectors =
				selectorsByNodeTypeIndex < selectorsByNodeType.length;
			const hasMoreAnyTypeSelectors =
				anyTypeSelectorsIndex < anyTypeSelectors.length;
			const anyTypeSelector = anyTypeSelectors[anyTypeSelectorsIndex];
			const nodeTypeSelector =
				selectorsByNodeType[selectorsByNodeTypeIndex];

			// Only compare specificity if both selectors exist
			const isAnyTypeSelectorLessSpecific =
				hasMoreAnyTypeSelectors &&
				hasMoreNodeTypeSelectors &&
				anyTypeSelector.compare(nodeTypeSelector) < 0;

			if (!hasMoreNodeTypeSelectors || isAnyTypeSelectorLessSpecific) {
				anyTypeSelectorsIndex++;

				if (this.matches(node, ancestry, anyTypeSelector)) {
					selectors.push(anyTypeSelector.source);
				}
			} else {
				selectorsByNodeTypeIndex++;

				if (this.matches(node, ancestry, nodeTypeSelector)) {
					selectors.push(nodeTypeSelector.source);
				}
			}
		}

		return selectors;
	}
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Traverses source code and ensures that visitor methods are called when
 * entering and leaving each node.
 */
class SourceCodeTraverser {
	/**
	 * The language of the source code being traversed.
	 * @type {Language}
	 */
	#language;

	/**
	 * Map of languages to instances of this class.
	 * @type {WeakMap<Language, SourceCodeTraverser>}
	 */
	static instances = new WeakMap();

	/**
	 * Creates a new instance.
	 * @param {Language} language The language of the source code being traversed.
	 */
	constructor(language) {
		this.#language = language;
	}

	static getInstance(language) {
		if (!this.instances.has(language)) {
			this.instances.set(language, new this(language));
		}

		return this.instances.get(language);
	}

	/**
	 * Traverses the given source code synchronously.
	 * @param {SourceCode} sourceCode The source code to traverse.
	 * @param {SourceCodeVisitor} visitor The emitter to use for events.
	 * @param {Object} options Options for traversal.
	 * @param {ReturnType<SourceCode["traverse"]>} options.steps The steps to take during traversal.
	 * @returns {void}
	 * @throws {Error} If an error occurs during traversal.
	 */
	traverseSync(sourceCode, visitor, { steps } = {}) {
		const esquery = new ESQueryHelper(visitor, {
			visitorKeys: sourceCode.visitorKeys ?? this.#language.visitorKeys,
			fallback: vk.getKeys,
			matchClass: this.#language.matchesSelectorClass ?? (() => false),
			nodeTypeKey: this.#language.nodeTypeKey,
		});

		const currentAncestry = [];

		for (const step of steps ?? sourceCode.traverse()) {
			switch (step.kind) {
				case STEP_KIND_VISIT: {
					try {
						if (step.phase === 1) {
							esquery
								.calculateSelectors(
									step.target,
									currentAncestry,
									false,
								)
								.forEach(selector => {
									visitor.callSync(
										selector,
										...(step.args ?? [step.target]),
									);
								});
							currentAncestry.unshift(step.target);
						} else {
							currentAncestry.shift();
							esquery
								.calculateSelectors(
									step.target,
									currentAncestry,
									true,
								)
								.forEach(selector => {
									visitor.callSync(
										selector,
										...(step.args ?? [step.target]),
									);
								});
						}
					} catch (err) {
						err.currentNode = step.target;
						throw err;
					}
					break;
				}

				case STEP_KIND_CALL: {
					visitor.callSync(step.target, ...step.args);
					break;
				}

				default:
					throw new Error(
						`Invalid traversal step found: "${step.kind}".`,
					);
			}
		}
	}
}

module.exports = { SourceCodeTraverser };
