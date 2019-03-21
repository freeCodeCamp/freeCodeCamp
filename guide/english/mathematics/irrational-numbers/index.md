---
title: Irrational Numbers
---
## Irrational Numbers

An irrational number is a real number that cannot be written as a fraction of integers, i.e., a number that is not rational. For example, [pi](https://en.wikipedia.org/wiki/Pi), [e](https://en.wikipedia.org/wiki/E_(mathematical_constant)) and [sqrt(2)](https://en.wikipedia.org/wiki/Square_root_of_2) are all irrational.

A common misconception is that a number that has an infinite decimal expansion must be irrational but this is completely false, for example, 1/3 = 0.333... is clearly rational but the decimal expansion has an infinite number of 3s. The correct characterization is that a real number that does not have a finite decimal expansion is irrational if the expansion does not eventually become a subsequence that repeats itself forever.

The number
```
1/2 = 0.5
```
is not irrational as the decimal expansion terminates (or repeats with 0s).
The number
```
0.12543297051212121212...
```
which continues with `12` is not irrational as it eventually becomes a pattern that repeats forever. (In fact, one can show this decimal is equal to `41392880269/330000000000`.) However, the number
```
0.101001000100001000001000001...
```
where we place a 1, then a 0, then another 1 and two 0s, then another 1 and three 0s, etc... always adding one more 0 between each consecutive pair of 1s never repeats itself, so this number is irrational.

The irrational numbers, despite having such a simple definition, are notoriously difficult objects. The square root of 2 was perhaps the [first discovery](https://en.wikipedia.org/wiki/Irrational_number#Ancient_Greece) that numbers that were not rational existed, shown around the year 500 BC, and while pi had been used since the early Egyptians it wasn't until [1761](https://en.wikipedia.org/wiki/Proof_that_%CF%80_is_irrational#Lambert's_proof) that anyone was able to prove it to be irrational.

Similarly, e had been used since the early [1600s](https://en.wikipedia.org/wiki/E_(mathematical_constant)#History) but was not proven to be irrational until [1737](https://en.wikipedia.org/wiki/Proof_that_e_is_irrational). So, while knowing a rational number is rational amounts to finding a repeating pattern in its decimal expansion or finding a fractional representation, showing something is *not* rational can takes decades or centuries!

Given [Cantor's theorem](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) it is known that *most* real numbers are irrational, so if you pick a number "at random" it is almost surely irrational, and yet it is likely impossible to prove so using the techniques available. Even worse, numbers such as pi + e, pi\*e or pi^e are irrational, though it is hard to find anyone that believes any of them admits a fractional representation (or repeating pattern in their decimal expansion) that has not yet been discovered.

One of the problems in trying to prove things about irrational numbers is that they do not behave very well: unlike the rational numbers, the sum/product of two irrational numbers need to be irrational, e.g., pi + (-pi) = 0 and sqrt(2)\*sqrt(2) = 2, so it is hard to prove general statements about the set of irrational numbers.

While proving a number `n` is rational is as simple as just finding integers `a` and `b` such that `n = a/b` (and being rational means such integers [can always be computed](https://en.wikipedia.org/wiki/Decimal#Rational_numbers)), to show that a number `m` is irrational is not as simple because you have to show that *no* such fraction `a/b` equals `m`, not just fine one that isn't.

Similarly, using finite/repetition in decimal expansions is not as easy, as any rational number will eventually terminate or repeat, so to show a number is rational this way you need only compute the decimal expansion up to this point. However, showing a pattern *never* occurs cannot be done by simply showing a pattern has not appeared *yet* up to any finite point.

One other useful tool for studying irrational numbers is with [continued fractions](https://en.wikipedia.org/wiki/Continued_fraction) as every rational number has a finite continued fraction, whereas every irrational number has an infinite continued fraction. But once again, the same problem occurs. To show a number is rational using continued fractions is a finite process, simply compute the continued fraction until it stops. However, showing that a continued fraction has not stopped *yet* is not the same thing as proving is *never* stops.

Some of the more well known irrational numbers are
```
sqrt(2) = 1.41421356237...
e = 2.718281828459...
pi = 3.14159265359...
```
A proof that `sqrt(2)` is irrational was first given by [Pythagoreans](https://en.wikipedia.org/wiki/Square_root_of_2#History) in ancient Greece, and was the first proof that there existed numbers that were not rational. (Rumour has it this discovery was so shocking at the time that [Hippasus](https://en.wikipedia.org/wiki/Hippasus) was drowned for claiming such heresy.) A proof that Euler's number `e` is irrational was not known [until 1737](https://en.wikipedia.org/wiki/Proof_that_e_is_irrational#Euler's_proof) and a proof that pi is irrational was first given [in 1761](https://en.wikipedia.org/wiki/Proof_that_%CF%80_is_irrational). Despite these proofs being given over 250 years ago, it is not yet known if `pi + e` or `pi*e` are irrational.

The sum of two irrational numbers can be irrational, e.g., `sqrt(2) + sqrt(3)`, or rational, e.g., `sqrt(2) + (-sqrt(2)) = 0`. The product of irrational numbers can be irrational, e.g., `pi*pi`, or rational, e.g., `sqrt(2)*sqrt(2) = 2`. The power of two irrational numbers can be irrational, e.g., [`sqrt(2)^sqrt(2)`](https://en.wikipedia.org/wiki/Irrational_number#Irrational_powers), or rational, e.g., `[sqrt(2)^sqrt(2)]^sqrt(2) = sqrt(2)^2 = 2`.

Despite irrational numbers being rather difficult to work with in numerous ways, they are an integral part of everyday life, with [music](https://math.stackexchange.com/questions/11669/mathematical-difference-between-white-and-black-notes-in-a-piano), [geography](https://www.theguardian.com/science/alexs-adventures-in-numberland/2015/mar/14/pi-day-2015-pi-rivers-truth-grime), [physics](https://en.wikipedia.org/wiki/Einstein_field_equations), [biology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3677036/), [pharmacokinetics](https://en.wikipedia.org/wiki/Pharmacokinetics#Metrics), [shockwaves](https://en.wikipedia.org/wiki/Burgers%27_equation), [heat](https://en.wikipedia.org/wiki/Heat_equation#Fundamental_solutions) and much, much more.

However, for most of your computing needs, there is no need to worry about this complexity! For languages like [JavaScript](https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript) the math and calculations are done with [finite precision](https://en.wikipedia.org/wiki/Floating-point_arithmetic) and so irrational numbers are never available. You can build your own data structures to work with irrational numbers, such as what is done in [SageMath](http://www.sagemath.org/), but if you do not need lots of accuracy this is completely unnecessary.
