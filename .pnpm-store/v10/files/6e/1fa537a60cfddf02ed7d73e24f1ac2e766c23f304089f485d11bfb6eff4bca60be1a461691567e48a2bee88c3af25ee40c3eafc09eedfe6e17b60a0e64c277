"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DT_SEPARATOR = /t|\s/i;
const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
const TIME = /^(\d\d):(\d\d):(\d\d)(?:\.\d+)?(?:z|([+-]\d\d)(?::?(\d\d))?)$/i;
const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validTimestamp(str, allowDate) {
    // http://tools.ietf.org/html/rfc3339#section-5.6
    const dt = str.split(DT_SEPARATOR);
    return ((dt.length === 2 && validDate(dt[0]) && validTime(dt[1])) ||
        (allowDate && dt.length === 1 && validDate(dt[0])));
}
exports.default = validTimestamp;
function validDate(str) {
    const matches = DATE.exec(str);
    if (!matches)
        return false;
    const y = +matches[1];
    const m = +matches[2];
    const d = +matches[3];
    return (m >= 1 &&
        m <= 12 &&
        d >= 1 &&
        (d <= DAYS[m] ||
            // leap year: https://tools.ietf.org/html/rfc3339#appendix-C
            (m === 2 && d === 29 && (y % 100 === 0 ? y % 400 === 0 : y % 4 === 0))));
}
function validTime(str) {
    const matches = TIME.exec(str);
    if (!matches)
        return false;
    const hr = +matches[1];
    const min = +matches[2];
    const sec = +matches[3];
    const tzH = +(matches[4] || 0);
    const tzM = +(matches[5] || 0);
    return ((hr <= 23 && min <= 59 && sec <= 59) ||
        // leap second
        (hr - tzH === 23 && min - tzM === 59 && sec === 60));
}
validTimestamp.code = 'require("ajv/dist/runtime/timestamp").default';
//# sourceMappingURL=timestamp.js.map