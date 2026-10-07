"use strict";

/**
 * @typedef {[number, boolean]} RangeValue
 */

/**
 * @callback RangeValueCallback
 * @param {RangeValue} rangeValue
 * @returns {boolean}
 */

class Range {
  /**
   * @param {"left" | "right"} side side
   * @param {boolean} exclusive exclusive
   * @returns {">" | ">=" | "<" | "<="} operator
   */
  static getOperator(side, exclusive) {
    if (side === "left") {
      return exclusive ? ">" : ">=";
    }
    return exclusive ? "<" : "<=";
  }

  /**
   * @param {number} value value
   * @param {boolean} logic is not logic applied
   * @param {boolean} exclusive is range exclusive
   * @returns {string} formatted right
   */
  static formatRight(value, logic, exclusive) {
    if (logic === false) {
      return Range.formatLeft(value, !logic, !exclusive);
    }
    return `should be ${Range.getOperator("right", exclusive)} ${value}`;
  }

  /**
   * @param {number} value value
   * @param {boolean} logic is not logic applied
   * @param {boolean} exclusive is range exclusive
   * @returns {string} formatted left
   */
  static formatLeft(value, logic, exclusive) {
    if (logic === false) {
      return Range.formatRight(value, !logic, !exclusive);
    }
    return `should be ${Range.getOperator("left", exclusive)} ${value}`;
  }

  /**
   * @param {number} start left side value
   * @param {number} end right side value
   * @param {boolean} startExclusive is range exclusive from left side
   * @param {boolean} endExclusive is range exclusive from right side
   * @param {boolean} logic is not logic applied
   * @returns {string} formatted range
   */
  static formatRange(start, end, startExclusive, endExclusive, logic) {
    let result = "should be";
    result += ` ${Range.getOperator(logic ? "left" : "right", logic ? startExclusive : !startExclusive)} ${start} `;
    result += logic ? "and" : "or";
    result += ` ${Range.getOperator(logic ? "right" : "left", logic ? endExclusive : !endExclusive)} ${end}`;
    return result;
  }

  /**
   * @param {Array<RangeValue>} values values
   * @param {boolean} logic is not logic applied
   * @returns {RangeValue} computed value and it's exclusive flag
   */
  static getRangeValue(values, logic) {
    let minMax = logic ? Infinity : -Infinity;
    let j = -1;
    const predicate = logic ? /** @type {RangeValueCallback} */
    ([value]) => value <= minMax : /** @type {RangeValueCallback} */
    ([value]) => value >= minMax;
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        [minMax] = values[i];
        j = i;
      }
    }
    if (j > -1) {
      return values[j];
    }
    return [Infinity, true];
  }
  constructor() {
    /** @type {Array<RangeValue>} */
    this._left = [];
    /** @type {Array<RangeValue>} */
    this._right = [];
  }

  /**
   * @param {number} value value
   * @param {boolean=} exclusive true when exclusive, otherwise false
   */
  left(value, exclusive = false) {
    this._left.push([value, exclusive]);
  }

  /**
   * @param {number} value value
   * @param {boolean=} exclusive true when exclusive, otherwise false
   */
  right(value, exclusive = false) {
    this._right.push([value, exclusive]);
  }

  /**
   * @param {boolean} logic is not logic applied
   * @returns {string} "smart" range string representation
   */
  format(logic = true) {
    const [start, leftExclusive] = Range.getRangeValue(this._left, logic);
    const [end, rightExclusive] = Range.getRangeValue(this._right, !logic);
    if (!Number.isFinite(start) && !Number.isFinite(end)) {
      return "";
    }
    const realStart = leftExclusive ? start + 1 : start;
    const realEnd = rightExclusive ? end - 1 : end;

    // e.g. 5 < x < 7, 5 < x <= 6, 6 <= x <= 6
    if (realStart === realEnd) {
      return `should be ${logic ? "" : "!"}= ${realStart}`;
    }

    // e.g. 4 < x < ∞
    if (Number.isFinite(start) && !Number.isFinite(end)) {
      return Range.formatLeft(start, logic, leftExclusive);
    }

    // e.g. ∞ < x < 4
    if (!Number.isFinite(start) && Number.isFinite(end)) {
      return Range.formatRight(end, logic, rightExclusive);
    }
    return Range.formatRange(start, end, leftExclusive, rightExclusive, logic);
  }
}
module.exports = Range;