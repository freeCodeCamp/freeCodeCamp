---
id: 595608ff8bcd7a50bd490181
title: Сіракузька послідовність
challengeType: 1
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

Сіракузьку послідовність чисел можна згенерувати з будь-якого натурального числа `n`:

- Якщо `n` дорівнює `1`, то послідовність закінчується
- Якщо `n` дорівнює `even`, то наступне `n` послідовності `= n/2`
- Якщо `n` дорівнює `odd`, то наступне `n` послідовності `= (3 * n) + 1`

Суть гіпотеза Коллатца (Недоведена): яке б початкове число ми б не взяли, Сіракузька послідовність завжди закінчується.

Сіракузька послідовність, також відома як числа-градини (бо графіки послідовностей схожі на траєкторію руху градин в атмосфері), або як послідовність Коллатца.

# --instructions--

1. Створіть процедуру для генерації Сіруказької послідовності для числа
2. Ваша функція має повертати масив з числом менше `limit`, яке має найдовшу Сіруказьку послідовність і довжину цієї послідовності. (Але не показуйте саму послідовність!)

# --hints--

`hailstoneSequence` має бути функцією.

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` має повертати масив.

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` має повертати `[27, 112]`.

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` має повертати `[35655, 324]`.

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` має повертати `[77031, 351]`.

```js
assert.deepEqual(hailstoneSequence(100000), [77031, 351]);
```

# --seed--

## --seed-contents--

```js
function hailstoneSequence(limit) {
  const res = [];


  return res;
}
```

# --solutions--

```js
function hailstoneSequence (limit) {
  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  let n = 0;
  let max = 0;
  for (let i = limit; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }

  return [n, max];
}
```
