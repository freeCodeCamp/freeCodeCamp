---
title: Factorial Function
---
## Factorial Function

The factorial function is a useful function in [combinatorics](https://en.wikipedia.org/wiki/Combinatorics) for counting things such as [permutations](https://en.wikipedia.org/wiki/Permutation) as well as the definition of [Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)), the base of the natural logarithm, and appears in many other areas.

For any positive integer n we define the factorial of n, denoted n!, as the product

#### n! = 1 &times; 2 &times; 3 &times; ... &times; (n-2) &times; (n-1) &times; n.

For example,
- 1! = 1,
- 2! = 2 &times; 1 = 2,
- 5! = 5 &times; 4 &times; 3 &times; 2 &times; 1 = 120.

Notice this function satisfies the [recurrence](https://en.wikipedia.org/wiki/Recurrence_relation) n! = n &times; (n-1)! which is a particularly useful viewpoint to use in [many](https://en.wikipedia.org/wiki/Gamma_function) areas of mathematics allowing the factorial to be generalized to non-integer values. (For example, this recurrence can be extended with (-1/2)! = [sqrt(&pi;)](http://www.wolframalpha.com/input/?i=(-1%2F2)!).)

As convention, the [empty product](https://en.wikipedia.org/wiki/Empty_product), that is, the product of nothing, is usually taken to be 1, so with this definition we have 0! = 1. This convention makes sense in all the uses below.

### Uses

If you have n different objects and want to know how many ways they can be arranged in a row, there are n choices for the first object, then (after picking the first object) n-1 choices for the second object, n-2 choices for the third object, etc... and so we see there are n! ways to arrange the objects.

Another common method of counting involves [combinations](https://en.wikipedia.org/wiki/Combination) which are a given by a quotient of factorials. The combinations then come up in, for example, the [binomial formula](https://en.wikipedia.org/wiki/Binomial_theorem), the coefficients in the expansion of

#### (x + y)<sup>n</sup>

for any integer n.

Factorials also appear in many useful representations of functions, including approximations of derivatives in [Taylor's formula](https://en.wikipedia.org/wiki/Taylor%27s_theorem#Taylor's_theorem_in_one_real_variable), [exponential](https://en.wikipedia.org/wiki/Power_series#Examples) and [trigonometric](https://en.wikipedia.org/wiki/Trigonometric_functions#Series_definitions) functions.

### Computation

Computing the factorial of a positive integer is incredibly straightforward, it is simply a product of all positive integers less than or equal to itself. However, this is not an efficient approach for very large numbers, and such a product will be incredibly large as well, so it is usually better to use an approximation when looking to compute very large factorials. One simple approximation is [Stirling's approximation](https://en.wikipedia.org/wiki/Stirling%27s_approximation), namely,

#### n! ~ sqrt(2&pi;n)[n/e]<sup>n</sup>

so, for example,

#### 10<sup>100</sup>! ~ sqrt(2&pi;10<sup>100</sup>)[10<sup>100</sup>/e]<sup>10<sup>100</sup></sup> ~ e<sup>-10<sup>100</sup></sup> &times; 10<sup>10<sup>102</sup></sup>.

### Interesting formulas

As mentioned above, the factorial can be used to defined Euler's number, namely

#### &Sigma; 1/n! = e

With a slight adjustment we have the fascinating sum

#### &Sigma; 1/[(n+2)n!] = 1

Lastly, the generalization of the factorial to non-integer values comes from the formula

#### n! = &int;<sub>0</sub><sup>&infin;</sup> t<sup>z</sup>e<sup>-t</sup> dt

This formula is where the value for (-1/2)! above comes from, since

#### &int;<sub>0</sub><sup>&infin;</sup> t<sup>-1/2</sup>e<sup>-t</sup> dt = sqrt(&pi;)

The recurrence now tells us that each half integer factorial is just a multiple of sqrt(&pi;) as, for example

#### (3/2)! = (3/2)*(1/2)! = (3/2)*(1/2)*(-1/2)! = 3sqrt(&pi;)/4
