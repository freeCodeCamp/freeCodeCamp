---
id: 5900f3b81000cf542c50fecb
title: 'Problem 76: Counting summations'
challengeType: 1
forumTopicId: 302189
dashedName: problem-76-counting-summations
---

# --description--

It is possible to write five as a sum in exactly six different ways:

<div style='margin-left: 4em;'>
  4 + 1<br>
  3 + 2<br>
  3 + 1 + 1<br>
  2 + 2 + 1<br>
  2 + 1 + 1 + 1<br>
  1 + 1 + 1 + 1 + 1<br><br>
</div>

How many different ways can `n` be written as a sum of at least two positive integers?

# --hints--

`countingSummations(5)` should return a number.

```js
assert(typeof countingSummations(5) === 'number');
```

`countingSummations(5)` should return `6`.

```js
assert.strictEqual(countingSummations(5), 6);
```

`countingSummations(20)` should return `626`.

```js
assert.strictEqual(countingSummations(20), 626);
```

`countingSummations(50)` should return `204225`.

```js
assert.strictEqual(countingSummations(50), 204225);
```

`countingSummations(100)` should return `190569291`.

```js
assert.strictEqual(countingSummations(100), 190569291);
```

# --seed--

## --seed-contents--

```js
function countingSummations(n) {

  return true;
}

countingSummations(5);
```

# --solutions--

```js
function countingSummations(n) {
  const combinations = new Array(n + 1).fill(0);
  combinations[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = i; j < n + 1; j++) {
      combinations[j] += combinations[j - i];
    }
  }
  return combinations[n];
}
```
