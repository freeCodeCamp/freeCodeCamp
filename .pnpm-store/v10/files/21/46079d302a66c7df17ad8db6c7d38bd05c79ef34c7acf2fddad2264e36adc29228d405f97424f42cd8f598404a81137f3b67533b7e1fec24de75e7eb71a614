'use strict';

const { removeLeadingZero } = require('../lib/svgo/tools.js');

exports.name = 'cleanupListOfValues';
exports.type = 'visitor';
exports.active = false;
exports.description = 'rounds list of values to the fixed precision';

const regNumericValues =
  /^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/;
const regSeparator = /\s+,?\s*|,\s*/;
const absoluteLengths = {
  // relative to px
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  in: 96,
  pt: 4 / 3,
  pc: 16,
  px: 1,
};

/**
 * Round list of values to the fixed precision.
 *
 * @example
 * <svg viewBox="0 0 200.28423 200.28423" enable-background="new 0 0 200.28423 200.28423">
 *         ⬇
 * <svg viewBox="0 0 200.284 200.284" enable-background="new 0 0 200.284 200.284">
 *
 * <polygon points="208.250977 77.1308594 223.069336 ... "/>
 *         ⬇
 * <polygon points="208.251 77.131 223.069 ... "/>
 *
 * @author kiyopikko
 *
 * @type {import('../lib/types').Plugin<{
 *   floatPrecision?: number,
 *   leadingZero?: boolean,
 *   defaultPx?: boolean,
 *   convertToPx?: boolean
 * }>}
 */
exports.fn = (_root, params) => {
  const {
    floatPrecision = 3,
    leadingZero = true,
    defaultPx = true,
    convertToPx = true,
  } = params;

  /**
   * @type {(lists: string) => string}
   */
  const roundValues = (lists) => {
    const roundedList = [];

    for (const elem of lists.split(regSeparator)) {
      const match = elem.match(regNumericValues);
      const matchNew = elem.match(/new/);

      // if attribute value matches regNumericValues
      if (match) {
        // round it to the fixed precision
        let num = Number(Number(match[1]).toFixed(floatPrecision));
        /**
         * @type {any}
         */
        let matchedUnit = match[3] || '';
        /**
         * @type{'' | keyof typeof absoluteLengths}
         */
        let units = matchedUnit;

        // convert absolute values to pixels
        if (convertToPx && units && units in absoluteLengths) {
          const pxNum = Number(
            (absoluteLengths[units] * Number(match[1])).toFixed(floatPrecision)
          );

          if (pxNum.toString().length < match[0].length) {
            num = pxNum;
            units = 'px';
          }
        }

        // and remove leading zero
        let str;
        if (leadingZero) {
          str = removeLeadingZero(num);
        } else {
          str = num.toString();
        }

        // remove default 'px' units
        if (defaultPx && units === 'px') {
          units = '';
        }

        roundedList.push(str + units);
      }
      // if attribute value is "new"(only enable-background).
      else if (matchNew) {
        roundedList.push('new');
      } else if (elem) {
        roundedList.push(elem);
      }
    }

    return roundedList.join(' ');
  };

  return {
    element: {
      enter: (node) => {
        if (node.attributes.points != null) {
          node.attributes.points = roundValues(node.attributes.points);
        }

        if (node.attributes['enable-background'] != null) {
          node.attributes['enable-background'] = roundValues(
            node.attributes['enable-background']
          );
        }

        if (node.attributes.viewBox != null) {
          node.attributes.viewBox = roundValues(node.attributes.viewBox);
        }

        if (node.attributes['stroke-dasharray'] != null) {
          node.attributes['stroke-dasharray'] = roundValues(
            node.attributes['stroke-dasharray']
          );
        }

        if (node.attributes.dx != null) {
          node.attributes.dx = roundValues(node.attributes.dx);
        }

        if (node.attributes.dy != null) {
          node.attributes.dy = roundValues(node.attributes.dy);
        }

        if (node.attributes.x != null) {
          node.attributes.x = roundValues(node.attributes.x);
        }

        if (node.attributes.y != null) {
          node.attributes.y = roundValues(node.attributes.y);
        }
      },
    },
  };
};
