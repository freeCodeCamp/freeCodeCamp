/**
 * @fileoverview Rule to flag numbers that will lose significant figure precision at runtime
 * @author Jacob Moore
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow literal numbers that lose precision",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-loss-of-precision"
        },
        schema: [],
        messages: {
            noLossOfPrecision: "This number literal will lose precision at runtime."
        }
    },

    create(context) {

        /**
         * Returns whether the node is number literal
         * @param {Node} node the node literal being evaluated
         * @returns {boolean} true if the node is a number literal
         */
        function isNumber(node) {
            return typeof node.value === "number";
        }

        /**
         * Gets the source code of the given number literal. Removes `_` numeric separators from the result.
         * @param {Node} node the number `Literal` node
         * @returns {string} raw source code of the literal, without numeric separators
         */
        function getRaw(node) {
            return node.raw.replace(/_/gu, "");
        }

        /**
         * Checks whether the number is  base ten
         * @param {ASTNode} node the node being evaluated
         * @returns {boolean} true if the node is in base ten
         */
        function isBaseTen(node) {
            const prefixes = ["0x", "0X", "0b", "0B", "0o", "0O"];

            return prefixes.every(prefix => !node.raw.startsWith(prefix)) &&
            !/^0[0-7]+$/u.test(node.raw);
        }

        /**
         * Checks that the user-intended non-base ten number equals the actual number after is has been converted to the Number type
         * @param {Node} node the node being evaluated
         * @returns {boolean} true if they do not match
         */
        function notBaseTenLosesPrecision(node) {
            const rawString = getRaw(node).toUpperCase();
            let base = 0;

            if (rawString.startsWith("0B")) {
                base = 2;
            } else if (rawString.startsWith("0X")) {
                base = 16;
            } else {
                base = 8;
            }

            return !rawString.endsWith(node.value.toString(base).toUpperCase());
        }

        /**
         * Adds a decimal point to the numeric string at index 1
         * @param {string} stringNumber the numeric string without any decimal point
         * @returns {string} the numeric string with a decimal point in the proper place
         */
        function addDecimalPointToNumber(stringNumber) {
            return `${stringNumber.slice(0, 1)}.${stringNumber.slice(1)}`;
        }

        /**
         * Returns the number stripped of leading zeros
         * @param {string} numberAsString the string representation of the number
         * @returns {string} the stripped string
         */
        function removeLeadingZeros(numberAsString) {
            return numberAsString.replace(/^0*/u, "");
        }

        /**
         * Returns the number stripped of trailing zeros
         * @param {string} numberAsString the string representation of the number
         * @returns {string} the stripped string
         */
        function removeTrailingZeros(numberAsString) {
            return numberAsString.replace(/0*$/u, "");
        }

        /**
         * Converts an integer to to an object containing the integer's coefficient and order of magnitude
         * @param {string} stringInteger the string representation of the integer being converted
         * @returns {Object} the object containing the integer's coefficient and order of magnitude
         */
        function normalizeInteger(stringInteger) {
            const significantDigits = removeTrailingZeros(removeLeadingZeros(stringInteger));

            return {
                magnitude: stringInteger.startsWith("0") ? stringInteger.length - 2 : stringInteger.length - 1,
                coefficient: addDecimalPointToNumber(significantDigits)
            };
        }

        /**
         *
         * Converts a float to to an object containing the floats's coefficient and order of magnitude
         * @param {string} stringFloat the string representation of the float being converted
         * @returns {Object} the object containing the integer's coefficient and order of magnitude
         */
        function normalizeFloat(stringFloat) {
            const trimmedFloat = removeLeadingZeros(stringFloat);

            if (trimmedFloat.startsWith(".")) {
                const decimalDigits = trimmedFloat.split(".").pop();
                const significantDigits = removeLeadingZeros(decimalDigits);

                return {
                    magnitude: significantDigits.length - decimalDigits.length - 1,
                    coefficient: addDecimalPointToNumber(significantDigits)
                };

            }
            return {
                magnitude: trimmedFloat.indexOf(".") - 1,
                coefficient: addDecimalPointToNumber(trimmedFloat.replace(".", ""))

            };
        }


        /**
         * Converts a base ten number to proper scientific notation
         * @param {string} stringNumber the string representation of the base ten number to be converted
         * @returns {string} the number converted to scientific notation
         */
        function convertNumberToScientificNotation(stringNumber) {
            const splitNumber = stringNumber.replace("E", "e").split("e");
            const originalCoefficient = splitNumber[0];
            const normalizedNumber = stringNumber.includes(".") ? normalizeFloat(originalCoefficient)
                : normalizeInteger(originalCoefficient);
            const normalizedCoefficient = normalizedNumber.coefficient;
            const magnitude = splitNumber.length > 1 ? (parseInt(splitNumber[1], 10) + normalizedNumber.magnitude)
                : normalizedNumber.magnitude;

            return `${normalizedCoefficient}e${magnitude}`;

        }

        /**
         * Checks that the user-intended base ten number equals the actual number after is has been converted to the Number type
         * @param {Node} node the node being evaluated
         * @returns {boolean} true if they do not match
         */
        function baseTenLosesPrecision(node) {
            const normalizedRawNumber = convertNumberToScientificNotation(getRaw(node));
            const requestedPrecision = normalizedRawNumber.split("e")[0].replace(".", "").length;

            if (requestedPrecision > 100) {
                return true;
            }
            const storedNumber = node.value.toPrecision(requestedPrecision);
            const normalizedStoredNumber = convertNumberToScientificNotation(storedNumber);

            return normalizedRawNumber !== normalizedStoredNumber;
        }


        /**
         * Checks that the user-intended number equals the actual number after is has been converted to the Number type
         * @param {Node} node the node being evaluated
         * @returns {boolean} true if they do not match
         */
        function losesPrecision(node) {
            return isBaseTen(node) ? baseTenLosesPrecision(node) : notBaseTenLosesPrecision(node);
        }


        return {
            Literal(node) {
                if (node.value && isNumber(node) && losesPrecision(node)) {
                    context.report({
                        messageId: "noLossOfPrecision",
                        node
                    });
                }
            }
        };
    }
};
