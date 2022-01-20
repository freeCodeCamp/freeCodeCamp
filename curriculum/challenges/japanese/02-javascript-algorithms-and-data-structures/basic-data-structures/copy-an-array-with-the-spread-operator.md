---
id: 587d7b7b367417b2b2512b13
title: スプレッド演算子による配列のコピー
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

`slice()` を使用すると、コピーする配列の要素を選択できますが、他にもいくつかの便利な機能があり、ES6の新しい<dfn>スプレッド演算子</dfn>を使用すれば、簡単で非常に読みやすい構文で、配列の*すべての*要素を順番通りにコピーすることができます。 スプレッドの構文は「`...`」のように単純なものです。

実際には、スプレッド演算子を使用して、以下のように配列をコピーすることができます。

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` は `[true, true, undefined, false, null]` になります。 `thisArray` は変更されず、`thatArray` には `thisArray` と同じ要素が含まれます。

# --instructions--

関数 `copyMachine` を定義しました。この関数は引数として `arr` (配列) と `num` (数値) を受け取ります。 この関数では、`arr` の `num` 個のコピーで構成される新しい配列を返す必要があります。 必要なものはほぼ揃っていますが、まだうまく機能しません。 スプレッド構文を使用して、正しく機能するように関数を変更してください (ヒント: すでに説明した別のメソッドがここで役に立つかもしれません)。

# --hints--

`copyMachine([true, false, true], 2)` は `[[true, false, true], [true, false, true]]` を返す必要があります。

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` は `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]` を返す必要があります。

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` は `[[true, true, null]]` を返す必要があります。

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` は `[["it works"], ["it works"], ["it works"]]` を返す必要があります。

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

`copyMachine` 関数では、配列 `arr` を付けた `spread operator` を使用する必要があります。

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```
