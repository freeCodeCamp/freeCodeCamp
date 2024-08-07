---
id: 5900f4481000cf542c50ff5b
title: 'Problem 220: Heighway Dragon'
challengeType: 1
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

Let $D_0$ be the two-letter string "Fa". For $n ≥ 1$, derive $D_n$ from $D_{n - 1}$ by the string-rewriting rules:

- "a" → "aRbFR"
- "b" → "LFaLb"

Thus, $D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR", and so on.

These strings can be interpreted as instructions to a computer graphics program, with "F" meaning "draw forward one unit", "L" meaning "turn left 90 degrees", "R" meaning "turn right 90 degrees", and "a" and "b" being ignored. The initial position of the computer cursor is (0,0), pointing up towards (0,1).

Then $D_n$ is an exotic drawing known as the Heighway Dragon of order $n$. For example, $D_{10}$ is shown below; counting each "F" as one step, the highlighted spot at (18,16) is the position reached after 500 steps.

<img alt="drawing of the Heighway Dragon after 500 steps" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

What is the position of the cursor after ${10}^{12}$ steps in $D_{50}$? Give your answer as a string in the form `x,y` with no spaces.

# --hints--

`heighwayDragon()` should return a string.

```js
assert(typeof heighwayDragon() === 'string');
```

`heighwayDragon()` should return the string `139776,963904`.

```js
assert.strictEqual(heighwayDragon(), '139776,963904');
```

# --seed--

## --seed-contents--

```js
function heighwayDragon() {

  return true;
}

heighwayDragon();
```

# --solutions--

```js
// solution required
```
