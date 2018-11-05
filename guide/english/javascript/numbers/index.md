---
title: Numbers
---
## Numbers


The implementation of JavaScript's `number`s is based on the `IEEE 754` standard, often called "floating-point." 

<a href='https://en.wikipedia.org/wiki/IEEE_754' target='_blank' rel='nofollow'>IEEE 754 Wikipedia Link</a>
<br>
<a href='http://bartaz.github.io/ieee754-visualization/' target='_blank' rel='nofollow'>IEEE 754 Double Precision Floating Point Visualization</a>

Number literals are expressed generally as `base-10` decimal literals.

```javascript
var foo = 47;
var bar = 47.9;
```

The leading portion of a decimal value, if `0`, is optional:

```javascript
var same = 0.47;
var stillSame = .47;
```
Similarly, the trailing portion (the fractional) of a decimal value after the `.`, if `0`, is optional:

```javascript
var a = 47.0;
var b = 47.;
```

By default, most numbers will be outputted as `base-10` decimals, with trailing fractional `0`s removed. So:

```javascript
var foo = 47.300;
var bar = 47.0;

foo; // 47.3
bar; // 47
```

Very large or very small `numbers` can be written as:

```javascript
var foo = 47e8; // 4700000000
var baz = 47e-8; // 00.00000047  
```

`toExponential` method can be used to convert a `number` into its `exponential notation`.

```javascript
var foo = 47e8;
foo;  // 4700000000
foo.toExponential()   //"47e8"
```

Numbers have access to methods that are built into `Number.prototype`.

For Example:
 `toFixed()` method formats a number with a specific number of digits to the right of the decimal.

```javascript
var foo = 47.69;
foo.toFixed(0);  // "48"
foo.toFixed(1);  // "47.7"
foo.toFixed(2);  // "47.69"
```
>Type `Number.prototype` in your browser and see other available methods yourself.

Numbers in strings are treated differently than normal numbers.

```javascript
var foo = "12" + 18; // "1218"
```
In order to convert a string into a number you must run it through a ```Number()``` function.

```javascript
var foo = "12";
var bar = Number(foo) + 18; // "30"
```

#### More Information:
1. <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type' target='_blank' rel='nofollow'>MDN</a>
2. <a href='https://www.w3schools.com/js/js_numbers.asp' target='_blank' rel='nofollow'>JavaScript Numbers</a>

#### References
1.  <a href='https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar' target='_blank' rel='nofollow'>Types & grammar</a> by Kyle Simpson.
2.  <a href='https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.20' target='_blank' rel='nofollow'>ECMAScript Language Specification: 4.3.20</a>
3.  <a href='https://www.ecma-international.org/ecma-262/5.1/#sec-15.7' target='_blank' rel='nofollow'>ECMAScript Language Specification: 15.7 Number Objects</a>
