---
id: 5a23c84252665b21eecc7eca
title: Числа Капрекара
challengeType: 1
forumTopicId: 302296
dashedName: kaprekar-numbers
---

# --description--

A positive integer is a Kaprekar number if:

<ul>
  <li>Це 1, або</li>
  <li>Квадрат числа у десятковій системі числення можна розбити на дві частини, сума яких дає початкове число. </li>
</ul>

Зауважте, що розділ у результаті якого вийдуть лише нулі, є недопустимим, оскільки 0 не вважається додатним числом.

Приклади чисел Капрекара:

<ul>
  <li><code>2223</code> це число Капрекар, оскільки <code>2223 * 2223 = 4941729</code> <code>4941729</code> може бути розділено на <code>494</code> та <code>1729</code>, та <code>494 + 1729 = 2223</code></li>
  <li>The series of Kaprekar numbers is known as A006886, and begins as <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

Напишіть функцію, яка приймає число $n$, основа $bs$, і повертає true, якщо число - це число Капрекара для цієї основи. В іншому випадку видається результат false.

# --hints--

`isKaprekar` має бути функцією.

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` повинен стати логічним значенням.

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)`повинен повертати `true`.

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` повинен повертати `true`.

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` повинен повертати `true`.

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` повинен повертати `false`.

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` повинен повертати `false`.

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` повинен повертати `true`.

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` повинен повертати `false`.

```js
assert.equal(isKaprekar(999, 17), false);
```

# --seed--

## --seed-contents--

```js
function isKaprekar(n, bs) {

}
```

# --solutions--

```js
function isKaprekar(n, bs) {
  if (n < 1) return false;
  if (n == 1) return true;
  for (var a = n * n, b = 0, s = 1; a; s *= bs) {
    b += (a % bs) * s;
    a = Math.floor(a / bs);
    if (b && a + b == n) return true;
  }
  return false;
}
```
