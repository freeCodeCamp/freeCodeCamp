---
id: 5900f3911000cf542c50fea4
title: 'Problema 37: Números primos truncáveis'
challengeType: 1
forumTopicId: 302031
dashedName: problem-37-truncatable-primes
---

# --description--

O número 3797 tem uma propriedade interessante. Além de ser um número primo, se você remover 1 algarismo da esquerda para a direita, o resultado ainda assim é um número primo: 3797, 797, 97 e 7. Também podemos remover da direita para a esquerda: 3797, 379, 37 e 3.

Calcule a soma dos números primos `n` (8 ≤ `n` ≤ 11) que podem ser truncados da esquerda para a direita e vice-versa.

Observação: 2, 3, 5 e 7 não são considerados números primos truncáveis.

# --hints--

`truncatablePrimes(8)` deve retornar um número.

```js
assert(typeof truncatablePrimes(8) === 'number');
```

`truncatablePrimes(8)` deve retornar 1986.

```js
assert(truncatablePrimes(8) == 1986);
```

`truncatablePrimes(9)` deve retornar 5123.

```js
assert(truncatablePrimes(9) == 5123);
```

`truncatablePrimes(10)` deve retornar 8920.

```js
assert(truncatablePrimes(10) == 8920);
```

`truncatablePrimes(11)` deve retornar 748317.

```js
assert(truncatablePrimes(11) == 748317);
```

# --seed--

## --seed-contents--

```js
function truncatablePrimes(n) {

  return n;
}

truncatablePrimes(11);
```

# --solutions--

```js
// solution required
```
