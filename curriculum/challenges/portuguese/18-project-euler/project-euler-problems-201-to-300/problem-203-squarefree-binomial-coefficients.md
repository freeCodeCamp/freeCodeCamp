---
id: 5900f4381000cf542c50ff4a
title: 'Problema 203: Coeficientes binomiais livres de quadrados'
challengeType: 1
forumTopicId: 301844
dashedName: problem-203-squarefree-binomial-coefficients
---

# --description--

Os coeficientes binomiais $\displaystyle\binom{n}{k}$ podem ser organizados em forma triangular, no triângulo de Pascal, assim:

$$\begin{array}{ccccccccccccccc}    &   &   &   &    &    &    &  1 &    &    &    &   &   &   &   \\\\
   &   &   &   &    &    &  1 &    & 1  &    &    &   &   &   &   \\\\    &   &   &   &    &  1 &    &  2 &    &  1 &    &   &   &   &   \\\\
   &   &   &   &  1 &    &  3 &    &  3 &    &  1 &   &   &   &   \\\\    &   &   & 1 &    &  4 &    &  6 &    &  4 &    & 1 &   &   &   \\\\
   &   & 1 &   &  5 &    & 10 &    & 10 &    &  5 &   & 1 &   &   \\\\    & 1 &   & 6 &    & 15 &    & 20 &    & 15 &    & 6 &   & 1 &   \\\\
 1 &   & 7 &   & 21 &    & 35 &    & 35 &    & 21 &   & 7 &   & 1 \\\\ &   &   &   &    &    &    & \ldots \end{array}$$

Podemos ver que as primeiras oito linhas do triângulo de Pascal contêm doze números distintos: 1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 21 e 35.

Um número inteiro positivo n é chamado de livre de quadrados se nenhum quadrado de um número primo dividir n. Dos doze números distintos nas primeiras oito linhas do triângulo de Pascal, todos os números exceto 4 e 20 são livres de quadrados. A soma dos números distintos livres de quadrados nas primeiras oito linhas é 105.

Encontre a soma dos números distintos livres de quadrados nas primeiras 51 linhas do triângulo de Pascal.

# --hints--

`squarefreeBinomialCoefficients()` deve retornar `34029210557338`.

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
