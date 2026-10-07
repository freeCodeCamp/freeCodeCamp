"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tzTokenizeDate = void 0;
/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
function tzTokenizeDate(date, timeZone) {
    const dtf = getDateTimeFormat(timeZone);
    return 'formatToParts' in dtf ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
exports.tzTokenizeDate = tzTokenizeDate;
const typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5,
};
function partsOffset(dtf, date) {
    try {
        const formatted = dtf.formatToParts(date);
        const filled = [];
        for (let i = 0; i < formatted.length; i++) {
            const pos = typeToPos[formatted[i].type];
            if (pos !== undefined) {
                filled[pos] = parseInt(formatted[i].value, 10);
            }
        }
        return filled;
    }
    catch (error) {
        if (error instanceof RangeError) {
            return [NaN];
        }
        throw error;
    }
}
function hackyOffset(dtf, date) {
    const formatted = dtf.format(date);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
    // const [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
    // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
    return [
        parseInt(parsed[3], 10),
        parseInt(parsed[1], 10),
        parseInt(parsed[2], 10),
        parseInt(parsed[4], 10),
        parseInt(parsed[5], 10),
        parseInt(parsed[6], 10),
    ];
}
// Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.
const dtfCache = {};
// New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
const testDateFormatted = new Intl.DateTimeFormat('en-US', {
    hourCycle: 'h23',
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}).format(new Date('2014-06-25T04:00:00.123Z'));
const hourCycleSupported = testDateFormatted === '06/25/2014, 00:00:00' ||
    testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';
function getDateTimeFormat(timeZone) {
    if (!dtfCache[timeZone]) {
        dtfCache[timeZone] = hourCycleSupported
            ? new Intl.DateTimeFormat('en-US', {
                hourCycle: 'h23',
                timeZone: timeZone,
                year: 'numeric',
                month: 'numeric',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
            : new Intl.DateTimeFormat('en-US', {
                hour12: false,
                timeZone: timeZone,
                year: 'numeric',
                month: 'numeric',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
    }
    return dtfCache[timeZone];
}
