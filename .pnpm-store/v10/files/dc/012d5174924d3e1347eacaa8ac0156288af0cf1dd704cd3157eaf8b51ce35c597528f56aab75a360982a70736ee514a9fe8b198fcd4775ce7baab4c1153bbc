import { safePop, safePush } from '../../../utils/globals.js';
const safeStringFromCodePoint = String.fromCodePoint;
const safeMathMin = Math.min;
const safeMathMax = Math.max;
export function convertGraphemeRangeToMapToConstantEntry(range) {
    if (range.length === 1) {
        const codePointString = safeStringFromCodePoint(range[0]);
        return { num: 1, build: () => codePointString };
    }
    const rangeStart = range[0];
    return { num: range[1] - range[0] + 1, build: (idInGroup) => safeStringFromCodePoint(rangeStart + idInGroup) };
}
export function intersectGraphemeRanges(rangesA, rangesB) {
    const mergedRanges = [];
    let cursorA = 0;
    let cursorB = 0;
    while (cursorA < rangesA.length && cursorB < rangesB.length) {
        const rangeA = rangesA[cursorA];
        const rangeAMin = rangeA[0];
        const rangeAMax = rangeA.length === 1 ? rangeA[0] : rangeA[1];
        const rangeB = rangesB[cursorB];
        const rangeBMin = rangeB[0];
        const rangeBMax = rangeB.length === 1 ? rangeB[0] : rangeB[1];
        if (rangeAMax < rangeBMin) {
            cursorA += 1;
        }
        else if (rangeBMax < rangeAMin) {
            cursorB += 1;
        }
        else {
            let min = safeMathMax(rangeAMin, rangeBMin);
            const max = safeMathMin(rangeAMax, rangeBMax);
            if (mergedRanges.length >= 1) {
                const lastMergedRange = mergedRanges[mergedRanges.length - 1];
                const lastMergedRangeMax = lastMergedRange.length === 1 ? lastMergedRange[0] : lastMergedRange[1];
                if (lastMergedRangeMax + 1 === min) {
                    min = lastMergedRange[0];
                    safePop(mergedRanges);
                }
            }
            safePush(mergedRanges, min === max ? [min] : [min, max]);
            if (rangeAMax <= max) {
                cursorA += 1;
            }
            if (rangeBMax <= max) {
                cursorB += 1;
            }
        }
    }
    return mergedRanges;
}
