import isNumber from '../utils/is-number';
import { getLocale } from './locales';
import { createUTC } from '../create/utc';

function get(format, index, field, setter) {
    var locale = getLocale(),
        utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get(format, index, field, 'month');
    }

    var i,
        out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0,
        i,
        out = [];

    if (index != null) {
        return get(format, (index + shift) % 7, field, 'day');
    }

    for (i = 0; i < 7; i++) {
        out[i] = get(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

export function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
}

export function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

export function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

export function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

export function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}
