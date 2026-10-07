/**
 * @fileoverview Rule to flag use of variables before they are defined
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SENTINEL_TYPE =
	/^(?:(?:Function|Class)(?:Declaration|Expression)|ArrowFunctionExpression|CatchClause|ImportDeclaration|ExportNamedDeclaration)$/u;
const FOR_IN_OF_TYPE = /^For(?:In|Of)Statement$/u;

/**
 * Parses a given value as options.
 * @param {any} options A value to parse.
 * @returns {Object} The parsed options.
 */
function parseOptions(options) {
	if (typeof options === "object" && options !== null) {
		return options;
	}

	const functions = typeof options === "string" ? options !== "nofunc" : true;

	return {
		functions,
		classes: true,
		variables: true,
		allowNamedExports: false,
		enums: true,
		typedefs: true,
		ignoreTypeReferences: true,
	};
}

/**
 * Checks whether or not a given location is inside of the range of a given node.
 * @param {ASTNode} node An node to check.
 * @param {number} location A location to check.
 * @returns {boolean} `true` if the location is inside of the range of the node.
 */
function isInRange(node, location) {
	return node && node.range[0] <= location && location <= node.range[1];
}

/**
 * Checks whether or not a given location is inside of the range of a class static initializer.
 * Static initializers are static blocks and initializers of static fields.
 * @param {ASTNode} node `ClassBody` node to check static initializers.
 * @param {number} location A location to check.
 * @returns {boolean} `true` if the location is inside of a class static initializer.
 */
function isInClassStaticInitializerRange(node, location) {
	return node.body.some(
		classMember =>
			(classMember.type === "StaticBlock" &&
				isInRange(classMember, location)) ||
			(classMember.type === "PropertyDefinition" &&
				classMember.static &&
				classMember.value &&
				isInRange(classMember.value, location)),
	);
}

/**
 * Checks whether a given scope is the scope of a class static initializer.
 * Static initializers are static blocks and initializers of static fields.
 * @param {eslint-scope.Scope} scope A scope to check.
 * @returns {boolean} `true` if the scope is a class static initializer scope.
 */
function isClassStaticInitializerScope(scope) {
	if (scope.type === "class-static-block") {
		return true;
	}

	if (scope.type === "class-field-initializer") {
		// `scope.block` is PropertyDefinition#value node
		const propertyDefinition = scope.block.parent;

		return propertyDefinition.static;
	}

	return false;
}

/**
 * Checks whether a given reference is evaluated in an execution context
 * that isn't the one where the variable it refers to is defined.
 * Execution contexts are:
 * - top-level
 * - functions
 * - class field initializers (implicit functions)
 * - class static blocks (implicit functions)
 * Static class field initializers and class static blocks are automatically run during the class definition evaluation,
 * and therefore we'll consider them as a part of the parent execution context.
 * Example:
 *
 *   const x = 1;
 *
 *   x; // returns `false`
 *   () => x; // returns `true`
 *
 *   class C {
 *       field = x; // returns `true`
 *       static field = x; // returns `false`
 *
 *       method() {
 *           x; // returns `true`
 *       }
 *
 *       static method() {
 *           x; // returns `true`
 *       }
 *
 *       static {
 *           x; // returns `false`
 *       }
 *   }
 * @param {eslint-scope.Reference} reference A reference to check.
 * @returns {boolean} `true` if the reference is from a separate execution context.
 */
function isFromSeparateExecutionContext(reference) {
	const variable = reference.resolved;
	let scope = reference.from;

	// Scope#variableScope represents execution context
	while (variable.scope.variableScope !== scope.variableScope) {
		if (isClassStaticInitializerScope(scope.variableScope)) {
			scope = scope.variableScope.upper;
		} else {
			return true;
		}
	}

	return false;
}

/**
 * Checks whether or not a given reference is evaluated during the initialization of its variable.
 *
 * This returns `true` in the following cases:
 *
 *     var a = a
 *     var [a = a] = list
 *     var {a = a} = obj
 *     for (var a in a) {}
 *     for (var a of a) {}
 *     var C = class { [C]; };
 *     var C = class { static foo = C; };
 *     var C = class { static { foo = C; } };
 *     class C extends C {}
 *     class C extends (class { static foo = C; }) {}
 *     class C { [C]; }
 * @param {Reference} reference A reference to check.
 * @returns {boolean} `true` if the reference is evaluated during the initialization.
 */
function isEvaluatedDuringInitialization(reference) {
	if (isFromSeparateExecutionContext(reference)) {
		/*
		 * Even if the reference appears in the initializer, it isn't evaluated during the initialization.
		 * For example, `const x = () => x;` is valid.
		 */
		return false;
	}

	const location = reference.identifier.range[1];
	const definition = reference.resolved.defs[0];

	if (definition.type === "ClassName") {
		// `ClassDeclaration` or `ClassExpression`
		const classDefinition = definition.node;

		return (
			isInRange(classDefinition, location) &&
			/*
			 * Class binding is initialized before running static initializers.
			 * For example, `class C { static foo = C; static { bar = C; } }` is valid.
			 */
			!isInClassStaticInitializerRange(classDefinition.body, location)
		);
	}

	let node = definition.name.parent;

	while (node) {
		if (node.type === "VariableDeclarator") {
			if (isInRange(node.init, location)) {
				return true;
			}
			if (
				FOR_IN_OF_TYPE.test(node.parent.parent.type) &&
				isInRange(node.parent.parent.right, location)
			) {
				return true;
			}
			break;
		} else if (node.type === "AssignmentPattern") {
			if (isInRange(node.right, location)) {
				return true;
			}
		} else if (SENTINEL_TYPE.test(node.type)) {
			break;
		}

		node = node.parent;
	}

	return false;
}

/**
 * check whether the reference contains a type query.
 * @param {ASTNode} node Identifier node to check.
 * @returns {boolean} true if reference contains type query.
 */
function referenceContainsTypeQuery(node) {
	switch (node.type) {
		case "TSTypeQuery":
			return true;

		case "TSQualifiedName":
		case "Identifier":
			return referenceContainsTypeQuery(node.parent);

		default:
			// if we find a different node, there's no chance that we're in a TSTypeQuery
			return false;
	}
}

/**
 * Decorators are transpiled such that the decorator is placed after the class declaration
 * So it is considered safe
 * @param {Variable} variable The variable to check.
 * @param {Reference} reference The reference to check.
 * @returns {boolean} `true` if the reference is in a class decorator.
 */
function isClassRefInClassDecorator(variable, reference) {
	if (variable.defs[0].type !== "ClassName") {
		return false;
	}

	if (
		!variable.defs[0].node.decorators ||
		variable.defs[0].node.decorators.length === 0
	) {
		return false;
	}

	for (const deco of variable.defs[0].node.decorators) {
		if (
			reference.identifier.range[0] >= deco.range[0] &&
			reference.identifier.range[1] <= deco.range[1]
		) {
			return true;
		}
	}

	return false;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		dialects: ["javascript", "typescript"],
		language: "javascript",
		type: "problem",

		docs: {
			description:
				"Disallow the use of variables before they are defined",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-use-before-define",
		},

		schema: [
			{
				oneOf: [
					{
						enum: ["nofunc"],
					},
					{
						type: "object",
						properties: {
							functions: { type: "boolean" },
							classes: { type: "boolean" },
							variables: { type: "boolean" },
							allowNamedExports: { type: "boolean" },
							enums: { type: "boolean" },
							typedefs: { type: "boolean" },
							ignoreTypeReferences: { type: "boolean" },
						},
						additionalProperties: false,
					},
				],
			},
		],

		defaultOptions: [
			{
				classes: true,
				functions: true,
				variables: true,
				allowNamedExports: false,
				enums: true,
				typedefs: true,
				ignoreTypeReferences: true,
			},
		],

		messages: {
			usedBeforeDefined: "'{{name}}' was used before it was defined.",
		},
	},

	create(context) {
		const options = parseOptions(context.options[0]);
		const sourceCode = context.sourceCode;

		/**
		 * Determines whether a given reference should be checked.
		 *
		 * Returns `false` if the reference is:
		 * - initialization's (e.g., `let a = 1`).
		 * - referring to an undefined variable (i.e., if it's an unresolved reference).
		 * - referring to a variable that is defined, but not in the given source code
		 *   (e.g., global environment variable or `arguments` in functions).
		 * - allowed by options.
		 * @param {eslint-scope.Reference} reference The reference
		 * @returns {boolean} `true` if the reference should be checked
		 */
		function shouldCheck(reference) {
			if (reference.init) {
				return false;
			}

			const { identifier } = reference;

			if (
				options.allowNamedExports &&
				identifier.parent.type === "ExportSpecifier" &&
				identifier.parent.local === identifier
			) {
				return false;
			}

			const variable = reference.resolved;

			if (!variable || variable.defs.length === 0) {
				return false;
			}

			const definitionType = variable.defs[0].type;

			if (!options.functions && definitionType === "FunctionName") {
				return false;
			}

			if (
				((!options.variables && definitionType === "Variable") ||
					(!options.classes && definitionType === "ClassName")) &&
				// don't skip checking the reference if it's in the same execution context, because of TDZ
				isFromSeparateExecutionContext(reference)
			) {
				return false;
			}

			if (!options.enums && definitionType === "TSEnumName") {
				return false;
			}

			if (!options.typedefs && definitionType === "Type") {
				return false;
			}

			if (
				options.ignoreTypeReferences &&
				(referenceContainsTypeQuery(identifier) ||
					identifier.parent.type === "TSTypeReference")
			) {
				return false;
			}

			// skip nested namespace aliases as variable references
			if (identifier.parent.type === "TSQualifiedName") {
				let currentNode = identifier.parent;

				while (currentNode.type === "TSQualifiedName") {
					currentNode = currentNode.left;
				}

				if (currentNode === identifier) {
					return true;
				}

				return false;
			}

			if (isClassRefInClassDecorator(variable, reference)) {
				return false;
			}

			return true;
		}

		/**
		 * Finds and validates all references in a given scope and its child scopes.
		 * @param {eslint-scope.Scope} scope The scope object.
		 * @returns {void}
		 */
		function checkReferencesInScope(scope) {
			scope.references.filter(shouldCheck).forEach(reference => {
				const variable = reference.resolved;
				const definitionIdentifier = variable.defs[0].name;

				if (
					reference.identifier.range[1] <
						definitionIdentifier.range[1] ||
					(isEvaluatedDuringInitialization(reference) &&
						reference.identifier.parent.type !== "TSTypeReference")
				) {
					context.report({
						node: reference.identifier,
						messageId: "usedBeforeDefined",
						data: reference.identifier,
					});
				}
			});

			scope.childScopes.forEach(checkReferencesInScope);
		}

		return {
			Program(node) {
				checkReferencesInScope(sourceCode.getScope(node));
			},
		};
	},
};
