---
id: 5900f47c1000cf542c50ff8e
title: 'Problem 270: Cutting Squares'
challengeType: 5
forumTopicId: 301920
dashedName: problem-270-cutting-squares
---

# --description--

A square piece of paper with integer dimensions N×N is placed with a corner at the origin and two of its sides along the x- and y-axes. Then, we cut it up respecting the following rules:

We only make straight cuts between two points lying on different sides of the square, and having integer coordinates.

Two cuts cannot cross, but several cuts can meet at the same border point.

Proceed until no more legal cuts can be made.

Counting any reflections or rotations as distinct, we call C(N) the number of ways to cut an N×N square. For example, C(1) = 2 and C(2) = 30 (shown below).

What is C(30) mod 108 ?

# --hints--

`euler270()` should return 82282080.

```js
assert.strictEqual(euler270(), 82282080);
```

# --seed--

## --seed-contents--

```js
function euler270() {

  return true;
}

euler270();
```

# --solutions--

```js
// solution required
```
