/**
 * @fileoverview Rule to flag non-camelcased identifiers
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce camelcase naming convention",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/camelcase"
        },

        schema: [
            {
                type: "object",
                properties: {
                    ignoreDestructuring: {
                        type: "boolean",
                        default: false
                    },
                    ignoreImports: {
                        type: "boolean",
                        default: false
                    },
                    ignoreGlobals: {
                        type: "boolean",
                        default: false
                    },
                    properties: {
                        enum: ["always", "never"]
                    },
                    allow: {
                        type: "array",
                        items: [
                            {
                                type: "string"
                            }
                        ],
                        minItems: 0,
                        uniqueItems: true
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            notCamelCase: "Identifier '{{name}}' is not in camel case."
        }
    },

    create(context) {

        const options = context.options[0] || {};
        let properties = options.properties || "";
        const ignoreDestructuring = options.ignoreDestructuring;
        const ignoreImports = options.ignoreImports;
        const ignoreGlobals = options.ignoreGlobals;
        const allow = options.allow || [];

        let globalScope;

        if (properties !== "always" && properties !== "never") {
            properties = "always";
        }

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        // contains reported nodes to avoid reporting twice on destructuring with shorthand notation
        const reported = [];
        const ALLOWED_PARENT_TYPES = new Set(["CallExpression", "NewExpression"]);

        /**
         * Checks if a string contains an underscore and isn't all upper-case
         * @param {string} name The string to check.
         * @returns {boolean} if the string is underscored
         * @private
         */
        function isUnderscored(name) {

            // if there's an underscore, it might be A_CONSTANT, which is okay
            return name.includes("_") && name !== name.toUpperCase();
        }

        /**
         * Checks if a string match the ignore list
         * @param {string} name The string to check.
         * @returns {boolean} if the string is ignored
         * @private
         */
        function isAllowed(name) {
            return allow.some(
                entry => name === entry || name.match(new RegExp(entry, "u"))
            );
        }

        /**
         * Checks if a parent of a node is an ObjectPattern.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} if the node is inside an ObjectPattern
         * @private
         */
        function isInsideObjectPattern(node) {
            let current = node;

            while (current) {
                const parent = current.parent;

                if (parent && parent.type === "Property" && parent.computed && parent.key === current) {
                    return false;
                }

                if (current.type === "ObjectPattern") {
                    return true;
                }

                current = parent;
            }

            return false;
        }

        /**
         * Checks whether the given node represents assignment target property in destructuring.
         *
         * For examples:
         *    ({a: b.foo} = c);  // => true for `foo`
         *    ([a.foo] = b);     // => true for `foo`
         *    ([a.foo = 1] = b); // => true for `foo`
         *    ({...a.foo} = b);  // => true for `foo`
         * @param {ASTNode} node An Identifier node to check
         * @returns {boolean} True if the node is an assignment target property in destructuring.
         */
        function isAssignmentTargetPropertyInDestructuring(node) {
            if (
                node.parent.type === "MemberExpression" &&
                node.parent.property === node &&
                !node.parent.computed
            ) {
                const effectiveParent = node.parent.parent;

                return (
                    effectiveParent.type === "Property" &&
                    effectiveParent.value === node.parent &&
                    effectiveParent.parent.type === "ObjectPattern" ||
                    effectiveParent.type === "ArrayPattern" ||
                    effectiveParent.type === "RestElement" ||
                    (
                        effectiveParent.type === "AssignmentPattern" &&
                        effectiveParent.left === node.parent
                    )
                );
            }
            return false;
        }

        /**
         * Checks whether the given node represents a reference to a global variable that is not declared in the source code.
         * These identifiers will be allowed, as it is assumed that user has no control over the names of external global variables.
         * @param {ASTNode} node `Identifier` node to check.
         * @returns {boolean} `true` if the node is a reference to a global variable.
         */
        function isReferenceToGlobalVariable(node) {
            const variable = globalScope.set.get(node.name);

            return variable && variable.defs.length === 0 &&
                variable.references.some(ref => ref.identifier === node);
        }

        /**
         * Checks whether the given node represents a reference to a property of an object in an object literal expression.
         * This allows to differentiate between a global variable that is allowed to be used as a reference, and the key
         * of the expressed object (which shouldn't be allowed).
         * @param {ASTNode} node `Identifier` node to check.
         * @returns {boolean} `true` if the node is a property name of an object literal expression
         */
        function isPropertyNameInObjectLiteral(node) {
            const parent = node.parent;

            return (
                parent.type === "Property" &&
                parent.parent.type === "ObjectExpression" &&
                !parent.computed &&
                parent.key === node
            );
        }

        /**
         * Reports an AST node as a rule violation.
         * @param {ASTNode} node The node to report.
         * @returns {void}
         * @private
         */
        function report(node) {
            if (!reported.includes(node)) {
                reported.push(node);
                context.report({ node, messageId: "notCamelCase", data: { name: node.name } });
            }
        }

        return {

            Program() {
                globalScope = context.getScope();
            },

            Identifier(node) {

                /*
                 * Leading and trailing underscores are commonly used to flag
                 * private/protected identifiers, strip them before checking if underscored
                 */
                const name = node.name,
                    nameIsUnderscored = isUnderscored(name.replace(/^_+|_+$/gu, "")),
                    effectiveParent = (node.parent.type === "MemberExpression") ? node.parent.parent : node.parent;

                // First, we ignore the node if it match the ignore list
                if (isAllowed(name)) {
                    return;
                }

                // Check if it's a global variable
                if (ignoreGlobals && isReferenceToGlobalVariable(node) && !isPropertyNameInObjectLiteral(node)) {
                    return;
                }

                // MemberExpressions get special rules
                if (node.parent.type === "MemberExpression") {

                    // "never" check properties
                    if (properties === "never") {
                        return;
                    }

                    // Always report underscored object names
                    if (node.parent.object.type === "Identifier" && node.parent.object.name === node.name && nameIsUnderscored) {
                        report(node);

                    // Report AssignmentExpressions only if they are the left side of the assignment
                    } else if (effectiveParent.type === "AssignmentExpression" && nameIsUnderscored && (effectiveParent.right.type !== "MemberExpression" || effectiveParent.left.type === "MemberExpression" && effectiveParent.left.property.name === node.name)) {
                        report(node);

                    } else if (isAssignmentTargetPropertyInDestructuring(node) && nameIsUnderscored) {
                        report(node);
                    }

                /*
                 * Properties have their own rules, and
                 * AssignmentPattern nodes can be treated like Properties:
                 * e.g.: const { no_camelcased = false } = bar;
                 */
                } else if (node.parent.type === "Property" || node.parent.type === "AssignmentPattern") {

                    if (node.parent.parent && node.parent.parent.type === "ObjectPattern") {
                        if (node.parent.shorthand && node.parent.value.left && nameIsUnderscored) {
                            report(node);
                        }

                        const assignmentKeyEqualsValue = node.parent.key.name === node.parent.value.name;

                        if (nameIsUnderscored && node.parent.computed) {
                            report(node);
                        }

                        // prevent checking righthand side of destructured object
                        if (node.parent.key === node && node.parent.value !== node) {
                            return;
                        }

                        const valueIsUnderscored = node.parent.value.name && nameIsUnderscored;

                        // ignore destructuring if the option is set, unless a new identifier is created
                        if (valueIsUnderscored && !(assignmentKeyEqualsValue && ignoreDestructuring)) {
                            report(node);
                        }
                    }

                    // "never" check properties or always ignore destructuring
                    if (properties === "never" || (ignoreDestructuring && isInsideObjectPattern(node))) {
                        return;
                    }

                    // don't check right hand side of AssignmentExpression to prevent duplicate warnings
                    if (nameIsUnderscored && !ALLOWED_PARENT_TYPES.has(effectiveParent.type) && !(node.parent.right === node)) {
                        report(node);
                    }

                // Check if it's an import specifier
                } else if (["ImportSpecifier", "ImportNamespaceSpecifier", "ImportDefaultSpecifier"].includes(node.parent.type)) {

                    if (node.parent.type === "ImportSpecifier" && ignoreImports) {
                        return;
                    }

                    // Report only if the local imported identifier is underscored
                    if (
                        node.parent.local &&
                        node.parent.local.name === node.name &&
                        nameIsUnderscored
                    ) {
                        report(node);
                    }

                // Report anything that is underscored that isn't a CallExpression
                } else if (nameIsUnderscored && !ALLOWED_PARENT_TYPES.has(effectiveParent.type)) {
                    report(node);
                }
            }

        };

    }
};
