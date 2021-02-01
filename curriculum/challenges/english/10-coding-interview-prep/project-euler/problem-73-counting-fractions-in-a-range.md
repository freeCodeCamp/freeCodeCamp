---
id: 5900f3b61000cf542c50fec8
title: 'Problem 73: Counting fractions in a range'
challengeType: 5
forumTopicId: 302186
dashedName: problem-73-counting-fractions-in-a-range
---

# --description--

Consider the fraction, `n`/`d`, where n and d are positive integers. If `n`&lt;`d` and HCF(`n`,`d`)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for `d` ≤ 8 in ascending order of size, we get:

<div style='text-align: center;'>1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, <strong>3/8</strong>, <strong>2/5</strong>, <strong>3/7</strong>, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</div>

It can be seen that there are 3 fractions between 1/3 and 1/2.

How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for `d` ≤ 12,000?

# --hints--

`countingFractionsInARange()` should return a number.

```js
assert(typeof countingFractionsInARange() === 'number');
```

`countingFractionsInARange()` should return 7295372.

```js
assert.strictEqual(countingFractionsInARange(), 7295372);
```

# --seed--

## --seed-contents--

```js
function countingFractionsInARange() {

  return true;
}

countingFractionsInARange();
```

# --solutions--

```js
// solution required
```
