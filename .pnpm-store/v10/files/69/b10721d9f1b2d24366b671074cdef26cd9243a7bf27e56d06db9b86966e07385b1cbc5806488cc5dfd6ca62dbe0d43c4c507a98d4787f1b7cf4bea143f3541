/*
Fraction.js v5.0.0 10/1/2024
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2024, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/
const Fraction = require('fraction.js');

// Another rational approximation, not using Farey Sequences but Binary Search using the mediant
function approximate(p, precision) {

  var num1 = Math.floor(p);
  var den1 = 1;

  var num2 = num1 + 1;
  var den2 = 1;

  if (p !== num1) {

    while (den1 <= precision && den2 <= precision) {

      var m = (num1 + num2) / (den1 + den2);

      if (p === m) {

        if (den1 + den2 <= precision) {
          den1 += den2;
          num1 += num2;
          den2 = precision + 1;
        } else if (den1 > den2) {
          den2 = precision + 1;
        } else {
          den1 = precision + 1;
        }
        break;

      } else if (p < m) {
        num2 += num1;
        den2 += den1;
      } else {
        num1 += num2;
        den1 += den2;
      }
    }
  }

  if (den1 > precision) {
    den1 = den2;
    num1 = num2;
  }
  return new Fraction(num1, den1);
}

