/**
 * @fileoverview Rule to forbid control charactes from regular expressions.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow control characters in regular expressions",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {

        /**
         * Get the regex expression
         * @param {ASTNode} node node to evaluate
         * @returns {*} Regex if found else null
         * @private
         */
        function getRegExp(node) {
            if (node.value instanceof RegExp) {
                return node.value;
            } else if (typeof node.value === "string") {

                const parent = context.getAncestors().pop();

                if ((parent.type === "NewExpression" || parent.type === "CallExpression") &&
                    parent.callee.type === "Identifier" && parent.callee.name === "RegExp"
                ) {

                    // there could be an invalid regular expression string
                    try {
                        return new RegExp(node.value);
                    } catch (ex) {
                        return null;
                    }
                }
            }

            return null;
        }


        const controlChar = /[\x00-\x1f]/g; // eslint-disable-line no-control-regex
        const consecutiveSlashes = /\\+/g;
        const consecutiveSlashesAtEnd = /\\+$/g;
        const stringControlChar = /\\x[01][0-9a-f]/ig;
        const stringControlCharWithoutSlash = /x[01][0-9a-f]/ig;

        /**
         * Return a list of the control characters in the given regex string
         * @param {string} regexStr regex as string to check
         * @returns {array} returns a list of found control characters on given string
         * @private
         */
        function getControlCharacters(regexStr) {

            // check control characters, if RegExp object used
            const controlChars = regexStr.match(controlChar) || [];

            let stringControlChars = [];

            // check substr, if regex literal used
            const subStrIndex = regexStr.search(stringControlChar);

            if (subStrIndex > -1) {

                // is it escaped, check backslash count
                const possibleEscapeCharacters = regexStr.slice(0, subStrIndex).match(consecutiveSlashesAtEnd);

                const hasControlChars = possibleEscapeCharacters === null || !(possibleEscapeCharacters[0].length % 2);

                if (hasControlChars) {
                    stringControlChars = regexStr.slice(subStrIndex, -1)
                        .split(consecutiveSlashes)
                        .filter(Boolean)
                        .map(x => {
                            const match = x.match(stringControlCharWithoutSlash) || [x];

                            return `\\${match[0]}`;
                        });
                }
            }

            return controlChars.map(x => {
                const hexCode = `0${x.charCodeAt(0).toString(16)}`.slice(-2);

                return `\\x${hexCode}`;
            }).concat(stringControlChars);
        }

        return {
            Literal(node) {
                const regex = getRegExp(node);

                if (regex) {
                    const computedValue = regex.toString();

                    const controlCharacters = getControlCharacters(computedValue);

                    if (controlCharacters.length > 0) {
                        context.report({
                            node,
                            message: "Unexpected control character(s) in regular expression: {{controlChars}}.",
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
