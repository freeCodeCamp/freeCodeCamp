---
id: 8d5123c8c441eddfaeb5bdef
title: バブルソートを実装する
challengeType: 1
forumTopicId: 301612
dashedName: implement-bubble-sort
---

# --description--

このチャレンジは、ソートアルゴリズムに関するいくつかのチャレンジの 1 つ目です。 ソートされていない要素の配列が与えられ、ソートされた配列を返す操作を行います。 これを行うための方法をいくつか知り、それらの異なるアプローチの間にどのようなトレードオフがあるかを学びます。 最近のほとんどの言語にはこのような操作を行うソート方法が組み込まれていますが、一般的な基本アプローチをいくつか理解し、それらの実装方法を学ぶことはやはり重要です。

まずはバブルソートです。 バブルソート法は、ソートされていない配列の先頭から始まり、ソートされていない値を末尾に向けて押し出す「バブルアップ」を行います。これを、配列が完全にソートされるまで繰り返します。 具体的には、隣接する要素を比較し、順序が正しくなければそれらを交換します。 配列がソートされて交換が発生しなくなるまで、この操作が配列内をループし続けます。

この方法では配列全体にわたり操作が何度も繰り返されることになり、平均ケースおよび最悪ケースで二乗時間計算量になります。 単純ですが、ほとんどの状況では一般に実用的ではありません。

**手順:** 整数の配列を入力として受け取り、それらの整数の配列を最小から最大の順にソートして返す、`bubbleSort` 関数を記述してください。

# --hints--

`bubbleSort` は関数でなければなりません。

```js
assert(typeof bubbleSort == 'function');
```

`bubbleSort` はソートされた配列を返す必要があります (最小から最大の順)。

```js
assert(
  isSorted(
    bubbleSort([
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92
    ])
  )
);
```

`bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` は、順序以外は変更されていない配列を返す必要があります。

```js
assert.sameMembers(
  bubbleSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`bubbleSort` には組み込みの `.sort()` メソッドを使用しないでください。

```js
assert(isBuiltInSortUsed());
```

# --seed--

## --after-user-code--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}

function isBuiltInSortUsed(){
  let sortUsed = false;
  Array.prototype.sort = () => sortUsed = true;
  bubbleSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function bubbleSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j-1];
        array[j-1] =  array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}
```
