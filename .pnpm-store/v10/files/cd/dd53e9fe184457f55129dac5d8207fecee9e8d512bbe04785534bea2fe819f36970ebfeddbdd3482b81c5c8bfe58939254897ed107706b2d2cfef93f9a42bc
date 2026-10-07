"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidV = uuidV;
const tuple_1 = require("./tuple");
const PaddedNumberArbitraryBuilder_1 = require("./_internals/builders/PaddedNumberArbitraryBuilder");
const PaddedEightsToUuid_1 = require("./_internals/mappers/PaddedEightsToUuid");
function uuidV(versionNumber) {
    const padded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0, 0xffffffff);
    const offsetSecond = versionNumber * 0x10000000;
    const secondPadded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(offsetSecond, offsetSecond + 0x0fffffff);
    const thirdPadded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0x80000000, 0xbfffffff);
    return (0, tuple_1.tuple)(padded, secondPadded, thirdPadded, padded).map(PaddedEightsToUuid_1.paddedEightsToUuidMapper, PaddedEightsToUuid_1.paddedEightsToUuidUnmapper);
}
