---
id: 5900f3df1000cf542c50fef1
title: 'Problem 115: Counting block combinations II'
challengeType: 1
forumTopicId: 301741
dashedName: problem-115-counting-block-combinations-ii
---

# --description--

A row measuring `n` units in length has red blocks with a minimum length of `m` units placed on it, such that any two red blocks (which are allowed to be different lengths) are separated by at least one black square.

Let the fill-count function, $F(m, n)$, represent the number of ways that a row can be filled.

For example, $F(3, 29) = 673135$ and $F(3, 30) = 1089155$.

That is, for m = 3, it can be seen that n = 30 is the smallest value for which the fill-count function first exceeds one million.

In the same way, for m = 10, it can be verified that $F(10, 56) = 880711$ and $F(10, 57) = 1148904$, so n = 57 is the least value for which the fill-count function first exceeds one million.

For m = 50, find the least value of `n` for which the fill-count function first exceeds one million.

**Note:** This is a more difficult version of Problem 114.

# --hints--

`countingBlockTwo()` should return `168`.

```js
assert.strictEqual(countingBlockTwo(), 168);
```

# --seed--

## --seed-contents--

```js
function countingBlockTwo() {

  return true;
}

countingBlockTwo();
```

# --solutions--

```js
// solution required
```
