---
id: 5900f4ca1000cf542c50ffdc
title: 'Problem 349: Langton''s ant'
challengeType: 1
forumTopicId: 302008
dashedName: problem-349-langtons-ant
---

# --description--

An ant moves on a regular grid of squares that are coloured either black or white.

The ant is always oriented in one of the cardinal directions (left, right, up or down) and moves from square to adjacent square according to the following rules:

- if it is on a black square, it flips the color of the square to white, rotates 90° counterclockwise and moves forward one square.
- if it is on a white square, it flips the color of the square to black, rotates 90° clockwise and moves forward one square.

Starting with a grid that is entirely white, how many squares are black after ${10}^{18}$ moves of the ant?

# --hints--

`langtonsAnt()` should return `115384615384614940`.

```js
assert.strictEqual(langtonsAnt(), 115384615384614940);
```

# --seed--

## --seed-contents--

```js
function langtonsAnt() {

  return true;
}

langtonsAnt();
```

# --solutions--

```js
// solution required
```
