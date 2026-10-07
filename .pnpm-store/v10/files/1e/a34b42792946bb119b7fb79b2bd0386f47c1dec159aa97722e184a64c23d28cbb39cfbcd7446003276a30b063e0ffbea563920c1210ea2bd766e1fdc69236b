'use strict';
const lengthConv = new Map([
  ['in', 96],
  ['px', 1],
  ['pt', 4 / 3],
  ['pc', 16],
]);

const timeConv = new Map([
  ['s', 1000],
  ['ms', 1],
]);

const angleConv = new Map([
  ['turn', 360],
  ['deg', 1],
]);
/**
 * @param {number} number
 * @return {string}
 */
function dropLeadingZero(number) {
  const value = String(number);

  if (number % 1) {
    if (value[0] === '0') {
      return value.slice(1);
    }

    if (value[0] === '-' && value[1] === '0') {
      return '-' + value.slice(2);
    }
  }

  return value;
}
/**
 * @param {number} number
 * @param {string} originalUnit
 * @param {lengthConv | timeConv | angleConv} conversions
 * @return {string}
 */
function transform(number, originalUnit, conversions) {
  let conversionUnits = [...conversions.keys()].filter((u) => {
    return originalUnit !== u;
  });

  const base = number * /** @type {number} */ (conversions.get(originalUnit));

  return conversionUnits
    .map(
      (u) =>
        dropLeadingZero(base / /** @type {number} */ (conversions.get(u))) + u
    )
    .reduce((a, b) => (a.length < b.length ? a : b));
}

/**
 * @param {number} number
 * @param {string} unit
 * @param {{time?: boolean, length?: boolean, angle?: boolean}} options
 * @return {string}
 */
module.exports = function (number, unit, { time, length, angle }) {
  let value = dropLeadingZero(number) + (unit ? unit : '');
  let converted;
  const lowerCaseUnit = unit.toLowerCase();
  if (length !== false && lengthConv.has(lowerCaseUnit)) {
    converted = transform(number, lowerCaseUnit, lengthConv);
  }

  if (time !== false && timeConv.has(lowerCaseUnit)) {
    converted = transform(number, lowerCaseUnit, timeConv);
  }

  if (angle !== false && angleConv.has(lowerCaseUnit)) {
    converted = transform(number, lowerCaseUnit, angleConv);
  }

  if (converted && converted.length < value.length) {
    value = converted;
  }

  return value;
};
