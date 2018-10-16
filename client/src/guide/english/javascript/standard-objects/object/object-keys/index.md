---
title: Object Keys
---
The `Object.keys()` method returns an array of a given object's own enumerable properties, in the same order as that provided by a `for...in` loop (the difference being that a `for-in` loop enumerates properties in the prototype chain as well).

## Syntax

    Object.keys(obj)

### Parameters

**obj**

The object whose enumerable own properties are to be returned.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/ff688127%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Description

`Object.keys()` returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.

## Examples

    var arr = ['a', 'b', 'c'];
    console.log(Object.keys(arr)); // console: ['0', '1', '2']

    // array like object
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.keys(obj)); // console: ['0', '1', '2']

    // array like object with random key ordering
    var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

    // getFoo is property which isn't enumerable
    var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
    my_obj.foo = 1;

    console.log(Object.keys(my_obj)); // console: ['foo']

    // Create a constructor function.
    function Pasta(grain, width, shape) {
        this.grain = grain;
        this.width = width;
        this.shape = shape;

        // Define a method.
        this.toString = function () {
            return (this.grain + ", " + this.width + ", " + this.shape);
        }
    }

    // Create an object.
    var spaghetti = new Pasta("wheat", 0.2, "circle");

    // Put the enumerable properties and methods of the object in an array.
    var arr = Object.keys(spaghetti);
    document.write (arr);

    // Output:
    // grain,width,shape,toString