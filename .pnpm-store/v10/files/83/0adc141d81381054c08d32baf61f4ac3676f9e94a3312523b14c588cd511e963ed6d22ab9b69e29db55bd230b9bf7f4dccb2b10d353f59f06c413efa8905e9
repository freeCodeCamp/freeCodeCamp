import { integer } from './integer.js';
import { noBias } from './noBias.js';
function booleanMapper(v) {
    return v === 1;
}
function booleanUnmapper(v) {
    if (typeof v !== 'boolean')
        throw new Error('Unsupported input type');
    return v === true ? 1 : 0;
}
function boolean() {
    return noBias(integer({ min: 0, max: 1 }).map(booleanMapper, booleanUnmapper));
}
export { boolean };
