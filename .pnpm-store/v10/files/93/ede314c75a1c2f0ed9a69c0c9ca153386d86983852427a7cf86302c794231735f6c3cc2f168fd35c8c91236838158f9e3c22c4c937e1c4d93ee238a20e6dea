"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ulid = ulid;
const tuple_1 = require("./tuple");
const integer_1 = require("./integer");
const UintToBase32String_1 = require("./_internals/mappers/UintToBase32String");
const padded10Mapper = (0, UintToBase32String_1.paddedUintToBase32StringMapper)(10);
const padded8Mapper = (0, UintToBase32String_1.paddedUintToBase32StringMapper)(8);
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
        (0, UintToBase32String_1.uintToBase32StringUnmapper)(value.slice(0, 10)),
        (0, UintToBase32String_1.uintToBase32StringUnmapper)(value.slice(10, 18)),
        (0, UintToBase32String_1.uintToBase32StringUnmapper)(value.slice(18)),
    ];
}
function ulid() {
    const timestampPartArbitrary = (0, integer_1.integer)({ min: 0, max: 0xffffffffffff });
    const randomnessPartOneArbitrary = (0, integer_1.integer)({ min: 0, max: 0xffffffffff });
    const randomnessPartTwoArbitrary = (0, integer_1.integer)({ min: 0, max: 0xffffffffff });
    return (0, tuple_1.tuple)(timestampPartArbitrary, randomnessPartOneArbitrary, randomnessPartTwoArbitrary).map(ulidMapper, ulidUnmapper);
}
