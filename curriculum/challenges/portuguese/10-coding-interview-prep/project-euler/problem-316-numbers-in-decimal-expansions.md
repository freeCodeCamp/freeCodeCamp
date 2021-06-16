---
id: 5900f4a81000cf542c50ffbb
title: 'Problem 316: Numbers in decimal expansions'
challengeType: 5
forumTopicId: 301972
dashedName: problem-316-numbers-in-decimal-expansions
---

# --description--

Let p = p1 p2 p3 ... be an infinite sequence of random digits, selected from {0,1,2,3,4,5,6,7,8,9} with equal probability.

It can be seen that p corresponds to the real number 0.p1 p2 p3 ....

It can also be seen that choosing a random real number from the interval \[0,1) is equivalent to choosing an infinite sequence of random digits selected from {0,1,2,3,4,5,6,7,8,9} with equal probability.

For any positive integer n with d decimal digits, let k be the smallest index such that pk, pk+1, ...pk+d-1 are the decimal digits of n, in the same order. Also, let g(n) be the expected value of k; it can be proven that g(n) is always finite and, interestingly, always an integer number.

For example, if n = 535, then for p = 31415926535897...., we get k = 9 for p = 355287143650049560000490848764084685354..., we get k = 36 etc and we find that g(535) = 1008.

Given that , find

Note: represents the floor function.

# --hints--

`euler316()` should return 542934735751917760.

```js
assert.strictEqual(euler316(), 542934735751917760);
```

# --seed--

## --seed-contents--

```js
function euler316() {

  return true;
}

euler316();
```

# --solutions--

```js
// solution required
```
