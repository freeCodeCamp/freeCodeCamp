"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullThrowsReasons = void 0;
exports.nullThrows = nullThrows;
/**
 * A set of common reasons for calling nullThrows
 */
exports.NullThrowsReasons = {
    MissingParent: 'Expected node to have a parent.',
    MissingToken: (token, thing) => `Expected to find a ${token} for the ${thing}.`,
};
/**
 * Assert that a value must not be null or undefined.
 * This is a nice explicit alternative to the non-null assertion operator.
 */
function nullThrows(value, message) {
    if (value == null) {
        throw new Error(`Non-null Assertion Failed: ${message}`);
    }
    return value;
}
//# sourceMappingURL=nullThrows.js.map