/**
 * @fileoverview A rule to disallow the type conversions with shorter notations.
 * @author Toru Nagashima
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const INDEX_OF_PATTERN = /^(?:i|lastI)ndexOf$/u;
const ALLOWABLE_OPERATORS = ["~", "!!", "+", "*"];

/**
 * Parses and normalizes an option object.
 * @param {Object} options An option object to parse.
 * @returns {Object} The parsed and normalized option object.
 */
function parseOptions(options) {
    return {
        boolean: "boolean" in options ? options.boolean : true,
        number: "number" in options ? options.number : true,
        string: "string" in options ? options.string : true,
        disallowTemplateShorthand: "disallowTemplateShorthand" in options ? options.disallowTemplateShorthand : false,
        allow: options.allow || []
    };
}

/**
 * Checks whether or not a node is a double logical nigating.
 * @param {ASTNode} node An UnaryExpression node to check.
 * @returns {boolean} Whether or not the node is a double logical nigating.
 */
function isDoubleLogicalNegating(node) {
    return (
        node.operator === "!" &&
        node.argument.type === "UnaryExpression" &&
        node.argument.operator === "!"
    );
}

/**
 * Checks whether or not a node is a binary negating of `.indexOf()` method calling.
 * @param {ASTNode} node An UnaryExpression node to check.
 * @returns {boolean} Whether or not the node is a binary negating of `.indexOf()` method calling.
 */
function isBinaryNegatingOfIndexOf(node) {
    if (node.operator !== "~") {
        return false;
    }
    const callNode = astUtils.skipChainExpression(node.argument);

    return (
        callNode.type === "CallExpression" &&
        astUtils.isSpecificMemberAccess(callNode.callee, null, INDEX_OF_PATTERN)
    );
}

/**
 * Checks whether or not a node is a multiplying by one.
 * @param {BinaryExpression} node A BinaryExpression node to check.
 * @returns {boolean} Whether or not the node is a multiplying by one.
 */
function isMultiplyByOne(node) {
    return node.operator === "*" && (
        node.left.type === "Literal" && node.left.value === 1 ||
        node.right.type === "Literal" && node.right.value === 1
    );
}

/**
 * Checks whether the result of a node is numeric or not
 * @param {ASTNode} node The node to test
 * @returns {boolean} true if the node is a number literal or a `Number()`, `parseInt` or `parseFloat` call
 */
function isNumeric(node) {
    return (
        node.type === "Literal" && typeof node.value === "number" ||
        node.type === "CallExpression" && (
            node.callee.name === "Number" ||
            node.callee.name === "parseInt" ||
            node.callee.name === "parseFloat"
        )
    );
}

/**
 * Returns the first non-numeric operand in a BinaryExpression. Designed to be
 * used from bottom to up since it walks up the BinaryExpression trees using
 * node.parent to find the result.
 * @param {BinaryExpression} node The BinaryExpression node to be walked up on
 * @returns {ASTNode|null} The first non-numeric item in the BinaryExpression tree or null
 */
function getNonNumericOperand(node) {
    const left = node.left,
        right = node.right;

    if (right.type !== "BinaryExpression" && !isNumeric(right)) {
        return right;
    }

    if (left.type !== "BinaryExpression" && !isNumeric(left)) {
        return left;
    }

    return null;
}

/**
 * Checks whether an expression evaluates to a string.
 * @param {ASTNode} node node that represents the expression to check.
 * @returns {boolean} Whether or not the expression evaluates to a string.
 */
function isStringType(node) {
    return astUtils.isStringLiteral(node) ||
        (
            node.type === "CallExpression" &&
            node.callee.type === "Identifier" &&
            node.callee.name === "String"
        );
}

/**
 * Checks whether a node is an empty string literal or not.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} Whether or not the passed in node is an
 * empty string literal or not.
 */
function isEmptyString(node) {
    return astUtils.isStringLiteral(node) && (node.value === "" || (node.type === "TemplateLiteral" && node.quasis.length === 1 && node.quasis[0].value.cooked === ""));
}

/**
 * Checks whether or not a node is a concatenating with an empty string.
 * @param {ASTNode} node A BinaryExpression node to check.
 * @returns {boolean} Whether or not the node is a concatenating with an empty string.
 */
function isConcatWithEmptyString(node) {
    return node.operator === "+" && (
        (isEmptyString(node.left) && !isStringType(node.right)) ||
        (isEmptyString(node.right) && !isStringType(node.left))
    );
}

/**
 * Checks whether or not a node is appended with an empty string.
 * @param {ASTNode} node An AssignmentExpression node to check.
 * @returns {boolean} Whether or not the node is appended with an empty string.
 */
function isAppendEmptyString(node) {
    return node.operator === "+=" && isEmptyString(node.right);
}

/**
 * Returns the operand that is not an empty string from a flagged BinaryExpression.
 * @param {ASTNode} node The flagged BinaryExpression node to check.
 * @returns {ASTNode} The operand that is not an empty string from a flagged BinaryExpression.
 */
function getNonEmptyOperand(node) {
    return isEmptyString(node.left) ? node.right : node.left;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow shorthand type conversions",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-implicit-coercion"
        },

        fixable: "code",

        schema: [{
            type: "object",
            properties: {
                boolean: {
                    type: "boolean",
                    default: true
                },
                number: {
                    type: "boolean",
                    default: true
                },
                string: {
                    type: "boolean",
                    default: true
                },
                disallowTemplateShorthand: {
                    type: "boolean",
                    default: false
                },
                allow: {
                    type: "array",
                    items: {
                        enum: ALLOWABLE_OPERATORS
                    },
                    uniqueItems: true
                }
            },
            additionalProperties: false
        }],

        messages: {
            useRecommendation: "use `{{recommendation}}` instead."
        }
    },

    create(context) {
        const options = parseOptions(context.options[0] || {});
        const sourceCode = context.getSourceCode();

        /**
         * Reports an error and autofixes the node
         * @param {ASTNode} node An ast node to report the error on.
         * @param {string} recommendation The recommended code for the issue
         * @param {bool} shouldFix Whether this report should fix the node
         * @returns {void}
         */
        function report(node, recommendation, shouldFix) {
            context.report({
                node,
                messageId: "useRecommendation",
                data: {
                    recommendation
                },
                fix(fixer) {
                    if (!shouldFix) {
                        return null;
                    }

                    const tokenBefore = sourceCode.getTokenBefore(node);

                    if (
                        tokenBefore &&
                        tokenBefore.range[1] === node.range[0] &&
                        !astUtils.canTokensBeAdjacent(tokenBefore, recommendation)
                    ) {
                        return fixer.replaceText(node, ` ${recommendation}`);
                    }
                    return fixer.replaceText(node, recommendation);
                }
            });
        }

        return {
            UnaryExpression(node) {
                let operatorAllowed;

                // !!foo
                operatorAllowed = options.allow.indexOf("!!") >= 0;
                if (!operatorAllowed && options.boolean && isDoubleLogicalNegating(node)) {
                    const recommendation = `Boolean(${sourceCode.getText(node.argument.argument)})`;

                    report(node, recommendation, true);
                }

                // ~foo.indexOf(bar)
                operatorAllowed = options.allow.indexOf("~") >= 0;
                if (!operatorAllowed && options.boolean && isBinaryNegatingOfIndexOf(node)) {

                    // `foo?.indexOf(bar) !== -1` will be true (== found) if the `foo` is nullish. So use `>= 0` in that case.
                    const comparison = node.argument.type === "ChainExpression" ? ">= 0" : "!== -1";
                    const recommendation = `${sourceCode.getText(node.argument)} ${comparison}`;

                    report(node, recommendation, false);
                }

                // +foo
                operatorAllowed = options.allow.indexOf("+") >= 0;
                if (!operatorAllowed && options.number && node.operator === "+" && !isNumeric(node.argument)) {
                    const recommendation = `Number(${sourceCode.getText(node.argument)})`;

                    report(node, recommendation, true);
                }
            },

            // Use `:exit` to prevent double reporting
            "BinaryExpression:exit"(node) {
                let operatorAllowed;

                // 1 * foo
                operatorAllowed = options.allow.indexOf("*") >= 0;
                const nonNumericOperand = !operatorAllowed && options.number && isMultiplyByOne(node) && getNonNumericOperand(node);

                if (nonNumericOperand) {
                    const recommendation = `Number(${sourceCode.getText(nonNumericOperand)})`;

                    report(node, recommendation, true);
                }

                // "" + foo
                operatorAllowed = options.allow.indexOf("+") >= 0;
                if (!operatorAllowed && options.string && isConcatWithEmptyString(node)) {
                    const recommendation = `String(${sourceCode.getText(getNonEmptyOperand(node))})`;

                    report(node, recommendation, true);
                }
            },

            AssignmentExpression(node) {

                // foo += ""
                const operatorAllowed = options.allow.indexOf("+") >= 0;

                if (!operatorAllowed && options.string && isAppendEmptyString(node)) {
                    const code = sourceCode.getText(getNonEmptyOperand(node));
                    const recommendation = `${code} = String(${code})`;

                    report(node, recommendation, true);
                }
            },

            TemplateLiteral(node) {
                if (!options.disallowTemplateShorthand) {
                    return;
                }

                // tag`${foo}`
                if (node.parent.type === "TaggedTemplateExpression") {
                    return;
                }

                // `` or `${foo}${bar}`
                if (node.expressions.length !== 1) {
                    return;
                }


                //  `prefix${foo}`
                if (node.quasis[0].value.cooked !== "") {
                    return;
                }

                //  `${foo}postfix`
                if (node.quasis[1].value.cooked !== "") {
                    return;
                }

                // if the expression is already a string, then this isn't a coercion
                if (isStringType(node.expressions[0])) {
                    return;
                }

                const code = sourceCode.getText(node.expressions[0]);
                const recommendation = `String(${code})`;

                report(node, recommendation, true);
            }
        };
    }
};
