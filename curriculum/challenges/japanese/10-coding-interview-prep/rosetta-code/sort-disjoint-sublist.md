---
id: 5a23c84252665b21eecc8000
title: ばらばらのリストの一部をソートする
challengeType: 1
forumTopicId: 302307
dashedName: sort-disjoint-sublist
---

# --description--

値のリストとその値リストに対する整数インデックスのセットが与えられている場合、今回のタスクでは、指定されたインデックスの値をソートしますが、ソートされるもの以外のインデックスの値はそのままとします。

次の値とインデックスのセットで関数を動作させます。

<code>values: [7, <b>6</b>, 5, 4, 3, 2, <b>1</b>, <b>0</b>]</code>

```js
indices(0-based): {6, 1, 7}
```

正しい結果は次のとおりです。

<code>[7, <b>0</b>, 5, 4, 3, 2, <b>1</b>, <b>6</b>]</code>.

# --hints--

`sortDisjoint` は関数とします。

```js
assert(typeof sortDisjoint == 'function');
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` は配列を返す必要があります。

```js
assert(Array.isArray(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])));
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` は `[7, 0, 5, 4, 3, 2, 1, 6]` を返す必要があります。

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7]), [
  7,
  0,
  5,
  4,
  3,
  2,
  1,
  6
]);
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6])` は `[7, 1, 2, 4, 3, 5, 6, 0]` を返す必要があります。

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6]), [
  7,
  1,
  2,
  4,
  3,
  5,
  6,
  0
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7])` は `[8, 1, 6, 5, 4, 3, 2, 7]` を返す必要があります。

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7]), [
  8,
  1,
  6,
  5,
  4,
  3,
  2,
  7
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6])` は `[8, 2, 6, 3, 4, 5, 7, 1]` を返す必要があります。

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6]), [
  8,
  2,
  6,
  3,
  4,
  5,
  7,
  1
]);
```

`sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4])` は `[6, 1, 7, 1, 3, 5, 6]` を返す必要があります。

```js
assert.deepEqual(sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4]), [
  6,
  1,
  7,
  1,
  3,
  5,
  6
]);
```

# --seed--

## --seed-contents--

```js
function sortDisjoint(values, indices) {

}
```

# --solutions--

```js
function sortDisjoint(values, indices) {
  let sublist = [];

  indices.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    sublist.push(values[indices[i]]);
  }

  sublist.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = sublist[i];
  }

  return values;
}
```
