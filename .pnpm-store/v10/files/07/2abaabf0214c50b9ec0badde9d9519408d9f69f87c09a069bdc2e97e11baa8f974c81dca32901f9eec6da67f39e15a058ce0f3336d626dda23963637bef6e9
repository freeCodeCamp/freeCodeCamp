'use strict';
/**
 * @type {{[key:string]: {[key:string]: number}}}
 */
const conversions = {
  // Absolute length units
  px: {
    px: 1,
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    q: 96 / 101.6,
    in: 96,
    pt: 96 / 72,
    pc: 16,
  },
  cm: {
    px: 2.54 / 96,
    cm: 1,
    mm: 0.1,
    q: 0.025,
    in: 2.54,
    pt: 2.54 / 72,
    pc: 2.54 / 6,
  },
  mm: {
    px: 25.4 / 96,
    cm: 10,
    mm: 1,
    q: 0.25,
    in: 25.4,
    pt: 25.4 / 72,
    pc: 25.4 / 6,
  },
  q: {
    px: 101.6 / 96,
    cm: 40,
    mm: 4,
    q: 1,
    in: 101.6,
    pt: 101.6 / 72,
    pc: 101.6 / 6,
  },
  in: {
    px: 1 / 96,
    cm: 1 / 2.54,
    mm: 1 / 25.4,
    q: 1 / 101.6,
    in: 1,
    pt: 1 / 72,
    pc: 1 / 6,
  },
  pt: {
    px: 0.75,
    cm: 72 / 2.54,
    mm: 72 / 25.4,
    q: 72 / 101.6,
    in: 72,
    pt: 1,
    pc: 12,
  },
  pc: {
    px: 0.0625,
    cm: 6 / 2.54,
    mm: 6 / 25.4,
    q: 6 / 101.6,
    in: 6,
    pt: 6 / 72,
    pc: 1,
  },
  // Angle units
  deg: {
    deg: 1,
    grad: 0.9,
    rad: 180 / Math.PI,
    turn: 360,
  },
  grad: {
    deg: 400 / 360,
    grad: 1,
    rad: 200 / Math.PI,
    turn: 400,
  },
  rad: {
    deg: Math.PI / 180,
    grad: Math.PI / 200,
    rad: 1,
    turn: Math.PI * 2,
  },
  turn: {
    deg: 1 / 360,
    grad: 0.0025,
    rad: 0.5 / Math.PI,
    turn: 1,
  },
  // Duration units
  s: {
    s: 1,
    ms: 0.001,
  },
  ms: {
    s: 1000,
    ms: 1,
  },
  // Frequency units
  hz: {
    hz: 1,
    khz: 1000,
  },
  khz: {
    hz: 0.001,
    khz: 1,
  },
  // Resolution units
  dpi: {
    dpi: 1,
    dpcm: 1 / 2.54,
    dppx: 1 / 96,
  },
  dpcm: {
    dpi: 2.54,
    dpcm: 1,
    dppx: 2.54 / 96,
  },
  dppx: {
    dpi: 96,
    dpcm: 96 / 2.54,
    dppx: 1,
  },
};
/**
 * @param {number} value
 * @param {string} sourceUnit
 * @param {string} targetUnit
 * @param {number|false} precision
 */
function convertUnit(value, sourceUnit, targetUnit, precision) {
  const sourceUnitNormalized = sourceUnit.toLowerCase();
  const targetUnitNormalized = targetUnit.toLowerCase();

  if (!conversions[targetUnitNormalized]) {
    throw new Error('Cannot convert to ' + targetUnit);
  }

  if (!conversions[targetUnitNormalized][sourceUnitNormalized]) {
    throw new Error('Cannot convert from ' + sourceUnit + ' to ' + targetUnit);
  }

  const converted =
    conversions[targetUnitNormalized][sourceUnitNormalized] * value;

  if (precision !== false) {
    precision = Math.pow(10, Math.ceil(precision) || 5);

    return Math.round(converted * precision) / precision;
  }

  return converted;
}

module.exports = convertUnit;
