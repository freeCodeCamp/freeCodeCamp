import { Map, safeMapGet, safeMapSet } from '../../../utils/globals.js';
const safeObjectIs = Object.is;
export function isSubarrayOf(source, small) {
    const countMap = new Map();
    let countMinusZero = 0;
    for (const sourceEntry of source) {
        if (safeObjectIs(sourceEntry, -0)) {
            ++countMinusZero;
        }
        else {
            const oldCount = safeMapGet(countMap, sourceEntry) || 0;
            safeMapSet(countMap, sourceEntry, oldCount + 1);
        }
    }
    for (let index = 0; index !== small.length; ++index) {
        if (!(index in small)) {
            return false;
        }
        const smallEntry = small[index];
        if (safeObjectIs(smallEntry, -0)) {
            if (countMinusZero === 0)
                return false;
            --countMinusZero;
        }
        else {
            const oldCount = safeMapGet(countMap, smallEntry) || 0;
            if (oldCount === 0)
                return false;
            safeMapSet(countMap, smallEntry, oldCount - 1);
        }
    }
    return true;
}
