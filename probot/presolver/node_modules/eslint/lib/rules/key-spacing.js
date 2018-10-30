/**
 * @fileoverview Rule to specify spacing of object literal keys and values
 * @author Brandon Mills
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether a string contains a line terminator as defined in
 * http://www.ecma-international.org/ecma-262/5.1/#sec-7.3
 * @param {string} str String to test.
 * @returns {boolean} True if str contains a line terminator.
 */
function containsLineTerminator(str) {
    return astUtils.LINEBREAK_MATCHER.test(str);
}

/**
 * Gets the last element of an array.
 * @param {Array} arr An array.
 * @returns {any} Last element of arr.
 */
function last(arr) {
    return arr[arr.length - 1];
}

/**
 * Checks whether a property is a member of the property group it follows.
 * @param {ASTNode} lastMember The last Property known to be in the group.
 * @param {ASTNode} candidate The next Property that might be in the group.
 * @returns {boolean} True if the candidate property is part of the group.
 */
function continuesPropertyGroup(lastMember, candidate) {
    const groupEndLine = lastMember.loc.start.line,
        candidateStartLine = candidate.loc.start.line;

    if (candidateStartLine - groupEndLine <= 1) {
        return true;
    }

    // Check that the first comment is adjacent to the end of the group, the
    // last comment is adjacent to the candidate property, and that successive
    // comments are adjacent to each other.
    const comments = candidate.leadingComments;

    if (
        comments &&
        comments[0].loc.start.line - groupEndLine <= 1 &&
        candidateStartLine - last(comments).loc.end.line <= 1
    ) {
        for (let i = 1; i < comments.length; i++) {
            if (comments[i].loc.start.line - comments[i - 1].loc.end.line > 1) {
                return false;
            }
        }
        return true;
    }

    return false;
}

/**
 * Checks whether a node is contained on a single line.
 * @param {ASTNode} node AST Node being evaluated.
 * @returns {boolean} True if the node is a single line.
 */
function isSingleLine(node) {
    return (node.loc.end.line === node.loc.start.line);
}

/**
 * Initializes a single option property from the configuration with defaults for undefined values
 * @param {Object} toOptions Object to be initialized
 * @param {Object} fromOptions Object to be initialized from
 * @returns {Object} The object with correctly initialized options and values
 */
function initOptionProperty(toOptions, fromOptions) {
    toOptions.mode = fromOptions.mode || "strict";

    // Set value of beforeColon
    if (typeof fromOptions.beforeColon !== "undefined") {
        toOptions.beforeColon = +fromOptions.beforeColon;
    } else {
        toOptions.beforeColon = 0;
    }

    // Set value of afterColon
    if (typeof fromOptions.afterColon !== "undefined") {
        toOptions.afterColon = +fromOptions.afterColon;
    } else {
        toOptions.afterColon = 1;
    }

    // Set align if exists
    if (typeof fromOptions.align !== "undefined") {
        if (typeof fromOptions.align === "object") {
            toOptions.align = fromOptions.align;
        } else { // "string"
            toOptions.align = {
                on: fromOptions.align,
                mode: toOptions.mode,
                beforeColon: toOptions.beforeColon,
                afterColon: toOptions.afterColon
            };
        }
    }

    return toOptions;
}

/**
 * Initializes all the option values (singleLine, multiLine and align) from the configuration with defaults for undefined values
 * @param {Object} toOptions Object to be initialized
 * @param {Object} fromOptions Object to be initialized from
 * @returns {Object} The object with correctly initialized options and values
 */
function initOptions(toOptions, fromOptions) {
    if (typeof fromOptions.align === "object") {

        // Initialize the alignment configuration
        toOptions.align = initOptionProperty({}, fromOptions.align);
        toOptions.align.on = fromOptions.align.on || "colon";
        toOptions.align.mode = fromOptions.align.mode || "strict";

        toOptions.multiLine = initOptionProperty({}, (fromOptions.multiLine || fromOptions));
        toOptions.singleLine = initOptionProperty({}, (fromOptions.singleLine || fromOptions));

    } else { // string or undefined
        toOptions.multiLine = initOptionProperty({}, (fromOptions.multiLine || fromOptions));
        toOptions.singleLine = initOptionProperty({}, (fromOptions.singleLine || fromOptions));

        // If alignment options are defined in multiLine, pull them out into the general align configuration
        if (toOptions.multiLine.align) {
            toOptions.align = {
                on: toOptions.multiLine.align.on,
                mode: toOptions.multiLine.align.mode || toOptions.multiLine.mode,
                beforeColon: toOptions.multiLine.align.beforeColon,
                afterColon: toOptions.multiLine.align.afterColon
            };
        }
    }

    return toOptions;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const messages = {
    key: "{{error}} space after {{computed}}key '{{key}}'.",
    value: "{{error}} space before value for {{computed}}key '{{key}}'."
};

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent spacing between keys and values in object literal properties",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "whitespace",

        schema: [{
            anyOf: [
                {
                    type: "object",
                    properties: {
                        align: {
                            anyOf: [
                                {
                                    enum: ["colon", "value"]
                                },
                                {
                                    type: "object",
                                    properties: {
                                        mode: {
                                            enum: ["strict", "minimum"]
                                        },
                                        on: {
                                            enum: ["colon", "value"]
                                        },
                                        beforeColon: {
                                            type: "boolean"
                                        },
                                        afterColon: {
                                            type: "boolean"
                                        }
                                    },
                                    additionalProperties: false
                                }
                            ]
                        },
                        mode: {
                            enum: ["strict", "minimum"]
                        },
                        beforeColon: {
                            type: "boolean"
                        },
                        afterColon: {
                            type: "boolean"
                        }
                    },
                    additionalProperties: false
                },
                {
                    type: "object",
                    properties: {
                        singleLine: {
                            type: "object",
                            properties: {
                                mode: {
                                    enum: ["strict", "minimum"]
                                },
                                beforeColon: {
                                    type: "boolean"
                                },
                                afterColon: {
                                    type: "boolean"
                                }
                            },
                            additionalProperties: false
                        },
                        multiLine: {
                            type: "object",
                            properties: {
                                align: {
                                    anyOf: [
                                        {
                                            enum: ["colon", "value"]
                                        },
                                        {
                                            type: "object",
                                            properties: {
                                                mode: {
                                                    enum: ["strict", "minimum"]
                                                },
                                                on: {
                                                    enum: ["colon", "value"]
                                                },
                                                beforeColon: {
                                                    type: "boolean"
                                                },
                                                afterColon: {
                                                    type: "boolean"
                                                }
                                            },
                                            additionalProperties: false
                                        }
                                    ]
                                },
                                mode: {
                                    enum: ["strict", "minimum"]
                                },
                                beforeColon: {
                                    type: "boolean"
                                },
                                afterColon: {
                                    type: "boolean"
                                }
                            },
                            additionalProperties: false
                        }
                    },
                    additionalProperties: false
                },
                {
                    type: "object",
                    properties: {
                        singleLine: {
                            type: "object",
                            properties: {
                                mode: {
                                    enum: ["strict", "minimum"]
                                },
                                beforeColon: {
                                    type: "boolean"
                                },
                                afterColon: {
                                    type: "boolean"
                                }
                            },
                            additionalProperties: false
                        },
                        multiLine: {
                            type: "object",
                            properties: {
                                mode: {
                                    enum: ["strict", "minimum"]
                                },
                                beforeColon: {
                                    type: "boolean"
                                },
                                afterColon: {
                                    type: "boolean"
                                }
                            },
                            additionalProperties: false
                        },
                        align: {
                            type: "object",
                            properties: {
                                mode: {
                                    enum: ["strict", "minimum"]
                                },
                                on: {
                                    enum: ["colon", "value"]
                                },
                                beforeColon: {
                                    type: "boolean"
                                },
                                afterColon: {
                                    type: "boolean"
                                }
                            },
                            additionalProperties: false
                        }
                    },
                    additionalProperties: false
                }
            ]
        }]
    },

    create(context) {

        /**
         * OPTIONS
         * "key-spacing": [2, {
         *     beforeColon: false,
         *     afterColon: true,
         *     align: "colon" // Optional, or "value"
         * }
         */
        const options = context.options[0] || {},
            ruleOptions = initOptions({}, options),
            multiLineOptions = ruleOptions.multiLine,
            singleLineOptions = ruleOptions.singleLine,
            alignmentOptions = ruleOptions.align || null;

        const sourceCode = context.getSourceCode();

        /**
         * Determines if the given property is key-value property.
         * @param {ASTNode} property Property node to check.
         * @returns {boolean} Whether the property is a key-value property.
         */
        function isKeyValueProperty(property) {
            return !(
                (property.method ||
                property.shorthand ||
                property.kind !== "init" || property.type !== "Property") // Could be "ExperimentalSpreadProperty" or "SpreadProperty"
            );
        }

        /**
         * Starting from the given a node (a property.key node here) looks forward
         * until it finds the last token before a colon punctuator and returns it.
         * @param {ASTNode} node The node to start looking from.
         * @returns {ASTNode} The last token before a colon punctuator.
         */
        function getLastTokenBeforeColon(node) {
            const colonToken = sourceCode.getTokenAfter(node, astUtils.isColonToken);

            return sourceCode.getTokenBefore(colonToken);
        }

        /**
         * Starting from the given a node (a property.key node here) looks forward
         * until it finds the colon punctuator and returns it.
         * @param {ASTNode} node The node to start looking from.
         * @returns {ASTNode} The colon punctuator.
         */
        function getNextColon(node) {
            return sourceCode.getTokenAfter(node, astUtils.isColonToken);
        }

        /**
         * Gets an object literal property's key as the identifier name or string value.
         * @param {ASTNode} property Property node whose key to retrieve.
         * @returns {string} The property's key.
         */
        function getKey(property) {
            const key = property.key;

            if (property.computed) {
                return sourceCode.getText().slice(key.range[0], key.range[1]);
            }

            return property.key.name || property.key.value;
        }

        /**
         * Reports an appropriately-formatted error if spacing is incorrect on one
         * side of the colon.
         * @param {ASTNode} property Key-value pair in an object literal.
         * @param {string} side Side being verified - either "key" or "value".
         * @param {string} whitespace Actual whitespace string.
         * @param {int} expected Expected whitespace length.
         * @param {string} mode Value of the mode as "strict" or "minimum"
         * @returns {void}
         */
        function report(property, side, whitespace, expected, mode) {
            const diff = whitespace.length - expected,
                nextColon = getNextColon(property.key),
                tokenBeforeColon = sourceCode.getTokenBefore(nextColon, { includeComments: true }),
                tokenAfterColon = sourceCode.getTokenAfter(nextColon, { includeComments: true }),
                isKeySide = side === "key",
                locStart = isKeySide ? tokenBeforeColon.loc.start : tokenAfterColon.loc.start,
                isExtra = diff > 0,
                diffAbs = Math.abs(diff),
                spaces = Array(diffAbs + 1).join(" ");
            let fix;

            if ((
                diff && mode === "strict" ||
                diff < 0 && mode === "minimum" ||
                diff > 0 && !expected && mode === "minimum") &&
                !(expected && containsLineTerminator(whitespace))
            ) {
                if (isExtra) {
                    let range;

                    // Remove whitespace
                    if (isKeySide) {
                        range = [tokenBeforeColon.end, tokenBeforeColon.end + diffAbs];
                    } else {
                        range = [tokenAfterColon.start - diffAbs, tokenAfterColon.start];
                    }
                    fix = function(fixer) {
                        return fixer.removeRange(range);
                    };
                } else {

                    // Add whitespace
                    if (isKeySide) {
                        fix = function(fixer) {
                            return fixer.insertTextAfter(tokenBeforeColon, spaces);
                        };
                    } else {
                        fix = function(fixer) {
                            return fixer.insertTextBefore(tokenAfterColon, spaces);
                        };
                    }
                }

                context.report({
                    node: property[side],
                    loc: locStart,
                    message: messages[side],
                    data: {
                        error: isExtra ? "Extra" : "Missing",
                        computed: property.computed ? "computed " : "",
                        key: getKey(property)
                    },
                    fix
                });
            }
        }

        /**
         * Gets the number of characters in a key, including quotes around string
         * keys and braces around computed property keys.
         * @param {ASTNode} property Property of on object literal.
         * @returns {int} Width of the key.
         */
        function getKeyWidth(property) {
            const startToken = sourceCode.getFirstToken(property);
            const endToken = getLastTokenBeforeColon(property.key);

            return endToken.range[1] - startToken.range[0];
        }

        /**
         * Gets the whitespace around the colon in an object literal property.
         * @param {ASTNode} property Property node from an object literal.
         * @returns {Object} Whitespace before and after the property's colon.
         */
        function getPropertyWhitespace(property) {
            const whitespace = /(\s*):(\s*)/.exec(sourceCode.getText().slice(
                property.key.range[1], property.value.range[0]
            ));

            if (whitespace) {
                return {
                    beforeColon: whitespace[1],
                    afterColon: whitespace[2]
                };
            }
            return null;
        }

        /**
         * Creates groups of properties.
         * @param  {ASTNode} node ObjectExpression node being evaluated.
         * @returns {Array.<ASTNode[]>} Groups of property AST node lists.
         */
        function createGroups(node) {
            if (node.properties.length === 1) {
                return [node.properties];
            }

            return node.properties.reduce((groups, property) => {
                const currentGroup = last(groups),
                    prev = last(currentGroup);

                if (!prev || continuesPropertyGroup(prev, property)) {
                    currentGroup.push(property);
                } else {
                    groups.push([property]);
                }

                return groups;
            }, [
                []
            ]);
        }

        /**
         * Verifies correct vertical alignment of a group of properties.
         * @param {ASTNode[]} properties List of Property AST nodes.
         * @returns {void}
         */
        function verifyGroupAlignment(properties) {
            const length = properties.length,
                widths = properties.map(getKeyWidth), // Width of keys, including quotes
                align = alignmentOptions.on; // "value" or "colon"
            let targetWidth = Math.max.apply(null, widths),
                beforeColon, afterColon, mode;

            if (alignmentOptions && length > 1) { // When aligning values within a group, use the alignment configuration.
                beforeColon = alignmentOptions.beforeColon;
                afterColon = alignmentOptions.afterColon;
                mode = alignmentOptions.mode;
            } else {
                beforeColon = multiLineOptions.beforeColon;
                afterColon = multiLineOptions.afterColon;
                mode = alignmentOptions.mode;
            }

            // Conditionally include one space before or after colon
            targetWidth += (align === "colon" ? beforeColon : afterColon);

            for (let i = 0; i < length; i++) {
                const property = properties[i];
                const whitespace = getPropertyWhitespace(property);

                if (whitespace) { // Object literal getters/setters lack a colon
                    const width = widths[i];

                    if (align === "value") {
                        report(property, "key", whitespace.beforeColon, beforeColon, mode);
                        report(property, "value", whitespace.afterColon, targetWidth - width, mode);
                    } else { // align = "colon"
                        report(property, "key", whitespace.beforeColon, targetWidth - width, mode);
                        report(property, "value", whitespace.afterColon, afterColon, mode);
                    }
                }
            }
        }

        /**
         * Verifies vertical alignment, taking into account groups of properties.
         * @param  {ASTNode} node ObjectExpression node being evaluated.
         * @returns {void}
         */
        function verifyAlignment(node) {
            createGroups(node).forEach(group => {
                verifyGroupAlignment(group.filter(isKeyValueProperty));
            });
        }

        /**
         * Verifies spacing of property conforms to specified options.
         * @param  {ASTNode} node Property node being evaluated.
         * @param {Object} lineOptions Configured singleLine or multiLine options
         * @returns {void}
         */
        function verifySpacing(node, lineOptions) {
            const actual = getPropertyWhitespace(node);

            if (actual) { // Object literal getters/setters lack colons
                report(node, "key", actual.beforeColon, lineOptions.beforeColon, lineOptions.mode);
                report(node, "value", actual.afterColon, lineOptions.afterColon, lineOptions.mode);
            }
        }

        /**
         * Verifies spacing of each property in a list.
         * @param  {ASTNode[]} properties List of Property AST nodes.
         * @returns {void}
         */
        function verifyListSpacing(properties) {
            const length = properties.length;

            for (let i = 0; i < length; i++) {
                verifySpacing(properties[i], singleLineOptions);
            }
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        if (alignmentOptions) { // Verify vertical alignment

            return {
                ObjectExpression(node) {
                    if (isSingleLine(node)) {
                        verifyListSpacing(node.properties.filter(isKeyValueProperty));
                    } else {
                        verifyAlignment(node);
                    }
                }
            };

        }

        // Obey beforeColon and afterColon in each property as configured
        return {
            Property(node) {
                verifySpacing(node, isSingleLine(node.parent) ? singleLineOptions : multiLineOptions);
            }
        };



    }
};
