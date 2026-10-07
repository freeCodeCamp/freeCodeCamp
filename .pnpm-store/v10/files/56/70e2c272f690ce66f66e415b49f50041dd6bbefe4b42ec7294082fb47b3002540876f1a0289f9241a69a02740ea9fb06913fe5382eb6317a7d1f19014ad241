"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = date;
const globals_1 = require("../utils/globals");
const integer_1 = require("./integer");
const TimeToDate_1 = require("./_internals/mappers/TimeToDate");
const safeNumberIsNaN = Number.isNaN;
function date(constraints = {}) {
    const intMin = constraints.min !== undefined ? (0, globals_1.safeGetTime)(constraints.min) : -8640000000000000;
    const intMax = constraints.max !== undefined ? (0, globals_1.safeGetTime)(constraints.max) : 8640000000000000;
    const noInvalidDate = constraints.noInvalidDate === undefined || constraints.noInvalidDate;
    if (safeNumberIsNaN(intMin))
        throw new Error('fc.date min must be valid instance of Date');
    if (safeNumberIsNaN(intMax))
        throw new Error('fc.date max must be valid instance of Date');
    if (intMin > intMax)
        throw new Error('fc.date max must be greater or equal to min');
    if (noInvalidDate) {
        return (0, integer_1.integer)({ min: intMin, max: intMax }).map(TimeToDate_1.timeToDateMapper, TimeToDate_1.timeToDateUnmapper);
    }
    const valueForNaN = intMax + 1;
    return (0, integer_1.integer)({ min: intMin, max: intMax + 1 }).map((0, TimeToDate_1.timeToDateMapperWithNaN)(valueForNaN), (0, TimeToDate_1.timeToDateUnmapperWithNaN)(valueForNaN));
}
