---
id: 595668ca4cfe1af2fb9818d4
title: Число Харшад або Нівена
challengeType: 1
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

Числа харшад або число Нівена — це додатні цілі числа ≥ 1, що діляться на суму своїх цифр-складників.

Наприклад, `42` — це число Харшад, оскільки `42` ділиться на `(4 + 2)` без залишку.

Припустимо, що серія визначається як числа в порядку збільшення.

# --instructions--

Реалізація функції полягає в створенні послідовних членів порядку Харшаду.

Використовуйте його, щоб повернути масив з десятьма членами послідовності, починаючи з числа першого Харшада, більше ніж `n`.

# --hints--

`isHarshadOrNiven` має бути функцією.

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` має повернути `[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]`

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` має повернути `[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]`

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` має повернути `[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]`

```js
assert.deepEqual(isHarshadOrNiven(1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
```

# --seed--

## --seed-contents--

```js
function isHarshadOrNiven(n) {
  const res = [];

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven(n) {
  function isHarshad(num) {
    let s = 0;
    const nStr = num.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  const res = [];
  let count = 0;

  while (count < 10) {
    n++;
    if (isHarshad(n)) {
      count++;
      res.push(n);
    }
  }

  return res;
}
```
