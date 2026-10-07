/**
 * @fileoverview A rule to control the use of single variable declarations.
 * @author Ian Christian Myers
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
 * Determines whether the given node is in a statement list.
 * @param {ASTNode} node node to check
 * @returns {boolean} `true` if the given node is in a statement list
 */
function isInStatementList(node) {
    return astUtils.STATEMENT_LIST_PARENTS.has(node.parent.type);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce variables to be declared either together or separately in functions",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/one-var"
        },

        fixable: "code",

        schema: [
            {
                oneOf: [
                    {
                        enum: ["always", "never", "consecutive"]
                    },
                    {
                        type: "object",
                        properties: {
                            separateRequires: {
                                type: "boolean"
                            },
                            var: {
                                enum: ["always", "never", "consecutive"]
                            },
                            let: {
                                enum: ["always", "never", "consecutive"]
                            },
                            const: {
                                enum: ["always", "never", "consecutive"]
                            }
                        },
                        additionalProperties: false
                    },
                    {
                        type: "object",
                        properties: {
                            initialized: {
                                enum: ["always", "never", "consecutive"]
                            },
                            uninitialized: {
                                enum: ["always", "never", "consecutive"]
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],

        messages: {
            combineUninitialized: "Combine this with the previous '{{type}}' statement with uninitialized variables.",
            combineInitialized: "Combine this with the previous '{{type}}' statement with initialized variables.",
            splitUninitialized: "Split uninitialized '{{type}}' declarations into multiple statements.",
            splitInitialized: "Split initialized '{{type}}' declarations into multiple statements.",
            splitRequires: "Split requires to be separated into a single block.",
            combine: "Combine this with the previous '{{type}}' statement.",
            split: "Split '{{type}}' declarations into multiple statements."
        }
    },

    create(context) {
        const MODE_ALWAYS = "always";
        const MODE_NEVER = "never";
        const MODE_CONSECUTIVE = "consecutive";
        const mode = context.options[0] || MODE_ALWAYS;

        const options = {};

        if (typeof mode === "string") { // simple options configuration with just a string
            options.var = { uninitialized: mode, initialized: mode };
            options.let = { uninitialized: mode, initialized: mode };
            options.const = { uninitialized: mode, initialized: mode };
        } else if (typeof mode === "object") { // options configuration is an object
            options.separateRequires = !!mode.separateRequires;
            options.var = { uninitialized: mode.var, initialized: mode.var };
            options.let = { uninitialized: mode.let, initialized: mode.let };
            options.const = { uninitialized: mode.const, initialized: mode.const };
            if (Object.prototype.hasOwnProperty.call(mode, "uninitialized")) {
                options.var.uninitialized = mode.uninitialized;
                options.let.uninitialized = mode.uninitialized;
                options.const.uninitialized = mode.uninitialized;
            }
            if (Object.prototype.hasOwnProperty.call(mode, "initialized")) {
                options.var.initialized = mode.initialized;
                options.let.initialized = mode.initialized;
                options.const.initialized = mode.initialized;
            }
        }

        const sourceCode = context.getSourceCode();

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
         * Check if a variable declaration is a require.
         * @param {ASTNode} decl variable declaration Node
         * @returns {bool} if decl is a require, return true; else return false.
         * @private
         */
        function isRequire(decl) {
            return decl.init && decl.init.type === "CallExpression" && decl.init.callee.name === "require";
        }

        /**
         * Records whether initialized/uninitialized/required variables are defined in current scope.
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
                        if (options.separateRequires && isRequire(declarations[i])) {
                            currentScope.required = true;
                        } else {
                            currentScope.initialized = true;
                        }
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
            const hasRequires = declarations.some(isRequire);

            if (currentOptions.uninitialized === MODE_ALWAYS && currentOptions.initialized === MODE_ALWAYS) {
                if (currentScope.uninitialized || currentScope.initialized) {
                    if (!hasRequires) {
                        return false;
                    }
                }
            }

            if (declarationCounts.uninitialized > 0) {
                if (currentOptions.uninitialized === MODE_ALWAYS && currentScope.uninitialized) {
                    return false;
                }
            }
            if (declarationCounts.initialized > 0) {
                if (currentOptions.initialized === MODE_ALWAYS && currentScope.initialized) {
                    if (!hasRequires) {
                        return false;
                    }
                }
            }
            if (currentScope.required && hasRequires) {
                return false;
            }
            recordTypes(statementType, declarations, currentScope);
            return true;
        }

        /**
         * Fixer to join VariableDeclaration's into a single declaration
         * @param {VariableDeclarator[]} declarations The `VariableDeclaration` to join
         * @returns {Function} The fixer function
         */
        function joinDeclarations(declarations) {
            const declaration = declarations[0];
            const body = Array.isArray(declaration.parent.parent.body) ? declaration.parent.parent.body : [];
            const currentIndex = body.findIndex(node => node.range[0] === declaration.parent.range[0]);
            const previousNode = body[currentIndex - 1];

            return fixer => {
                const type = sourceCode.getTokenBefore(declaration);
                const prevSemi = sourceCode.getTokenBefore(type);
                const res = [];

                if (previousNode && previousNode.kind === sourceCode.getText(type)) {
                    if (prevSemi.value === ";") {
                        res.push(fixer.replaceText(prevSemi, ","));
                    } else {
                        res.push(fixer.insertTextAfter(prevSemi, ","));
                    }
                    res.push(fixer.replaceText(type, ""));
                }

                return res;
            };
        }

        /**
         * Fixer to split a VariableDeclaration into individual declarations
         * @param {VariableDeclaration} declaration The `VariableDeclaration` to split
         * @returns {Function|null} The fixer function
         */
        function splitDeclarations(declaration) {
            const { parent } = declaration;

            // don't autofix code such as: if (foo) var x, y;
            if (!isInStatementList(parent.type === "ExportNamedDeclaration" ? parent : declaration)) {
                return null;
            }

            return fixer => declaration.declarations.map(declarator => {
                const tokenAfterDeclarator = sourceCode.getTokenAfter(declarator);

                if (tokenAfterDeclarator === null) {
                    return null;
                }

                const afterComma = sourceCode.getTokenAfter(tokenAfterDeclarator, { includeComments: true });

                if (tokenAfterDeclarator.value !== ",") {
                    return null;
                }

                const exportPlacement = declaration.parent.type === "ExportNamedDeclaration" ? "export " : "";

                /*
                 * `var x,y`
                 * tokenAfterDeclarator ^^ afterComma
                 */
                if (afterComma.range[0] === tokenAfterDeclarator.range[1]) {
                    return fixer.replaceText(tokenAfterDeclarator, `; ${exportPlacement}${declaration.kind} `);
                }

                /*
                 * `var x,
                 * tokenAfterDeclarator ^
                 *      y`
                 *      ^ afterComma
                 */
                if (
                    afterComma.loc.start.line > tokenAfterDeclarator.loc.end.line ||
                    afterComma.type === "Line" ||
                    afterComma.type === "Block"
                ) {
                    let lastComment = afterComma;

                    while (lastComment.type === "Line" || lastComment.type === "Block") {
                        lastComment = sourceCode.getTokenAfter(lastComment, { includeComments: true });
                    }

                    return fixer.replaceTextRange(
                        [tokenAfterDeclarator.range[0], lastComment.range[0]],
                        `;${sourceCode.text.slice(tokenAfterDeclarator.range[1], lastComment.range[0])}${exportPlacement}${declaration.kind} `
                    );
                }

                return fixer.replaceText(tokenAfterDeclarator, `; ${exportPlacement}${declaration.kind}`);
            }).filter(x => x);
        }

        /**
         * Checks a given VariableDeclaration node for errors.
         * @param {ASTNode} node The VariableDeclaration node to check
         * @returns {void}
         * @private
         */
        function checkVariableDeclaration(node) {
            const parent = node.parent;
            const type = node.kind;

            if (!options[type]) {
                return;
            }

            const declarations = node.declarations;
            const declarationCounts = countDeclarations(declarations);
            const mixedRequires = declarations.some(isRequire) && !declarations.every(isRequire);

            if (options[type].initialized === MODE_ALWAYS) {
                if (options.separateRequires && mixedRequires) {
                    context.report({
                        node,
                        messageId: "splitRequires"
                    });
                }
            }

            // consecutive
            const nodeIndex = (parent.body && parent.body.length > 0 && parent.body.indexOf(node)) || 0;

            if (nodeIndex > 0) {
                const previousNode = parent.body[nodeIndex - 1];
                const isPreviousNodeDeclaration = previousNode.type === "VariableDeclaration";
                const declarationsWithPrevious = declarations.concat(previousNode.declarations || []);

                if (
                    isPreviousNodeDeclaration &&
                    previousNode.kind === type &&
                    !(declarationsWithPrevious.some(isRequire) && !declarationsWithPrevious.every(isRequire))
                ) {
                    const previousDeclCounts = countDeclarations(previousNode.declarations);

                    if (options[type].initialized === MODE_CONSECUTIVE && options[type].uninitialized === MODE_CONSECUTIVE) {
                        context.report({
                            node,
                            messageId: "combine",
                            data: {
                                type
                            },
                            fix: joinDeclarations(declarations)
                        });
                    } else if (options[type].initialized === MODE_CONSECUTIVE && declarationCounts.initialized > 0 && previousDeclCounts.initialized > 0) {
                        context.report({
                            node,
                            messageId: "combineInitialized",
                            data: {
                                type
                            },
                            fix: joinDeclarations(declarations)
                        });
                    } else if (options[type].uninitialized === MODE_CONSECUTIVE &&
                            declarationCounts.uninitialized > 0 &&
                            previousDeclCounts.uninitialized > 0) {
                        context.report({
                            node,
                            messageId: "combineUninitialized",
                            data: {
                                type
                            },
                            fix: joinDeclarations(declarations)
                        });
                    }
                }
            }

            // always
            if (!hasOnlyOneStatement(type, declarations)) {
                if (options[type].initialized === MODE_ALWAYS && options[type].uninitialized === MODE_ALWAYS) {
                    context.report({
                        node,
                        messageId: "combine",
                        data: {
                            type
                        },
                        fix: joinDeclarations(declarations)
                    });
                } else {
                    if (options[type].initialized === MODE_ALWAYS && declarationCounts.initialized > 0) {
                        context.report({
                            node,
                            messageId: "combineInitialized",
                            data: {
                                type
                            },
                            fix: joinDeclarations(declarations)
                        });
                    }
                    if (options[type].uninitialized === MODE_ALWAYS && declarationCounts.uninitialized > 0) {
                        if (node.parent.left === node && (node.parent.type === "ForInStatement" || node.parent.type === "ForOfStatement")) {
                            return;
                        }
                        context.report({
                            node,
                            messageId: "combineUninitialized",
                            data: {
                                type
                            },
                            fix: joinDeclarations(declarations)
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
                            messageId: "split",
                            data: {
                                type
                            },
                            fix: splitDeclarations(node)
                        });
                    } else if (options[type].initialized === MODE_NEVER && declarationCounts.initialized > 0) {

                        // initialized
                        context.report({
                            node,
                            messageId: "splitInitialized",
                            data: {
                                type
                            },
                            fix: splitDeclarations(node)
                        });
                    } else if (options[type].uninitialized === MODE_NEVER && declarationCounts.uninitialized > 0) {

                        // uninitialized
                        context.report({
                            node,
                            messageId: "splitUninitialized",
                            data: {
                                type
                            },
                            fix: splitDeclarations(node)
                        });
                    }
                }
            }
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
            VariableDeclaration: checkVariableDeclaration,
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
