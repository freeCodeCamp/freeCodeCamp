---
title: Irrational Numbers
---
## Irrational Numbers

An irrational number is a real number that cannot be written as a fraction of integers, i.e., a number that is not rational. For example, [pi](https://en.wikipedia.org/wiki/Pi), [e](https://en.wikipedia.org/wiki/E_(mathematical_constant)) and [sqrt(2)](https://en.wikipedia.org/wiki/Square_root_of_2) are all irrational.

A common misconception is that a number that has an infinite decimal expansion must be irrational but this is completely false, for example, 1/3 = 0.333... is clearly rational but the decimal expansion has an infinite number of 3s. The correct characterization is that a real number that does not have a finite decimal expansion is irrational if the expansion does not eventually become a subsequence that repeats itself forever.

The irrational numbers, despite having such a simple definition, are notoriously difficult objects. The square root of 2 was perhaps the [first discovery](https://en.wikipedia.org/wiki/Irrational_number#Ancient_Greece) that numbers that were not rational existed, shown around the year 500 BC, and while pi had been used since the early Egyptians it wasn't until [1761](https://en.wikipedia.org/wiki/Proof_that_%CF%80_is_irrational#Lambert's_proof) that anyone was able to prove it to be irrational.

Similarly, e had been used since the early [1600s](https://en.wikipedia.org/wiki/E_(mathematical_constant)#History) but was not proven to be irrational until [1737](https://en.wikipedia.org/wiki/Proof_that_e_is_irrational). So, while knowing a rational number is rational amounts to finding a repeating pattern in its decimal expansion or finding a fractional representation, showing something is *not* rational can takes decades or centuries!

Given [Cantor's theorem](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) it is known that *most* real numbers are irrational, so if you pick a number "at random" it is almost surely irrational, and yet it is likely impossible to prove so using the techniques available. Even worse, numbers such as pi + e, pi\*e or pi^e are irrational, though it is hard to find anyone that believes any of them admits a fractional representation (or repeating pattern in their decimal expansion) that has not yet been discovered.

One of the problems in trying to prove things about irrational numbers is that they do not behave very well: unlike the rational numbers, the sum/product of two irrational numbers need to be irrational, e.g., pi + (-pi) = 0 and sqrt(2)\*sqrt(2) = 2, so it is hard to prove general statements about the set of irrational numbers.

However, for most of your computing needs, there is no need to worry about this complexity! For languages like [JavaScript](https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript) the math and calculations are done with [finite precision](https://en.wikipedia.org/wiki/Floating-point_arithmetic) and so irrational numbers are never available. You can build your own data structures to work with irrational numbers, such as what is done in [SageMath](http://www.sagemath.org/), but if you do not need lots of accuracy this is completely unnecessary.

