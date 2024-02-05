---
id: 5900f4e61000cf542c50fff9
title: 'Завдання 378: трійки трикутників'
challengeType: 1
forumTopicId: 302040
dashedName: problem-378-triangle-triples
---

# --description--

Нехай $T(n)$ буде $n^{\text{-ним}}$ трикутним числом, за якого $T(n) = \frac{n(n + 1)}{2}$.

Нехай $dT(n)$ буде кількістю дільників $T(n)$. Наприклад, $T(7) = 28$ та $dT(7) = 6$.

Нехай $Tr(n)$ буде кількістю трійок ($i$, $j$, $k$), за яких $1 ≤ i &lt; j &lt; k ≤ n$ та $dT(i) > dT(j) > dT(k)$. $Tr(20) = 14$, $Tr(100) = 5\\,772$ та $Tr(1000) = 11\\,174\\,776$.

Знайдіть $Tr(60\\,000\\,000)$. У відповіді запишіть 18 останніх цифр.

# --hints--

`triangleTriples()` має повернути `147534623725724700`.

```js
assert.strictEqual(triangleTriples(), 147534623725724700);
```

# --seed--

## --seed-contents--

```js
function triangleTriples() {

  return true;
}

triangleTriples();
```

# --solutions--

```js
// solution required
```
