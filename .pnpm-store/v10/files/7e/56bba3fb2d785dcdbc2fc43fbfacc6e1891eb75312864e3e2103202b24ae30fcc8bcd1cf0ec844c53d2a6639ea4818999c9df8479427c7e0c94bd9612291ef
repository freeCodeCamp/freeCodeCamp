"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyIntegersAfterThisValue = exports.maxNonIntegerValue = void 0;
exports.refineConstraintsForDoubleOnly = refineConstraintsForDoubleOnly;
exports.doubleOnlyMapper = doubleOnlyMapper;
exports.doubleOnlyUnmapper = doubleOnlyUnmapper;
const FloatingOnlyHelpers_1 = require("./FloatingOnlyHelpers");
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
const safeMaxValue = Number.MAX_VALUE;
exports.maxNonIntegerValue = 4503599627370495.5;
exports.onlyIntegersAfterThisValue = 4503599627370496;
function refineConstraintsForDoubleOnly(constraints) {
    return (0, FloatingOnlyHelpers_1.refineConstraintsForFloatingOnly)(constraints, safeMaxValue, exports.maxNonIntegerValue, exports.onlyIntegersAfterThisValue);
}
function doubleOnlyMapper(value) {
    return value === exports.onlyIntegersAfterThisValue
        ? safePositiveInfinity
        : value === -exports.onlyIntegersAfterThisValue
            ? safeNegativeInfinity
            : value;
}
function doubleOnlyUnmapper(value) {
    if (typeof value !== 'number')
        throw new Error('Unsupported type');
    return value === safePositiveInfinity
        ? exports.onlyIntegersAfterThisValue
        : value === safeNegativeInfinity
            ? -exports.onlyIntegersAfterThisValue
            : value;
}
