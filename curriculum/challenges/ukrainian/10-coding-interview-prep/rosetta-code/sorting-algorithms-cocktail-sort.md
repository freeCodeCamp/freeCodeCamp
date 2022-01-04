---
id: 5a23c84252665b21eecc8004
title: Алгоритми сортування/Шейкерне сортування
challengeType: 5
forumTopicId: 302312
dashedName: sorting-algorithmscocktail-sort
---

# --description--

Шейкерне сортування – це удосконалене [сортування бульбашкою](https://rosettacode.org/wiki/Bubble Sort). Покращення в основному полягає в тому, що значення "струменять" в обох напрямках через масив, тому що на кожній ітерації шейкер упорядковує бульбашки один раз вперед і один раз назад. Псевдокод для алгоритму (взято з [Вікіпедії](https://en.wikipedia.org/wiki/Cocktail sort)):

<pre><b>function</b> <i>cocktailSort</i>( A : list of sortable items )
  <b>do</b>
    swapped := false
    <b>for each</b> i <b>in</b> 0 <b>to</b> length( A ) - 2 <b>do</b>
      <b>if</b> A[ i ] > A[ i+1 ] <b>then</b> <i>// перевірте, чи два елементи</i>
                                <i>// знаходяться в неправильному</i>
                                <i>// порядку</i>
        swap( A[ i ], A[ i+1 ] ) <i>// поміняйте два елементи</i>
                                 <i>// місцями</i>
        swapped := true;
    <b>if</b> swapped = false <b>then</b>
      <i>// можна вийти із зовнішнього циклу тут, якщо жодних замін не відбулося.</i>
      <b>break do-while loop</b>;
    swapped := false
    <b>for each</b> i <b>in</b> length( A ) - 2 <b>down to</b> 0 <b>do</b>
      <b>if</b> A[ i ] > A[ i+1 ] <b>then</b>
        swap( A[ i ], A[ i+1 ] )
        swapped := true;
  <b>while</b> swapped; <i>// якщо жодні елементи не помінялися місцями,</i>
                <i>// сортування виконано</i>
</pre>

# --instructions--

Напишіть функцію, яка упорядкує даний масив, використовуючи шейкерне сортування.

# --hints--

`cocktailSort` має бути функцією.

```js
assert(typeof cocktailSort == 'function');
```

`cocktailSort([25, 32, 12, 7, 20])` має повернути масив.

```js
assert(Array.isArray(cocktailSort([25, 32, 12, 7, 20])));
```

`cocktailSort([25, 32, 12, 7, 20])` має повернути `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(cocktailSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`cocktailSort([38, 45, 35, 8, 13])` має повернути `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(cocktailSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`cocktailSort([43, 36, 20, 34, 24])` має повернути `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(cocktailSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`cocktailSort([12, 33, 26, 18, 1, 16, 38])` має повернути `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(cocktailSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`cocktailSort([3, 39, 48, 16, 1, 4, 29])` має повернути `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(cocktailSort([3, 39, 48, 16, 1, 4, 29]), [
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
function cocktailSort(arr) {

}
```

# --solutions--

```js
function cocktailSort(arr) {
  let isSorted = true;
  while (isSorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;

    isSorted = false;

    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSorted = true;
      }
    }
  }

  return arr;
}
```
