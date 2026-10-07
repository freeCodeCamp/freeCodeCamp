/**
 * @fileoverview Types for object-schema package.
 */

/**
 * Built-in validation strategies.
 */
export type BuiltInValidationStrategy =
	| "array"
	| "boolean"
	| "number"
	| "object"
	| "object?"
	| "string"
	| "string!";

/**
 * Built-in merge strategies.
 */
export type BuiltInMergeStrategy = "assign" | "overwrite" | "replace";

/**
 * Property definition.
 */
export interface PropertyDefinition {
	/**
	 * Indicates if the property is required.
	 */
	required: boolean;

	/**
	 * The other properties that must be present when this property is used.
	 */
	requires?: string[];

	/**
	 * The strategy to merge the property.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/eslint/rewrite/pull/90#discussion_r1687206213
	merge: BuiltInMergeStrategy | ((target: any, source: any) => any);

	/**
	 * The strategy to validate the property.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/eslint/rewrite/pull/90#discussion_r1687206213
	validate: BuiltInValidationStrategy | ((value: any) => void);

	/**
	 * The schema for the object value of this property.
	 */
	schema?: ObjectDefinition;
}

/**
 * Object definition.
 */
export type ObjectDefinition = Record<string, PropertyDefinition>;
