/**
 * @fileoverview Rule to flag declared but unused private class members
 * @author Tim van der Lippe
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description: "Disallow unused private class members",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-unused-private-class-members",
		},

		schema: [],

		messages: {
			unusedPrivateClassMember:
				"'{{classMemberName}}' is defined but never used.",
		},
	},

	create(context) {
		const trackedClasses = [];

		/**
		 * Check whether the current node is in a write only assignment.
		 * @param {ASTNode} privateIdentifierNode Node referring to a private identifier
		 * @returns {boolean} Whether the node is in a write only assignment
		 * @private
		 */
		function isWriteOnlyAssignment(privateIdentifierNode) {
			const parentStatement = privateIdentifierNode.parent.parent;
			const isAssignmentExpression =
				parentStatement.type === "AssignmentExpression";

			if (
				!isAssignmentExpression &&
				parentStatement.type !== "ForInStatement" &&
				parentStatement.type !== "ForOfStatement" &&
				parentStatement.type !== "AssignmentPattern"
			) {
				return false;
			}

			// It is a write-only usage, since we still allow usages on the right for reads
			if (parentStatement.left !== privateIdentifierNode.parent) {
				return false;
			}

			// For any other operator (such as '+=') we still consider it a read operation
			if (isAssignmentExpression && parentStatement.operator !== "=") {
				/*
				 * However, if the read operation is "discarded" in an empty statement, then
				 * we consider it write only.
				 */
				return parentStatement.parent.type === "ExpressionStatement";
			}

			return true;
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			// Collect all declared members up front and assume they are all unused
			ClassBody(classBodyNode) {
				const privateMembers = new Map();

				trackedClasses.unshift(privateMembers);
				for (const bodyMember of classBodyNode.body) {
					if (
						bodyMember.type === "PropertyDefinition" ||
						bodyMember.type === "MethodDefinition"
					) {
						if (bodyMember.key.type === "PrivateIdentifier") {
							privateMembers.set(bodyMember.key.name, {
								declaredNode: bodyMember,
								isAccessor:
									bodyMember.type === "MethodDefinition" &&
									(bodyMember.kind === "set" ||
										bodyMember.kind === "get"),
							});
						}
					}
				}
			},

			/*
			 * Process all usages of the private identifier and remove a member from
			 * `declaredAndUnusedPrivateMembers` if we deem it used.
			 */
			PrivateIdentifier(privateIdentifierNode) {
				const classBody = trackedClasses.find(classProperties =>
					classProperties.has(privateIdentifierNode.name),
				);

				// Can't happen, as it is a parser to have a missing class body, but let's code defensively here.
				if (!classBody) {
					return;
				}

				// In case any other usage was already detected, we can short circuit the logic here.
				const memberDefinition = classBody.get(
					privateIdentifierNode.name,
				);

				if (memberDefinition.isUsed) {
					return;
				}

				// The definition of the class member itself
				if (
					privateIdentifierNode.parent.type ===
						"PropertyDefinition" ||
					privateIdentifierNode.parent.type === "MethodDefinition"
				) {
					return;
				}

				/*
				 * Any usage of an accessor is considered a read, as the getter/setter can have
				 * side-effects in its definition.
				 */
				if (memberDefinition.isAccessor) {
					memberDefinition.isUsed = true;
					return;
				}

				// Any assignments to this member, except for assignments that also read
				if (isWriteOnlyAssignment(privateIdentifierNode)) {
					return;
				}

				const wrappingExpressionType =
					privateIdentifierNode.parent.parent.type;
				const parentOfWrappingExpressionType =
					privateIdentifierNode.parent.parent.parent.type;

				// A statement which only increments (`this.#x++;`)
				if (
					wrappingExpressionType === "UpdateExpression" &&
					parentOfWrappingExpressionType === "ExpressionStatement"
				) {
					return;
				}

				/*
				 * ({ x: this.#usedInDestructuring } = bar);
				 *
				 * But should treat the following as a read:
				 * ({ [this.#x]: a } = foo);
				 */
				if (
					wrappingExpressionType === "Property" &&
					parentOfWrappingExpressionType === "ObjectPattern" &&
					privateIdentifierNode.parent.parent.value ===
						privateIdentifierNode.parent
				) {
					return;
				}

				// [...this.#unusedInRestPattern] = bar;
				if (wrappingExpressionType === "RestElement") {
					return;
				}

				// [this.#unusedInAssignmentPattern] = bar;
				if (wrappingExpressionType === "ArrayPattern") {
					return;
				}

				/*
				 * We can't delete the memberDefinition, as we need to keep track of which member we are marking as used.
				 * In the case of nested classes, we only mark the first member we encounter as used. If you were to delete
				 * the member, then any subsequent usage could incorrectly mark the member of an encapsulating parent class
				 * as used, which is incorrect.
				 */
				memberDefinition.isUsed = true;
			},

			/*
			 * Post-process the class members and report any remaining members.
			 * Since private members can only be accessed in the current class context,
			 * we can safely assume that all usages are within the current class body.
			 */
			"ClassBody:exit"() {
				const unusedPrivateMembers = trackedClasses.shift();

				for (const [
					classMemberName,
					{ declaredNode, isUsed },
				] of unusedPrivateMembers.entries()) {
					if (isUsed) {
						continue;
					}
					context.report({
						node: declaredNode,
						loc: declaredNode.key.loc,
						messageId: "unusedPrivateClassMember",
						data: {
							classMemberName: `#${classMemberName}`,
						},
					});
				}
			},
		};
	},
};
