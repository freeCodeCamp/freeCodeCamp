---
id: 5900f4fd1000cf542c51000f
title: 'Problema 401: Soma dos quadrados dos divisores'
challengeType: 1
forumTopicId: 302069
dashedName: problem-401-sum-of-squares-of-divisors
---

# --description--

Os divisores de 6 são: 1, 2, 3 e 6.

A soma dos quadrados desses números é $1 + 4 + 9 + 36 = 50$.

Considere $\sigma_2(n)$ como representante da soma dos quadrados dos divisores de $n$. Assim, $\sigma_2(6) = 50$.

Considere $\Sigma_2$ como representando a função somatória de $\sigma_2$, ou seja, $\Sigma_2(n) = \sum \sigma_2(i)$ para $i=1$ a $n$. Os primeiros 6 valores de $\Sigma_2$ são: 1, 6, 16, 37, 63 e 113.

Encontre $\Sigma_2({10}^{15})$ modulo ${10}^9$.

# --hints--

`sumOfSquaresDivisors()` deve retornar `281632621`.

```js
assert.strictEqual(sumOfSquaresDivisors(), 281632621);
```

# --seed--

## --seed-contents--

```js
function sumOfSquaresDivisors() {

  return true;
}

sumOfSquaresDivisors();
```

# --solutions--

```js
// solution required
```
