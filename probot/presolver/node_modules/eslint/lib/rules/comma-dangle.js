/**
 * @fileoverview Rule to forbid or enforce dangling commas.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const lodash = require("lodash");
const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_OPTIONS = Object.freeze({
    arrays: "never",
    objects: "never",
    imports: "never",
    exports: "never",
    functions: "ignore"
});

/**
 * Checks whether or not a trailing comma is allowed in a given node.
 * If the `lastItem` is `RestElement` or `RestProperty`, it disallows trailing commas.
 *
 * @param {ASTNode} lastItem - The node of the last element in the given node.
 * @returns {boolean} `true` if a trailing comma is allowed.
 */
function isTrailingCommaAllowed(lastItem) {
    return !(
        lastItem.type === "RestElement" ||
        lastItem.type === "RestProperty" ||
        lastItem.type === "ExperimentalRestProperty"
    );
}

/**
 * Normalize option value.
 *
 * @param {string|Object|undefined} optionValue - The 1st option value to normalize.
 * @returns {Object} The normalized option value.
 */
function normalizeOptions(optionValue) {
    if (typeof optionValue === "string") {
        return {
            arrays: optionValue,
            objects: optionValue,
            imports: optionValue,
            exports: optionValue,

            // For backward compatibility, always ignore functions.
            functions: "ignore"
        };
    }
    if (typeof optionValue === "object" && optionValue !== null) {
        return {
            arrays: optionValue.arrays || DEFAULT_OPTIONS.arrays,
            objects: optionValue.objects || DEFAULT_OPTIONS.objects,
            imports: optionValue.imports || DEFAULT_OPTIONS.imports,
            exports: optionValue.exports || DEFAULT_OPTIONS.exports,
            functions: optionValue.functions || DEFAULT_OPTIONS.functions
        };
    }

    return DEFAULT_OPTIONS;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require or disallow trailing commas",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "code",

        schema: [
            {
                defs: {
                    value: {
                        enum: [
                            "always",
                            "always-multiline",
                            "only-multiline",
                            "never"
                        ]
                    },
                    valueWithIgnore: {
                        anyOf: [
                            {
                                $ref: "#/defs/value"
                            },
                            {
                                enum: ["ignore"]
                            }
                        ]
                    }
                },
                anyOf: [
                    {
                        $ref: "#/defs/value"
                    },
                    {
                        type: "object",
                        properties: {
                            arrays: { $refs: "#/defs/valueWithIgnore" },
                            objects: { $refs: "#/defs/valueWithIgnore" },
                            imports: { $refs: "#/defs/valueWithIgnore" },
                            exports: { $refs: "#/defs/valueWithIgnore" },
                            functions: { $refs: "#/defs/valueWithIgnore" }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },

    create(context) {
        const options = normalizeOptions(context.options[0]);
        const sourceCode = context.getSourceCode();
        const UNEXPECTED_MESSAGE = "Unexpected trailing comma.";
        const MISSING_MESSAGE = "Missing trailing comma.";

        /**
         * Gets the last item of the given node.
         * @param {ASTNode} node - The node to get.
         * @returns {ASTNode|null} The last node or null.
         */
        function getLastItem(node) {
            switch (node.type) {
                case "ObjectExpression":
                case "ObjectPattern":
                    return lodash.last(node.properties);
                case "ArrayExpression":
                case "ArrayPattern":
                    return lodash.last(node.elements);
                case "ImportDeclaration":
                case "ExportNamedDeclaration":
                    return lodash.last(node.specifiers);
                case "FunctionDeclaration":
                case "FunctionExpression":
                case "ArrowFunctionExpression":
                    return lodash.last(node.params);
                case "CallExpression":
                case "NewExpression":
                    return lodash.last(node.arguments);
                default:
                    return null;
            }
        }

        /**
         * Gets the trailing comma token of the given node.
         * If the trailing comma does not exist, this returns the token which is
         * the insertion point of the trailing comma token.
         *
         * @param {ASTNode} node - The node to get.
         * @param {ASTNode} lastItem - The last item of the node.
         * @returns {Token} The trailing comma token or the insertion point.
         */
        function getTrailingToken(node, lastItem) {
            switch (node.type) {
                case "ObjectExpression":
                case "ArrayExpression":
                case "CallExpression":
                case "NewExpression":
                    return sourceCode.getLastToken(node, 1);
                default: {
                    const nextToken = sourceCode.getTokenAfter(lastItem);

                    if (astUtils.isCommaToken(nextToken)) {
                        return nextToken;
                    }
                    return sourceCode.getLastToken(lastItem);
                }
            }
        }

        /**
         * Checks whether or not a given node is multiline.
         * This rule handles a given node as multiline when the closing parenthesis
         * and the last element are not on the same line.
         *
         * @param {ASTNode} node - A node to check.
         * @returns {boolean} `true` if the node is multiline.
         */
        function isMultiline(node) {
            const lastItem = getLastItem(node);

            if (!lastItem) {
                return false;
            }

            const penultimateToken = getTrailingToken(node, lastItem);
            const lastToken = sourceCode.getTokenAfter(penultimateToken);

            return lastToken.loc.end.line !== penultimateToken.loc.end.line;
        }

        /**
         * Reports a trailing comma if it exists.
         *
         * @param {ASTNode} node - A node to check. Its type is one of
         *   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
         *   ImportDeclaration, and ExportNamedDeclaration.
         * @returns {void}
         */
        function forbidTrailingComma(node) {
            const lastItem = getLastItem(node);

            if (!lastItem || (node.type === "ImportDeclaration" && lastItem.type !== "ImportSpecifier")) {
                return;
            }

            const trailingToken = getTrailingToken(node, lastItem);

            if (astUtils.isCommaToken(trailingToken)) {
                context.report({
                    node: lastItem,
                    loc: trailingToken.loc.start,
                    message: UNEXPECTED_MESSAGE,
                    fix(fixer) {
                        return fixer.remove(trailingToken);
                    }
                });
            }
        }

        /**
         * Reports the last element of a given node if it does not have a trailing
         * comma.
         *
         * If a given node is `ArrayPattern` which has `RestElement`, the trailing
         * comma is disallowed, so report if it exists.
         *
         * @param {ASTNode} node - A node to check. Its type is one of
         *   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
         *   ImportDeclaration, and ExportNamedDeclaration.
         * @returns {void}
         */
        function forceTrailingComma(node) {
            const lastItem = getLastItem(node);

            if (!lastItem || (node.type === "ImportDeclaration" && lastItem.type !== "ImportSpecifier")) {
                return;
            }
            if (!isTrailingCommaAllowed(lastItem)) {
                forbidTrailingComma(node);
                return;
            }

            const trailingToken = getTrailingToken(node, lastItem);

            if (trailingToken.value !== ",") {
                context.report({
                    node: lastItem,
                    loc: trailingToken.loc.end,
                    message: MISSING_MESSAGE,
                    fix(fixer) {
                        return fixer.insertTextAfter(trailingToken, ",");
                    }
                });
            }
        }

        /**
         * If a given node is multiline, reports the last element of a given node
         * when it does not have a trailing comma.
         * Otherwise, reports a trailing comma if it exists.
         *
         * @param {ASTNode} node - A node to check. Its type is one of
         *   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
         *   ImportDeclaration, and ExportNamedDeclaration.
         * @returns {void}
         */
        function forceTrailingCommaIfMultiline(node) {
            if (isMultiline(node)) {
                forceTrailingComma(node);
            } else {
                forbidTrailingComma(node);
            }
        }

        /**
         * Only if a given node is not multiline, reports the last element of a given node
         * when it does not have a trailing comma.
         * Otherwise, reports a trailing comma if it exists.
         *
         * @param {ASTNode} node - A node to check. Its type is one of
         *   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
         *   ImportDeclaration, and ExportNamedDeclaration.
         * @returns {void}
         */
        function allowTrailingCommaIfMultiline(node) {
            if (!isMultiline(node)) {
                forbidTrailingComma(node);
            }
        }

        const predicate = {
            always: forceTrailingComma,
            "always-multiline": forceTrailingCommaIfMultiline,
            "only-multiline": allowTrailingCommaIfMultiline,
            never: forbidTrailingComma,
            ignore: lodash.noop
        };

        return {
            ObjectExpression: predicate[options.objects],
            ObjectPattern: predicate[options.objects],

            ArrayExpression: predicate[options.arrays],
            ArrayPattern: predicate[options.arrays],

            ImportDeclaration: predicate[options.imports],

            ExportNamedDeclaration: predicate[options.exports],

            FunctionDeclaration: predicate[options.functions],
            FunctionExpression: predicate[options.functions],
            ArrowFunctionExpression: predicate[options.functions],
            CallExpression: predicate[options.functions],
            NewExpression: predicate[options.functions]
        };
    }
};
