---
id: 5900f4e81000cf542c50fffb
title: 'Problem 380: Amazing Mazes!'
challengeType: 1
forumTopicId: 302044
dashedName: problem-380-amazing-mazes
---

# --description--

An $m×n$ maze is an $m×n$ rectangular grid with walls placed between grid cells such that there is exactly one path from the top-left square to any other square. The following are examples of a 9×12 maze and a 15×20 maze:

<img alt="9x12 maze and 15x20 maze" src="https://cdn.freecodecamp.org/curriculum/project-euler/amazing-mazes.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

Let $C(m, n)$ be the number of distinct $m×n$ mazes. Mazes which can be formed by rotation and reflection from another maze are considered distinct.

It can be verified that $C(1, 1) = 1$, $C(2, 2) = 4$, $C(3, 4) = 2415$, and $C(9, 12) = 2.5720\mathrm{e}\\,46$ (in scientific notation rounded to 5 significant digits).

Find $C(100, 500)$ and write your answer as a string in scientific notation rounded to 5 significant digits.

When giving your answer, use a lowercase e to separate mantissa and exponent. E.g. if the answer is 1234567891011 then the answer format would be the string `1.2346e12`.

# --hints--

`amazingMazes()` should return a string.

```js
assert(typeof amazingMazes() === 'string');
```

`amazingMazes()` should return the string `6.3202e25093`.

```js
assert.strictEqual(amazingMazes(), '6.3202e25093');
```

# --seed--

## --seed-contents--

```js
function amazingMazes() {

  return true;
}

amazingMazes();
```

# --solutions--

```js
// solution required
```
