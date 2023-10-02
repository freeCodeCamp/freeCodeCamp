---
id: 587d825a367417b2b2512c89
title: クイックソートを実装する
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

次は、中間ソートアルゴリズムであるクイックソートです。 クイックソートは、配列を効率的にソートするための再帰的な分割統治法です。 この方法では、元の配列でピボット値が選択されます。 次に、配列は、ピボット値よりも小さい値と大きい値の 2 つの部分配列に分割されます。 次に、両方の部分配列でクイックソートアルゴリズムを再帰的に呼び出した結果を組み合わせます。 これは、空の配列または単一要素の配列という初期条件に達するまで続き、私たちはそれを返します。 再帰呼び出しを巻き戻すと、ソートされた配列が返されます。

クイックソートは非常に効率的なソート方法で、平均で *O(nlog(n))* のパフォーマンスを提供します。 また、実装も比較的容易です。 これらの特性を持つため、クイックソートはよく使用される便利なソート方法です。

**手順:** 整数の配列を入力として受け取り、それらの整数の配列を最小から最大の順にソートして返す、`quickSort` 関数を記述してください。 ピボット値の選択は重要ですが、ここでの目的上、どのようなピボットでも構いません。 単純化するために、最初または最後の要素を使用することもできます。

# --hints--

`quickSort` は関数でなければなりません。

```js
assert(typeof quickSort == 'function');
```

`quickSort` はソートされた配列を返す必要があります (最小から最大の順)。

```js
assert(
  isSorted(
    quickSort([
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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` は、順序以外は変更されていない配列を返す必要があります。

```js
assert.sameMembers(
  quickSort([
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

`quickSort` には組み込みの `.sort()` メソッドを使用しないでください。

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
  quickSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function quickSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];

    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }

    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}
```
