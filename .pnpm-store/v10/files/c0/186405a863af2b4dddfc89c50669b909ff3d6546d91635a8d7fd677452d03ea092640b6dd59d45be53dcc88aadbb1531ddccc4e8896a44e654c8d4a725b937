import * as C from './constant';

var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ":" + padStart(minuteOffset, 2, '0');
};

var monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, C.M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), C.M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var prettyUnit = function prettyUnit(u) {
  var special = {
    M: C.M,
    y: C.Y,
    w: C.W,
    d: C.D,
    D: C.DATE,
    h: C.H,
    m: C.MIN,
    s: C.S,
    ms: C.MS,
    Q: C.Q
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

export default {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};