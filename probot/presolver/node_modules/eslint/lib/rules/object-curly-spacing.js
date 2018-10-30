/**
 * @fileoverview Disallows or enforces spaces inside of object literals.
 * @author Jamund Ferguson
 */
"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent spacing inside braces",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "whitespace",

        schema: [
            {
                enum: ["always", "never"]
            },
            {
                type: "object",
                properties: {
                    arraysInObjects: {
                        type: "boolean"
                    },
                    objectsInObjects: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const spaced = context.options[0] === "always",
            sourceCode = context.getSourceCode();

        /**
         * Determines whether an option is set, relative to the spacing option.
         * If spaced is "always", then check whether option is set to false.
         * If spaced is "never", then check whether option is set to true.
         * @param {Object} option - The option to exclude.
         * @returns {boolean} Whether or not the property is excluded.
         */
        function isOptionSet(option) {
            return context.options[1] ? context.options[1][option] === !spaced : false;
        }

        const options = {
            spaced,
            arraysInObjectsException: isOptionSet("arraysInObjects"),
            objectsInObjectsException: isOptionSet("objectsInObjects")
        };

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
        * Reports that there shouldn't be a space after the first token
        * @param {ASTNode} node - The node to report in the event of an error.
        * @param {Token} token - The token to use for the report.
        * @returns {void}
        */
        function reportNoBeginningSpace(node, token) {
            context.report({
                node,
                loc: token.loc.start,
                message: "There should be no space after '{{token}}'.",
                data: {
                    token: token.value
                },
                fix(fixer) {
                    const nextToken = context.getSourceCode().getTokenAfter(token);

                    return fixer.removeRange([token.range[1], nextToken.range[0]]);
                }
            });
        }

        /**
        * Reports that there shouldn't be a space before the last token
        * @param {ASTNode} node - The node to report in the event of an error.
        * @param {Token} token - The token to use for the report.
        * @returns {void}
        */
        function reportNoEndingSpace(node, token) {
            context.report({
                node,
                loc: token.loc.start,
                message: "There should be no space before '{{token}}'.",
                data: {
                    token: token.value
                },
                fix(fixer) {
                    const previousToken = context.getSourceCode().getTokenBefore(token);

                    return fixer.removeRange([previousToken.range[1], token.range[0]]);
                }
            });
        }

        /**
        * Reports that there should be a space after the first token
        * @param {ASTNode} node - The node to report in the event of an error.
        * @param {Token} token - The token to use for the report.
        * @returns {void}
        */
        function reportRequiredBeginningSpace(node, token) {
            context.report({
                node,
                loc: token.loc.start,
                message: "A space is required after '{{token}}'.",
                data: {
                    token: token.value
                },
                fix(fixer) {
                    return fixer.insertTextAfter(token, " ");
                }
            });
        }

        /**
        * Reports that there should be a space before the last token
        * @param {ASTNode} node - The node to report in the event of an error.
        * @param {Token} token - The token to use for the report.
        * @returns {void}
        */
        function reportRequiredEndingSpace(node, token) {
            context.report({
                node,
                loc: token.loc.start,
                message: "A space is required before '{{token}}'.",
                data: {
                    token: token.value
                },
                fix(fixer) {
                    return fixer.insertTextBefore(token, " ");
                }
            });
        }

        /**
         * Determines if spacing in curly braces is valid.
         * @param {ASTNode} node The AST node to check.
         * @param {Token} first The first token to check (should be the opening brace)
         * @param {Token} second The second token to check (should be first after the opening brace)
         * @param {Token} penultimate The penultimate token to check (should be last before closing brace)
         * @param {Token} last The last token to check (should be closing brace)
         * @returns {void}
         */
        function validateBraceSpacing(node, first, second, penultimate, last) {
            if (astUtils.isTokenOnSameLine(first, second)) {
                const firstSpaced = sourceCode.isSpaceBetweenTokens(first, second);

                if (options.spaced && !firstSpaced) {
                    reportRequiredBeginningSpace(node, first);
                }
                if (!options.spaced && firstSpaced) {
                    reportNoBeginningSpace(node, first);
                }
            }

            if (astUtils.isTokenOnSameLine(penultimate, last)) {
                const shouldCheckPenultimate = (
                    options.arraysInObjectsException && astUtils.isClosingBracketToken(penultimate) ||
                    options.objectsInObjectsException && astUtils.isClosingBraceToken(penultimate)
                );
                const penultimateType = shouldCheckPenultimate && sourceCode.getNodeByRangeIndex(penultimate.start).type;

                const closingCurlyBraceMustBeSpaced = (
                    options.arraysInObjectsException && penultimateType === "ArrayExpression" ||
                    options.objectsInObjectsException && (penultimateType === "ObjectExpression" || penultimateType === "ObjectPattern")
                ) ? !options.spaced : options.spaced;

                const lastSpaced = sourceCode.isSpaceBetweenTokens(penultimate, last);

                if (closingCurlyBraceMustBeSpaced && !lastSpaced) {
                    reportRequiredEndingSpace(node, last);
                }
                if (!closingCurlyBraceMustBeSpaced && lastSpaced) {
                    reportNoEndingSpace(node, last);
                }
            }
        }

        /**
         * Gets '}' token of an object node.
         *
         * Because the last token of object patterns might be a type annotation,
         * this traverses tokens preceded by the last property, then returns the
         * first '}' token.
         *
         * @param {ASTNode} node - The node to get. This node is an
         *      ObjectExpression or an ObjectPattern. And this node has one or
         *      more properties.
         * @returns {Token} '}' token.
         */
        function getClosingBraceOfObject(node) {
            const lastProperty = node.properties[node.properties.length - 1];

            return sourceCode.getTokenAfter(lastProperty, astUtils.isClosingBraceToken);
        }

        /**
         * Reports a given object node if spacing in curly braces is invalid.
         * @param {ASTNode} node - An ObjectExpression or ObjectPattern node to check.
         * @returns {void}
         */
        function checkForObject(node) {
            if (node.properties.length === 0) {
                return;
            }

            const first = sourceCode.getFirstToken(node),
                last = getClosingBraceOfObject(node),
                second = sourceCode.getTokenAfter(first),
                penultimate = sourceCode.getTokenBefore(last);

            validateBraceSpacing(node, first, second, penultimate, last);
        }

        /**
         * Reports a given import node if spacing in curly braces is invalid.
         * @param {ASTNode} node - An ImportDeclaration node to check.
         * @returns {void}
         */
        function checkForImport(node) {
            if (node.specifiers.length === 0) {
                return;
            }

            let firstSpecifier = node.specifiers[0];
            const lastSpecifier = node.specifiers[node.specifiers.length - 1];

            if (lastSpecifier.type !== "ImportSpecifier") {
                return;
            }
            if (firstSpecifier.type !== "ImportSpecifier") {
                firstSpecifier = node.specifiers[1];
            }

            const first = sourceCode.getTokenBefore(firstSpecifier),
                last = sourceCode.getTokenAfter(lastSpecifier, astUtils.isNotCommaToken),
                second = sourceCode.getTokenAfter(first),
                penultimate = sourceCode.getTokenBefore(last);

            validateBraceSpacing(node, first, second, penultimate, last);
        }

        /**
         * Reports a given export node if spacing in curly braces is invalid.
         * @param {ASTNode} node - An ExportNamedDeclaration node to check.
         * @returns {void}
         */
        function checkForExport(node) {
            if (node.specifiers.length === 0) {
                return;
            }

            const firstSpecifier = node.specifiers[0],
                lastSpecifier = node.specifiers[node.specifiers.length - 1],
                first = sourceCode.getTokenBefore(firstSpecifier),
                last = sourceCode.getTokenAfter(lastSpecifier, astUtils.isNotCommaToken),
                second = sourceCode.getTokenAfter(first),
                penultimate = sourceCode.getTokenBefore(last);

            validateBraceSpacing(node, first, second, penultimate, last);
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            // var {x} = y;
            ObjectPattern: checkForObject,

            // var y = {x: 'y'}
            ObjectExpression: checkForObject,

            // import {y} from 'x';
            ImportDeclaration: checkForImport,

            // export {name} from 'yo';
            ExportNamedDeclaration: checkForExport
        };

    }
};
