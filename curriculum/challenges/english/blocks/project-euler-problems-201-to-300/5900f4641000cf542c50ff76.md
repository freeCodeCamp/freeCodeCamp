---
id: 5900f4641000cf542c50ff76
title: 'Problem 247: Squares under a hyperbola'
challengeType: 1
forumTopicId: 301894
dashedName: problem-247-squares-under-a-hyperbola
---

# --description--

Consider the region constrained by $1 ≤ x$ and $0 ≤ y ≤ \frac{1}{x}$.

Let $S_1$ be the largest square that can fit under the curve.

Let $S_2$ be the largest square that fits in the remaining area, and so on.

Let the index of $S_n$ be the pair (left, below) indicating the number of squares to the left of $S_n$ and the number of squares below $S_n$.

<img alt="diagram with squares under the hyperbola" src="https://cdn.freecodecamp.org/curriculum/project-euler/squares-under-a-hyperbola.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

The diagram shows some such squares labeled by number.

$S_2$ has one square to its left and none below, so the index of $S_2$ is (1, 0).

It can be seen that the index of $S_{32}$ is (1,1) as is the index of $S_{50}$.

50 is the largest $n$ for which the index of $S_n$ is (1, 1).

What is the largest $n$ for which the index of $S_n$ is (3, 3)?

# --hints--

`squaresUnderAHyperbola()` should return `782252`.

```js
assert.strictEqual(squaresUnderAHyperbola(), 782252);
```

# --seed--

## --seed-contents--

```js
function squaresUnderAHyperbola() {

  return true;
}

squaresUnderAHyperbola();
```

# --solutions--

```js
// solution required
```
