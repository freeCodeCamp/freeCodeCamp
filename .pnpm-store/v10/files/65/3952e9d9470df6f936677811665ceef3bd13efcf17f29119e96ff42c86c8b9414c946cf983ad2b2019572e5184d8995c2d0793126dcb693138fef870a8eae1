/*
Fraction.js v5.0.0 10/1/2024
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2024, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/

var Fraction = require("fraction.js")

function valueOfPi(val) {

  let minLen = Infinity, minI = 0, min = null;
  const choose = [val, val * Math.PI, val / Math.PI];
  for (let i = 0; i < choose.length; i++) {
    let el = new Fraction(choose[i]).simplify(1e-13);
    let len = Math.log(Number(el.n) + 1) + Math.log(Number(el.d));
    if (len < minLen) {
      minLen = len;
      minI = i;
      min = el;
    }
  }

  if (minI == 2) {
    return min.toFraction().replace(/(\d+)(\/\d+)?/, (_, p, q) =>
      (p == "1" ? "" : p) + "π" + (q || ""));
  }

  if (minI == 1) {
    return min.toFraction().replace(/(\d+)(\/\d+)?/, (_, p, q) =>
      p + (!q ? "/π" : "/(" + q.slice(1) + "π)"));
  }
  return min.toFraction();
}

console.log(valueOfPi(-3)); // -3
console.log(valueOfPi(4 * Math.PI)); // 4π
console.log(valueOfPi(3.14)); // 157/50
console.log(valueOfPi(3 / 2 * Math.PI)); // 3π/2
console.log(valueOfPi(Math.PI / 2)); // π/2
console.log(valueOfPi(-1 / (2 * Math.PI))); // -1/(2π)
