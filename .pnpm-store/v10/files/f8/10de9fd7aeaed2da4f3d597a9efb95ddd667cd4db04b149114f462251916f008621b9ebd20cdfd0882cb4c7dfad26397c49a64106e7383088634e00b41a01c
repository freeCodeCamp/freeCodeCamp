"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullThrowsReasons = exports.nullThrows = void 0;
/**
 * A set of common reasons for calling nullThrows
 */
const NullThrowsReasons = {
    MissingParent: 'Expected node to have a parent.',
    MissingToken: (token, thing) => `Expected to find a ${token} for the ${thing}.`,
};
exports.NullThrowsReasons = NullThrowsReasons;
/**
 * Assert that a value must not be null or undefined.
 * This is a nice explicit alternative to the non-null assertion operator.
 */
function nullThrows(value, message) {
    // this function is primarily used to keep types happy in a safe way
    // i.e. is used when we expect that a value is never nullish
    // this means that it's pretty much impossible to test the below if...
    // so ignore it in coverage metrics.
    /* istanbul ignore if */
    if (value == null) {
        throw new Error(`Non-null Assertion Failed: ${message}`);
    }
    return value;
}
exports.nullThrows = nullThrows;
//# sourceMappingURL=nullThrows.js.map