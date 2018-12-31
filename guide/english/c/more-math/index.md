---
title: More math
---

# More math in C
Okay, so you've seen the basics. There's a lot more out there in C, though, so here's a look at that.

## Order of Operations
Take a look at the following equation:
> 1 + (3-2) * 5

If we were to simply read and compute from left to right, we would take 1, add 3, subtract 2, and multiply by 5, getting 10. However, this neglects order of operations. We should do (3-2) first, getting 1, then multiply by 5, then add 1. This gives an answer of 6.

Just like in regular math, C has an order of operations. Operations have a precedence, and if one operation has a higher precedence than another, the higher precedence will be computed first. Using parenthesis can increase that precedence, just like in normal math.

## Unary Operations
Unary operations are operations where there is only one variable. There are a few in C.

### Post-fix and Pre-fix Operators
There are a lot of situations where you want to take a number and either go up or down by 1. For those situations, we have post-fix and pre-fix operators:
```C
1: a++;
2: ++a;

3: a--;
4: --a;
```
Both the examples at 1 and 2 will increase the value of a by one. Both of the examples at 3 and 4 will decrease the value of a by one. However, 1 does not do quite the same thing as 2, and 3 does not do quite the same thing as 4. Pre-fix operators are called this because the operation is a prefix (2 and 4 are our prefix operators). This acts slightly differently from our post-fix operators at 1 and 3. Pre-fix operators perform the operation, then return the value. Post-fix operators return the value, then perform the incrementation. You can see the effects of this difference here:

```C
int a = 1; 
int b = ++a; // b = 2, a = 2

int c = 1;
int d = c++; //c = 2, d = 1 
```

### Unary plus and minus
In the normal math you're used to, you use a '-' in front of a number or variable, and that makes the number or variable negative. If the number or variable is already negative, it becomes positive.

C does the same thing: put a `-` in front of a number or variable to have that effect, like so:
```C
int number = -3;
number = -number;
```
So `number` starts as negative 3, but then becomes positive because a negative negative is positive.

## Bitwise operations
Because C is low level as mentioned before, you have access to the individual binary bits (if you choose to take advantage of this). There are some binary operations built in to let us do this. For these examples, we'll use `a` and `b` as our variables. They can be any sort of variable because all variables will be represented in bits, so the exact data type doesn't matter for these.
### AND
`c = a & b;` will perform a bitwise AND. This means that if the first bit of `a` and the first bit of `b` are both 1, the first bit of c will be 1, and 0 otherwise. If the second bit of `a` and `b` are both 1, the second bit of c will be 1, and 0 otherwise. This goes on until all bits have been and'd.

Example:

| Bit   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|:-----:|---|---|---|---|---|---|---|---|
| a     | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| b     | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 |
| a & b | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |

### OR
`c = a | b;` will perform a bitwise OR. The first bit of `c` is 1 if the first bit in either `a` or `b` is 1, the second bit is 1 if the second bit in either `a` or `b` is 1, and so on.

Example:

| Bit    | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|:------:|---|---|---|---|---|---|---|---|
| a      | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| b      | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 |
| a \| b | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 |

### NOT
`b = ~a;` will set `b` to the one's complement of `a`, meaning that any 1 becomes a 0 and any 0 becomes a 1.

### XOR
`c = a ^ b;` will perform a bitwise XOR. This is an exclusive or, meaning that the first bit of `c` is 1 if either `a` or `b` is 1, but not both. The second bit is 1 if either is 1 but not both, and so on.

Example:

| Bit   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|:-----:|---|---|---|---|---|---|---|---|
| a     | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| b     | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 |
| a ^ b | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 1 |

### Shift
A bitwise shift will take the bits and move them to some number of places to the left or right. For example, say we have a set of bits: `101110`. C performs an arithmetic shift when bit shifting. Let's use a table to make that more clear:

| Bit   |   | 1 | 2 | 3 | 4 | 5 | 6 |
|-------|---|---|---|---|---|---|---|
|Before |   | 1 | 0 | 1 | 1 | 1 | 0 |
|During | 1 | 0 | 1 | 1 | 1 | 0 |   |
|After  |   | 0 | 1 | 1 | 1 | 0 | 0 |

This is an arithmetic bitwise shift going one to the left. Notice that in the shift left, the leftmost 1 that started in position 1 ended up outside of the space it could fit, so it was removed. In the shift, an opening appeared on the left, so it was filled with a 0.

Now let's take a look at an arithmetic bitshift right by one:

| Bit   | 1 | 2 | 3 | 4 | 5 | 6 |   |
|-------|---|---|---|---|---|---|---|
|Before | 1 | 0 | 1 | 1 | 1 | 0 |   |
|During |   | 1 | 0 | 1 | 1 | 1 | 0 |
|After  | 1 | 1 | 0 | 1 | 1 | 1 |   |

Notice that here a slot opened up in position 1, but instead of being filled by 0, it was filled by the most significant bit. In this case, this is a 1. If the bit that started in position 1 was 0, the gaps would have been filled with 0's.

This is because numbers on your computer are represented using Two's Complement, so shifting in this way doesn't make a negative number positive. Two's Complement is worth reading more on if you are interested in how computers use binary to do math and represent numbers.

To perform a shift left, use the `<<` operator, like so:
```C
c = a << b;
```
This will shift `a` to the left by `b` bits, and set that result equal to `c`.

This example will shift `a` to the right by `b` bits, and set that result equal to `c`.
```C
c = a >> b;

```

## Compound Assignment Operators
Sometimes you want to increase a variable by a certain value. You could do this:
```C
a = a + b;

```
However, this is what the compound assignment operators are for. Instead, you can write this, which does the exact same thing:
```C
a += b;
```
This exists for a bunch of other operators, too. Here's a handy table for you:

 The Short Way  | The Long Way
:--------------:|:------------:
`a += b`        | `a = a + b`
`a -= b`        | `a = a - b`
`a *= b`        | `a = a * b`
`a /= b`        | `a = a / b`
`a %= b`        | `a = a % b`
`a &= b`        | `a = a & b`
`a ^= b`        | `a = a ^ b`
`a <<= b`       | `a = a << b`
`a >>= b`       | `a = a >> b`

There's also `|=`, which isn't on the table because the `|` character breaks the table. It does act like all of these other operations, though.

## Casting
Sometimes you don't want a number to be a number, or you want an integer to be a float, or something like that. That's what casting is for.

As you recall from the discussion of integer division, the following example will give an integer value without any decimal, because both of the numbers going in are integers:
```C
#include <stdio.h>

int main(void) {
    int a = 12;
    int b = 5;

    printf("a divided by b is %i", a/b);
}
```
However, using casting, we can turn them into floats using casting. This allows them to be divided as floats, and the equation will return a float value:

```C
#include <stdio.h>

int main(void) {
    int a = 12;
    int b = 5;

    printf("a divided by b is %f", (float) a / b);
}
```
Now it's a floating point 12 divided by 5, so this returns a floating point number that doesn't truncate after the decimal place.

To turn a number into an `int`, use `(int)`, to turn it into a `double`, use `(double)`, and so on.

## Math.h
So that's all the built-in stuff, but just like how you can `#include` stdio and stdbool, you can include a library called `math.h`. This library has all kinds of helpful functions for all kinds of math. It's worth giving a read to <a href='https://en.wikipedia.org/wiki/C_mathematical_functions#Overview_of_functions' target='_blank' rel='nofollow'>the Wikipedia page on it</a> if you want the full list of functions. Here's an example on how to use `abs`, which is the first in their list:

```C
a = abs(-1);
```
`abs` computes the absolute value of the value passed to it. In this case, it's recieved -1, so it will turn that into 1, and `a` will be equal to 1. There are plenty more to give much more functionality, and this is how you'll be able to do exponents, trigonometry, and much more.

# Before you go on...
## A review
* There's a bunch more math operators in C
* Order of operations exists in C
* Parenthesis exist and work just like regular math to change order of operations
* There are a few Unary Operations, which are operations where there is only one variable:
 * The post-fix and pre-fix operators are used to add and subtract 1
  * Adding one: `++a;` or `a++;`
  * Subtracting one: `--a` or 'a--'
 * `-` can be placed in front of a variable or number and acts just like a negative in math
* There are some bitwise operations, too
 * AND is done with &
 * OR is done with  |
 * NOT is done with ~
 * XOR is done with ^ (XOR doesn't work with floating type number in C)
* Compound assignment operations exist for all of the non-unary operations
 * a += b is the same as a = a + b, and so on
* Casting allows you to swap between data types
* math.h has more math stuff to play with
