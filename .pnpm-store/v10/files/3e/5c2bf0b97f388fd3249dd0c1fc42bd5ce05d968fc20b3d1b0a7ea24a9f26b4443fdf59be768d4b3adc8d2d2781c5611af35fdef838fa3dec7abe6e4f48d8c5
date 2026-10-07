'use strict';

/**
 * @fileoverview Merge Strategy
 */

//-----------------------------------------------------------------------------
// Class
//-----------------------------------------------------------------------------

/**
 * Container class for several different merge strategies.
 */
class MergeStrategy {
	/**
	 * Merges two keys by overwriting the first with the second.
	 * @param {*} value1 The value from the first object key.
	 * @param {*} value2 The value from the second object key.
	 * @returns {*} The second value.
	 */
	static overwrite(value1, value2) {
		return value2;
	}

	/**
	 * Merges two keys by replacing the first with the second only if the
	 * second is defined.
	 * @param {*} value1 The value from the first object key.
	 * @param {*} value2 The value from the second object key.
	 * @returns {*} The second value if it is defined.
	 */
	static replace(value1, value2) {
		if (typeof value2 !== "undefined") {
			return value2;
		}

		return value1;
	}

	/**
	 * Merges two properties by assigning properties from the second to the first.
	 * @param {*} value1 The value from the first object key.
	 * @param {*} value2 The value from the second object key.
	 * @returns {*} A new object containing properties from both value1 and
	 *      value2.
	 */
	static assign(value1, value2) {
		return Object.assign({}, value1, value2);
	}
}

/**
 * @fileoverview Validation Strategy
 */

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

/**
 * @fileoverview Object Schema
 */


//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------

/** @import * as $typests from "./types.ts"; */
/** @typedef {$typests.ObjectDefinition} ObjectDefinition */
/** @typedef {$typests.PropertyDefinition} PropertyDefinition */

//-----------------------------------------------------------------------------
// Private
//-----------------------------------------------------------------------------

/**
 * Validates a schema strategy.
 * @param {string} name The name of the key this strategy is for.
 * @param {PropertyDefinition} definition The strategy for the object key.
 * @returns {void}
 * @throws {TypeError} When the strategy is missing a name.
 * @throws {TypeError} When the strategy is missing a merge() method.
 * @throws {TypeError} When the strategy is missing a validate() method.
 */
function validateDefinition(name, definition) {
	let hasSchema = false;
	if (definition.schema) {
		if (typeof definition.schema === "object") {
			hasSchema = true;
		} else {
			throw new TypeError("Schema must be an object.");
		}
	}

	if (typeof definition.merge === "string") {
		if (!(definition.merge in MergeStrategy)) {
			throw new TypeError(
				`Definition for key "${name}" missing valid merge strategy.`,
			);
		}
	} else if (!hasSchema && typeof definition.merge !== "function") {
		throw new TypeError(
			`Definition for key "${name}" must have a merge property.`,
		);
	}

	if (typeof definition.validate === "string") {
		if (!(definition.validate in ValidationStrategy)) {
			throw new TypeError(
				`Definition for key "${name}" missing valid validation strategy.`,
			);
		}
	} else if (!hasSchema && typeof definition.validate !== "function") {
		throw new TypeError(
			`Definition for key "${name}" must have a validate() method.`,
		);
	}
}

//-----------------------------------------------------------------------------
// Errors
//-----------------------------------------------------------------------------

/**
 * Error when an unexpected key is found.
 */
class UnexpectedKeyError extends Error {
	/**
	 * Creates a new instance.
	 * @param {string} key The key that was unexpected.
	 */
	constructor(key) {
		super(`Unexpected key "${key}" found.`);
	}
}

/**
 * Error when a required key is missing.
 */
class MissingKeyError extends Error {
	/**
	 * Creates a new instance.
	 * @param {string} key The key that was missing.
	 */
	constructor(key) {
		super(`Missing required key "${key}".`);
	}
}

/**
 * Error when a key requires other keys that are missing.
 */
class MissingDependentKeysError extends Error {
	/**
	 * Creates a new instance.
	 * @param {string} key The key that was unexpected.
	 * @param {Array<string>} requiredKeys The keys that are required.
	 */
	constructor(key, requiredKeys) {
		super(`Key "${key}" requires keys "${requiredKeys.join('", "')}".`);
	}
}

/**
 * Wrapper error for errors occuring during a merge or validate operation.
 */
class WrapperError extends Error {
	/**
	 * Creates a new instance.
	 * @param {string} key The object key causing the error.
	 * @param {Error} source The source error.
	 */
	constructor(key, source) {
		super(`Key "${key}": ${source.message}`, { cause: source });

		// copy over custom properties that aren't represented
		for (const sourceKey of Object.keys(source)) {
			if (!(sourceKey in this)) {
				this[sourceKey] = source[sourceKey];
			}
		}
	}
}

//-----------------------------------------------------------------------------
// Main
//-----------------------------------------------------------------------------

/**
 * Represents an object validation/merging schema.
 */
class ObjectSchema {
	/**
	 * Track all definitions in the schema by key.
	 * @type {Map<string, PropertyDefinition>}
	 */
	#definitions = new Map();

	/**
	 * Separately track any keys that are required for faster validtion.
	 * @type {Map<string, PropertyDefinition>}
	 */
	#requiredKeys = new Map();

	/**
	 * Creates a new instance.
	 * @param {ObjectDefinition} definitions The schema definitions.
	 * @throws {Error} When the definitions are missing or invalid.
	 */
	constructor(definitions) {
		if (!definitions) {
			throw new Error("Schema definitions missing.");
		}

		// add in all strategies
		for (const key of Object.keys(definitions)) {
			validateDefinition(key, definitions[key]);

			// normalize merge and validate methods if subschema is present
			if (typeof definitions[key].schema === "object") {
				const schema = new ObjectSchema(definitions[key].schema);
				definitions[key] = {
					...definitions[key],
					merge(first = {}, second = {}) {
						return schema.merge(first, second);
					},
					validate(value) {
						ValidationStrategy.object(value);
						schema.validate(value);
					},
				};
			}

			// normalize the merge method in case there's a string
			if (typeof definitions[key].merge === "string") {
				definitions[key] = {
					...definitions[key],
					merge: MergeStrategy[
						/** @type {string} */ (definitions[key].merge)
					],
				};
			}

			// normalize the validate method in case there's a string
			if (typeof definitions[key].validate === "string") {
				definitions[key] = {
					...definitions[key],
					validate:
						ValidationStrategy[
							/** @type {string} */ (definitions[key].validate)
						],
				};
			}

			this.#definitions.set(key, definitions[key]);

			if (definitions[key].required) {
				this.#requiredKeys.set(key, definitions[key]);
			}
		}
	}

	/**
	 * Determines if a strategy has been registered for the given object key.
	 * @param {string} key The object key to find a strategy for.
	 * @returns {boolean} True if the key has a strategy registered, false if not.
	 */
	hasKey(key) {
		return this.#definitions.has(key);
	}

	/**
	 * Merges objects together to create a new object comprised of the keys
	 * of the all objects. Keys are merged based on the each key's merge
	 * strategy.
	 * @param {...Object} objects The objects to merge.
	 * @returns {Object} A new object with a mix of all objects' keys.
	 * @throws {TypeError} If any object is invalid.
	 */
	merge(...objects) {
		// double check arguments
		if (objects.length < 2) {
			throw new TypeError("merge() requires at least two arguments.");
		}

		if (
			objects.some(
				object => object === null || typeof object !== "object",
			)
		) {
			throw new TypeError("All arguments must be objects.");
		}

		return objects.reduce((result, object) => {
			this.validate(object);

			for (const [key, strategy] of this.#definitions) {
				try {
					if (key in result || key in object) {
						const merge = /** @type {Function} */ (strategy.merge);
						const value = merge.call(
							this,
							result[key],
							object[key],
						);
						if (value !== undefined) {
							result[key] = value;
						}
					}
				} catch (ex) {
					throw new WrapperError(key, ex);
				}
			}
			return result;
		}, {});
	}

	/**
	 * Validates an object's keys based on the validate strategy for each key.
	 * @param {Object} object The object to validate.
	 * @returns {void}
	 * @throws {Error} When the object is invalid.
	 */
	validate(object) {
		// check existing keys first
		for (const key of Object.keys(object)) {
			// check to see if the key is defined
			if (!this.hasKey(key)) {
				throw new UnexpectedKeyError(key);
			}

			// validate existing keys
			const definition = this.#definitions.get(key);

			// first check to see if any other keys are required
			if (Array.isArray(definition.requires)) {
				if (
					!definition.requires.every(otherKey => otherKey in object)
				) {
					throw new MissingDependentKeysError(
						key,
						definition.requires,
					);
				}
			}

			// now apply remaining validation strategy
			try {
				const validate = /** @type {Function} */ (definition.validate);
				validate.call(definition, object[key]);
			} catch (ex) {
				throw new WrapperError(key, ex);
			}
		}

		// ensure required keys aren't missing
		for (const [key] of this.#requiredKeys) {
			if (!(key in object)) {
				throw new MissingKeyError(key);
			}
		}
	}
}

exports.MergeStrategy = MergeStrategy;
exports.ObjectSchema = ObjectSchema;
exports.ValidationStrategy = ValidationStrategy;
