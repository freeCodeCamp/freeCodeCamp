"use strict";
exports.normalizeDates = normalizeDates;
var _index = require("../constructFrom.cjs");

function normalizeDates(context, ...dates) {
  const normalize = _index.constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}
