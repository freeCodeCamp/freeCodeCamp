---
id: 5900f4ca1000cf542c50ffdc
title: 'Problem 349: Langton''s ant'
challengeType: 5
forumTopicId: 302008
dashedName: problem-349-langtons-ant
---

# --description--

An ant moves on a regular grid of squares that are coloured either black or white.

The ant is always oriented in one of the cardinal directions (left, right, up or down) and moves from square to adjacent square according to the following rules:

\- if it is on a black square, it flips the color of the square to white, rotates 90 degrees counterclockwise and moves forward one square.

\- if it is on a white square, it flips the color of the square to black, rotates 90 degrees clockwise and moves forward one square.

Starting with a grid that is entirely white, how many squares are black after 1018 moves of the ant?

# --hints--

`euler349()` should return 115384615384614940.

```js
assert.strictEqual(euler349(), 115384615384614940);
```

# --seed--

## --seed-contents--

```js
function euler349() {

  return true;
}

euler349();
```

# --solutions--

```js
// solution required
```
