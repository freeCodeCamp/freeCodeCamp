---
id: 5900f4381000cf542c50ff4a
title: 'Problem 203: Squarefree Binomial Coefficients'
challengeType: 1
forumTopicId: 301844
dashedName: problem-203-squarefree-binomial-coefficients
---

# --description--

Die Binomialkoeffizienten $\displaystyle\binom{n}{k}$ können in Dreiecksform, dem Pascalschen Dreieck, wie folgt angeordnet werden:

$$\begin{array}{ccccccccccccccc}    &   &   &   &    &    &    &  1 &    &    &    &   &   &   &   \\\\
   &   &   &   &    &    &  1 &    & 1  &    &    &   &   &   &   \\\\    &   &   &   &    &  1 &    &  2 &    &  1 &    &   &   &   &   \\\\
   &   &   &   &  1 &    &  3 &    &  3 &    &  1 &   &   &   &   \\\\    &   &   & 1 &    &  4 &    &  6 &    &  4 &    & 1 &   &   &   \\\\
   &   & 1 &   &  5 &    & 10 &    & 10 &    &  5 &   & 1 &   &   \\\\    & 1 &   & 6 &    & 15 &    & 20 &    & 15 &    & 6 &   & 1 &   \\\\
 1 &   & 7 &   & 21 &    & 35 &    & 35 &    & 21 &   & 7 &   & 1 \\\\ &   &   &   &    &    &    & \ldots \end{array}$$

Man sieht, dass die ersten acht Zeilen des Pascalschen Dreiecks zwölf verschiedene Zahlen enthalten: 1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 21 und 35.

Eine positive ganze Zahl n wird als quadratfrei bezeichnet, wenn kein Quadrat einer Primzahl n teilt. Von den zwölf verschiedenen Zahlen in den ersten acht Zeilen des Pascalschen Dreiecks sind alle außer 4 und 20 quadratfrei. Die Summe der eindeutigen quadratfreien Zahlen in den ersten acht Zeilen ist 105.

Finde die Summe der verschiedenen quadratfreien Zahlen in den ersten 51 Zeilen des Pascalschen Dreiecks.

# --hints--

`squarefreeBinomialCoefficients()` sollte `34029210557338` zurückgeben.

```js
assert.strictEqual(squarefreeBinomialCoefficients(), 34029210557338);
```

# --seed--

## --seed-contents--

```js
function squarefreeBinomialCoefficients() {

  return true;
}

squarefreeBinomialCoefficients();
```

# --solutions--

```js
// solution required
```
