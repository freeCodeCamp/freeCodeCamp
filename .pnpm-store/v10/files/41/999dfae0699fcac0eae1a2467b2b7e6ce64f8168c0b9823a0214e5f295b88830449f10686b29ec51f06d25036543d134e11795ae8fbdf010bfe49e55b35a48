"use strict";
exports.normalizeInterval = normalizeInterval;
var _index = require("./normalizeDates.cjs");

function normalizeInterval(context, interval) {
  const [start, end] = (0, _index.normalizeDates)(
    context,
    interval.start,
    interval.end,
  );
  return { start, end };
}
