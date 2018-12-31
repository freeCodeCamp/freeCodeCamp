---
title: Factorials
---
## Factorials
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Definition of Factorial

The factorial is to multiply it by every intiger lower then it ending at one. If the initial number is negative the result is infinity.

A factorial of <span class="texhtml"> n </span>, a non-negative integer, is defined as:

<span class="texhtml"> n! = 1 * 2 * ... * (n - 1) * n </span>

A special case arises when <span class="texhtml"> n = 0 </span>. Namely, <span class="texhtml"> 0! = 1 </span>.

### Convenience of Factorials

The definition above provides you with convenience in certain computations. For example, factorials inside fractions can often be simplified as follows:

Example 1: <span class="texhtml"> 7! / 5! = (1 * 2 * 3 * 4 * 5 * 6 * 7) / (1 * 2 * 3 * 4 * 5) = 6 * 7 = 42 </span>

Example 2: <span class="texhtml"> (n + 1)! / n! = (1 * 2 * ... * n * (n + 1)) / (1 * 2 * ... * n) = n + 1 </span>

### Alternative Definition

Alternatively, factorials can be defined as follows:

<span class="texhtml"> 0! = 1 </span>

<span class="texhtml"> n! = n * (n - 1)! </span> if <span class="texhtml"> n > 0 </span>

This recursive definition means the exact same as the traditional definition. Applying this to the second example above, we get:

<span class="texhtml"> (n + 1)! / n! = (n + 1) * n! / n! = n + 1 </span>

### Aside: Extension to Non-Integers

Note that factorial as defined above applies only to non-negative integers. Actually, there is a generalization of factorials that extends to non-integers as well, which is the Gamma function. In particular, for any natural number <span class="texhtml"> n </span>, you have <span class="texhtml"> n! = Gamma(n + 1) = n * Gamma(n) </span>.

For more, see <a href='https://en.wikipedia.org/wiki/Factorial#Extension_of_factorial_to_non-integer_values_of_argument' target='_blank' rel='nofollow'>Extension of factorial to non-integer values of argument</a>.

<span class="texhtml"> 

One tricky example that many may not know if 0! = 1. For futher proof see the link under More Information.




#### More Information:
<a href='http://www.purplemath.com/modules/factorial.htm' target='_blank' rel='nofollow'>Factorials</a>
