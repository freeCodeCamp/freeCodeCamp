---
id: 587d8259367417b2b2512c85
title: 選択ソートを実装する
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

ここでは選択ソートを実装します。 選択ソートは、まずリスト内の最小値を選択し、それをリスト内の最初の値と交換します。 次に、2 番目の位置から始め、残りのリスト内の最小値を選択し、2 番目の要素と交換します。 リストの最後に到達するまで、リスト全体で要素の入れ替えを繰り返します。 これで、リストがソートされます。 選択ソートは、どのケースでも二乗時間計算量です。

**手順**: 整数の配列を入力として受け取り、それらの整数の配列を最小から最大の順にソートして返す、`selectionSort` 関数を記述してください。

# --hints--

`selectionSort` は関数でなければなりません。

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` はソートされた配列を返す必要があります (最小から最大の順)。

```js
assert(
  isSorted(
    selectionSort([
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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` は、順序以外は変更されていない配列を返す必要があります。

```js
assert.sameMembers(
  selectionSort([
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

`selectionSort` には組み込みの `.sort()` メソッドを使用しないでください。

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
  selectionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function selectionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let value = array[minimumIndex];
    array[minimumIndex] = array[i];
    array[i] = value;
  }
    return array;
}
```
