---
id: 5900f41c1000cf542c50ff2e
title: >-
  Завдання 175: дроби, які включають різні способи запису числа у вигляді суми степенів двійки
challengeType: 1
forumTopicId: 301810
dashedName: >-
  problem-175-fractions-involving-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Нехай $f(0) = 1$ та $f(n)$ позначають кількість можливих записів $n$ у вигляді суми степенів двійки, де кожен степінь зустрічається не більше двох разів.

Наприклад, $f(10) = 5$, оскільки для запису 10 існує п’ять різних способів:

$$10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1$$

Можна довести, що для кожного дробу $\frac{p}{q}\\; (p>0, q>0)$ існує принаймні одне ціле число $n$, за якого $\frac{f(n)}{f(n - 1)} = \frac{p}{q}$.

Наприклад, найменшим $n$, за якого $\frac{f(n)}{f(n - 1)} = \frac{13}{17}$, є 241. Бінарним розкладанням числа 241 є 11110001.

Читаючи це бінарне число від старшого біта до молодшого, ми зустрінемо 4 одиниці, 3 нулі та 1 одиницю. Назвемо рядок 4,3,1 скороченим бінарним розкладанням числа 241.

Знайдіть скорочене бінарне розкладання найменшого $n$, за якого

$$\frac{f(n)}{f(n - 1)} = \frac{123456789}{987654321}$$

Надайте відповідь у вигляді рядка з цілих чисел, розділеними комами, без пробілів.

# --hints--

`shortenedBinaryExpansionOfNumber()` має повернути рядок.

```js
assert(typeof shortenedBinaryExpansionOfNumber() === 'string');
```

`shortenedBinaryExpansionOfNumber()` має повернути рядок `1,13717420,8`.

```js
assert.strictEqual(shortenedBinaryExpansionOfNumber(), '1,13717420,8');
```

# --seed--

## --seed-contents--

```js
function shortenedBinaryExpansionOfNumber() {

  return true;
}

shortenedBinaryExpansionOfNumber();
```

# --solutions--

```js
// solution required
```
