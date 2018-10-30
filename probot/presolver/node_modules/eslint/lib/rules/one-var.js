/**
 * @fileoverview A rule to control the use of single variable declarations.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce variables to be declared either together or separately in functions",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                oneOf: [
                    {
                        enum: ["always", "never"]
                    },
                    {
                        type: "object",
                        properties: {
                            var: {
                                enum: ["always", "never"]
                            },
                            let: {
                                enum: ["always", "never"]
                            },
                            const: {
                                enum: ["always", "never"]
                            }
                        },
                        additionalProperties: false
                    },
                    {
                        type: "object",
                        properties: {
                            initialized: {
                                enum: ["always", "never"]
                            },
                            uninitialized: {
                                enum: ["always", "never"]
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },

    create(context) {

        const MODE_ALWAYS = "always",
            MODE_NEVER = "never";

        const mode = context.options[0] || MODE_ALWAYS;

        const options = {
        };

        if (typeof mode === "string") { // simple options configuration with just a string
            options.var = { uninitialized: mode, initialized: mode };
            options.let = { uninitialized: mode, initialized: mode };
            options.const = { uninitialized: mode, initialized: mode };
        } else if (typeof mode === "object") { // options configuration is an object
            if (mode.hasOwnProperty("var") && typeof mode.var === "string") {
                options.var = { uninitialized: mode.var, initialized: mode.var };
            }
            if (mode.hasOwnProperty("let") && typeof mode.let === "string") {
                options.let = { uninitialized: mode.let, initialized: mode.let };
            }
            if (mode.hasOwnProperty("const") && typeof mode.const === "string") {
                options.const = { uninitialized: mode.const, initialized: mode.const };
            }
            if (mode.hasOwnProperty("uninitialized")) {
                if (!options.var) {
                    options.var = {};
                }
                if (!options.let) {
                    options.let = {};
                }
                if (!options.const) {
                    options.const = {};
                }
                options.var.uninitialized = mode.uninitialized;
                options.let.uninitialized = mode.uninitialized;
                options.const.uninitialized = mode.uninitialized;
            }
            if (mode.hasOwnProperty("initialized")) {
                if (!options.var) {
                    options.var = {};
                }
                if (!options.let) {
                    options.let = {};
                }
                if (!options.const) {
                    options.const = {};
                }
                options.var.initialized = mode.initialized;
                options.let.initialized = mode.initialized;
                options.const.initialized = mode.initialized;
            }
        }

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        const functionStack = [];
        const blockStack = [];

        /**
         * Increments the blockStack counter.
         * @returns {void}
         * @private
         */
        function startBlock() {
            blockStack.push({
                let: { initialized: false, uninitialized: false },
                const: { initialized: false, uninitialized: false }
            });
        }

        /**
         * Increments the functionStack counter.
         * @returns {void}
         * @private
         */
        function startFunction() {
            functionStack.push({ initialized: false, uninitialized: false });
            startBlock();
        }

        /**
         * Decrements the blockStack counter.
         * @returns {void}
         * @private
         */
        function endBlock() {
            blockStack.pop();
        }

        /**
         * Decrements the functionStack counter.
         * @returns {void}
         * @private
         */
        function endFunction() {
            functionStack.pop();
            endBlock();
        }

        /**
         * Records whether initialized or uninitialized variables are defined in current scope.
         * @param {string} statementType node.kind, one of: "var", "let", or "const"
         * @param {ASTNode[]} declarations List of declarations
         * @param {Object} currentScope The scope being investigated
         * @returns {void}
         * @private
         */
        function recordTypes(statementType, declarations, currentScope) {
            for (let i = 0; i < declarations.length; i++) {
                if (declarations[i].init === null) {
                    if (options[statementType] && options[statementType].uninitialized === MODE_ALWAYS) {
                        currentScope.uninitialized = true;
                    }
                } else {
                    if (options[statementType] && options[statementType].initialized === MODE_ALWAYS) {
                        currentScope.initialized = true;
                    }
                }
            }
        }

        /**
         * Determines the current scope (function or block)
         * @param  {string} statementType node.kind, one of: "var", "let", or "const"
         * @returns {Object} The scope associated with statementType
         */
        function getCurrentScope(statementType) {
            let currentScope;

            if (statementType === "var") {
                currentScope = functionStack[functionStack.length - 1];
            } else if (statementType === "let") {
                currentScope = blockStack[blockStack.length - 1].let;
            } else if (statementType === "const") {
                currentScope = blockStack[blockStack.length - 1].const;
            }
            return currentScope;
        }

        /**
         * Counts the number of initialized and uninitialized declarations in a list of declarations
         * @param {ASTNode[]} declarations List of declarations
         * @returns {Object} Counts of 'uninitialized' and 'initialized' declarations
         * @private
         */
        function countDeclarations(declarations) {
            const counts = { uninitialized: 0, initialized: 0 };

            for (let i = 0; i < declarations.length; i++) {
                if (declarations[i].init === null) {
                    counts.uninitialized++;
                } else {
                    counts.initialized++;
                }
            }
            return counts;
        }

        /**
         * Determines if there is more than one var statement in the current scope.
         * @param {string} statementType node.kind, one of: "var", "let", or "const"
         * @param {ASTNode[]} declarations List of declarations
         * @returns {boolean} Returns true if it is the first var declaration, false if not.
         * @private
         */
        function hasOnlyOneStatement(statementType, declarations) {

            const declarationCounts = countDeclarations(declarations);
            const currentOptions = options[statementType] || {};
            const currentScope = getCurrentScope(statementType);

            if (currentOptions.uninitialized === MODE_ALWAYS && currentOptions.initialized === MODE_ALWAYS) {
                if (currentScope.uninitialized || currentScope.initialized) {
                    return false;
                }
            }

            if (declarationCounts.uninitialized > 0) {
                if (currentOptions.uninitialized === MODE_ALWAYS && currentScope.uninitialized) {
                    return false;
                }
            }
            if (declarationCounts.initialized > 0) {
                if (currentOptions.initialized === MODE_ALWAYS && currentScope.initialized) {
                    return false;
                }
            }
            recordTypes(statementType, declarations, currentScope);
            return true;
        }


        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            Program: startFunction,
            FunctionDeclaration: startFunction,
            FunctionExpression: startFunction,
            ArrowFunctionExpression: startFunction,
            BlockStatement: startBlock,
            ForStatement: startBlock,
            ForInStatement: startBlock,
            ForOfStatement: startBlock,
            SwitchStatement: startBlock,

            VariableDeclaration(node) {
                const parent = node.parent;
                const type = node.kind;

                if (!options[type]) {
                    return;
                }

                const declarations = node.declarations;
                const declarationCounts = countDeclarations(declarations);

                // always
                if (!hasOnlyOneStatement(type, declarations)) {
                    if (options[type].initialized === MODE_ALWAYS && options[type].uninitialized === MODE_ALWAYS) {
                        context.report({
                            node,
                            message: "Combine this with the previous '{{type}}' statement.",
                            data: {
                                type
                            }
                        });
                    } else {
                        if (options[type].initialized === MODE_ALWAYS) {
                            context.report({
                                node,
                                message: "Combine this with the previous '{{type}}' statement with initialized variables.",
                                data: {
                                    type
                                }
                            });
                        }
                        if (options[type].uninitialized === MODE_ALWAYS) {
                            if (node.parent.left === node && (node.parent.type === "ForInStatement" || node.parent.type === "ForOfStatement")) {
                                return;
                            }
                            context.report({
                                node,
                                message: "Combine this with the previous '{{type}}' statement with uninitialized variables.",
                                data: {
                                    type
                                }
                            });
                        }
                    }
                }

                // never
                if (parent.type !== "ForStatement" || parent.init !== node) {
                    const totalDeclarations = declarationCounts.uninitialized + declarationCounts.initialized;

                    if (totalDeclarations > 1) {

                        if (options[type].initialized === MODE_NEVER && options[type].uninitialized === MODE_NEVER) {

                            // both initialized and uninitialized
                            context.report({
                                node,
                                message: "Split '{{type}}' declarations into multiple statements.",
                                data: {
                                    type
                                }
                            });
                        } else if (options[type].initialized === MODE_NEVER && declarationCounts.initialized > 0) {

                            // initialized
                            context.report({
                                node,
                                message: "Split initialized '{{type}}' declarations into multiple statements.",
                                data: {
                                    type
                                }
                            });
                        } else if (options[type].uninitialized === MODE_NEVER && declarationCounts.uninitialized > 0) {

                            // uninitialized
                            context.report({
                                node,
                                message: "Split uninitialized '{{type}}' declarations into multiple statements.",
                                data: {
                                    type
                                }
                            });
                        }
                    }
                }
            },

            "ForStatement:exit": endBlock,
            "ForOfStatement:exit": endBlock,
            "ForInStatement:exit": endBlock,
            "SwitchStatement:exit": endBlock,
            "BlockStatement:exit": endBlock,
            "Program:exit": endFunction,
            "FunctionDeclaration:exit": endFunction,
            "FunctionExpression:exit": endFunction,
            "ArrowFunctionExpression:exit": endFunction
        };

    }
};
