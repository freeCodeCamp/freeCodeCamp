---
id: 5900f4811000cf542c50ff94
title: 'Problema 277: Uma sequência de Collatz modificada'
challengeType: 1
forumTopicId: 301927
dashedName: problem-277-a-modified-collatz-sequence
---

# --description--

Uma sequência de Collatz modificada de inteiros é obtida a partir do valor inicial $a_1$ da seguinte forma:

$a_{n + 1} = \frac{a_n}{3}$ se $a_n$ for divisível por 3. Vamos apresentar isto como um grande passo descendente, "D".

$a_{n + 1} = \frac{4a_n + 2}{3}$ se $a_n$ dividido por 3 dá resto 1. Vamos apresentar isto como um grande passo ascendente, "U".

$a_{n + 1} = \frac{2a_n - 1}{3}$ se $a_n$ dividido por 3 tem 2 como resto. Vamos apresentar isto como um pequeno passo descendente, "d".

A sequência termina quando algum $a_n = 1$.

Dado qualquer número inteiro, podemos listar a sequência de passos. Por exemplo, se $a_1 = 231$, então a sequência $\\{a_n\\} = \\{231, 77, 51, 17, 11, 7, 10, 14, 9, 3, 1\\}$ corresponde aos passos "DdDddUUdDD".

Claro, há outras sequências que começam com a mesma sequência "DdDUUdD...".

Por exemplo, se $a_1 = 1004064$, então a sequência será DdDddUUdDDDdUDUUUdDdUUDDDUdDD.

Na verdade, 1004064 é o menor número possível $a_1 > {10}^6$ que começa com a sequência DdDddUUdDD.

Qual é o menor número $a_1 > {10}^{15}$ que começa com a sequência "UDDDUdddDDUDDddDdDddDDUDDdUUDd"?

# --hints--

`modifiedCollatzSequence()` deve retornar `1125977393124310`.

```js
assert.strictEqual(modifiedCollatzSequence(), 1125977393124310);
```

# --seed--

## --seed-contents--

```js
function modifiedCollatzSequence() {

  return true;
}

modifiedCollatzSequence();
```

# --solutions--

```js
// solution required
```
