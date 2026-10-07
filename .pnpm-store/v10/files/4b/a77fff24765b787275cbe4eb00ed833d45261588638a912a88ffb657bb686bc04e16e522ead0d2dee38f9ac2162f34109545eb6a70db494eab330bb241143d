import { array } from './array.js';
import { oneof } from './oneof.js';
import { hexaString } from './hexaString.js';
import { tuple } from './tuple.js';
import { ipV4 } from './ipV4.js';
import { fullySpecifiedMapper, fullySpecifiedUnmapper, onlyTrailingMapper, onlyTrailingUnmapper, multiTrailingMapper, multiTrailingUnmapper, multiTrailingMapperOne, multiTrailingUnmapperOne, singleTrailingMapper, singleTrailingUnmapper, noTrailingMapper, noTrailingUnmapper, } from './_internals/mappers/EntitiesToIPv6.js';
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
export function ipV6() {
    const h16Arb = hexaString({ minLength: 1, maxLength: 4, size: 'max' });
    const ls32Arb = oneof(tuple(h16Arb, h16Arb).map(h16sTol32Mapper, h16sTol32Unmapper), ipV4());
    return oneof(tuple(array(h16Arb, { minLength: 6, maxLength: 6, size: 'max' }), ls32Arb).map(fullySpecifiedMapper, fullySpecifiedUnmapper), tuple(array(h16Arb, { minLength: 5, maxLength: 5, size: 'max' }), ls32Arb).map(onlyTrailingMapper, onlyTrailingUnmapper), tuple(array(h16Arb, { minLength: 0, maxLength: 1, size: 'max' }), array(h16Arb, { minLength: 4, maxLength: 4, size: 'max' }), ls32Arb).map(multiTrailingMapper, multiTrailingUnmapper), tuple(array(h16Arb, { minLength: 0, maxLength: 2, size: 'max' }), array(h16Arb, { minLength: 3, maxLength: 3, size: 'max' }), ls32Arb).map(multiTrailingMapper, multiTrailingUnmapper), tuple(array(h16Arb, { minLength: 0, maxLength: 3, size: 'max' }), array(h16Arb, { minLength: 2, maxLength: 2, size: 'max' }), ls32Arb).map(multiTrailingMapper, multiTrailingUnmapper), tuple(array(h16Arb, { minLength: 0, maxLength: 4, size: 'max' }), h16Arb, ls32Arb).map(multiTrailingMapperOne, multiTrailingUnmapperOne), tuple(array(h16Arb, { minLength: 0, maxLength: 5, size: 'max' }), ls32Arb).map(singleTrailingMapper, singleTrailingUnmapper), tuple(array(h16Arb, { minLength: 0, maxLength: 6, size: 'max' }), h16Arb).map(singleTrailingMapper, singleTrailingUnmapper), tuple(array(h16Arb, { minLength: 0, maxLength: 7, size: 'max' })).map(noTrailingMapper, noTrailingUnmapper));
}
