---
title: Evaluating Polynomials Synthetic Division
---
## Evaluating Polynomials Synthetic Division

Here is an algorithm for evaluating a polynomial via synthetic division to test for a zero of the polynomial.

In this algorithm the polynomial is a quadratic having the coefficients A, B, and C. i.e. Ax^2 + Bx + C is our equation and we want to test if Q is a zero of the equation. T is a temporary variable used to hold results of each step and is used in the following step before being assigned the next intermediate result.

T = A * Q 
T = T + B
T = T * Q
T = T + C
If T = 0 then Q is a zero of the polynomial

Synthetic division can be used to check zeros of higher order polynomials and even just to divide a poloynomial by an arbitrary other polynomial. Those cases are beyond this example.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


