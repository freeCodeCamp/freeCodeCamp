---
title: Understanding the Quadratic Formula
---
## Understanding the Quadratic Formula

Every polynomial of degree 2, given by a quadratic equation `y = ax^2 + bx + c`, has either 0, 1 'double' root, or 2 real roots, which are given by the [quadratic formula](https://en.wikipedia.org/wiki/Quadratic_formula)
```
x = (-b +/- sqrt(b^2 - 4ac))/2a,
```
and one can see from this formula, if `b^2 - 4ac > 0`, then there are two distinct solutions,
if `b^2 - 4ac = 0` then `x = -b/2a` is a double root, and if `b^2 - 4ac < 0` then there are no real roots. (If we are working over the [complex numbers](https://en.wikipedia.org/wiki/Complex_number) then there are always two roots as we can take the square root of a negative number.)

You can plug the two values into the equation `ax^2 + bx + c` to verify that they really are solutions, but where does this seemingly magical formula come from and why can the roots of a quadratic formula always be computed so simply like this? Vaguely, it is because we can do some algebra to "solve for `x`", and these are the solutions. Before we see this, note that if we have the two roots, say `x = r` and `x = s`, then we have
```
y = ax^2 + bx + c = a(x - r)(x - s) = a(x^2 - (r + s)x + rs) = ax^2 - a(r + s)x + ars,
```
so it should not be too surprising that there is a relationship between the roots `r` and `s` and the coefficients `a, b` and `c` (though the formula above is by no means clear yet).

To get the formula, note that plugging a root `x` into the equation means we have
```
y = 0 = ax^2 + bx + c,
```
so finding the roots, if they exist, is the same thing as solving this equation for `x`.

The most common way to derive the quadratic fomula starts with `ax^2 + bx + c = 0`, divides both sides by `a` and then [complete's the square](https://en.wikipedia.org/wiki/Completing_the_square) to get an equation where the values of `x` can be written down from the resulting square, but we will use a different approach here, to avoid division which makes everything a little more bulky right away, and makes the algebra more messy throughout. We start by multiplying both sides by `4a` to try and get a square. This gives
```
4a^2x^2 + 4abx + 4ac = 0
```
Now `(2ax + b)^2 = 4a^2x^2 + 4abx + b^2`, which is almost the left hand side, i.e., the left hand side of our equation is almost a square. Instead, we have
```
4a^2x^2 + 4abx = (2ax + b)^2 - b^2,
```
and so substituing this into our equation above gives
```
(2ax + b)^2 - b^2 + 4ac = 0.
```
Rearranging to solve for the square, we have
```
(2ax + b)^2 = b^2 - 4ac,
```
and we can (almost) see the quadratic formula already. Taking square roots gives
```
2ax + b = +/- sqrt(b^2 - 4ac),
```
and subtracting `b` from both sides, then dividing by `2a`, gives the desired result
```
x = (-b +/- sqrt(b^2 - 4ac))/2a.
```

While this may not seem terribly special, just some algebra (and any method of solving for `x` really is 'just some algebra') the quadratic formula should not be taken for granted.

For any linear polynomial `y = mx + b` you can find the root `x = (y - b)/m` when `m` is not 0. For a cubic polynomial `y = ax^3 + bx^2 + cx + d` it is more messy to solve for the roots, but a cubic formula [exists](https://en.wikipedia.org/wiki/Cubic_function#General_formula), and for a quartic polynomial `y = ax^4 + bx^3 + cx^2 + dx + e` it is even more complex but possible to [solve for `x`](https://en.wikipedia.org/wiki/Quartic_function#General_formula_for_roots). However, [no formula can exist](https://en.wikipedia.org/wiki/Abel%E2%80%93Ruffini_theorem) for the general degree 5 of higher polynomial, so the fact that such a concise and simple formula exists for equations of degree 2 is remarkable. (The idea behind why this occurs is a surprisingly complex - but beautiful - consequence of the underlying symmetry roots of polynomials have, which follows from topics in [Galois theory](https://en.wikipedia.org/wiki/Galois_theory).)
