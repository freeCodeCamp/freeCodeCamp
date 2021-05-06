---
id: 5900f3b41000cf542c50fec7
title: 'Problem 72: Counting fractions'
challengeType: 5
forumTopicId: 302185
dashedName: problem-72-counting-fractions
---

# --description--

Consider the fraction, `n`/`d`, where n and d are positive integers. If `n`&lt;`d` and HCF(`n`,`d`)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for `d` ≤ 8 in ascending order of size, we get:

<div style='text-align: center;'>1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</div>

It can be seen that there are 21 elements in this set.

How many elements would be contained in the set of reduced proper fractions for `d` ≤ `limit`?

# --hints--

`countingFractions(8)` should return a number.

```js
assert(typeof countingFractions(8) === 'number');
```

`countingFractions(8)` should return `21`.

```js
assert.strictEqual(countingFractions(8), 21);
```

`countingFractions(20000)` should return `121590395`.

```js
assert.strictEqual(countingFractions(20000), 121590395);
```

`countingFractions(500000)` should return `75991039675`.

```js
assert.strictEqual(countingFractions(500000), 75991039675);
```

`countingFractions(1000000)` should return `303963552391`.

```js
assert.strictEqual(countingFractions(1000000), 303963552391);
```

# --seed--

## --seed-contents--

```js
function countingFractions(limit) {

  return true;
}

countingFractions(8);
```

# --solutions--

```js
// solution required
```
