---
id: a5229172f011153519423690
title: Сума всіх непарних чисел Фібоначчі
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

Маючи додатнє ціле число `num`, поверніть суму всіх непарних чисел Фібоначчі, які менші чи дорівнюють `num`.

Першими двома числами в послідовності Фібоначчі є 0 та 1. Кожне додаткове число у послідовності є сумою двох попередніх чисел. Першими сімома числами в послідовності Фібоначчі є 1, 1, 2, 3, 5 і 8.

Наприклад, `sumFibs(10)` має повертати `10`, оскільки всі непарні числа Фібоначчі, які менші або дорівнюють `10` – це 1, 1, 3 і 5.

# --hints--

`sumFibs(1)` має повертати число.

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` має повертати 1785.

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` має повертати 4613732.

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` має повертати 5.

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` має повертати 60696.

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` має повертати 135721.

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
