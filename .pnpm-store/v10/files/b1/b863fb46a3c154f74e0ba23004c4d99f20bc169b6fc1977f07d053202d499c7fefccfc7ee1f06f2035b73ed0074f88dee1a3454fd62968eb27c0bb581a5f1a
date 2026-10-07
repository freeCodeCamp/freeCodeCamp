import { normalizeUnits, normalizeObjectUnits } from '../units/aliases';
import { getPrioritizedUnits } from '../units/priorities';
import { hooks } from '../utils/hooks';
import isFunction from '../utils/is-function';
import { isLeapYear } from '../units/year';

export function makeGetSet(unit, keepTime) {
    return function (value) {
        if (value != null) {
            set(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

export function get(mom, unit) {
    if (!mom.isValid()) {
        return NaN;
    }

    var d = mom._d,
        isUTC = mom._isUTC;

    switch (unit) {
        case 'Milliseconds':
            return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
        case 'Seconds':
            return isUTC ? d.getUTCSeconds() : d.getSeconds();
        case 'Minutes':
            return isUTC ? d.getUTCMinutes() : d.getMinutes();
        case 'Hours':
            return isUTC ? d.getUTCHours() : d.getHours();
        case 'Date':
            return isUTC ? d.getUTCDate() : d.getDate();
        case 'Day':
            return isUTC ? d.getUTCDay() : d.getDay();
        case 'Month':
            return isUTC ? d.getUTCMonth() : d.getMonth();
        case 'FullYear':
            return isUTC ? d.getUTCFullYear() : d.getFullYear();
        default:
            return NaN; // Just in case
    }
}

export function set(mom, unit, value) {
    var d, isUTC, year, month, date;

    if (!mom.isValid() || isNaN(value)) {
        return;
    }

    d = mom._d;
    isUTC = mom._isUTC;

    switch (unit) {
        case 'Milliseconds':
            return void (isUTC
                ? d.setUTCMilliseconds(value)
                : d.setMilliseconds(value));
        case 'Seconds':
            return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
        case 'Minutes':
            return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
        case 'Hours':
            return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
        case 'Date':
            return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
        // case 'Day': // Not real
        //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
        // case 'Month': // Not used because we need to pass two variables
        //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
        case 'FullYear':
            break; // See below ...
        default:
            return; // Just in case
    }

    year = value;
    month = mom.month();
    date = mom.date();
    date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
    void (isUTC
        ? d.setUTCFullYear(year, month, date)
        : d.setFullYear(year, month, date));
}

// MOMENTS

export function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}

export function stringSet(units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units),
            i,
            prioritizedLen = prioritized.length;
        for (i = 0; i < prioritizedLen; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}
