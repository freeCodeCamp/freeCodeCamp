---
title: String.prototype.charCodeAt
---
The `charCodeAt()` method returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000).

## Syntax

    str.charCodeAt(index)

### Parameters

**index**

An integer greater than or equal to 0 and less than the length of the string; if it is not a number, it defaults to 0.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/hza4d04f%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Description

Note that `charCodeAt()` will always return a value that is less than 65536\. This is because the higher code points are represented by a pair of (lower valued) "surrogate" pseudo-characters which are used to comprise the real character. Because of this, in order to examine or reproduce the full character for individual characters of value 65536 and above, for such characters, it is necessary to retrieve not only `charCodeAt(i)`, but also `charCodeAt(i+1)` (as if examining/reproducing a string with two letters). See example 2 and 3 below.

`charCodeAt()` returns `NaN` if the given `index` is less than 0 or is equal to or greater than the length of the string.

## Examples

    'ABC'.charCodeAt(0); // returns 65

    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    document.write(str.charCodeAt(str.length - 1));

    // Output: 90