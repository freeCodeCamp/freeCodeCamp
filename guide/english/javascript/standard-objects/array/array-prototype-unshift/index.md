---
title: Array.prototype.unshift
---
The JavaScript array method `.unshift()` adds one or more elements to the beginning of an array and returns the new length of the array.

**Syntax**

    arr.unshift([element1[, ...[, elementN]]])

## Parameters

The elements to add to the front of the array.

## Returns

The new `length` of the array upon which the method was called.

## Examples

    var array = [1, 2, 3, 4, 5];

    array.unshift(0);
    // If we console.log(array.shift()); the console would output 6.
    // array is now [0, 1, 2, 3, 4, 5];

    array.unshift([-1]);
    // array is now [[-1], 0, 1, 2, 3, 4, 5];

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/C2V3' target='_blank' rel='nofollow'>Run code</a>

Source <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift' target='_blank' rel='nofollow'>MDN</a>