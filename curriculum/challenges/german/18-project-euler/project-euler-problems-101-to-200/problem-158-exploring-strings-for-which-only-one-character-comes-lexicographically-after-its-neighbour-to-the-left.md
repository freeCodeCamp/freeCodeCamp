---
id: 5900f40a1000cf542c50ff1d
title: >-
  Problem 158: Untersuchung von Strings, bei denen nur ein Zeichen lexikografisch nach seinem linken Nachbarn kommt
challengeType: 1
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

Taking three different letters from the 26 letters of the alphabet, character strings of length three can be formed.

Beispiele hierfür sind "abc", "hat" und "zyx".

Wenn wir diese drei Beispiele untersuchen, sehen wir, dass bei "abc" zwei Zeichen lexikografisch nach dem linken Nachbarn kommen.

Für "hat" gibt es genau ein Zeichen, das lexikografisch nach seinem linken Nachbarn kommt. Für "zyx" gibt es null Zeichen, die lexikografisch nach seinem linken Nachbarn kommen.

Insgesamt gibt es 10400 Strings der Länge 3, bei denen genau ein Zeichen lexikografisch nach seinem linken Nachbarn kommt.

Wir betrachten nun Strings mit $n ≤ 26$ verschiedenen Zeichen aus dem Alphabet.

Für jedes $n$ ist $p(n)$ die Anzahl der Strings der Länge $n$, bei denen genau ein Zeichen lexikographisch nach seinem linken Nachbarn kommt.

Was ist der maximale Wert von $p(n)$?

# --hints--

`lexicographicNeighbours()` sollte `409511334375` zurückgeben.

```js
assert.strictEqual(lexicographicNeighbours(), 409511334375);
```

# --seed--

## --seed-contents--

```js
function lexicographicNeighbours() {

  return true;
}

lexicographicNeighbours();
```

# --solutions--

```js
// solution required
```
