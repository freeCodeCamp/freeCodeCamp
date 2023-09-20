---
id: 5900f4ff1000cf542c510011
title: 'Завдання 402: цілочисельні многочлени'
challengeType: 1
forumTopicId: 302070
dashedName: problem-402-integer-valued-polynomials
---

# --description--

Можна довести, що многочлен $n^4 + 4n^3 + 2n^2 + 5n$ кратний 6 для кожного цілого $n$. Також можна довести, що 6 є найбільшим цілим числом, яке задовільняє цю властивість.

Визначте $M(a, b, c)$ як максимальне значення $m$, за якого $n^4 + an^3 + bn^2 + cn$ є кратним $m$ для всіх цілих $n$. Наприклад, $M(4, 2, 5) = 6$.

Також визначте $S(N)$ як суму $M(a, b, c)$ для всіх $0 &lt; a, b, c ≤ N$.

Можна довести, що $S(10) = 1\\,972$ та $S(10\\,000) = 2\\,024\\,258\\,331\\,114$.

Нехай $F_k$ буде послідовністю Фібоначчі:

- $F_0 = 0$, $F_1 = 1$ та
- $F_k = F_{k - 1} + F_{k - 2}$ за умови $k ≥ 2$.

Знайдіть останні 9 цифр в $\sum S(F_k)$ за умови $2 ≤ k ≤ 1\\,234\\,567\\,890\\,123$.

# --hints--

`integerValuedPolynomials()` має повернути `356019862`.

```js
assert.strictEqual(integerValuedPolynomials(), 356019862);
```

# --seed--

## --seed-contents--

```js
function integerValuedPolynomials() {

  return true;
}

integerValuedPolynomials();
```

# --solutions--

```js
// solution required
```
