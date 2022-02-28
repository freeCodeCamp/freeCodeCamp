---
id: 5a23c84252665b21eecc8001
title: ソートアルゴリズム / ビーズソート
challengeType: 5
forumTopicId: 302310
dashedName: sorting-algorithmsbead-sort
---

# --description--

[ビーズソートアルゴリズム](https://en.wikipedia.org/wiki/Bead_sort) を使用して正の整数の配列をソートします。

*ビーズソート* は *重力ソート*とも呼ばれます。

アルゴリズムには O(S) があり、ここでの S は入力セット内の整数の合計です。各ビーズは個別に移動します。

これは、ビーズの下の空白を効率的に確認できるメカニズムなしにビーズソートが実装される場合で、例えばソフトウェアの実装などの場合があります。

# --hints--

`beadSort` は関数とします。

```js
assert(typeof beadSort == 'function');
```

`beadSort([25, 32, 12, 7, 20])` は配列を返す必要があります。

```js
assert(Array.isArray(beadSort([25, 32, 12, 7, 20])));
```

`beadSort([25, 32, 12, 7, 20])` は `[7, 12, 20, 25, 32]` を返す必要があります。

```js
assert.deepEqual(beadSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`beadSort([38, 45, 35, 8, 13])` は `[8, 13, 35, 38, 45]` を返す必要があります。

```js
assert.deepEqual(beadSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`beadSort([43, 36, 20, 34, 24])` は `[20, 24, 34, 36, 43]` を返す必要があります。

```js
assert.deepEqual(beadSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`beadSort([12, 33, 26, 18, 1, 16, 38])` は `[1, 12, 16, 18, 26, 33, 38]` を返す必要があります。

```js
assert.deepEqual(beadSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`beadSort([3, 39, 48, 16, 1, 4, 29])` は `[1, 3, 4, 16, 29, 39, 48]` を返す必要があります。

```js
assert.deepEqual(beadSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function beadSort(arr) {

}
```

# --solutions--

```js
function beadSort(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  var grid = new Array(arr.length);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(max);
  }
  var levelcount = new Array(max);
  levelcount.fill(0);
  for (var i = 0; i < max; i++) {
    levelcount[i] = 0;
    for (var j = 0; j < arr.length; j++) grid[j][i] = '_';
  }
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    for (var j = 0; num > 0; j++) {
      grid[levelcount[j]++][j] = '*';
      num--;
    }
  }
  var sorted = new Array(arr.length);
  sorted.fill(0);
  for (var i = 0; i < arr.length; i++) {
    var putt = 0;
    for (
      var j = 0;
      j < max &&
      (function(c) {
        return c.charCodeAt == null ? c : c.charCodeAt(0);
      })(grid[arr.length - 1 - i][j]) == '*'.charCodeAt(0);
      j++
    )
      putt++;
    sorted[i] = putt;
  }
  return sorted;
}
```
