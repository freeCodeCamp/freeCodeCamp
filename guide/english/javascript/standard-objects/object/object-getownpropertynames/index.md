---
title: Object getOwnPropertyNames
---
The `Object.getOwnPropertyNames()` method returns an array of all properties (enumerable or not) found directly upon a given object.

## Syntax

    Object.getOwnPropertyNames(obj)

### Parameters

**obj**

The object whose enumerable _and non-enumerable_ own properties are to be returned.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/ff688126%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Description

`Object.getOwnPropertyNames()` returns an array whose elements are strings corresponding to the enumerable _and non-enumerable_ properties found directly upon object. The ordering of the enumerable properties in the array is consistent with the ordering exposed by a `for...in` loop (or by `Object.keys()`) over the properties of the object. The ordering of the non-enumerable properties in the array, and among the enumerable properties, is not defined.

## Examples

    var arr = ['a', 'b', 'c'];
    console.log(Object.getOwnPropertyNames(arr).sort()); // logs '0,1,2,length'

    // Array-like object
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2'

    // Logging property names and values using Array.forEach
    Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
      console.log(val + ' -> ' + obj[val]);
    });
    // logs
    // 0 -> a
    // 1 -> b
    // 2 -> c

    // non-enumerable property
    var my_obj = Object.create({}, {
      getFoo: {
        value: function() { return this.foo; },
        enumerable: false
      }
    });
    my_obj.foo = 1;

    console.log(Object.getOwnPropertyNames(my_obj).sort()); // logs 'foo,getFoo'

    function Pasta(grain, size, shape) {
        this.grain = grain; 
        this.size = size; 
        this.shape = shape; 
    }

    var spaghetti = new Pasta("wheat", 2, "circle");

    var names = Object.getOwnPropertyNames(spaghetti).filter(CheckKey);
    document.write(names); 

    // Check whether the first character of a string is 's'. 
    function CheckKey(value) {
        var firstChar = value.substr(0, 1); 
        if (firstChar.toLowerCase() == 's')
            return true; 
        else
             return false; 
    }
    // Output:
    // size,shape