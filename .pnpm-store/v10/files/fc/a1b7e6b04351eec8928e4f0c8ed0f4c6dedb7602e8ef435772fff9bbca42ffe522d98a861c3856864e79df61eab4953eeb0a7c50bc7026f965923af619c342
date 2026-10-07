'use strict';

/**
 * @typedef {import('../types').PathDataCommand} PathDataCommand
 */

/**
 * Encode plain SVG data string into Data URI string.
 *
 * @type {(str: string, type?: 'base64' | 'enc' | 'unenc') => string}
 */
exports.encodeSVGDatauri = (str, type) => {
  var prefix = 'data:image/svg+xml';
  if (!type || type === 'base64') {
    // base64
    prefix += ';base64,';
    str = prefix + Buffer.from(str).toString('base64');
  } else if (type === 'enc') {
    // URI encoded
    str = prefix + ',' + encodeURIComponent(str);
  } else if (type === 'unenc') {
    // unencoded
    str = prefix + ',' + str;
  }
  return str;
};

/**
 * Decode SVG Data URI string into plain SVG string.
 *
 * @type {(str: string) => string}
 */
exports.decodeSVGDatauri = (str) => {
  var regexp = /data:image\/svg\+xml(;charset=[^;,]*)?(;base64)?,(.*)/;
  var match = regexp.exec(str);

  // plain string
  if (!match) return str;

  var data = match[3];

  if (match[2]) {
    // base64
    str = Buffer.from(data, 'base64').toString('utf8');
  } else if (data.charAt(0) === '%') {
    // URI encoded
    str = decodeURIComponent(data);
  } else if (data.charAt(0) === '<') {
    // unencoded
    str = data;
  }
  return str;
};

/**
 * @typedef {{
 *   noSpaceAfterFlags?: boolean,
 *   leadingZero?: boolean,
 *   negativeExtraSpace?: boolean
 * }} CleanupOutDataParams
 */

/**
 * Convert a row of numbers to an optimized string view.
 *
 * @example
 * [0, -1, .5, .5] → "0-1 .5.5"
 *
 * @type {(data: Array<number>, params: CleanupOutDataParams, command?: PathDataCommand) => string}
 */
exports.cleanupOutData = (data, params, command) => {
  let str = '';
  let delimiter;
  /**
   * @type {number}
   */
  let prev;

  data.forEach((item, i) => {
    // space delimiter by default
    delimiter = ' ';

    // no extra space in front of first number
    if (i == 0) delimiter = '';

    // no extra space after 'arcto' command flags(large-arc and sweep flags)
    // a20 60 45 0 1 30 20 → a20 60 45 0130 20
    if (params.noSpaceAfterFlags && (command == 'A' || command == 'a')) {
      var pos = i % 7;
      if (pos == 4 || pos == 5) delimiter = '';
    }

    // remove floating-point numbers leading zeros
    // 0.5 → .5
    // -0.5 → -.5
    const itemStr = params.leadingZero
      ? removeLeadingZero(item)
      : item.toString();

    // no extra space in front of negative number or
    // in front of a floating number if a previous number is floating too
    if (
      params.negativeExtraSpace &&
      delimiter != '' &&
      (item < 0 || (itemStr.charAt(0) === '.' && prev % 1 !== 0))
    ) {
      delimiter = '';
    }
    // save prev item value
    prev = item;
    str += delimiter + itemStr;
  });
  return str;
};

/**
 * Remove floating-point numbers leading zero.
 *
 * @example
 * 0.5 → .5
 *
 * @example
 * -0.5 → -.5
 *
 * @type {(num: number) => string}
 */
const removeLeadingZero = (num) => {
  var strNum = num.toString();

  if (0 < num && num < 1 && strNum.charAt(0) === '0') {
    strNum = strNum.slice(1);
  } else if (-1 < num && num < 0 && strNum.charAt(1) === '0') {
    strNum = strNum.charAt(0) + strNum.slice(2);
  }
  return strNum;
};
exports.removeLeadingZero = removeLeadingZero;
