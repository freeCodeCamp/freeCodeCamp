import absFloor from '../utils/abs-floor';
import absCeil from '../utils/abs-ceil';

export function bubble() {
    var milliseconds = this._milliseconds,
        days = this._days,
        months = this._months,
        data = this._data,
        seconds,
        minutes,
        hours,
        years,
        monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (
        !(
            (milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0)
        )
    ) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;

    hours = absFloor(minutes / 60);
    data.hours = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
}

export function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return (days * 4800) / 146097;
}

export function monthsToDays(months) {
    // the reverse of daysToMonths
    return (months * 146097) / 4800;
}
