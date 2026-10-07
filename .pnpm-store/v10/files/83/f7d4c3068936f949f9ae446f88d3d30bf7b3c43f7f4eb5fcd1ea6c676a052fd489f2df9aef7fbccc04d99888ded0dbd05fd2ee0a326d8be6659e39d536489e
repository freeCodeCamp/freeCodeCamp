'use strict'

// This module is compiled away!
//
// micromark works based on character codes.
// This module contains constants for the ASCII block and the replacement
// character.
// A couple of them are handled in a special way, such as the line endings
// (CR, LF, and CR+LF, commonly known as end-of-line: EOLs), the tab (horizontal
// tab) and its expansion based on what column it’s at (virtual space),
// and the end-of-file (eof) character.
// As values are preprocessed before handling them, the actual characters LF,
// CR, HT, and NUL (which is present as the replacement character), are
// guaranteed to not exist.
//
// Unicode basic latin block.
var codes = {
  carriageReturn: -5,
  lineFeed: -4,
  carriageReturnLineFeed: -3,
  horizontalTab: -2,
  virtualSpace: -1,
  eof: null,
  nul: 0,
  soh: 1,
  stx: 2,
  etx: 3,
  eot: 4,
  enq: 5,
  ack: 6,
  bel: 7,
  bs: 8,
  ht: 9, // `\t`
  lf: 10, // `\n`
  vt: 11, // `\v`
  ff: 12, // `\f`
  cr: 13, // `\r`
  so: 14,
  si: 15,
  dle: 16,
  dc1: 17,
  dc2: 18,
  dc3: 19,
  dc4: 20,
  nak: 21,
  syn: 22,
  etb: 23,
  can: 24,
  em: 25,
  sub: 26,
  esc: 27,
  fs: 28,
  gs: 29,
  rs: 30,
  us: 31,
  space: 32,
  exclamationMark: 33, // `!`
  quotationMark: 34, // `"`
  numberSign: 35, // `#`
  dollarSign: 36, // `$`
  percentSign: 37, // `%`
  ampersand: 38, // `&`
  apostrophe: 39, // `'`
  leftParenthesis: 40, // `(`
  rightParenthesis: 41, // `)`
  asterisk: 42, // `*`
  plusSign: 43, // `+`
  comma: 44, // `,`
  dash: 45, // `-`
  dot: 46, // `.`
  slash: 47, // `/`
  digit0: 48, // `0`
  digit1: 49, // `1`
  digit2: 50, // `2`
  digit3: 51, // `3`
  digit4: 52, // `4`
  digit5: 53, // `5`
  digit6: 54, // `6`
  digit7: 55, // `7`
  digit8: 56, // `8`
  digit9: 57, // `9`
  colon: 58, // `:`
  semicolon: 59, // `;`
  lessThan: 60, // `<`
  equalsTo: 61, // `=`
  greaterThan: 62, // `>`
  questionMark: 63, // `?`
  atSign: 64, // `@`
  uppercaseA: 65, // `A`
  uppercaseB: 66, // `B`
  uppercaseC: 67, // `C`
  uppercaseD: 68, // `D`
  uppercaseE: 69, // `E`
  uppercaseF: 70, // `F`
  uppercaseG: 71, // `G`
  uppercaseH: 72, // `H`
  uppercaseI: 73, // `I`
  uppercaseJ: 74, // `J`
  uppercaseK: 75, // `K`
  uppercaseL: 76, // `L`
  uppercaseM: 77, // `M`
  uppercaseN: 78, // `N`
  uppercaseO: 79, // `O`
  uppercaseP: 80, // `P`
  uppercaseQ: 81, // `Q`
  uppercaseR: 82, // `R`
  uppercaseS: 83, // `S`
  uppercaseT: 84, // `T`
  uppercaseU: 85, // `U`
  uppercaseV: 86, // `V`
  uppercaseW: 87, // `W`
  uppercaseX: 88, // `X`
  uppercaseY: 89, // `Y`
  uppercaseZ: 90, // `Z`
  leftSquareBracket: 91, // `[`
  backslash: 92, // `\`
  rightSquareBracket: 93, // `]`
  caret: 94, // `^`
  underscore: 95, // `_`
  graveAccent: 96, // `` ` ``
  lowercaseA: 97, // `a`
  lowercaseB: 98, // `b`
  lowercaseC: 99, // `c`
  lowercaseD: 100, // `d`
  lowercaseE: 101, // `e`
  lowercaseF: 102, // `f`
  lowercaseG: 103, // `g`
  lowercaseH: 104, // `h`
  lowercaseI: 105, // `i`
  lowercaseJ: 106, // `j`
  lowercaseK: 107, // `k`
  lowercaseL: 108, // `l`
  lowercaseM: 109, // `m`
  lowercaseN: 110, // `n`
  lowercaseO: 111, // `o`
  lowercaseP: 112, // `p`
  lowercaseQ: 113, // `q`
  lowercaseR: 114, // `r`
  lowercaseS: 115, // `s`
  lowercaseT: 116, // `t`
  lowercaseU: 117, // `u`
  lowercaseV: 118, // `v`
  lowercaseW: 119, // `w`
  lowercaseX: 120, // `x`
  lowercaseY: 121, // `y`
  lowercaseZ: 122, // `z`
  leftCurlyBrace: 123, // `{`
  verticalBar: 124, // `|`
  rightCurlyBrace: 125, // `}`
  tilde: 126, // `~`
  del: 127,
  // Unicode Specials block.
  byteOrderMarker: 65279,
  // Unicode Specials block.
  replacementCharacter: 65533 // `�`
}

module.exports = codes
