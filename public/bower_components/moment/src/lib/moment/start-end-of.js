import { normalizeUnits } from '../units/aliases';

export function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
    case 'year':
        this.month(0);
        /* falls through */
    case 'quarter':
    case 'month':
        this.date(1);
        /* falls through */
    case 'week':
    case 'isoWeek':
    case 'day':
        this.hours(0);
        /* falls through */
    case 'hour':
        this.minutes(0);
        /* falls through */
    case 'minute':
        this.seconds(0);
        /* falls through */
    case 'second':
        this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

export function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }
    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}
