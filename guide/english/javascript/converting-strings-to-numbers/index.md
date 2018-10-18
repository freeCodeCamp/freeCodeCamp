---
title: Converting Strings to Numbers
---
## Converting Strings to Numbers
The `parseInt()` function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

```js
    parseInt(string, radix);
```
### Parameters
    string
The value to parse. If the `string` argument is not a string, then it is converted to a string (using the `ToString` abstract operation). Leading whitespace in the string argument is ignored.'=
    radix
An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string. Specify `10` for the decimal numeral system commonly used by humans. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified, usually defaulting the value to 10.
Return value
An integer number parsed from the given string. If the first character cannot be converted to a number, `NaN` is returned.

### Description

The `parseInt` function converts its first argument to a string, parses it, and returns an integer or `NaN`. If not `NaN`, the returned value will be the integer that is the first argument taken as a number in the specified radix (base). For example, a radix of 10 indicates to convert from a decimal number, 8 octal, 16 hexadecimal, and so on. For radices above `10`, the letters of the alphabet indicate numerals greater than 9. For example, for hexadecimal numbers (base 16),`A` through `F` is used.

If `parseInt` encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. `parseInt` truncates numbers to integer values. Leading and trailing spaces are allowed.

Because some numbers include the `e` character in their string representation (e.g. `6.022e23`), using `parseInt` to truncate numeric values will produce unexpected results when used on very large or very small numbers. `parseInt` should not be used as a substitute for `Math.floor()`.

If radix is `undefined` or 0 (or absent), JavaScript assumes the following:

* If the input `string` begins with "0x" or "0X", radix is 16 (hexadecimal) and the remainder of the string is parsed.
* If the input `string` begins with "0", radix is eight (octal) or 10 (decimal).  Exactly which radix is chosen is implementation-dependent.  ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet.  For this reason, always specify a radix when using parseInt.
* If the input `string` begins with any other value, the radix is 10 (decimal).
* If the first character cannot be converted to a number, parseInt returns NaN.

For arithmetic purposes, the NaN value is not a number in any radix. You can call the isNaN function to determine if the result of parseInt is NaN. If NaN is passed on to arithmetic operations, the operation results will also be NaN.

To convert the number to its string literal in a particular radix use intValue.toString(radix).

### Examples

Using `parseInt`
The following examples all return `15`:

```js
    parseInt(' 0xF', 16);
    parseInt(' F', 16);
    parseInt('17', 8);
    parseInt(021, 8);
    parseInt('015', 10);   // parseInt(015, 10); will return 15
    parseInt(15.99, 10);
    parseInt('15,123', 10);
    parseInt('FXX123', 16);
    parseInt('1111', 2);
    parseInt('15 * 3', 10);
    parseInt('15e2', 10);
    parseInt('15px', 10);
    parseInt('12', 13);
```

The following examples all return `NaN`:
```js
    parseInt('Hello', 8); // Not a number at all
    parseInt('546', 2);   // Digits are not valid for binary representations
```
The following examples all return `-15`:
```js
    parseInt('-F', 16);
    parseInt('-0F', 16);
    parseInt('-0XF', 16);
    parseInt(-15.1, 10)
    parseInt(' -17', 8);
    parseInt(' -15', 10);
    parseInt('-1111', 2);
    parseInt('-15e1', 10);
    parseInt('-12', 13);
```
The following examples all return `4`:
```js
    parseInt(4.7, 10);
    parseInt(4.7 * 1e22, 10); // Very large number becomes 4
    parseInt(0.00000000000434, 10); // Very small number becomes 4
```
The following example returns `224`:
```js
    parseInt('0e0', 16);
```
#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">parseInt on MDN</a>


* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt' target='_blank' rel='nofollow'>parseInt()</a> and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat' target='_blank' rel='nofollow'>parseFloat()</a> attempt to convert the string to a number if possible. For example, `var x = parseInt("100"); // x = 100`
* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number' target='_blank' rel='nofollow'>Number()</a> will convert to a number the value can be represented by. This includes dates into the number of milliseconds since midnight January 1, 1970 UTC, boolean values to 1 or 0, and values that can't be converted to a recognisable number will become NaN. That stands for Not a Number and is also technically a number!
