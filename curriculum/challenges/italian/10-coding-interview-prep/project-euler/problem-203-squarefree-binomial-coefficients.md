---
id: 5900f4381000cf542c50ff4a
title: 'Problema 203: Coefficienti binomiali privi di quadrati'
challengeType: 1
forumTopicId: 301844
dashedName: problem-203-squarefree-binomial-coefficients
---

# --description--

I coefficienti binomiali $\displaystyle\binom{n}{k}$ possono essere disposti in forma triangolare (il triangolo di Pascal) in questo modo:

$$\begin{array}{ccccccccccccccc}    &   &   &   &    &    &    &  1 &    &    &    &   &   &   &   \\\\
   &   &   &   &    &    &  1 &    & 1  &    &    &   &   &   &   \\\\    &   &   &   &    &  1 &    &  2 &    &  1 &    &   &   &   &   \\\\
   &   &   &   &  1 &    &  3 &    &  3 &    &  1 &   &   &   &   \\\\    &   &   & 1 &    &  4 &    &  6 &    &  4 &    & 1 &   &   &   \\\\
   &   & 1 &   &  5 &    & 10 &    & 10 &    &  5 &   & 1 &   &   \\\\    & 1 &   & 6 &    & 15 &    & 20 &    & 15 &    & 6 &   & 1 &   \\\\
 1 &   & 7 &   & 21 &    & 35 &    & 35 &    & 21 &   & 7 &   & 1 \\\\ &   &   &   &    &    &    & \ldots \end{array}$$

Si può notare che le prime otto righe del triangolo di Pascal contengono dodici numeri distinti: 1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 21 e 35.

Un numero intero positivo è detto privo di quadrati se nessun quadrato di un primo divide n. Dei dodici numeri distinti nelle prime otto file del triangolo di Pascal, tutti tranne 4 e 20 sono privi di quadrati. La somma dei numeri privi di quadrati distinti nelle prime otto righe è 105.

Trova la somma dei numeri privi di quadrati distinti nelle prime 51 righe del triangolo di Pascal.

# --hints--

`squarefreeBinomialCoefficients()` dovrebbe restituire `34029210557338`.

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
