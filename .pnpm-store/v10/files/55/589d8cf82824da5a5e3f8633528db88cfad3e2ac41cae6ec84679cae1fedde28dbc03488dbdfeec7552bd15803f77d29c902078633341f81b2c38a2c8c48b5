"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tzIntlTimeZoneName = void 0;
const date_fns_1 = require("date-fns");
/**
 * Returns the formatted time zone name of the provided `timeZone` or the current
 * system time zone if omitted, accounting for DST according to the UTC value of
 * the date.
 */
function tzIntlTimeZoneName(length, date, options) {
    var _a;
    const defaultOptions = (0, date_fns_1.getDefaultOptions)();
    const dtf = getDTF(length, options.timeZone, (_a = options.locale) !== null && _a !== void 0 ? _a : defaultOptions.locale);
    return 'formatToParts' in dtf ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}
exports.tzIntlTimeZoneName = tzIntlTimeZoneName;
function partsTimeZone(dtf, date) {
    const formatted = dtf.formatToParts(date);
    for (let i = formatted.length - 1; i >= 0; --i) {
        if (formatted[i].type === 'timeZoneName') {
            return formatted[i].value;
        }
    }
    return undefined;
}
function hackyTimeZone(dtf, date) {
    const formatted = dtf.format(date).replace(/\u200E/g, '');
    const tzNameMatch = / [\w-+ ]+$/.exec(formatted);
    return tzNameMatch ? tzNameMatch[0].substr(1) : '';
}
// If a locale has been provided `en-US` is used as a fallback in case it is an
// invalid locale, otherwise the locale is left undefined to use the system locale.
function getDTF(length, timeZone, locale) {
    return new Intl.DateTimeFormat(locale ? [locale.code, 'en-US'] : undefined, {
        timeZone: timeZone,
        timeZoneName: length,
    });
}
