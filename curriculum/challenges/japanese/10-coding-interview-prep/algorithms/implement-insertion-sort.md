---
id: 587d8259367417b2b2512c86
title: 挿入ソートを実装する
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

次のソート方法は挿入ソートです。 この方法は、ソート済みの配列をリストの先頭に作ることで機能します。 まず、1 つ目の要素を使って、ソート済みの配列を作り始めます。 そして次の要素を調べ、それが正しいソート位置に入るまで、ソート済みの配列の中で後ろの要素と交換していきます。 リスト全体を通してそれを繰り返し、末尾に到達するまで新しい要素を後方に置き換え続けます。 このアルゴリズムは、平均ケースおよび最悪ケースで二乗時間計算量になります。

**手順:** 整数の配列を入力として受け取り、それらの整数の配列を最小から最大の順にソートして返す、`insertionSort` 関数を記述してください。

# --hints--

`insertionSort` は関数でなければなりません。

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` はソートされた配列を返す必要があります (最小から最大の順)。

```js
assert(
  isSorted(
    insertionSort([
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

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` は、順序以外は変更されていない配列を返す必要があります。

```js
assert.sameMembers(
  insertionSort([
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

`insertionSort([5, 4, 33, 2, 8])` は `[2, 4, 5, 8, 33]` を返す必要があります。

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` には組み込みの `.sort()` メソッドを使用しないでください。

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
  insertionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function insertionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function insertionSort (array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let current = array[currentIndex];
    let j = currentIndex - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```
