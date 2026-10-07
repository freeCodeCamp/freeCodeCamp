export type ObjectDefinition = $typests.ObjectDefinition;
export type PropertyDefinition = $typests.PropertyDefinition;
/**
 * @fileoverview Merge Strategy
 */
/**
 * Container class for several different merge strategies.
 */
export class MergeStrategy {
    /**
     * Merges two keys by overwriting the first with the second.
     * @param {*} value1 The value from the first object key.
     * @param {*} value2 The value from the second object key.
     * @returns {*} The second value.
     */
    static overwrite(value1: any, value2: any): any;
    /**
     * Merges two keys by replacing the first with the second only if the
     * second is defined.
     * @param {*} value1 The value from the first object key.
     * @param {*} value2 The value from the second object key.
     * @returns {*} The second value if it is defined.
     */
    static replace(value1: any, value2: any): any;
    /**
     * Merges two properties by assigning properties from the second to the first.
     * @param {*} value1 The value from the first object key.
     * @param {*} value2 The value from the second object key.
     * @returns {*} A new object containing properties from both value1 and
     *      value2.
     */
    static assign(value1: any, value2: any): any;
}
/**
 * Represents an object validation/merging schema.
 */
export class ObjectSchema {
    /**
     * Creates a new instance.
     * @param {ObjectDefinition} definitions The schema definitions.
     * @throws {Error} When the definitions are missing or invalid.
     */
    constructor(definitions: ObjectDefinition);
    /**
     * Determines if a strategy has been registered for the given object key.
     * @param {string} key The object key to find a strategy for.
     * @returns {boolean} True if the key has a strategy registered, false if not.
     */
    hasKey(key: string): boolean;
    /**
     * Merges objects together to create a new object comprised of the keys
     * of the all objects. Keys are merged based on the each key's merge
     * strategy.
     * @param {...Object} objects The objects to merge.
     * @returns {Object} A new object with a mix of all objects' keys.
     * @throws {TypeError} If any object is invalid.
     */
    merge(...objects: any[]): any;
    /**
     * Validates an object's keys based on the validate strategy for each key.
     * @param {Object} object The object to validate.
     * @returns {void}
     * @throws {Error} When the object is invalid.
     */
    validate(object: any): void;
    #private;
}
/**
 * @fileoverview Validation Strategy
 */
/**
 * Container class for several different validation strategies.
 */
export class ValidationStrategy {
    /**
     * Validates that a value is an array.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static array(value: any): void;
    /**
     * Validates that a value is a boolean.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static boolean(value: any): void;
    /**
     * Validates that a value is a number.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static number(value: any): void;
    /**
     * Validates that a value is a object.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static object(value: any): void;
    /**
     * Validates that a value is a object or null.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static "object?"(value: any): void;
    /**
     * Validates that a value is a string.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static string(value: any): void;
    /**
     * Validates that a value is a non-empty string.
     * @param {*} value The value to validate.
     * @returns {void}
     * @throws {TypeError} If the value is invalid.
     */
    static "string!"(value: any): void;
}
import type * as $typests from "./types.ts";
