import { fullUnicode } from '../../fullUnicode.js';
import { oneof } from '../../oneof.js';
import { mapToConstant } from '../../mapToConstant.js';
import { safeCharCodeAt, safeNumberToString, encodeURIComponent, safeMapGet, safeMapSet } from '../../../utils/globals.js';
const SMap = Map;
const safeStringFromCharCode = String.fromCharCode;
const lowerCaseMapper = { num: 26, build: (v) => safeStringFromCharCode(v + 0x61) };
const upperCaseMapper = { num: 26, build: (v) => safeStringFromCharCode(v + 0x41) };
const numericMapper = { num: 10, build: (v) => safeStringFromCharCode(v + 0x30) };
function percentCharArbMapper(c) {
    const encoded = encodeURIComponent(c);
    return c !== encoded ? encoded : `%${safeNumberToString(safeCharCodeAt(c, 0), 16)}`;
}
function percentCharArbUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    const decoded = decodeURIComponent(value);
    return decoded;
}
const percentCharArb = fullUnicode().map(percentCharArbMapper, percentCharArbUnmapper);
let lowerAlphaArbitrary = undefined;
export function getOrCreateLowerAlphaArbitrary() {
    if (lowerAlphaArbitrary === undefined) {
        lowerAlphaArbitrary = mapToConstant(lowerCaseMapper);
    }
    return lowerAlphaArbitrary;
}
let lowerAlphaNumericArbitraries = undefined;
export function getOrCreateLowerAlphaNumericArbitrary(others) {
    if (lowerAlphaNumericArbitraries === undefined) {
        lowerAlphaNumericArbitraries = new SMap();
    }
    let match = safeMapGet(lowerAlphaNumericArbitraries, others);
    if (match === undefined) {
        match = mapToConstant(lowerCaseMapper, numericMapper, {
            num: others.length,
            build: (v) => others[v],
        });
        safeMapSet(lowerAlphaNumericArbitraries, others, match);
    }
    return match;
}
function buildAlphaNumericArbitrary(others) {
    return mapToConstant(lowerCaseMapper, upperCaseMapper, numericMapper, {
        num: others.length,
        build: (v) => others[v],
    });
}
let alphaNumericPercentArbitraries = undefined;
export function getOrCreateAlphaNumericPercentArbitrary(others) {
    if (alphaNumericPercentArbitraries === undefined) {
        alphaNumericPercentArbitraries = new SMap();
    }
    let match = safeMapGet(alphaNumericPercentArbitraries, others);
    if (match === undefined) {
        match = oneof({ weight: 10, arbitrary: buildAlphaNumericArbitrary(others) }, { weight: 1, arbitrary: percentCharArb });
        safeMapSet(alphaNumericPercentArbitraries, others, match);
    }
    return match;
}
