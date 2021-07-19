---
id: 5900f3ec1000cf542c50feff
title: 'Problem 128: Hexagonal tile differences'
challengeType: 5
forumTopicId: 301755
dashedName: problem-128-hexagonal-tile-differences
---

# --description--

A hexagonal tile with number 1 is surrounded by a ring of six hexagonal tiles, starting at "12 o'clock" and numbering the tiles 2 to 7 in an anti-clockwise direction.

New rings are added in the same fashion, with the next rings being numbered 8 to 19, 20 to 37, 38 to 61, and so on. The diagram below shows the first three rings.

<img class="img-responsive center-block" alt="three first rings of arranged hexagonal tiles with numbers 1 to 37, and with highlighted tiles 8 and 17" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-tile-differences.png" style="background-color: white; padding: 10px;">

By finding the difference between tile $n$ and each of its six neighbours we shall define $PD(n)$ to be the number of those differences which are prime.

For example, working clockwise around tile 8 the differences are 12, 29, 11, 6, 1, and 13. So $PD(8) = 3$.

In the same way, the differences around tile 17 are 1, 17, 16, 1, 11, and 10, hence $PD(17) = 2$.

It can be shown that the maximum value of $PD(n)$ is $3$.

If all of the tiles for which $PD(n) = 3$ are listed in ascending order to form a sequence, the 10th tile would be 271.

Find the 2000th tile in this sequence.

# --hints--

`hexagonalTile()` should return `14516824220`.

```js
assert.strictEqual(hexagonalTile(), 14516824220);
```

# --seed--

## --seed-contents--

```js
function hexagonalTile() {

  return true;
}

hexagonalTile();
```

# --solutions--

```js
// solution required
```
