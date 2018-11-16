---
title: Factoring Quadratics
---
## Factoring Quadratics

For any quadratic polynomial p(x) = ax<sup>2</sup> + bx + c (or equation 0 = ax<sup>2</sup> + bx + c) we can ask whether it has a [root](https://en.wikipedia.org/wiki/Properties_of_polynomial_roots) (or solution), namely some r such that p(r) = 0. If the polynomial has one root then there exists some s (maybe equal to r) such that p(s) = 0, and p(x) = a(x - r)(x - s). We will cover two methods in how to find such a factorization, one simple approach when the polynomial has nice coefficients, and then the general case that always works.

### Simple approach

If we have a polynomial p(x) = ax<sup>2</sup> + bx + c that factors as above, then multiplying out the factorization gives

<p align='center'>p(x) = a(x - r)(x - s) = ax<sup>2</sup> - a(r + s)x + ars,</p>

so b = -a(r + s) and c = ars. When the coefficients a, b and c are nice enough, this can be used to find the factorization. E.g., for the polynomial q(x) = x<sup>2</sup> + 2x + 1, we can see find the factorization by solving for r and s such that

<p align='center'>2 = -(r + s),   1 = rs.</p>

Writing r = 1/s and plugging this into the other equation we find 2 = -(s + 1/s), and we see that s = -1 satisfies the equation, so r = 1/(-1) = -1, and our roots are -1 and -1, i.e., q(x) = (x - (-1))(x - (-1)) = (x + 1)(x + 1).

In general, when trying to factor the polynomial p(x) = ax<sup>2</sup> + bx + c you can try this approach, e.g., if there *were* a factorization a(x - r)(x - s) then multiplying it out is equal to the polynomial and you have a system of two equations -- one for b and one for c -- in two unkonwns -- r and s -- so may be able to find the factors. However, when the coefficients are not nice, and solving the system of equations could be quite tedious (see below), there is an easier approach.

### General approach

The [quadratic formula](https://en.wikipedia.org/wiki/Quadratic_formula) can always be used to find roots, if they exist. If we have our polynomial p(x) = ax<sup>2</sup> + bx + c, then the quadratic formula,

<p align='center'>x = [-b &pm; sqrt(b<sup>2</sup> - 4ac)]/(2a)</p>

gives the two roots (one for the plus, one for the minus), with one subtlety that we will address after some examples that point to the issue.

So, let's first try our simple polynomial above. We have q(x) = x<sup>2</sup> + 2x + 1, so b = 2 and a = c = 1. The quadratic formula then gives the two roots as

<p align='center'>[-2 &pm; sqrt(4 - 4)]/2 = -1.

So, as above, we have q(x) = (x - (-1))(x - (-1)) = (x + 1)(x + 1).

For an example where solving the system of equations might not be pleasant, consider the polynomial

<p align='center'>f(x) = x<sup>2</sup> + &pi;x - e.</p>

To find the factorization of this, we try the quadratic formula once again

<p align='center'>[-&pi; &pm; sqrt(&pi;<sup>2</sup> - 4*(-e))]/2 = [-&pi; &pm; sqrt(&pi;<sup>2</sup> + 4e)]/2.</p>

So the roots are [-&pi; + sqrt(&pi;<sup>2</sup> + 4e)]/2 and [-&pi; - sqrt(&pi;<sup>2</sup> + 4e)]/2. (Now imagine trying to find this using, instead, the system of equations.) Our polynomial can then be written as

<p align='center'>f(x) = (x - [-&pi; + sqrt(&pi;<sup>2</sup> + 4e)]/2)(x - [-&pi; - sqrt(&pi;<sup>2</sup> + 4e)]/2).</p>

#### Caution when using the quadratic formula

Now, everything seems to be quite straightforward (albeit messy when the roots are messy) simply using the quadratic formula, so let's see where the subtlety mentioned above comes from. Consider the polynomial g(x) = 2q(x) = 2(x<sup>2</sup> + 2x + 1) = 2x<sup>2</sup> + 4x + 2. The quadratic formula tells us the roots are

<p align='center'>[-4 &pm; sqrt(4<sup>2</sup> - 4*2*2)]/(2*2) = -1,</p>

so we could try, as above, to write g(x) = (x - (-1))(x - (-1)) = (x + 1)(x + 1) = x<sup>2</sup> + 2x + 1 &ne; g(x). The problem is any multiple found in every coefficient factors out of the quadratic formula. Indeed, if we let a' = an, b' = bn and c' = cn, then we have

<p align='center'>[-b' &pm; sqrt((b')<sup>2</sup> - 4(a')(c'))]/(2a') = [-bn &pm; sqrt(n<sup>2</sup>(b<sup>2</sup> - 4ac))]/(2an)</p>

so the n cancels out. Hence, for our example with g(x) above we note that there is a common factor/multiple of 2 among all the coefficient, so with our roots from the quadratic formula we have

<p align='center'>g(x) = 2(x + 1)(x + 1).</p>

For a more complicated example, suppose we wish to factor h(x) = (5/2)x<sup>2</sup> + (17/10)x - 1/6. The quadratic formula gives

<p align='center'>[-(17/10) &pm; sqrt((17/10)<sup>2</sup> - 4*(5/2)*(1/6))]/5 = [-51 &pm; sqrt(4101)]/150</p>

and so h(x) = (5/2)(x - (-51 + sqrt(4101))/150)(x - (-51 - sqrt(4101))/150).

#### Cannot always factor

Lastly, note that when working over the real numbers, not every quadratic polynomial factors. For example, let k(x) = x<sup>2</sup> + 1. Then the quadratic formula tells us the roots are

<p align='center'>[0 &pm; sqrt(-4)]/2</p>

but there are no real numbers that square to -4. To be able to factor every quadratic into linear factors we need to extend ourselves to the [complex numbers](https://en.wikipedia.org/wiki/Complex_number), to which we find k(x) = (x - i)(x + i).
