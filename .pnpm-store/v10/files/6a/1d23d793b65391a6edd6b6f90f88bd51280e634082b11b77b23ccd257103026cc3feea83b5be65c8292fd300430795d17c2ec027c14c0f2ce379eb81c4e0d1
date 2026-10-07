/*
Fraction.js v5.0.0 10/1/2024
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2024, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/

const Fraction = require('fraction.js');

function toFraction(frac) {

  var map = {
    '1:4': "¼",
    '1:2': "½",
    '3:4': "¾",
    '1:7': "⅐",
    '1:9': "⅑",
    '1:10': "⅒",
    '1:3': "⅓",
    '2:3': "⅔",
    '1:5': "⅕",
    '2:5': "⅖",
    '3:5': "⅗",
    '4:5': "⅘",
    '1:6': "⅙",
    '5:6': "⅚",
    '1:8': "⅛",
    '3:8': "⅜",
    '5:8': "⅝",
    '7:8': "⅞"
  };
  return map[frac.n + ":" + frac.d] || frac.toFraction(false);
}
console.log(toFraction(Fraction(0.25))); // ¼
