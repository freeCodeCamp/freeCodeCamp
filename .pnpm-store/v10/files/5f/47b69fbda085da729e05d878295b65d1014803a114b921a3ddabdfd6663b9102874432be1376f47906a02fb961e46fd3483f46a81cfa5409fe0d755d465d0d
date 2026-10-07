import { makeGetSet } from '../moment/get-set';
import { addFormatToken } from '../format/format';
import {
    addRegexToken,
    match1to2,
    match2,
    match1to2HasZero,
} from '../parse/regex';
import { addParseToken } from '../parse/token';
import { MINUTE } from './constants';

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// PARSING

addRegexToken('m', match1to2, match1to2HasZero);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

export var getSetMinute = makeGetSet('Minutes', false);
