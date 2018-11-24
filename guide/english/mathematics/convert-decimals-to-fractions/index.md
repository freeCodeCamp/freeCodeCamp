---
title: Convert Decimals to Fractions
---

There are two approaches to converting rational numbers from their decimal representation to a fraction, one for finite decimals and another approach for infinite decimal expansions such as 1/3 = 0.333.... We will start with finite decimal numbers and make our way to any decimal numbers, including many examples along the way to help make each step of the process clear.

## Convert Finite Decimals to Fractions

Suppose we have a finite decimal number x that we wish to convert to a fraction. If the decimal has `n` digits after the decimal point, multiply and divide by `10^n`
```
x = (x*10^n)/10^n
```
The numerator is an integer, as multiplying `x` by `10^n` moves the decimal point to the right `n` spaces -- precisely the number of spaces we have -- and the denominator `10^n` is an integer, so this is a fraction representing our number. If possible, it is best to simplify common factors from the numerator and denominator.

### Example 1

Convert `0.25` to a fraction.

As `x = 0.25` has `n = 2` digits after the decimal point, we multiply by `10^2 = 100` to get
```
0.25 = (0.25*100)/100 = 25/100 = 5/20 = 1/4
```
and any of the three fractions on the right is a fractional representation of `0.25`.

### Example 2 

Convert `0.002` to a fraction.

As `x = 0.002` has `n = 3` digits after the decimal point, we multiply by `10^3 = 1000` and have
```
0.002 = (0.002*1000)/1000 = 2/1000 = 1/500.
```
### Example 3

Convert `0.103` to a fraction.

As `x = 0.103` has `n = 3` digits after the decimal point, we multiply by `1000` again,
```
0.103 = (0.103*1000)/1000 = 103/1000.
```

## Convert Infinite Decimals to Fractions

If an infinite decimal expansion corresponds to a rational number, it must repeat after a certain point, for example `1/3 = 0.333...` with 3s repeating, and `1/10 = 0.090909...` with the `09` pattern repeating. This repeating pattern is what we use to convert the decimal representation to a fraction.

Suppose we have a rational number `y` whose decimal consists of a repeating pattern `p` which is `m` digits.

### Example 4

Convert `y = 0.090909...` to a fraction.

We have a repeating pattern `p = 09` of `m = 2` digits. So we can write
```
y = p/(10^2) + p/[(10^2)^2] + p/[(10^2)^4] + p/[(10^2)^6] + ...
```
which is a [geometric series](https://en.wikipedia.org/wiki/Geometric_series) with initial term `a = p/100 = 9/100` and common ratio `r = 1/100`. Thus, we have
```
y = a/(1 - r) = (9/100)/(1 - 1/100) = (9/100)/(99/100) = 9/99 = 1/11
```
as expected.

### First General Method

In general, our decimal `y` with repeating pattern `p` of `m` digits can be written as the geometric series
```
y = p/(10^m) + p/[(10^m)^2] + p/[(10^m)^3] + p/[(10^m)^4] + ... 
  = [p/(10^m)]/[1 - 1/(10^m)]
  = [p/(10^m)]/[(10^m - 1)/(10^m)]
  = p/(10^m - 1)
```
Just as with finite decimal numbers there is a quick and easy fraction that represents the number; it can be described using only the repeating pattern in the decimal. However, with infinite decimal expansions you can have examples where it is not just a repeating pattern, for example `1/110 = 0.0090909...` has repeating pattern `09` *after* an initial 0, and `203/240 = 0.8458333...` with repeating 3s eventually, but the initial 8458 as well.

Here we see that we have a *finite* start of the decimal that is not part of the pattern that repeats forever, and then an *infinite* decimal expansion afterwards, so we need only combine both of the methods seen above!

### Example 5

Convert `0.8458333...` to a fraction.

We have
```
0.8458333... = 0.8458 + 0.0000333...
```
and so with our first method we know that
```
0.8458 = 8458/10000 = 4229/5000
```
while the second term is four 0s followed by a repeating pattern where we can use our general method above. To deal with 0s we use our first trick, multiply and divide by `10^4` as there are four of them, to get the repeating pattern to start at the decimal point. Namely, we have
```
0.0000333... = (0.0000333...)*10000/10000 = (0.333...)/10000
```
and
```
0.333... = 3/10 + 3/100 + 3/1000 + ...
         = 3/9 = 1/3
```
using our general formula above. Hence `0.0000333... = (1/3)/10000 = 1/30000` and putting everything together,
```
0.8458... = 4229/5000 + 1/30000 = 25375/30000 = 203/240
```
as expected.

### Generial Method

So let's put everything together into one process that works for all decimals, where we have a formula that tells us exactly what the fraction corresponding to a decimal number is.

1. Separate your decimal number into it's finite non-repeating part, and the pattern that repeats forever (for finite deicmals the repeating part is 0s).
2. If the initial, non-repeating part has `n` digits after the decimal, then the repeating pattern starts after `n` digits, so if we call our non-repeating part `x` and our repeating pattern `p` which is `m` digits in length, our decimal number is equal to the fraction.
```
(x*10^n)/10^n + [p/(10^m - 1)]/10^n = [(x*10^n)*(10^m - 1) + p]/[(10^n)*(10^m - 1)],
```
the first term just the finite conversion method above, the second term the general term from above (adjusted for the initial `n` 0s) and the right hand side just finding a common denominator and simplifying the left hand side.

Let's see one more example using this last formula.

### Example 6

Convert ` 1.35285714285714...` to a fraction.

The non-repeating part is the initial `1.35` while the repeating pattern is `285714`, so for our formula above we have `p = 285714`, `x = 1.35`, `n = 2` and `m = 6`. Pluggin these in gives
```
1.35285714285714... = [(1.35)*10^2(10^6 - 1) + 285714]/[10^2(10^6 - 1)]
                    = [135*999999 + 285714]/99999900
                    = 135285579/99999900
                    = 947/700.
```
