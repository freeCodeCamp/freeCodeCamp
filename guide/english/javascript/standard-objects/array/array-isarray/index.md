---
title: Array isArray
---
The `Array.isArray()` method returns `true` if an object is an array, `false` if it is not.

## Syntax

    Array.isArray(obj)

### Parameters

**obj** The object to be checked.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/ff848265%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Examples

    // all following calls return true
    Array.isArray([]);
    Array.isArray([1]);
    Array.isArray(new Array());
    // Little known fact: Array.prototype itself is an array:
    Array.isArray(Array.prototype); 

    // all following calls return false
    Array.isArray();
    Array.isArray({});
    Array.isArray(null);
    Array.isArray(undefined);
    Array.isArray(17);
    Array.isArray('Array');
    Array.isArray(true);
    Array.isArray(false);
    Array.isArray({ __proto__: Array.prototype });