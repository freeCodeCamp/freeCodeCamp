---
id: 5900f4a11000cf542c50ffb4
title: 'Problem 309: Integer Ladders'
challengeType: 1
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--

In the classic "Crossing Ladders" problem, we are given the lengths $x$ and $y$ of two ladders resting on the opposite walls of a narrow, level street. We are also given the height $h$ above the street where the two ladders cross and we are asked to find the width of the street ($w$).

<img class="img-responsive center-block" alt="ladders x and y, crossing at the height h, and resting on opposite walls of the street of width w" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;" />

Here, we are only concerned with instances where all four variables are positive integers. For example, if $x = 70$, $y = 119$ and $h = 30$, we can calculate that $w = 56$.

In fact, for integer values $x$, $y$, $h$ and $0 &lt; x &lt; y &lt; 200$, there are only five triplets ($x$, $y$, $h$) producing integer solutions for $w$: (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) and (119, 175, 40).

For integer values $x$, $y$, $h$ and $0 &lt; x &lt; y &lt; 1\\,000\\,000$, how many triplets ($x$, $y$, $h$) produce integer solutions for $w$?

# --hints--

`integerLadders()` should return `210139`.

```js
assert.strictEqual(integerLadders(), 210139);
```

# --seed--

## --seed-contents--

```js
function integerLadders() {

  return true;
}

integerLadders();
```

# --solutions--

```js
// solution required
```
