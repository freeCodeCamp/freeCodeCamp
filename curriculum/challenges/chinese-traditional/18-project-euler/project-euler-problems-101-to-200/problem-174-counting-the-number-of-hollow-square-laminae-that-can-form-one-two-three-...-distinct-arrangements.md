---
id: 5900f41a1000cf542c50ff2d
title: >-
  問題174：計算可以形成一個，兩個，三個......不同排列的“空心”方形薄片的數量
challengeType: 1
forumTopicId: 301809
dashedName: >-
  problem-174-counting-the-number-of-hollow-square-laminae-that-can-form-one-two-three-----distinct-arrangements
---

# --description--

We shall define a square lamina to be a square outline with a square "hole" so that the shape possesses vertical and horizontal symmetry.

給定八個瓷磚，可以僅以一種方式形成薄層：3x3正方形，中間有1x1個孔。 但是，使用32個瓷磚可以形成兩個不同的薄片。

<img class="img-responsive center-block" alt="two square lamina with holes 2x2 and 7x7" src="https://cdn.freecodecamp.org/curriculum/project-euler/using-up-to-one-million-tiles-how-many-different-hollow-square-laminae-can-be-formed.gif" style="background-color: white; padding: 10px;" />

If $t$ represents the number of tiles used, we shall say that $t = 8$ is type $L(1)$ and $t = 32$ is type $L(2)$.

Let $N(n)$ be the number of $t ≤ 1000000$ such that $t$ is type $L(n)$; for example, $N(15) = 832$.

What is $\sum N(n)$ for $1 ≤ n ≤ 10$?

# --hints--

`hollowSquareLaminaeDistinctArrangements()` should return `209566`.

```js
assert.strictEqual(hollowSquareLaminaeDistinctArrangements(), 209566);
```

# --seed--

## --seed-contents--

```js
function hollowSquareLaminaeDistinctArrangements() {

  return true;
}

hollowSquareLaminaeDistinctArrangements();
```

# --solutions--

```js
// solution required
```
