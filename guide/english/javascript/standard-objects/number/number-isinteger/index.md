---
title: Number isInteger
---
# Number isInteger

## Description
The ```Number.isInteger()``` method determines whether the passed value is an integer. This method was introduced in ES6

## Syntax
```Number.isInteger(val)```

### Parameters

**val** - value to check for being an integer

## Return value

A [Boolean](https://guide.freecodecamp.org/javascript/booleans) indicating whether the value is an integer or not.

## Description

The method returns ```true``` if passed value is an integer, otherwise it returns ```false```. Infinite and ```NaN``` values return ```false```.

## Examples

```
Number.isInteger(0);         // true
Number.isInteger(-0);        // true
Number.isInteger(1);         // true
Number.isInteger(2);         // true
Number.isInteger(-100001);   // true
Number.isInteger(999999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(0.3);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[ECMA 2015 Docs](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isinteger)
<br>
[Number.isInteger() MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
