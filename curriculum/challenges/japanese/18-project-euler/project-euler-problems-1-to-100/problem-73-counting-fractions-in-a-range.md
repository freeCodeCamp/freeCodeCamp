---
id: 5900f3b61000cf542c50fec8
title: 'Problem 73: Counting fractions in a range'
challengeType: 1
forumTopicId: 302186
dashedName: problem-73-counting-fractions-in-a-range
---

# --description--

Consider the fraction, $\frac{n}{d}$, where `n` and `d` are positive integers. If `n` &lt; `d` and highest common factor, ${HCF}(n, d) = 1$, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for `d` ≤ 8 in ascending order of size, we get:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \mathbf{\frac{3}{8}, \frac{2}{5}, \frac{3}{7}}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

It can be seen that there are `3` fractions between $\frac{1}{3}$ and $\frac{1}{2}$.

How many fractions lie between $\frac{1}{3}$ and $\frac{1}{2}$ in the sorted set of reduced proper fractions for `d` ≤ `limit`?

# --hints--

`countingFractionsInARange(8)` should return a number.

```js
assert(typeof countingFractionsInARange(8) === 'number');
```

`countingFractionsInARange(8)` should return `3`.

```js
assert.strictEqual(countingFractionsInARange(8), 3);
```

`countingFractionsInARange(1000)` should return `50695`.

```js
assert.strictEqual(countingFractionsInARange(1000), 50695);
```

`countingFractionsInARange(6000)` should return `1823861`.

```js
assert.strictEqual(countingFractionsInARange(6000), 1823861);
```

`countingFractionsInARange(12000)` should return `7295372`.

```js
assert.strictEqual(countingFractionsInARange(12000), 7295372);
```

# --seed--

## --seed-contents--

```js
function countingFractionsInARange(limit) {

  return true;
}

countingFractionsInARange(8);
```

# --solutions--

```js
function countingFractionsInARange(limit) {
  let result = 0;
  const stack = [[3, 2]];
  while (stack.length > 0) {
    const [startDenominator, endDenominator] = stack.pop();
    const curDenominator = startDenominator + endDenominator;
    if (curDenominator <= limit) {
      result++;
      stack.push([startDenominator, curDenominator]);
      stack.push([curDenominator, endDenominator]);
    }
  }
  return result;
}
```
