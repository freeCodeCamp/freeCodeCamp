import { tuple } from './tuple.js';
import { integer } from './integer.js';
import { paddedUintToBase32StringMapper, uintToBase32StringUnmapper } from './_internals/mappers/UintToBase32String.js';
const padded10Mapper = paddedUintToBase32StringMapper(10);
const padded8Mapper = paddedUintToBase32StringMapper(8);
function ulidMapper(parts) {
    return (padded10Mapper(parts[0]) +
        padded8Mapper(parts[1]) +
        padded8Mapper(parts[2]));
}
function ulidUnmapper(value) {
    if (typeof value !== 'string' || value.length !== 26) {
        throw new Error('Unsupported type');
    }
    return [
        uintToBase32StringUnmapper(value.slice(0, 10)),
        uintToBase32StringUnmapper(value.slice(10, 18)),
        uintToBase32StringUnmapper(value.slice(18)),
    ];
}
export function ulid() {
    const timestampPartArbitrary = integer({ min: 0, max: 0xffffffffffff });
    const randomnessPartOneArbitrary = integer({ min: 0, max: 0xffffffffff });
    const randomnessPartTwoArbitrary = integer({ min: 0, max: 0xffffffffff });
    return tuple(timestampPartArbitrary, randomnessPartOneArbitrary, randomnessPartTwoArbitrary).map(ulidMapper, ulidUnmapper);
}
