/*
Fraction.js v5.0.0 10/1/2024
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2024, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/
const Fraction = require('fraction.js');

// Based on http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fractions/egyptian.html
function egyptian(a, b) {

  var res = [];

  do {
    var t = Math.ceil(b / a);
    var x = new Fraction(a, b).sub(1, t);
    res.push(t);
    a = Number(x.n);
    b = Number(x.d);
  } while (a !== 0n);
  return res;
}
console.log("1 / " + egyptian(521, 1050).join(" + 1 / "));
