---
title: Deriving Integration by Parts Formula
---
## Deriving Integration by Parts Formula

Integration by parts is a very powerful method to evaluate integrals that is almost an immediate consequence of the product rule for derivatives. It gives an alternate expression for an integral of a product, though this alternate expression is not always simpler, and it can be something of an art to see how to apply the formula well.

Suppose we have two functions u(x) and v(x), both of which are continuously differentiable, that is, they are differentiable and their derivatives are continuous. Then

<p align='center'>&int; u(x)v'(x) dx = u(x)v(x) - &int; u'(x)v(x) dx,</p>

and similarly for the definite integral on the interval [a,b]
<p align='center'>&int;<sub>a</sub><sup>b</sup> u(x)v'(x) dx = [u(x)v(x)]<sub>a</sub><sup>b</sup> - &int;<sub>a</sub><sup>b</sup> u'(x)v(x) dx.</p>

To see how this holds, we start with the familiar [product rule](https://en.wikipedia.org/wiki/Product_rule),
<p align='center'>[u(x)v(x)]' = u'(x)v(x) + u(x)v'(x).</p>

Integrating both sides (with respect to x) gives

<p align='center'>&int; [u(x)v(x)]' dx = &int; u'(x)v(x) dx + &int; u(x)v'(x) dx</p>

and by the [Fundamental Theorem of Calculus](https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus) for the definite case, or simply the antiderivative in the indefinite case, this means

<p align='center'>u(x)v(x) = &int; u'(x)v(x) dx + &int; u(x)v'(x) dx.</p>

Rearranging yields the formula given above. Writing v'(x) dx = dv and u'(x) dx = du, we may rewrite the formula as

<p align='center'>uv = &int; v du + &int; u dv</p>

which is frequently the easier way to think about and use it.

### Example

Suppose we wish to evalute the following integral

<p align='center'>&int; xln(x) dx.</p>

Then we have two obvious choices for our u(x) and v(x). Namely, either we use u = ln(x) and dv = x dx, or u = x and dv = ln(x) dx. If we use the first option, then du = 1/x dx and v = x<sup>2</sup>/2, so the integration by parts formula gives

<p align='center'>&int; xln(x) dx = ln(x)x<sup>2</sup>/2 - &int; x/2 dx</p>

and the integral on the right hand side is simply equal to x<sup>2</sup>/4 + C. Thus, we have

<p align='center'>&int; xln(x) dx = x<sup>2</sup>[ln(x) - 1/2] + C. </p>

Note that, had we tried the other choice of u and dv, things do not turn out the same. Indeed, if we set u = x and dv = ln(x) dx we have du = dx and v = x(ln(x) -1) so that

<p align='center'>&int; xln(x) dx = x<sup>2</sup>(ln(x) -1) - &int; x(ln(x) - 1) dx, </p>

and the integral on the right is (essentially) the same as what we wanted to simplify! So this choice doesn't just not work, it fails catastrophically. The choice of u and dv can work at times, but not in others.

### (More) Difficult Example

Unlike the above example where one choice of u and dv work while the other doesn't, there are times where none of the available choice gives an integral easy to evaluate. However, integration by parts can give you a simplification that can be used to -- with more work -- evaluate the integral as desired. For example, consider the integral

<p align='center'>&int; x<sup>2</sup>e<sup>x</sup> dx</p>

We have four obvious choices for u and dv coming from choosing u to be x, x<sup>2</sup>, xe<sup>2</sup> or e<sup>x</sup>. We will use u = x<sup>2</sup> so that dv = e<sup>x</sup> dx. Then du = 2x dx and v = e<sup>x</sup>, so integration by parts gives

<p align='center'>&int; x<sup>2</sup>e<sup>x</sup> dx = x<sup>2</sup>e<sup>x</sup> - &int; 2xe<sup>x</sup> dx.</p>

The integral on the right hand side is not easy to evaluate as in the example above, but it is different from the first integral, so we can try to use integration by parts again and see what happens. This time we choose u = x and dv = e<sup>x</sup> dx so that

<p align='center'>&int; xe<sup>x</sup> dx = xe<sup>x</sup> - &int; e<sup>x</sup> dx = xe<sup>x</sup> - e<sup>x</sup>.</p>

Hence, putting both of these together gives

<p align='center'>&int; x<sup>2</sup>e<sup>x</sup> dx = x<sup>2</sup>e<sup>x</sup> - 2(xe<sup>x</sup> - e<sup>x</sup>) + C</p>

which can be simplified to simply e<sup>x</sup>(x<sup>2</sup> - 2x + 2) + C. Not so bad after all!

### How to Choose u, dv

There is unfortunately no guarantee that integration by parts will always work. However, we see in the examples above that each application that helped took an integral with udv and return a "simpler" integral of vdu, so one can try to look for choices of u and dv for which v and du are simpler. In particular, you can try to choose u to simplify under differentiation (e.g., polynomials always get smaller in degree when differentiated) while trying to choose v to not get more complex under itegration (e.g., &int; e<sup>x</sup> dx = e<sup>x</sup>).

A general rule is the [LIATE rule](https://en.wikipedia.org/wiki/Integration_by_parts#LIATE_rule), that when your integral contains
* Logarithmic functions
* Inverse trigonometric functions
* Algebraic functions
* Trigonometric functions
* Exponential functions

you try to pick u to be whichever function comes first and dv whichever function comes last on the list.

This is, however, just a rule of thumb. At times the ILATE rule is more appropriate, and some [other times](https://math.stackexchange.com/a/1620898/12133) you simply need to choose differently. At times no choice will work, for example

<p align='center'>&int; e<sup>x<sup>2</sup></sup> dx.</p>

### Generalizations

The above only discussed integration by parts for real valued functions of one variables, however similar formulas exist for [multiple real variables](https://en.wikipedia.org/wiki/Integration_by_parts#Higher_dimensions), [complex variables](https://math.stackexchange.com/questions/505857/integration-by-parts-in-complex-analysis) and [many more](https://en.wikipedia.org/wiki/Integration_by_parts#See_also) theories of integration.
