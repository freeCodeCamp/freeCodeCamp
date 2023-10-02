---
id: a3f503de51cfab748ff001aa
title: ペアワイズ
challengeType: 1
forumTopicId: 301617
dashedName: pairwise
---

# --description--

配列 `arr` について、和が 2 つ目の引数 `arg` に等しくなる要素ペアを見つけ、それらのインデックスの和を返します。

数値要素は同じだがインデックスが異なる、複数のペアを使用できます。 各ペアは、利用可能な最低のインデックスを使用する必要があります。 一度要素を使用すると、それを他の要素とペアリングすることはできません。 例えば、`pairwise([1, 1, 2], 3)`は、インデックス 1 にある 1 ではなく、インデックス 0 にある 1 を使って、ペア `[2, 1]` を作成します。なぜなら、0+2 &lt; 1+2 だからです。

例えば、`pairwise([7, 9, 11, 13, 15], 20)` は `6` を返します。 和が 20 であるペアは `[7, 13]` と `[9, 11]` です。 次に、それらのインデックスと値を使って配列を書き出すことができます。

<div style='margin-left: 2em;'>

| インデックス | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| 値 | 7 | 9 | 11 | 13 | 15 |

</div>

以下では、対応するインデックスを取り、追加します。

<div style='margin-left: 2em;'>

7 + 13 = 20 → インデックス 0 + 3 = 3  
9 + 11 = 20 → インデックス 1 + 2 = 3  
3 + 3 = 6 → `6` を返す

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` は 11 を返す必要があります。

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` は 1 を返す必要があります。

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` は 1 を返す必要があります。

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` は 10 を返す必要があります。

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` は 0 を返す必要があります。

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --seed--

## --seed-contents--

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

# --solutions--

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
