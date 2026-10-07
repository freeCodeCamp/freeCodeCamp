import { readConfigureGlobal } from '../../../check/runner/configuration/GlobalParameters.js';
import { safeIndexOf } from '../../../utils/globals.js';
const safeMathFloor = Math.floor;
const safeMathMin = Math.min;
export const MaxLengthUpperBound = 0x7fffffff;
const orderedSize = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
const orderedRelativeSize = ['-4', '-3', '-2', '-1', '=', '+1', '+2', '+3', '+4'];
export const DefaultSize = 'small';
export function maxLengthFromMinLength(minLength, size) {
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
export function relativeSizeToSize(size, defaultSize) {
    const sizeInRelative = safeIndexOf(orderedRelativeSize, size);
    if (sizeInRelative === -1) {
        return size;
    }
    const defaultSizeInSize = safeIndexOf(orderedSize, defaultSize);
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
export function maxGeneratedLengthFromSizeForArbitrary(size, minLength, maxLength, specifiedMaxLength) {
    const { baseSize: defaultSize = DefaultSize, defaultSizeToMaxWhenMaxSpecified } = readConfigureGlobal() || {};
    const definedSize = size !== undefined ? size : specifiedMaxLength && defaultSizeToMaxWhenMaxSpecified ? 'max' : defaultSize;
    if (definedSize === 'max') {
        return maxLength;
    }
    const finalSize = relativeSizeToSize(definedSize, defaultSize);
    return safeMathMin(maxLengthFromMinLength(minLength, finalSize), maxLength);
}
export function depthBiasFromSizeForArbitrary(depthSizeOrSize, specifiedMaxDepth) {
    if (typeof depthSizeOrSize === 'number') {
        return 1 / depthSizeOrSize;
    }
    const { baseSize: defaultSize = DefaultSize, defaultSizeToMaxWhenMaxSpecified } = readConfigureGlobal() || {};
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
export function resolveSize(size) {
    const { baseSize: defaultSize = DefaultSize } = readConfigureGlobal() || {};
    if (size === undefined) {
        return defaultSize;
    }
    return relativeSizeToSize(size, defaultSize);
}
