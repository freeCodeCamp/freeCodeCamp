---
id: 587d7b7b367417b2b2512b15
title: For ループによる配列の全アイテムの繰り返し処理
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

配列処理では、必要な 1 つ以上の要素を検索したい場合や、特定の基準を満たすデータアイテムに基づいて配列を操作したい場合に、各アイテムを繰り返し処理できるととても便利です。 JavaScript には配列の繰り返し処理を行える組み込みメソッドがいくつかありますが (`every()`、`forEach()`、`map()` など)、繰り返しの方法や得られる結果はそれぞれわずかに異なります。しかし、最も柔軟性があり、最大限の制御ができるのは、単純な `for` ループです。

以下の例について考えてみましょう。

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

この関数は、`for` ループを使用して繰り返し処理で配列の各要素にアクセスし、作成済みの単純なテストを実行します。 この例は、`10` より大きいデータアイテムをプログラムで簡単に判断し、そのアイテムを含む新しい配列 `[12, 14, 80]` を返します。

# --instructions--

関数 `filteredArray` を定義しました。この関数は引数として、ネストされた配列 `arr` と `elem` を受け取り、新しい配列を返します。 `elem` は、`arr` 内でネストされた 1 つ以上の配列の要素を表しますが、その要素が存在する場合もあれば存在しない場合もあります。 この関数を変更し、`for` ループを使用して、`arr` 内のネストされた配列のうち `elem` が含まれているものをすべて削除し、渡された配列を絞り込んだ結果を返すようにしてください。

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` は `[[10, 8, 3], [14, 6, 23]]` を返す必要があります。

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` は `[["flutes", 4]]` を返す必要があります。

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` は `[["amy", "beth", "sam"]]` を返す必要があります。

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` は `[]` を返す必要があります。

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

`filteredArray` 関数では `for` ループを使用する必要があります。

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
