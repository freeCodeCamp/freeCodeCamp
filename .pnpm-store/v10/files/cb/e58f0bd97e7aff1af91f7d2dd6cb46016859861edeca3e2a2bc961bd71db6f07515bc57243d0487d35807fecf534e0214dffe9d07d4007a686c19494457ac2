/**
 * @fileoverview Disallow parenthesising higher precedence subexpressions.
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const { isParenthesized: isParenthesizedRaw } = require("eslint-utils");
const astUtils = require("./utils/ast-utils.js");

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "disallow unnecessary parentheses",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-extra-parens"
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
                                ignoreJSX: { enum: ["none", "all", "single-line", "multi-line"] },
                                enforceForArrowConditionals: { type: "boolean" },
                                enforceForSequenceExpressions: { type: "boolean" },
                                enforceForNewInMemberExpressions: { type: "boolean" },
                                enforceForFunctionPrototypeMethods: { type: "boolean" }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },

        messages: {
            unexpected: "Unnecessary parentheses around expression."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        const tokensToIgnore = new WeakSet();
        const precedence = astUtils.getPrecedence;
        const ALL_NODES = context.options[0] !== "functions";
        const EXCEPT_COND_ASSIGN = ALL_NODES && context.options[1] && context.options[1].conditionalAssign === false;
        const NESTED_BINARY = ALL_NODES && context.options[1] && context.options[1].nestedBinaryExpressions === false;
        const EXCEPT_RETURN_ASSIGN = ALL_NODES && context.options[1] && context.options[1].returnAssign === false;
        const IGNORE_JSX = ALL_NODES && context.options[1] && context.options[1].ignoreJSX;
        const IGNORE_ARROW_CONDITIONALS = ALL_NODES && context.options[1] &&
            context.options[1].enforceForArrowConditionals === false;
        const IGNORE_SEQUENCE_EXPRESSIONS = ALL_NODES && context.options[1] &&
            context.options[1].enforceForSequenceExpressions === false;
        const IGNORE_NEW_IN_MEMBER_EXPR = ALL_NODES && context.options[1] &&
            context.options[1].enforceForNewInMemberExpressions === false;
        const IGNORE_FUNCTION_PROTOTYPE_METHODS = ALL_NODES && context.options[1] &&
            context.options[1].enforceForFunctionPrototypeMethods === false;

        const PRECEDENCE_OF_ASSIGNMENT_EXPR = precedence({ type: "AssignmentExpression" });
        const PRECEDENCE_OF_UPDATE_EXPR = precedence({ type: "UpdateExpression" });

        let reportsBuffer;

        /**
         * Determines whether the given node is a `call` or `apply` method call, invoked directly on a `FunctionExpression` node.
         * Example: function(){}.call()
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the node is an immediate `call` or `apply` method call.
         * @private
         */
        function isImmediateFunctionPrototypeMethodCall(node) {
            const callNode = astUtils.skipChainExpression(node);

            if (callNode.type !== "CallExpression") {
                return false;
            }
            const callee = astUtils.skipChainExpression(callNode.callee);

            return (
                callee.type === "MemberExpression" &&
                callee.object.type === "FunctionExpression" &&
                ["call", "apply"].includes(astUtils.getStaticPropertyName(callee))
            );
        }

        /**
         * Determines if this rule should be enforced for a node given the current configuration.
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the rule should be enforced for this node.
         * @private
         */
        function ruleApplies(node) {
            if (node.type === "JSXElement" || node.type === "JSXFragment") {
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

            if (node.type === "SequenceExpression" && IGNORE_SEQUENCE_EXPRESSIONS) {
                return false;
            }

            if (isImmediateFunctionPrototypeMethodCall(node) && IGNORE_FUNCTION_PROTOTYPE_METHODS) {
                return false;
            }

            return ALL_NODES || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression";
        }

        /**
         * Determines if a node is surrounded by parentheses.
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the node is parenthesised.
         * @private
         */
        function isParenthesised(node) {
            return isParenthesizedRaw(1, node, sourceCode);
        }

        /**
         * Determines if a node is surrounded by parentheses twice.
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the node is doubly parenthesised.
         * @private
         */
        function isParenthesisedTwice(node) {
            return isParenthesizedRaw(2, node, sourceCode);
        }

        /**
         * Determines if a node is surrounded by (potentially) invalid parentheses.
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the node is incorrectly parenthesised.
         * @private
         */
        function hasExcessParens(node) {
            return ruleApplies(node) && isParenthesised(node);
        }

        /**
         * Determines if a node that is expected to be parenthesised is surrounded by
         * (potentially) invalid extra parentheses.
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the node is has an unexpected extra pair of parentheses.
         * @private
         */
        function hasDoubleExcessParens(node) {
            return ruleApplies(node) && isParenthesisedTwice(node);
        }

        /**
         * Determines if a node that is expected to be parenthesised is surrounded by
         * (potentially) invalid extra parentheses with considering precedence level of the node.
         * If the preference level of the node is not higher or equal to precedence lower limit, it also checks
         * whether the node is surrounded by parentheses twice or not.
         * @param {ASTNode} node The node to be checked.
         * @param {number} precedenceLowerLimit The lower limit of precedence.
         * @returns {boolean} True if the node is has an unexpected extra pair of parentheses.
         * @private
         */
        function hasExcessParensWithPrecedence(node, precedenceLowerLimit) {
            if (ruleApplies(node) && isParenthesised(node)) {
                if (
                    precedence(node) >= precedenceLowerLimit ||
                    isParenthesisedTwice(node)
                ) {
                    return true;
                }
            }
            return false;
        }

        /**
         * Determines if a node test expression is allowed to have a parenthesised assignment
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the assignment can be parenthesised.
         * @private
         */
        function isCondAssignException(node) {
            return EXCEPT_COND_ASSIGN && node.test.type === "AssignmentExpression";
        }

        /**
         * Determines if a node is in a return statement
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the node is in a return statement.
         * @private
         */
        function isInReturnStatement(node) {
            for (let currentNode = node; currentNode; currentNode = currentNode.parent) {
                if (
                    currentNode.type === "ReturnStatement" ||
                    (currentNode.type === "ArrowFunctionExpression" && currentNode.body.type !== "BlockStatement")
                ) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Determines if a constructor function is newed-up with parens
         * @param {ASTNode} newExpression The NewExpression node to be checked.
         * @returns {boolean} True if the constructor is called with parens.
         * @private
         */
        function isNewExpressionWithParens(newExpression) {
            const lastToken = sourceCode.getLastToken(newExpression);
            const penultimateToken = sourceCode.getTokenBefore(lastToken);

            return newExpression.arguments.length > 0 ||
                (

                    // The expression should end with its own parens, e.g., new new foo() is not a new expression with parens
                    astUtils.isOpeningParenToken(penultimateToken) &&
                    astUtils.isClosingParenToken(lastToken) &&
                    newExpression.callee.range[1] < newExpression.range[1]
                );
        }

        /**
         * Determines if a node is or contains an assignment expression
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the node is or contains an assignment expression.
         * @private
         */
        function containsAssignment(node) {
            if (node.type === "AssignmentExpression") {
                return true;
            }
            if (node.type === "ConditionalExpression" &&
                    (node.consequent.type === "AssignmentExpression" || node.alternate.type === "AssignmentExpression")) {
                return true;
            }
            if ((node.left && node.left.type === "AssignmentExpression") ||
                    (node.right && node.right.type === "AssignmentExpression")) {
                return true;
            }

            return false;
        }

        /**
         * Determines if a node is contained by or is itself a return statement and is allowed to have a parenthesised assignment
         * @param {ASTNode} node The node to be checked.
         * @returns {boolean} True if the assignment can be parenthesised.
         * @private
         */
        function isReturnAssignException(node) {
            if (!EXCEPT_RETURN_ASSIGN || !isInReturnStatement(node)) {
                return false;
            }

            if (node.type === "ReturnStatement") {
                return node.argument && containsAssignment(node.argument);
            }
            if (node.type === "ArrowFunctionExpression" && node.body.type !== "BlockStatement") {
                return containsAssignment(node.body);
            }
            return containsAssignment(node);

        }

        /**
         * Determines if a node following a [no LineTerminator here] restriction is
         * surrounded by (potentially) invalid extra parentheses.
         * @param {Token} token The token preceding the [no LineTerminator here] restriction.
         * @param {ASTNode} node The node to be checked.
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
            const tokenBeforeLeftParen = sourceCode.getTokenBefore(leftParenToken, { includeComments: true });
            const tokenAfterLeftParen = sourceCode.getTokenAfter(leftParenToken, { includeComments: true });

            return tokenBeforeLeftParen &&
                tokenBeforeLeftParen.range[1] === leftParenToken.range[0] &&
                leftParenToken.range[1] === tokenAfterLeftParen.range[0] &&
                !astUtils.canTokensBeAdjacent(tokenBeforeLeftParen, tokenAfterLeftParen);
        }

        /**
         * Determines whether a node should be followed by an additional space when removing parens
         * @param {ASTNode} node node to evaluate; must be surrounded by parentheses
         * @returns {boolean} `true` if a space should be inserted after the node
         * @private
         */
        function requiresTrailingSpace(node) {
            const nextTwoTokens = sourceCode.getTokensAfter(node, { count: 2 });
            const rightParenToken = nextTwoTokens[0];
            const tokenAfterRightParen = nextTwoTokens[1];
            const tokenBeforeRightParen = sourceCode.getLastToken(node);

            return rightParenToken && tokenAfterRightParen &&
                !sourceCode.isSpaceBetweenTokens(rightParenToken, tokenAfterRightParen) &&
                !astUtils.canTokensBeAdjacent(tokenBeforeRightParen, tokenAfterRightParen);
        }

        /**
         * Determines if a given expression node is an IIFE
         * @param {ASTNode} node The node to check
         * @returns {boolean} `true` if the given node is an IIFE
         */
        function isIIFE(node) {
            const maybeCallNode = astUtils.skipChainExpression(node);

            return maybeCallNode.type === "CallExpression" && maybeCallNode.callee.type === "FunctionExpression";
        }

        /**
         * Determines if the given node can be the assignment target in destructuring or the LHS of an assignment.
         * This is to avoid an autofix that could change behavior because parsers mistakenly allow invalid syntax,
         * such as `(a = b) = c` and `[(a = b) = c] = []`. Ideally, this function shouldn't be necessary.
         * @param {ASTNode} [node] The node to check
         * @returns {boolean} `true` if the given node can be a valid assignment target
         */
        function canBeAssignmentTarget(node) {
            return node && (node.type === "Identifier" || node.type === "MemberExpression");
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

            if (!isParenthesisedTwice(node)) {
                if (tokensToIgnore.has(sourceCode.getFirstToken(node))) {
                    return;
                }

                if (isIIFE(node) && !isParenthesised(node.callee)) {
                    return;
                }
            }

            /**
             * Finishes reporting
             * @returns {void}
             * @private
             */
            function finishReport() {
                context.report({
                    node,
                    loc: leftParenToken.loc,
                    messageId: "unexpected",
                    fix(fixer) {
                        const parenthesizedSource = sourceCode.text.slice(leftParenToken.range[1], rightParenToken.range[0]);

                        return fixer.replaceTextRange([
                            leftParenToken.range[0],
                            rightParenToken.range[1]
                        ], (requiresLeadingSpace(node) ? " " : "") + parenthesizedSource + (requiresTrailingSpace(node) ? " " : ""));
                    }
                });
            }

            if (reportsBuffer) {
                reportsBuffer.reports.push({ node, finishReport });
                return;
            }

            finishReport();
        }

        /**
         * Evaluate a argument of the node.
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkArgumentWithPrecedence(node) {
            if (hasExcessParensWithPrecedence(node.argument, precedence(node))) {
                report(node.argument);
            }
        }

        /**
         * Check if a member expression contains a call expression
         * @param {ASTNode} node MemberExpression node to evaluate
         * @returns {boolean} true if found, false if not
         */
        function doesMemberExpressionContainCallExpression(node) {
            let currentNode = node.object;
            let currentNodeType = node.object.type;

            while (currentNodeType === "MemberExpression") {
                currentNode = currentNode.object;
                currentNodeType = currentNode.type;
            }

            return currentNodeType === "CallExpression";
        }

        /**
         * Evaluate a new call
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkCallNew(node) {
            const callee = node.callee;

            if (hasExcessParensWithPrecedence(callee, precedence(node))) {
                if (
                    hasDoubleExcessParens(callee) ||
                    !(
                        isIIFE(node) ||

                        // (new A)(); new (new A)();
                        (
                            callee.type === "NewExpression" &&
                            !isNewExpressionWithParens(callee) &&
                            !(
                                node.type === "NewExpression" &&
                                !isNewExpressionWithParens(node)
                            )
                        ) ||

                        // new (a().b)(); new (a.b().c);
                        (
                            node.type === "NewExpression" &&
                            callee.type === "MemberExpression" &&
                            doesMemberExpressionContainCallExpression(callee)
                        ) ||

                        // (a?.b)(); (a?.())();
                        (
                            !node.optional &&
                            callee.type === "ChainExpression"
                        )
                    )
                ) {
                    report(node.callee);
                }
            }
            node.arguments
                .filter(arg => hasExcessParensWithPrecedence(arg, PRECEDENCE_OF_ASSIGNMENT_EXPR))
                .forEach(report);
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
            const shouldSkipLeft = NESTED_BINARY && (node.left.type === "BinaryExpression" || node.left.type === "LogicalExpression");
            const shouldSkipRight = NESTED_BINARY && (node.right.type === "BinaryExpression" || node.right.type === "LogicalExpression");

            if (!shouldSkipLeft && hasExcessParens(node.left)) {
                if (
                    !(["AwaitExpression", "UnaryExpression"].includes(node.left.type) && isExponentiation) &&
                    !astUtils.isMixedLogicalAndCoalesceExpressions(node.left, node) &&
                    (leftPrecedence > prec || (leftPrecedence === prec && !isExponentiation)) ||
                    isParenthesisedTwice(node.left)
                ) {
                    report(node.left);
                }
            }

            if (!shouldSkipRight && hasExcessParens(node.right)) {
                if (
                    !astUtils.isMixedLogicalAndCoalesceExpressions(node.right, node) &&
                    (rightPrecedence > prec || (rightPrecedence === prec && isExponentiation)) ||
                    isParenthesisedTwice(node.right)
                ) {
                    report(node.right);
                }
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

            /*
             * If `node.superClass` is a LeftHandSideExpression, parentheses are extra.
             * Otherwise, parentheses are needed.
             */
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
            if (hasExcessParensWithPrecedence(node.argument, PRECEDENCE_OF_ASSIGNMENT_EXPR)) {
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
            const thirdToken = secondToken ? sourceCode.getTokenAfter(secondToken) : null;
            const tokenAfterClosingParens = secondToken ? sourceCode.getTokenAfter(secondToken, astUtils.isNotClosingParenToken) : null;

            if (
                astUtils.isOpeningParenToken(firstToken) &&
                (
                    astUtils.isOpeningBraceToken(secondToken) ||
                    secondToken.type === "Keyword" && (
                        secondToken.value === "function" ||
                        secondToken.value === "class" ||
                        secondToken.value === "let" &&
                            tokenAfterClosingParens &&
                            (
                                astUtils.isOpeningBracketToken(tokenAfterClosingParens) ||
                                tokenAfterClosingParens.type === "Identifier"
                            )
                    ) ||
                    secondToken && secondToken.type === "Identifier" && secondToken.value === "async" && thirdToken && thirdToken.type === "Keyword" && thirdToken.value === "function"
                )
            ) {
                tokensToIgnore.add(secondToken);
            }

            const hasExtraParens = node.parent.type === "ExportDefaultDeclaration"
                ? hasExcessParensWithPrecedence(node, PRECEDENCE_OF_ASSIGNMENT_EXPR)
                : hasExcessParens(node);

            if (hasExtraParens) {
                report(node);
            }
        }

        /**
         * Finds the path from the given node to the specified ancestor.
         * @param {ASTNode} node First node in the path.
         * @param {ASTNode} ancestor Last node in the path.
         * @returns {ASTNode[]} Path, including both nodes.
         * @throws {Error} If the given node does not have the specified ancestor.
         */
        function pathToAncestor(node, ancestor) {
            const path = [node];
            let currentNode = node;

            while (currentNode !== ancestor) {

                currentNode = currentNode.parent;

                /* istanbul ignore if */
                if (currentNode === null) {
                    throw new Error("Nodes are not in the ancestor-descendant relationship.");
                }

                path.push(currentNode);
            }

            return path;
        }

        /**
         * Finds the path from the given node to the specified descendant.
         * @param {ASTNode} node First node in the path.
         * @param {ASTNode} descendant Last node in the path.
         * @returns {ASTNode[]} Path, including both nodes.
         * @throws {Error} If the given node does not have the specified descendant.
         */
        function pathToDescendant(node, descendant) {
            return pathToAncestor(descendant, node).reverse();
        }

        /**
         * Checks whether the syntax of the given ancestor of an 'in' expression inside a for-loop initializer
         * is preventing the 'in' keyword from being interpreted as a part of an ill-formed for-in loop.
         * @param {ASTNode} node Ancestor of an 'in' expression.
         * @param {ASTNode} child Child of the node, ancestor of the same 'in' expression or the 'in' expression itself.
         * @returns {boolean} True if the keyword 'in' would be interpreted as the 'in' operator, without any parenthesis.
         */
        function isSafelyEnclosingInExpression(node, child) {
            switch (node.type) {
                case "ArrayExpression":
                case "ArrayPattern":
                case "BlockStatement":
                case "ObjectExpression":
                case "ObjectPattern":
                case "TemplateLiteral":
                    return true;
                case "ArrowFunctionExpression":
                case "FunctionExpression":
                    return node.params.includes(child);
                case "CallExpression":
                case "NewExpression":
                    return node.arguments.includes(child);
                case "MemberExpression":
                    return node.computed && node.property === child;
                case "ConditionalExpression":
                    return node.consequent === child;
                default:
                    return false;
            }
        }

        /**
         * Starts a new reports buffering. Warnings will be stored in a buffer instead of being reported immediately.
         * An additional logic that requires multiple nodes (e.g. a whole subtree) may dismiss some of the stored warnings.
         * @returns {void}
         */
        function startNewReportsBuffering() {
            reportsBuffer = {
                upper: reportsBuffer,
                inExpressionNodes: [],
                reports: []
            };
        }

        /**
         * Ends the current reports buffering.
         * @returns {void}
         */
        function endCurrentReportsBuffering() {
            const { upper, inExpressionNodes, reports } = reportsBuffer;

            if (upper) {
                upper.inExpressionNodes.push(...inExpressionNodes);
                upper.reports.push(...reports);
            } else {

                // flush remaining reports
                reports.forEach(({ finishReport }) => finishReport());
            }

            reportsBuffer = upper;
        }

        /**
         * Checks whether the given node is in the current reports buffer.
         * @param {ASTNode} node Node to check.
         * @returns {boolean} True if the node is in the current buffer, false otherwise.
         */
        function isInCurrentReportsBuffer(node) {
            return reportsBuffer.reports.some(r => r.node === node);
        }

        /**
         * Removes the given node from the current reports buffer.
         * @param {ASTNode} node Node to remove.
         * @returns {void}
         */
        function removeFromCurrentReportsBuffer(node) {
            reportsBuffer.reports = reportsBuffer.reports.filter(r => r.node !== node);
        }

        /**
         * Checks whether a node is a MemberExpression at NewExpression's callee.
         * @param {ASTNode} node node to check.
         * @returns {boolean} True if the node is a MemberExpression at NewExpression's callee. false otherwise.
         */
        function isMemberExpInNewCallee(node) {
            if (node.type === "MemberExpression") {
                return node.parent.type === "NewExpression" && node.parent.callee === node
                    ? true
                    : node.parent.object === node && isMemberExpInNewCallee(node.parent);
            }
            return false;
        }

        return {
            ArrayExpression(node) {
                node.elements
                    .filter(e => e && hasExcessParensWithPrecedence(e, PRECEDENCE_OF_ASSIGNMENT_EXPR))
                    .forEach(report);
            },

            ArrayPattern(node) {
                node.elements
                    .filter(e => canBeAssignmentTarget(e) && hasExcessParens(e))
                    .forEach(report);
            },

            ArrowFunctionExpression(node) {
                if (isReturnAssignException(node)) {
                    return;
                }

                if (node.body.type === "ConditionalExpression" &&
                    IGNORE_ARROW_CONDITIONALS
                ) {
                    return;
                }

                if (node.body.type !== "BlockStatement") {
                    const firstBodyToken = sourceCode.getFirstToken(node.body, astUtils.isNotOpeningParenToken);
                    const tokenBeforeFirst = sourceCode.getTokenBefore(firstBodyToken);

                    if (astUtils.isOpeningParenToken(tokenBeforeFirst) && astUtils.isOpeningBraceToken(firstBodyToken)) {
                        tokensToIgnore.add(firstBodyToken);
                    }
                    if (hasExcessParensWithPrecedence(node.body, PRECEDENCE_OF_ASSIGNMENT_EXPR)) {
                        report(node.body);
                    }
                }
            },

            AssignmentExpression(node) {
                if (canBeAssignmentTarget(node.left) && hasExcessParens(node.left)) {
                    report(node.left);
                }

                if (!isReturnAssignException(node) && hasExcessParensWithPrecedence(node.right, precedence(node))) {
                    report(node.right);
                }
            },

            BinaryExpression(node) {
                if (reportsBuffer && node.operator === "in") {
                    reportsBuffer.inExpressionNodes.push(node);
                }

                checkBinaryLogical(node);
            },

            CallExpression: checkCallNew,

            ClassBody(node) {
                node.body
                    .filter(member => member.type === "MethodDefinition" && member.computed && member.key)
                    .filter(member => hasExcessParensWithPrecedence(member.key, PRECEDENCE_OF_ASSIGNMENT_EXPR))
                    .forEach(member => report(member.key));
            },

            ConditionalExpression(node) {
                if (isReturnAssignException(node)) {
                    return;
                }
                if (
                    !isCondAssignException(node) &&
                    hasExcessParensWithPrecedence(node.test, precedence({ type: "LogicalExpression", operator: "||" }))
                ) {
                    report(node.test);
                }

                if (hasExcessParensWithPrecedence(node.consequent, PRECEDENCE_OF_ASSIGNMENT_EXPR)) {
                    report(node.consequent);
                }

                if (hasExcessParensWithPrecedence(node.alternate, PRECEDENCE_OF_ASSIGNMENT_EXPR)) {
                    report(node.alternate);
                }
            },

            DoWhileStatement(node) {
                if (hasExcessParens(node.test) && !isCondAssignException(node)) {
                    report(node.test);
                }
            },

            ExportDefaultDeclaration: node => checkExpressionOrExportStatement(node.declaration),
            ExpressionStatement: node => checkExpressionOrExportStatement(node.expression),

            ForInStatement(node) {
                if (node.left.type !== "VariableDeclaration") {
                    const firstLeftToken = sourceCode.getFirstToken(node.left, astUtils.isNotOpeningParenToken);

                    if (
                        firstLeftToken.value === "let" &&
                        astUtils.isOpeningBracketToken(
                            sourceCode.getTokenAfter(firstLeftToken, astUtils.isNotClosingParenToken)
                        )
                    ) {

                        // ForInStatement#left expression cannot start with `let[`.
                        tokensToIgnore.add(firstLeftToken);
                    }
                }

                if (hasExcessParens(node.left)) {
                    report(node.left);
                }

                if (hasExcessParens(node.right)) {
                    report(node.right);
                }
            },

            ForOfStatement(node) {
                if (node.left.type !== "VariableDeclaration") {
                    const firstLeftToken = sourceCode.getFirstToken(node.left, astUtils.isNotOpeningParenToken);

                    if (firstLeftToken.value === "let") {

                        // ForOfStatement#left expression cannot start with `let`.
                        tokensToIgnore.add(firstLeftToken);
                    }
                }

                if (hasExcessParens(node.left)) {
                    report(node.left);
                }

                if (hasExcessParensWithPrecedence(node.right, PRECEDENCE_OF_ASSIGNMENT_EXPR)) {
                    report(node.right);
                }
            },

            ForStatement(node) {
                if (node.test && hasExcessParens(node.test) && !isCondAssignException(node)) {
                    report(node.test);
                }

                if (node.update && hasExcessParens(node.update)) {
                    report(node.update);
                }

                if (node.init) {

                    if (node.init.type !== "VariableDeclaration") {
                        const firstToken = sourceCode.getFirstToken(node.init, astUtils.isNotOpeningParenToken);

                        if (
                            firstToken.value === "let" &&
                            astUtils.isOpeningBracketToken(
                                sourceCode.getTokenAfter(firstToken, astUtils.isNotClosingParenToken)
                            )
                        ) {

                            // ForStatement#init expression cannot start with `let[`.
                            tokensToIgnore.add(firstToken);
                        }
                    }

                    startNewReportsBuffering();

                    if (hasExcessParens(node.init)) {
                        report(node.init);
                    }
                }
            },

            "ForStatement > *.init:exit"(node) {

                /*
                 * Removing parentheses around `in` expressions might change semantics and cause errors.
                 *
                 * For example, this valid for loop:
                 *      for (let a = (b in c); ;);
                 * after removing parentheses would be treated as an invalid for-in loop:
                 *      for (let a = b in c; ;);
                 */

                if (reportsBuffer.reports.length) {
                    reportsBuffer.inExpressionNodes.forEach(inExpressionNode => {
                        const path = pathToDescendant(node, inExpressionNode);
                        let nodeToExclude;

                        for (let i = 0; i < path.length; i++) {
                            const pathNode = path[i];

                            if (i < path.length - 1) {
                                const nextPathNode = path[i + 1];

                                if (isSafelyEnclosingInExpression(pathNode, nextPathNode)) {

                                    // The 'in' expression in safely enclosed by the syntax of its ancestor nodes (e.g. by '{}' or '[]').
                                    return;
                                }
                            }

                            if (isParenthesised(pathNode)) {
                                if (isInCurrentReportsBuffer(pathNode)) {

                                    // This node was supposed to be reported, but parentheses might be necessary.

                                    if (isParenthesisedTwice(pathNode)) {

                                        /*
                                         * This node is parenthesised twice, it certainly has at least one pair of `extra` parentheses.
                                         * If the --fix option is on, the current fixing iteration will remove only one pair of parentheses.
                                         * The remaining pair is safely enclosing the 'in' expression.
                                         */
                                        return;
                                    }

                                    // Exclude the outermost node only.
                                    if (!nodeToExclude) {
                                        nodeToExclude = pathNode;
                                    }

                                    // Don't break the loop here, there might be some safe nodes or parentheses that will stay inside.

                                } else {

                                    // This node will stay parenthesised, the 'in' expression in safely enclosed by '()'.
                                    return;
                                }
                            }
                        }

                        // Exclude the node from the list (i.e. treat parentheses as necessary)
                        removeFromCurrentReportsBuffer(nodeToExclude);
                    });
                }

                endCurrentReportsBuffering();
            },

            IfStatement(node) {
                if (hasExcessParens(node.test) && !isCondAssignException(node)) {
                    report(node.test);
                }
            },

            ImportExpression(node) {
                const { source } = node;

                if (source.type === "SequenceExpression") {
                    if (hasDoubleExcessParens(source)) {
                        report(source);
                    }
                } else if (hasExcessParens(source)) {
                    report(source);
                }
            },

            LogicalExpression: checkBinaryLogical,

            MemberExpression(node) {
                const shouldAllowWrapOnce = isMemberExpInNewCallee(node) &&
                  doesMemberExpressionContainCallExpression(node);
                const nodeObjHasExcessParens = shouldAllowWrapOnce
                    ? hasDoubleExcessParens(node.object)
                    : hasExcessParens(node.object) &&
                    !(
                        isImmediateFunctionPrototypeMethodCall(node.parent) &&
                        node.parent.callee === node &&
                        IGNORE_FUNCTION_PROTOTYPE_METHODS
                    );

                if (
                    nodeObjHasExcessParens &&
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

                if (nodeObjHasExcessParens &&
                  node.object.type === "CallExpression"
                ) {
                    report(node.object);
                }

                if (nodeObjHasExcessParens &&
                  !IGNORE_NEW_IN_MEMBER_EXPR &&
                  node.object.type === "NewExpression" &&
                  isNewExpressionWithParens(node.object)) {
                    report(node.object);
                }

                if (nodeObjHasExcessParens &&
                    node.optional &&
                    node.object.type === "ChainExpression"
                ) {
                    report(node.object);
                }

                if (node.computed && hasExcessParens(node.property)) {
                    report(node.property);
                }
            },

            NewExpression: checkCallNew,

            ObjectExpression(node) {
                node.properties
                    .filter(property => property.value && hasExcessParensWithPrecedence(property.value, PRECEDENCE_OF_ASSIGNMENT_EXPR))
                    .forEach(property => report(property.value));
            },

            ObjectPattern(node) {
                node.properties
                    .filter(property => {
                        const value = property.value;

                        return canBeAssignmentTarget(value) && hasExcessParens(value);
                    }).forEach(property => report(property.value));
            },

            Property(node) {
                if (node.computed) {
                    const { key } = node;

                    if (key && hasExcessParensWithPrecedence(key, PRECEDENCE_OF_ASSIGNMENT_EXPR)) {
                        report(key);
                    }
                }
            },

            RestElement(node) {
                const argument = node.argument;

                if (canBeAssignmentTarget(argument) && hasExcessParens(argument)) {
                    report(argument);
                }
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
                const precedenceOfNode = precedence(node);

                node.expressions
                    .filter(e => hasExcessParensWithPrecedence(e, precedenceOfNode))
                    .forEach(report);
            },

            SwitchCase(node) {
                if (node.test && hasExcessParens(node.test)) {
                    report(node.test);
                }
            },

            SwitchStatement(node) {
                if (hasExcessParens(node.discriminant)) {
                    report(node.discriminant);
                }
            },

            ThrowStatement(node) {
                const throwToken = sourceCode.getFirstToken(node);

                if (hasExcessParensNoLineTerminator(throwToken, node.argument)) {
                    report(node.argument);
                }
            },

            UnaryExpression: checkArgumentWithPrecedence,
            UpdateExpression(node) {
                if (node.prefix) {
                    checkArgumentWithPrecedence(node);
                } else {
                    const { argument } = node;
                    const operatorToken = sourceCode.getLastToken(node);

                    if (argument.loc.end.line === operatorToken.loc.start.line) {
                        checkArgumentWithPrecedence(node);
                    } else {
                        if (hasDoubleExcessParens(argument)) {
                            report(argument);
                        }
                    }
                }
            },
            AwaitExpression: checkArgumentWithPrecedence,

            VariableDeclarator(node) {
                if (
                    node.init && hasExcessParensWithPrecedence(node.init, PRECEDENCE_OF_ASSIGNMENT_EXPR) &&

                    // RegExp literal is allowed to have parens (#1589)
                    !(node.init.type === "Literal" && node.init.regex)
                ) {
                    report(node.init);
                }
            },

            WhileStatement(node) {
                if (hasExcessParens(node.test) && !isCondAssignException(node)) {
                    report(node.test);
                }
            },

            WithStatement(node) {
                if (hasExcessParens(node.object)) {
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
            ExperimentalSpreadProperty: checkSpreadOperator,

            TemplateLiteral(node) {
                node.expressions
                    .filter(e => e && hasExcessParens(e))
                    .forEach(report);
            },

            AssignmentPattern(node) {
                const { left, right } = node;

                if (canBeAssignmentTarget(left) && hasExcessParens(left)) {
                    report(left);
                }

                if (right && hasExcessParensWithPrecedence(right, PRECEDENCE_OF_ASSIGNMENT_EXPR)) {
                    report(right);
                }
            }
        };

    }
};
