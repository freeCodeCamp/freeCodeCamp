export = Range;
/**
 * @typedef {[number, boolean]} RangeValue
 */
/**
 * @callback RangeValueCallback
 * @param {RangeValue} rangeValue
 * @returns {boolean}
 */
declare class Range {
  /**
   * @param {"left" | "right"} side side
   * @param {boolean} exclusive exclusive
   * @returns {">" | ">=" | "<" | "<="} operator
   */
  static getOperator(
    side: "left" | "right",
    exclusive: boolean,
  ): ">" | ">=" | "<" | "<=";
  /**
   * @param {number} value value
   * @param {boolean} logic is not logic applied
   * @param {boolean} exclusive is range exclusive
   * @returns {string} formatted right
   */
  static formatRight(value: number, logic: boolean, exclusive: boolean): string;
  /**
   * @param {number} value value
   * @param {boolean} logic is not logic applied
   * @param {boolean} exclusive is range exclusive
   * @returns {string} formatted left
   */
  static formatLeft(value: number, logic: boolean, exclusive: boolean): string;
  /**
   * @param {number} start left side value
   * @param {number} end right side value
   * @param {boolean} startExclusive is range exclusive from left side
   * @param {boolean} endExclusive is range exclusive from right side
   * @param {boolean} logic is not logic applied
   * @returns {string} formatted range
   */
  static formatRange(
    start: number,
    end: number,
    startExclusive: boolean,
    endExclusive: boolean,
    logic: boolean,
  ): string;
  /**
   * @param {Array<RangeValue>} values values
   * @param {boolean} logic is not logic applied
   * @returns {RangeValue} computed value and it's exclusive flag
   */
  static getRangeValue(values: Array<RangeValue>, logic: boolean): RangeValue;
  /** @type {Array<RangeValue>} */
  _left: Array<RangeValue>;
  /** @type {Array<RangeValue>} */
  _right: Array<RangeValue>;
  /**
   * @param {number} value value
   * @param {boolean=} exclusive true when exclusive, otherwise false
   */
  left(value: number, exclusive?: boolean | undefined): void;
  /**
   * @param {number} value value
   * @param {boolean=} exclusive true when exclusive, otherwise false
   */
  right(value: number, exclusive?: boolean | undefined): void;
  /**
   * @param {boolean} logic is not logic applied
   * @returns {string} "smart" range string representation
   */
  format(logic?: boolean): string;
}
declare namespace Range {
  export { RangeValue, RangeValueCallback };
}
type RangeValue = [number, boolean];
type RangeValueCallback = (rangeValue: RangeValue) => boolean;
