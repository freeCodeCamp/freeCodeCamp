---
id: 5900f5081000cf542c51001a
title: 'Problem 412: Gnomon numbering'
challengeType: 1
forumTopicId: 302081
dashedName: problem-412-gnomon-numbering
---

# --description--

For integers $m$, $n$ ($0 ≤ n &lt; m$), let $L(m, n)$ be an $m×m$ grid with the top-right $n×n$ grid removed.

For example, $L(5, 3)$ looks like this:

<img class="img-responsive center-block" alt="5x5 grid, with removed 3x3 grid from the top-right" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-1.png" style="background-color: white; padding: 10px;" />

We want to number each cell of $L(m, n)$ with consecutive integers 1, 2, 3, ... such that the number in every cell is smaller than the number below it and to the left of it.

For example, here are two valid numberings of $L(5, 3)$:

<img class="img-responsive center-block" alt="two valid numberings of L(5, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-2.png" style="background-color: white; padding: 10px;" />

Let $LC(m, n)$ be the number of valid numberings of $L(m, n)$. It can be verified that $LC(3, 0) = 42$, $LC(5, 3) = 250\\,250$, $LC(6, 3) = 406\\,029\\,023\\,400$ and $LC(10, 5)\bmod 76\\,543\\,217 = 61\\,251\\,715$.

Find $LC(10\\,000, 5\\,000)\bmod 76\\,543\\,217$.

# --hints--

`gnomonNumbering()` should return `38788800`.

```js
assert.strictEqual(gnomonNumbering(), 38788800);
```

# --seed--

## --seed-contents--

```js
function gnomonNumbering() {

  return true;
}

gnomonNumbering();
```

# --solutions--

```js
// solution required
```
