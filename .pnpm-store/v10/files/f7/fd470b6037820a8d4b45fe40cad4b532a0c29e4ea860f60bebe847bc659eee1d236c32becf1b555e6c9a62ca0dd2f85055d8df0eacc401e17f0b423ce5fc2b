import hasOwnProp from '../utils/has-own-prop';

var aliases = {
    D: 'date',
    dates: 'date',
    date: 'date',
    d: 'day',
    days: 'day',
    day: 'day',
    e: 'weekday',
    weekdays: 'weekday',
    weekday: 'weekday',
    E: 'isoWeekday',
    isoweekdays: 'isoWeekday',
    isoweekday: 'isoWeekday',
    DDD: 'dayOfYear',
    dayofyears: 'dayOfYear',
    dayofyear: 'dayOfYear',
    h: 'hour',
    hours: 'hour',
    hour: 'hour',
    ms: 'millisecond',
    milliseconds: 'millisecond',
    millisecond: 'millisecond',
    m: 'minute',
    minutes: 'minute',
    minute: 'minute',
    M: 'month',
    months: 'month',
    month: 'month',
    Q: 'quarter',
    quarters: 'quarter',
    quarter: 'quarter',
    s: 'second',
    seconds: 'second',
    second: 'second',
    gg: 'weekYear',
    weekyears: 'weekYear',
    weekyear: 'weekYear',
    GG: 'isoWeekYear',
    isoweekyears: 'isoWeekYear',
    isoweekyear: 'isoWeekYear',
    w: 'week',
    weeks: 'week',
    week: 'week',
    W: 'isoWeek',
    isoweeks: 'isoWeek',
    isoweek: 'isoWeek',
    y: 'year',
    years: 'year',
    year: 'year',
};

export function normalizeUnits(units) {
    return typeof units === 'string'
        ? aliases[units] || aliases[units.toLowerCase()]
        : undefined;
}

export function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}
