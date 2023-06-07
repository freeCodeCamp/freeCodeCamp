---
id: 5900f4ff1000cf542c510011
title: 'Завдання 402: Цілочисельні многочлени'
challengeType: 1
forumTopicId: 302070
dashedName: problem-402-integer-valued-polynomials
---

# --description--

Показано, що многочлен $n^4 + 4n^3 + 2n^2 + 5n$ кратний 6 для кожного цілого числа $n$. Також 6 є найбільшим цілим числом, що задовольняє цю властивість.

Визначте $M(a, b, c)$ як максимальний $m$ таким чином, щоб $n^4 + an^3 + bn^2 + cn$ було кратне $m$ для всіх цілих чисел $n$. Наприклад, $M(4, 2, 5) = 6$.

Також визначте $S(N)$ як суму $M(a, b, c)$ для всіх $0 &lt; a, b, c ≤ N$.

Можна перевірити, що $S(10) = 1\\,972$ і $S(10\\,000) = 2\\,024\\,258\\,331\\,114$.

Нехай $F_k$ буде послідовністю Фібоначчі:

- $F_0 = 0$, $F_1 = 1$ і
- $F_k = F_{k - 1} + F_{k - 2}$ для $k ≥ 2$.

Знайдіть останні 9 цифр $\sum S(F_k)$ for $2 ≤ k ≤ 1\\,234\\,567\\,890\\,123$.

# --hints--

`integerValuedPolynomials()` повинен повернути `356019862`.

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
