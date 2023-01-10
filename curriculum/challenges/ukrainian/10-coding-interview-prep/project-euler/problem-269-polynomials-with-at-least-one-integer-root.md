---
id: 5900f4791000cf542c50ff8c
title: 'Приклад 269: Многочлени з щонайменше одним цілим коренем'
challengeType: 1
forumTopicId: 301918
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

Корінь або нуль полінома $P(x)$ є розв’язком рівняння $P(x) = 0$.

Визначте $P_n$ як многочлен, коефіцієнти якого цифри $n$.

Наприклад, $P_{5703}(x) = 5x^3 + 7x^2 + 3$.

Ми можемо побачити що:

- $P_n(0)$ є останньою цифрою $n$,
- $P_n(1)$ — це сума цифр $n$,
- $Pn(10)$ — це $n$.

Визначте $Z(k)$ як кількість цілих натуральних чисел, $n$, що не перевищує $k$, для яких поліном $P_n$ має принаймні один цілий корінь.

Можна перевірити, що $Z(100\\,000)$ становить 14696.

Чому дорівнює $Z({10}^{16})$?

# --hints--

`polynomialsWithOneIntegerRoot()` повинен повернути `1311109198529286`.

```js
assert.strictEqual(polynomialsWithOneIntegerRoot(), 1311109198529286);
```

# --seed--

## --seed-contents--

```js
function polynomialsWithOneIntegerRoot() {

  return true;
}

polynomialsWithOneIntegerRoot();
```

# --solutions--

```js
// solution required
```
