import { IsDate } from './date.mjs';
import { IsTime } from './time.mjs';
/**
 * Returns true if the value is a ISO8601 DateTime string
 * @source ajv-formats
 * @example `2020-12-12T20:20:40+00:00`
 */
export function IsDateTime(value, strictTimeZone = true) {
    const dateTime = value.split(/T/i);
    return dateTime.length === 2 && IsDate(dateTime[0]) && IsTime(dateTime[1], strictTimeZone);
}
