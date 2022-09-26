---
id: 5900f5191000cf542c51002c
title: 'Problema 429: Soma dos quadrados dos divisores unitários'
challengeType: 1
forumTopicId: 302099
dashedName: problem-429-sum-of-squares-of-unitary-divisors
---

# --description--

Um divisor unitário $d$ de um número $n$ é um divisor de $n$ que tem a propriedade $gcd(d, \frac{n}{d}) = 1$.

Os divisores unitários de $4! = 24$ são 1, 3, 8 e 24.

A soma de seus quadrados é $12 + 32 + 82 + 242 = 650$.

Considere $S(n)$ como representando a soma dos quadrados dos divisores unitários de $n$. Assim, $S(4!) = 650$.

Encontre $S(100.000.000!)$ modulo $1.000.000.009$.

# --hints--

`sumSquaresOfUnitaryDivisors()` deve retornar `98792821`.

```js
assert.strictEqual(sumSquaresOfUnitaryDivisors(), 98792821);
```

# --seed--

## --seed-contents--

```js
function sumSquaresOfUnitaryDivisors() {

  return true;
}

sumSquaresOfUnitaryDivisors();
```

# --solutions--

```js
// solution required
```
