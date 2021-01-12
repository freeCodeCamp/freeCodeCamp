---
id: 5900f4c21000cf542c50ffd4
title: 'Problem 340: Crazy Function'
challengeType: 5
forumTopicId: 301999
dashedName: problem-340-crazy-function
---

# --description--

For fixed integers a, b, c, define the crazy function F(n) as follows:

F(n) = n - c for all n > b

F(n) = F(a + F(a + F(a + F(a + n)))) for all n ≤ b.

Also, define S(a, b, c) = .

For example, if a = 50, b = 2000 and c = 40, then F(0) = 3240 and F(2000) = 2040. Also, S(50, 2000, 40) = 5204240.

Find the last 9 digits of S(217, 721, 127).

# --hints--

`euler340()` should return 291504964.

```js
assert.strictEqual(euler340(), 291504964);
```

# --seed--

## --seed-contents--

```js
function euler340() {

  return true;
}

euler340();
```

# --solutions--

```js
// solution required
```
