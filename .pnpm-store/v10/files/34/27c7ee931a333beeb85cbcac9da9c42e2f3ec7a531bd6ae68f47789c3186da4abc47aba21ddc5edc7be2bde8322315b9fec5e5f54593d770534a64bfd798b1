/**
 * @fileoverview Rule that warns when identifier names that are
 * specified in the configuration are used.
 * @author Keith Cirkel (http://keithcirkel.co.uk)
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether the given node represents assignment target in a normal assignment or destructuring.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is assignment target.
 */
function isAssignmentTarget(node) {
	const parent = node.parent;

	return (
		// normal assignment
		(parent.type === "AssignmentExpression" && parent.left === node) ||
		// destructuring
		parent.type === "ArrayPattern" ||
		parent.type === "RestElement" ||
		(parent.type === "Property" &&
			parent.value === node &&
			parent.parent.type === "ObjectPattern") ||
		(parent.type === "AssignmentPattern" && parent.left === node)
	);
}

/**
 * Checks whether the given node represents an imported name that is renamed in the same import/export specifier.
 *
 * Examples:
 * import { a as b } from 'mod'; // node `a` is renamed import
 * export { a as b } from 'mod'; // node `a` is renamed import
 * @param {ASTNode} node `Identifier` node to check.
 * @returns {boolean} `true` if the node is a renamed import.
 */
function isRenamedImport(node) {
	const parent = node.parent;

	return (
		(parent.type === "ImportSpecifier" &&
			parent.imported !== parent.local &&
			parent.imported === node) ||
		(parent.type === "ExportSpecifier" &&
			parent.parent.source && // re-export
			parent.local !== parent.exported &&
			parent.local === node)
	);
}

/**
 * Checks whether the given node is an ObjectPattern destructuring.
 *
 * Examples:
 * const { a : b } = foo;
 * @param {ASTNode} node `Identifier` node to check.
 * @returns {boolean} `true` if the node is in an ObjectPattern destructuring.
 */
function isPropertyNameInDestructuring(node) {
	const parent = node.parent;

	return (
		!parent.computed &&
		parent.type === "Property" &&
		parent.parent.type === "ObjectPattern" &&
		parent.key === node
	);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [],

		docs: {
			description: "Disallow specified identifiers",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/id-denylist",
		},

		schema: {
			type: "array",
			items: {
				type: "string",
			},
			uniqueItems: true,
		},
		messages: {
			restricted: "Identifier '{{name}}' is restricted.",
			restrictedPrivate: "Identifier '#{{name}}' is restricted.",
		},
	},

	create(context) {
		const denyList = new Set(context.options);
		const reportedNodes = new Set();
		const sourceCode = context.sourceCode;

		let globalScope;

		/**
		 * Checks whether the given name is restricted.
		 * @param {string} name The name to check.
		 * @returns {boolean} `true` if the name is restricted.
		 * @private
		 */
		function isRestricted(name) {
			return denyList.has(name);
		}

		/**
		 * Checks whether the given node represents a reference to a global variable that is not declared in the source code.
		 * These identifiers will be allowed, as it is assumed that user has no control over the names of external global variables.
		 * @param {ASTNode} node `Identifier` node to check.
		 * @returns {boolean} `true` if the node is a reference to a global variable.
		 */
		function isReferenceToGlobalVariable(node) {
			const variable = globalScope.set.get(node.name);

			return (
				variable &&
				variable.defs.length === 0 &&
				variable.references.some(ref => ref.identifier === node)
			);
		}

		/**
		 * Determines whether the given node should be checked.
		 * @param {ASTNode} node `Identifier` node.
		 * @returns {boolean} `true` if the node should be checked.
		 */
		function shouldCheck(node) {
			// Import attributes are defined by environments, so naming conventions shouldn't apply to them
			if (astUtils.isImportAttributeKey(node)) {
				return false;
			}

			const parent = node.parent;

			/*
			 * Member access has special rules for checking property names.
			 * Read access to a property with a restricted name is allowed, because it can be on an object that user has no control over.
			 * Write access isn't allowed, because it potentially creates a new property with a restricted name.
			 */
			if (
				parent.type === "MemberExpression" &&
				parent.property === node &&
				!parent.computed
			) {
				return isAssignmentTarget(parent);
			}

			return (
				parent.type !== "CallExpression" &&
				parent.type !== "NewExpression" &&
				!isRenamedImport(node) &&
				!isPropertyNameInDestructuring(node) &&
				!isReferenceToGlobalVariable(node)
			);
		}

		/**
		 * Reports an AST node as a rule violation.
		 * @param {ASTNode} node The node to report.
		 * @returns {void}
		 * @private
		 */
		function report(node) {
			/*
			 * We used the range instead of the node because it's possible
			 * for the same identifier to be represented by two different
			 * nodes, with the most clear example being shorthand properties:
			 * { foo }
			 * In this case, "foo" is represented by one node for the name
			 * and one for the value. The only way to know they are the same
			 * is to look at the range.
			 */
			if (!reportedNodes.has(node.range.toString())) {
				const isPrivate = node.type === "PrivateIdentifier";

				context.report({
					node,
					messageId: isPrivate ? "restrictedPrivate" : "restricted",
					data: {
						name: node.name,
					},
				});
				reportedNodes.add(node.range.toString());
			}
		}

		return {
			Program(node) {
				globalScope = sourceCode.getScope(node);
			},

			[["Identifier", "PrivateIdentifier"]](node) {
				if (isRestricted(node.name) && shouldCheck(node)) {
					report(node);
				}
			},
		};
	},
};
