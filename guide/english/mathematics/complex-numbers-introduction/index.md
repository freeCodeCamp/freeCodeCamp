---
title: Complex Numbers Introduction
---
## Complex Numbers Introduction

A complex number is any number that can be expressed in the form of z = a + ib, where a and b are real numbers and i is a root of the equal x<sup>2</sup> + 1 = 0. The reason the letter i is chosen is because there are no real solutions, so i is called *imaginary*. Note that i<sup>2</sup> = -1 (as well as (-i)<sup>2</sup> = -1). For the complex number z = a + bi, a is called the *real part*, and b is called the *imaginary part*.

For example, the complex number 3 + 4i has real part 3 and imaginary part 4. The real part of i is 0, and the imaginary part of 2 is 0. In particular, every real number can be thought of as a complex number with imaginary part 0. The set of complex numbers with real part 0 is called the set of *imaginary numbers*.

With real numbers you can *order* them, meaning that for any two real numbers a and b you either have
```
a < b, a > b or a = b.
```
However, with complex numbers this is [no longer](https://math.stackexchange.com/a/488015/12133) the case. The complex numbers, however, can be compared in *size*. Drawing a complex number on the plane, with one axis the real axis, the other the imaginary axis, we can view a complex number a + bi as the point (a, b) in the plane. With this idea, we say the size or magnitude of a complex number a + bi is the length from the origin two the point (a, b), which by Pythagoras is sqrt(a<sup>2</sup> + b<sup>2</sup>).

With this in mind, looking at our examples above again we see that 3 + 4i has magnitude sqrt(9 + 16) = sqrt(25) = 5, while i has size 1 and 2 has size 2. In particular, our notion of size is compatible with that of the size of a real number.

### Similarities to Real Numbers

Any complex numbers z = a + bi and w = c + di can be added
```
z + w = (a + c) + (b + d)i
```
subtracted
```
z - w = (a - c) + (b - d)i
```
multiplied
```
zw = (a + bi)(c + di)
   = ac + adi + bci + bdi^2 
   = (ac - bd) + (ad + bc)i
```
and divided,
```
z/w = (a + bi)/(c + di)
    = [(a + bi)*(c - di)]/[(c + di)(c - di)]
    = [(ac + bd) + (bc - ad)i]/[(c^2 + d^2) + (cd - cd)i]
    = (ac + bd)/(c^2 + d^2) + i*(bc - ad)/(c^2 + d^2).
```
With division we used a special property of complex numbers, namely the *conjugate* of a complex number c + di is the complex number c - di, which is special because (c + di)(c - di) = c^2 + d^2 is a real number.

### Geomtry

With our view of complex numbers in the plane, note that multiplcation can be thought of as rotation in the plane. Looking at 1, i, i<sup>2</sup> = -1 and i<sup>3</sup> = -i, we see that multiplication by i is a 90 degree rotation. With this in mind we can describe complex numbers on the plane in a different way, using the magnitude of the point (the distance between the point and the origin) and the angle between the line connecting the origin to the point and the x-axis.

Continuing with our examples, we have 3 + 4i = 5e<sup>&theta;</sup> where &theta; is approximately 53 degrees, with sin(&theta;) = 4/5. Similarly, i = e<sup>&pi;/2</sup> and 2 = 2e<sup>0</sup> = 2.

Every complex number z = a + bi can also be written in the form z = re<sup>&theta;</sup>, where r = sqrt(a^2 + b^2) is the magnitude of z, theta is the angle between the line connecting z to the origin, and e is the base of the natural logarithm, or Euler's number. With this form in mind, Euler showed a beautiful [formula](https://en.wikipedia.org/wiki/Euler%27s_formula), that e<sup>ix</sup> = cos(x) + i\*sin(x) for any real number x. In particular, e<sup>i&pi;</sup> = -1, a strikingly simple relationship involving the fundamental constants i, &pi; and 1.

Multiplication and division of complex numbers is much simpler in this form as re<sup>&theta;</sup> &times; se<sup>&phi;</sup> = rse<sup>&theta; + &phi;</sup> and combined with Euler's identity this representation of complex numbers has many uses. One needs to be careful though, for example, e<sup>i*&pi;</sup> = e<sup>5i*&pi;</sup> = -1, so when converting between representations you need to keep track of the angles, or when discussing functions you need to use [branch cuts](https://math.stackexchange.com/questions/1184863/what-is-a-simple-way-of-describing-branch-cuts) to ensure you functions are [indeed functions](https://en.wikipedia.org/wiki/Well-defined).

### Important Results

One of the most important results in complex analysis is the [Fundamental Theorem of Algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra) which in many ways was one of the largest motivations to define and study complex numbers. It states that polynomials of one variable, of degree n > 0, factor into a product of n linear factors. 

Despite the complex numbers beings more... complex... than the real numbers, such as not being able to order them, the extra structure simplifies things greatly. One other substantial simplification comes with [differentiability](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations#Complex_differentiability). The difficult-to-work-with definition of a derivative via limits can be simplified into a [simple check](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations) not involving complex numbers, and if a function is differentiable it is infinitely differentiable, that is, there do not exist complex differentiable functions whose derivatives are not differentiable, far in contrast to the case with real functions.

### Applications

One can go [on](https://en.wikipedia.org/wiki/Contour_integration) and [on](https://en.wikipedia.org/wiki/Fourier_transform) (and [on](https://en.wikipedia.org/wiki/Conformal_map)!) about the benefits of studying complex numbers in mathematics, and [on](https://en.wikipedia.org/wiki/Complex_number#Electromagnetism_and_electrical_engineering) and [on](https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation) (and [on](https://en.wikipedia.org/wiki/String_theory)!) with the benefits of complex numbers to real world problems. There is simply too much to be said for how important complex numbers are in mathematics. ...and [on](https://en.wikipedia.org/wiki/Algebraically_closed_field) and [on](https://en.wikipedia.org/wiki/Riemann_zeta_function) and [on](https://en.wikipedia.org/wiki/Modular_curve) and [on](https://en.wikipedia.org/wiki/Elliptic_curve) and [on](https://math.stackexchange.com/questions/2877155/motivation-behind-using-complex-numbers-in-combinatorics)...
