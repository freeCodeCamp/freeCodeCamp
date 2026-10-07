import { safeEndsWith, safeJoin, safeSlice, safeSplit, safeStartsWith, safeSubstring } from '../../../utils/globals.js';
function readBh(value) {
    if (value.length === 0)
        return [];
    else
        return safeSplit(value, ':');
}
function extractEhAndL(value) {
    const valueSplits = safeSplit(value, ':');
    if (valueSplits.length >= 2 && valueSplits[valueSplits.length - 1].length <= 4) {
        return [
            safeSlice(valueSplits, 0, valueSplits.length - 2),
            `${valueSplits[valueSplits.length - 2]}:${valueSplits[valueSplits.length - 1]}`,
        ];
    }
    return [safeSlice(valueSplits, 0, valueSplits.length - 1), valueSplits[valueSplits.length - 1]];
}
export function fullySpecifiedMapper(data) {
    return `${safeJoin(data[0], ':')}:${data[1]}`;
}
export function fullySpecifiedUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    return extractEhAndL(value);
}
export function onlyTrailingMapper(data) {
    return `::${safeJoin(data[0], ':')}:${data[1]}`;
}
export function onlyTrailingUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    if (!safeStartsWith(value, '::'))
        throw new Error('Invalid value');
    return extractEhAndL(safeSubstring(value, 2));
}
export function multiTrailingMapper(data) {
    return `${safeJoin(data[0], ':')}::${safeJoin(data[1], ':')}:${data[2]}`;
}
export function multiTrailingUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    const [bhString, trailingString] = safeSplit(value, '::', 2);
    const [eh, l] = extractEhAndL(trailingString);
    return [readBh(bhString), eh, l];
}
export function multiTrailingMapperOne(data) {
    return multiTrailingMapper([data[0], [data[1]], data[2]]);
}
export function multiTrailingUnmapperOne(value) {
    const out = multiTrailingUnmapper(value);
    return [out[0], safeJoin(out[1], ':'), out[2]];
}
export function singleTrailingMapper(data) {
    return `${safeJoin(data[0], ':')}::${data[1]}`;
}
export function singleTrailingUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    const [bhString, trailing] = safeSplit(value, '::', 2);
    return [readBh(bhString), trailing];
}
export function noTrailingMapper(data) {
    return `${safeJoin(data[0], ':')}::`;
}
export function noTrailingUnmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    if (!safeEndsWith(value, '::'))
        throw new Error('Invalid value');
    return [readBh(safeSubstring(value, 0, value.length - 2))];
}
