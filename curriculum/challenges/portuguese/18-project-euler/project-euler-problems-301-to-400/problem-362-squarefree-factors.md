---
id: 5900f4d61000cf542c50ffe9
title: 'Problema 362: Fatores não quadráticos'
challengeType: 1
forumTopicId: 302023
dashedName: problem-362-squarefree-factors
---

# --description--

Considere o número 54.

54 pode ser fatorado de 7 formas distintas em um ou mais fatores maiores que 1:

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6 2 × 3 × 9 \text{ e } 2 × 3 × 3 × 3$$

Se precisarmos que todos os fatores não sejam quadráticos, apenas duas formas permanecem: $3 × 3 × 6$ e $2 × 3 × 3 × 3 × 3$.

Vamos chamar $Fsf(n)$ o número de formas $n$ que pode ser fatorado em um ou mais fatores não quadráticos maiores que 1, então $Fsf(54) = 2$.

Considere $S(n)$ como $\sum Fsf(k)$ para $k = 2$ a $n$.

$S(100)=193$.

Encontre $S(10.000.000.000)$.

# --hints--

`squarefreeFactors()` deve retornar `457895958010`.

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
