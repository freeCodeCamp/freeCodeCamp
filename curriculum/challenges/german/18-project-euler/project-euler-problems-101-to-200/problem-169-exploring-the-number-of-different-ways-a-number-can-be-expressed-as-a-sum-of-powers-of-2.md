---
id: 5900f4151000cf542c50ff28
title: >-
  Problem 169: Untersuchung der verschiedenen Möglichkeiten, wie eine Zahl als Summe von 2er-Potenzen ausgedrückt werden kann
challengeType: 1
forumTopicId: 301803
dashedName: >-
  problem-169-exploring-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Definiere $f(0)=1$ und $f(n)$ als die Anzahl der verschiedenen Möglichkeiten, wie $n$ als eine Summe ganzzahliger Potenzen von 2 ausgedrückt werden kann, wobei jede Potenz höchstens zweimal verwendet werden darf.

Zum Beispiel ist $f(10)=5$, da es fünf verschiedene Möglichkeiten gibt, 10 auszudrücken:

$$\begin{align}   & 1 + 1 + 8 \\\\
  & 1 + 1 + 4 + 4 \\\\   & 1 + 1 + 2 + 2 + 4 \\\\
  & 2 + 4 + 4 \\\\ & 2 + 8 \end{align}$$

Was ergibt $f({10}^{25})$?

# --hints--

`numberOfWaysToExpress()` sollte `178653872807` zurückgeben.

```js
assert.strictEqual(numberOfWaysToExpress(), 178653872807);
```

# --seed--

## --seed-contents--

```js
function numberOfWaysToExpress() {

  return true;
}

numberOfWaysToExpress();
```

# --solutions--

```js
// solution required
```
