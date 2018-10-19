---
title: Immutable Types
---
> Immutable means unchangeable i.e. you can't change.

Javascript has lots of immutable types e.g. `string` primitive type. Try this in your console.

    s = "red";
    console.log(s[1]); //→ "e"
    s[1] = "x";
    console.log(s) //→ "red"

the `s` didn't change! <a>WAT</a>!

## Details

Some string methods like `String.replace` returns a new string.

JavaScript has one complex data type, the Object data type, and it has five simple data types: Number, String, Boolean, Undefined, and Null. These simple (primitive) data types are immutable (cannot be changed), while objects are mutable (can be changed).
