---
id: 5900f4831000cf542c50ff95
title: 'Problema 278: Combinações lineares de semiprimos'
challengeType: 1
forumTopicId: 301928
dashedName: problem-278-linear-combinations-of-semiprimes
---

# --description--

Dados os valores de números inteiros $1 &lt; a_1 &lt; a_2 &lt; \ldots &lt; a_n$, considere a combinação linear $q_1a_1 + q_2a_2 + \ldots + q_na_n = b$, usando somente valores em números inteiros $q_k ≥ 0$.

Observe que, para um determinado conjunto de $a_k$, pode ser que nem todos os valores de $b$ sejam possíveis. Por exemplo, se $a_1 = 5$ e $a_2 = 7$, não existem $q_1 ≥ 0$ e $q_2 ≥ 0$ tal que $b$ possa ser 1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18 ou 23.

De fato, 23 é o maior valor impossível de $b$ para $a_1 = 5$ e $a_2 = 7$. Portanto, consideramos $f(5, 7) = 23$. Da mesma forma, pode ser mostrado que $f(6, 10, 15)=29$ e $f(14, 22, 77) = 195$.

Encontre $\sum f(pq,pr,qr)$, onde $p$, $q$ e $r$ são números primos e $p &lt; q &lt; r &lt; 5000$.

# --hints--

`linearCombinationOfSemiprimes()` deve retornar `1228215747273908500`.

```js
assert.strictEqual(linearCombinationOfSemiprimes(), 1228215747273908500);
```

# --seed--

## --seed-contents--

```js
function linearCombinationOfSemiprimes() {

  return true;
}

linearCombinationOfSemiprimes();
```

# --solutions--

```js
// solution required
```
