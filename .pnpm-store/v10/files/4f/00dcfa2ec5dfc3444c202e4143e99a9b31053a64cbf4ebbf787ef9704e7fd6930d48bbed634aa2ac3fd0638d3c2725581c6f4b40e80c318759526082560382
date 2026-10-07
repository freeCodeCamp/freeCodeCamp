"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipV6 = ipV6;
const array_1 = require("./array");
const oneof_1 = require("./oneof");
const hexaString_1 = require("./hexaString");
const tuple_1 = require("./tuple");
const ipV4_1 = require("./ipV4");
const EntitiesToIPv6_1 = require("./_internals/mappers/EntitiesToIPv6");
function h16sTol32Mapper([a, b]) {
    return `${a}:${b}`;
}
function h16sTol32Unmapper(value) {
    if (typeof value !== 'string')
        throw new Error('Invalid type');
    if (!value.includes(':'))
        throw new Error('Invalid value');
    return value.split(':', 2);
}
function ipV6() {
    const h16Arb = (0, hexaString_1.hexaString)({ minLength: 1, maxLength: 4, size: 'max' });
    const ls32Arb = (0, oneof_1.oneof)((0, tuple_1.tuple)(h16Arb, h16Arb).map(h16sTol32Mapper, h16sTol32Unmapper), (0, ipV4_1.ipV4)());
    return (0, oneof_1.oneof)((0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 6, maxLength: 6, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.fullySpecifiedMapper, EntitiesToIPv6_1.fullySpecifiedUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 5, maxLength: 5, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.onlyTrailingMapper, EntitiesToIPv6_1.onlyTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 1, size: 'max' }), (0, array_1.array)(h16Arb, { minLength: 4, maxLength: 4, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.multiTrailingMapper, EntitiesToIPv6_1.multiTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 2, size: 'max' }), (0, array_1.array)(h16Arb, { minLength: 3, maxLength: 3, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.multiTrailingMapper, EntitiesToIPv6_1.multiTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 3, size: 'max' }), (0, array_1.array)(h16Arb, { minLength: 2, maxLength: 2, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.multiTrailingMapper, EntitiesToIPv6_1.multiTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 4, size: 'max' }), h16Arb, ls32Arb).map(EntitiesToIPv6_1.multiTrailingMapperOne, EntitiesToIPv6_1.multiTrailingUnmapperOne), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 5, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.singleTrailingMapper, EntitiesToIPv6_1.singleTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 6, size: 'max' }), h16Arb).map(EntitiesToIPv6_1.singleTrailingMapper, EntitiesToIPv6_1.singleTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 7, size: 'max' })).map(EntitiesToIPv6_1.noTrailingMapper, EntitiesToIPv6_1.noTrailingUnmapper));
}
