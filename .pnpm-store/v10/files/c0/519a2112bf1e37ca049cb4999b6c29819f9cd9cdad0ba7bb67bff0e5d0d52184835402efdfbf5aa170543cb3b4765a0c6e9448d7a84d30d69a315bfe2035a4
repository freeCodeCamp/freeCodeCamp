import { nat } from './nat.js';
import { indexToMappedConstantMapperFor, indexToMappedConstantUnmapperFor, } from './_internals/mappers/IndexToMappedConstant.js';
import { Error } from '../utils/globals.js';
function computeNumChoices(options) {
    if (options.length === 0)
        throw new Error(`fc.mapToConstant expects at least one option`);
    let numChoices = 0;
    for (let idx = 0; idx !== options.length; ++idx) {
        if (options[idx].num < 0)
            throw new Error(`fc.mapToConstant expects all options to have a number of entries greater or equal to zero`);
        numChoices += options[idx].num;
    }
    if (numChoices === 0)
        throw new Error(`fc.mapToConstant expects at least one choice among options`);
    return numChoices;
}
export function mapToConstant(...entries) {
    const numChoices = computeNumChoices(entries);
    return nat({ max: numChoices - 1 }).map(indexToMappedConstantMapperFor(entries), indexToMappedConstantUnmapperFor(entries));
}
