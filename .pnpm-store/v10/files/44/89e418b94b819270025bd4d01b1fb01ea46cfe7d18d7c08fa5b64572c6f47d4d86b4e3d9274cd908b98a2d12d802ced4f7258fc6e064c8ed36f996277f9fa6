import { Date, Error, safeGetTime } from '../../../utils/globals.js';
const safeNaN = Number.NaN;
const safeNumberIsNaN = Number.isNaN;
export function timeToDateMapper(time) {
    return new Date(time);
}
export function timeToDateUnmapper(value) {
    if (!(value instanceof Date) || value.constructor !== Date) {
        throw new Error('Not a valid value for date unmapper');
    }
    return safeGetTime(value);
}
export function timeToDateMapperWithNaN(valueForNaN) {
    return (time) => {
        return time === valueForNaN ? new Date(safeNaN) : timeToDateMapper(time);
    };
}
export function timeToDateUnmapperWithNaN(valueForNaN) {
    return (value) => {
        const time = timeToDateUnmapper(value);
        return safeNumberIsNaN(time) ? valueForNaN : time;
    };
}
