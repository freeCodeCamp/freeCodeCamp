import { makeGetSet } from '../moment/get-set';
import { addFormatToken } from '../format/format';
import {
    addRegexToken,
    match1to2,
    match2,
    match1to2NoLeadingZero,
} from '../parse/regex';
import { addParseToken } from '../parse/token';
import { DATE } from './constants';
import toInt from '../utils/to-int';

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// PARSING

addRegexToken('D', match1to2, match1to2NoLeadingZero);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict
        ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
        : locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

export var getSetDayOfMonth = makeGetSet('Date', true);
