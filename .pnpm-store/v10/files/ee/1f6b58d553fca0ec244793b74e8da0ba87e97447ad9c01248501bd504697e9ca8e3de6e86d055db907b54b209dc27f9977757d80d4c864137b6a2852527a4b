/**
 * @fileoverview Rule to disallow use of unmodified expressions in loop conditions
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Traverser = require("../shared/traverser"),
	astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SENTINEL_PATTERN =
	/(?:(?:Call|Class|Function|Member|New|Yield)Expression|Statement|Declaration)$/u;
const LOOP_PATTERN = /^(?:DoWhile|For|While)Statement$/u; // for-in/of statements don't have `test` property.
const GROUP_PATTERN = /^(?:BinaryExpression|ConditionalExpression)$/u;
const SKIP_PATTERN = /^(?:ArrowFunction|Class|Function)Expression$/u;
const DYNAMIC_PATTERN = /^(?:Call|Member|New|TaggedTemplate|Yield)Expression$/u;

/**
 * @typedef {Object} LoopConditionInfo
 * @property {eslint-scope.Reference} reference - The reference.
 * @property {ASTNode} group - BinaryExpression or ConditionalExpression nodes
 *      that the reference is belonging to.
 * @property {Function} isInLoop - The predicate which checks a given reference
 *      is in this loop.
 * @property {boolean} modified - The flag that the reference is modified in
 *      this loop.
 */

/**
 * Checks whether or not a given reference is a write reference.
 * @param {eslint-scope.Reference} reference A reference to check.
 * @returns {boolean} `true` if the reference is a write reference.
 */
function isWriteReference(reference) {
	if (reference.init) {
		const def = reference.resolved && reference.resolved.defs[0];

		if (!def || def.type !== "Variable" || def.parent.kind !== "var") {
			return false;
		}
	}
	return reference.isWrite();
}

/**
 * Checks whether or not a given loop condition info does not have the modified
 * flag.
 * @param {LoopConditionInfo} condition A loop condition info to check.
 * @returns {boolean} `true` if the loop condition info is "unmodified".
 */
function isUnmodified(condition) {
	return !condition.modified;
}

/**
 * Checks whether or not a given loop condition info does not have the modified
 * flag and does not have the group this condition belongs to.
 * @param {LoopConditionInfo} condition A loop condition info to check.
 * @returns {boolean} `true` if the loop condition info is "unmodified".
 */
function isUnmodifiedAndNotBelongToGroup(condition) {
	return !(condition.modified || condition.group);
}

/**
 * Checks whether or not a given reference is inside of a given node.
 * @param {ASTNode} node A node to check.
 * @param {eslint-scope.Reference} reference A reference to check.
 * @returns {boolean} `true` if the reference is inside of the node.
 */
function isInRange(node, reference) {
	const or = node.range;
	const ir = reference.identifier.range;

	return or[0] <= ir[0] && ir[1] <= or[1];
}

/**
 * Checks whether or not a given reference is inside of a loop node's condition.
 * @param {ASTNode} node A node to check.
 * @param {eslint-scope.Reference} reference A reference to check.
 * @returns {boolean} `true` if the reference is inside of the loop node's
 *      condition.
 */
const isInLoop = {
	WhileStatement: isInRange,
	DoWhileStatement: isInRange,
	ForStatement(node, reference) {
		return (
			isInRange(node, reference) &&
			!(node.init && isInRange(node.init, reference))
		);
	},
};

/**
 * Gets the function which encloses a given reference.
 * This supports only FunctionDeclaration.
 * @param {eslint-scope.Reference} reference A reference to get.
 * @returns {ASTNode|null} The function node or null.
 */
function getEncloseFunctionDeclaration(reference) {
	let node = reference.identifier;

	while (node) {
		if (node.type === "FunctionDeclaration") {
			return node.id ? node : null;
		}

		node = node.parent;
	}

	return null;
}

/**
 * Updates the "modified" flags of given loop conditions with given modifiers.
 * @param {LoopConditionInfo[]} conditions The loop conditions to be updated.
 * @param {eslint-scope.Reference[]} modifiers The references to update.
 * @returns {void}
 */
function updateModifiedFlag(conditions, modifiers) {
	for (let i = 0; i < conditions.length; ++i) {
		const condition = conditions[i];

		for (let j = 0; !condition.modified && j < modifiers.length; ++j) {
			const modifier = modifiers[j];
			let funcNode, funcVar;

			/*
			 * Besides checking for the condition being in the loop, we want to
			 * check the function that this modifier is belonging to is called
			 * in the loop.
			 * FIXME: This should probably be extracted to a function.
			 */
			const inLoop =
				condition.isInLoop(modifier) ||
				Boolean(
					(funcNode = getEncloseFunctionDeclaration(modifier)) &&
						(funcVar = astUtils.getVariableByName(
							modifier.from.upper,
							funcNode.id.name,
						)) &&
						funcVar.references.some(condition.isInLoop),
				);

			condition.modified = inLoop;
		}
	}
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description: "Disallow unmodified loop conditions",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-unmodified-loop-condition",
		},

		schema: [],

		messages: {
			loopConditionNotModified:
				"'{{name}}' is not modified in this loop.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		let groupMap = null;

		/**
		 * Reports a given condition info.
		 * @param {LoopConditionInfo} condition A loop condition info to report.
		 * @returns {void}
		 */
		function report(condition) {
			const node = condition.reference.identifier;

			context.report({
				node,
				messageId: "loopConditionNotModified",
				data: node,
			});
		}

		/**
		 * Registers given conditions to the group the condition belongs to.
		 * @param {LoopConditionInfo[]} conditions A loop condition info to
		 *      register.
		 * @returns {void}
		 */
		function registerConditionsToGroup(conditions) {
			for (let i = 0; i < conditions.length; ++i) {
				const condition = conditions[i];

				if (condition.group) {
					let group = groupMap.get(condition.group);

					if (!group) {
						group = [];
						groupMap.set(condition.group, group);
					}
					group.push(condition);
				}
			}
		}

		/**
		 * Reports references which are inside of unmodified groups.
		 * @param {LoopConditionInfo[]} conditions A loop condition info to report.
		 * @returns {void}
		 */
		function checkConditionsInGroup(conditions) {
			if (conditions.every(isUnmodified)) {
				conditions.forEach(report);
			}
		}

		/**
		 * Checks whether or not a given group node has any dynamic elements.
		 * @param {ASTNode} root A node to check.
		 *      This node is one of BinaryExpression or ConditionalExpression.
		 * @returns {boolean} `true` if the node is dynamic.
		 */
		function hasDynamicExpressions(root) {
			let retv = false;

			Traverser.traverse(root, {
				visitorKeys: sourceCode.visitorKeys,
				enter(node) {
					if (DYNAMIC_PATTERN.test(node.type)) {
						retv = true;
						this.break();
					} else if (SKIP_PATTERN.test(node.type)) {
						this.skip();
					}
				},
			});

			return retv;
		}

		/**
		 * Creates the loop condition information from a given reference.
		 * @param {eslint-scope.Reference} reference A reference to create.
		 * @returns {LoopConditionInfo|null} Created loop condition info, or null.
		 */
		function toLoopCondition(reference) {
			if (reference.init) {
				return null;
			}

			let group = null;
			let child = reference.identifier;
			let node = child.parent;

			while (node) {
				if (SENTINEL_PATTERN.test(node.type)) {
					if (LOOP_PATTERN.test(node.type) && node.test === child) {
						// This reference is inside of a loop condition.
						return {
							reference,
							group,
							isInLoop: isInLoop[node.type].bind(null, node),
							modified: false,
						};
					}

					// This reference is outside of a loop condition.
					break;
				}

				/*
				 * If it's inside of a group, OK if either operand is modified.
				 * So stores the group this reference belongs to.
				 */
				if (GROUP_PATTERN.test(node.type)) {
					// If this expression is dynamic, no need to check.
					if (hasDynamicExpressions(node)) {
						break;
					} else {
						group = node;
					}
				}

				child = node;
				node = node.parent;
			}

			return null;
		}

		/**
		 * Finds unmodified references which are inside of a loop condition.
		 * Then reports the references which are outside of groups.
		 * @param {eslint-scope.Variable} variable A variable to report.
		 * @returns {void}
		 */
		function checkReferences(variable) {
			// Gets references that exist in loop conditions.
			const conditions = variable.references
				.map(toLoopCondition)
				.filter(Boolean);

			if (conditions.length === 0) {
				return;
			}

			// Registers the conditions to belonging groups.
			registerConditionsToGroup(conditions);

			// Check the conditions are modified.
			const modifiers = variable.references.filter(isWriteReference);

			if (modifiers.length > 0) {
				updateModifiedFlag(conditions, modifiers);
			}

			/*
			 * Reports the conditions which are not belonging to groups.
			 * Others will be reported after all variables are done.
			 */
			conditions.filter(isUnmodifiedAndNotBelongToGroup).forEach(report);
		}

		return {
			"Program:exit"(node) {
				const queue = [sourceCode.getScope(node)];

				groupMap = new Map();

				let scope;

				while ((scope = queue.pop())) {
					queue.push(...scope.childScopes);
					scope.variables.forEach(checkReferences);
				}

				groupMap.forEach(checkConditionsInGroup);
				groupMap = null;
			},
		};
	},
};
