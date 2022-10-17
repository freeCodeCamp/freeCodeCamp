---
id: 594810f028c0303b75339acd
title: 'Класифікації надлишкових, недостатніх та досконалих чисел'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

Ці три класифікації додатних цілих чисел визначені на основі їхніх власних дільників.

Нехай $P(n)$ буде сумою дільників `n`, де всі власні дільники являються додатними цілими числами `n`, на відміну від `n`.

Якщо `P(n) < n`, то `n` являється `deficient`

Якщо `P(n) === n`, тоді `n` являється `perfect`

Якщо `P(n) > n`, тоді `n` являється `abundant`

**Приклад**: `6` має власний дільник `1`, `2` та `3`. `1 + 2 + 3 = 6`, тому `6` являється досконалим числом.

# --instructions--

Реалізуйте функцію, яка вираховує скільки цілих чисел від `1` до `num` (включно) є в кожному з трьох класів. Виведіть результат як масив у наступному форматі `[deficient, perfect, abundant]`.

# --hints--

`getDPA` має бути функцією.

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` має повернути масив.

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` повернений масив має мати довжину `3`.

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` має повернути `[3758, 3, 1239]`.

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` має повернути `[7508, 4, 2488]`.

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` має повернути `[15043, 4, 4953]`.

```js
assert.deepEqual(getDPA(20000), [15043, 4, 4953]);
```

# --seed--

## --seed-contents--

```js
function getDPA(num) {

}
```

# --solutions--

```js
function getDPA(num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}
```
