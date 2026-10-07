/*
Fraction.js v5.0.0 10/1/2024
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2024, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/
const Fraction = require('fraction.js');

// NOTE: This is a nice example, but a stable version of this is served with Polynomial.js: 
// https://github.com/rawify/Polynomial.js

function integrate(poly) {

    poly = poly.replace(/\s+/g, "");

    var regex = /(\([+-]?[0-9/]+\)|[+-]?[0-9/]+)x(?:\^(\([+-]?[0-9/]+\)|[+-]?[0-9]+))?/g;
    var arr;
    var res = {};
    while (null !== (arr = regex.exec(poly))) {

        var a = (arr[1] || "1").replace("(", "").replace(")", "").split("/");
        var b = (arr[2] || "1").replace("(", "").replace(")", "").split("/");

        var exp = new Fraction(b).add(1);
        var key = "" + exp;

        if (res[key] !== undefined) {
            res[key] = { x: new Fraction(a).div(exp).add(res[key].x), e: exp };
        } else {
            res[key] = { x: new Fraction(a).div(exp), e: exp };
        }
    }

    var str = "";
    var c = 0;
    for (var i in res) {
        if (res[i].x.s !== -1n && c > 0) {
            str += "+";
        } else if (res[i].x.s === -1n) {
            str += "-";
        }
        if (res[i].x.n !== res[i].x.d) {
            if (res[i].x.d !== 1n) {
                str += res[i].x.n + "/" + res[i].x.d;
            } else {
                str += res[i].x.n;
            }
        }
        str += "x";
        if (res[i].e.n !== res[i].e.d) {
            str += "^";
            if (res[i].e.d !== 1n) {
                str += "(" + res[i].e.n + "/" + res[i].e.d + ")";
            } else {
                str += res[i].e.n;
            }
        }
        c++;
    }
    return str;
}

var poly = "-2/3x^3-2x^2+3x+8x^3-1/3x^(4/8)";

console.log("f(x): " + poly);
console.log("F(x): " + integrate(poly));
