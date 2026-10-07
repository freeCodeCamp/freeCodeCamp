import { tuple } from './tuple.js';
import { buildPaddedNumberArbitrary } from './_internals/builders/PaddedNumberArbitraryBuilder.js';
import { paddedEightsToUuidMapper, paddedEightsToUuidUnmapper } from './_internals/mappers/PaddedEightsToUuid.js';
export function uuidV(versionNumber) {
    const padded = buildPaddedNumberArbitrary(0, 0xffffffff);
    const offsetSecond = versionNumber * 0x10000000;
    const secondPadded = buildPaddedNumberArbitrary(offsetSecond, offsetSecond + 0x0fffffff);
    const thirdPadded = buildPaddedNumberArbitrary(0x80000000, 0xbfffffff);
    return tuple(padded, secondPadded, thirdPadded, padded).map(paddedEightsToUuidMapper, paddedEightsToUuidUnmapper);
}
