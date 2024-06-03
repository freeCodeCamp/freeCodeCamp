---
id: 5900f4de1000cf542c50fff0
title: 'Problem 369: Badugi'
challengeType: 1
forumTopicId: 302030
dashedName: problem-369-badugi
---

# --description--

In a standard 52 card deck of playing cards, a set of 4 cards is a Badugi if it contains 4 cards with no pairs and no two cards of the same suit.

Lasse $f(n)$ die Anzahl der Möglichkeiten sein, $n$ Karten mit einer Teilmenge von 4 Karten zu wählen, die ein Badugi ist. Zum Beispiel gibt es $2\\,598\,960$ Möglichkeiten, fünf Karten aus einem Standarddeck mit 52 Karten auszuwählen, von denen $514\,800$ eine Teilmenge von 4 Karten enthalten, die ein Badugi ist, also $f(5) = 514800$.

Find $\sum f(n)$ for $4 ≤ n ≤ 13$.

# --hints--

`badugi()` should return `862400558448`.

```js
assert.strictEqual(badugi(), 862400558448);
```

# --seed--

## --seed-contents--

```js
function badugi() {

  return true;
}

badugi();
```

# --solutions--

```js
// solution required
```
