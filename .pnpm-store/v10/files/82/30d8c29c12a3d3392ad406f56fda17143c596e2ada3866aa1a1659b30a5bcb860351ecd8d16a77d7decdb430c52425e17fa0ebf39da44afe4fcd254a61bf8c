import { Note } from "../type/Units.js";

/**
 * Test if the arg is undefined
 */
export function isUndef(arg: any): arg is undefined {
	return arg === undefined;
}

/**
 * Test if the arg is not undefined
 */
export function isDefined<T>(arg: T | undefined): arg is T {
	return arg !== undefined;
}

/**
 * Test if the arg is a function
 */
export function isFunction(arg: any): arg is (a: any) => any {
	return typeof arg === "function";
}

/**
 * Test if the argument is a number.
 */
export function isNumber(arg: any): arg is number {
	return typeof arg === "number";
}

/**
 * Test if the given argument is an object literal (i.e. `{}`);
 */
export function isObject(arg: any): arg is object {
	return (
		Object.prototype.toString.call(arg) === "[object Object]" &&
		arg.constructor === Object
	);
}

/**
 * Test if the argument is a boolean.
 */
export function isBoolean(arg: any): arg is boolean {
	return typeof arg === "boolean";
}

/**
 * Test if the argument is an Array
 */
export function isArray(arg: any): arg is any[] {
	return Array.isArray(arg);
}

/**
 * Test if the argument is a string.
 */
export function isString(arg: any): arg is string {
	return typeof arg === "string";
}

/**
 * Test if the argument is in the form of a note in scientific pitch notation.
 * e.g. "C4"
 */
export function isNote(arg: any): arg is Note {
	return isString(arg) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(arg);
}
