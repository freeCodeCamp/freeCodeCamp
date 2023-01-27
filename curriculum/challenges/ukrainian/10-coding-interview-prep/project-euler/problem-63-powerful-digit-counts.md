---
id: 5900f3ab1000cf542c50febe
title: 'Завдання 63: Степені, що дорівнюють кількості цифр'
challengeType: 1
forumTopicId: 302175
dashedName: problem-63-powerful-digit-counts
---

# --description--

5-значне число 16807 = 7<sup>5</sup> також є п’ятим степенем. Так само 9-значне число 134217728 = 8<sup>9</sup>- є дев'ятим степенем.

Завершіть функцію так, щоб вона повернула кількість цілих натуральних чисел, які мають довжину `n` та `n`-го степеня.

# --hints--

`powerfulDigitCounts(1)` має повернути число.

```js
assert(typeof powerfulDigitCounts(1) === 'number');
```

`powerfulDigitCounts(1)` має повернути `9`.

```js
assert.strictEqual(powerfulDigitCounts(1), 9);
```

`powerfulDigitCounts(2)` має повернути `6`.

```js
assert.strictEqual(powerfulDigitCounts(2), 6);
```

`powerfulDigitCounts(3)` має повернути `5`.

```js
assert.strictEqual(powerfulDigitCounts(3), 5);
```

`powerfulDigitCounts(4)` має повернути `4`.

```js
assert.strictEqual(powerfulDigitCounts(4), 4);
```

`powerfulDigitCounts(5)` має повернути `3`.

```js
assert.strictEqual(powerfulDigitCounts(5), 3);
```

`powerfulDigitCounts(6)` має повернути `3`.

```js
assert.strictEqual(powerfulDigitCounts(6), 3);
```

`powerfulDigitCounts(7)` має повернути `2`.

```js
assert.strictEqual(powerfulDigitCounts(7), 2);
```

`powerfulDigitCounts(8)` має повернути `2`.

```js
assert.strictEqual(powerfulDigitCounts(8), 2);
```

`powerfulDigitCounts(10)` має повернути `2`.

```js
assert.strictEqual(powerfulDigitCounts(10), 2);
```

`powerfulDigitCounts(21)` має повернути `1`.

```js
assert.strictEqual(powerfulDigitCounts(21), 1);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitCounts(n) {

  return true;
}

powerfulDigitCounts(1);
```

# --solutions--

```js
function powerfulDigitCounts(n) {
  function countDigits(num) {
    let counter = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      counter++;
    }
    return counter;
  }

  let numbersCount = 0;

  let curNum = 1;
  while (curNum < 10) {
    let power = n;
    if (power === countDigits(curNum ** power)) {
      numbersCount++;
    }
    curNum++;
  }

  return numbersCount;
}
```
