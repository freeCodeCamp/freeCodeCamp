import { integer } from '../../integer.js';
import { numberToPaddedEightMapper, numberToPaddedEightUnmapper } from '../mappers/NumberToPaddedEight.js';
export function buildPaddedNumberArbitrary(min, max) {
    return integer({ min, max }).map(numberToPaddedEightMapper, numberToPaddedEightUnmapper);
}
