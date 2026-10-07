/**
 * @fileoverview Rule to forbid control characters from regular expressions.
 * @author Nicholas C. Zakas
 */

"use strict";

const RegExpValidator = require("regexpp").RegExpValidator;
const collector = new (class {
    constructor() {
        this._source = "";
        this._controlChars = [];
        this._validator = new RegExpValidator(this);
    }

    onPatternEnter() {
        this._controlChars = [];
    }

    onCharacter(start, end, cp) {
        if (cp >= 0x00 &&
            cp <= 0x1F &&
            (
                this._source.codePointAt(start) === cp ||
                this._source.slice(start, end).startsWith("\\x") ||
                this._source.slice(start, end).startsWith("\\u")
            )
        ) {
            this._controlChars.push(`\\x${`0${cp.toString(16)}`.slice(-2)}`);
        }
    }

    collectControlChars(regexpStr) {
        try {
            this._source = regexpStr;
            this._validator.validatePattern(regexpStr); // Call onCharacter hook
        } catch {

            // Ignore syntax errors in RegExp.
        }
        return this._controlChars;
    }
})();

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow control characters in regular expressions",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-control-regex"
        },

        schema: [],

        messages: {
            unexpected: "Unexpected control character(s) in regular expression: {{controlChars}}."
        }
    },

    create(context) {

        /**
         * Get the regex expression
         * @param {ASTNode} node node to evaluate
         * @returns {RegExp|null} Regex if found else null
         * @private
         */
        function getRegExpPattern(node) {
            if (node.regex) {
                return node.regex.pattern;
            }
            if (typeof node.value === "string" &&
                (node.parent.type === "NewExpression" || node.parent.type === "CallExpression") &&
                node.parent.callee.type === "Identifier" &&
                node.parent.callee.name === "RegExp" &&
                node.parent.arguments[0] === node
            ) {
                return node.value;
            }

            return null;
        }

        return {
            Literal(node) {
                const pattern = getRegExpPattern(node);

                if (pattern) {
                    const controlCharacters = collector.collectControlChars(pattern);

                    if (controlCharacters.length > 0) {
                        context.report({
                            node,
                            messageId: "unexpected",
                            data: {
                                controlChars: controlCharacters.join(", ")
                            }
                        });
                    }
                }
            }
        };

    }
};
