/**
 * @fileoverview A rule to suggest using arrow functions as callbacks.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given variable is a function name.
 * @param {escope.Variable} variable - A variable to check.
 * @returns {boolean} `true` if the variable is a function name.
 */
function isFunctionName(variable) {
    return variable && variable.defs[0].type === "FunctionName";
}

/**
 * Checks whether or not a given MetaProperty node equals to a given value.
 * @param {ASTNode} node - A MetaProperty node to check.
 * @param {string} metaName - The name of `MetaProperty.meta`.
 * @param {string} propertyName - The name of `MetaProperty.property`.
 * @returns {boolean} `true` if the node is the specific value.
 */
function checkMetaProperty(node, metaName, propertyName) {
    return node.meta.name === metaName && node.property.name === propertyName;
}

/**
 * Gets the variable object of `arguments` which is defined implicitly.
 * @param {escope.Scope} scope - A scope to get.
 * @returns {escope.Variable} The found variable object.
 */
function getVariableOfArguments(scope) {
    const variables = scope.variables;

    for (let i = 0; i < variables.length; ++i) {
        const variable = variables[i];

        if (variable.name === "arguments") {

            /*
             * If there was a parameter which is named "arguments", the
             * implicit "arguments" is not defined.
             * So does fast return with null.
             */
            return (variable.identifiers.length === 0) ? variable : null;
        }
    }

    /* istanbul ignore next */
    return null;
}

/**
 * Checkes whether or not a given node is a callback.
 * @param {ASTNode} node - A node to check.
 * @returns {Object}
 *   {boolean} retv.isCallback - `true` if the node is a callback.
 *   {boolean} retv.isLexicalThis - `true` if the node is with `.bind(this)`.
 */
function getCallbackInfo(node) {
    const retv = { isCallback: false, isLexicalThis: false };
    let parent = node.parent;

    while (node) {
        switch (parent.type) {

            // Checks parents recursively.

            case "LogicalExpression":
            case "ConditionalExpression":
                break;

            // Checks whether the parent node is `.bind(this)` call.
            case "MemberExpression":
                if (parent.object === node &&
                    !parent.property.computed &&
                    parent.property.type === "Identifier" &&
                    parent.property.name === "bind" &&
                    parent.parent.type === "CallExpression" &&
                    parent.parent.callee === parent
                ) {
                    retv.isLexicalThis = (
                        parent.parent.arguments.length === 1 &&
                        parent.parent.arguments[0].type === "ThisExpression"
                    );
                    node = parent;
                    parent = parent.parent;
                } else {
                    return retv;
                }
                break;

            // Checks whether the node is a callback.
            case "CallExpression":
            case "NewExpression":
                if (parent.callee !== node) {
                    retv.isCallback = true;
                }
                return retv;

            default:
                return retv;
        }

        node = parent;
        parent = parent.parent;
    }

    /* istanbul ignore next */
    throw new Error("unreachable");
}

/**
* Checks whether a simple list of parameters contains any duplicates. This does not handle complex
parameter lists (e.g. with destructuring), since complex parameter lists are a SyntaxError with duplicate
parameter names anyway. Instead, it always returns `false` for complex parameter lists.
* @param {ASTNode[]} paramsList The list of parameters for a function
* @returns {boolean} `true` if the list of parameters contains any duplicates
*/
function hasDuplicateParams(paramsList) {
    return paramsList.every(param => param.type === "Identifier") && paramsList.length !== new Set(paramsList.map(param => param.name)).size;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require arrow functions as callbacks",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: [
            {
                type: "object",
                properties: {
                    allowNamedFunctions: {
                        type: "boolean"
                    },
                    allowUnboundThis: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "code"
    },

    create(context) {
        const options = context.options[0] || {};

        const allowUnboundThis = options.allowUnboundThis !== false;  // default to true
        const allowNamedFunctions = options.allowNamedFunctions;
        const sourceCode = context.getSourceCode();

        /*
         * {Array<{this: boolean, super: boolean, meta: boolean}>}
         * - this - A flag which shows there are one or more ThisExpression.
         * - super - A flag which shows there are one or more Super.
         * - meta - A flag which shows there are one or more MethProperty.
         */
        let stack = [];

        /**
         * Pushes new function scope with all `false` flags.
         * @returns {void}
         */
        function enterScope() {
            stack.push({ this: false, super: false, meta: false });
        }

        /**
         * Pops a function scope from the stack.
         * @returns {{this: boolean, super: boolean, meta: boolean}} The information of the last scope.
         */
        function exitScope() {
            return stack.pop();
        }

        return {

            // Reset internal state.
            Program() {
                stack = [];
            },

            // If there are below, it cannot replace with arrow functions merely.
            ThisExpression() {
                const info = stack[stack.length - 1];

                if (info) {
                    info.this = true;
                }
            },

            Super() {
                const info = stack[stack.length - 1];

                if (info) {
                    info.super = true;
                }
            },

            MetaProperty(node) {
                const info = stack[stack.length - 1];

                if (info && checkMetaProperty(node, "new", "target")) {
                    info.meta = true;
                }
            },

            // To skip nested scopes.
            FunctionDeclaration: enterScope,
            "FunctionDeclaration:exit": exitScope,

            // Main.
            FunctionExpression: enterScope,
            "FunctionExpression:exit"(node) {
                const scopeInfo = exitScope();

                // Skip named function expressions
                if (allowNamedFunctions && node.id && node.id.name) {
                    return;
                }

                // Skip generators.
                if (node.generator) {
                    return;
                }

                // Skip recursive functions.
                const nameVar = context.getDeclaredVariables(node)[0];

                if (isFunctionName(nameVar) && nameVar.references.length > 0) {
                    return;
                }

                // Skip if it's using arguments.
                const variable = getVariableOfArguments(context.getScope());

                if (variable && variable.references.length > 0) {
                    return;
                }

                // Reports if it's a callback which can replace with arrows.
                const callbackInfo = getCallbackInfo(node);

                if (callbackInfo.isCallback &&
                    (!allowUnboundThis || !scopeInfo.this || callbackInfo.isLexicalThis) &&
                    !scopeInfo.super &&
                    !scopeInfo.meta
                ) {
                    context.report({
                        node,
                        message: "Unexpected function expression.",
                        fix(fixer) {
                            if ((!callbackInfo.isLexicalThis && scopeInfo.this) || hasDuplicateParams(node.params)) {

                                // If the callback function does not have .bind(this) and contains a reference to `this`, there
                                // is no way to determine what `this` should be, so don't perform any fixes.
                                // If the callback function has duplicates in its list of parameters (possible in sloppy mode),
                                // don't replace it with an arrow function, because this is a SyntaxError with arrow functions.
                                return null;
                            }

                            const paramsLeftParen = node.params.length ? sourceCode.getTokenBefore(node.params[0]) : sourceCode.getTokenBefore(node.body, 1);
                            const paramsRightParen = sourceCode.getTokenBefore(node.body);
                            const asyncKeyword = node.async ? "async " : "";
                            const paramsFullText = sourceCode.text.slice(paramsLeftParen.range[0], paramsRightParen.range[1]);

                            if (callbackInfo.isLexicalThis) {

                                // If the callback function has `.bind(this)`, replace it with an arrow function and remove the binding.
                                return fixer.replaceText(node.parent.parent, `${asyncKeyword}${paramsFullText} => ${sourceCode.getText(node.body)}`);
                            }

                            // Otherwise, only replace the `function` keyword and parameters with the arrow function parameters.
                            return fixer.replaceTextRange([node.start, node.body.start], `${asyncKeyword}${paramsFullText} => `);
                        }
                    });
                }
            }
        };
    }
};
