---
title: String fromCharCode
---
The static `String.fromCharCode()` method returns a string created by using the specified sequence of Unicode values.

## Syntax

    String.fromCharCode(num1[, ...[, numN]])

### Parameters

**num1, ..., numN**

A sequence of numbers that are Unicode values.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/wb4w0k66%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Description

This method returns a string and not a String object.

Because `fromCharCode()` is a static method of String, you always use it as `String.fromCharCode()`, rather than as a method of a String object you created.

## Examples

    String.fromCharCode(65, 66, 67);  // "ABC"

    var test = String.fromCharCode(112, 108, 97, 105, 110);
    document.write(test);

    // Output: plain