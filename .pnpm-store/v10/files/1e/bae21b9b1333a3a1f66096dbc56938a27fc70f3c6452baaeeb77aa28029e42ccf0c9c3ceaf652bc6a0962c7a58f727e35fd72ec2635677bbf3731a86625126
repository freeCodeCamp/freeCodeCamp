"use strict";
exports.parsers = void 0;
var _EraParser = require("./parsers/EraParser.cjs");
var _YearParser = require("./parsers/YearParser.cjs");
var _LocalWeekYearParser = require("./parsers/LocalWeekYearParser.cjs");
var _ISOWeekYearParser = require("./parsers/ISOWeekYearParser.cjs");
var _ExtendedYearParser = require("./parsers/ExtendedYearParser.cjs");
var _QuarterParser = require("./parsers/QuarterParser.cjs");
var _StandAloneQuarterParser = require("./parsers/StandAloneQuarterParser.cjs");
var _MonthParser = require("./parsers/MonthParser.cjs");
var _StandAloneMonthParser = require("./parsers/StandAloneMonthParser.cjs");
var _LocalWeekParser = require("./parsers/LocalWeekParser.cjs");
var _ISOWeekParser = require("./parsers/ISOWeekParser.cjs");
var _DateParser = require("./parsers/DateParser.cjs");
var _DayOfYearParser = require("./parsers/DayOfYearParser.cjs");
var _DayParser = require("./parsers/DayParser.cjs");
var _LocalDayParser = require("./parsers/LocalDayParser.cjs");
var _StandAloneLocalDayParser = require("./parsers/StandAloneLocalDayParser.cjs");
var _ISODayParser = require("./parsers/ISODayParser.cjs");
var _AMPMParser = require("./parsers/AMPMParser.cjs");
var _AMPMMidnightParser = require("./parsers/AMPMMidnightParser.cjs");
var _DayPeriodParser = require("./parsers/DayPeriodParser.cjs");
var _Hour1to12Parser = require("./parsers/Hour1to12Parser.cjs");
var _Hour0to23Parser = require("./parsers/Hour0to23Parser.cjs");
var _Hour0To11Parser = require("./parsers/Hour0To11Parser.cjs");
var _Hour1To24Parser = require("./parsers/Hour1To24Parser.cjs");
var _MinuteParser = require("./parsers/MinuteParser.cjs");
var _SecondParser = require("./parsers/SecondParser.cjs");
var _FractionOfSecondParser = require("./parsers/FractionOfSecondParser.cjs");
var _ISOTimezoneWithZParser = require("./parsers/ISOTimezoneWithZParser.cjs");
var _ISOTimezoneParser = require("./parsers/ISOTimezoneParser.cjs");
var _TimestampSecondsParser = require("./parsers/TimestampSecondsParser.cjs");
var _TimestampMillisecondsParser = require("./parsers/TimestampMillisecondsParser.cjs");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
const parsers = (exports.parsers = {
  G: new _EraParser.EraParser(),
  y: new _YearParser.YearParser(),
  Y: new _LocalWeekYearParser.LocalWeekYearParser(),
  R: new _ISOWeekYearParser.ISOWeekYearParser(),
  u: new _ExtendedYearParser.ExtendedYearParser(),
  Q: new _QuarterParser.QuarterParser(),
  q: new _StandAloneQuarterParser.StandAloneQuarterParser(),
  M: new _MonthParser.MonthParser(),
  L: new _StandAloneMonthParser.StandAloneMonthParser(),
  w: new _LocalWeekParser.LocalWeekParser(),
  I: new _ISOWeekParser.ISOWeekParser(),
  d: new _DateParser.DateParser(),
  D: new _DayOfYearParser.DayOfYearParser(),
  E: new _DayParser.DayParser(),
  e: new _LocalDayParser.LocalDayParser(),
  c: new _StandAloneLocalDayParser.StandAloneLocalDayParser(),
  i: new _ISODayParser.ISODayParser(),
  a: new _AMPMParser.AMPMParser(),
  b: new _AMPMMidnightParser.AMPMMidnightParser(),
  B: new _DayPeriodParser.DayPeriodParser(),
  h: new _Hour1to12Parser.Hour1to12Parser(),
  H: new _Hour0to23Parser.Hour0to23Parser(),
  K: new _Hour0To11Parser.Hour0To11Parser(),
  k: new _Hour1To24Parser.Hour1To24Parser(),
  m: new _MinuteParser.MinuteParser(),
  s: new _SecondParser.SecondParser(),
  S: new _FractionOfSecondParser.FractionOfSecondParser(),
  X: new _ISOTimezoneWithZParser.ISOTimezoneWithZParser(),
  x: new _ISOTimezoneParser.ISOTimezoneParser(),
  t: new _TimestampSecondsParser.TimestampSecondsParser(),
  T: new _TimestampMillisecondsParser.TimestampMillisecondsParser(),
});
