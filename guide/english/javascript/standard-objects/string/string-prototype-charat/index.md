---
title: String.prototype.charAt
---
The `charAt()` method returns the specified character from a string.

## Syntax

    str.charAt(index)

## Parameters

**index**

An integer between 0 and 1-less-than the length of the string.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/65zt5h10%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Description

Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character in a string called `stringName` is `stringName.length - 1`. If the index you supply is out of range, JavaScript returns an empty string.

## Examples

    var anyString = 'Brave new world';

    console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); // 'B'
    console.log("The character at index 1   is '" + anyString.charAt(1)   + "'"); // 'r'
    console.log("The character at index 2   is '" + anyString.charAt(2)   + "'"); // 'a'
    console.log("The character at index 3   is '" + anyString.charAt(3)   + "'"); // 'v'
    console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); // 'e'
    console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); // ''

    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.write(str.charAt(str.length - 1));

    // Output: Z