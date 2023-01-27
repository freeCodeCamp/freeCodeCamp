---
id: 5e6dd15004c88cf00d2a78b3
title: 複数配列に対する同時ループ処理
challengeType: 1
forumTopicId: 385279
dashedName: loop-over-multiple-arrays-simultaneously
---

# --description--

複数の配列にループ処理を行い、 与えられた各要素 $i^{th}$ の連結である$i^{th}$ 要素を持つ新しい配列を作成します。

以下の例では、次の配列の配列が与えられています。

```js
[ ["a", "b", "c"], ["A", "B", "C"], [1, 2, 3] ]
```

出力は次のようになります。

```js
["aA1","bB2","cC3"]
```

# --instructions--

配列の配列をパラメータとして取り、上記の説明を満たす文字列の配列を返す関数を記述してください。

# --hints--

`loopSimult` は関数とします。

```js
assert(typeof loopSimult == 'function');
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` は配列を返す必要があります。

```js
assert(
  Array.isArray(
    loopSimult([
      ['a', 'b', 'c'],
      ['A', 'B', 'C'],
      [1, 2, 3]
    ])
  )
);
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` は `["aA1", "bB2", "cC3"]` を返す必要があります。

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b', 'c'],
    ['A', 'B', 'C'],
    [1, 2, 3]
  ]),
  ['aA1', 'bB2', 'cC3']
);
```

`loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]])` は `["c47", "b57", "cC3"]` を返す必要があります。

```js
assert.deepEqual(
  loopSimult([
    ['c', 'b', 'c'],
    ['4', '5', 'C'],
    [7, 7, 3]
  ]),
  ['c47', 'b57', 'cC3']
);
```

`loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])` は `["aA1", "bB2", "cC3", "dd4"]` を返す必要があります。

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b', 'c', 'd'],
    ['A', 'B', 'C', 'd'],
    [1, 2, 3, 4]
  ]),
  ['aA1', 'bB2', 'cC3', 'dd4']
);
```

`loopSimult([["a", "b"], ["A", "B"], [1, 2]])` は `["aA1", "bB2"]` を返す必要があります。

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b'],
    ['A', 'B'],
    [1, 2]
  ]),
  ['aA1', 'bB2']
);
```

`loopSimult([["b", "c"], ["B", "C"], [2, 3]])` は `["bB2", "cC3"]` を返す必要があります。

```js
assert.deepEqual(
  loopSimult([
    ['b', 'c'],
    ['B', 'C'],
    [2, 3]
  ]),
  ['bB2', 'cC3']
);
```

# --seed--

## --seed-contents--

```js
function loopSimult(A) {

}
```

# --solutions--

```js
function loopSimult(A) {
    var res = [], output;
    for (var i = 0; i < A[0].length; i += 1) {
        output = "";
        for (var j = 0; j < A.length; j++)
            output += A[j][i];
        res.push(output);
    }
    return res;
}
```
