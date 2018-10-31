---
title: Combinations
---

## Combinations
A combination is a selection of items from a collection,where the order of selection does not matter. More formally:

>A k-combination of a set S is a subset of k distinct elements of S. If the set has n elements, the number of k-combinations is equal to the [binomial coefficient](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/)<sup>1</sup>

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/08bdf0fff474c26293414f9eb01ab4bc73ef941f "binomial coefficient")

Or if you prefer using the [factorial](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/):

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/813f7124a61dac205542db3f8491b36cb306453a "factorial")

Combinations refer to the combination of n things taken k at a time **without** repetition. To refer to combinations in which repetition is allowed, the terms k-selection or k-combination with repetition are often used and we use the following formulae:

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c73b231f2fbfa42d5e10c310d8c3f5022d9ceb0 "binomial coefficient")

## Some examples:
Combinations are very usefull when you want to solve combinatoric problems like the following one:

```
Compute the probability to obtain a poker from
a standard fifty-two card deck drawing 5 cards
at the same time
```

In order to solve this simple problem you need to compute the number of 5 card hands possible using combinations:

![alt text](https://latex.codecogs.com/gif.latex?%5Cfrac%7B13%5Cbinom%7B52%7D%7B4%7D%5Cbinom%7B48%7D%7B1%7D%7D%7B%5Cbinom%7B52%7D%7B5%7D%7D "poker problem")

Mind that ![alt text](https://latex.codecogs.com/gif.latex?%5Cbinom%7B48%7D%7B1%7D "48 on 1") is equal to 48 as per binomial coefficient definition.

### Sources
1 [Wikipedia Combination entry](https://en.wikipedia.org/wiki/Combination)




