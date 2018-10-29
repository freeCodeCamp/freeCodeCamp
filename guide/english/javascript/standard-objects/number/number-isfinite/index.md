---
title: Number isFinite
---
# Number isFinite

## Description
The ```Number.isFinite()``` method checks if the value passed into it is a finite number. This method was introduced in ES6

## Syntax
```Number.isFinite(val)```

### Parameters

**val** - value to check for finiteness

## Return value

A [Boolean](https://guide.freecodecamp.org/javascript/booleans) indicating whether the value is a finite number or not.

## Description

```Number.isFinite``` is different from the global [isFinite()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite) method, it doesn’t convert the tested value into a number. This means the value needs to be a number and finite to return true.

## Examples

```
Number.isFinite(Infinity)     // false
Number.isFinite(-Infinity)    // false

Number.isFinite(1234)         // true
Number.isFinite(-1.11)        // true
Number.isFinite(0)            // true
Number.isFinite(3g55)         // true

Number.isFinite('1234')       // false
Number.isFinite('Hi')         // false
Number.isFinite('2005/12/12') // false

Number.isFinite('0');         // false, would've been true with
                              // global isFinite('0')
                         
Number.isFinite(null);        // false, would've been true with
                              // global isFinite(null)

```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[ECMA 2015 Docs](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite)
<br>
[Number.isFinite() MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)

