import { BSONValue } from './bson_value';
import { BSONError } from './error';
import { Long } from './long';
import { type InspectFn, defaultInspect, isUint8Array } from './parser/utils';
import { ByteUtils } from './utils/byte_utils';

const PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
const PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
const PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;

const EXPONENT_MAX = 6111;
const EXPONENT_MIN = -6176;
const EXPONENT_BIAS = 6176;
const MAX_DIGITS = 34;

// Nan value bits as 32 bit values (due to lack of longs)
const NAN_BUFFER = ByteUtils.fromNumberArray(
  [
    0x7c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
  ].reverse()
);
// Infinity value bits 32 bit values (due to lack of longs)
const INF_NEGATIVE_BUFFER = ByteUtils.fromNumberArray(
  [
    0xf8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
  ].reverse()
);
const INF_POSITIVE_BUFFER = ByteUtils.fromNumberArray(
  [
    0x78, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
  ].reverse()
);

const EXPONENT_REGEX = /^([-+])?(\d+)?$/;

// Extract least significant 5 bits
const COMBINATION_MASK = 0x1f;
// Extract least significant 14 bits
const EXPONENT_MASK = 0x3fff;
// Value of combination field for Inf
const COMBINATION_INFINITY = 30;
// Value of combination field for NaN
const COMBINATION_NAN = 31;

// Detect if the value is a digit
function isDigit(value: string): boolean {
  return !isNaN(parseInt(value, 10));
}

// Divide two uint128 values
function divideu128(value: { parts: [number, number, number, number] }) {
  const DIVISOR = Long.fromNumber(1000 * 1000 * 1000);
  let _rem = Long.fromNumber(0);

  if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
    return { quotient: value, rem: _rem };
  }

  for (let i = 0; i <= 3; i++) {
    // Adjust remainder to match value of next dividend
    _rem = _rem.shiftLeft(32);
    // Add the divided to _rem
    _rem = _rem.add(new Long(value.parts[i], 0));
    value.parts[i] = _rem.div(DIVISOR).low;
    _rem = _rem.modulo(DIVISOR);
  }

  return { quotient: value, rem: _rem };
}

// Multiply two Long values and return the 128 bit value
function multiply64x2(left: Long, right: Long): { high: Long; low: Long } {
  if (!left && !right) {
    return { high: Long.fromNumber(0), low: Long.fromNumber(0) };
  }

  const leftHigh = left.shiftRightUnsigned(32);
  const leftLow = new Long(left.getLowBits(), 0);
  const rightHigh = right.shiftRightUnsigned(32);
  const rightLow = new Long(right.getLowBits(), 0);

  let productHigh = leftHigh.multiply(rightHigh);
  let productMid = leftHigh.multiply(rightLow);
  const productMid2 = leftLow.multiply(rightHigh);
  let productLow = leftLow.multiply(rightLow);

  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productMid = new Long(productMid.getLowBits(), 0)
    .add(productMid2)
    .add(productLow.shiftRightUnsigned(32));

  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productLow = productMid.shiftLeft(32).add(new Long(productLow.getLowBits(), 0));

  // Return the 128 bit result
  return { high: productHigh, low: productLow };
}

function lessThan(left: Long, right: Long): boolean {
  // Make values unsigned
  const uhleft = left.high >>> 0;
  const uhright = right.high >>> 0;

  // Compare high bits first
  if (uhleft < uhright) {
    return true;
  } else if (uhleft === uhright) {
    const ulleft = left.low >>> 0;
    const ulright = right.low >>> 0;
    if (ulleft < ulright) return true;
  }

  return false;
}

function invalidErr(string: string, message: string) {
  throw new BSONError(`"${string}" is not a valid Decimal128 string - ${message}`);
}

/** @public */
export interface Decimal128Extended {
  $numberDecimal: string;
}

/**
 * A class representation of the BSON Decimal128 type.
 * @public
 * @category BSONType
 */
export class Decimal128 extends BSONValue {
  get _bsontype(): 'Decimal128' {
    return 'Decimal128';
  }

  readonly bytes!: Uint8Array;

  /**
   * @param bytes - a buffer containing the raw Decimal128 bytes in little endian order,
   *                or a string representation as returned by .toString()
   */
  constructor(bytes: Uint8Array | string) {
    super();
    if (typeof bytes === 'string') {
      this.bytes = Decimal128.fromString(bytes).bytes;
    } else if (bytes instanceof Uint8Array || isUint8Array(bytes)) {
      if (bytes.byteLength !== 16) {
        throw new BSONError('Decimal128 must take a Buffer of 16 bytes');
      }
      this.bytes = bytes;
    } else {
      throw new BSONError('Decimal128 must take a Buffer or string');
    }
  }

  /**
   * Create a Decimal128 instance from a string representation
   *
   * @param representation - a numeric string representation.
   */
  static fromString(representation: string): Decimal128 {
    return Decimal128._fromString(representation, { allowRounding: false });
  }

  /**
   * Create a Decimal128 instance from a string representation, allowing for rounding to 34
   * significant digits
   *
   * @example Example of a number that will be rounded
   * ```ts
   * > let d = Decimal128.fromString('37.499999999999999196428571428571375')
   * Uncaught:
   * BSONError: "37.499999999999999196428571428571375" is not a valid Decimal128 string - inexact rounding
   * at invalidErr (/home/wajames/js-bson/lib/bson.cjs:1402:11)
   * at Decimal128.fromStringInternal (/home/wajames/js-bson/lib/bson.cjs:1633:25)
   * at Decimal128.fromString (/home/wajames/js-bson/lib/bson.cjs:1424:27)
   *
   * > d = Decimal128.fromStringWithRounding('37.499999999999999196428571428571375')
   * new Decimal128("37.49999999999999919642857142857138")
   * ```
   * @param representation - a numeric string representation.
   */
  static fromStringWithRounding(representation: string): Decimal128 {
    return Decimal128._fromString(representation, { allowRounding: true });
  }

  private static _fromString(representation: string, options: { allowRounding: boolean }) {
    // Parse state tracking
    let isNegative = false;
    let sawSign = false;
    let sawRadix = false;
    let foundNonZero = false;

    // Total number of significant digits (no leading or trailing zero)
    let significantDigits = 0;
    // Total number of significand digits read
    let nDigitsRead = 0;
    // Total number of digits (no leading zeros)
    let nDigits = 0;
    // The number of the digits after radix
    let radixPosition = 0;
    // The index of the first non-zero in *str*
    let firstNonZero = 0;

    // Digits Array
    const digits = [0];
    // The number of digits in digits
    let nDigitsStored = 0;
    // Insertion pointer for digits
    let digitsInsert = 0;
    // The index of the last digit
    let lastDigit = 0;

    // Exponent
    let exponent = 0;
    // The high 17 digits of the significand
    let significandHigh = new Long(0, 0);
    // The low 17 digits of the significand
    let significandLow = new Long(0, 0);
    // The biased exponent
    let biasedExponent = 0;

    // Read index
    let index = 0;

    // Naively prevent against REDOS attacks.
    // TODO: implementing a custom parsing for this, or refactoring the regex would yield
    //       further gains.
    if (representation.length >= 7000) {
      throw new BSONError('' + representation + ' not a valid Decimal128 string');
    }

    // Results
    const stringMatch = representation.match(PARSE_STRING_REGEXP);
    const infMatch = representation.match(PARSE_INF_REGEXP);
    const nanMatch = representation.match(PARSE_NAN_REGEXP);

    // Validate the string
    if ((!stringMatch && !infMatch && !nanMatch) || representation.length === 0) {
      throw new BSONError('' + representation + ' not a valid Decimal128 string');
    }

    if (stringMatch) {
      // full_match = stringMatch[0]
      // sign = stringMatch[1]

      const unsignedNumber = stringMatch[2];
      // stringMatch[3] is undefined if a whole number (ex "1", 12")
      // but defined if a number w/ decimal in it (ex "1.0, 12.2")

      const e = stringMatch[4];
      const expSign = stringMatch[5];
      const expNumber = stringMatch[6];

      // they provided e, but didn't give an exponent number. for ex "1e"
      if (e && expNumber === undefined) invalidErr(representation, 'missing exponent power');

      // they provided e, but didn't give a number before it. for ex "e1"
      if (e && unsignedNumber === undefined) invalidErr(representation, 'missing exponent base');

      if (e === undefined && (expSign || expNumber)) {
        invalidErr(representation, 'missing e before exponent');
      }
    }

    // Get the negative or positive sign
    if (representation[index] === '+' || representation[index] === '-') {
      sawSign = true;
      isNegative = representation[index++] === '-';
    }

    // Check if user passed Infinity or NaN
    if (!isDigit(representation[index]) && representation[index] !== '.') {
      if (representation[index] === 'i' || representation[index] === 'I') {
        return new Decimal128(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER);
      } else if (representation[index] === 'N') {
        return new Decimal128(NAN_BUFFER);
      }
    }

    // Read all the digits
    while (isDigit(representation[index]) || representation[index] === '.') {
      if (representation[index] === '.') {
        if (sawRadix) invalidErr(representation, 'contains multiple periods');

        sawRadix = true;
        index = index + 1;
        continue;
      }

      if (nDigitsStored < MAX_DIGITS) {
        if (representation[index] !== '0' || foundNonZero) {
          if (!foundNonZero) {
            firstNonZero = nDigitsRead;
          }

          foundNonZero = true;

          // Only store 34 digits
          digits[digitsInsert++] = parseInt(representation[index], 10);
          nDigitsStored = nDigitsStored + 1;
        }
      }

      if (foundNonZero) nDigits = nDigits + 1;
      if (sawRadix) radixPosition = radixPosition + 1;

      nDigitsRead = nDigitsRead + 1;
      index = index + 1;
    }

    if (sawRadix && !nDigitsRead)
      throw new BSONError('' + representation + ' not a valid Decimal128 string');

    // Read exponent if exists
    if (representation[index] === 'e' || representation[index] === 'E') {
      // Read exponent digits
      const match = representation.substr(++index).match(EXPONENT_REGEX);

      // No digits read
      if (!match || !match[2]) return new Decimal128(NAN_BUFFER);

      // Get exponent
      exponent = parseInt(match[0], 10);

      // Adjust the index
      index = index + match[0].length;
    }

    // Return not a number
    if (representation[index]) return new Decimal128(NAN_BUFFER);

    // Done reading input
    // Find first non-zero digit in digits
    if (!nDigitsStored) {
      digits[0] = 0;
      nDigits = 1;
      nDigitsStored = 1;
      significantDigits = 0;
    } else {
      lastDigit = nDigitsStored - 1;
      significantDigits = nDigits;
      if (significantDigits !== 1) {
        while (
          representation[
            firstNonZero + significantDigits - 1 + Number(sawSign) + Number(sawRadix)
          ] === '0'
        ) {
          significantDigits = significantDigits - 1;
        }
      }
    }

    // Normalization of exponent
    // Correct exponent based on radix position, and shift significand as needed
    // to represent user input

    // Overflow prevention
    if (exponent <= radixPosition && radixPosition > exponent + (1 << 14)) {
      exponent = EXPONENT_MIN;
    } else {
      exponent = exponent - radixPosition;
    }

    // Attempt to normalize the exponent
    while (exponent > EXPONENT_MAX) {
      // Shift exponent to significand and decrease
      lastDigit = lastDigit + 1;
      if (lastDigit >= MAX_DIGITS) {
        // Check if we have a zero then just hard clamp, otherwise fail
        if (significantDigits === 0) {
          exponent = EXPONENT_MAX;
          break;
        }

        invalidErr(representation, 'overflow');
      }
      exponent = exponent - 1;
    }

    if (options.allowRounding) {
      while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
        // Shift last digit. can only do this if < significant digits than # stored.
        if (lastDigit === 0 && significantDigits < nDigitsStored) {
          exponent = EXPONENT_MIN;
          significantDigits = 0;
          break;
        }

        if (nDigitsStored < nDigits) {
          // adjust to match digits not stored
          nDigits = nDigits - 1;
        } else {
          // adjust to round
          lastDigit = lastDigit - 1;
        }

        if (exponent < EXPONENT_MAX) {
          exponent = exponent + 1;
        } else {
          // Check if we have a zero then just hard clamp, otherwise fail
          const digitsString = digits.join('');
          if (digitsString.match(/^0+$/)) {
            exponent = EXPONENT_MAX;
            break;
          }
          invalidErr(representation, 'overflow');
        }
      }

      // Round
      // We've normalized the exponent, but might still need to round.
      if (lastDigit + 1 < significantDigits) {
        let endOfString = nDigitsRead;

        // If we have seen a radix point, 'string' is 1 longer than we have
        // documented with ndigits_read, so inc the position of the first nonzero
        // digit and the position that digits are read to.
        if (sawRadix) {
          firstNonZero = firstNonZero + 1;
          endOfString = endOfString + 1;
        }
        // if negative, we need to increment again to account for - sign at start.
        if (sawSign) {
          firstNonZero = firstNonZero + 1;
          endOfString = endOfString + 1;
        }

        const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
        let roundBit = 0;

        if (roundDigit >= 5) {
          roundBit = 1;
          if (roundDigit === 5) {
            roundBit = digits[lastDigit] % 2 === 1 ? 1 : 0;
            for (let i = firstNonZero + lastDigit + 2; i < endOfString; i++) {
              if (parseInt(representation[i], 10)) {
                roundBit = 1;
                break;
              }
            }
          }
        }

        if (roundBit) {
          let dIdx = lastDigit;

          for (; dIdx >= 0; dIdx--) {
            if (++digits[dIdx] > 9) {
              digits[dIdx] = 0;

              // overflowed most significant digit
              if (dIdx === 0) {
                if (exponent < EXPONENT_MAX) {
                  exponent = exponent + 1;
                  digits[dIdx] = 1;
                } else {
                  return new Decimal128(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER);
                }
              }
            } else {
              break;
            }
          }
        }
      }
    } else {
      while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
        // Shift last digit. can only do this if < significant digits than # stored.
        if (lastDigit === 0) {
          if (significantDigits === 0) {
            exponent = EXPONENT_MIN;
            break;
          }

          invalidErr(representation, 'exponent underflow');
        }

        if (nDigitsStored < nDigits) {
          if (
            representation[nDigits - 1 + Number(sawSign) + Number(sawRadix)] !== '0' &&
            significantDigits !== 0
          ) {
            invalidErr(representation, 'inexact rounding');
          }
          // adjust to match digits not stored
          nDigits = nDigits - 1;
        } else {
          if (digits[lastDigit] !== 0) {
            invalidErr(representation, 'inexact rounding');
          }
          // adjust to round
          lastDigit = lastDigit - 1;
        }

        if (exponent < EXPONENT_MAX) {
          exponent = exponent + 1;
        } else {
          invalidErr(representation, 'overflow');
        }
      }

      // Round
      // We've normalized the exponent, but might still need to round.
      if (lastDigit + 1 < significantDigits) {
        // If we have seen a radix point, 'string' is 1 longer than we have
        // documented with ndigits_read, so inc the position of the first nonzero
        // digit and the position that digits are read to.
        if (sawRadix) {
          firstNonZero = firstNonZero + 1;
        }
        // if saw sign, we need to increment again to account for - or + sign at start.
        if (sawSign) {
          firstNonZero = firstNonZero + 1;
        }

        const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);

        if (roundDigit !== 0) {
          invalidErr(representation, 'inexact rounding');
        }
      }
    }

    // Encode significand
    // The high 17 digits of the significand
    significandHigh = Long.fromNumber(0);
    // The low 17 digits of the significand
    significandLow = Long.fromNumber(0);

    // read a zero
    if (significantDigits === 0) {
      significandHigh = Long.fromNumber(0);
      significandLow = Long.fromNumber(0);
    } else if (lastDigit < 17) {
      let dIdx = 0;
      significandLow = Long.fromNumber(digits[dIdx++]);
      significandHigh = new Long(0, 0);

      for (; dIdx <= lastDigit; dIdx++) {
        significandLow = significandLow.multiply(Long.fromNumber(10));
        significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
      }
    } else {
      let dIdx = 0;
      significandHigh = Long.fromNumber(digits[dIdx++]);

      for (; dIdx <= lastDigit - 17; dIdx++) {
        significandHigh = significandHigh.multiply(Long.fromNumber(10));
        significandHigh = significandHigh.add(Long.fromNumber(digits[dIdx]));
      }

      significandLow = Long.fromNumber(digits[dIdx++]);

      for (; dIdx <= lastDigit; dIdx++) {
        significandLow = significandLow.multiply(Long.fromNumber(10));
        significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
      }
    }

    const significand = multiply64x2(significandHigh, Long.fromString('100000000000000000'));
    significand.low = significand.low.add(significandLow);

    if (lessThan(significand.low, significandLow)) {
      significand.high = significand.high.add(Long.fromNumber(1));
    }

    // Biased exponent
    biasedExponent = exponent + EXPONENT_BIAS;
    const dec = { low: Long.fromNumber(0), high: Long.fromNumber(0) };

    // Encode combination, exponent, and significand.
    if (
      significand.high.shiftRightUnsigned(49).and(Long.fromNumber(1)).equals(Long.fromNumber(1))
    ) {
      // Encode '11' into bits 1 to 3
      dec.high = dec.high.or(Long.fromNumber(0x3).shiftLeft(61));
      dec.high = dec.high.or(
        Long.fromNumber(biasedExponent).and(Long.fromNumber(0x3fff).shiftLeft(47))
      );
      dec.high = dec.high.or(significand.high.and(Long.fromNumber(0x7fffffffffff)));
    } else {
      dec.high = dec.high.or(Long.fromNumber(biasedExponent & 0x3fff).shiftLeft(49));
      dec.high = dec.high.or(significand.high.and(Long.fromNumber(0x1ffffffffffff)));
    }

    dec.low = significand.low;

    // Encode sign
    if (isNegative) {
      dec.high = dec.high.or(Long.fromString('9223372036854775808'));
    }

    // Encode into a buffer
    const buffer = ByteUtils.allocateUnsafe(16);
    index = 0;

    // Encode the low 64 bits of the decimal
    // Encode low bits
    buffer[index++] = dec.low.low & 0xff;
    buffer[index++] = (dec.low.low >> 8) & 0xff;
    buffer[index++] = (dec.low.low >> 16) & 0xff;
    buffer[index++] = (dec.low.low >> 24) & 0xff;
    // Encode high bits
    buffer[index++] = dec.low.high & 0xff;
    buffer[index++] = (dec.low.high >> 8) & 0xff;
    buffer[index++] = (dec.low.high >> 16) & 0xff;
    buffer[index++] = (dec.low.high >> 24) & 0xff;

    // Encode the high 64 bits of the decimal
    // Encode low bits
    buffer[index++] = dec.high.low & 0xff;
    buffer[index++] = (dec.high.low >> 8) & 0xff;
    buffer[index++] = (dec.high.low >> 16) & 0xff;
    buffer[index++] = (dec.high.low >> 24) & 0xff;
    // Encode high bits
    buffer[index++] = dec.high.high & 0xff;
    buffer[index++] = (dec.high.high >> 8) & 0xff;
    buffer[index++] = (dec.high.high >> 16) & 0xff;
    buffer[index++] = (dec.high.high >> 24) & 0xff;

    // Return the new Decimal128
    return new Decimal128(buffer);
  }
  /** Create a string representation of the raw Decimal128 value */
  toString(): string {
    // Note: bits in this routine are referred to starting at 0,
    // from the sign bit, towards the coefficient.

    // decoded biased exponent (14 bits)
    let biased_exponent;
    // the number of significand digits
    let significand_digits = 0;
    // the base-10 digits in the significand
    const significand = new Array<number>(36);
    for (let i = 0; i < significand.length; i++) significand[i] = 0;
    // read pointer into significand
    let index = 0;

    // true if the number is zero
    let is_zero = false;

    // the most significant significand bits (50-46)
    let significand_msb;
    // temporary storage for significand decoding
    let significand128: { parts: [number, number, number, number] } = { parts: [0, 0, 0, 0] };
    // indexing variables
    let j, k;

    // Output string
    const string: string[] = [];

    // Unpack index
    index = 0;

    // Buffer reference
    const buffer = this.bytes;

    // Unpack the low 64bits into a long
    // bits 96 - 127
    const low =
      buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
    // bits 64 - 95
    const midl =
      buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);

    // Unpack the high 64bits into a long
    // bits 32 - 63
    const midh =
      buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
    // bits 0 - 31
    const high =
      buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);

    // Unpack index
    index = 0;

    // Create the state of the decimal
    const dec = {
      low: new Long(low, midl),
      high: new Long(midh, high)
    };

    if (dec.high.lessThan(Long.ZERO)) {
      string.push('-');
    }

    // Decode combination field and exponent
    // bits 1 - 5
    const combination = (high >> 26) & COMBINATION_MASK;

    if (combination >> 3 === 3) {
      // Check for 'special' values
      if (combination === COMBINATION_INFINITY) {
        return string.join('') + 'Infinity';
      } else if (combination === COMBINATION_NAN) {
        return 'NaN';
      } else {
        biased_exponent = (high >> 15) & EXPONENT_MASK;
        significand_msb = 0x08 + ((high >> 14) & 0x01);
      }
    } else {
      significand_msb = (high >> 14) & 0x07;
      biased_exponent = (high >> 17) & EXPONENT_MASK;
    }

    // unbiased exponent
    const exponent = biased_exponent - EXPONENT_BIAS;

    // Create string of significand digits

    // Convert the 114-bit binary number represented by
    // (significand_high, significand_low) to at most 34 decimal
    // digits through modulo and division.
    significand128.parts[0] = (high & 0x3fff) + ((significand_msb & 0xf) << 14);
    significand128.parts[1] = midh;
    significand128.parts[2] = midl;
    significand128.parts[3] = low;

    if (
      significand128.parts[0] === 0 &&
      significand128.parts[1] === 0 &&
      significand128.parts[2] === 0 &&
      significand128.parts[3] === 0
    ) {
      is_zero = true;
    } else {
      for (k = 3; k >= 0; k--) {
        let least_digits = 0;
        // Perform the divide
        const result = divideu128(significand128);
        significand128 = result.quotient;
        least_digits = result.rem.low;

        // We now have the 9 least significant digits (in base 2).
        // Convert and output to string.
        if (!least_digits) continue;

        for (j = 8; j >= 0; j--) {
          // significand[k * 9 + j] = Math.round(least_digits % 10);
          significand[k * 9 + j] = least_digits % 10;
          // least_digits = Math.round(least_digits / 10);
          least_digits = Math.floor(least_digits / 10);
        }
      }
    }

    // Output format options:
    // Scientific - [-]d.dddE(+/-)dd or [-]dE(+/-)dd
    // Regular    - ddd.ddd

    if (is_zero) {
      significand_digits = 1;
      significand[index] = 0;
    } else {
      significand_digits = 36;
      while (!significand[index]) {
        significand_digits = significand_digits - 1;
        index = index + 1;
      }
    }

    // the exponent if scientific notation is used
    const scientific_exponent = significand_digits - 1 + exponent;

    // The scientific exponent checks are dictated by the string conversion
    // specification and are somewhat arbitrary cutoffs.
    //
    // We must check exponent > 0, because if this is the case, the number
    // has trailing zeros.  However, we *cannot* output these trailing zeros,
    // because doing so would change the precision of the value, and would
    // change stored data if the string converted number is round tripped.
    if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
      // Scientific format

      // if there are too many significant digits, we should just be treating numbers
      // as + or - 0 and using the non-scientific exponent (this is for the "invalid
      // representation should be treated as 0/-0" spec cases in decimal128-1.json)
      if (significand_digits > 34) {
        string.push(`${0}`);
        if (exponent > 0) string.push(`E+${exponent}`);
        else if (exponent < 0) string.push(`E${exponent}`);
        return string.join('');
      }

      string.push(`${significand[index++]}`);
      significand_digits = significand_digits - 1;

      if (significand_digits) {
        string.push('.');
      }

      for (let i = 0; i < significand_digits; i++) {
        string.push(`${significand[index++]}`);
      }

      // Exponent
      string.push('E');
      if (scientific_exponent > 0) {
        string.push(`+${scientific_exponent}`);
      } else {
        string.push(`${scientific_exponent}`);
      }
    } else {
      // Regular format with no decimal place
      if (exponent >= 0) {
        for (let i = 0; i < significand_digits; i++) {
          string.push(`${significand[index++]}`);
        }
      } else {
        let radix_position = significand_digits + exponent;

        // non-zero digits before radix
        if (radix_position > 0) {
          for (let i = 0; i < radix_position; i++) {
            string.push(`${significand[index++]}`);
          }
        } else {
          string.push('0');
        }

        string.push('.');
        // add leading zeros after radix
        while (radix_position++ < 0) {
          string.push('0');
        }

        for (let i = 0; i < significand_digits - Math.max(radix_position - 1, 0); i++) {
          string.push(`${significand[index++]}`);
        }
      }
    }

    return string.join('');
  }

  toJSON(): Decimal128Extended {
    return { $numberDecimal: this.toString() };
  }

  /** @internal */
  toExtendedJSON(): Decimal128Extended {
    return { $numberDecimal: this.toString() };
  }

  /** @internal */
  static fromExtendedJSON(doc: Decimal128Extended): Decimal128 {
    return Decimal128.fromString(doc.$numberDecimal);
  }

  inspect(depth?: number, options?: unknown, inspect?: InspectFn): string {
    inspect ??= defaultInspect;
    const d128string = inspect(this.toString(), options);
    return `new Decimal128(${d128string})`;
  }
}
