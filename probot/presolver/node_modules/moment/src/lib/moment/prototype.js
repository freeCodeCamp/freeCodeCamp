import { Moment } from './constructor';

var proto = Moment.prototype;

import { add, subtract } from './add-subtract';
import { calendar, getCalendarFormat } from './calendar';
import { clone } from './clone';
import { isBefore, isBetween, isSame, isAfter, isSameOrAfter, isSameOrBefore } from './compare';
import { diff } from './diff';
import { format, toString, toISOString, inspect } from './format';
import { from, fromNow } from './from';
import { to, toNow } from './to';
import { stringGet, stringSet } from './get-set';
import { locale, localeData, lang } from './locale';
import { prototypeMin, prototypeMax } from './min-max';
import { startOf, endOf } from './start-end-of';
import { valueOf, toDate, toArray, toObject, toJSON, unix } from './to-type';
import { isValid, parsingFlags, invalidAt } from './valid';
import { creationData } from './creation-data';

proto.add               = add;
proto.calendar          = calendar;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
import { getSetYear, getIsLeapYear } from '../units/year';
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
import { getSetWeekYear, getSetISOWeekYear, getWeeksInYear, getISOWeeksInYear } from '../units/week-year';
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
import { getSetQuarter } from '../units/quarter';
proto.quarter = proto.quarters = getSetQuarter;

// Month
import { getSetMonth, getDaysInMonth } from '../units/month';
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
import { getSetWeek, getSetISOWeek } from '../units/week';
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
import { getSetDayOfMonth } from '../units/day-of-month';
import { getSetDayOfWeek, getSetISODayOfWeek, getSetLocaleDayOfWeek } from '../units/day-of-week';
import { getSetDayOfYear } from '../units/day-of-year';
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
import { getSetHour } from '../units/hour';
proto.hour = proto.hours = getSetHour;

// Minute
import { getSetMinute } from '../units/minute';
proto.minute = proto.minutes = getSetMinute;

// Second
import { getSetSecond } from '../units/second';
proto.second = proto.seconds = getSetSecond;

// Millisecond
import { getSetMillisecond } from '../units/millisecond';
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
import {
    getSetOffset,
    setOffsetToUTC,
    setOffsetToLocal,
    setOffsetToParsedOffset,
    hasAlignedHourOffset,
    isDaylightSavingTime,
    isDaylightSavingTimeShifted,
    getSetZone,
    isLocal,
    isUtcOffset,
    isUtc
} from '../units/offset';
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
import { getZoneAbbr, getZoneName } from '../units/timezone';
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
import { deprecate } from '../utils/deprecate';
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

export default proto;
