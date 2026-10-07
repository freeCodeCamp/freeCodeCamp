"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullySpecifiedMapper = fullySpecifiedMapper;
exports.fullySpecifiedUnmapper = fullySpecifiedUnmapper;
exports.onlyTrailingMapper = onlyTrailingMapper;
exports.onlyTrailingUnmapper = onlyTrailingUnmapper;
exports.multiTrailingMapper = multiTrailingMapper;
exports.multiTrailingUnmapper = multiTrailingUnmapper;
exports.multiTrailingMapperOne = multiTrailingMapperOne;
exports.multiTrailingUnmapperOne = multiTrailingUnmapperOne;
exports.singleTrailingMapper = singleTrailingMapper;
exports.singleTrailingUnmapper = singleTrailingUnmapper;
exports.noTrailingMapper = noTrailingMapper;
exports.noTrailingUnmapper = noTrailingUnmapper;
const globals_1 = require("../../../utils/globals");
function readBh(value) {
    if (value.length === 0)
        return [];
    else
        return (0, globals_1.safeSplit)(value, ':');
}
function extractEhAndL(value) {
    const valueSplits = (0, globals_1.safeSplit)(value, ':');
    if (valueSplits.length >= 2 && valueSplits[valueSplits.length - 1].length <= 4) {
        return [
            (0, globals_1.safeSlice)(valueSplits, 0, valueSplits.length - 2),
            `${valueSplits[valueSplits.length - 2]}:${valueSplits[valueSplits.length - 1]}`,
        ];
    }
    return [(0, globals_1.safeSlice)(valueSplits, 0, valueSplits.length - 1), valueSplits[valueSplits.length - 1]];
}
function fullySpecifiedMapper(data) {
    return `${(0, globals_1.safeJoin)(data[0], ':')}:${data[1]}`;
}
function fullySpecifiedUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    return extractEhAndL(value);
}
function onlyTrailingMapper(data) {
    return `::${(0, globals_1.safeJoin)(data[0], ':')}:${data[1]}`;
}
function onlyTrailingUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    if (!(0, globals_1.safeStartsWith)(value, '::'))
        throw new Error('Invalid value');
    return extractEhAndL((0, globals_1.safeSubstring)(value, 2));
}
function multiTrailingMapper(data) {
    return `${(0, globals_1.safeJoin)(data[0], ':')}::${(0, globals_1.safeJoin)(data[1], ':')}:${data[2]}`;
}
function multiTrailingUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    const [bhString, trailingString] = (0, globals_1.safeSplit)(value, '::', 2);
    const [eh, l] = extractEhAndL(trailingString);
    return [readBh(bhString), eh, l];
}
function multiTrailingMapperOne(data) {
    return multiTrailingMapper([data[0], [data[1]], data[2]]);
}
function multiTrailingUnmapperOne(value) {
    const out = multiTrailingUnmapper(value);
    return [out[0], (0, globals_1.safeJoin)(out[1], ':'), out[2]];
}
function singleTrailingMapper(data) {
    return `${(0, globals_1.safeJoin)(data[0], ':')}::${data[1]}`;
}
function singleTrailingUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    const [bhString, trailing] = (0, globals_1.safeSplit)(value, '::', 2);
    return [readBh(bhString), trailing];
}
function noTrailingMapper(data) {
    return `${(0, globals_1.safeJoin)(data[0], ':')}::`;
}
function noTrailingUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    if (!(0, globals_1.safeEndsWith)(value, '::'))
        throw new Error('Invalid value');
    return [readBh((0, globals_1.safeSubstring)(value, 0, value.length - 2))];
}
