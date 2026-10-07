/*
Fraction.js v5.0.0 10/1/2024
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2024, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/
const Fraction = require('fraction.js');

function closestTapeMeasure(frac) {

    // A tape measure is usually divided in parts of 1/16

    return Fraction(frac).roundTo("1/16");
}
console.log(closestTapeMeasure("1/3")); // 5/16
