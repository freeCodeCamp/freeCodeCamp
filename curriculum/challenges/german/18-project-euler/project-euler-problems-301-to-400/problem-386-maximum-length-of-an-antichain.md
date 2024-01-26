---
id: 5900f4ef1000cf542c510001
title: 'Problem 386: Maximale Länge einer Antikette'
challengeType: 1
forumTopicId: 302050
dashedName: problem-386-maximum-length-of-an-antichain
---

# --description--

Let $n$ be an integer and $S(n)$ be the set of factors of $n$.

Eine Teilmenge $A$ von $S(n)$ heißt eine Antikette von $S(n)$, wenn $A$ nur ein Element enthält oder wenn keines der Elemente von $A$ eines der anderen Elemente von $A$ teilt.

For example: $S(30) = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$

$\\{2, 5, 6\\}$ ist keine Antikette von $S(30)$.

$\\{2, 3, 5\\}$ ist eine Antikette von $S(30)$.

Lasse $N(n)$ die maximale Länge einer Antikette von $S(n)$.

Find $\sum N(n)$ for $1 ≤ n ≤ {10}^8$

# --hints--

`maximumLengthOfAntichain()` should return `528755790`.

```js
assert.strictEqual(maximumLengthOfAntichain(), 528755790);
```

# --seed--

## --seed-contents--

```js
function maximumLengthOfAntichain() {

  return true;
}

maximumLengthOfAntichain();
```

# --solutions--

```js
// solution required
```
