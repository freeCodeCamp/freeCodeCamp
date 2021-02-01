---
id: 5900f4691000cf542c50ff7c
title: 'Problem 253: Tidying up'
challengeType: 5
forumTopicId: 301901
dashedName: problem-253-tidying-up
---

# --description--

A small child has a “number caterpillar” consisting of forty jigsaw pieces, each with one number on it, which, when connected together in a line, reveal the numbers 1 to 40 in order.

Every night, the child's father has to pick up the pieces of the caterpillar that have been scattered across the play room. He picks up the pieces at random and places them in the correct order. As the caterpillar is built up in this way, it forms distinct segments that gradually merge together. The number of segments starts at zero (no pieces placed), generally increases up to about eleven or twelve, then tends to drop again before finishing at a single segment (all pieces placed).

For example:

Piece Placed Segments So Far121422936434554354……

Let M be the maximum number of segments encountered during a random tidy-up of the caterpillar. For a caterpillar of ten pieces, the number of possibilities for each M is

M Possibilities1512 2250912 31815264 41418112 5144000

so the most likely value of M is 3 and the average value is 385643⁄113400 = 3.400732, rounded to six decimal places.

The most likely value of M for a forty-piece caterpillar is 11; but what is the average value of M? Give your answer rounded to six decimal places.

# --hints--

`euler253()` should return 11.492847.

```js
assert.strictEqual(euler253(), 11.492847);
```

# --seed--

## --seed-contents--

```js
function euler253() {

  return true;
}

euler253();
```

# --solutions--

```js
// solution required
```
