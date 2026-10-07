/**
 * Test if the arg is undefined
 */
export function isUndef(arg) {
    return arg === undefined;
}
/**
 * Test if the arg is not undefined
 */
export function isDefined(arg) {
    return arg !== undefined;
}
/**
 * Test if the arg is a function
 */
export function isFunction(arg) {
    return typeof arg === "function";
}
/**
 * Test if the argument is a number.
 */
export function isNumber(arg) {
    return typeof arg === "number";
}
/**
 * Test if the given argument is an object literal (i.e. `{}`);
 */
export function isObject(arg) {
    return (Object.prototype.toString.call(arg) === "[object Object]" &&
        arg.constructor === Object);
}
/**
 * Test if the argument is a boolean.
 */
export function isBoolean(arg) {
    return typeof arg === "boolean";
}
/**
 * Test if the argument is an Array
 */
export function isArray(arg) {
    return Array.isArray(arg);
}
/**
 * Test if the argument is a string.
 */
export function isString(arg) {
    return typeof arg === "string";
}
/**
 * Test if the argument is in the form of a note in scientific pitch notation.
 * e.g. "C4"
 */
export function isNote(arg) {
    return isString(arg) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(arg);
}
//# sourceMappingURL=TypeCheck.js.map