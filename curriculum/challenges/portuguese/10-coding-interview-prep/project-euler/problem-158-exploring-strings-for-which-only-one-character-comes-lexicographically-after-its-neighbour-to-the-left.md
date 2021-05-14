---
id: 5900f40a1000cf542c50ff1d
title: >-
  Problem 158: Exploring strings for which only one character comes
  lexicographically after its neighbour to the left
challengeType: 5
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

Taking three different letters from the 26 letters of the alphabet, character strings of length three can be formed.

Examples are 'abc', 'hat' and 'zyx'.

When we study these three examples we see that for 'abc' two characters come lexicographically after its neighbour to the left.

For 'hat' there is exactly one character that comes lexicographically after its neighbour to the left. For 'zyx' there are zero characters that come lexicographically after its neighbour to the left.

In all there are 10400 strings of length 3 for which exactly one character comes lexicographically after its neighbour to the left.

We now consider strings of n ≤ 26 different characters from the alphabet.

For every n, p(n) is the number of strings of length n for which exactly one character comes lexicographically after its neighbour to the left.

What is the maximum value of p(n)?

# --hints--

`euler158()` should return 409511334375.

```js
assert.strictEqual(euler158(), 409511334375);
```

# --seed--

## --seed-contents--

```js
function euler158() {

  return true;
}

euler158();
```

# --solutions--

```js
// solution required
```
