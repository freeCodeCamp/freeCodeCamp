---
id: 5900f3f21000cf542c50ff05
title: 'Problema 134: Conexão de pares de números primos'
challengeType: 1
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

Considere os primos consecutivos $p_1 = 19$ e $p_2 = 23$. É possível verificar que 1219 é o menor número, tal que os últimos algarismos são formados por $p_1$, ao mesmo tempo em que são divisíveis por $p_2$.

De fato, com exceção de $p_1 = 3$ e $p_2 = 5$, para cada par de números primos consecutivos, $p_2 > p_1$, existem valores de $n$ para os quais os últimos algarismos são formados por $p_1$ e $n$ é divisível por $p_2$. Considere $S$ o menor destes valores de $n$.

Encontre $\sum{S}$ para cada par de números primos consecutivos, com $5 ≤ p_1 ≤ 1000000$.

# --hints--

`primePairConnection()` deve retornar `18613426663617120`.

```js
assert.strictEqual(primePairConnection(), 18613426663617120);
```

# --seed--

## --seed-contents--

```js
function primePairConnection() {

  return true;
}

primePairConnection();
```

# --solutions--

```js
// solution required
```
