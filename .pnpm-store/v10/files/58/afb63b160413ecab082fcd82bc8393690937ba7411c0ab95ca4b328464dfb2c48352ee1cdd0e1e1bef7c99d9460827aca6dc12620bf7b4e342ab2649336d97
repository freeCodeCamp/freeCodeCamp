"use strict";
exports.formatRFC7231 = formatRFC7231;
var _index = require("./_lib/addLeadingZeros.cjs");
var _index2 = require("./isValid.cjs");
var _index3 = require("./toDate.cjs");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @param date - The original date
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */
function formatRFC7231(date) {
  const _date = (0, _index3.toDate)(date);

  if (!(0, _index2.isValid)(_date)) {
    throw new RangeError("Invalid time value");
  }

  const dayName = days[_date.getUTCDay()];
  const dayOfMonth = (0, _index.addLeadingZeros)(_date.getUTCDate(), 2);
  const monthName = months[_date.getUTCMonth()];
  const year = _date.getUTCFullYear();

  const hour = (0, _index.addLeadingZeros)(_date.getUTCHours(), 2);
  const minute = (0, _index.addLeadingZeros)(_date.getUTCMinutes(), 2);
  const second = (0, _index.addLeadingZeros)(_date.getUTCSeconds(), 2);

  // Result variables.
  return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`;
}
