---
id: 5900f53a1000cf542c51004c
title: 'Problem 461: Almost Pi'
challengeType: 5
forumTopicId: 302136
dashedName: problem-461-almost-pi
---

# --description--

Let fn(k) = ek/n - 1, for all non-negative integers k.

Remarkably, f200(6) + f200(75) + f200(89) + f200(226) = 3.141592644529… ≈ π.

In fact, it is the best approximation of π of the form fn(a) + fn(b) + fn(c) + fn(d) for n = 200.

Let g(n) = a2 + b2 + c2 + d 2 for a, b, c, d that minimize the error: | fn(a) + fn(b) + fn(c) + fn(d) - π|

(where |x| denotes the absolute value of x).

You are given g(200) = 62 + 752 + 892 + 2262 = 64658.

Find g(10000).

# --hints--

`euler461()` should return 159820276.

```js
assert.strictEqual(euler461(), 159820276);
```

# --seed--

## --seed-contents--

```js
function euler461() {

  return true;
}

euler461();
```

# --solutions--

```js
// solution required
```
