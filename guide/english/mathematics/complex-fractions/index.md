---
title: Complex Fractions
---
## Complex Fractions

Complex fractions are fractions that contain fractions in the numerator or denominator, e.g., (1/2)/3 and 1/(2/3) as well as (1/2)/(3/4) are complex fractions. To work with/simplify these fractions there is really only one rule to keep in mind:
```
(a/b)/(c/d) = (a/b)*(d/c)
```
when `b`, `c` and `d` are not 0. Namely, dividing by a fraction is the same thing as multiplying by it's [reciprocal](https://en.wikipedia.org/wiki/Multiplicative_inverse). To see this, note that multiplying both sides of our expression above by `c/d` gives
```
[(a/b)/(c/d)]*(c/d) = (a/b)
```
one the left, and
```
[(a/b)*(d/c)]*(c/d) = [(a*d)/(b*c)]*(c/d)
                    = (a*d*c)/(b*d*c*) = a/b
```
on the right, so going backwards and dividing `a/b` by `c/d` indeed gives the product `(a/b)*(d/c)`.

Using this, our examples above can be simplified to
```
(1/2)/3 = (1/2)*(1/3) = 1/6,
1/(2/3) = 1*(3/2) = 3/2,
(1/2)/(3/4) = (1/2)*(4/3)
            = 4/6 = 2/3.
```

This extends to [real numbers](https://en.wikipedia.org/wiki/Real_number), [complex numbers](https://en.wikipedia.org/wiki/Complex_number) and [algebraic expressions](https://en.wikipedia.org/wiki/Algebraic_expression) as well. For example,
```
(pi/2)/2 = pi/4,
1/(sqrt(2)/2) = 2/sqrt(2)
              = 2*sqrt(2)/2
              = sqrt(2).
```
and
```
(1 + 1/x^2)/(2x + 2/x^3) = [(x^2 + 1)/x^2]/[(2x^4 + 2)/x^3]
                         = [(x^2 + 1)/x^2)]*[x^3/(2x^4 + 2)]
                         = [(x^2 + 1)*x^3]/[x^2*(2x^4 + 2)]
                         = [(x^2 + 1)*x]/[(2x^4 + 2)].
```
Note that in the example above we needed to get the numerator and denominator into a fractional form before being able to use the rule where division by a fraction is equivalent to multiplying by a denominator. Similarly, if we want to simplify
```
(1 + 1/2)/(2 + 2/3)
```
we must first simplify this into a fraction divided by another fraction to be able to use our rule above. We have
```
1 + 1/2 = (2 + 1)/2 = 3/2,
2 + 2/3 = (2*3 + 2)/3 = 8/3,
```
so we have
```
(1 + 1/2)/(2 + 2/3) = (3/2)/(8/3) = (3/2)*(3/8) = 9/16.
```
