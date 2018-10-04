---
title: Bitwise Operators
---
`<<` , `>>` , `&`, `|` , `~`, and `^` are the bitwise operators which operate on one or more bit patterns or binary numerals at the level of their individual bits.

## AND operator

`x & y`

Does a "bitwise and". Each bit of the output is 1 if the corresponding bit of x AND of y is 1, otherwise it's 0.

## OR operator

`x | y`

Does a "bitwise or". Each bit of the output is 0 if the corresponding bit of x AND of y is 0, otherwise it's 1.

## Complement operator

`~ x`

Returns the complement of x - the number you get by switching each 1 for a 0 and each 0 for a 1\. This is the same as -x - 1.

## XOR operator

`x ^ y`

Does a "bitwise exclusive or". Each bit of the output is the same as the corresponding bit in x if that bit in y is 0, and it's the complement of the bit in x if that bit in y is 1.

## Arithmetic shift left operator

`x << y`

Returns x with the bits shifted to the left by y places (and new bits on the right-hand-side are zeros). This is same as multiplying x by 2**y, preserving the sign of the number. Most of the compilers throw a warning when you shift with a count >= sizeof(type). You generally end up with a 0 when you do that.

## Arithmetic shift right operator

`x >> y`

Returns x with the bits shifted to the right by y places. This is same as dividing x by 2**y for an unsigned integer. Right shift of a negative signed number has implementation-defined behaviour. Most of the compilers throw a warning when you shift with a count >= sizeof(type). Shifting it right may fill "empty" bits with the original Most Significant Bit (i.e. perform sign extension) or it may shift in zeroes, depending on platform and/or compiler.

## Logical shift right operator

`x >>> y`

Returns x with the bits shifted to the right by y places. Unlike arithmetic shift, logical shifts do not preseve sign. For example: -2 represented in 8 bits would be 11111110 (because the most significant bit has negative weight). Shifting it right one bit using arithmetic shift would give you 11111111, or -1\. Logical right shift, however, does not care that the value could possibly represent a number; it simply moves everything to the right and fills in from the left with 0s. Shifting our -2 right one bit using logical shift would give 01111111\. This operator is not necessirly present in all languages.