---
id: 5a23c84252665b21eecc7eca
title: Числа Капрекара
challengeType: 1
forumTopicId: 302296
dashedName: kaprekar-numbers
---

# --description--

Натуральне число є числом Капрекара, якщо:

<ul>
  <li>Це 1, або</li>
  <li>Десяткове представлення квадрата цього числа можна розділити на дві частини з натуральних чисел, сума яких дорівнюватиме початковому числу. </li>
</ul>

Зверніть увагу, що розділ з нулями не може бути дійсним, оскільки 0 не є натуральним числом.

Приклади чисел Капрекара:

<ul>
  <li><code>2223</code> є числом Капрекара, оскільки <code>2223 * 2223 = 4941729</code>, <code>4941729</code> можна розділити на <code>494</code> та <code>1729</code>, а <code>494 + 1729 = 2223</code></li>
  <li>Множина чисел Капрекара відома як A006886 та починається з <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

Напишіть функцію, яка приймає число $n$, основу $bs$ та повертає true, якщо число є числом Капрекара за наданої основою. В іншому випадку функція повертає false.

# --hints--

`isKaprekar` має бути функцією.

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` має повернути булеве значення.

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)` має повернути `true`.

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` має повернути `true`.

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` має повернути `true`.

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` має повернути `false`.

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` має повернути `false`.

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` має повернути `true`.

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` має повернути `false`.

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
