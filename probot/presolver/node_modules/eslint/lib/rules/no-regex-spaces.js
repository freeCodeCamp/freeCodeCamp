/**
 * @fileoverview Rule to count multiple spaces in regular expressions
 * @author Matt DuVall <http://www.mattduvall.com/>
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow multiple spaces in regular expressions",
            category: "Possible Errors",
            recommended: true
        },

        schema: [],

        fixable: "code"
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * Validate regular expressions
         * @param {ASTNode} node node to validate
         * @param {string} value regular expression to validate
         * @param {number} valueStart The start location of the regex/string literal. It will always be the case that
         `sourceCode.getText().slice(valueStart, valueStart + value.length) === value`
         * @returns {void}
         * @private
         */
        function checkRegex(node, value, valueStart) {
            const multipleSpacesRegex = /( {2,})+?/,
                regexResults = multipleSpacesRegex.exec(value);

            if (regexResults !== null) {
                const count = regexResults[0].length;

                context.report({
                    node,
                    message: "Spaces are hard to count. Use {{{count}}}.",
                    data: { count },
                    fix(fixer) {
                        return fixer.replaceTextRange(
                            [valueStart + regexResults.index, valueStart + regexResults.index + count],
                            ` {${count}}`
                        );
                    }
                });

                /*
                 * TODO: (platinumazure) Fix message to use rule message
                 * substitution when api.report is fixed in lib/eslint.js.
                 */
            }
        }

        /**
         * Validate regular expression literals
         * @param {ASTNode} node node to validate
         * @returns {void}
         * @private
         */
        function checkLiteral(node) {
            const token = sourceCode.getFirstToken(node),
                nodeType = token.type,
                nodeValue = token.value;

            if (nodeType === "RegularExpression") {
                checkRegex(node, nodeValue, token.start);
            }
        }

        /**
         * Check if node is a string
         * @param {ASTNode} node node to evaluate
         * @returns {boolean} True if its a string
         * @private
         */
        function isString(node) {
            return node && node.type === "Literal" && typeof node.value === "string";
        }

        /**
         * Validate strings passed to the RegExp constructor
         * @param {ASTNode} node node to validate
         * @returns {void}
         * @private
         */
        function checkFunction(node) {
            const scope = context.getScope();
            const regExpVar = astUtils.getVariableByName(scope, "RegExp");
            const shadowed = regExpVar && regExpVar.defs.length > 0;

            if (node.callee.type === "Identifier" && node.callee.name === "RegExp" && isString(node.arguments[0]) && !shadowed) {
                checkRegex(node, node.arguments[0].value, node.arguments[0].start + 1);
            }
        }

        return {
            Literal: checkLiteral,
            CallExpression: checkFunction,
            NewExpression: checkFunction
        };

    }
};
