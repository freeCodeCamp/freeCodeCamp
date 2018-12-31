---
title: String.prototype.lastIndexOf
---
The `lastIndexOf()` method returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found. The calling string is searched backward, starting at `fromIndex`.

## Syntax

    str.lastIndexOf(searchValue<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf' target='_blank' rel='nofollow'>, fromIndex])

## Parameters

**searchValue**

A string representing the value to search for.

**fromIndex**

Optional. The location within the calling string to start the search at, indexed from left to right. It can be any integer. The default value is `str.length`. If it is negative, it is treated as 0\. If `fromIndex > str.length`, `fromIndex` is treated as `str.length`.

[MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/6d20k718%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Returns

Returns the last occurrence of a substring in the string.

## Description

Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character is `stringName.length - 1`.

The `lastIndexOf()` method is case sensitive. For example, the following expression returns `-1`:

## Examples

    'canal'.lastIndexOf('a');     // returns 3
    'canal'.lastIndexOf('a', 2);  // returns 1
    'canal'.lastIndexOf('a', 0);  // returns -1
    'canal'.lastIndexOf('x');     // returns -1
    'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1

    var anyString = 'Brave new world';

    console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));
    // logs 8
    console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); 
    // logs 10
    console.log('The index of "new" from the beginning is ' + anyString.indexOf('new'));
    // logs 6
    console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new'));
    // logs 6

    var str = "time, time";

    var s = "";
    s += "time is at position " + str.lastIndexOf("time");
    s += "<br />";
    s += "abc is at position " + str.lastIndexOf("abc");

    document.write(s);

    // Output:
    // time is at position 6
    // abc is at position -1