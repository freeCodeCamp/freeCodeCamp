---
id: 5a23c84252665b21eecc8001
title: 'Алгоритми сортування: сортування бісером'
challengeType: 1
forumTopicId: 302310
dashedName: sorting-algorithmsbead-sort
---

# --description--

*Сортування бісером* розпочинається зі створення матриці нулів, довжина якої дорівнює значенню найбільшого елемента у вхідному масиві. Матриця змінюється шляхом додавання одиниці до всіх елементів між нульовим індексом та індексом, вказаним поточним елементом. Цей процес повторюється, поки матриця не буде заповненою.

Якщо ітерувати по матриці, додати кількість елементів, більших за нуль, а потім зменшити значення кожного елемента на один, то ми отримаємо відсортований масив.

**Примітка:** кожен елемент у вхідному масиві є унікальним.

Відсортуйте масив натуральних чисел за допомогою алгоритму сортування бісером.

# --hints--

`beadSort` має бути функцією.

```js
assert(typeof beadSort == 'function');
```

`beadSort([25, 32, 12, 7, 20])` має повернути масив.

```js
assert(Array.isArray(beadSort([25, 32, 12, 7, 20])));
```

`beadSort([25, 32, 12, 7, 20])` має повернути `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(beadSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`beadSort([38, 45, 35, 8, 13])` має повернути `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(beadSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`beadSort([43, 36, 20, 34, 24])` має повернути `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(beadSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`beadSort([12, 33, 26, 18, 1, 16, 38])` має повернути `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(beadSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`beadSort([3, 39, 48, 16, 1, 4, 29])` має повернути `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(beadSort([3, 39, 48, 16, 1, 4, 29]), [
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
function beadSort(arr) {

}
```

# --solutions--

```js
function beadSort(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  const grid = new Array(arr.length);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(max);
  }
  const levelcount = new Array(max);
  levelcount.fill(0);
  for (let i = 0; i < max; i++) {
    levelcount[i] = 0;
    for (let j = 0; j < arr.length; j++) grid[j][i] = '_';
  }
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let j = 0; num > 0; j++) {
      grid[levelcount[j]++][j] = '*';
      num--;
    }
  }
  const sorted = new Array(arr.length);
  sorted.fill(0);
  for (let i = 0; i < arr.length; i++) {
    let putt = 0;
    for (
      let j = 0;
      j < max &&
      (function(c) {
        return c.charCodeAt == null ? c : c.charCodeAt(0);
      })(grid[arr.length - 1 - i][j]) == '*'.charCodeAt(0);
      j++
    )
      putt++;
    sorted[i] = putt;
  }
  return sorted;
}
```
