---
id: 5a23c84252665b21eecc8013
title: 'Алгоритми сортування: ниткоподібне сортування'
challengeType: 1
forumTopicId: 302319
dashedName: sorting-algorithmsstrand-sort
---

# --description--

**Ниткоподібне сортування** утворює відсортовані підмножини, які об’єднуються в кінцевий результат.

Розглянемо `unsortedArray = [3, 1, 4, 2]`. Візьміть перший елемент `3` та скопіюйте його в окремий масив. Знайдіть будь-який більший елемент після цього елемента. Коли знайдете більший елемент, в цьому випадку `4`, скопіюйте його в окремий масив `[3, 4]` та порівняйте наступні елементи з новим значенням `4`.

Як тільки досягнете кінця масиву, видаліть елементи, які ви копіювали (`[3, 4]`) та розпочніть знову з першого елемента, який залишився в `unsortedArray`, в цьому випадку `1`.

У результаті ви отримаєте два відсортовані масиви: `[3, 4]` та `[1, 2]`. Об’єднайте ці два масиви, щоб утворити `strandSortedArray`.

```js
const unsortedArray = [3, 1, 4, 2];
const strandsortedArray = [1, 2, 3, 4];
```

Напишіть функцію, щоб відсортувати масив за допомогою **ниткоподібного сортування**. Функція має повернути відсортований масив.


# --hints--

`strandSort` має бути функцією.

```js
assert(typeof strandSort == 'function');
```

`strandSort([25, 32, 12, 7, 20])` має повернути масив.

```js
assert(Array.isArray(strandSort([25, 32, 12, 7, 20])));
```

`strandSort([25, 32, 12, 7, 20])` має повернути `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(strandSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`strandSort([38, 45, 35, 8, 13])` має повернути `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(strandSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`strandSort([43, 36, 20, 34, 24])` має повернути `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(strandSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`strandSort([12, 33, 26, 18, 1, 16, 38])` має повернути `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(strandSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`strandSort([3, 39, 48, 16, 1, 4, 29])` має повернути `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(strandSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function strandSort(list) {

}
```

# --solutions--

```js
function strandSort(list) {
  function merge(left, right) {
    var result = [];
    while (left.length != 0 && right.length != 0) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    result.push.apply(result, left);
    result.push.apply(result, right);
    return result;
  }

  if (list.length <= 1) return list;
  var result = [];
  while (list.length > 0) {
    var sorted = [];
    sorted.push(list.shift());
    var len = list.length;
    for (var i = 1; i < len; i++) {
      var elem = list[i];
      if (sorted[i - 1] <= elem) {
        sorted.push(elem);
        sorted.splice(i, 1);
      }
    }

    result = merge(result, sorted);
  }
  return result;
}
```
