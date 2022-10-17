---
id: 5900f44e1000cf542c50ff60
title: 'Problema 225: Tribonacci non divisori'
challengeType: 1
forumTopicId: 301868
dashedName: problem-225-tribonacci-non-divisors
---

# --description--

La sequenza 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...

è definita da $T_1 = T_2 = T_3 = 1$ e $T_n = T_{n - 1} + T_{n - 2} + T_{n - 3}$.

Si può dimostrare che 27 non divide alcun termine di questa sequenza. In effetti, 27 è il primo numero dispari con questa proprietà.

Trova il ${124}^{\text{mo}}$ numero dispari che non divide alcun termine della sequenza precedente.

# --hints--

`tribonacciNonDivisors()` dovrebbe restituire `2009`.

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
