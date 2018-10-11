---
title: Object Values
---
The `Object.values()` method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

## Syntax

    Object.values(obj)

### Parameters

**obj**

The object whose enumerable own properties are to be returned.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values' target='_blank' rel='nofollow'>MDN link</a>

## Description

`Object.values()` returns an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the property values of the object manually. In other words, an object has key:value pairs, and this method returns all the *values* of that object in an array-like object. 

See [Object.keys](https://guide.freecodecamp.org/javascript/standard-objects/object/object-keys/), which returns all the *keys* of that object in an array-like object.

## Examples

    var obj = { foo: 'bar', baz: 42 };
    console.log(Object.values(obj)); // ['bar', 42]

    // array like object
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.values(obj)); // ['a', 'b', 'c']

    // array like object with random key ordering
    var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.values(an_obj)); // ['b', 'c', 'a']

    // getFoo is property which isn't enumerable
    var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
    my_obj.foo = 'bar';
    console.log(Object.values(my_obj)); // ['bar']

    // non-object argument will be coerced to an object
    console.log(Object.values('foo')); // ['f', 'o', 'o']

**doesn't work in Internet Explorer*
