import { addFormatToken } from '../format/format';
import {
    addRegexToken,
    match1to2,
    match2,
    match1to2NoLeadingZero,
} from '../parse/regex';
import { addWeekParseToken } from '../parse/token';
import toInt from '../utils/to-int';
import { weekOfYear } from './week-calendar-utils';

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// PARSING

addRegexToken('w', match1to2, match1to2NoLeadingZero);
addRegexToken('ww', match1to2, match2);
addRegexToken('W', match1to2, match1to2NoLeadingZero);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(
    ['w', 'ww', 'W', 'WW'],
    function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    }
);

// HELPERS

// LOCALES

export function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

export var defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6, // The week that contains Jan 6th is the first week of the year.
};

export function localeFirstDayOfWeek() {
    return this._week.dow;
}

export function localeFirstDayOfYear() {
    return this._week.doy;
}

// MOMENTS

export function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

export function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}
