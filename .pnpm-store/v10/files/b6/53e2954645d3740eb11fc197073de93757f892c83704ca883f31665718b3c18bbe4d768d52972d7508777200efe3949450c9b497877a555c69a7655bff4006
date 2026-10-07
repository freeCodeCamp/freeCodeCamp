/**
 * @filedescription Validation Strategy
 */

"use strict";

//-----------------------------------------------------------------------------
// Class
//-----------------------------------------------------------------------------

/**
 * Container class for several different validation strategies.
 */
class ValidationStrategy {

    /**
     * Validates that a value is an array.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid. 
     */
    static array(value) {
        if (!Array.isArray(value)) {
            throw new TypeError("Expected an array.");
        }
    }

    /**
     * Validates that a value is a boolean.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid. 
     */
    static boolean(value) {
        if (typeof value !== "boolean") {
            throw new TypeError("Expected a Boolean.");
        }
    }

    /**
     * Validates that a value is a number.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid. 
     */
    static number(value) {
        if (typeof value !== "number") {
            throw new TypeError("Expected a number.");
        }
    }

    /**
     * Validates that a value is a object.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid. 
     */
    static object(value) {
        if (!value || typeof value !== "object") {
            throw new TypeError("Expected an object.");
        }
    }

    /**
     * Validates that a value is a object or null.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid. 
     */
    static "object?"(value) {
        if (typeof value !== "object") {
            throw new TypeError("Expected an object or null.");
        }
    }

    /**
     * Validates that a value is a string.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid. 
     */
    static string(value) {
        if (typeof value !== "string") {
            throw new TypeError("Expected a string.");
        }
    }

    /**
     * Validates that a value is a non-empty string.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid. 
     */
    static "string!"(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new TypeError("Expected a non-empty string.");
        }
    }

}

exports.ValidationStrategy = ValidationStrategy;
