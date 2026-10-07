"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToConstant = mapToConstant;
const nat_1 = require("./nat");
const IndexToMappedConstant_1 = require("./_internals/mappers/IndexToMappedConstant");
const globals_1 = require("../utils/globals");
function computeNumChoices(options) {
    if (options.length === 0)
        throw new globals_1.Error(`fc.mapToConstant expects at least one option`);
    let numChoices = 0;
    for (let idx = 0; idx !== options.length; ++idx) {
        if (options[idx].num < 0)
            throw new globals_1.Error(`fc.mapToConstant expects all options to have a number of entries greater or equal to zero`);
        numChoices += options[idx].num;
    }
    if (numChoices === 0)
        throw new globals_1.Error(`fc.mapToConstant expects at least one choice among options`);
    return numChoices;
}
function mapToConstant(...entries) {
    const numChoices = computeNumChoices(entries);
    return (0, nat_1.nat)({ max: numChoices - 1 }).map((0, IndexToMappedConstant_1.indexToMappedConstantMapperFor)(entries), (0, IndexToMappedConstant_1.indexToMappedConstantUnmapperFor)(entries));
}
