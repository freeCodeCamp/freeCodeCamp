---
id: 5900f4b01000cf542c50ffc2
title: 'Problema 323: Operações bitwise-OR em números inteiros aleatórios'
challengeType: 1
forumTopicId: 301980
dashedName: problem-323-bitwise-or-operations-on-random-integers
---

# --description--

Considere $y_0, y_1, y_2, \ldots$ como sendo uma sequência de números inteiros de 32 bits aleatórios e sem sinal (ou seja, $0 ≤ y_i &lt; 2^{32}$, com qualquer valor sendo igualmente possível).

Para a sequência $x_i$, é dada a seguinte recursão:

- $x_0 = 0$ e
- $x_i = x_{i - 1} \mathbf{|} y_{i - 1}$, para $i > 0$. ($\mathbf{|}$ é a operação bitwise-OR)

Pode-se ver que, eventualmente, haverá um índice $N$, tal que $x_i = 2^{32} - 1$ (um padrão de bits somente composto de 1s) para todos $i ≥ N$.

Encontre o valor esperado de $N$. Dê sua resposta arredondada para 10 casas depois da vírgula.

# --hints--

`bitwiseOrOnRandomIntegers()` deve retornar `6.3551758451`.

```js
assert.strictEqual(bitwiseOrOnRandomIntegers(), 6.3551758451);
```

# --seed--

## --seed-contents--

```js
function bitwiseOrOnRandomIntegers() {

  return true;
}

bitwiseOrOnRandomIntegers();
```

# --solutions--

```js
// solution required
```
