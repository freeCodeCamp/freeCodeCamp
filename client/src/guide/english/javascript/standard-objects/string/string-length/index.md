---
title: String Length
---
The `length` property represents the length of a string.

## Syntax

    str.length

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/3d616214%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Description

This property returns the number of code units in the string. UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it's possible for the value returned by length to not match the actual number of characters in the string.

For an empty string, length is 0.

The static property `String.length` returns the value 1.

## Examples

    var x = 'Mozilla';
    var empty = '';

    console.log('Mozilla is ' + x.length + ' code units long');
    /* "Mozilla is 7 code units long" */

    console.log('The empty string has a length of ' + empty.length);
    /* "The empty string has a length of 0" */

    var str = "every good boy does fine";
            var start = 0;
            var end = str.length - 1;
            var tmp = "";
            var arr = new Array(end);

            while (end >= 0) {
                arr[start++] = str.charAt(end--);
            }

    // Join the elements of the array with a 
            var str2 = arr.join('');
            document.write(str2);

    // Output: enif seod yob doog yreve