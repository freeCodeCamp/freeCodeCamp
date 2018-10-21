---
title: Equality Vs Identity Operator
---
In JavaScript there are 2 operators that could be used to compare two values: _==_ and _===_. They seem to be exactly the same but they work differently and in some cases they will give different results.

## Equity operator

Equality operator (==) compares two values after all necessary type conversions. Let's take a look at a few examples:

    0 == ''             // -> true
    false == 'false'    // -> false

In the first example both 0 and '' (empty string) undergo automatic conversion. They are both converted to false giving:

    false == false

Which is obviously _true_. In the second example _'false'_, a non-empty String is evaluated to true making the whole expression false.

## Identity operator

In comparison, identity operator (===) will return true if and only if both values that are being compared are of the same type and have the same value. If we try to compare values of two different types, it will always return _false_.

    false === 0            // -> false
    0 === ''              // -> false
    5 === 5                  // -> true

To be precise, === checks whether two variables reference the same object, or in case of value types (like _int_, _double_, _String_, _bool_, etc.) if they both have the same value.

    var array1 = [ 5, 6, 7 ];
    var array2 = [ 5, 6, 7 ];
    var array3 = array2;

    array1 === array2      // -> false
    array1 == array2      // -> false

    array2 === array3      // -> true
    array2 == array3      // -> true

Both _array1_ and _array2_ have the same type and they are equal but comparison _array1 === array2_ returns false as they refer to different objects. _array2 === array3_ returns true as both variables refer to the same object.

## Which operator should I use?

It's important to understand the difference between _==_ and _===_ but which operator should be used?

When using _==_ operator JavaScript will perform all conversions necessary to compare two values. It seems to be really convenient but effects of this conversion might be confusing and cause very difficult to track bugs.

Douglas Crockford, author of the book _JavaScript: The Good Parts_ suggests that _===_ should be used everywhere, instead of _==_ operator to avoid potential bugs. In most of the cases you should follow this advice, unless you specifically want to take advantage of automatic type conversion.