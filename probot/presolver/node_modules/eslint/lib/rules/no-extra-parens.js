/**
 * @fileoverview Disallow parenthesising higher precedence subexpressions.
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils.js");
const esUtils = require("esutils");

module.exports = {
    meta: {
        docs: {
            description: "disallow unnecessary parentheses",
            category: "Possible Errors",
            recommended: false
        },

        fixable: "code",

        schema: {
            anyOf: [
                {
                    type: "array",
                    items: [
                        {
                            enum: ["functions"]
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: "array",
                    items: [
                        {
                            enum: ["all"]
                        },
                        {
                            type: "object",
                            properties: {
                                conditionalAssign: { type: "boolean" },
                                nestedBinaryExpressions: { type: "boolean" },
                                returnAssign: { type: "boolean" },
                                ignoreJSX: { enum: ["none", "all", "single-line", "multi-line"] }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        const tokensToIgnore = new WeakSet();
        const isParenthesised = astUtils.isParenthesised.bind(astUtils, sourceCode);
        const precedence = astUtils.getPrecedence;
        const ALL_NODES = context.options[0] !== "functions";
        const EXCEPT_COND_ASSIGN = ALL_NODES && context.options[1] && context.options[1].conditionalAssign === false;
        const NESTED_BINARY = ALL_NODES && context.options[1] && context.options[1].nestedBinaryExpressions === false;
        const EXCEPT_RETURN_ASSIGN = ALL_NODES && context.options[1] && context.options[1].returnAssign === false;
        const IGNORE_JSX = ALL_NODES && context.options[1] && context.options[1].ignoreJSX;
        const PRECEDENCE_OF_ASSIGNMENT_EXPR = precedence({ type: "AssignmentExpression" });
        const PRECEDENCE_OF_UPDATE_EXPR = precedence({ type: "UpdateExpression" });

        /**
         * Determines if this rule should be enforced for a node given the current configuration.
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the rule should be enforced for this node.
         * @private
         */
        function ruleApplies(node) {
            if (node.type === "JSXElement") {
                const isSingleLine = node.loc.start.line === node.loc.end.line;

                switch (IGNORE_JSX) {

                    // Exclude this JSX element from linting
                    case "all":
                        return false;

                    // Exclude this JSX element if it is multi-line element
                    case "multi-line":
                        return isSingleLine;

                    // Exclude this JSX element if it is single-line element
                    case "single-line":
                        return !isSingleLine;

                    // Nothing special to be done for JSX elements
                    case "none":
                        break;

                    // no default
                }
            }

            return ALL_NODES || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression";
        }

        /**
         * Determines if a node is surrounded by parentheses twice.
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the node is doubly parenthesised.
         * @private
         */
        function isParenthesisedTwice(node) {
            const previousToken = sourceCode.getTokenBefore(node, 1),
                nextToken = sourceCode.getTokenAfter(node, 1);

            return isParenthesised(node) && previousToken && nextToken &&
                astUtils.isOpeningParenToken(previousToken) && previousToken.range[1] <= node.range[0] &&
                astUtils.isClosingParenToken(nextToken) && nextToken.range[0] >= node.range[1];
        }

        /**
         * Determines if a node is surrounded by (potentially) invalid parentheses.
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the node is incorrectly parenthesised.
         * @private
         */
        function hasExcessParens(node) {
            return ruleApplies(node) && isParenthesised(node);
        }

        /**
         * Determines if a node that is expected to be parenthesised is surrounded by
         * (potentially) invalid extra parentheses.
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the node is has an unexpected extra pair of parentheses.
         * @private
         */
        function hasDoubleExcessParens(node) {
            return ruleApplies(node) && isParenthesisedTwice(node);
        }

        /**
         * Determines if a node test expression is allowed to have a parenthesised assignment
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the assignment can be parenthesised.
         * @private
         */
        function isCondAssignException(node) {
            return EXCEPT_COND_ASSIGN && node.test.type === "AssignmentExpression";
        }

        /**
         * Determines if a node is in a return statement
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the node is in a return statement.
         * @private
         */
        function isInReturnStatement(node) {
            while (node) {
                if (node.type === "ReturnStatement" ||
                        (node.type === "ArrowFunctionExpression" && node.body.type !== "BlockStatement")) {
                    return true;
                }
                node = node.parent;
            }

            return false;
        }

        /**
         * Determines if a constructor function is newed-up with parens
         * @param {ASTNode} newExpression - The NewExpression node to be checked.
         * @returns {boolean} True if the constructor is called with parens.
         * @private
         */
        function isNewExpressionWithParens(newExpression) {
            const lastToken = sourceCode.getLastToken(newExpression);
            const penultimateToken = sourceCode.getTokenBefore(lastToken);

            return newExpression.arguments.length > 0 || astUtils.isOpeningParenToken(penultimateToken) && astUtils.isClosingParenToken(lastToken);
        }

        /**
         * Determines if a node is or contains an assignment expression
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the node is or contains an assignment expression.
         * @private
         */
        function containsAssignment(node) {
            if (node.type === "AssignmentExpression") {
                return true;
            } else if (node.type === "ConditionalExpression" &&
                    (node.consequent.type === "AssignmentExpression" || node.alternate.type === "AssignmentExpression")) {
                return true;
            } else if ((node.left && node.left.type === "AssignmentExpression") ||
                    (node.right && node.right.type === "AssignmentExpression")) {
                return true;
            }

            return false;
        }

        /**
         * Determines if a node is contained by or is itself a return statement and is allowed to have a parenthesised assignment
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the assignment can be parenthesised.
         * @private
         */
        function isReturnAssignException(node) {
            if (!EXCEPT_RETURN_ASSIGN || !isInReturnStatement(node)) {
                return false;
            }

            if (node.type === "ReturnStatement") {
                return node.argument && containsAssignment(node.argument);
            } else if (node.type === "ArrowFunctionExpression" && node.body.type !== "BlockStatement") {
                return containsAssignment(node.body);
            }
            return containsAssignment(node);

        }

        /**
         * Determines if a node following a [no LineTerminator here] restriction is
         * surrounded by (potentially) invalid extra parentheses.
         * @param {Token} token - The token preceding the [no LineTerminator here] restriction.
         * @param {ASTNode} node - The node to be checked.
         * @returns {boolean} True if the node is incorrectly parenthesised.
         * @private
         */
        function hasExcessParensNoLineTerminator(token, node) {
            if (token.loc.end.line === node.loc.start.line) {
                return hasExcessParens(node);
            }

            return hasDoubleExcessParens(node);
        }

        /**
         * Determines whether a node should be preceded by an additional space when removing parens
         * @param {ASTNode} node node to evaluate; must be surrounded by parentheses
         * @returns {boolean} `true` if a space should be inserted before the node
         * @private
         */
        function requiresLeadingSpace(node) {
            const leftParenToken = sourceCode.getTokenBefore(node);
            const tokenBeforeLeftParen = sourceCode.getTokenBefore(node, 1);
            const firstToken = sourceCode.getFirstToken(node);

            // If there is already whitespace before the previous token, don't add more.
            if (!tokenBeforeLeftParen || tokenBeforeLeftParen.end !== leftParenToken.start) {
                return false;
            }

            // If the parens are preceded by a keyword (e.g. `typeof(0)`), a space should be inserted (`typeof 0`)
            const precededByIdentiferPart = esUtils.code.isIdentifierPartES6(tokenBeforeLeftParen.value.slice(-1).charCodeAt(0));

            // However, a space should not be inserted unless the first character of the token is an identifier part
            // e.g. `typeof([])` should be fixed to `typeof[]`
            const startsWithIdentifierPart = esUtils.code.isIdentifierPartES6(firstToken.value.charCodeAt(0));

            // If the parens are preceded by and start with a unary plus/minus (e.g. `+(+foo)`), a space should be inserted (`+ +foo`)
            const precededByUnaryPlus = tokenBeforeLeftParen.type === "Punctuator" && tokenBeforeLeftParen.value === "+";
            const precededByUnaryMinus = tokenBeforeLeftParen.type === "Punctuator" && tokenBeforeLeftParen.value === "-";

            const startsWithUnaryPlus = firstToken.type === "Punctuator" && firstToken.value === "+";
            const startsWithUnaryMinus = firstToken.type === "Punctuator" && firstToken.value === "-";

            return (precededByIdentiferPart && startsWithIdentifierPart) ||
                (precededByUnaryPlus && startsWithUnaryPlus) ||
                (precededByUnaryMinus && startsWithUnaryMinus);
        }

        /**
         * Report the node
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function report(node) {
            const leftParenToken = sourceCode.getTokenBefore(node);
            const rightParenToken = sourceCode.getTokenAfter(node);

            if (tokensToIgnore.has(sourceCode.getFirstToken(node)) && !isParenthesisedTwice(node)) {
                return;
            }

            context.report({
                node,
                loc: leftParenToken.loc.start,
                message: "Gratuitous parentheses around expression.",
                fix(fixer) {
                    const parenthesizedSource = sourceCode.text.slice(leftParenToken.range[1], rightParenToken.range[0]);

                    return fixer.replaceTextRange([
                        leftParenToken.range[0],
                        rightParenToken.range[1]
                    ], (requiresLeadingSpace(node) ? " " : "") + parenthesizedSource);
                }
            });
        }

        /**
         * Evaluate Unary update
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkUnaryUpdate(node) {
            if (node.type === "UnaryExpression" && node.argument.type === "BinaryExpression" && node.argument.operator === "**") {
                return;
            }

            if (hasExcessParens(node.argument) && precedence(node.argument) >= precedence(node)) {
                report(node.argument);
            }
        }

        /**
         * Evaluate a new call
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkCallNew(node) {
            if (hasExcessParens(node.callee) && precedence(node.callee) >= precedence(node) && !(
                node.type === "CallExpression" &&
                (node.callee.type === "FunctionExpression" ||
                  node.callee.type === "NewExpression" && !isNewExpressionWithParens(node.callee)) &&

                // One set of parentheses are allowed for a function expression
                !hasDoubleExcessParens(node.callee)
            )) {
                report(node.callee);
            }
            if (node.arguments.length === 1) {
                if (hasDoubleExcessParens(node.arguments[0]) && precedence(node.arguments[0]) >= PRECEDENCE_OF_ASSIGNMENT_EXPR) {
                    report(node.arguments[0]);
                }
            } else {
                [].forEach.call(node.arguments, arg => {
                    if (hasExcessParens(arg) && precedence(arg) >= PRECEDENCE_OF_ASSIGNMENT_EXPR) {
                        report(arg);
                    }
                });
            }
        }

        /**
         * Evaluate binary logicals
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkBinaryLogical(node) {
            const prec = precedence(node);
            const leftPrecedence = precedence(node.left);
            const rightPrecedence = precedence(node.right);
            const isExponentiation = node.operator === "**";
            const shouldSkipLeft = (NESTED_BINARY && (node.left.type === "BinaryExpression" || node.left.type === "LogicalExpression")) ||
              node.left.type === "UnaryExpression" && isExponentiation;
            const shouldSkipRight = NESTED_BINARY && (node.right.type === "BinaryExpression" || node.right.type === "LogicalExpression");

            if (!shouldSkipLeft && hasExcessParens(node.left) && (leftPrecedence > prec || (leftPrecedence === prec && !isExponentiation))) {
                report(node.left);
            }
            if (!shouldSkipRight && hasExcessParens(node.right) && (rightPrecedence > prec || (rightPrecedence === prec && isExponentiation))) {
                report(node.right);
            }
        }

        /**
         * Check the parentheses around the super class of the given class definition.
         * @param {ASTNode} node The node of class declarations to check.
         * @returns {void}
         */
        function checkClass(node) {
            if (!node.superClass) {
                return;
            }

            // If `node.superClass` is a LeftHandSideExpression, parentheses are extra.
            // Otherwise, parentheses are needed.
            const hasExtraParens = precedence(node.superClass) > PRECEDENCE_OF_UPDATE_EXPR
                ? hasExcessParens(node.superClass)
                : hasDoubleExcessParens(node.superClass);

            if (hasExtraParens) {
                report(node.superClass);
            }
        }

        /**
         * Check the parentheses around the argument of the given spread operator.
         * @param {ASTNode} node The node of spread elements/properties to check.
         * @returns {void}
         */
        function checkSpreadOperator(node) {
            const hasExtraParens = precedence(node.argument) >= PRECEDENCE_OF_ASSIGNMENT_EXPR
                ? hasExcessParens(node.argument)
                : hasDoubleExcessParens(node.argument);

            if (hasExtraParens) {
                report(node.argument);
            }
        }

        /**
         * Checks the parentheses for an ExpressionStatement or ExportDefaultDeclaration
         * @param {ASTNode} node The ExpressionStatement.expression or ExportDefaultDeclaration.declaration node
         * @returns {void}
         */
        function checkExpressionOrExportStatement(node) {
            const firstToken = isParenthesised(node) ? sourceCode.getTokenBefore(node) : sourceCode.getFirstToken(node);
            const secondToken = sourceCode.getTokenAfter(firstToken, astUtils.isNotOpeningParenToken);

            if (
                astUtils.isOpeningParenToken(firstToken) &&
                (
                    astUtils.isOpeningBraceToken(secondToken) ||
                    secondToken.type === "Keyword" && (
                        secondToken.value === "function" ||
                        secondToken.value === "class" ||
                        secondToken.value === "let" && astUtils.isOpeningBracketToken(sourceCode.getTokenAfter(secondToken))
                    )
                )
            ) {
                tokensToIgnore.add(secondToken);
            }

            if (hasExcessParens(node)) {
                report(node);
            }
        }

        return {
            ArrayExpression(node) {
                [].forEach.call(node.elements, e => {
                    if (e && hasExcessParens(e) && precedence(e) >= PRECEDENCE_OF_ASSIGNMENT_EXPR) {
                        report(e);
                    }
                });
            },

            ArrowFunctionExpression(node) {
                if (isReturnAssignException(node)) {
                    return;
                }

                if (node.body.type !== "BlockStatement") {
                    const firstBodyToken = sourceCode.getFirstToken(node.body, astUtils.isNotOpeningParenToken);
                    const tokenBeforeFirst = sourceCode.getTokenBefore(firstBodyToken);

                    if (astUtils.isOpeningParenToken(tokenBeforeFirst) && astUtils.isOpeningBraceToken(firstBodyToken)) {
                        tokensToIgnore.add(firstBodyToken);
                    }
                    if (hasExcessParens(node.body) && precedence(node.body) >= PRECEDENCE_OF_ASSIGNMENT_EXPR) {
                        report(node.body);
                    }
                }
            },

            AssignmentExpression(node) {
                if (isReturnAssignException(node)) {
                    return;
                }

                if (hasExcessParens(node.right) && precedence(node.right) >= precedence(node)) {
                    report(node.right);
                }
            },

            BinaryExpression: checkBinaryLogical,
            CallExpression: checkCallNew,

            ConditionalExpression(node) {
                if (isReturnAssignException(node)) {
                    return;
                }

                if (hasExcessParens(node.test) && precedence(node.test) >= precedence({ type: "LogicalExpression", operator: "||" })) {
                    report(node.test);
                }

                if (hasExcessParens(node.consequent) && precedence(node.consequent) >= PRECEDENCE_OF_ASSIGNMENT_EXPR) {
                    report(node.consequent);
                }

                if (hasExcessParens(node.alternate) && precedence(node.alternate) >= PRECEDENCE_OF_ASSIGNMENT_EXPR) {
                    report(node.alternate);
                }
            },

            DoWhileStatement(node) {
                if (hasDoubleExcessParens(node.test) && !isCondAssignException(node)) {
                    report(node.test);
                }
            },

            ExportDefaultDeclaration: node => checkExpressionOrExportStatement(node.declaration),
            ExpressionStatement: node => checkExpressionOrExportStatement(node.expression),

            ForInStatement(node) {
                if (hasExcessParens(node.right)) {
                    report(node.right);
                }
            },

            ForOfStatement(node) {
                if (hasExcessParens(node.right)) {
                    report(node.right);
                }
            },

            ForStatement(node) {
                if (node.init && hasExcessParens(node.init)) {
                    report(node.init);
                }

                if (node.test && hasExcessParens(node.test) && !isCondAssignException(node)) {
                    report(node.test);
                }

                if (node.update && hasExcessParens(node.update)) {
                    report(node.update);
                }
            },

            IfStatement(node) {
                if (hasDoubleExcessParens(node.test) && !isCondAssignException(node)) {
                    report(node.test);
                }
            },

            LogicalExpression: checkBinaryLogical,

            MemberExpression(node) {
                if (
                    hasExcessParens(node.object) &&
                    precedence(node.object) >= precedence(node) &&
                    (
                        node.computed ||
                        !(
                            astUtils.isDecimalInteger(node.object) ||

                            // RegExp literal is allowed to have parens (#1589)
                            (node.object.type === "Literal" && node.object.regex)
                        )
                    )
                ) {
                    report(node.object);
                }
                if (node.computed && hasExcessParens(node.property)) {
                    report(node.property);
                }
            },

            NewExpression: checkCallNew,

            ObjectExpression(node) {
                [].forEach.call(node.properties, e => {
                    const v = e.value;

                    if (v && hasExcessParens(v) && precedence(v) >= PRECEDENCE_OF_ASSIGNMENT_EXPR) {
                        report(v);
                    }
                });
            },

            ReturnStatement(node) {
                const returnToken = sourceCode.getFirstToken(node);

                if (isReturnAssignException(node)) {
                    return;
                }

                if (node.argument &&
                        hasExcessParensNoLineTerminator(returnToken, node.argument) &&

                        // RegExp literal is allowed to have parens (#1589)
                        !(node.argument.type === "Literal" && node.argument.regex)) {
                    report(node.argument);
                }
            },

            SequenceExpression(node) {
                [].forEach.call(node.expressions, e => {
                    if (hasExcessParens(e) && precedence(e) >= precedence(node)) {
                        report(e);
                    }
                });
            },

            SwitchCase(node) {
                if (node.test && hasExcessParens(node.test)) {
                    report(node.test);
                }
            },

            SwitchStatement(node) {
                if (hasDoubleExcessParens(node.discriminant)) {
                    report(node.discriminant);
                }
            },

            ThrowStatement(node) {
                const throwToken = sourceCode.getFirstToken(node);

                if (hasExcessParensNoLineTerminator(throwToken, node.argument)) {
                    report(node.argument);
                }
            },

            UnaryExpression: checkUnaryUpdate,
            UpdateExpression: checkUnaryUpdate,
            AwaitExpression: checkUnaryUpdate,

            VariableDeclarator(node) {
                if (node.init && hasExcessParens(node.init) &&
                        precedence(node.init) >= PRECEDENCE_OF_ASSIGNMENT_EXPR &&

                        // RegExp literal is allowed to have parens (#1589)
                        !(node.init.type === "Literal" && node.init.regex)) {
                    report(node.init);
                }
            },

            WhileStatement(node) {
                if (hasDoubleExcessParens(node.test) && !isCondAssignException(node)) {
                    report(node.test);
                }
            },

            WithStatement(node) {
                if (hasDoubleExcessParens(node.object)) {
                    report(node.object);
                }
            },

            YieldExpression(node) {
                if (node.argument) {
                    const yieldToken = sourceCode.getFirstToken(node);

                    if ((precedence(node.argument) >= precedence(node) &&
                            hasExcessParensNoLineTerminator(yieldToken, node.argument)) ||
                            hasDoubleExcessParens(node.argument)) {
                        report(node.argument);
                    }
                }
            },

            ClassDeclaration: checkClass,
            ClassExpression: checkClass,

            SpreadElement: checkSpreadOperator,
            SpreadProperty: checkSpreadOperator,
            ExperimentalSpreadProperty: checkSpreadOperator
        };

    }
};
