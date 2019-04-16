---
title: Imaginary Numbers
---
## Imaginary Numbers

The [complex numbers](https://en.wikipedia.org/wiki/Complex_number) are an extension of the [real numbers](https://en.wikipedia.org/wiki/Real_number); they are the set of all numbers of the form `a + bi` where `a` and `b` are real numbers and `i` is a complex unit, typically taken to be the positive square root of `-1`. In other words, we let `i = sqrt(-1)` and then extend the rules of addition and multiplication with real numbers to this bigger set, given `i^2 = (-i)^2 = -1`.

For example, the polynomial `x^2 + 1` does not factor over the real numbers, as the quadratic formula suggests the roots should be
```
[-0 ± sqrt(0^2 - 4*1*1)]/(2*1) = ± sqrt(-4)/2,
```
which does correspond to real numbers. However, in the complex numbers we see the roots immediately, `i` and `-i`, as `sqrt(-4)/2 = 2*sqrt(-1)/2`.


The *imaginary numbers* are a subset of the complex numbers, the set of complex numbers of the form `bi`, i.e., with real part 0. So, `i, 2i` and `-3i` are all imaginary numbers, while `1, 1 + i, 1 - i` and `-2 - 3i` are not. As `0 = 0*i` it is the only real *and* imaginary number.

One astounding connection between the set of imaginary numbers and the set of complex numbers is [Euler's formula](https://en.wikipedia.org/wiki/Euler%27s_formula), which states that
```
e^(ix) = cos(x) + i*sin(x)
```
for any real number `x`. So every complex number can be represented as some real multiple of `e` to the power of an imaginary number.