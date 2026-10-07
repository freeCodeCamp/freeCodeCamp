//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

import { hooks as moment, setHookCallback } from './lib/utils/hooks';

moment.version = '2.30.1';

import {
    min,
    max,
    now,
    isMoment,
    momentPrototype as fn,
    createUTC as utc,
    createUnix as unix,
    createLocal as local,
    createInvalid as invalid,
    createInZone as parseZone,
} from './lib/moment/moment';

import { getCalendarFormat } from './lib/moment/calendar';

import {
    defineLocale,
    updateLocale,
    getSetGlobalLocale as locale,
    getLocale as localeData,
    listLocales as locales,
    listMonths as months,
    listMonthsShort as monthsShort,
    listWeekdays as weekdays,
    listWeekdaysMin as weekdaysMin,
    listWeekdaysShort as weekdaysShort,
} from './lib/locale/locale';

import {
    isDuration,
    createDuration as duration,
    getSetRelativeTimeRounding as relativeTimeRounding,
    getSetRelativeTimeThreshold as relativeTimeThreshold,
} from './lib/duration/duration';

import { normalizeUnits } from './lib/units/units';

import isDate from './lib/utils/is-date';

setHookCallback(local);

moment.fn = fn;
moment.min = min;
moment.max = max;
moment.now = now;
moment.utc = utc;
moment.unix = unix;
moment.months = months;
moment.isDate = isDate;
moment.locale = locale;
moment.invalid = invalid;
moment.duration = duration;
moment.isMoment = isMoment;
moment.weekdays = weekdays;
moment.parseZone = parseZone;
moment.localeData = localeData;
moment.isDuration = isDuration;
moment.monthsShort = monthsShort;
moment.weekdaysMin = weekdaysMin;
moment.defineLocale = defineLocale;
moment.updateLocale = updateLocale;
moment.locales = locales;
moment.weekdaysShort = weekdaysShort;
moment.normalizeUnits = normalizeUnits;
moment.relativeTimeRounding = relativeTimeRounding;
moment.relativeTimeThreshold = relativeTimeThreshold;
moment.calendarFormat = getCalendarFormat;
moment.prototype = fn;

// currently HTML5 input type only supports 24-hour formats
moment.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM', // <input type="month" />
};

export default moment;
