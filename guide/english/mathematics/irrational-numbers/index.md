---
title: Irrational Numbers
---
## Irrational Numbers

An irrational number is a real number that cannot be expressed as a fraction of two integers, e.g., a real number that is not rational. It is tempting to say that an irrational number is one whose decimal expansion is infinite, but this is problematic for two reasons.

Firstly, it is simply not true, e.g., `1/3 = 0.3333....` cannot be expressed with a finite decimal expansion but is clearly rational. Secondly, multiplying both sides by 3 is somewhat unclear as we have
```
1 = 3*(1/3) = 3*(0.333...) = 0.999...
```
so arithmetic with infinite decimal expansions is more subtle than arithmetic with integers (`1` has both a finite and an infinite decimal expansion!) so more care needs to be taken if we want to be able to discuss them clearly. What can be said is that the infinite decimal expansion of an irrational number will not terminate, and will never become a subsequence of digits that simply repeats over and over. For example, the number
```
1/2 = 0.5
```
is not irrational as the decimal expansion terminates (or repeats with 0s). The number
```
0.12543297051212121212...
```
which continues with `12` is not irrational as it eventually becomes a pattern that repeats forever. (In fact, one can show this decimal is equal to `41392880269/330000000000`.) However, the number
```
0.101001000100001000001000001...
```
where we place a 1, then a 0, then another 1 and two 0s, then another 1 and three 0s, etc... always adding one more 0 between each consecutive pair of 1s never repeats itself, so this number is irrational.

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
