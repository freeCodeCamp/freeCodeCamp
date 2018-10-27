---
title: Adding Fractions
---
## Adding Fractions

A fraction, written a/b, where a is the *numerator* and b is the *denominator*, is a way to describe parts of things. For example, if I take *one* apple from a pile of *three* this can be represented as 1/3. If I have read half of my book with 318 pages, this can be represented as 1/2, or since half of 318 is 159, this can be represented as 159/318 as well.

There are two approaches to adding fractions, the simple case is when the fractions have common denominators, and then there is a little more work when the fractions have different denominators; we first rewrite them in such a way that they do have common denominators and then use the simpler method. We will explain both approaches and present the formulas and examples afterwards.

To see the simple case, with common denominators, let's think about our pile of apples above. If I take a certain number of them, and then you take a certain number of them, we know that the sum, how many we have both taken, is still a part of the whole pile of apples. In other words, we know the sum
```
a/n + b/n
```
should still be some parts of `n`, i.e., it is a fraction of the form `c/n`. Now if
```
a/b + b/n = c/n,
```
we can multiply everything by `n` to see what `c` should be, namely
```
n*(a/n + b/n) = a*n/n + b*n/n = a + b,
```
and
```
n*c/n = c,
```
so `c = a + b` and
```
a/n + b/n = (a + b)/n
```

#### Adding fractions with common denominator

Add the numerators of both fractions and put the sum over the denominator.
```
a/n + b/n = (a + b)/n
```
For example,
```
3/7 + 5/7 = (3 + 5)/7 = 8/7
```
and
```
2/9 + 16/9 = (2 + 16)/9 = 18/9 = 2/1 = 2.
```

But what if we are adding two fractions with different denominators, for example, suppose I take some apples from a pile and you take some oranges from a different pile, then we know the amount that we are both holding is not a part of the pile or applies, nor a part of the pile or oranges. We know that it is a part of how many apples and oranges together, but this can't be written down as simply as the example above. But, as
```
a/b = 1*(a/b) = (2/2)*(a/b) = (2*a)/(2*b),
a/b = 1*(a/b) = (3/3)*(a/b) = (3*a)/(3*b),
...
a/b = 1*(a/b) = (n/n)*(a/b) = (n*a)/(n*b)
```
for any non-zero `n`, so when trying to add fractions with different denominators we can try to use multiples that do have common denominators. In particular, consider the sum
```
a/m + b/n
```
where `m` and `n` are different. If we want to rewrite these with common denominators we can try to get something that is a multiple of `m` and `n`, for example, `m*n`. We have
```
a/m = (a*n)/(m*n)
```
and
```
b/n = (b*m)/(m*n)
```
and so
```
a/m + b/n = (a*n)/(m*n) + (b*m)/(m*n) = (a*n + b*m)/(m*n)
```
since we can use the method for adding fractions with a common denominator above.

#### Adding fractions with different denominators

Multiply both fractions by appropriate numbers to get them in a form with common denomiantors, and then add the numerators as above.
```
a/m + b/n = (a*n + b*m)/(m*n)
```
For example,
```
1/3 + 1/5 = (5*1)/(3*5) + (3*1)/(3*5) = 5/15 + 3/15 = 8/15,
```
and
```
5/6 + 5/15 = (5*15)/(6*15) + (5*6)/(6*15) = 75/90 + 30/90 = (75 + 30)/90 = 105/90 = 7/6.
```
Note that this formula still works when the fractions have the same denominator, i.e., `n = m`, since
```
(a*m + b*m)/m*m = m*(a + b)/(m*m) = (m/m)*(a + b)/m = 1*(a + b)/m = (a + b)/m,
```
so you need only remember this formula to sum any fractions.

Moreover, the formulas do not only work for integers, `a, b, m` and `n` can be rational numbers, real numbers, or algebraic expressions, e.g.,
```
(1/2)/3 + 2/5 = (5*(1/2))/(3*5) + (2*3)/(3*5) = (5/2 + 6)/15 = (5/2 + 12/2)/15 = (17/2)/15 = 17/30.
```
and
```
(x + 1)/x + 1/2 = 2*(x + 1)/(2*x) + x/(2*x) = [(2*x + 2) + x]/(2*x) = (3*x + 2)/(2*x).
```
