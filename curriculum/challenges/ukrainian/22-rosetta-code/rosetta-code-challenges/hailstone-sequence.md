---
id: 595608ff8bcd7a50bd490181
title: Сіракузька послідовність
challengeType: 1
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

Сіракузьку послідовність можна утворити з початкового натурального числа `n` за такими правилами:

- Якщо `n` дорівнює `1`, то послідовність закінчується
- Якщо `n` є `парним`, то наступне значення `n = n/2`
- Якщо `n` є `непарним`, то наступне значення `n = (3 * n) + 1`

Гіпотеза Коллатца (недоведена) полягає в тому, що Сіракузька послідовність з будь-яким початковим числом завжди закінчується.

Сіракузька послідовність також відома як числа-градини (оскільки значення зазвичай піддаються декільком зниженням і зростанням, що нагадує рух граду) або послідовність Коллатца.

# --instructions--

1. Створіть процедуру для генерації Сіракузької послідовності з числа
2. Функція має повернути масив з числом меншим за `limit`, яке має найдовшу Сіракузьку послідовність, та довжиною цієї послідовності. (Але не показуйте саму послідовність!)

# --hints--

`hailstoneSequence` має бути функцією.

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` має повернути масив.

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` має повернути `[27, 112]`.

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` має повернути `[35655, 324]`.

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` має повернути `[77031, 351]`.

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
