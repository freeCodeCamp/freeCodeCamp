import { getLocale } from './locales';
import { createUTC } from '../create/utc';

function get (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function list (format, index, field, count, setter) {
    if (typeof format === 'number') {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get(format, index, field, setter);
    }

    var i;
    var out = [];
    for (i = 0; i < count; i++) {
        out[i] = get(format, i, field, setter);
    }
    return out;
}

export function listMonths (format, index) {
    return list(format, index, 'months', 12, 'month');
}

export function listMonthsShort (format, index) {
    return list(format, index, 'monthsShort', 12, 'month');
}

export function listWeekdays (format, index) {
    return list(format, index, 'weekdays', 7, 'day');
}

export function listWeekdaysShort (format, index) {
    return list(format, index, 'weekdaysShort', 7, 'day');
}

export function listWeekdaysMin (format, index) {
    return list(format, index, 'weekdaysMin', 7, 'day');
}
