---
id: 5900f4c41000cf542c50ffd6
title: 'Problem 343: Fractional Sequences'
challengeType: 5
forumTopicId: 302002
dashedName: problem-343-fractional-sequences
---

# --description--

For any positive integer k, a finite sequence ai of fractions xi/yi is defined by:

a1 = 1/k and

ai = (xi-1+1)/(yi-1-1) reduced to lowest terms for i>1.

When ai reaches some integer n, the sequence stops. (That is, when yi=1.)

Define f(k) = n.

For example, for k = 20:

1/20 → 2/19 → 3/18 = 1/6 → 2/5 → 3/4 → 4/3 → 5/2 → 6/1 = 6

So f(20) = 6.

Also f(1) = 1, f(2) = 2, f(3) = 1 and Σf(k3) = 118937 for 1 ≤ k ≤ 100.

Find Σf(k3) for 1 ≤ k ≤ 2×106.

# --hints--

`euler343()` should return 269533451410884200.

```js
assert.strictEqual(euler343(), 269533451410884200);
```

# --seed--

## --seed-contents--

```js
function euler343() {

  return true;
}

euler343();
```

# --solutions--

```js
// solution required
```
