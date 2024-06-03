---
id: 5900f4691000cf542c50ff7c
title: 'Problem 253: Tidying up'
challengeType: 1
forumTopicId: 301901
dashedName: problem-253-tidying-up
---

# --description--

A small child has a "number caterpillar" consisting of forty jigsaw pieces, each with one number on it, which, when connected together in a line, reveal the numbers 1 to 40 in order.

Every night, the child's father has to pick up the pieces of the caterpillar that have been scattered across the play room. He picks up the pieces at random and places them in the correct order.

As the caterpillar is built up in this way, it forms distinct segments that gradually merge together. The number of segments starts at zero (no pieces placed), generally increases up to about eleven or twelve, then tends to drop again before finishing at a single segment (all pieces placed).

Por ejemplo:

| Piece Placed | Segments So Far |
| ------------ | --------------- |
| 12           | 1               |
| 4            | 2               |
| 29           | 3               |
| 6            | 4               |
| 34           | 5               |
| 5            | 4               |
| 35           | 4               |
| …            | …               |

Let $M$ be the maximum number of segments encountered during a random tidy-up of the caterpillar. For a caterpillar of ten pieces, the number of possibilities for each $M$ is

| M | Possibilities |
| - | ------------- |
| 1 | 512           |
| 2 | 250912        |
| 3 | 1815264       |
| 4 | 1418112       |
| 5 | 144000        |

so the most likely value of $M$ is 3 and the average value is $\frac{385\\,643}{113\\,400} = 3.400732$, rounded to six decimal places.

The most likely value of $M$ for a forty-piece caterpillar is 11; but what is the average value of $M$? Give your answer rounded to six decimal places.

# --hints--

`tidyingUp()` should return `11.492847`.

```js
assert.strictEqual(tidyingUp(), 11.492847);
```

# --seed--

## --seed-contents--

```js
function tidyingUp() {

  return true;
}

tidyingUp();
```

# --solutions--

```js
// solution required
```
