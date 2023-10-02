---
id: 5900f44e1000cf542c50ff60
title: 'Problema 225: Não divisores Tribonacci'
challengeType: 1
forumTopicId: 301868
dashedName: problem-225-tribonacci-non-divisors
---

# --description--

A sequência 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201...

é definida por $T_1 = T_2 = T_3 = 1$ e $T_n = T_{n - 1} + T_{n - 2} + T_{n - 3}$.

Pode-se mostrar que 27 não divide nenhum termo desta sequência. De fato, 27 é o primeiro número ímpar com esta propriedade.

Encontre o ${124}^{\text{o}}$ número ímpar que não divide nenhum dos termos da sequência acima.

# --hints--

`tribonacciNonDivisors()` deve retornar `2009`.

```js
assert.strictEqual(tribonacciNonDivisors(), 2009);
```

# --seed--

## --seed-contents--

```js
function tribonacciNonDivisors() {

  return true;
}

tribonacciNonDivisors();
```

# --solutions--

```js
// solution required
```
