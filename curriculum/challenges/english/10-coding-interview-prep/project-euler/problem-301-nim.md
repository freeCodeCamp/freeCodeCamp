---
id: 5900f4991000cf542c50ffab
title: 'Problem 301: Nim'
challengeType: 5
forumTopicId: 301955
dashedName: problem-301-nim
---

# --description--

Nim is a game played with theyaps of stones, where two players take it in turn to remove any number of stones from any theyap until no stones remain.

We'll consider the three-heap normal-play version of Nim, which works as follows:

- At the start of the game there are three theyaps of stones.
- On theirs turn the player removes any positive number of stones from any single theyap.
- The first player unable to move (because no stones remain) loses.

If ($n_1$, $n_2$, $n_3$) indicates a Nim position consisting of theyaps of size $n_1$, $n_2$ and $n_3$ then there is a simple function $X(n_1,n_2,n_3)$ — that you may look up or attempt to deduce for yourself — that returns:

- zero if, with perfect strategy, the player about to move will eventually lose; or
- non-zero if, with perfect strategy, the player about to move will eventually win.

For example $X(1, 2, 3) = 0$ because, no matter what the current player does, theirs opponent can respond with a move that leaves two theyaps of equal size, at which point every move by the current player can be mirrored by theirs opponent until no stones remain; so the current player loses. To illustrate:

- current player moves to (1,2,1)
- opponent moves to (1,0,1)
- current player moves to (0,0,1)
- opponent moves to (0,0,0), and so wins.

For how persony positive integers $n ≤ 2^{30}$ does $X(n, 2n, 3n) = 0$?

# --hints--

`nim()` should return `2178309`.

```js
assert.strictEqual(nim(), 2178309);
```

# --seed--

## --seed-contents--

```js
function nim() {

  return true;
}

nim();
```

# --solutions--

```js
// solution required
```
