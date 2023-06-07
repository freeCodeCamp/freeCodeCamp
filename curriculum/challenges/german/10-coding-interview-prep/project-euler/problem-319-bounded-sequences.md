---
id: 5900f4ab1000cf542c50ffbe
title: 'Problem 319: Begrenzte Sequenzen'
challengeType: 1
forumTopicId: 301975
dashedName: problem-319-bounded-sequences
---

# --description--

Lasse $x_1, x_2, \ldots, x_n$ eine Folge der Länge $n$ sein, für die gilt:

- $x_1 = 2$
- für alle $1 &lt; i ≤ n : x_{i - 1} &lt; x_i$
- für alle $i$ und $j$ mit $1 ≤ i, j ≤ n : {(x_i)}^j &lt; {(x_j + 1)}^i$

Es gibt nur fünf solcher Sequenzen der Länge 2, nämlich: {2,4}, {2,5}, {2,6}, {2,7} und {2,8}. Es gibt 293 solcher Sequenzen der Länge 5, drei Beispiele werden unten genannt: {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}.

Lasse $t(n)$ die Anzahl solcher Sequenzen der Länge $n$ bezeichnen. Dir wird angegeben, dass $t(10) = 86195$ und $t(20) = 5227991891$.

Finde $t({10}^{10})$ und gib deine Antwort modulo $10^9$.

# --hints--

`boundedSequences()` sollte `268457129` zurückgeben.

```js
assert.strictEqual(boundedSequences(), 268457129);
```

# --seed--

## --seed-contents--

```js
function boundedSequences() {

  return true;
}

boundedSequences();
```

# --solutions--

```js
// solution required
```
