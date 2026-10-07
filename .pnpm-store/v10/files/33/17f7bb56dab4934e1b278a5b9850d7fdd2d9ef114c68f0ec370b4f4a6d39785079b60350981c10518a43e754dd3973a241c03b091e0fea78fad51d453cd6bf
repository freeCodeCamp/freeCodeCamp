"use strict";
exports.formatRelative = void 0;
var _index = require("../../../isSameWeek.cjs");

const adjectivesLastWeek = {
  masculine: "ostatni",
  feminine: "ostatnia",
};

const adjectivesThisWeek = {
  masculine: "ten",
  feminine: "ta",
};

const adjectivesNextWeek = {
  masculine: "następny",
  feminine: "następna",
};

const dayGrammaticalGender = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine",
};

function dayAndTimeWithAdjective(token, date, baseDate, options) {
  let adjectives;
  if ((0, _index.isSameWeek)(date, baseDate, options)) {
    adjectives = adjectivesThisWeek;
  } else if (token === "lastWeek") {
    adjectives = adjectivesLastWeek;
  } else if (token === "nextWeek") {
    adjectives = adjectivesNextWeek;
  } else {
    throw new Error(`Cannot determine adjectives for token ${token}`);
  }

  const day = date.getDay();
  const grammaticalGender = dayGrammaticalGender[day];

  const adjective = adjectives[grammaticalGender];

  return `'${adjective}' eeee 'o' p`;
}

const formatRelativeLocale = {
  lastWeek: dayAndTimeWithAdjective,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: dayAndTimeWithAdjective,
  other: "P",
};

const formatRelative = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(token, date, baseDate, options);
  }

  return format;
};
exports.formatRelative = formatRelative;
