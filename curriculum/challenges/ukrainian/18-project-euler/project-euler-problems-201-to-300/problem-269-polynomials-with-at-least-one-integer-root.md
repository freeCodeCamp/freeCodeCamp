---
id: 5900f4791000cf542c50ff8c
title: 'Завдання 269: многочлени з щонайменше одним цілим коренем'
challengeType: 1
forumTopicId: 301918
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

Корінь або нуль многочлена $P(x)$ є розв’язком рівняння $P(x) = 0$.

Визначимо $P_n$ як многочлен, коефіцієнтами якого є цифри числа $n$.

Наприклад, $P_{5703}(x) = 5x^3 + 7x^2 + 3$.

Ми можемо побачити, що:

- $P_n(0)$ є останньою цифрою $n$,
- $P_n(1)$ є сумою цифр $n$,
- $Pn(10)$ є $n$.

Визначимо $Z(k)$ як кількість натуральних чисел $n$, менших за $k$, за яких многочлен $P_n$ має принаймні один цілий корінь.

Можна довести, що $Z(100\\,000)$ дорівнює 14696.

Чому дорівнює $Z({10}^{16})$?

# --hints--

`polynomialsWithOneIntegerRoot()` має повернути `1311109198529286`.

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
