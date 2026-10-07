/**
 * @fileoverview Rule to flag use of constructors without capital letters
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const CAPS_ALLOWED = [
    "Array",
    "Boolean",
    "Date",
    "Error",
    "Function",
    "Number",
    "Object",
    "RegExp",
    "String",
    "Symbol",
    "BigInt"
];

/**
 * Ensure that if the key is provided, it must be an array.
 * @param {Object} obj Object to check with `key`.
 * @param {string} key Object key to check on `obj`.
 * @param {*} fallback If obj[key] is not present, this will be returned.
 * @returns {string[]} Returns obj[key] if it's an Array, otherwise `fallback`
 */
function checkArray(obj, key, fallback) {

    /* istanbul ignore if */
    if (Object.prototype.hasOwnProperty.call(obj, key) && !Array.isArray(obj[key])) {
        throw new TypeError(`${key}, if provided, must be an Array`);
    }
    return obj[key] || fallback;
}

/**
 * A reducer function to invert an array to an Object mapping the string form of the key, to `true`.
 * @param {Object} map Accumulator object for the reduce.
 * @param {string} key Object key to set to `true`.
 * @returns {Object} Returns the updated Object for further reduction.
 */
function invert(map, key) {
    map[key] = true;
    return map;
}

/**
 * Creates an object with the cap is new exceptions as its keys and true as their values.
 * @param {Object} config Rule configuration
 * @returns {Object} Object with cap is new exceptions.
 */
function calculateCapIsNewExceptions(config) {
    let capIsNewExceptions = checkArray(config, "capIsNewExceptions", CAPS_ALLOWED);

    if (capIsNewExceptions !== CAPS_ALLOWED) {
        capIsNewExceptions = capIsNewExceptions.concat(CAPS_ALLOWED);
    }

    return capIsNewExceptions.reduce(invert, {});
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "require constructor names to begin with a capital letter",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/new-cap"
        },

        schema: [
            {
                type: "object",
                properties: {
                    newIsCap: {
                        type: "boolean",
                        default: true
                    },
                    capIsNew: {
                        type: "boolean",
                        default: true
                    },
                    newIsCapExceptions: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    newIsCapExceptionPattern: {
                        type: "string"
                    },
                    capIsNewExceptions: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    capIsNewExceptionPattern: {
                        type: "string"
                    },
                    properties: {
                        type: "boolean",
                        default: true
                    }
                },
                additionalProperties: false
            }
        ],
        messages: {
            upper: "A function with a name starting with an uppercase letter should only be used as a constructor.",
            lower: "A constructor name should not start with a lowercase letter."
        }
    },

    create(context) {

        const config = Object.assign({}, context.options[0]);

        config.newIsCap = config.newIsCap !== false;
        config.capIsNew = config.capIsNew !== false;
        const skipProperties = config.properties === false;

        const newIsCapExceptions = checkArray(config, "newIsCapExceptions", []).reduce(invert, {});
        const newIsCapExceptionPattern = config.newIsCapExceptionPattern ? new RegExp(config.newIsCapExceptionPattern, "u") : null;

        const capIsNewExceptions = calculateCapIsNewExceptions(config);
        const capIsNewExceptionPattern = config.capIsNewExceptionPattern ? new RegExp(config.capIsNewExceptionPattern, "u") : null;

        const listeners = {};

        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Get exact callee name from expression
         * @param {ASTNode} node CallExpression or NewExpression node
         * @returns {string} name
         */
        function extractNameFromExpression(node) {
            return node.callee.type === "Identifier"
                ? node.callee.name
                : astUtils.getStaticPropertyName(node.callee) || "";
        }

        /**
         * Returns the capitalization state of the string -
         * Whether the first character is uppercase, lowercase, or non-alphabetic
         * @param {string} str String
         * @returns {string} capitalization state: "non-alpha", "lower", or "upper"
         */
        function getCap(str) {
            const firstChar = str.charAt(0);

            const firstCharLower = firstChar.toLowerCase();
            const firstCharUpper = firstChar.toUpperCase();

            if (firstCharLower === firstCharUpper) {

                // char has no uppercase variant, so it's non-alphabetic
                return "non-alpha";
            }
            if (firstChar === firstCharLower) {
                return "lower";
            }
            return "upper";

        }

        /**
         * Check if capitalization is allowed for a CallExpression
         * @param {Object} allowedMap Object mapping calleeName to a Boolean
         * @param {ASTNode} node CallExpression node
         * @param {string} calleeName Capitalized callee name from a CallExpression
         * @param {Object} pattern RegExp object from options pattern
         * @returns {boolean} Returns true if the callee may be capitalized
         */
        function isCapAllowed(allowedMap, node, calleeName, pattern) {
            const sourceText = sourceCode.getText(node.callee);

            if (allowedMap[calleeName] || allowedMap[sourceText]) {
                return true;
            }

            if (pattern && pattern.test(sourceText)) {
                return true;
            }

            const callee = astUtils.skipChainExpression(node.callee);

            if (calleeName === "UTC" && callee.type === "MemberExpression") {

                // allow if callee is Date.UTC
                return callee.object.type === "Identifier" &&
                    callee.object.name === "Date";
            }

            return skipProperties && callee.type === "MemberExpression";
        }

        /**
         * Reports the given messageId for the given node. The location will be the start of the property or the callee.
         * @param {ASTNode} node CallExpression or NewExpression node.
         * @param {string} messageId The messageId to report.
         * @returns {void}
         */
        function report(node, messageId) {
            let callee = astUtils.skipChainExpression(node.callee);

            if (callee.type === "MemberExpression") {
                callee = callee.property;
            }

            context.report({ node, loc: callee.loc, messageId });
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        if (config.newIsCap) {
            listeners.NewExpression = function(node) {

                const constructorName = extractNameFromExpression(node);

                if (constructorName) {
                    const capitalization = getCap(constructorName);
                    const isAllowed = capitalization !== "lower" || isCapAllowed(newIsCapExceptions, node, constructorName, newIsCapExceptionPattern);

                    if (!isAllowed) {
                        report(node, "lower");
                    }
                }
            };
        }

        if (config.capIsNew) {
            listeners.CallExpression = function(node) {

                const calleeName = extractNameFromExpression(node);

                if (calleeName) {
                    const capitalization = getCap(calleeName);
                    const isAllowed = capitalization !== "upper" || isCapAllowed(capIsNewExceptions, node, calleeName, capIsNewExceptionPattern);

                    if (!isAllowed) {
                        report(node, "upper");
                    }
                }
            };
        }

        return listeners;
    }
};
