/**
 * @fileoverview Rule to flag non-quoted property names in object literals.
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const espree = require("espree"),
    keywords = require("../util/keywords");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require quotes around object literal property names",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: {
            anyOf: [
                {
                    type: "array",
                    items: [
                        {
                            enum: ["always", "as-needed", "consistent", "consistent-as-needed"]
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: "array",
                    items: [
                        {
                            enum: ["always", "as-needed", "consistent", "consistent-as-needed"]
                        },
                        {
                            type: "object",
                            properties: {
                                keywords: {
                                    type: "boolean"
                                },
                                unnecessary: {
                                    type: "boolean"
                                },
                                numbers: {
                                    type: "boolean"
                                }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },

        fixable: "code"
    },

    create(context) {

        const MODE = context.options[0],
            KEYWORDS = context.options[1] && context.options[1].keywords,
            CHECK_UNNECESSARY = !context.options[1] || context.options[1].unnecessary !== false,
            NUMBERS = context.options[1] && context.options[1].numbers,

            MESSAGE_UNNECESSARY = "Unnecessarily quoted property '{{property}}' found.",
            MESSAGE_UNQUOTED = "Unquoted property '{{property}}' found.",
            MESSAGE_NUMERIC = "Unquoted number literal '{{property}}' used as key.",
            MESSAGE_RESERVED = "Unquoted reserved word '{{property}}' used as key.",
            sourceCode = context.getSourceCode();


        /**
         * Checks whether a certain string constitutes an ES3 token
         * @param   {string} tokenStr - The string to be checked.
         * @returns {boolean} `true` if it is an ES3 token.
         */
        function isKeyword(tokenStr) {
            return keywords.indexOf(tokenStr) >= 0;
        }

        /**
         * Checks if an espree-tokenized key has redundant quotes (i.e. whether quotes are unnecessary)
         * @param   {string} rawKey The raw key value from the source
         * @param   {espreeTokens} tokens The espree-tokenized node key
         * @param   {boolean} [skipNumberLiterals=false] Indicates whether number literals should be checked
         * @returns {boolean} Whether or not a key has redundant quotes.
         * @private
         */
        function areQuotesRedundant(rawKey, tokens, skipNumberLiterals) {
            return tokens.length === 1 && tokens[0].start === 0 && tokens[0].end === rawKey.length &&
                (["Identifier", "Keyword", "Null", "Boolean"].indexOf(tokens[0].type) >= 0 ||
                (tokens[0].type === "Numeric" && !skipNumberLiterals && String(+tokens[0].value) === tokens[0].value));
        }

        /**
        * Returns a string representation of a property node with quotes removed
        * @param {ASTNode} key Key AST Node, which may or may not be quoted
        * @returns {string} A replacement string for this property
        */
        function getUnquotedKey(key) {
            return key.type === "Identifier" ? key.name : key.value;
        }

        /**
        * Returns a string representation of a property node with quotes added
        * @param {ASTNode} key Key AST Node, which may or may not be quoted
        * @returns {string} A replacement string for this property
        */
        function getQuotedKey(key) {
            if (key.type === "Literal" && typeof key.value === "string") {

                // If the key is already a string literal, don't replace the quotes with double quotes.
                return sourceCode.getText(key);
            }

            // Otherwise, the key is either an identifier or a number literal.
            return `"${key.type === "Identifier" ? key.name : key.value}"`;
        }

        /**
         * Ensures that a property's key is quoted only when necessary
         * @param   {ASTNode} node Property AST node
         * @returns {void}
         */
        function checkUnnecessaryQuotes(node) {
            const key = node.key;
            let tokens;

            if (node.method || node.computed || node.shorthand) {
                return;
            }

            if (key.type === "Literal" && typeof key.value === "string") {
                try {
                    tokens = espree.tokenize(key.value);
                } catch (e) {
                    return;
                }

                if (tokens.length !== 1) {
                    return;
                }

                const isKeywordToken = isKeyword(tokens[0].value);

                if (isKeywordToken && KEYWORDS) {
                    return;
                }

                if (CHECK_UNNECESSARY && areQuotesRedundant(key.value, tokens, NUMBERS)) {
                    context.report({
                        node,
                        message: MESSAGE_UNNECESSARY,
                        data: { property: key.value },
                        fix: fixer => fixer.replaceText(key, getUnquotedKey(key))
                    });
                }
            } else if (KEYWORDS && key.type === "Identifier" && isKeyword(key.name)) {
                context.report({
                    node,
                    message: MESSAGE_RESERVED,
                    data: { property: key.name },
                    fix: fixer => fixer.replaceText(key, getQuotedKey(key))
                });
            } else if (NUMBERS && key.type === "Literal" && typeof key.value === "number") {
                context.report({
                    node,
                    message: MESSAGE_NUMERIC,
                    data: { property: key.value },
                    fix: fixer => fixer.replaceText(key, getQuotedKey(key))
                });
            }
        }

        /**
         * Ensures that a property's key is quoted
         * @param   {ASTNode} node Property AST node
         * @returns {void}
         */
        function checkOmittedQuotes(node) {
            const key = node.key;

            if (!node.method && !node.computed && !node.shorthand && !(key.type === "Literal" && typeof key.value === "string")) {
                context.report({
                    node,
                    message: MESSAGE_UNQUOTED,
                    data: { property: key.name || key.value },
                    fix: fixer => fixer.replaceText(key, getQuotedKey(key))
                });
            }
        }

        /**
         * Ensures that an object's keys are consistently quoted, optionally checks for redundancy of quotes
         * @param   {ASTNode} node Property AST node
         * @param   {boolean} checkQuotesRedundancy Whether to check quotes' redundancy
         * @returns {void}
         */
        function checkConsistency(node, checkQuotesRedundancy) {
            const quotedProps = [],
                unquotedProps = [];
            let keywordKeyName = null,
                necessaryQuotes = false;

            node.properties.forEach(property => {
                const key = property.key;
                let tokens;

                if (!key || property.method || property.computed || property.shorthand) {
                    return;
                }

                if (key.type === "Literal" && typeof key.value === "string") {

                    quotedProps.push(property);

                    if (checkQuotesRedundancy) {
                        try {
                            tokens = espree.tokenize(key.value);
                        } catch (e) {
                            necessaryQuotes = true;
                            return;
                        }

                        necessaryQuotes = necessaryQuotes || !areQuotesRedundant(key.value, tokens) || KEYWORDS && isKeyword(tokens[0].value);
                    }
                } else if (KEYWORDS && checkQuotesRedundancy && key.type === "Identifier" && isKeyword(key.name)) {
                    unquotedProps.push(property);
                    necessaryQuotes = true;
                    keywordKeyName = key.name;
                } else {
                    unquotedProps.push(property);
                }
            });

            if (checkQuotesRedundancy && quotedProps.length && !necessaryQuotes) {
                quotedProps.forEach(property => {
                    context.report({
                        node: property,
                        message: "Properties shouldn't be quoted as all quotes are redundant.",
                        fix: fixer => fixer.replaceText(property.key, getUnquotedKey(property.key))
                    });
                });
            } else if (unquotedProps.length && keywordKeyName) {
                unquotedProps.forEach(property => {
                    context.report({
                        node: property,
                        message: "Properties should be quoted as '{{property}}' is a reserved word.",
                        data: { property: keywordKeyName },
                        fix: fixer => fixer.replaceText(property.key, getQuotedKey(property.key))
                    });
                });
            } else if (quotedProps.length && unquotedProps.length) {
                unquotedProps.forEach(property => {
                    context.report({
                        node: property,
                        message: "Inconsistently quoted property '{{key}}' found.",
                        data: { key: property.key.name || property.key.value },
                        fix: fixer => fixer.replaceText(property.key, getQuotedKey(property.key))
                    });
                });
            }
        }

        return {
            Property(node) {
                if (MODE === "always" || !MODE) {
                    checkOmittedQuotes(node);
                }
                if (MODE === "as-needed") {
                    checkUnnecessaryQuotes(node);
                }
            },
            ObjectExpression(node) {
                if (MODE === "consistent") {
                    checkConsistency(node, false);
                }
                if (MODE === "consistent-as-needed") {
                    checkConsistency(node, true);
                }
            }
        };

    }
};
