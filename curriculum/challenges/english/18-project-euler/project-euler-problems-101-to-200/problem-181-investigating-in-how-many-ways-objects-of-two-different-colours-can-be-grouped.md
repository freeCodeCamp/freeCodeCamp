---
id: 5900f4231000cf542c50ff34
title: >-
  Problem 181: Investigating in how many ways objects of two different colours
  can be grouped
challengeType: 1
forumTopicId: 301817
dashedName: >-
  problem-181-investigating-in-how-many-ways-objects-of-two-different-colours-can-be-grouped
---

# --description--

Having three black objects $B$ and one white object $W$ they can be grouped in 7 ways like this:

$$(BBBW)\\;(B,BBW)\\;(B,B,BW)\\;(B,B,B,W)\\;(B,BB,W)\\;(BBB,W)\\;(BB,BW)$$

In how many ways can sixty black objects $B$ and forty white objects $W$ be thus grouped?

# --hints--

`colorsGrouping()` should return `83735848679360670`.

```js
assert.strictEqual(colorsGrouping(), 83735848679360670);
```

# --seed--

## --seed-contents--

```js
function colorsGrouping() {

  return true;
}

colorsGrouping();
```

# --solutions--

```js
// solution required
```
