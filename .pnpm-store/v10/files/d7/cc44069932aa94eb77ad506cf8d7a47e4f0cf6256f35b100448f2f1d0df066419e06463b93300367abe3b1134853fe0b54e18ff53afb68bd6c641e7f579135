'use strict';

const collections = require('./_collections.js');

exports.type = 'visitor';
exports.name = 'convertColors';
exports.active = true;
exports.description = 'converts colors: rgb() to #rrggbb and #rrggbb to #rgb';

const rNumber = '([+-]?(?:\\d*\\.\\d+|\\d+\\.?)%?)';
const rComma = '\\s*,\\s*';
const regRGB = new RegExp(
  '^rgb\\(\\s*' + rNumber + rComma + rNumber + rComma + rNumber + '\\s*\\)$'
);
const regHEX = /^#(([a-fA-F0-9])\2){3}$/;

/**
 * Convert [r, g, b] to #rrggbb.
 *
 * @see https://gist.github.com/983535
 *
 * @example
 * rgb2hex([255, 255, 255]) // '#ffffff'
 *
 * @author Jed Schmidt
 *
 * @type {(rgb: Array<number>) => string}
 */
const convertRgbToHex = ([r, g, b]) => {
  // combine the octets into a 32-bit integer as: [1][r][g][b]
  const hexNumber =
    // operator precedence is (+) > (<<) > (|)
    ((((256 + // [1][0]
      r) << // [1][r]
      8) | // [1][r][0]
      g) << // [1][r][g]
      8) | // [1][r][g][0]
    b;
  // serialize [1][r][g][b] to a hex string, and
  // remove the 1 to get the number with 0s intact
  return '#' + hexNumber.toString(16).slice(1).toUpperCase();
};

/**
 * Convert different colors formats in element attributes to hex.
 *
 * @see https://www.w3.org/TR/SVG11/types.html#DataTypeColor
 * @see https://www.w3.org/TR/SVG11/single-page.html#types-ColorKeywords
 *
 * @example
 * Convert color name keyword to long hex:
 * fuchsia ➡ #ff00ff
 *
 * Convert rgb() to long hex:
 * rgb(255, 0, 255) ➡ #ff00ff
 * rgb(50%, 100, 100%) ➡ #7f64ff
 *
 * Convert long hex to short hex:
 * #aabbcc ➡ #abc
 *
 * Convert hex to short name
 * #000080 ➡ navy
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<{
 *   currentColor?: boolean | string | RegExp,
 *   names2hex?: boolean,
 *   rgb2hex?: boolean,
 *   shorthex?: boolean,
 *   shortname?: boolean,
 * }>}
 */
exports.fn = (_root, params) => {
  const {
    currentColor = false,
    names2hex = true,
    rgb2hex = true,
    shorthex = true,
    shortname = true,
  } = params;

  return {
    element: {
      enter: (node) => {
        for (const [name, value] of Object.entries(node.attributes)) {
          if (collections.colorsProps.includes(name)) {
            let val = value;

            // convert colors to currentColor
            if (currentColor) {
              let matched;
              if (typeof currentColor === 'string') {
                matched = val === currentColor;
              } else if (currentColor instanceof RegExp) {
                matched = currentColor.exec(val) != null;
              } else {
                matched = val !== 'none';
              }
              if (matched) {
                val = 'currentColor';
              }
            }

            // convert color name keyword to long hex
            if (names2hex) {
              const colorName = val.toLowerCase();
              if (collections.colorsNames[colorName] != null) {
                val = collections.colorsNames[colorName];
              }
            }

            // convert rgb() to long hex
            if (rgb2hex) {
              let match = val.match(regRGB);
              if (match != null) {
                let nums = match.slice(1, 4).map((m) => {
                  let n;
                  if (m.indexOf('%') > -1) {
                    n = Math.round(parseFloat(m) * 2.55);
                  } else {
                    n = Number(m);
                  }
                  return Math.max(0, Math.min(n, 255));
                });
                val = convertRgbToHex(nums);
              }
            }

            // convert long hex to short hex
            if (shorthex) {
              let match = val.match(regHEX);
              if (match != null) {
                val = '#' + match[0][1] + match[0][3] + match[0][5];
              }
            }

            // convert hex to short name
            if (shortname) {
              const colorName = val.toLowerCase();
              if (collections.colorsShortNames[colorName] != null) {
                val = collections.colorsShortNames[colorName];
              }
            }

            node.attributes[name] = val;
          }
        }
      },
    },
  };
};
