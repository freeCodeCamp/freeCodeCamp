/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */
import { IParams, ParamsArray } from 'common/parser/Types';

// max value supported for a single param/subparam (clamped to positive int32 range)
const MAX_VALUE = 0x7FFFFFFF;
// max allowed subparams for a single sequence (hardcoded limitation)
const MAX_SUBPARAMS = 256;

/**
 * Params storage class.
 * This type is used by the parser to accumulate sequence parameters and sub parameters
 * and transmit them to the input handler actions.
 *
 * NOTES:
 *  - params object for action handlers is borrowed, use `.toArray` or `.clone` to get a copy
 *  - never read beyond `params.length - 1` (likely to contain arbitrary data)
 *  - `.getSubParams` returns a borrowed typed array, use `.getSubParamsAll` for cloned sub params
 *  - hardcoded limitations:
 *    - max. value for a single (sub) param is 2^31 - 1 (greater values are clamped to that)
 *    - max. 256 sub params possible
 *    - negative values are not allowed beside -1 (placeholder for default value)
 *
 * About ZDM (Zero Default Mode):
 * ZDM is not orchestrated by this class. If the parser is in ZDM,
 * it should add 0 for empty params, otherwise -1. This does not apply
 * to subparams, empty subparams should always be added with -1.
 */
export class Params implements IParams {
  // params store and length
  public params: Int32Array;
  public length: number;

  // sub params store and length
  protected _subParams: Int32Array;
  protected _subParamsLength: number;

  // sub params offsets from param: param idx --> [start, end] offset
  private _subParamsIdx: Uint16Array;
  private _rejectDigits: boolean;
  private _rejectSubDigits: boolean;
  private _digitIsSub: boolean;

  /**
   * Create a `Params` type from JS array representation.
   */
  public static fromArray(values: ParamsArray): Params {
    const params = new Params();
    if (!values.length) {
      return params;
    }
    // skip leading sub params
    for (let i = (Array.isArray(values[0])) ? 1 : 0; i < values.length; ++i) {
      const value = values[i];
      if (Array.isArray(value)) {
        for (let k = 0; k < value.length; ++k) {
          params.addSubParam(value[k]);
        }
      } else {
        params.addParam(value);
      }
    }
    return params;
  }

  /**
   * @param maxLength max length of storable parameters
   * @param maxSubParamsLength max length of storable sub parameters
   */
  constructor(public maxLength: number = 32, public maxSubParamsLength: number = 32) {
    if (maxSubParamsLength > MAX_SUBPARAMS) {
      throw new Error('maxSubParamsLength must not be greater than 256');
    }
    this.params = new Int32Array(maxLength);
    this.length = 0;
    this._subParams = new Int32Array(maxSubParamsLength);
    this._subParamsLength = 0;
    this._subParamsIdx = new Uint16Array(maxLength);
    this._rejectDigits = false;
    this._rejectSubDigits = false;
    this._digitIsSub = false;
  }

  /**
   * Clone object.
   */
  public clone(): Params {
    const newParams = new Params(this.maxLength, this.maxSubParamsLength);
    newParams.params.set(this.params);
    newParams.length = this.length;
    newParams._subParams.set(this._subParams);
    newParams._subParamsLength = this._subParamsLength;
    newParams._subParamsIdx.set(this._subParamsIdx);
    newParams._rejectDigits = this._rejectDigits;
    newParams._rejectSubDigits = this._rejectSubDigits;
    newParams._digitIsSub = this._digitIsSub;
    return newParams;
  }

  /**
   * Get a JS array representation of the current parameters and sub parameters.
   * The array is structured as follows:
   *    sequence: "1;2:3:4;5::6"
   *    array   : [1, 2, [3, 4], 5, [-1, 6]]
   */
  public toArray(): ParamsArray {
    const res: ParamsArray = [];
    for (let i = 0; i < this.length; ++i) {
      res.push(this.params[i]);
      const start = this._subParamsIdx[i] >> 8;
      const end = this._subParamsIdx[i] & 0xFF;
      if (end - start > 0) {
        res.push(Array.prototype.slice.call(this._subParams, start, end));
      }
    }
    return res;
  }

  /**
   * Reset to initial empty state.
   */
  public reset(): void {
    this.length = 0;
    this._subParamsLength = 0;
    this._rejectDigits = false;
    this._rejectSubDigits = false;
    this._digitIsSub = false;
  }

  /**
   * Add a parameter value.
   * `Params` only stores up to `maxLength` parameters, any later
   * parameter will be ignored.
   * Note: VT devices only stored up to 16 values, xterm seems to
   * store up to 30.
   */
  public addParam(value: number): void {
    this._digitIsSub = false;
    if (this.length >= this.maxLength) {
      this._rejectDigits = true;
      return;
    }
    if (value < -1) {
      throw new Error('values lesser than -1 are not allowed');
    }
    this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength;
    this.params[this.length++] = value > MAX_VALUE ? MAX_VALUE : value;
  }

  /**
   * Add a sub parameter value.
   * The sub parameter is automatically associated with the last parameter value.
   * Thus it is not possible to add a subparameter without any parameter added yet.
   * `Params` only stores up to `subParamsLength` sub parameters, any later
   * sub parameter will be ignored.
   */
  public addSubParam(value: number): void {
    this._digitIsSub = true;
    if (!this.length) {
      return;
    }
    if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) {
      this._rejectSubDigits = true;
      return;
    }
    if (value < -1) {
      throw new Error('values lesser than -1 are not allowed');
    }
    this._subParams[this._subParamsLength++] = value > MAX_VALUE ? MAX_VALUE : value;
    this._subParamsIdx[this.length - 1]++;
  }

  /**
   * Whether parameter at index `idx` has sub parameters.
   */
  public hasSubParams(idx: number): boolean {
    return ((this._subParamsIdx[idx] & 0xFF) - (this._subParamsIdx[idx] >> 8) > 0);
  }

  /**
   * Return sub parameters for parameter at index `idx`.
   * Note: The values are borrowed, thus you need to copy
   * the values if you need to hold them in nonlocal scope.
   */
  public getSubParams(idx: number): Int32Array | null {
    const start = this._subParamsIdx[idx] >> 8;
    const end = this._subParamsIdx[idx] & 0xFF;
    if (end - start > 0) {
      return this._subParams.subarray(start, end);
    }
    return null;
  }

  /**
   * Return all sub parameters as {idx: subparams} mapping.
   * Note: The values are not borrowed.
   */
  public getSubParamsAll(): {[idx: number]: Int32Array} {
    const result: {[idx: number]: Int32Array} = {};
    for (let i = 0; i < this.length; ++i) {
      const start = this._subParamsIdx[i] >> 8;
      const end = this._subParamsIdx[i] & 0xFF;
      if (end - start > 0) {
        result[i] = this._subParams.slice(start, end);
      }
    }
    return result;
  }

  /**
   * Add a single digit value to current parameter.
   * This is used by the parser to account digits on a char by char basis.
   */
  public addDigit(value: number): void {
    let length;
    if (this._rejectDigits
      || !(length = this._digitIsSub ? this._subParamsLength : this.length)
      || (this._digitIsSub && this._rejectSubDigits)
    ) {
      return;
    }

    const store = this._digitIsSub ? this._subParams : this.params;
    const cur = store[length - 1];
    store[length - 1] = ~cur ? Math.min(cur * 10 + value, MAX_VALUE) : value;
  }
}
