"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyIntegersAfterThisValue = exports.maxNonIntegerValue = void 0;
exports.refineConstraintsForFloatOnly = refineConstraintsForFloatOnly;
exports.floatOnlyMapper = floatOnlyMapper;
exports.floatOnlyUnmapper = floatOnlyUnmapper;
const FloatHelpers_1 = require("./FloatHelpers");
const FloatingOnlyHelpers_1 = require("./FloatingOnlyHelpers");
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
const safeMaxValue = FloatHelpers_1.MAX_VALUE_32;
exports.maxNonIntegerValue = 8388607.5;
exports.onlyIntegersAfterThisValue = 8388608;
function refineConstraintsForFloatOnly(constraints) {
    return (0, FloatingOnlyHelpers_1.refineConstraintsForFloatingOnly)(constraints, safeMaxValue, exports.maxNonIntegerValue, exports.onlyIntegersAfterThisValue);
}
function floatOnlyMapper(value) {
    return value === exports.onlyIntegersAfterThisValue
        ? safePositiveInfinity
        : value === -exports.onlyIntegersAfterThisValue
            ? safeNegativeInfinity
            : value;
}
function floatOnlyUnmapper(value) {
    if (typeof value !== 'number')
        throw new Error('Unsupported type');
    return value === safePositiveInfinity
        ? exports.onlyIntegersAfterThisValue
        : value === safeNegativeInfinity
            ? -exports.onlyIntegersAfterThisValue
            : value;
}
