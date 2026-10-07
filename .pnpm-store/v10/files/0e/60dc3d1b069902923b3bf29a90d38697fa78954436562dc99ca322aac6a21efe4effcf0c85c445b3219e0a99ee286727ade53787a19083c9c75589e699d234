import { safeGetTime } from '../utils/globals.js';
import { integer } from './integer.js';
import { timeToDateMapper, timeToDateMapperWithNaN, timeToDateUnmapper, timeToDateUnmapperWithNaN, } from './_internals/mappers/TimeToDate.js';
const safeNumberIsNaN = Number.isNaN;
export function date(constraints = {}) {
    const intMin = constraints.min !== undefined ? safeGetTime(constraints.min) : -8640000000000000;
    const intMax = constraints.max !== undefined ? safeGetTime(constraints.max) : 8640000000000000;
    const noInvalidDate = constraints.noInvalidDate === undefined || constraints.noInvalidDate;
    if (safeNumberIsNaN(intMin))
        throw new Error('fc.date min must be valid instance of Date');
    if (safeNumberIsNaN(intMax))
        throw new Error('fc.date max must be valid instance of Date');
    if (intMin > intMax)
        throw new Error('fc.date max must be greater or equal to min');
    if (noInvalidDate) {
        return integer({ min: intMin, max: intMax }).map(timeToDateMapper, timeToDateUnmapper);
    }
    const valueForNaN = intMax + 1;
    return integer({ min: intMin, max: intMax + 1 }).map(timeToDateMapperWithNaN(valueForNaN), timeToDateUnmapperWithNaN(valueForNaN));
}
