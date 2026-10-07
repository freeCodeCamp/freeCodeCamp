/**
 * Copyright (c) 2016 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { ICharset } from 'common/Types';

/**
 * The character sets supported by the terminal. These enable several languages
 * to be represented within the terminal with only 8-bit encoding. See ISO 2022
 * for a discussion on character sets. Only VT100 character sets are supported.
 */
export const CHARSETS: { [key: string]: ICharset | undefined } = {};

/**
 * The default character set, US.
 */
export const DEFAULT_CHARSET: ICharset | undefined = CHARSETS['B'];

/**
 * DEC Special Character and Line Drawing Set.
 * Reference: http://vt100.net/docs/vt102-ug/table5-13.html
 * A lot of curses apps use this if they see TERM=xterm.
 * testing: echo -e '\e(0a\e(B'
 * The xterm output sometimes seems to conflict with the
 * reference above. xterm seems in line with the reference
 * when running vttest however.
 * The table below now uses xterm's output from vttest.
 */
CHARSETS['0'] = {
  '`': '\u25c6', // '◆'
  'a': '\u2592', // '▒'
  'b': '\u2409', // '␉' (HT)
  'c': '\u240c', // '␌' (FF)
  'd': '\u240d', // '␍' (CR)
  'e': '\u240a', // '␊' (LF)
  'f': '\u00b0', // '°'
  'g': '\u00b1', // '±'
  'h': '\u2424', // '␤' (NL)
  'i': '\u240b', // '␋' (VT)
  'j': '\u2518', // '┘'
  'k': '\u2510', // '┐'
  'l': '\u250c', // '┌'
  'm': '\u2514', // '└'
  'n': '\u253c', // '┼'
  'o': '\u23ba', // '⎺'
  'p': '\u23bb', // '⎻'
  'q': '\u2500', // '─'
  'r': '\u23bc', // '⎼'
  's': '\u23bd', // '⎽'
  't': '\u251c', // '├'
  'u': '\u2524', // '┤'
  'v': '\u2534', // '┴'
  'w': '\u252c', // '┬'
  'x': '\u2502', // '│'
  'y': '\u2264', // '≤'
  'z': '\u2265', // '≥'
  '{': '\u03c0', // 'π'
  '|': '\u2260', // '≠'
  '}': '\u00a3', // '£'
  '~': '\u00b7'  // '·'
};

/**
 * British character set
 * ESC (A
 * Reference: http://vt100.net/docs/vt220-rm/table2-5.html
 */
CHARSETS['A'] = {
  '#': '£'
};

/**
 * United States character set
 * ESC (B
 */
CHARSETS['B'] = undefined;

/**
 * Dutch character set
 * ESC (4
 * Reference: http://vt100.net/docs/vt220-rm/table2-6.html
 */
CHARSETS['4'] = {
  '#': '£',
  '@': '¾',
  '[': 'ij',
  '\\': '½',
  ']': '|',
  '{': '¨',
  '|': 'f',
  '}': '¼',
  '~': '´'
};

/**
 * Finnish character set
 * ESC (C or ESC (5
 * Reference: http://vt100.net/docs/vt220-rm/table2-7.html
 */
CHARSETS['C'] =
CHARSETS['5'] = {
  '[': 'Ä',
  '\\': 'Ö',
  ']': 'Å',
  '^': 'Ü',
  '`': 'é',
  '{': 'ä',
  '|': 'ö',
  '}': 'å',
  '~': 'ü'
};

/**
 * French character set
 * ESC (R
 * Reference: http://vt100.net/docs/vt220-rm/table2-8.html
 */
CHARSETS['R'] = {
  '#': '£',
  '@': 'à',
  '[': '°',
  '\\': 'ç',
  ']': '§',
  '{': 'é',
  '|': 'ù',
  '}': 'è',
  '~': '¨'
};

/**
 * French Canadian character set
 * ESC (Q
 * Reference: http://vt100.net/docs/vt220-rm/table2-9.html
 */
CHARSETS['Q'] = {
  '@': 'à',
  '[': 'â',
  '\\': 'ç',
  ']': 'ê',
  '^': 'î',
  '`': 'ô',
  '{': 'é',
  '|': 'ù',
  '}': 'è',
  '~': 'û'
};

/**
 * German character set
 * ESC (K
 * Reference: http://vt100.net/docs/vt220-rm/table2-10.html
 */
CHARSETS['K'] = {
  '@': '§',
  '[': 'Ä',
  '\\': 'Ö',
  ']': 'Ü',
  '{': 'ä',
  '|': 'ö',
  '}': 'ü',
  '~': 'ß'
};

/**
 * Italian character set
 * ESC (Y
 * Reference: http://vt100.net/docs/vt220-rm/table2-11.html
 */
CHARSETS['Y'] = {
  '#': '£',
  '@': '§',
  '[': '°',
  '\\': 'ç',
  ']': 'é',
  '`': 'ù',
  '{': 'à',
  '|': 'ò',
  '}': 'è',
  '~': 'ì'
};

/**
 * Norwegian/Danish character set
 * ESC (E or ESC (6
 * Reference: http://vt100.net/docs/vt220-rm/table2-12.html
 */
CHARSETS['E'] =
CHARSETS['6'] = {
  '@': 'Ä',
  '[': 'Æ',
  '\\': 'Ø',
  ']': 'Å',
  '^': 'Ü',
  '`': 'ä',
  '{': 'æ',
  '|': 'ø',
  '}': 'å',
  '~': 'ü'
};

/**
 * Spanish character set
 * ESC (Z
 * Reference: http://vt100.net/docs/vt220-rm/table2-13.html
 */
CHARSETS['Z'] = {
  '#': '£',
  '@': '§',
  '[': '¡',
  '\\': 'Ñ',
  ']': '¿',
  '{': '°',
  '|': 'ñ',
  '}': 'ç'
};

/**
 * Swedish character set
 * ESC (H or ESC (7
 * Reference: http://vt100.net/docs/vt220-rm/table2-14.html
 */
CHARSETS['H'] =
CHARSETS['7'] = {
  '@': 'É',
  '[': 'Ä',
  '\\': 'Ö',
  ']': 'Å',
  '^': 'Ü',
  '`': 'é',
  '{': 'ä',
  '|': 'ö',
  '}': 'å',
  '~': 'ü'
};

/**
 * Swiss character set
 * ESC (=
 * Reference: http://vt100.net/docs/vt220-rm/table2-15.html
 */
CHARSETS['='] = {
  '#': 'ù',
  '@': 'à',
  '[': 'é',
  '\\': 'ç',
  ']': 'ê',
  '^': 'î',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '_': 'è',
  '`': 'ô',
  '{': 'ä',
  '|': 'ö',
  '}': 'ü',
  '~': 'û'
};
