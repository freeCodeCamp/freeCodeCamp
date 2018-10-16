---
title: String.prototype.slice
---
The JavaScript string method `.slice()` extracts a portion of a string and returns a new string.

## Syntax

    str.slice(beginSliceIndex [, endSliceIndex]);

## Parameters

**beginSliceIndex**

The zero-based index where the slice should begin. If beginSliceIndex is a negative number, `.slice()` counts backwards from the end of the string to determine where to begin the slice.

**endSliceIndex**

Optional. The zero-based index where the slice should end. If omitted, `.slice()` extracts to the end of the string.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice' target='_blank' rel='nofollow'>MDN Link</a>

## Description

`.slice()` slices the text out of one string and returns a new string.

## Examples

**Using `.slice()` to create a new string**

    var string1 = "Hello World!";
    var string2 = string1.slice(3);
    console.log(string2);                           // Will log "lo World!"

    var string3 = string1.slice(3, 7);
    console.log(string3);                           // Will log "lo W"

**Using `.slice()` with negative indices**

    var string = "Hello World!"
    str.slice(-3);                                  // Returns "ld!"
    str.slice(-3, -1);                              // Returns "ld"
    str.slice(0, -1);                               // Returns "Hello World"
