---
id: 5900f4421000cf542c50ff55
title: 'Problema 214: Cadeias de totientes'
challengeType: 1
forumTopicId: 301856
dashedName: problem-214-totient-chains
---

# --description--

Considere $φ$ como sendo a função totiente de Euler, ou seja, para um número natural $n$, $φ(n)$ é o número de $k$, $1 ≤ k ≤ n$, para os quais o máximo divisor comum é $gcd(k,n) = 1$.

Ao iterar por $φ$, cada número inteiro positivo gera uma cadeia decrescente de números terminando em 1. Ex: se começarmos com 5 a sequência 5,4,2,1 é gerada. Aqui está uma lista de todas as cadeias com comprimento 4:

$$\begin{align}    5,4,2,1 & \\\\
   7,6,2,1 & \\\\    8,4,2,1 & \\\\
   9,6,2,1 & \\\\   10,4,2,1 & \\\\
  12,4,2,1 & \\\\   14,6,2,1 & \\\\
  18,6,2,1 & \end{align}$$

Apenas duas dessas cadeias começam com um número primo e sua soma é 12.

Qual é a soma de todos os números primos menores do que $40.000.000$ que gera uma cadeia de comprimento 25?

# --hints--

`totientChains()` deve retornar `1677366278943`.

```js
assert.strictEqual(totientChains(), 1677366278943);
```

# --seed--

## --seed-contents--

```js
function totientChains() {

  return true;
}

totientChains();
```

# --solutions--

```js
// solution required
```
