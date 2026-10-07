/**
 * Copyright (c) 2021 The xterm.js authors. All rights reserved.
 * @license MIT
 */


// 'rgb:' rule - matching: r/g/b | rr/gg/bb | rrr/ggg/bbb | rrrr/gggg/bbbb (hex digits)
const RGB_REX = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/;
// '#...' rule - matching any hex digits
const HASH_REX = /^[\da-f]+$/;

/**
 * Parse color spec to RGB values (8 bit per channel).
 * See `man xparsecolor` for details about certain format specifications.
 *
 * Supported formats:
 * - rgb:<red>/<green>/<blue> with <red>, <green>, <blue> in h | hh | hhh | hhhh
 * - #RGB, #RRGGBB, #RRRGGGBBB, #RRRRGGGGBBBB
 *
 * All other formats like rgbi: or device-independent string specifications
 * with float numbering are not supported.
 */
export function parseColor(data: string): [number, number, number] | undefined {
  if (!data) return;
  // also handle uppercases
  let low = data.toLowerCase();
  if (low.indexOf('rgb:') === 0) {
    // 'rgb:' specifier
    low = low.slice(4);
    const m = RGB_REX.exec(low);
    if (m) {
      const base = m[1] ? 15 : m[4] ? 255 : m[7] ? 4095 : 65535;
      return [
        Math.round(parseInt(m[1] || m[4] || m[7] || m[10], 16) / base * 255),
        Math.round(parseInt(m[2] || m[5] || m[8] || m[11], 16) / base * 255),
        Math.round(parseInt(m[3] || m[6] || m[9] || m[12], 16) / base * 255)
      ];
    }
  } else if (low.indexOf('#') === 0) {
    // '#' specifier
    low = low.slice(1);
    if (HASH_REX.exec(low) && [3, 6, 9, 12].includes(low.length)) {
      const adv = low.length / 3;
      const result: [number, number, number] = [0, 0, 0];
      for (let i = 0; i < 3; ++i) {
        const c = parseInt(low.slice(adv * i, adv * i + adv), 16);
        result[i] = adv === 1 ? c << 4 : adv === 2 ? c : adv === 3 ? c >> 4 : c >> 8;
      }
      return result;
    }
  }

  // Named colors are currently not supported due to the large addition to the xterm.js bundle size
  // they would add. In order to support named colors, we would need some way of optionally loading
  // additional payloads so startup/download time is not bloated (see #3530).
}

// pad hex output to requested bit width
function pad(n: number, bits: number): string {
  const s = n.toString(16);
  const s2 = s.length < 2 ? '0' + s : s;
  switch (bits) {
    case 4:
      return s[0];
    case 8:
      return s2;
    case 12:
      return (s2 + s2).slice(0, 3);
    default:
      return s2 + s2;
  }
}

/**
 * Convert a given color to rgb:../../.. string of `bits` depth.
 */
export function toRgbString(color: [number, number, number], bits: number = 16): string {
  const [r, g, b] = color;
  return `rgb:${pad(r, bits)}/${pad(g, bits)}/${pad(b, bits)}`;
}
