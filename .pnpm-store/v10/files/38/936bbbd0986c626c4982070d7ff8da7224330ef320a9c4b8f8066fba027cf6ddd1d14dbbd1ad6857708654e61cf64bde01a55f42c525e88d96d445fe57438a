import { double } from './double.js';
import { array } from './array.js';
import { Float64Array } from '../utils/globals.js';
function toTypedMapper(data) {
    return Float64Array.from(data);
}
function fromTypedUnmapper(value) {
    if (!(value instanceof Float64Array))
        throw new Error('Unexpected type');
    return [...value];
}
export function float64Array(constraints = {}) {
    return array(double(constraints), constraints).map(toTypedMapper, fromTypedUnmapper);
}
