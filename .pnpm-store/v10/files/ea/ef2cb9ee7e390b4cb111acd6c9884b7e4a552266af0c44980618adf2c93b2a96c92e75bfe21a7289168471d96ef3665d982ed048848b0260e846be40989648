"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSize = exports.MaxLengthUpperBound = void 0;
exports.maxLengthFromMinLength = maxLengthFromMinLength;
exports.relativeSizeToSize = relativeSizeToSize;
exports.maxGeneratedLengthFromSizeForArbitrary = maxGeneratedLengthFromSizeForArbitrary;
exports.depthBiasFromSizeForArbitrary = depthBiasFromSizeForArbitrary;
exports.resolveSize = resolveSize;
const GlobalParameters_1 = require("../../../check/runner/configuration/GlobalParameters");
const globals_1 = require("../../../utils/globals");
const safeMathFloor = Math.floor;
const safeMathMin = Math.min;
exports.MaxLengthUpperBound = 0x7fffffff;
const orderedSize = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
const orderedRelativeSize = ['-4', '-3', '-2', '-1', '=', '+1', '+2', '+3', '+4'];
exports.DefaultSize = 'small';
function maxLengthFromMinLength(minLength, size) {
    switch (size) {
        case 'xsmall':
            return safeMathFloor(1.1 * minLength) + 1;
        case 'small':
            return 2 * minLength + 10;
        case 'medium':
            return 11 * minLength + 100;
        case 'large':
            return 101 * minLength + 1000;
        case 'xlarge':
            return 1001 * minLength + 10000;
        default:
            throw new Error(`Unable to compute lengths based on received size: ${size}`);
    }
}
function relativeSizeToSize(size, defaultSize) {
    const sizeInRelative = (0, globals_1.safeIndexOf)(orderedRelativeSize, size);
    if (sizeInRelative === -1) {
        return size;
    }
    const defaultSizeInSize = (0, globals_1.safeIndexOf)(orderedSize, defaultSize);
    if (defaultSizeInSize === -1) {
        throw new Error(`Unable to offset size based on the unknown defaulted one: ${defaultSize}`);
    }
    const resultingSizeInSize = defaultSizeInSize + sizeInRelative - 4;
    return resultingSizeInSize < 0
        ? orderedSize[0]
        : resultingSizeInSize >= orderedSize.length
            ? orderedSize[orderedSize.length - 1]
            : orderedSize[resultingSizeInSize];
}
function maxGeneratedLengthFromSizeForArbitrary(size, minLength, maxLength, specifiedMaxLength) {
    const { baseSize: defaultSize = exports.DefaultSize, defaultSizeToMaxWhenMaxSpecified } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
    const definedSize = size !== undefined ? size : specifiedMaxLength && defaultSizeToMaxWhenMaxSpecified ? 'max' : defaultSize;
    if (definedSize === 'max') {
        return maxLength;
    }
    const finalSize = relativeSizeToSize(definedSize, defaultSize);
    return safeMathMin(maxLengthFromMinLength(minLength, finalSize), maxLength);
}
function depthBiasFromSizeForArbitrary(depthSizeOrSize, specifiedMaxDepth) {
    if (typeof depthSizeOrSize === 'number') {
        return 1 / depthSizeOrSize;
    }
    const { baseSize: defaultSize = exports.DefaultSize, defaultSizeToMaxWhenMaxSpecified } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
    const definedSize = depthSizeOrSize !== undefined
        ? depthSizeOrSize
        : specifiedMaxDepth && defaultSizeToMaxWhenMaxSpecified
            ? 'max'
            : defaultSize;
    if (definedSize === 'max') {
        return 0;
    }
    const finalSize = relativeSizeToSize(definedSize, defaultSize);
    switch (finalSize) {
        case 'xsmall':
            return 1;
        case 'small':
            return 0.5;
        case 'medium':
            return 0.25;
        case 'large':
            return 0.125;
        case 'xlarge':
            return 0.0625;
    }
}
function resolveSize(size) {
    const { baseSize: defaultSize = exports.DefaultSize } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
    if (size === undefined) {
        return defaultSize;
    }
    return relativeSizeToSize(size, defaultSize);
}
