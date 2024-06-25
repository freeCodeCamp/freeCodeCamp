---
id: 5900f4511000cf542c50ff62
title: 'Problem 226: A Scoop of Blancmange'
challengeType: 1
forumTopicId: 301869
dashedName: problem-226-a-scoop-of-blancmange
---

# --description--

The blancmange curve is the set of points ($x$,$y$) such that $0 ≤ x ≤ 1$ and $\displaystyle y = \sum_{n = 0}^{\infty} \frac{s(2^nx)}{2^n}$, where $s(x)$ is the distance from $x$ to the nearest integer.

The area under the blancmange curve is equal to $\frac{1}{2}$, shown in pink in the diagram below.

<img class="img-responsive center-block" alt="diagram of blancmange curve, with circle C shown on diagram" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-scoop-of-blancmange.gif" style="background-color: white; padding: 10px;">

Let $C$ be the circle with centre ($\frac{1}{4}$,$\frac{1}{2}$) and radius $\frac{1}{4}$, shown in black in the diagram.

What area under the blancmange curve is enclosed by $C$? Give your answer rounded to eight decimal places in the form 0.abcdefgh

# --hints--

`scoopOfBlancmange()` should return `0.11316017`.

```js
assert.strictEqual(scoopOfBlancmange(), 0.11316017);
```

# --seed--

## --seed-contents--

```js
function scoopOfBlancmange() {

  return true;
}

scoopOfBlancmange();
```

# --solutions--

```js
// solution required
```
