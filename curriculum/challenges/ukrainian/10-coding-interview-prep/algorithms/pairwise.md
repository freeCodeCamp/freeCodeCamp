---
id: a3f503de51cfab748ff001aa
title: Парність
challengeType: 1
forumTopicId: 301617
dashedName: pairwise
---

# --description--

Знайдіть пари елементів у масиві `arr`, сума яких дорівнює другому аргументу `arg` та поверніть суму їхніх індексів.

Ви можете використовувати декілька пар, які мають однакові числові елементи, але різні індекси. У кожній парі варто використовувати найменші доступні індекси. Після того, як елемент було використано, його більше не можна використовувати для пари з іншим елементом. Наприклад, `pairwise([1, 1, 2], 3)` створює пару `[2, 1]`, де 1 має індекс 0, а не 1, оскільки 0+2 &lt; 1+2.

Наприклад, `pairwise([7, 9, 11, 13, 15], 20)` повертає `6`. Парами з сумою 20 будуть `[7, 13]` та `[9, 11]`. Тепер ми можемо записати масив з їхніми індексами і значеннями.

<div style='margin-left: 2em;'>

| Індекс | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| Значення | 7 | 9 | 11 | 13 | 15 |

</div>

Нижче ми візьмемо відповідні індекси і додамо їх.

<div style='margin-left: 2em;'>

7 + 13 = 20 → Індекси 0 + 3 = 3  
9 + 11 = 20 → індекси 1 + 2 = 3  
3 + 3 = 6 → Повернути `6`

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` має повернути 11.

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` має повернути 1.

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` має повернути 1.

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` має повернути 10.

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` має повернути 0.

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --seed--

## --seed-contents--

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

# --solutions--

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
