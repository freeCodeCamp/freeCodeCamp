---
id: 587d825c367417b2b2512c8f
title: マージソートを実装する
challengeType: 1
forumTopicId: 301614
dashedName: implement-merge-sort
---

# --description--

もう一つの一般的な中間ソートアルゴリズムはマージソートです。 クイックソートと同様に、マージソートは再帰的な分割統治法を使用して配列をソートします。 この方法は、最初からそれぞれがソートされている 2 つの配列をソートするのは比較的簡単であるという事実を利用しています。 しかし、まずは入力として配列を 1 つだけ使いましょう。さて、そこから 2 つのソート済み配列をどのように取得するのでしょうか？ 要素を 1 つのみ持つ配列という初期条件に到達するまで、元の入力を再帰的に 2 分割すれば良いのです。 単一要素の配列は当然ソート済みなので、次に合体を始めることができます。 この合体により、元の配列を分割する再帰呼び出しが巻き戻され、最後にはすべての要素を持つ最終的なソート済み配列が生成されます。 マージソートの手順は次のとおりです。

**1)** 要素を 1 つのみ持つ部分配列が生成されるまで、入力配列を再帰的に 2 分割します。

**2)** ソート済みの各部分配列をマージして最終的なソート済み配列を生成します。

マージソートは効率的なソート方法で、時間計算量は *O(nlog(n))* です。 このアルゴリズムはパフォーマンスが高く実装が比較的容易であるため、広く使用されます。

余談ですが、これはここで取り扱う最後のソートアルゴリズムです。 ただしツリーデータ構造のセクションの後半で、ヒープソートについて説明します。これも効率的なソート方法であり、その実装には二分ヒープが必要です。

**手順:** 整数の配列を入力として受け取り、それらの整数の配列を最小から最大の順にソートして返す、`mergeSort` 関数を記述してください。 これを実装する良い方法は、1 つの関数、例えば `merge` (ソートされた 2 つの配列をマージする関数) と、別の 1 つの関数、例えば `mergeSort` (merge 関数の入力となる単一要素配列を生成するために再帰的操作を行う関数) を書くことです。 頑張ってください！

# --hints--

`mergeSort` は関数でなければなりません。

```js
assert(typeof mergeSort == 'function');
```

`mergeSort` はソートされた配列を返す必要があります (最小から最大の順)。

```js
assert(
  isSorted(
    mergeSort([
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

`mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` は、順序以外は変更されていない配列を返す必要があります。

```js
assert.sameMembers(
  mergeSort([
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

`mergeSort` には組み込みの `.sort()` メソッドを使用しないでください。

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
  mergeSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function mergeSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }

  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }

    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
```
