/**
 * @fileoverview This option sets a specific tab width for your code
 *
 * This rule has been ported and modified from nodeca.
 * @author Vitaly Puzrin
 * @author Gyandeep Singh
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/* istanbul ignore next: this rule has known coverage issues, but it's deprecated and shouldn't be updated in the future anyway. */
module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce consistent indentation",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/indent-legacy"
        },

        deprecated: true,

        replacedBy: ["indent"],

        fixable: "whitespace",

        schema: [
            {
                oneOf: [
                    {
                        enum: ["tab"]
                    },
                    {
                        type: "integer",
                        minimum: 0
                    }
                ]
            },
            {
                type: "object",
                properties: {
                    SwitchCase: {
                        type: "integer",
                        minimum: 0
                    },
                    VariableDeclarator: {
                        oneOf: [
                            {
                                type: "integer",
                                minimum: 0
                            },
                            {
                                type: "object",
                                properties: {
                                    var: {
                                        type: "integer",
                                        minimum: 0
                                    },
                                    let: {
                                        type: "integer",
                                        minimum: 0
                                    },
                                    const: {
                                        type: "integer",
                                        minimum: 0
                                    }
                                }
                            }
                        ]
                    },
                    outerIIFEBody: {
                        type: "integer",
                        minimum: 0
                    },
                    MemberExpression: {
                        type: "integer",
                        minimum: 0
                    },
                    FunctionDeclaration: {
                        type: "object",
                        properties: {
                            parameters: {
                                oneOf: [
                                    {
                                        type: "integer",
                                        minimum: 0
                                    },
                                    {
                                        enum: ["first"]
                                    }
                                ]
                            },
                            body: {
                                type: "integer",
                                minimum: 0
                            }
                        }
                    },
                    FunctionExpression: {
                        type: "object",
                        properties: {
                            parameters: {
                                oneOf: [
                                    {
                                        type: "integer",
                                        minimum: 0
                                    },
                                    {
                                        enum: ["first"]
                                    }
                                ]
                            },
                            body: {
                                type: "integer",
                                minimum: 0
                            }
                        }
                    },
                    CallExpression: {
                        type: "object",
                        properties: {
                            parameters: {
                                oneOf: [
                                    {
                                        type: "integer",
                                        minimum: 0
                                    },
                                    {
                                        enum: ["first"]
                                    }
                                ]
                            }
                        }
                    },
                    ArrayExpression: {
                        oneOf: [
                            {
                                type: "integer",
                                minimum: 0
                            },
                            {
                                enum: ["first"]
                            }
                        ]
                    },
                    ObjectExpression: {
                        oneOf: [
                            {
                                type: "integer",
                                minimum: 0
                            },
                            {
                                enum: ["first"]
                            }
                        ]
                    }
                },
                additionalProperties: false
            }
        ],
        messages: {
            expected: "Expected indentation of {{expected}} but found {{actual}}."
        }
    },

    create(context) {
        const DEFAULT_VARIABLE_INDENT = 1;
        const DEFAULT_PARAMETER_INDENT = null; // For backwards compatibility, don't check parameter indentation unless specified in the config
        const DEFAULT_FUNCTION_BODY_INDENT = 1;

        let indentType = "space";
        let indentSize = 4;
        const options = {
            SwitchCase: 0,
            VariableDeclarator: {
                var: DEFAULT_VARIABLE_INDENT,
                let: DEFAULT_VARIABLE_INDENT,
                const: DEFAULT_VARIABLE_INDENT
            },
            outerIIFEBody: null,
            FunctionDeclaration: {
                parameters: DEFAULT_PARAMETER_INDENT,
                body: DEFAULT_FUNCTION_BODY_INDENT
            },
            FunctionExpression: {
                parameters: DEFAULT_PARAMETER_INDENT,
                body: DEFAULT_FUNCTION_BODY_INDENT
            },
            CallExpression: {
                arguments: DEFAULT_PARAMETER_INDENT
            },
            ArrayExpression: 1,
            ObjectExpression: 1
        };

        const sourceCode = context.getSourceCode();

        if (context.options.length) {
            if (context.options[0] === "tab") {
                indentSize = 1;
                indentType = "tab";
            } else /* istanbul ignore else : this will be caught by options validation */ if (typeof context.options[0] === "number") {
                indentSize = context.options[0];
                indentType = "space";
            }

            if (context.options[1]) {
                const opts = context.options[1];

                options.SwitchCase = opts.SwitchCase || 0;
                const variableDeclaratorRules = opts.VariableDeclarator;

                if (typeof variableDeclaratorRules === "number") {
                    options.VariableDeclarator = {
                        var: variableDeclaratorRules,
                        let: variableDeclaratorRules,
                        const: variableDeclaratorRules
                    };
                } else if (typeof variableDeclaratorRules === "object") {
                    Object.assign(options.VariableDeclarator, variableDeclaratorRules);
                }

                if (typeof opts.outerIIFEBody === "number") {
                    options.outerIIFEBody = opts.outerIIFEBody;
                }

                if (typeof opts.MemberExpression === "number") {
                    options.MemberExpression = opts.MemberExpression;
                }

                if (typeof opts.FunctionDeclaration === "object") {
                    Object.assign(options.FunctionDeclaration, opts.FunctionDeclaration);
                }

                if (typeof opts.FunctionExpression === "object") {
                    Object.assign(options.FunctionExpression, opts.FunctionExpression);
                }

                if (typeof opts.CallExpression === "object") {
                    Object.assign(options.CallExpression, opts.CallExpression);
                }

                if (typeof opts.ArrayExpression === "number" || typeof opts.ArrayExpression === "string") {
                    options.ArrayExpression = opts.ArrayExpression;
                }

                if (typeof opts.ObjectExpression === "number" || typeof opts.ObjectExpression === "string") {
                    options.ObjectExpression = opts.ObjectExpression;
                }
            }
        }

        const caseIndentStore = {};

        /**
         * Creates an error message for a line, given the expected/actual indentation.
         * @param {int} expectedAmount The expected amount of indentation characters for this line
         * @param {int} actualSpaces The actual number of indentation spaces that were found on this line
         * @param {int} actualTabs The actual number of indentation tabs that were found on this line
         * @returns {string} An error message for this line
         */
        function createErrorMessageData(expectedAmount, actualSpaces, actualTabs) {
            const expectedStatement = `${expectedAmount} ${indentType}${expectedAmount === 1 ? "" : "s"}`; // e.g. "2 tabs"
            const foundSpacesWord = `space${actualSpaces === 1 ? "" : "s"}`; // e.g. "space"
            const foundTabsWord = `tab${actualTabs === 1 ? "" : "s"}`; // e.g. "tabs"
            let foundStatement;

            if (actualSpaces > 0 && actualTabs > 0) {
                foundStatement = `${actualSpaces} ${foundSpacesWord} and ${actualTabs} ${foundTabsWord}`; // e.g. "1 space and 2 tabs"
            } else if (actualSpaces > 0) {

                /*
                 * Abbreviate the message if the expected indentation is also spaces.
                 * e.g. 'Expected 4 spaces but found 2' rather than 'Expected 4 spaces but found 2 spaces'
                 */
                foundStatement = indentType === "space" ? actualSpaces : `${actualSpaces} ${foundSpacesWord}`;
            } else if (actualTabs > 0) {
                foundStatement = indentType === "tab" ? actualTabs : `${actualTabs} ${foundTabsWord}`;
            } else {
                foundStatement = "0";
            }
            return {
                expected: expectedStatement,
                actual: foundStatement
            };
        }

        /**
         * Reports a given indent violation
         * @param {ASTNode} node Node violating the indent rule
         * @param {int} needed Expected indentation character count
         * @param {int} gottenSpaces Indentation space count in the actual node/code
         * @param {int} gottenTabs Indentation tab count in the actual node/code
         * @param {Object} [loc] Error line and column location
         * @param {boolean} isLastNodeCheck Is the error for last node check
         * @returns {void}
         */
        function report(node, needed, gottenSpaces, gottenTabs, loc, isLastNodeCheck) {
            if (gottenSpaces && gottenTabs) {

                // To avoid conflicts with `no-mixed-spaces-and-tabs`, don't report lines that have both spaces and tabs.
                return;
            }

            const desiredIndent = (indentType === "space" ? " " : "\t").repeat(needed);

            const textRange = isLastNodeCheck
                ? [node.range[1] - node.loc.end.column, node.range[1] - node.loc.end.column + gottenSpaces + gottenTabs]
                : [node.range[0] - node.loc.start.column, node.range[0] - node.loc.start.column + gottenSpaces + gottenTabs];

            context.report({
                node,
                loc,
                messageId: "expected",
                data: createErrorMessageData(needed, gottenSpaces, gottenTabs),
                fix: fixer => fixer.replaceTextRange(textRange, desiredIndent)
            });
        }

        /**
         * Get the actual indent of node
         * @param {ASTNode|Token} node Node to examine
         * @param {boolean} [byLastLine=false] get indent of node's last line
         * @returns {Object} The node's indent. Contains keys `space` and `tab`, representing the indent of each character. Also
         * contains keys `goodChar` and `badChar`, where `goodChar` is the amount of the user's desired indentation character, and
         * `badChar` is the amount of the other indentation character.
         */
        function getNodeIndent(node, byLastLine) {
            const token = byLastLine ? sourceCode.getLastToken(node) : sourceCode.getFirstToken(node);
            const srcCharsBeforeNode = sourceCode.getText(token, token.loc.start.column).split("");
            const indentChars = srcCharsBeforeNode.slice(0, srcCharsBeforeNode.findIndex(char => char !== " " && char !== "\t"));
            const spaces = indentChars.filter(char => char === " ").length;
            const tabs = indentChars.filter(char => char === "\t").length;

            return {
                space: spaces,
                tab: tabs,
                goodChar: indentType === "space" ? spaces : tabs,
                badChar: indentType === "space" ? tabs : spaces
            };
        }

        /**
         * Checks node is the first in its own start line. By default it looks by start line.
         * @param {ASTNode} node The node to check
         * @param {boolean} [byEndLocation=false] Lookup based on start position or end
         * @returns {boolean} true if its the first in the its start line
         */
        function isNodeFirstInLine(node, byEndLocation) {
            const firstToken = byEndLocation === true ? sourceCode.getLastToken(node, 1) : sourceCode.getTokenBefore(node),
                startLine = byEndLocation === true ? node.loc.end.line : node.loc.start.line,
                endLine = firstToken ? firstToken.loc.end.line : -1;

            return startLine !== endLine;
        }

        /**
         * Check indent for node
         * @param {ASTNode} node Node to check
         * @param {int} neededIndent needed indent
         * @returns {void}
         */
        function checkNodeIndent(node, neededIndent) {
            const actualIndent = getNodeIndent(node, false);

            if (
                node.type !== "ArrayExpression" &&
                node.type !== "ObjectExpression" &&
                (actualIndent.goodChar !== neededIndent || actualIndent.badChar !== 0) &&
                isNodeFirstInLine(node)
            ) {
                report(node, neededIndent, actualIndent.space, actualIndent.tab);
            }

            if (node.type === "IfStatement" && node.alternate) {
                const elseToken = sourceCode.getTokenBefore(node.alternate);

                checkNodeIndent(elseToken, neededIndent);

                if (!isNodeFirstInLine(node.alternate)) {
                    checkNodeIndent(node.alternate, neededIndent);
                }
            }

            if (node.type === "TryStatement" && node.handler) {
                const catchToken = sourceCode.getFirstToken(node.handler);

                checkNodeIndent(catchToken, neededIndent);
            }

            if (node.type === "TryStatement" && node.finalizer) {
                const finallyToken = sourceCode.getTokenBefore(node.finalizer);

                checkNodeIndent(finallyToken, neededIndent);
            }

            if (node.type === "DoWhileStatement") {
                const whileToken = sourceCode.getTokenAfter(node.body);

                checkNodeIndent(whileToken, neededIndent);
            }
        }

        /**
         * Check indent for nodes list
         * @param {ASTNode[]} nodes list of node objects
         * @param {int} indent needed indent
         * @returns {void}
         */
        function checkNodesIndent(nodes, indent) {
            nodes.forEach(node => checkNodeIndent(node, indent));
        }

        /**
         * Check last node line indent this detects, that block closed correctly
         * @param {ASTNode} node Node to examine
         * @param {int} lastLineIndent needed indent
         * @returns {void}
         */
        function checkLastNodeLineIndent(node, lastLineIndent) {
            const lastToken = sourceCode.getLastToken(node);
            const endIndent = getNodeIndent(lastToken, true);

            if ((endIndent.goodChar !== lastLineIndent || endIndent.badChar !== 0) && isNodeFirstInLine(node, true)) {
                report(
                    node,
                    lastLineIndent,
                    endIndent.space,
                    endIndent.tab,
                    { line: lastToken.loc.start.line, column: lastToken.loc.start.column },
                    true
                );
            }
        }

        /**
         * Check last node line indent this detects, that block closed correctly
         * This function for more complicated return statement case, where closing parenthesis may be followed by ';'
         * @param {ASTNode} node Node to examine
         * @param {int} firstLineIndent first line needed indent
         * @returns {void}
         */
        function checkLastReturnStatementLineIndent(node, firstLineIndent) {

            /*
             * in case if return statement ends with ');' we have traverse back to ')'
             * otherwise we'll measure indent for ';' and replace ')'
             */
            const lastToken = sourceCode.getLastToken(node, astUtils.isClosingParenToken);
            const textBeforeClosingParenthesis = sourceCode.getText(lastToken, lastToken.loc.start.column).slice(0, -1);

            if (textBeforeClosingParenthesis.trim()) {

                // There are tokens before the closing paren, don't report this case
                return;
            }

            const endIndent = getNodeIndent(lastToken, true);

            if (endIndent.goodChar !== firstLineIndent) {
                report(
                    node,
                    firstLineIndent,
                    endIndent.space,
                    endIndent.tab,
                    { line: lastToken.loc.start.line, column: lastToken.loc.start.column },
                    true
                );
            }
        }

        /**
         * Check first node line indent is correct
         * @param {ASTNode} node Node to examine
         * @param {int} firstLineIndent needed indent
         * @returns {void}
         */
        function checkFirstNodeLineIndent(node, firstLineIndent) {
            const startIndent = getNodeIndent(node, false);

            if ((startIndent.goodChar !== firstLineIndent || startIndent.badChar !== 0) && isNodeFirstInLine(node)) {
                report(
                    node,
                    firstLineIndent,
                    startIndent.space,
                    startIndent.tab,
                    { line: node.loc.start.line, column: node.loc.start.column }
                );
            }
        }

        /**
         * Returns a parent node of given node based on a specified type
         * if not present then return null
         * @param {ASTNode} node node to examine
         * @param {string} type type that is being looked for
         * @param {string} stopAtList end points for the evaluating code
         * @returns {ASTNode|void} if found then node otherwise null
         */
        function getParentNodeByType(node, type, stopAtList) {
            let parent = node.parent;
            const stopAtSet = new Set(stopAtList || ["Program"]);

            while (parent.type !== type && !stopAtSet.has(parent.type) && parent.type !== "Program") {
                parent = parent.parent;
            }

            return parent.type === type ? parent : null;
        }

        /**
         * Returns the VariableDeclarator based on the current node
         * if not present then return null
         * @param {ASTNode} node node to examine
         * @returns {ASTNode|void} if found then node otherwise null
         */
        function getVariableDeclaratorNode(node) {
            return getParentNodeByType(node, "VariableDeclarator");
        }

        /**
         * Check to see if the node is part of the multi-line variable declaration.
         * Also if its on the same line as the varNode
         * @param {ASTNode} node node to check
         * @param {ASTNode} varNode variable declaration node to check against
         * @returns {boolean} True if all the above condition satisfy
         */
        function isNodeInVarOnTop(node, varNode) {
            return varNode &&
                varNode.parent.loc.start.line === node.loc.start.line &&
                varNode.parent.declarations.length > 1;
        }

        /**
         * Check to see if the argument before the callee node is multi-line and
         * there should only be 1 argument before the callee node
         * @param {ASTNode} node node to check
         * @returns {boolean} True if arguments are multi-line
         */
        function isArgBeforeCalleeNodeMultiline(node) {
            const parent = node.parent;

            if (parent.arguments.length >= 2 && parent.arguments[1] === node) {
                return parent.arguments[0].loc.end.line > parent.arguments[0].loc.start.line;
            }

            return false;
        }

        /**
         * Check to see if the node is a file level IIFE
         * @param {ASTNode} node The function node to check.
         * @returns {boolean} True if the node is the outer IIFE
         */
        function isOuterIIFE(node) {
            const parent = node.parent;
            let stmt = parent.parent;

            /*
             * Verify that the node is an IIEF
             */
            if (
                parent.type !== "CallExpression" ||
                parent.callee !== node) {

                return false;
            }

            /*
             * Navigate legal ancestors to determine whether this IIEF is outer
             */
            while (
                stmt.type === "UnaryExpression" && (
                    stmt.operator === "!" ||
                    stmt.operator === "~" ||
                    stmt.operator === "+" ||
                    stmt.operator === "-") ||
                stmt.type === "AssignmentExpression" ||
                stmt.type === "LogicalExpression" ||
                stmt.type === "SequenceExpression" ||
                stmt.type === "VariableDeclarator") {

                stmt = stmt.parent;
            }

            return ((
                stmt.type === "ExpressionStatement" ||
                stmt.type === "VariableDeclaration") &&
                stmt.parent && stmt.parent.type === "Program"
            );
        }

        /**
         * Check indent for function block content
         * @param {ASTNode} node A BlockStatement node that is inside of a function.
         * @returns {void}
         */
        function checkIndentInFunctionBlock(node) {

            /*
             * Search first caller in chain.
             * Ex.:
             *
             * Models <- Identifier
             *   .User
             *   .find()
             *   .exec(function() {
             *   // function body
             * });
             *
             * Looks for 'Models'
             */
            const calleeNode = node.parent; // FunctionExpression
            let indent;

            if (calleeNode.parent &&
                (calleeNode.parent.type === "Property" ||
                calleeNode.parent.type === "ArrayExpression")) {

                // If function is part of array or object, comma can be put at left
                indent = getNodeIndent(calleeNode, false).goodChar;
            } else {

                // If function is standalone, simple calculate indent
                indent = getNodeIndent(calleeNode).goodChar;
            }

            if (calleeNode.parent.type === "CallExpression") {
                const calleeParent = calleeNode.parent;

                if (calleeNode.type !== "FunctionExpression" && calleeNode.type !== "ArrowFunctionExpression") {
                    if (calleeParent && calleeParent.loc.start.line < node.loc.start.line) {
                        indent = getNodeIndent(calleeParent).goodChar;
                    }
                } else {
                    if (isArgBeforeCalleeNodeMultiline(calleeNode) &&
                        calleeParent.callee.loc.start.line === calleeParent.callee.loc.end.line &&
                        !isNodeFirstInLine(calleeNode)) {
                        indent = getNodeIndent(calleeParent).goodChar;
                    }
                }
            }

            /*
             * function body indent should be indent + indent size, unless this
             * is a FunctionDeclaration, FunctionExpression, or outer IIFE and the corresponding options are enabled.
             */
            let functionOffset = indentSize;

            if (options.outerIIFEBody !== null && isOuterIIFE(calleeNode)) {
                functionOffset = options.outerIIFEBody * indentSize;
            } else if (calleeNode.type === "FunctionExpression") {
                functionOffset = options.FunctionExpression.body * indentSize;
            } else if (calleeNode.type === "FunctionDeclaration") {
                functionOffset = options.FunctionDeclaration.body * indentSize;
            }
            indent += functionOffset;

            // check if the node is inside a variable
            const parentVarNode = getVariableDeclaratorNode(node);

            if (parentVarNode && isNodeInVarOnTop(node, parentVarNode)) {
                indent += indentSize * options.VariableDeclarator[parentVarNode.parent.kind];
            }

            if (node.body.length > 0) {
                checkNodesIndent(node.body, indent);
            }

            checkLastNodeLineIndent(node, indent - functionOffset);
        }


        /**
         * Checks if the given node starts and ends on the same line
         * @param {ASTNode} node The node to check
         * @returns {boolean} Whether or not the block starts and ends on the same line.
         */
        function isSingleLineNode(node) {
            const lastToken = sourceCode.getLastToken(node),
                startLine = node.loc.start.line,
                endLine = lastToken.loc.end.line;

            return startLine === endLine;
        }

        /**
         * Check indent for array block content or object block content
         * @param {ASTNode} node node to examine
         * @returns {void}
         */
        function checkIndentInArrayOrObjectBlock(node) {

            // Skip inline
            if (isSingleLineNode(node)) {
                return;
            }

            let elements = (node.type === "ArrayExpression") ? node.elements : node.properties;

            // filter out empty elements example would be [ , 2] so remove first element as espree considers it as null
            elements = elements.filter(elem => elem !== null);

            let nodeIndent;
            let elementsIndent;
            const parentVarNode = getVariableDeclaratorNode(node);

            // TODO - come up with a better strategy in future
            if (isNodeFirstInLine(node)) {
                const parent = node.parent;

                nodeIndent = getNodeIndent(parent).goodChar;
                if (!parentVarNode || parentVarNode.loc.start.line !== node.loc.start.line) {
                    if (parent.type !== "VariableDeclarator" || parentVarNode === parentVarNode.parent.declarations[0]) {
                        if (parent.type === "VariableDeclarator" && parentVarNode.loc.start.line === parent.loc.start.line) {
                            nodeIndent += (indentSize * options.VariableDeclarator[parentVarNode.parent.kind]);
                        } else if (parent.type === "ObjectExpression" || parent.type === "ArrayExpression") {
                            const parentElements = node.parent.type === "ObjectExpression" ? node.parent.properties : node.parent.elements;

                            if (parentElements[0] &&
                                    parentElements[0].loc.start.line === parent.loc.start.line &&
                                    parentElements[0].loc.end.line !== parent.loc.start.line) {

                                /*
                                 * If the first element of the array spans multiple lines, don't increase the expected indentation of the rest.
                                 * e.g. [{
                                 *        foo: 1
                                 *      },
                                 *      {
                                 *        bar: 1
                                 *      }]
                                 * the second object is not indented.
                                 */
                            } else if (typeof options[parent.type] === "number") {
                                nodeIndent += options[parent.type] * indentSize;
                            } else {
                                nodeIndent = parentElements[0].loc.start.column;
                            }
                        } else if (parent.type === "CallExpression" || parent.type === "NewExpression") {
                            if (typeof options.CallExpression.arguments === "number") {
                                nodeIndent += options.CallExpression.arguments * indentSize;
                            } else if (options.CallExpression.arguments === "first") {
                                if (parent.arguments.indexOf(node) !== -1) {
                                    nodeIndent = parent.arguments[0].loc.start.column;
                                }
                            } else {
                                nodeIndent += indentSize;
                            }
                        } else if (parent.type === "LogicalExpression" || parent.type === "ArrowFunctionExpression") {
                            nodeIndent += indentSize;
                        }
                    }
                }

                checkFirstNodeLineIndent(node, nodeIndent);
            } else {
                nodeIndent = getNodeIndent(node).goodChar;
            }

            if (options[node.type] === "first") {
                elementsIndent = elements.length ? elements[0].loc.start.column : 0; // If there are no elements, elementsIndent doesn't matter.
            } else {
                elementsIndent = nodeIndent + indentSize * options[node.type];
            }

            /*
             * Check if the node is a multiple variable declaration; if so, then
             * make sure indentation takes that into account.
             */
            if (isNodeInVarOnTop(node, parentVarNode)) {
                elementsIndent += indentSize * options.VariableDeclarator[parentVarNode.parent.kind];
            }

            checkNodesIndent(elements, elementsIndent);

            if (elements.length > 0) {

                // Skip last block line check if last item in same line
                if (elements[elements.length - 1].loc.end.line === node.loc.end.line) {
                    return;
                }
            }

            checkLastNodeLineIndent(node, nodeIndent +
                (isNodeInVarOnTop(node, parentVarNode) ? options.VariableDeclarator[parentVarNode.parent.kind] * indentSize : 0));
        }

        /**
         * Check if the node or node body is a BlockStatement or not
         * @param {ASTNode} node node to test
         * @returns {boolean} True if it or its body is a block statement
         */
        function isNodeBodyBlock(node) {
            return node.type === "BlockStatement" || node.type === "ClassBody" || (node.body && node.body.type === "BlockStatement") ||
                (node.consequent && node.consequent.type === "BlockStatement");
        }

        /**
         * Check indentation for blocks
         * @param {ASTNode} node node to check
         * @returns {void}
         */
        function blockIndentationCheck(node) {

            // Skip inline blocks
            if (isSingleLineNode(node)) {
                return;
            }

            if (node.parent && (
                node.parent.type === "FunctionExpression" ||
                node.parent.type === "FunctionDeclaration" ||
                node.parent.type === "ArrowFunctionExpression")
            ) {
                checkIndentInFunctionBlock(node);
                return;
            }

            let indent;
            let nodesToCheck = [];

            /*
             * For this statements we should check indent from statement beginning,
             * not from the beginning of the block.
             */
            const statementsWithProperties = [
                "IfStatement", "WhileStatement", "ForStatement", "ForInStatement", "ForOfStatement", "DoWhileStatement", "ClassDeclaration", "TryStatement"
            ];

            if (node.parent && statementsWithProperties.indexOf(node.parent.type) !== -1 && isNodeBodyBlock(node)) {
                indent = getNodeIndent(node.parent).goodChar;
            } else if (node.parent && node.parent.type === "CatchClause") {
                indent = getNodeIndent(node.parent.parent).goodChar;
            } else {
                indent = getNodeIndent(node).goodChar;
            }

            if (node.type === "IfStatement" && node.consequent.type !== "BlockStatement") {
                nodesToCheck = [node.consequent];
            } else if (Array.isArray(node.body)) {
                nodesToCheck = node.body;
            } else {
                nodesToCheck = [node.body];
            }

            if (nodesToCheck.length > 0) {
                checkNodesIndent(nodesToCheck, indent + indentSize);
            }

            if (node.type === "BlockStatement") {
                checkLastNodeLineIndent(node, indent);
            }
        }

        /**
         * Filter out the elements which are on the same line of each other or the node.
         * basically have only 1 elements from each line except the variable declaration line.
         * @param {ASTNode} node Variable declaration node
         * @returns {ASTNode[]} Filtered elements
         */
        function filterOutSameLineVars(node) {
            return node.declarations.reduce((finalCollection, elem) => {
                const lastElem = finalCollection[finalCollection.length - 1];

                if ((elem.loc.start.line !== node.loc.start.line && !lastElem) ||
                    (lastElem && lastElem.loc.start.line !== elem.loc.start.line)) {
                    finalCollection.push(elem);
                }

                return finalCollection;
            }, []);
        }

        /**
         * Check indentation for variable declarations
         * @param {ASTNode} node node to examine
         * @returns {void}
         */
        function checkIndentInVariableDeclarations(node) {
            const elements = filterOutSameLineVars(node);
            const nodeIndent = getNodeIndent(node).goodChar;
            const lastElement = elements[elements.length - 1];

            const elementsIndent = nodeIndent + indentSize * options.VariableDeclarator[node.kind];

            checkNodesIndent(elements, elementsIndent);

            // Only check the last line if there is any token after the last item
            if (sourceCode.getLastToken(node).loc.end.line <= lastElement.loc.end.line) {
                return;
            }

            const tokenBeforeLastElement = sourceCode.getTokenBefore(lastElement);

            if (tokenBeforeLastElement.value === ",") {

                // Special case for comma-first syntax where the semicolon is indented
                checkLastNodeLineIndent(node, getNodeIndent(tokenBeforeLastElement).goodChar);
            } else {
                checkLastNodeLineIndent(node, elementsIndent - indentSize);
            }
        }

        /**
         * Check and decide whether to check for indentation for blockless nodes
         * Scenarios are for or while statements without braces around them
         * @param {ASTNode} node node to examine
         * @returns {void}
         */
        function blockLessNodes(node) {
            if (node.body.type !== "BlockStatement") {
                blockIndentationCheck(node);
            }
        }

        /**
         * Returns the expected indentation for the case statement
         * @param {ASTNode} node node to examine
         * @param {int} [providedSwitchIndent] indent for switch statement
         * @returns {int} indent size
         */
        function expectedCaseIndent(node, providedSwitchIndent) {
            const switchNode = (node.type === "SwitchStatement") ? node : node.parent;
            const switchIndent = typeof providedSwitchIndent === "undefined"
                ? getNodeIndent(switchNode).goodChar
                : providedSwitchIndent;
            let caseIndent;

            if (caseIndentStore[switchNode.loc.start.line]) {
                return caseIndentStore[switchNode.loc.start.line];
            }

            if (switchNode.cases.length > 0 && options.SwitchCase === 0) {
                caseIndent = switchIndent;
            } else {
                caseIndent = switchIndent + (indentSize * options.SwitchCase);
            }

            caseIndentStore[switchNode.loc.start.line] = caseIndent;
            return caseIndent;

        }

        /**
         * Checks whether a return statement is wrapped in ()
         * @param {ASTNode} node node to examine
         * @returns {boolean} the result
         */
        function isWrappedInParenthesis(node) {
            const regex = /^return\s*?\(\s*?\);*?/u;

            const statementWithoutArgument = sourceCode.getText(node).replace(
                sourceCode.getText(node.argument), ""
            );

            return regex.test(statementWithoutArgument);
        }

        return {
            Program(node) {
                if (node.body.length > 0) {

                    // Root nodes should have no indent
                    checkNodesIndent(node.body, getNodeIndent(node).goodChar);
                }
            },

            ClassBody: blockIndentationCheck,

            BlockStatement: blockIndentationCheck,

            WhileStatement: blockLessNodes,

            ForStatement: blockLessNodes,

            ForInStatement: blockLessNodes,

            ForOfStatement: blockLessNodes,

            DoWhileStatement: blockLessNodes,

            IfStatement(node) {
                if (node.consequent.type !== "BlockStatement" && node.consequent.loc.start.line > node.loc.start.line) {
                    blockIndentationCheck(node);
                }
            },

            VariableDeclaration(node) {
                if (node.declarations[node.declarations.length - 1].loc.start.line > node.declarations[0].loc.start.line) {
                    checkIndentInVariableDeclarations(node);
                }
            },

            ObjectExpression(node) {
                checkIndentInArrayOrObjectBlock(node);
            },

            ArrayExpression(node) {
                checkIndentInArrayOrObjectBlock(node);
            },

            MemberExpression(node) {

                if (typeof options.MemberExpression === "undefined") {
                    return;
                }

                if (isSingleLineNode(node)) {
                    return;
                }

                /*
                 * The typical layout of variable declarations and assignments
                 * alter the expectation of correct indentation. Skip them.
                 * TODO: Add appropriate configuration options for variable
                 * declarations and assignments.
                 */
                if (getParentNodeByType(node, "VariableDeclarator", ["FunctionExpression", "ArrowFunctionExpression"])) {
                    return;
                }

                if (getParentNodeByType(node, "AssignmentExpression", ["FunctionExpression"])) {
                    return;
                }

                const propertyIndent = getNodeIndent(node).goodChar + indentSize * options.MemberExpression;

                const checkNodes = [node.property];

                const dot = sourceCode.getTokenBefore(node.property);

                if (dot.type === "Punctuator" && dot.value === ".") {
                    checkNodes.push(dot);
                }

                checkNodesIndent(checkNodes, propertyIndent);
            },

            SwitchStatement(node) {

                // Switch is not a 'BlockStatement'
                const switchIndent = getNodeIndent(node).goodChar;
                const caseIndent = expectedCaseIndent(node, switchIndent);

                checkNodesIndent(node.cases, caseIndent);


                checkLastNodeLineIndent(node, switchIndent);
            },

            SwitchCase(node) {

                // Skip inline cases
                if (isSingleLineNode(node)) {
                    return;
                }
                const caseIndent = expectedCaseIndent(node);

                checkNodesIndent(node.consequent, caseIndent + indentSize);
            },

            FunctionDeclaration(node) {
                if (isSingleLineNode(node)) {
                    return;
                }
                if (options.FunctionDeclaration.parameters === "first" && node.params.length) {
                    checkNodesIndent(node.params.slice(1), node.params[0].loc.start.column);
                } else if (options.FunctionDeclaration.parameters !== null) {
                    checkNodesIndent(node.params, getNodeIndent(node).goodChar + indentSize * options.FunctionDeclaration.parameters);
                }
            },

            FunctionExpression(node) {
                if (isSingleLineNode(node)) {
                    return;
                }
                if (options.FunctionExpression.parameters === "first" && node.params.length) {
                    checkNodesIndent(node.params.slice(1), node.params[0].loc.start.column);
                } else if (options.FunctionExpression.parameters !== null) {
                    checkNodesIndent(node.params, getNodeIndent(node).goodChar + indentSize * options.FunctionExpression.parameters);
                }
            },

            ReturnStatement(node) {
                if (isSingleLineNode(node)) {
                    return;
                }

                const firstLineIndent = getNodeIndent(node).goodChar;

                // in case if return statement is wrapped in parenthesis
                if (isWrappedInParenthesis(node)) {
                    checkLastReturnStatementLineIndent(node, firstLineIndent);
                } else {
                    checkNodeIndent(node, firstLineIndent);
                }
            },

            CallExpression(node) {
                if (isSingleLineNode(node)) {
                    return;
                }
                if (options.CallExpression.arguments === "first" && node.arguments.length) {
                    checkNodesIndent(node.arguments.slice(1), node.arguments[0].loc.start.column);
                } else if (options.CallExpression.arguments !== null) {
                    checkNodesIndent(node.arguments, getNodeIndent(node).goodChar + indentSize * options.CallExpression.arguments);
                }
            }

        };

    }
};
