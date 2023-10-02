---
id: 5900f4e61000cf542c50fff9
title: 'Задача 378: Трійки трикутників'
challengeType: 1
forumTopicId: 302040
dashedName: problem-378-triangle-triples
---

# --description--

Нехай $T(n)$ буде $n^{\text{th}}$ номером трикутника, отже $T(n) = \frac{n(n + 1)}{2}$.

Нехай $dT(n)$ буде кількістю дільників $T(n)$. До прикладу: $T(7) = 28$ і $dT(7) = 6$.

Нехай $Tr(n)$ буде номером трикутників ($i$, $j$, $k$) таких як $1 ≤ i &lt; j &lt; k ≤ n$ і $dT(i) > dT(j) > dT(k)$. $Tr(20) = 14$, $Tr(100) = 5\\,772$ і $Tr(1000) = 11\\,174\\,776$.

Знайдіть $Tr(60\\,000\\,000)$. Впишіть останні 18 цифр вашої відповіді.

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
