import { normalizeUnits } from '../units/aliases';
import { hooks } from '../utils/hooks';

var MS_PER_SECOND = 1000,
    MS_PER_MINUTE = 60 * MS_PER_SECOND,
    MS_PER_HOUR = 60 * MS_PER_MINUTE,
    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

// actual modulo - handles negative numbers (for dates before 1970):
function mod(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
}

function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return new Date(y, m, d).valueOf();
    }
}

function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return Date.UTC(y, m, d);
    }
}

export function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;
        case 'quarter':
            time = startOfDate(
                this.year(),
                this.month() - (this.month() % 3),
                1
            );
            break;
        case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;
        case 'week':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
            );
            break;
        case 'isoWeek':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
            );
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;
        case 'hour':
            time = this._d.valueOf();
            time -= mod(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
            );
            break;
        case 'minute':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_MINUTE);
            break;
        case 'second':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_SECOND);
            break;
    }

    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
}

export function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
        case 'quarter':
            time =
                startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3) + 3,
                    1
                ) - 1;
            break;
        case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
        case 'week':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                ) - 1;
            break;
        case 'isoWeek':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case 'hour':
            time = this._d.valueOf();
            time +=
                MS_PER_HOUR -
                mod(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                ) -
                1;
            break;
        case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod(time, MS_PER_MINUTE) - 1;
            break;
        case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod(time, MS_PER_SECOND) - 1;
            break;
    }

    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
}
