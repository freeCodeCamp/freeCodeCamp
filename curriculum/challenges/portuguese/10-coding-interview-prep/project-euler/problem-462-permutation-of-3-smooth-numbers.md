---
id: 5900f53b1000cf542c51004d
title: 'Problem 462: Permutation of 3-smooth numbers'
challengeType: 5
forumTopicId: 302137
dashedName: problem-462-permutation-of-3-smooth-numbers
---

# --description--

<!-- TODO use MathJax -->

A 3-smooth number is an integer which has no prime factor larger than 3. For an integer N, we define S(N) as the set of 3-smooth numbers less than or equal to N . For example, S(20) = { 1, 2, 3, 4, 6, 8, 9, 12, 16, 18 }.

We define F(N) as the number of permutations of S(N) in which each element comes after all of its proper divisors.

This is one of the possible permutations for N = 20.

-   1, 2, 4, 3, 9, 8, 16, 6, 18, 12.

This is not a valid permutation because 12 comes before its divisor 6.

-   1, 2, 4, 3, 9, 8, 12, 16, 6, 18.

We can verify that F(6) = 5, F(8) = 9, F(20) = 450 and F(1000) ≈ 8.8521816557e21. Find F(1018). Give as your answer its scientific notation rounded to ten digits after the decimal point. When giving your answer, use a lowercase e to separate mantissa and exponent. E.g. if the answer is 112,233,445,566,778,899 then the answer format would be 1.1223344557e17.

# --hints--

`euler462()` should return Infinity.

```js
assert.strictEqual(euler462(), Infinity);
```

# --seed--

## --seed-contents--

```js
function euler462() {

  return true;
}

euler462();
```

# --solutions--

```js
// solution required
```
