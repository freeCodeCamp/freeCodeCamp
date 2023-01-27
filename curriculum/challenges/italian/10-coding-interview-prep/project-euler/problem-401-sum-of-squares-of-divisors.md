---
id: 5900f4fd1000cf542c51000f
title: 'Problema 401: Somma di quadrati di divisori'
challengeType: 1
forumTopicId: 302069
dashedName: problem-401-sum-of-squares-of-divisors
---

# --description--

I divisori di 6 sono 1, 2, 3 e 6.

La somma dei quadrati di questi numeri è $1 + 4 + 9 + 36 = 50$.

Sia $\sigma_2(n)$ la somma dei quadrati dei divisori di $n$. Quindi $\sigma_2(6) = 50$.

Sia $\Sigma_2$ la sommatoria di $\sigma_2$, cioè $\Sigma_2(n) = \sum \sigma_2(i)$ per $i=1$ fino a $n$. I primi 6 valori di $\Sigma_2$ sono: 1, 6, 16, 37, 63 e 113.

Trova \Sigma_2({10}^{15})$ modulo ${10}^9$.

# --hints--

`sumOfSquaresDivisors()` dovrebbe restituire `281632621`.

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
