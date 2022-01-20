---
id: 5a23c84252665b21eecc8004
title: ソートアルゴリズム / カクテルシェーカーソート
challengeType: 5
forumTopicId: 302312
dashedName: sorting-algorithmscocktail-sort
---

# --description--

カクテルシェーカーソートは、[バブルソート](https://rosettacode.org/wiki/Bubble Sort)の改良版です。 改善点は基本的に、配列の値を双方向に「バブル」する点です。それぞれの反復でカクテルシェーカーソートは、前後に 1 回ずつバブルソートするからです。 アルゴリズムの擬似コード ( [wikipedia](https://en.wikipedia.org/wiki/Cocktail sort) より):

<pre><b>function</b> <i>cocktailSort</i>( A : list of sortable items )
  <b>do</b>
    swapped := false
    <b>for each</b> i <b>in</b> 0 <b>to</b> length( A ) - 2 <b>do</b>
      <b>if</b> A[ i ] > A[ i+1 ] <b>then</b> <i>// test whether the two</i>
                                <i>// elements are in the wrong</i>
                                <i>// order</i>
        swap( A[ i ], A[ i+1 ] ) <i>// let the two elements</i>
                                 <i>// change places</i>
        swapped := true;
    <b>if</b> swapped = false <b>then</b>
      <i>// we can exit the outer loop here if no swaps occurred.</i>
      <b>break do-while loop</b>;
    swapped := false
    <b>for each</b> i <b>in</b> length( A ) - 2 <b>down to</b> 0 <b>do</b>
      <b>if</b> A[ i ] > A[ i+1 ] <b>then</b>
        swap( A[ i ], A[ i+1 ] )
        swapped := true;
  <b>while</b> swapped; <i>// if no elements have been swapped,</i>
                <i>// then the list is sorted</i>
</pre>

# --instructions--

カクテルシェーカーソートを使って、与えられた配列をソートする関数を記述してください。

# --hints--

`cocktailSort` は関数とします。

```js
assert(typeof cocktailSort == 'function');
```

`cocktailSort([25, 32, 12, 7, 20])` は配列を返す必要があります。

```js
assert(Array.isArray(cocktailSort([25, 32, 12, 7, 20])));
```

`cocktailSort([25, 32, 12, 7, 20])` は `[7, 12, 20, 25, 32]` を返す必要があります。

```js
assert.deepEqual(cocktailSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`cocktailSort([38, 45, 35, 8, 13])` は `[8, 13, 35, 38, 45]` を返す必要があります。

```js
assert.deepEqual(cocktailSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`cocktailSort([43, 36, 20, 34, 24])` は `[20, 24, 34, 36, 43]` を返す必要があります。

```js
assert.deepEqual(cocktailSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`cocktailSort([12, 33, 26, 18, 1, 16, 38])` は `[1, 12, 16, 18, 26, 33, 38]` を返す必要があります。

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

`cocktailSort([3, 39, 48, 16, 1, 4, 29])` は `[1, 3, 4, 16, 29, 39, 48]` を返す必要があります。

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
