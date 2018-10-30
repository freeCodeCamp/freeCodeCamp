/**
 * @fileoverview Rule to require function names to match the name of the variable or property to which they are assigned.
 * @author Annie Zhang, Pavel Strashkin
 */

"use strict";

//--------------------------------------------------------------------------
// Requirements
//--------------------------------------------------------------------------

const astUtils = require("../ast-utils");
const esutils = require("esutils");

//--------------------------------------------------------------------------
// Helpers
//--------------------------------------------------------------------------

/**
 * Determines if a pattern is `module.exports` or `module["exports"]`
 * @param {ASTNode} pattern The left side of the AssignmentExpression
 * @returns {boolean} True if the pattern is `module.exports` or `module["exports"]`
 */
function isModuleExports(pattern) {
    if (pattern.type === "MemberExpression" && pattern.object.type === "Identifier" && pattern.object.name === "module") {

        // module.exports
        if (pattern.property.type === "Identifier" && pattern.property.name === "exports") {
            return true;
        }

        // module["exports"]
        if (pattern.property.type === "Literal" && pattern.property.value === "exports") {
            return true;
        }
    }
    return false;
}

/**
 * Determines if a string name is a valid identifier
 * @param {string} name The string to be checked
 * @param {int} ecmaVersion The ECMAScript version if specified in the parserOptions config
 * @returns {boolean} True if the string is a valid identifier
 */
function isIdentifier(name, ecmaVersion) {
    if (ecmaVersion >= 6) {
        return esutils.keyword.isIdentifierES6(name);
    }
    return esutils.keyword.isIdentifierES5(name);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const alwaysOrNever = { enum: ["always", "never"] };
const optionsObject = {
    type: "object",
    properties: {
        includeCommonJSModuleExports: {
            type: "boolean"
        }
    },
    additionalProperties: false
};

module.exports = {
    meta: {
        docs: {
            description: "require function names to match the name of the variable or property to which they are assigned",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: {
            anyOf: [{
                type: "array",
                additionalItems: false,
                items: [alwaysOrNever, optionsObject]
            }, {
                type: "array",
                additionalItems: false,
                items: [optionsObject]
            }]
        }
    },

    create(context) {
        const options = (typeof context.options[0] === "object" ? context.options[0] : context.options[1]) || {};
        const nameMatches = typeof context.options[0] === "string" ? context.options[0] : "always";
        const includeModuleExports = options.includeCommonJSModuleExports;
        const ecmaVersion = context.parserOptions && context.parserOptions.ecmaVersion ? context.parserOptions.ecmaVersion : 5;

        /**
         * Compares identifiers based on the nameMatches option
         * @param {string} x the first identifier
         * @param {string} y the second identifier
         * @returns {boolean} whether the two identifiers should warn.
         */
        function shouldWarn(x, y) {
            return (nameMatches === "always" && x !== y) || (nameMatches === "never" && x === y);
        }

        /**
         * Reports
         * @param {ASTNode} node The node to report
         * @param {string} name The variable or property name
         * @param {string} funcName The function name
         * @param {boolean} isProp True if the reported node is a property assignment
         * @returns {void}
         */
        function report(node, name, funcName, isProp) {
            let message;

            if (nameMatches === "always" && isProp) {
                message = "Function name `{{funcName}}` should match property name `{{name}}`";
            } else if (nameMatches === "always") {
                message = "Function name `{{funcName}}` should match variable name `{{name}}`";
            } else if (isProp) {
                message = "Function name `{{funcName}}` should not match property name `{{name}}`";
            } else {
                message = "Function name `{{funcName}}` should not match variable name `{{name}}`";
            }
            context.report({
                node,
                message,
                data: {
                    name,
                    funcName
                }
            });
        }

        /**
         * Determines whether a given node is a string literal
         * @param {ASTNode} node The node to check
         * @returns {boolean} `true` if the node is a string literal
         */
        function isStringLiteral(node) {
            return node.type === "Literal" && typeof node.value === "string";
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            VariableDeclarator(node) {
                if (!node.init || node.init.type !== "FunctionExpression" || node.id.type !== "Identifier") {
                    return;
                }
                if (node.init.id && shouldWarn(node.id.name, node.init.id.name)) {
                    report(node, node.id.name, node.init.id.name, false);
                }
            },

            AssignmentExpression(node) {
                if (
                    node.right.type !== "FunctionExpression" ||
                    (node.left.computed && node.left.property.type !== "Literal") ||
                    (!includeModuleExports && isModuleExports(node.left)) ||
                    (node.left.type !== "Identifier" && node.left.type !== "MemberExpression")
                ) {
                    return;
                }

                const isProp = node.left.type === "MemberExpression";
                const name = isProp ? astUtils.getStaticPropertyName(node.left) : node.left.name;

                if (node.right.id && isIdentifier(name) && shouldWarn(name, node.right.id.name)) {
                    report(node, name, node.right.id.name, isProp);
                }
            },

            Property(node) {
                if (node.value.type !== "FunctionExpression" || !node.value.id || node.computed && !isStringLiteral(node.key)) {
                    return;
                }
                if (node.key.type === "Identifier" && shouldWarn(node.key.name, node.value.id.name)) {
                    report(node, node.key.name, node.value.id.name, true);
                } else if (
                    isStringLiteral(node.key) &&
                    isIdentifier(node.key.value, ecmaVersion) &&
                    shouldWarn(node.key.value, node.value.id.name)
                ) {
                    report(node, node.key.value, node.value.id.name, true);
                }
            }
        };
    }
};
