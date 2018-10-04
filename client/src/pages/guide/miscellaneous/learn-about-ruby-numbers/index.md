---
title: Learn About Ruby Numbers
---
### Basics:

*   Ruby has two categories of numbers - integers and floating-point (also called floats).
*   Integers are whole numbers that can be positive or negative but cannot be fractions.
*   Depending on their size, integers can have the class `Fixnum` or `Bignum`.
*   Floats are numbers with a decimal place.

## Examples:

    x = 5.5
    x.class
    # returns
    Float

    x = 5
    x.class
    # returns
    Fixnum

    x = 11122233344455566677
    x.class
    # returns
    Bignum # basically, Bignum is a very large number
    # <a href='http://ruby-doc.org/core-2.0.0/Bignum.html' target='_blank' rel='nofollow'>read this article for more info</a>

## References:

*   <a href='http://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>The official Ruby documentation for integers</a>.
*   <a href='http://ruby-doc.org/core-2.2.0/Float.html' target='_blank' rel='nofollow'>The official Ruby documentation for floats</a>.