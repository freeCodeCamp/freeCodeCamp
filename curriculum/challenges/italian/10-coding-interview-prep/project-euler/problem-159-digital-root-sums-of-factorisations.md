---
id: 5900f40c1000cf542c50ff1e
title: 'Problem 159: Digital root sums of factorisations'
challengeType: 5
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

A composite number can be factored many different ways.

For instance, not including multiplication by one, 24 can be factored in 7 distinct ways:

24 = 2x2x2x3 24 = 2x3x4 24 = 2x2x6 24 = 4x6 24 = 3x8 24 = 2x12 24 = 24

Recall that the digital root of a number, in base 10, is found by adding together the digits of that number, and repeating that process until a number is arrived at that is less than 10. Thus the digital root of 467 is 8. We shall call a Digital Root Sum (DRS) the sum of the digital roots of the individual factors of our number. The chart below demonstrates all of the DRS values for 24. FactorisationDigital Root Sum2x2x2x3 92x3x4 92x2x6 104x6 103x8 112x12 524 6The maximum Digital Root Sum of 24 is 11. The function mdrs(n) gives the maximum Digital Root Sum of n. So mdrs(24)=11. Find ∑mdrs(n) for 1 &lt; n &lt; 1,000,000.

# --hints--

`euler159()` should return 14489159.

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```
