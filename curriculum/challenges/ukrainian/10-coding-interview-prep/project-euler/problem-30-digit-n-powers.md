---
id: 5900f38a1000cf542c50fe9d
title: 'Завдання 30: степені цифри n'
challengeType: 1
forumTopicId: 301953
dashedName: problem-30-digit-n-powers
---

# --description--

На диво, існує лише три числа, що можуть бути представлені як сума четвертих степенів їхніх цифр:

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

Так як 1 = 1<sup>4</sup> не є сумою, число не зараховується.

Сума цих чисел дорівнює 1634 + 8208 + 9474 = 19316.

Знайдіть суму всіх чисел, що може бути представлена як сума `n` степенів їхніх цифр.

# --hints--

`digitnPowers(2)` має повернути число.

```js
assert(typeof digitnPowers(2) === 'number');
```

`digitnPowers(2)` має повернути число 0.

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)` має повернути число 1301.

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)` має повернути число 19316.

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)` має повернути число 443839.

```js
assert(digitnPowers(5) == 443839);
```

# --seed--

## --seed-contents--

```js
function digitnPowers(n) {

  return n;
}

digitnPowers(5);
```

# --solutions--

```js
// solution required
```
