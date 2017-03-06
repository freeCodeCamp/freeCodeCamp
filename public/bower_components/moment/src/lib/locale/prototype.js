import { Locale } from './constructor';

var proto = Locale.prototype;

import { defaultCalendar, calendar } from './calendar';
import { defaultLongDateFormat, longDateFormat } from './formats';
import { defaultInvalidDate, invalidDate } from './invalid';
import { defaultOrdinal, ordinal, defaultOrdinalParse } from './ordinal';
import { preParsePostFormat } from './pre-post-format';
import { defaultRelativeTime, relativeTime, pastFuture } from './relative';
import { set } from './set';

proto._calendar       = defaultCalendar;
proto.calendar        = calendar;
proto._longDateFormat = defaultLongDateFormat;
proto.longDateFormat  = longDateFormat;
proto._invalidDate    = defaultInvalidDate;
proto.invalidDate     = invalidDate;
proto._ordinal        = defaultOrdinal;
proto.ordinal         = ordinal;
proto._ordinalParse   = defaultOrdinalParse;
proto.preparse        = preParsePostFormat;
proto.postformat      = preParsePostFormat;
proto._relativeTime   = defaultRelativeTime;
proto.relativeTime    = relativeTime;
proto.pastFuture      = pastFuture;
proto.set             = set;

// Month
import {
    localeMonthsParse,
    defaultLocaleMonths,      localeMonths,
    defaultLocaleMonthsShort, localeMonthsShort
} from '../units/month';

proto.months       =        localeMonths;
proto._months      = defaultLocaleMonths;
proto.monthsShort  =        localeMonthsShort;
proto._monthsShort = defaultLocaleMonthsShort;
proto.monthsParse  =        localeMonthsParse;

// Week
import { localeWeek, defaultLocaleWeek, localeFirstDayOfYear, localeFirstDayOfWeek } from '../units/week';
proto.week = localeWeek;
proto._week = defaultLocaleWeek;
proto.firstDayOfYear = localeFirstDayOfYear;
proto.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
import {
    localeWeekdaysParse,
    defaultLocaleWeekdays,      localeWeekdays,
    defaultLocaleWeekdaysMin,   localeWeekdaysMin,
    defaultLocaleWeekdaysShort, localeWeekdaysShort
} from '../units/day-of-week';

proto.weekdays       =        localeWeekdays;
proto._weekdays      = defaultLocaleWeekdays;
proto.weekdaysMin    =        localeWeekdaysMin;
proto._weekdaysMin   = defaultLocaleWeekdaysMin;
proto.weekdaysShort  =        localeWeekdaysShort;
proto._weekdaysShort = defaultLocaleWeekdaysShort;
proto.weekdaysParse  =        localeWeekdaysParse;

// Hours
import { localeIsPM, defaultLocaleMeridiemParse, localeMeridiem } from '../units/hour';

proto.isPM = localeIsPM;
proto._meridiemParse = defaultLocaleMeridiemParse;
proto.meridiem = localeMeridiem;
