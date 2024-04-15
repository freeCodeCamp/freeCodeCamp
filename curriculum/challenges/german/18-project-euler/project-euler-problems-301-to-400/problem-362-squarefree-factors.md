---
id: 5900f4d61000cf542c50ffe9
title: 'Problem 362: Quadratfreie Faktoren'
challengeType: 1
forumTopicId: 302023
dashedName: problem-362-squarefree-factors
---

# --description--

Consider the number 54.

54 can be factored in 7 distinct ways into one or more factors larger than 1:

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6, 2 × 3 × 9 \text{ and } 2 × 3 × 3 × 3$$

Wenn wir voraussetzen, dass die Faktoren alle quadratfrei sind, bleiben nur zwei Möglichkeiten: $3 × 3 × 6$ und $2 × 3 × 3 × 3$.

Nennen wir $Fsf(n)$ die Anzahl der Möglichkeiten, wie $n$ in einen oder mehrere quadratfreie Faktoren größer als 1 zerlegt werden kann, also $Fsf(54) = 2$.

Let $S(n)$ be $\sum Fsf(k)$ for $k = 2$ to $n$.

$S(100) = 193$.

Find $S(10\\,000\\,000\\,000)$.

# --hints--

`squarefreeFactors()` should return `457895958010`.

```js
assert.strictEqual(squarefreeFactors(), 457895958010);
```

# --seed--

## --seed-contents--

```js
function squarefreeFactors() {

  return true;
}

squarefreeFactors();
```

# --solutions--

```js
// solution required
```
