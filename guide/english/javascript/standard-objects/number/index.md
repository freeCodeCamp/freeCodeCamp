---
title: Number
---
## Number

The `Number` Javacript object represents any kind of number. JavaScript doesn't distinguish separate types of numbers, such as integers or floats. They are all stored in a unified, 64-bit Floating Point format, accorfing to the international IEEE 754 standard<sup>1</sup>.

New `Number` objects are created like this: `var num = new Number(value)` although most commonly they can be created simply by assigning a numeric value to a variable: `var num = 1.616;`. In a non-constructor context (i.e., without the `new` operator), `Number` can be used to perform a type conversion. If the argument cannot be converted into a number, it returns [`NaN`](https://guide.freecodecamp.org/javascript/standard-objects/number/number-nan).

### Sources

1. w3schools.com Staff. [w3schools.com: JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp) *w3schools.com.* Accessed: October 31, 2017.

