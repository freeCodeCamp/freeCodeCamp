---
id: 5900f5481000cf542c51005b
title: 'Problem 476: Kreisförmige Verpackung II'
challengeType: 1
forumTopicId: 302153
dashedName: problem-476-circle-packing-ii
---

# --description--

Lasse $R(a, b, c)$ die maximale Fläche sein, die von drei sich nicht überschneidenden Kreisen innerhalb eines Dreiecks mit den Kantenlängen $a$, $b$ und $c$ bedeckt wird.

Lasse $S(n)$ der Mittelwert von $R(a, b, c)$ über alle ganzzahligen Tripel $(a, b, c)$ sein, für die gilt: $1 ≤ a ≤ b ≤ c &lt; a + b ≤ n$.

Du erhältst $S(2) = R(1, 1, 1) ≈ 0,31998$, $S(5) ≈ 1,25899$.

Finde $S(1803)$ gerundet auf 5 Nachkommastellen.

# --hints--

`circlePackingTwo()` sollte `110242.87794` zurückgeben.

```js
assert.strictEqual(circlePackingTwo(), 110242.87794);
```

# --seed--

## --seed-contents--

```js
function circlePackingTwo() {

  return true;
}

circlePackingTwo();
```

# --solutions--

```js
// solution required
```
