"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
/**
 * Error strings
 */
const ERRORS = {
    INVALID_ENCODING: 'Invalid encoding provided. Please specify a valid encoding the internal Node.js Buffer supports.',
    INVALID_SMARTBUFFER_SIZE: 'Invalid size provided. Size must be a valid integer greater than zero.',
    INVALID_SMARTBUFFER_BUFFER: 'Invalid Buffer provided in SmartBufferOptions.',
    INVALID_SMARTBUFFER_OBJECT: 'Invalid SmartBufferOptions object supplied to SmartBuffer constructor or factory methods.',
    INVALID_OFFSET: 'An invalid offset value was provided.',
    INVALID_OFFSET_NON_NUMBER: 'An invalid offset value was provided. A numeric value is required.',
    INVALID_LENGTH: 'An invalid length value was provided.',
    INVALID_LENGTH_NON_NUMBER: 'An invalid length value was provived. A numeric value is required.',
    INVALID_TARGET_OFFSET: 'Target offset is beyond the bounds of the internal SmartBuffer data.',
    INVALID_TARGET_LENGTH: 'Specified length value moves cursor beyong the bounds of the internal SmartBuffer data.',
    INVALID_READ_BEYOND_BOUNDS: 'Attempted to read beyond the bounds of the managed data.',
    INVALID_WRITE_BEYOND_BOUNDS: 'Attempted to write beyond the bounds of the managed data.'
};
exports.ERRORS = ERRORS;
/**
 * Checks if a given encoding is a valid Buffer encoding. (Throws an exception if check fails)
 *
 * @param { String } encoding The encoding string to check.
 */
function checkEncoding(encoding) {
    if (!buffer_1.Buffer.isEncoding(encoding)) {
        throw new Error(ERRORS.INVALID_ENCODING);
    }
}
exports.checkEncoding = checkEncoding;
/**
 * Checks if a given number is a finite integer. (Throws an exception if check fails)
 *
 * @param { Number } value The number value to check.
 */
function isFiniteInteger(value) {
    return typeof value === 'number' && isFinite(value) && isInteger(value);
}
exports.isFiniteInteger = isFiniteInteger;
/**
 * Checks if an offset/length value is valid. (Throws an exception if check fails)
 *
 * @param value The value to check.
 * @param offset True if checking an offset, false if checking a length.
 */
function checkOffsetOrLengthValue(value, offset) {
    if (typeof value === 'number') {
        // Check for non finite/non integers
        if (!isFiniteInteger(value) || value < 0) {
            throw new Error(offset ? ERRORS.INVALID_OFFSET : ERRORS.INVALID_LENGTH);
        }
    }
    else {
        throw new Error(offset ? ERRORS.INVALID_OFFSET_NON_NUMBER : ERRORS.INVALID_LENGTH_NON_NUMBER);
    }
}
/**
 * Checks if a length value is valid. (Throws an exception if check fails)
 *
 * @param { Number } length The value to check.
 */
function checkLengthValue(length) {
    checkOffsetOrLengthValue(length, false);
}
exports.checkLengthValue = checkLengthValue;
/**
 * Checks if a offset value is valid. (Throws an exception if check fails)
 *
 * @param { Number } offset The value to check.
 */
function checkOffsetValue(offset) {
    checkOffsetOrLengthValue(offset, true);
}
exports.checkOffsetValue = checkOffsetValue;
/**
 * Checks if a target offset value is out of bounds. (Throws an exception if check fails)
 *
 * @param { Number } offset The offset value to check.
 * @param { SmartBuffer } buff The SmartBuffer instance to check against.
 */
function checkTargetOffset(offset, buff) {
    if (offset < 0 || offset > buff.length) {
        throw new Error(ERRORS.INVALID_TARGET_OFFSET);
    }
}
exports.checkTargetOffset = checkTargetOffset;
/**
 * Determines whether a given number is a integer.
 * @param value The number to check.
 */
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * Throws if Node.js version is too low to support bigint
 */
function bigIntAndBufferInt64Check(bufferMethod) {
    if (typeof BigInt === 'undefined') {
        throw new Error('Platform does not support JS BigInt type.');
    }
    if (typeof buffer_1.Buffer.prototype[bufferMethod] === 'undefined') {
        throw new Error(`Platform does not support Buffer.prototype.${bufferMethod}.`);
    }
}
exports.bigIntAndBufferInt64Check = bigIntAndBufferInt64Check;
//# sourceMappingURL=utils.js.map