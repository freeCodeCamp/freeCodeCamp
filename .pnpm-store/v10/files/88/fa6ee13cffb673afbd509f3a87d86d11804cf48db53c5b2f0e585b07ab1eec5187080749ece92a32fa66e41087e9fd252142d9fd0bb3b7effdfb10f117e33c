"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateLowerAlphaArbitrary = getOrCreateLowerAlphaArbitrary;
exports.getOrCreateLowerAlphaNumericArbitrary = getOrCreateLowerAlphaNumericArbitrary;
exports.getOrCreateAlphaNumericPercentArbitrary = getOrCreateAlphaNumericPercentArbitrary;
const fullUnicode_1 = require("../../fullUnicode");
const oneof_1 = require("../../oneof");
const mapToConstant_1 = require("../../mapToConstant");
const globals_1 = require("../../../utils/globals");
const SMap = Map;
const safeStringFromCharCode = String.fromCharCode;
const lowerCaseMapper = { num: 26, build: (v) => safeStringFromCharCode(v + 0x61) };
const upperCaseMapper = { num: 26, build: (v) => safeStringFromCharCode(v + 0x41) };
const numericMapper = { num: 10, build: (v) => safeStringFromCharCode(v + 0x30) };
function percentCharArbMapper(c) {
    const encoded = (0, globals_1.encodeURIComponent)(c);
    return c !== encoded ? encoded : `%${(0, globals_1.safeNumberToString)((0, globals_1.safeCharCodeAt)(c, 0), 16)}`;
}
function percentCharArbUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    const decoded = decodeURIComponent(value);
    return decoded;
}
const percentCharArb = (0, fullUnicode_1.fullUnicode)().map(percentCharArbMapper, percentCharArbUnmapper);
let lowerAlphaArbitrary = undefined;
function getOrCreateLowerAlphaArbitrary() {
    if (lowerAlphaArbitrary === undefined) {
        lowerAlphaArbitrary = (0, mapToConstant_1.mapToConstant)(lowerCaseMapper);
    }
    return lowerAlphaArbitrary;
}
let lowerAlphaNumericArbitraries = undefined;
function getOrCreateLowerAlphaNumericArbitrary(others) {
    if (lowerAlphaNumericArbitraries === undefined) {
        lowerAlphaNumericArbitraries = new SMap();
    }
    let match = (0, globals_1.safeMapGet)(lowerAlphaNumericArbitraries, others);
    if (match === undefined) {
        match = (0, mapToConstant_1.mapToConstant)(lowerCaseMapper, numericMapper, {
            num: others.length,
            build: (v) => others[v],
        });
        (0, globals_1.safeMapSet)(lowerAlphaNumericArbitraries, others, match);
    }
    return match;
}
function buildAlphaNumericArbitrary(others) {
    return (0, mapToConstant_1.mapToConstant)(lowerCaseMapper, upperCaseMapper, numericMapper, {
        num: others.length,
        build: (v) => others[v],
    });
}
let alphaNumericPercentArbitraries = undefined;
function getOrCreateAlphaNumericPercentArbitrary(others) {
    if (alphaNumericPercentArbitraries === undefined) {
        alphaNumericPercentArbitraries = new SMap();
    }
    let match = (0, globals_1.safeMapGet)(alphaNumericPercentArbitraries, others);
    if (match === undefined) {
        match = (0, oneof_1.oneof)({ weight: 10, arbitrary: buildAlphaNumericArbitrary(others) }, { weight: 1, arbitrary: percentCharArb });
        (0, globals_1.safeMapSet)(alphaNumericPercentArbitraries, others, match);
    }
    return match;
}
