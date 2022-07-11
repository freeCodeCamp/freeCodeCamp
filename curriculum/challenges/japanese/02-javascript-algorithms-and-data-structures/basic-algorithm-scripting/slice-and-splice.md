---
id: 579e2a2c335b9d72dd32e05c
title: Slice と Splice
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

2 つの配列とインデックスが与えられています。

最初の配列の各要素を 2 番目の配列に順番にコピーしてください。

2 番目の配列のインデックス `n` から要素の挿入を始めてください。

結果の配列を返してください。 入力された配列は、関数の実行後も元のままにしておく必要があります。

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` は `[4, 1, 2, 3, 5]` を返す必要があります。

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` は `["a", 1, 2, "b"]` を返す必要があります。

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` は `["head", "shoulders", "claw", "tentacle", "knees", "toes"]` を返す必要があります。

```js
assert.deepEqual(
  frankenSplice(
    ['claw', 'tentacle'],
    ['head', 'shoulders', 'knees', 'toes'],
    2
  ),
  ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']
);
```

最初の配列のすべての要素を、元の順序で 2 番目の配列に追加する必要があります。 `frankenSplice([1, 2, 3, 4], [], 0)` は `[1, 2, 3, 4]` を返す必要があります。

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

最初の配列は、関数の実行後も元のままにしておく必要があります。

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

2 番目の配列は、関数の実行後も元のままにしておく必要があります。

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr2, ['a', 'b']);
```

# --seed--

## --after-user-code--

```js
let testArr1 = [1, 2];
let testArr2 = ["a", "b"];
```

## --seed-contents--

```js
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

# --solutions--

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);
```
