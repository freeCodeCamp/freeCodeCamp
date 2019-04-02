---
title: Proof of Finite Arithmetic Series Formula by Induction
---
## Proof of Finite Arithmetic Series Formula by Induction

An arithmetic *sequence* is a sequence of numbers with every consecutive pair having the same difference. For example,
```
1, 4, 7, 10
```
is an arithmetic sequence because `4 - 1 = 3`, `7 - 4 = 3` and `10 - 7 = 3`. An arithmetic *series* is the sum of an arithmetic sequence, for example
```
1 + 4 + 7 + 10.
```
The sum of an infinite arithmetic series is not a number, so the question 'what is the value of an arithmetic series' is only interesting for finite arithmetc sequences/series, so we only focus on these here.

The positive integers up to (and including) 100 is another arithmetic sequence, and we can ask what the corresponding series is, i.e., what is
```
1 + 2 + 3 + ... + 98 + 99 + 100?
```
Famously, [Carl Friedrich Gauss](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss) solved this problem at the age of 7 faster than anyone else in his class by noting a pattern,
```
 1  +   2 +   3 + ... +  98 +  99 + 100
100 +  99 +  98 + ... +   3 +   2 +  1
----------------------------------------
101 + 101 + 101 + ... + 101 + 101 + 101
```
To find the sum we can take twice the sum instead and notice that every opposite pair `(1, 100), (2, 99), etc...` has the same sum `101`, with `100` terms in the series, so adding two coipes of the series gives `100*101`, then dividing by two to get the sum of the original series, the value is
```
100*101/2.
```
This idea immediately generalizes to showing
```
1 + 2 + 3 + ... + n = n*(n + 1)/2
```
for any positive integer `n`, as there are `n` terms pairing up with sums `n + 1`.

But our first example above did not start at 1, nor increment by 1, so what can we do here? If we simply shift the sequence to start at `a` instead of 1 then we have
```
    a     +   (a + 1)  + ... + (a + (n-1)) +  (a + n)
 (a + n)  + (a + (n-1) + ... +   (a + 1)   +     a
------------------------------------------------------
(2*a + n) + (2*a + n)  + ... +  (2*a + n)  + (2*a + n)
```
and its sum can be read off easily once again, as
```
(2*a + n)*n/2.
```
Lastly, if instead of incrementing by 1 with each term we increment by some value `k`, the same trick can be used and we see that an arithmetic series
```
a + (a + k) + (a + 2*k) + (a + 3*k) + ... + (a + n*k)
```
that starts at `a`, increases by `k` each term and has `n+1` terms has the value
```
(2*a + n*k)*(n + 1)/2.
```

However, in case one feels like this is just a trick and prefers algebraic manipulation, we can also prove this formula by [mathematical induction](https://en.wikipedia.org/wiki/Mathematical_induction).

The base case with `n = 0` is clear, the sum of the series
```
a
```
is
```
a = (2*a + 0)*(0 + 1)/2,
```
so our formula is correct for the base case.

For the inductive hypothesis, suppose we have a series
```
a + (a + k) + (a + 2*k) + (a + 3*k) + ... + (a + (n-1)*k)
```
with value given by the formula,
```
(2*a + (n-1)*k)*n/2.
```
Then
```
   a + (a + k) + (a + 2*k) + (a + 3*k) + ... + (a + (n-1)*k) + (a + n*k)
= [a + (a + k) + (a + 2*k) + (a + 3*k) + ... + (a + (n-1)*k)] + (a + n*k)
= (2*a + (n-1)*k)*n/2 + (a + n*k)
```
by the induction hypothesis, and this can be simplified as follows
```
(2*a + (n-1)*k)*n/2 + (a + n*k) = [(2*a + (n-1)*k)*n + 2*a + 2*n*k]/2     (common denominator)
                                = [2*a*n + (n-1)*n*k + 2*a + 2*n*k]/2     (expanding brackets)
                                = [(2*a*n + 2*a) + (n^2 - n + 2*n)*k]/2   (collecting like terms)
                                = [2*a*(n + 1) + n*(n + 1)*k]/2           (simplifying)
                                = (2*a + n*k)*(n + 1)/2.                  (factoring the (n + 1))
```
Thus, by the principal of mathematical induction, the sum of the arithmetic series
```
a + (a + k) + (a + 2*k) + (a + 3*k) + ... + (a + (n-1)*k) + (a + n*k)
```
is indeed the formula given above,
```
(2*a + n*k)*(n + 1)/2.
```
