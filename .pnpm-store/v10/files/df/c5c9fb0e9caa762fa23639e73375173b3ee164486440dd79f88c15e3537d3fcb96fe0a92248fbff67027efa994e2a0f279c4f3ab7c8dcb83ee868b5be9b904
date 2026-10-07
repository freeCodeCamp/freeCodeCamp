/*
Fraction.js v5.0.0 10/1/2024
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2024, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/

// This example generates a list of angles with human readable radians

var Fraction = require('fraction.js');

var tab = [];
for (var d = 1; d <= 360; d++) {

   var pi = Fraction(2, 360).mul(d);
   var tau = Fraction(1, 360).mul(d);

   if (pi.d <= 6n && pi.d != 5n)
      tab.push([
         d,
         pi.toFraction() + "pi",
         tau.toFraction() + "tau"]);
}

console.table(tab);
