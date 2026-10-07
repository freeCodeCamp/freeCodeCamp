const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
function IsLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
/**
 * Returns true if the value is a ISO8601 Date component string
 * @source ajv-formats
 * @example `2020-12-12`
 */
export function IsDate(value) {
    const matches = DATE.exec(value);
    if (!matches)
        return false;
    const year = +matches[1];
    const month = +matches[2];
    const day = +matches[3];
    return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && IsLeapYear(year) ? 29 : DAYS[month]);
}
